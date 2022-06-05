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
} from '../idea/qreason';
import {
	IReason,
} from '../idea/reason';
import {
	IAgreementReason,
} from './agreementreason';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface AgreementReasonESelect
    extends RepositoryEntityESelect, AgreementReasonEOptionalId {
	// Non-Id Properties
	axis?: string | IQStringField;
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
    extends RepositoryEntityEId {
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
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	share?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	agreement?: AgreementEOptionalId;
	reason?: ReasonEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgreementReasonGraph
	extends AgreementReasonEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	axis?: string | IQStringField;
	share?: number | IQNumberField;

	// Relations
	agreement?: AgreementGraph;
	reason?: ReasonGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface AgreementReasonEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	AXIS?: string | IQStringField;
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
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QAgreementReason extends QRepositoryEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	axis: IQStringField;
	share: IQNumberField;

	// Non-Id Relations
	agreement: QAgreementQRelation;
	reason: QReasonQRelation;

}


// Entity Id Interface
export interface QAgreementReasonQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QAgreementReasonQRelation
	extends QRepositoryEntityQRelation<IAgreementReason, QAgreementReason>, QAgreementReasonQId {
}

