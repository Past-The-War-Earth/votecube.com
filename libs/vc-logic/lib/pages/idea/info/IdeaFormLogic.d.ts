import { IFieldGroup, IFormFactory } from '@votecube/forms';
import { ICachedIdea } from '../../../idea/IdeaManager';
export interface IIdeaFormLogic {
    getIdeaForm(cachedIdea: ICachedIdea, trackOriginal: boolean, touch: boolean, text: any, formFactory: IFormFactory): Promise<IFieldGroup>;
}
export declare class IdeaFormLogic implements IIdeaFormLogic {
    getIdeaForm(cachedIdea: ICachedIdea, trackOriginal: boolean, touch: boolean, text: any, formFactory: IFormFactory): Promise<IFieldGroup>;
    private createIdeaForm;
    private findOutcomeMatches;
    private findFactorMatches;
    private findPositionMatches;
    private createFactorForm;
}
//# sourceMappingURL=IdeaFormLogic.d.ts.map