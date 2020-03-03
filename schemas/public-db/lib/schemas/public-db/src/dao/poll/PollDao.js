import { container, DI } from '@airport/di';
import * as firebase from 'firebase/app';
import { DB_UTILS, POLL_DAO, SCHEMA } from '../../tokens';
export class PollDao {
    async addTemp(poll) {
        this.tempVariation = poll;
    }
    async getAll() {
        const schema = await container(this).get(SCHEMA);
        const result = await schema.pollDrafts.reference
            .orderBy('createdAt.m', 'desc')
            .get();
        return result.docs.map(doc => doc.data());
    }
    async getForTheme(themeId) {
        const schema = await container(this).get(SCHEMA);
        const result = await schema.pollDrafts.reference
            .where('theme.id.v', '==', themeId)
            .orderBy('createdAt.m', 'desc')
            .get();
        return result.docs.map(doc => doc.data());
    }
    async getVariation(pollId, variationId) {
        const schema = await container(this).get(SCHEMA);
        return await this.getOne(schema.pollDrafts.pollVariations(pollId).doc(variationId));
    }
    async getVariationListing(pollId, variationId) {
        const schema = await container(this).get(SCHEMA);
        const result = await schema.pollDrafts.pollVariationListings(pollId)
            .reference.where('id', '==', variationId)
            .get();
        const records = result.docs.map(doc => doc.data());
        if (!records.length) {
            return null;
        }
        return records[0];
    }
    async getChildVariationListings(pollId, variationId) {
        const schema = await container(this).get(SCHEMA);
        const result = await schema.pollDrafts.pollVariationListings(pollId)
            .reference.where('parent.id', '==', variationId)
            .orderBy('createdAt.m', 'desc')
            .get();
        return result.docs.map(doc => doc.data());
    }
    async save(variationIn, user) {
        const variationOnly = !!variationIn.pollId;
        const variation = await this.setupVariation(variationIn, user);
        const poll = await this.setupPoll(variation, user);
        try {
            const [dbUtils, schema] = await container(this).get(DB_UTILS, SCHEMA);
            await schema.db.runTransaction(async (transaction) => {
                const { pollRef, variationRef } = variationOnly
                    ? await this.getRefs(variation)
                    : await this.prepPollAndGetRefs(poll);
                poll.id = pollRef.id;
                variation.pollId = poll.id;
                variation.id = variationRef.id;
                const variationListing = this.setupVariationListing(poll, variation);
                const variationListingRef = schema.pollDrafts.pollVariationListings(pollRef)
                    .doc(variation.id);
                const outcomeFactorsAndPositionsFts = await this.addOutcomesFactorsAndPositions(poll, variationOnly, variation, user, transaction, dbUtils);
                this.copyFtsProps(outcomeFactorsAndPositionsFts, poll.fts);
                variation.fts = poll.fts;
                variationListing.fts = poll.fts;
                await transaction.set(variationRef, variation);
                await transaction.set(variationListingRef, variationListing);
                if (!variationOnly) {
                    await transaction.set(pollRef, poll);
                }
                delete this.tempVariation;
            });
        }
        catch (error) {
            alert(error);
        }
        finally {
            // Nothing to do
        }
        return poll;
    }
    async setupVariation(variationIn, user) {
        const date = new Date();
        const dateString = date.toString();
        const timezone = dateString.split('(')[1].split(')')[0];
        const createdAt = {
            m: date.getTime(),
            o: date.getTimezoneOffset(),
            s: firebase.firestore.FieldValue.serverTimestamp(),
            z: timezone
        };
        const variation = Object.assign(Object.assign({}, variationIn), { createdAt, userId: user.id });
        const dbUtils = await container(this).get(DB_UTILS);
        dbUtils.calculateWaterMarks(variation);
        return variation;
    }
    async setupPoll(variation, user) {
        const factors = {
            1: undefined,
            2: undefined,
            3: undefined
        };
        const dbUtils = await container(this).get(DB_UTILS);
        const poll = {
            ageSuitability: dbUtils.copy(variation.ageSuitability),
            createdAt: variation.createdAt,
            factors,
            fts: undefined,
            id: undefined,
            name: dbUtils.copy(variation.name),
            outcomes: undefined,
            rootVariationId: variation.id,
            theme: dbUtils.copy(variation.theme),
            userId: user.id
        };
        const fts = await dbUtils.getFtsProps(poll);
        const outcomes = dbUtils.copy(variation.outcomes);
        for (const factorNumber in variation.factors) {
            if (factorNumber === 'marks') {
                continue;
            }
            const variationFactor = variation.factors[factorNumber];
            factors[factorNumber] = {
                axis: dbUtils.copy(variationFactor.axis),
                color: dbUtils.copy(variationFactor.color),
                name: dbUtils.copy(variationFactor.name)
            };
        }
        poll.outcomes = outcomes;
        poll.fts = fts;
        return poll;
    }
    setupVariationListing(poll, variation) {
        return Object.assign(Object.assign({}, poll), { depth: variation.depth, id: variation.id, parent: variation.parent, path: variation.path, pollId: variation.pollId });
    }
    async getRefs(variation) {
        const schema = await container(this).get(SCHEMA);
        const pollRef = schema.pollDrafts.doc(variation.pollId);
        const variationRef = schema.pollDrafts.pollVariations(pollRef).reference.doc();
        return {
            pollRef,
            variationRef
        };
    }
    async prepPollAndGetRefs(poll) {
        const schema = await container(this).get(SCHEMA);
        const pollRef = schema.pollDrafts.doc();
        poll.id = pollRef.id;
        const variationRef = schema.pollDrafts.pollVariations(pollRef).doc();
        poll.rootVariationId = variationRef.id;
        return {
            pollRef,
            variationRef
        };
    }
    async addOutcomesFactorsAndPositions(poll, pollExists, variation, user, transaction, dbUtils) {
        const outcomeFactorsAndPositionsFts = {};
        const outcomeAfts = await this.addOutcome(poll.outcomes.A, poll, pollExists, user, transaction, dbUtils);
        const outcomeBfts = await this.addOutcome(poll.outcomes.B, poll, pollExists, user, transaction, dbUtils);
        const factor1fts = await this.addFactor(variation.factors[1], poll, pollExists, user, transaction, dbUtils);
        const factor2fts = await this.addFactor(variation.factors[2], poll, pollExists, user, transaction, dbUtils);
        const factor3fts = await this.addFactor(variation.factors[3], poll, pollExists, user, transaction, dbUtils);
        this.copyFtsProps(outcomeAfts, outcomeFactorsAndPositionsFts);
        this.copyFtsProps(outcomeBfts, outcomeFactorsAndPositionsFts);
        this.copyFtsProps(factor1fts, outcomeFactorsAndPositionsFts);
        this.copyFtsProps(factor2fts, outcomeFactorsAndPositionsFts);
        this.copyFtsProps(factor3fts, outcomeFactorsAndPositionsFts);
        return outcomeFactorsAndPositionsFts;
    }
    async addOutcome(outcome, poll, pollExists, user, transaction, dbUtils) {
        const outcomeExists = !!outcome.id;
        const schema = await container(this).get(SCHEMA);
        const { fts, ref } = await this.addResource(outcome, schema.outcomes, user, transaction, [], dbUtils);
        await this.addManyToManyResource(schema.outcomes.outcomePolls(ref), outcome, 'outcome', outcomeExists, poll, pollExists, user, transaction);
        return fts;
    }
    async addFactor(factor, poll, pollExists, user, transaction, dbUtils) {
        const factorExists = !!factor.id;
        const schema = await container(this).get(SCHEMA);
        const { fts, ref } = await this.addResource(factor, schema.factors, user, transaction, ['positions'], dbUtils);
        await this.addManyToManyResource(schema.factors.factorPolls(ref), factor, 'factor', factorExists, poll, pollExists, user, transaction);
        const positionAFts = await this.addPosition(factor.positions.A, ref, factor, factorExists, poll, pollExists, user, transaction, dbUtils);
        const positionBFts = await this.addPosition(factor.positions.B, ref, factor, factorExists, poll, pollExists, user, transaction, dbUtils);
        this.copyFtsProps(positionAFts, fts);
        this.copyFtsProps(positionBFts, fts);
        return fts;
    }
    copyFtsProps(from, to) {
        for (const fromProperty in from) {
            to[fromProperty] = true;
        }
    }
    async addManyToManyResource(collection, parent, parentName, parentExists, child, childExists, user, transaction) {
        const manyToManyRef = collection.doc(child.id);
        // If both factor and this poll existed before, check if this poll is already listed under
        // this factor
        let createManyToMany = true;
        if (parentExists && childExists) {
            const manyToManyDoc = await manyToManyRef.get();
            if (manyToManyDoc.exists) {
                createManyToMany = false;
            }
        }
        if (!createManyToMany) {
            return;
        }
        const manyToMany = Object.assign(Object.assign({}, child), { [parentName + 'Id']: parent.id });
        // manyToManyRef =
        await this.addResource(manyToMany, collection, user, transaction);
    }
    async addPosition(position, factorRef, factor, factorExists, poll, pollExists, user, transaction, dbUtils) {
        const positionExists = !!position.id;
        const schema = await container(this).get(SCHEMA);
        const { fts, ref } = await this.addResource(position, schema.positions, user, transaction, [], dbUtils);
        await this.addManyToManyResource(schema.positions.positionPolls(ref), position, 'position', positionExists, poll, pollExists, user, transaction);
        await this.addManyToManyResource(schema.factors.factorPositions(factorRef), factor, 'factor', factorExists, position, positionExists, user, transaction);
        return fts;
    }
    async addResource(resource, collection, user, transaction, propertiesToDelete = [], dbUtils) {
        let fts;
        if (dbUtils) {
            fts = await dbUtils.getFtsProps(resource);
        }
        if (resource.id) {
            return {
                fts,
                ref: collection.doc(resource.id)
            };
        }
        const resourceRef = collection.doc();
        resource.id = resourceRef.id;
        resource.userId = user.id;
        resource = Object.assign({}, resource);
        for (const propertyToDelete of propertiesToDelete) {
            delete resource[propertyToDelete];
        }
        if (dbUtils) {
            resource = Object.assign(Object.assign({}, resource), { fts });
        }
        await transaction.set(resourceRef, resource);
        return {
            fts,
            ref: resourceRef
        };
    }
    async getOne(docRef) {
        const doc = await docRef.get();
        if (doc.exists) {
            return doc.data();
        }
        return null;
    }
}
DI.set(POLL_DAO, PollDao);
//# sourceMappingURL=PollDao.js.map