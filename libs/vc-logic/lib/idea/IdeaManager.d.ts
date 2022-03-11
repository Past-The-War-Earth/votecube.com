import { IFieldGroup } from '@votecube/forms';
import { IUiAgreement, IUiIdea, IUiLabel } from '@votecube/model';
import { IRepositoryIdentifier, IIdea, IdeaApiClient } from '@votecube/votecube';
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
    ideaApi: IdeaApiClient;
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