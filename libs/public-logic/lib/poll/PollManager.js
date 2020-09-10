"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const relational_db_1 = require("@votecube/relational-db");
const tokens_1 = require("../tokens");
class PollManager {
    constructor() {
        this.currRevision = {
            // doc: null,
            form: null,
            originalUi: null,
            ui: null,
            uiDelta: null,
        };
        /*
        private async convertDocs<In, Out>(
            docs: In[]
        ): Promise<Out[]> {
            const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS)
    
            const data = docs.map(
                doc => this.convertADoc<In, Out>(doc, dbConverter, dbUtils))
    
            return data
        }
    
        private async convertDoc<In, Out>(
            doc: In
        ): Promise<Out> {
            const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS)
    
            const data = this.convertADoc<In, Out>(doc, dbConverter, dbUtils)
    
            return data
        }
    
        private convertADoc<In, Out>(
            doc: In,
            dbConverter: IDbConverter,
            dbUtils: IDbUtils
        ): Out {
            const data: Out = dbConverter.fromDb(doc, dbUtils.subPollProps, dbUtils.excludedProps)
    
            return data
        }
         */
    }
    get currentRevision() {
        return this.currRevision;
    }
    async getAllPolls() {
        // const pollDao = await container(this).get(POLL_DAO)
        //
        // const pollDocs = await pollDao.getAll()
        //
        // return await this.convertDocs(pollDocs)
        return [];
    }
    async getChildRevisionListings(pollId, revisionId) {
        // const pollDao = await container(this).get(POLL_DAO)
        //
        // const revisionDocs =
        // 	      await pollDao.getChildRevisionListings(pollId, revisionId)
        //
        // return await this.convertDocs(revisionDocs)
        return [];
    }
    async getPollsForTheme(themeId) {
        // const pollDao = await container(this).get(POLL_DAO)
        //
        // const pollDocs = await pollDao.getForTheme(themeId)
        //
        // return await this.convertDocs(pollDocs)
        return [];
    }
    async getRevision(pollId, pollRevisionId) {
        if (!pollId) {
            // this.currRevision.doc = null
            return this.currRevision.ui;
        }
        if (this.currRevision.ui
            && this.currRevision.ui.pollId === pollId
            && this.currRevision.ui.id === pollRevisionId) {
            return this.currRevision.ui;
        }
        return null;
        // const pollDao = await container(this).get(POLL_DAO)
        //
        // const doc = await pollDao.getRevision(pollId, pollRevisionId)
        //
        // const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS)
        //
        // const ui: any = dbConverter.fromDb(doc, dbUtils.subPollProps, dbUtils.excludedProps)
        //
        // const originalUi = dbUtils.copy(ui)
        //
        // this.currRevision = {
        // 	doc,
        // 	originalUi,
        // 	ui
        // }
        //
        // return ui
    }
    async getRevisionListing(pollId, revisionId) {
        // const pollDao = await container(this).get(POLL_DAO)
        //
        // const revisionDoc =
        // 	      await pollDao.getRevisionListing(pollId, revisionId)
        //
        // return await this.convertDoc(revisionDoc)
        return null;
    }
    async mergeForm() {
        const form = this.currRevision.form;
        if (!form) {
            return;
        }
        const [pollFormManager, logicUtils] = await di_1.container(this).get(tokens_1.POLL_FORM_MANAGER, tokens_1.LOGIC_UTILS);
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
            logicUtils.copyProperties(oldUi, ui, [
                'createdAt',
                'pollId',
                'rootRevisionId',
                'userId'
            ]);
        }
        this.currRevision.ui = ui;
        this.currRevision.uiDelta = uiDelta;
    }
    async saveCurrentRevision(user) {
        const originalUi = this.currRevision.originalUi;
        const ui = this.currRevision.ui;
        const delta = this.currRevision.uiDelta;
        const logicUtils = await di_1.container(this).get(tokens_1.LOGIC_UTILS);
        logicUtils.setDeltas(originalUi, ui, delta);
        const converter = await di_1.container(this).get(tokens_1.POLL_REVISION_CONVERTER);
        // const response = await fetch('/add/poll/0/0', {
        // 	method: 'POST',
        // 	// headers: {
        // 	// 	'Content-Type': 'application/json'
        // 	// },
        // 	body: JSON.stringify(data) // body data type must match "Content-Type" header
        // })
        //
        // await response.json()
        const dbObject = converter.uiToDb(ui
        // , delta
        );
        const pollDao = await di_1.container(this).get(relational_db_1.POLL_DAO);
        await pollDao.createNew(dbObject, user);
        this.currRevision = {
            form: null,
            originalUi: null,
            ui: null,
            uiDelta: null,
        };
    }
}
exports.PollManager = PollManager;
di_1.DI.set(tokens_1.POLL_MANAGER, PollManager);
//# sourceMappingURL=PollManager.js.map