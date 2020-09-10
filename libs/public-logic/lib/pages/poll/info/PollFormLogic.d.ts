import { IFieldGroup, IFormFactory } from '@votecube/forms';
import { IStoredRevision } from '../../../poll/PollManager';
export interface IPollFormLogic {
    getPollForm(currentRevision: IStoredRevision, trackOriginal: boolean, touch: boolean, text: any, formFactory: IFormFactory): Promise<IFieldGroup>;
}
export declare class PollFormLogic implements IPollFormLogic {
    getPollForm(currentRevision: IStoredRevision, trackOriginal: boolean, touch: boolean, text: any, formFactory: IFormFactory): Promise<IFieldGroup>;
    private createPollForm;
    private createFactorForm;
}
