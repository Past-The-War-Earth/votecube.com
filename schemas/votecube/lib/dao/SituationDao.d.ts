import { BaseSituationDao, ISituation } from "../generated/generated";
import { IRepositoryIdentifier } from '../client/types';
export interface ISituationDao {
    findByRepositoryUuId(repositorySource: string, situationReposioryUuid: string): Promise<ISituation>;
    saveExistingSituation(situation: ISituation): Promise<IRepositoryIdentifier>;
    saveNewSituation(situation: ISituation): Promise<IRepositoryIdentifier>;
}
export declare class SituationDao extends BaseSituationDao implements ISituationDao {
    findByRepositoryUuId(repositorySource: string, situationReposioryUuid: string): Promise<ISituation>;
    saveExistingSituation(situation: ISituation): Promise<IRepositoryIdentifier>;
    saveNewSituation(situation: ISituation): Promise<IRepositoryIdentifier>;
}
//# sourceMappingURL=SituationDao.d.ts.map