import { container, DI } from '@airport/di';
import { SituationApiClient } from '@votecube/votecube';
import { CUBE_LOGIC, LOGIC_UTILS, SITUATION_FORM_MANAGER, SITUATION_MANAGER, SITUATION_CONVERTER } from '../tokens';
export class SituationManager {
    constructor() {
        this.situationApi = new SituationApiClient();
        this.currSituation = {
            form: null,
            originalUi: null,
            ui: null,
        };
    }
    get currentRevision() {
        return this.currSituation;
    }
    async getSituationsForCategory(category) {
        return [];
    }
    async getLeafSituations(situation) {
        return [];
    }
    async getStemSituation(situation) {
        return null;
    }
    async mergeForm() {
        const form = this.currSituation.form;
        if (!form) {
            return;
        }
        const [situationFormManager, logicUtils] = await container(this).get(SITUATION_FORM_MANAGER, LOGIC_UTILS);
        const ui = situationFormManager
            .fromForm(form.value, this.currSituation.ui);
        const oldUi = this.currSituation.ui;
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
            logicUtils.copyProperties(oldUi, ui, [
                'createdAt',
                'pollId',
                'rootRevisionId',
                'userId'
            ]);
        }
        this.currSituation.ui = ui;
    }
    async saveSituation(situation) {
        const originalUi = this.currSituation.originalUi;
        const ui = this.currSituation.ui;
        const logicUtils = await container(this).get(LOGIC_UTILS);
        if (!logicUtils.isDifferent(originalUi, ui)) {
            return;
        }
        const converter = await container(this).get(SITUATION_CONVERTER);
        const dbSituation = converter.uiToDb(ui);
        await this.situationApi.saveSituation(dbSituation);
        this.currSituation = {
            form: null,
            originalUi: null,
            ui: null,
        };
    }
}
DI.set(SITUATION_MANAGER, SituationManager);
//# sourceMappingURL=SituationManager.js.map