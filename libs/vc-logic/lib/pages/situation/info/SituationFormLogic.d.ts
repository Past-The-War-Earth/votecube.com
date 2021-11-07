import { IFieldGroup, IFormFactory } from '@votecube/forms';
import { ICachedSituation } from '../../../situation/SituationManager';
export interface ISituationFormLogic {
    getPollForm(currentRevision: ICachedSituation, trackOriginal: boolean, touch: boolean, text: any, formFactory: IFormFactory): Promise<IFieldGroup>;
}
export declare class SituationFormLogic implements ISituationFormLogic {
    getPollForm(currentRevision: ICachedSituation, trackOriginal: boolean, touch: boolean, text: any, formFactory: IFormFactory): Promise<IFieldGroup>;
    private createPollForm;
    private findOutcomeMatches;
    private findFactorMatches;
    private findPositionMatches;
    private createFactorForm;
}
//# sourceMappingURL=SituationFormLogic.d.ts.map