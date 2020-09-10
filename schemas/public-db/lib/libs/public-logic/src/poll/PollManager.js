"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const public_db_1 = require("@votecube/public-db");
const tokens_1 = require("../tokens");
class PollManager {
    constructor() {
        this.currRevision = {
            doc: null,
            form: null,
            originalUi: null,
            ui: null,
            uiDelta: null,
        };
    }
    get currentRevision() {
        return this.currRevision;
    }
    async getAllPolls() {
        const pollDao = await di_1.container(this).get(public_db_1.POLL_DAO);
        const pollDocs = await pollDao.getAll();
        return await this.convertDocs(pollDocs);
    }
    async getChildRevisionListings(pollId, revisionId) {
        const pollDao = await di_1.container(this).get(public_db_1.POLL_DAO);
        const revisionDocs = await pollDao.getChildRevisionListings(pollId, revisionId);
        return await this.convertDocs(revisionDocs);
    }
    async getPollsForTheme(themeId) {
        const pollDao = await di_1.container(this).get(public_db_1.POLL_DAO);
        const pollDocs = await pollDao.getForTheme(themeId);
        return await this.convertDocs(pollDocs);
    }
    async getRevision(pollId, revisionId) {
        if (!pollId) {
            this.currRevision.doc = null;
            return this.currRevision.ui;
        }
        if (this.currRevision.ui
            && this.currRevision.ui.pollId === pollId
            && this.currRevision.ui.id === revisionId) {
            return this.currRevision.ui;
        }
        const pollDao = await di_1.container(this).get(public_db_1.POLL_DAO);
        const doc = await pollDao.getRevision(pollId, revisionId);
        const [dbConverter, dbUtils] = await di_1.container(this).get(public_db_1.DB_CONVERTER, public_db_1.DB_UTILS);
        const ui = dbConverter.fromDb(doc, dbUtils.subPollProps, dbUtils.excludedProps);
        const originalUi = dbUtils.copy(ui);
        this.currRevision = {
            doc,
            originalUi,
            ui
        };
        return ui;
    }
    async getRevisionListing(pollId, revisionId) {
        const pollDao = await di_1.container(this).get(public_db_1.POLL_DAO);
        const revisionDoc = await pollDao.getRevisionListing(pollId, revisionId);
        return await this.convertDoc(revisionDoc);
    }
    async mergeForm() {
        const form = this.currRevision.form;
        if (!form) {
            return;
        }
        const [pollFormManager, logicUtils, dbUtils] = await di_1.container(this).get(tokens_1.POLL_FORM_MANAGER, tokens_1.LOGIC_UTILS, public_db_1.DB_UTILS);
        const ui = pollFormManager.fromForm(form.value);
        const uiDelta = pollFormManager.fromForm(form.changeFlags);
        const oldUi = this.currRevision.ui;
        if (oldUi) {
            logicUtils.overlay(oldUi, ui);
        }
        else {
            const cubeLogic = await di_1.container(this).get(tokens_1.CUBE_LOGIC);
            logicUtils.overlay({
                factors: cubeLogic.getPollFactorPositionDefault()
            }, ui);
        }
        if (oldUi) {
            logicUtils.copyProperties(oldUi, ui, dbUtils.subPollProps);
        }
        this.currRevision.ui = ui;
        this.currRevision.uiDelta = uiDelta;
    }
    async saveCurrentRevision(user) {
        const originalUi = this.currRevision.originalUi;
        const ui = this.currRevision.ui;
        const delta = this.currRevision.uiDelta;
        const [dbUtils, logicUtils] = await di_1.container(this).get(public_db_1.DB_UTILS, tokens_1.LOGIC_UTILS);
        logicUtils.setDeltas(originalUi, ui, delta);
        const dbConverter = await di_1.container(this).get(public_db_1.DB_CONVERTER);
        const dbObject = dbConverter.toVersionedDb(ui, delta, this.currRevision.doc, dbUtils.subPollProps);
        const pollDao = await di_1.container(this).get(public_db_1.POLL_DAO);
        await pollDao.save(dbObject, user);
        this.currRevision = {
            doc: null,
            form: null,
            originalUi: null,
            ui: null,
            uiDelta: null,
        };
    }
    async convertDocs(docs) {
        const [dbConverter, dbUtils] = await di_1.container(this).get(public_db_1.DB_CONVERTER, public_db_1.DB_UTILS);
        const data = docs.map(doc => this.convertADoc(doc, dbConverter, dbUtils));
        return data;
    }
    async convertDoc(doc) {
        const [dbConverter, dbUtils] = await di_1.container(this).get(public_db_1.DB_CONVERTER, public_db_1.DB_UTILS);
        const data = this.convertADoc(doc, dbConverter, dbUtils);
        return data;
    }
    convertADoc(doc, dbConverter, dbUtils) {
        const data = dbConverter.fromDb(doc, dbUtils.subPollProps, dbUtils.excludedProps);
        return data;
    }
}
exports.PollManager = PollManager;
di_1.DI.set(tokens_1.POLL_MANAGER, PollManager);
//# sourceMappingURL=PollManager.js.map