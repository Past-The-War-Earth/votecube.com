import { BaseSituationDao, ISituation } from "../generated/generated";
import { Situation } from "../ddl/ddl";
export interface ISituationDao {
    findByRepositoryUuId(repositorySource: string, situationReposioryUuid: string): Promise<Situation>;
    saveSituation(situation: ISituation): Promise<void>;
}
export declare class SituationDao extends BaseSituationDao {
    findByRepositoryUuId(repositorySource: string, situationReposioryUuid: string): Promise<ISituation>;
    saveSituation(repositoryDestination: string, situation: ISituation): Promise<void>;
}
//# sourceMappingURL=SituationDao.d.ts.map