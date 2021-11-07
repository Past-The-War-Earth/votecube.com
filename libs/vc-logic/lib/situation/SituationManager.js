import { container, DI } from '@airport/di';
import { SituationApiClient } from '@votecube/votecube';
import { CUBE_LOGIC, LOGIC_UTILS, SITUATION_FORM_MANAGER, SITUATION_MANAGER, SITUATION_CONVERTER } from '../tokens';
export class SituationManager {
    constructor() {
        this.situationApi = new SituationApiClient();
        this.theCachedSituation = {
            form: null,
            originalUi: null,
            ui: null,
        };
    }
    get cachedSituation() {
        return this.theCachedSituation;
    }
    async getSituation(repositoryUuId) {
        return null;
    }
    async getAllSituations() {
        return [];
    }
    async getSituationsForCategory(category) {
        return [];
    }
    async getLeafSituations(stemSituationRepositoryUuId) {
        return [];
    }
    async getStemSituation(leafSituationUuId) {
        return null;
    }
    async mergeForm() {
        const form = this.cachedSituation.form;
        if (!form) {
            return;
        }
        const [situationFormManager, logicUtils] = await container(this).get(SITUATION_FORM_MANAGER, LOGIC_UTILS);
        const ui = situationFormManager
            .fromForm(form.value, this.cachedSituation.ui);
        const oldUiSituation = this.cachedSituation.ui;
        if (oldUiSituation) {
            logicUtils.overlay(oldUiSituation, ui);
        }
        else {
            const cubeLogic = await container(this).get(CUBE_LOGIC);
            logicUtils.overlay({
                factors: cubeLogic.getSituationFactorPositionDefault()
            }, ui);
        }
        if (oldUiSituation) {
            logicUtils.copyProperties(oldUiSituation, ui, [
                'actorId',
                'actorRecordId',
                'ageSuitability',
                'repositoryId',
                'repositoryUuId',
            ]);
            if (oldUiSituation.parent) {
                if (!ui.parent) {
                    ui.parent = {};
                }
                logicUtils.copyProperties(oldUiSituation.parent, ui.parent, [
                    'actorId',
                    'actorRecordId',
                    'ageSuitability',
                    'repositoryId',
                    'repositoryUuId',
                ]);
            }
        }
        this.cachedSituation.ui = ui;
    }
    async saveSituation(situation) {
        const originalUi = this.cachedSituation.originalUi;
        const ui = this.cachedSituation.ui;
        const logicUtils = await container(this).get(LOGIC_UTILS);
        if (!logicUtils.isDifferent(originalUi, ui)) {
            return;
        }
        const converter = await container(this).get(SITUATION_CONVERTER);
        const dbSituation = converter.uiToDb(ui);
        await this.situationApi.saveSituation(dbSituation);
        this.theCachedSituation = {
            form: null,
            originalUi: null,
            ui: null,
        };
    }
}
DI.set(SITUATION_MANAGER, SituationManager);
//# sourceMappingURL=SituationManager.js.map