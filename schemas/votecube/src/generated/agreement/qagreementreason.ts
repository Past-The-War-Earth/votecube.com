import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
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
} from '@airport/tarmaq-query';
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
	AgreementGraph,
	AgreementEId,
	AgreementEOptionalId,
	AgreementEUpdateProperties,
	AgreementESelect,
	QAgreement,
	QAgreementQId,
	QAgreementQRelation,
} from './qagreement';
import {
	IAgreement,
} from './agreement';
import {
	ReasonGraph,
	ReasonEId,
	ReasonEOptionalId,
	ReasonEUpdateProperties,
	ReasonESelect,
	QReason,
	QReasonQId,
	QReasonQRelation,
} from '../reason/qreason';
import {
	IReason,
} from '../reason/reason';
import {
	IAgreementReason,
} from './agreementreason';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface AgreementReasonESelect
    extends AirEntityESelect, AgreementReasonEOptionalId {
	// Non-Id Properties
	share?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	agreement?: AgreementESelect;
	reason?: ReasonESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface AgreementReasonEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface AgreementReasonEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface AgreementReasonEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	share?: number | IQNumberField;

	// Non-Id Relations - _localIds only & no OneToMany's
	agreement?: AgreementEOptionalId;
	reason?: ReasonEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgreementReasonGraph
	extends AgreementReasonEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	share?: number | IQNumberField;

	// Relations
	agreement?: AgreementGraph;
	reason?: ReasonGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface AgreementReasonEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	SHARE?: number | IQNumberField;
	AGREEMENTS_RID_1?: number | IQNumberField;
	AGREEMENTS_AID_1?: number | IQNumberField;
	AGREEMENTS_ARID_1?: number | IQNumberField;
	REASONS_RID_1?: number | IQNumberField;
	REASONS_AID_1?: number | IQNumberField;
	REASONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface AgreementReasonECreateProperties
extends Partial<AgreementReasonEId>, AgreementReasonEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface AgreementReasonECreateColumns
extends AgreementReasonEId, AgreementReasonEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QAgreementReason extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	share: IQNumberField;

	// Non-Id Relations
	agreement: QAgreementQRelation;
	reason: QReasonQRelation;

}

// Entity Id Interface
export interface QAgreementReasonQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QAgreementReasonQRelation
	extends QAirEntityQRelation<IAgreementReason, QAgreementReason>, QAgreementReasonQId {
}