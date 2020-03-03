import { IFieldGroup, IFormFactory } from '@votecube/forms';
import { IStoredVariation } from '../../../poll/PollManager';
export interface IPollFormLogic {
    getPollForm(currentVariation: IStoredVariation, trackOriginal: boolean, touch: boolean, text: any, formFactory: IFormFactory): Promise<IFieldGroup>;
}
export declare class PollFormLogic implements IPollFormLogic {
    getPollForm(currentVariation: IStoredVariation, trackOriginal: boolean, touch: boolean, text: any, formFactory: IFormFactory): Promise<IFieldGroup>;
    private createPollForm;
    private createFactorForm;
}
