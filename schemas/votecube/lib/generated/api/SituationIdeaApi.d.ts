import { Agreement, SituationIdea } from '../../ddl/ddl';
export interface ISituationIdeaApi {
    add(situationIdea: SituationIdea): Promise<void>;
}
export declare class SituationIdeaApi {
    constructor();
    situationIdeaApi: SituationIdeaApi;
    add(situationIdea: SituationIdea): Promise<void>;
    setAgreement(agreement: Agreement): Promise<void>;
    updateAgreementShare(situationIdeaUuId: string): Promise<void>;
}
//# sourceMappingURL=SituationIdeaApi.d.ts.map