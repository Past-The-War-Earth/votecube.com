import { container, DI } from '@airport/di';
import { DB_CONVERTER, DB_UTILS, POLL_DAO } from '@votecube/public-db';
import { CUBE_LOGIC, LOGIC_UTILS, POLL_FORM_MANAGER, POLL_MANAGER } from '../tokens';
export class PollManager {
    constructor() {
        this.currVariation = {
            doc: null,
            form: null,
            originalUi: null,
            ui: null,
            uiDelta: null,
        };
    }
    get currentVariation() {
        return this.currVariation;
    }
    async getAllPolls() {
        const pollDao = await container(this).get(POLL_DAO);
        const pollDocs = await pollDao.getAll();
        return await this.convertDocs(pollDocs);
    }
    async getChildVariationListings(pollId, variationId) {
        const pollDao = await container(this).get(POLL_DAO);
        const variationDocs = await pollDao.getChildVariationListings(pollId, variationId);
        return await this.convertDocs(variationDocs);
    }
    async getPollsForTheme(themeId) {
        const pollDao = await container(this).get(POLL_DAO);
        const pollDocs = await pollDao.getForTheme(themeId);
        return await this.convertDocs(pollDocs);
    }
    async getVariation(pollId, variationId) {
        if (!pollId) {
            this.currVariation.doc = null;
            return this.currVariation.ui;
        }
        if (this.currVariation.ui
            && this.currVariation.ui.pollId === pollId
            && this.currVariation.ui.id === variationId) {
            return this.currVariation.ui;
        }
        const pollDao = await container(this).get(POLL_DAO);
        const doc = await pollDao.getVariation(pollId, variationId);
        const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS);
        const ui = dbConverter.fromDb(doc, dbUtils.subPollProps, dbUtils.excludedProps);
        const originalUi = dbUtils.copy(ui);
        this.currVariation = {
            doc,
            originalUi,
            ui
        };
        return ui;
    }
    async getVariationListing(pollId, variationId) {
        const pollDao = await container(this).get(POLL_DAO);
        const variationDoc = await pollDao.getVariationListing(pollId, variationId);
        return await this.convertDoc(variationDoc);
    }
    async mergeForm() {
        const form = this.currVariation.form;
        if (!form) {
            return;
        }
        const [pollFormManager, logicUtils, dbUtils] = await container(this).get(POLL_FORM_MANAGER, LOGIC_UTILS, DB_UTILS);
        const ui = pollFormManager.fromForm(form.value);
        const uiDelta = pollFormManager.fromForm(form.changeFlags);
        const oldUi = this.currVariation.ui;
        if (oldUi) {
            logicUtils.overlay(oldUi, ui);
        }
        else {
            const cubeLogic = await container(this).get(CUBE_LOGIC);
            logicUtils.overlay({
                factors: cubeLogic.getPollFactorPositionDefault()
            }, ui);
        }
        if (oldUi) {
            logicUtils.copyProperties(oldUi, ui, dbUtils.subPollProps);
        }
        this.currVariation.ui = ui;
        this.currVariation.uiDelta = uiDelta;
    }
    async saveCurrentVariation(user) {
        const originalUi = this.currVariation.originalUi;
        const ui = this.currVariation.ui;
        const delta = this.currVariation.uiDelta;
        const [dbUtils, logicUtils] = await container(this).get(DB_UTILS, LOGIC_UTILS);
        logicUtils.setDeltas(originalUi, ui, delta);
        const dbConverter = await container(this).get(DB_CONVERTER);
        const dbObject = dbConverter.toVersionedDb(ui, delta, this.currVariation.doc, dbUtils.subPollProps);
        const pollDao = await container(this).get(POLL_DAO);
        await pollDao.save(dbObject, user);
        this.currVariation = {
            doc: null,
            form: null,
            originalUi: null,
            ui: null,
            uiDelta: null,
        };
    }
    async convertDocs(docs) {
        const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS);
        const data = docs.map(doc => this.convertADoc(doc, dbConverter, dbUtils));
        return data;
    }
    async convertDoc(doc) {
        const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS);
        const data = this.convertADoc(doc, dbConverter, dbUtils);
        return data;
    }
    convertADoc(doc, dbConverter, dbUtils) {
        const data = dbConverter.fromDb(doc, dbUtils.subPollProps, dbUtils.excludedProps);
        return data;
    }
}
DI.set(POLL_MANAGER, PollManager);
//# sourceMappingURL=PollManager.js.map