import { IFieldGroup } from '@votecube/forms';
import { IUiAgreement, IUiIdea, IUiLabel } from '@votecube/model';
import { IIdea, IdeaApi } from '@votecube/votecube';
import { ILogicUtils } from '../LogicUtils';
import { IIdeaConverter } from '../converter/IdeaConverter';
import { IIdeaFormManager } from '../pages/idea/IdeaFormManager';
import { ICubeLogic } from './CubeLogic';
export interface IPageAgreement extends IUiAgreement {
    changeMillis?: number;
}
export interface IIdeaManager {
    cachedIdea: ICachedIdea;
    getIdea(hostingPlatform: string, repositoryUuId: string): Promise<IUiIdea>;
    getAllIdeas(): Promise<IUiIdea[]>;
    getIdeasForCategory(category: IUiLabel): Promise<IUiIdea[]>;
    getLeafIdeas(stemIdeaRepositoryUuId: string): Promise<IUiIdea[]>;
    getStemIdea(leafIdeaUuId: string): Promise<IUiIdea>;
    mergeForm(): Promise<void>;
    saveIdea(idea: IUiIdea, createNewRepository: boolean): Promise<IRepositoryIdentifier>;
    saveCachedIdea(user: any, createNewRepository: boolean): Promise<IRepositoryIdentifier>;
}
export interface ICachedIdea {
    db: IIdea;
    form?: IFieldGroup;
    originalUi: IUiIdea;
    ui: IUiIdea;
}
export declare class IdeaManager implements IIdeaManager {
    cubeLogic: ICubeLogic;
    logicUtils: ILogicUtils;
    ideaFormManager: IIdeaFormManager;
    ideaConverter: IIdeaConverter;
    ideaApi: IdeaApi;
    private theCachedIdea;
    get cachedIdea(): ICachedIdea;
    getIdea(hostingPlatform: string, repositoryUuId: string): Promise<IUiIdea>;
    getAllIdeas(): Promise<IUiIdea[]>;
    getIdeasForCategory(category: IUiLabel): Promise<IUiIdea[]>;
    getLeafIdeas(stemIdeaRepositoryUuId: string): Promise<IUiIdea[]>;
    getStemIdea(leafIdeaUuId: string): Promise<IUiIdea>;
    mergeForm(): Promise<void>;
    publishIdea(idea: IUiIdea): Promise<void>;
    saveIdea(idea: IUiIdea, createNewRepository: boolean): Promise<IRepositoryIdentifier>;
    saveCachedIdea(user: any, createNewRepository: boolean): Promise<IRepositoryIdentifier>;
}
//# sourceMappingURL=IdeaManager.d.ts.map