import { IQNumberField, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { AgreementGraph, AgreementEOptionalId, AgreementESelect, QAgreementQRelation } from './qagreement';
import { IdeaFactorPositionGraph, IdeaFactorPositionEOptionalId, IdeaFactorPositionESelect, QIdeaFactorPositionQRelation } from '../idea/qideafactorposition';
import { AgreementFactor } from '../../ddl/agreement/AgreementFactor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface AgreementFactorESelect extends RepositoryEntityESelect, AgreementFactorEOptionalId {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    agreement?: AgreementESelect;
    ideaFactorPosition?: IdeaFactorPositionESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface AgreementFactorEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface AgreementFactorEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface AgreementFactorEUpdateProperties extends RepositoryEntityEUpdateProperties {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    agreement?: AgreementEOptionalId;
    ideaFactorPosition?: IdeaFactorPositionEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgreementFactorGraph extends AgreementFactorEOptionalId, RepositoryEntityGraph {
    axis?: string | IQStringField;
    share?: number | IQNumberField;
    agreement?: AgreementGraph;
    ideaFactorPosition?: IdeaFactorPositionGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface AgreementFactorEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    AXIS?: string | IQStringField;
    SHARE?: number | IQNumberField;
    AGREEMENTS_RID_1?: number | IQNumberField;
    AGREEMENTS_AID_1?: number | IQNumberField;
    AGREEMENTS_ARID_1?: number | IQNumberField;
    IDEA_FACTOR_POSITIONS_RID_1?: number | IQNumberField;
    IDEA_FACTOR_POSITIONS_AID_1?: number | IQNumberField;
    IDEA_FACTOR_POSITIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface AgreementFactorECreateProperties extends Partial<AgreementFactorEId>, AgreementFactorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface AgreementFactorECreateColumns extends AgreementFactorEId, AgreementFactorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QAgreementFactor extends QRepositoryEntity<AgreementFactor> {
    axis: IQStringField;
    share: IQNumberField;
    agreement: QAgreementQRelation;
    ideaFactorPosition: QIdeaFactorPositionQRelation;
}
export interface QAgreementFactorQId extends QRepositoryEntityQId {
}
export interface QAgreementFactorQRelation extends QRepositoryEntityQRelation<AgreementFactor, QAgreementFactor>, QAgreementFactorQId {
}
//# sourceMappingURL=qagreementfactor.d.ts.map