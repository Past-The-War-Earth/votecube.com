"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const firebase = require("firebase/app");
const tokens_1 = require("../../tokens");
class PollDao {
    async addTemp(poll) {
        this.tempRevision = poll;
    }
    async getAll() {
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
        const result = await schema.pollDrafts.reference
            .orderBy('createdAt.m', 'desc')
            .get();
        return result.docs.map(doc => doc.data());
    }
    async getForTheme(themeId) {
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
        const result = await schema.pollDrafts.reference
            .where('theme.id.v', '==', themeId)
            .orderBy('createdAt.m', 'desc')
            .get();
        return result.docs.map(doc => doc.data());
    }
    async getRevision(pollId, revisionId) {
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
        return await this.getOne(schema.pollDrafts.pollRevisions(pollId).doc(revisionId));
    }
    async getRevisionListing(pollId, revisionId) {
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
        const result = await schema.pollDrafts.pollRevisionListings(pollId)
            .reference.where('id', '==', revisionId)
            .get();
        const records = result.docs.map(doc => doc.data());
        if (!records.length) {
            return null;
        }
        return records[0];
    }
    async getChildRevisionListings(pollId, revisionId) {
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
        const result = await schema.pollDrafts.pollRevisionListings(pollId)
            .reference.where('parent.id', '==', revisionId)
            .orderBy('createdAt.m', 'desc')
            .get();
        return result.docs.map(doc => doc.data());
    }
    async save(revisionIn, user) {
        const revisionOnly = !!revisionIn.pollId;
        const revision = await this.setupRevision(revisionIn, user);
        const poll = await this.setupPoll(revision, user);
        try {
            const [dbUtils, schema] = await di_1.container(this).get(tokens_1.DB_UTILS, tokens_1.SCHEMA);
            await schema.db.runTransaction(async (transaction) => {
                const { pollRef, revisionRef } = revisionOnly
                    ? await this.getRefs(revision)
                    : await this.prepPollAndGetRefs(poll);
                poll.id = pollRef.id;
                revision.pollId = poll.id;
                revision.id = revisionRef.id;
                const revisionListing = this.setupRevisionListing(poll, revision);
                const revisionListingRef = schema.pollDrafts.pollRevisionListings(pollRef)
                    .doc(revision.id);
                const outcomeFactorsAndPositionsFts = await this.addOutcomesFactorsAndPositions(poll, revisionOnly, revision, user, transaction, dbUtils);
                this.copyFtsProps(outcomeFactorsAndPositionsFts, poll.fts);
                revision.fts = poll.fts;
                revisionListing.fts = poll.fts;
                await transaction.set(revisionRef, revision);
                await transaction.set(revisionListingRef, revisionListing);
                if (!revisionOnly) {
                    await transaction.set(pollRef, poll);
                }
                delete this.tempRevision;
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
    async setupRevision(revisionIn, user) {
        const date = new Date();
        const dateString = date.toString();
        const timezone = dateString.split('(')[1].split(')')[0];
        const createdAt = {
            m: date.getTime(),
            o: date.getTimezoneOffset(),
            s: firebase.firestore.FieldValue.serverTimestamp(),
            z: timezone
        };
        const revision = Object.assign(Object.assign({}, revisionIn), { createdAt, userId: user.id });
        const dbUtils = await di_1.container(this).get(tokens_1.DB_UTILS);
        dbUtils.calculateWaterMarks(revision);
        return revision;
    }
    async setupPoll(revision, user) {
        const factors = {
            1: undefined,
            2: undefined,
            3: undefined
        };
        const dbUtils = await di_1.container(this).get(tokens_1.DB_UTILS);
        const poll = {
            ageSuitability: dbUtils.copy(revision.ageSuitability),
            createdAt: revision.createdAt,
            factors,
            fts: undefined,
            id: undefined,
            name: dbUtils.copy(revision.name),
            outcomes: undefined,
            rootRevisionId: revision.id,
            theme: dbUtils.copy(revision.theme),
            userId: user.id
        };
        const fts = await dbUtils.getFtsProps(poll);
        const outcomes = dbUtils.copy(revision.outcomes);
        for (const factorNumber in revision.factors) {
            if (factorNumber === 'marks') {
                continue;
            }
            const revisionFactor = revision.factors[factorNumber];
            factors[factorNumber] = {
                axis: dbUtils.copy(revisionFactor.axis),
                color: dbUtils.copy(revisionFactor.color),
                name: dbUtils.copy(revisionFactor.name)
            };
        }
        poll.outcomes = outcomes;
        poll.fts = fts;
        return poll;
    }
    setupRevisionListing(poll, revision) {
        return Object.assign(Object.assign({}, poll), { depth: revision.depth, id: revision.id, parent: revision.parent, path: revision.path, pollId: revision.pollId });
    }
    async getRefs(revision) {
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
        const pollRef = schema.pollDrafts.doc(revision.pollId);
        const revisionRef = schema.pollDrafts.pollRevisions(pollRef).reference.doc();
        return {
            pollRef,
            revisionRef
        };
    }
    async prepPollAndGetRefs(poll) {
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
        const pollRef = schema.pollDrafts.doc();
        poll.id = pollRef.id;
        const revisionRef = schema.pollDrafts.pollRevisions(pollRef).doc();
        poll.rootRevisionId = revisionRef.id;
        return {
            pollRef,
            revisionRef
        };
    }
    async addOutcomesFactorsAndPositions(poll, pollExists, revision, user, transaction, dbUtils) {
        const outcomeFactorsAndPositionsFts = {};
        const outcomeAfts = await this.addOutcome(poll.outcomes.A, poll, pollExists, user, transaction, dbUtils);
        const outcomeBfts = await this.addOutcome(poll.outcomes.B, poll, pollExists, user, transaction, dbUtils);
        const factor1fts = await this.addFactor(revision.factors[1], poll, pollExists, user, transaction, dbUtils);
        const factor2fts = await this.addFactor(revision.factors[2], poll, pollExists, user, transaction, dbUtils);
        const factor3fts = await this.addFactor(revision.factors[3], poll, pollExists, user, transaction, dbUtils);
        this.copyFtsProps(outcomeAfts, outcomeFactorsAndPositionsFts);
        this.copyFtsProps(outcomeBfts, outcomeFactorsAndPositionsFts);
        this.copyFtsProps(factor1fts, outcomeFactorsAndPositionsFts);
        this.copyFtsProps(factor2fts, outcomeFactorsAndPositionsFts);
        this.copyFtsProps(factor3fts, outcomeFactorsAndPositionsFts);
        return outcomeFactorsAndPositionsFts;
    }
    async addOutcome(outcome, poll, pollExists, user, transaction, dbUtils) {
        const outcomeExists = !!outcome.id;
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
        const { fts, ref } = await this.addResource(outcome, schema.outcomes, user, transaction, [], dbUtils);
        await this.addManyToManyResource(schema.outcomes.outcomePolls(ref), outcome, 'outcome', outcomeExists, poll, pollExists, user, transaction);
        return fts;
    }
    async addFactor(factor, poll, pollExists, user, transaction, dbUtils) {
        const factorExists = !!factor.id;
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
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
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
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
exports.PollDao = PollDao;
di_1.DI.set(tokens_1.POLL_DAO, PollDao);
//# sourceMappingURL=PollDao.js.map