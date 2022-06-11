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
	IQAirEntityOneToManyRelation,
	IQAirEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-traffic-control';
import {
	AirEntityGraph,
	AirEntityEId,
	AirEntityEUpdateColumns,
	AirEntityEUpdateProperties,
	AirEntityESelect,
	QAirEntityQId,
	QAirEntityQRelation,
	QAirEntity,
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
	IIdeaSituation,
} from './ideasituation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaSituationESelect
    extends AirEntityESelect, IdeaSituationEOptionalId {
	// Non-Id Properties

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
export interface IdeaSituationEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface IdeaSituationEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaSituationEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	idea?: IdeaEOptionalId;
	situation?: SituationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaSituationGraph
	extends IdeaSituationEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	idea?: IdeaGraph;
	situation?: SituationGraph;
	agreements?: AgreementGraph[];
	reasons?: ReasonGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaSituationEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
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
export interface IdeaSituationECreateProperties
extends Partial<IdeaSituationEId>, IdeaSituationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaSituationECreateColumns
extends IdeaSituationEId, IdeaSituationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdeaSituation extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	idea: QIdeaQRelation;
	situation: QSituationQRelation;
	agreements: IQAirEntityOneToManyRelation<IAgreement, QAgreement>;
	reasons: IQAirEntityOneToManyRelation<IReason, QReason>;

}


// Entity Id Interface
export interface QIdeaSituationQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QIdeaSituationQRelation
	extends QAirEntityQRelation<IIdeaSituation, QIdeaSituation>, QIdeaSituationQId {
}

