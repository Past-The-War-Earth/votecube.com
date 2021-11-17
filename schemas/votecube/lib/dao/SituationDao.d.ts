import { BaseSituationDao, ISituation } from "../generated/generated";
export interface ISituationDao {
    findByRepositoryUuId(repositorySource: string, situationReposioryUuid: string): Promise<ISituation>;
    saveSituation(situation: ISituation): Promise<void>;
}
export declare class SituationDao extends BaseSituationDao implements ISituationDao {
    findByRepositoryUuId(repositorySource: string, situationReposioryUuid: string): Promise<ISituation>;
    saveSituation(situation: ISituation): Promise<void>;
}
//# sourceMappingURL=SituationDao.d.ts.map