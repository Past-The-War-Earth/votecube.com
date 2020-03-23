"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../tokens");
class PollManager {
    constructor() {
        this.currVariation = {
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
    get currentVariation() {
        return this.currVariation;
    }
    async getAllPolls() {
        // const pollDao = await container(this).get(POLL_DAO)
        //
        // const pollDocs = await pollDao.getAll()
        //
        // return await this.convertDocs(pollDocs)
        return [];
    }
    async getChildVariationListings(pollId, variationId) {
        // const pollDao = await container(this).get(POLL_DAO)
        //
        // const variationDocs =
        // 	      await pollDao.getChildVariationListings(pollId, variationId)
        //
        // return await this.convertDocs(variationDocs)
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
    async getVariation(pollId, variationId) {
        // if (!pollId) {
        // 	this.currVariation.doc = null
        //
        // 	return this.currVariation.ui
        // }
        //
        // if (this.currVariation.ui
        // 	&& this.currVariation.ui.pollId === pollId
        // 	&& this.currVariation.ui.id === variationId) {
        // 	return this.currVariation.ui
        // }
        //
        // const pollDao = await container(this).get(POLL_DAO)
        //
        // const doc = await pollDao.getVariation(pollId, variationId)
        //
        // const [dbConverter, dbUtils] = await container(this).get(DB_CONVERTER, DB_UTILS)
        //
        // const ui: any = dbConverter.fromDb(doc, dbUtils.subPollProps, dbUtils.excludedProps)
        //
        // const originalUi = dbUtils.copy(ui)
        //
        // this.currVariation = {
        // 	doc,
        // 	originalUi,
        // 	ui
        // }
        //
        // return ui
        return null;
    }
    async getVariationListing(pollId, variationId) {
        // const pollDao = await container(this).get(POLL_DAO)
        //
        // const variationDoc =
        // 	      await pollDao.getVariationListing(pollId, variationId)
        //
        // return await this.convertDoc(variationDoc)
        return null;
    }
    async mergeForm() {
        // const form = this.currVariation.form
        // if (!form) {
        // 	return
        // }
        //
        // const [pollFormManager, logicUtils, dbUtils] = await container(this).get(
        // 	POLL_FORM_MANAGER, LOGIC_UTILS, DB_UTILS)
        //
        // const ui: IVariationData       = pollFormManager.fromForm(form.value)
        // const uiDelta: IVariationDelta = pollFormManager.fromForm(form.changeFlags)
        //
        // const oldUi = this.currVariation.ui
        //
        // if (oldUi) {
        // 	logicUtils.overlay(oldUi, ui)
        // } else {
        // 	const cubeLogic = await container(this).get(CUBE_LOGIC)
        //
        // 	logicUtils.overlay({
        // 		factors: cubeLogic.getPollFactorPositionDefault()
        // 	}, ui)
        // }
        // if (oldUi) {
        // 	logicUtils.copyProperties(oldUi, ui, dbUtils.subPollProps)
        // }
        // this.currVariation.ui      = ui
        // this.currVariation.uiDelta = uiDelta
    }
    async saveCurrentVariation(user) {
        // const originalUi = this.currVariation.originalUi
        // const ui         = this.currVariation.ui
        // const delta      = this.currVariation.uiDelta
        //
        // const [dbUtils, logicUtils] = await container(this).get(DB_UTILS, LOGIC_UTILS)
        //
        // logicUtils.setDeltas(originalUi, ui, delta)
        //
        // const dbConverter = await container(this).get(DB_CONVERTER)
        //
        // const dbObject = dbConverter.toVersionedDb(ui, delta,
        // 	this.currVariation.doc, dbUtils.subPollProps)
        //
        // const pollDao = await container(this).get(POLL_DAO)
        //
        // await pollDao.save(dbObject, user)
        //
        // this.currVariation = {
        // 	doc: null,
        // 	form: null,
        // 	originalUi: null,
        // 	ui: null,
        // 	uiDelta: null,
        // }
    }
}
exports.PollManager = PollManager;
di_1.DI.set(tokens_1.POLL_MANAGER, PollManager);
//# sourceMappingURL=PollManager.js.map