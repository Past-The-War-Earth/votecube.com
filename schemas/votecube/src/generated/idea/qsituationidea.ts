import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IEntityDatabaseFacade,
	IEntityFind,
	IEntityFindOne,
	IEntitySearch,
	IEntitySearchOne,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	IQRepositoryEntityOneToManyRelation,
	IQRepositoryEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-traffic-control';
import {
	RepositoryEntityGraph,
	RepositoryEntityEId,
	RepositoryEntityEUpdateColumns,
	RepositoryEntityEUpdateProperties,
	RepositoryEntityESelect,
	QRepositoryEntityQId,
	QRepositoryEntityQRelation,
	QRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IdeaGraph,
	IdeaEId,
	IdeaEOptionalId,
	IdeaEUpdateProperties,
	IdeaESelect,
	QIdea,
	QIdeaQId,
	QIdeaQRelation,
} from './qidea';
import {
	IIdea,
} from './idea';
import {
	SituationGraph,
	SituationEId,
	SituationEOptionalId,
	SituationEUpdateProperties,
	SituationESelect,
	QSituation,
	QSituationQId,
	QSituationQRelation,
	ISituation,
} from '@sapoto/core';
import {
	AgreementGraph,
	AgreementEId,
	AgreementEOptionalId,
	AgreementEUpdateProperties,
	AgreementESelect,
	QAgreement,
	QAgreementQId,
	QAgreementQRelation,
} from '../agreement/qagreement';
import {
	IAgreement,
} from '../agreement/agreement';
import {
	ReasonGraph,
	ReasonEId,
	ReasonEOptionalId,
	ReasonEUpdateProperties,
	ReasonESelect,
	QReason,
	QReasonQId,
	QReasonQRelation,
} from './qreason';
import {
	IReason,
} from './reason';
import {
	ISituationIdea,
} from './situationidea';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationIdeaESelect
    extends RepositoryEntityESelect, SituationIdeaEOptionalId {
	// Non-Id Properties
	agreementTotal?: number | IQNumberField;
	numberOfAgreementRatings?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaESelect;
	situation?: SituationESelect;
	agreements?: AgreementESelect;
	reasons?: ReasonESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationIdeaEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SituationIdeaEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationIdeaEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	agreementTotal?: number | IQNumberField;
	numberOfAgreementRatings?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	idea?: IdeaEOptionalId;
	situation?: SituationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationIdeaGraph
	extends SituationIdeaEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	agreementTotal?: number | IQNumberField;
	numberOfAgreementRatings?: number | IQNumberField;

	// Relations
	idea?: IdeaGraph;
	situation?: SituationGraph;
	agreements?: AgreementGraph[];
	reasons?: ReasonGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationIdeaEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	AGREEMENTTOTAL?: number | IQNumberField;
	NUMBEROFAGREEMENTRATINGS?: number | IQNumberField;
	IDEAS_RID_1?: number | IQNumberField;
	IDEAS_AID_1?: number | IQNumberField;
	IDEAS_ARID_1?: number | IQNumberField;
	SITUATIONS_RID_1?: number | IQNumberField;
	SITUATIONS_AID_1?: number | IQNumberField;
	SITUATIONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationIdeaECreateProperties
extends Partial<SituationIdeaEId>, SituationIdeaEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationIdeaECreateColumns
extends SituationIdeaEId, SituationIdeaEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituationIdea extends QRepositoryEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	agreementTotal: IQNumberField;
	numberOfAgreementRatings: IQNumberField;

	// Non-Id Relations
	idea: QIdeaQRelation;
	situation: QSituationQRelation;
	agreements: IQRepositoryEntityOneToManyRelation<IAgreement, QAgreement>;
	reasons: IQRepositoryEntityOneToManyRelation<IReason, QReason>;

}


// Entity Id Interface
export interface QSituationIdeaQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSituationIdeaQRelation
	extends QRepositoryEntityQRelation<ISituationIdea, QSituationIdea>, QSituationIdeaQId {
}

