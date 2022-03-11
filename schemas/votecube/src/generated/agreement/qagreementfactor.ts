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
	RawDelete,
	RawUpdate,
} from '@airport/air-control';
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
	Agreement,
} from '../../ddl/agreement/Agreement';
import {
	IdeaFactorPositionGraph,
	IdeaFactorPositionEId,
	IdeaFactorPositionEOptionalId,
	IdeaFactorPositionEUpdateProperties,
	IdeaFactorPositionESelect,
	QIdeaFactorPosition,
	QIdeaFactorPositionQId,
	QIdeaFactorPositionQRelation,
} from '../idea/qideafactorposition';
import {
	IdeaFactorPosition,
} from '../../ddl/idea/IdeaFactorPosition';
import {
	AgreementFactor,
} from '../../ddl/agreement/AgreementFactor';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface AgreementFactorESelect
    extends RepositoryEntityESelect, AgreementFactorEOptionalId {
	// Non-Id Properties
	axis?: string | IQStringField;
	share?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	agreement?: AgreementESelect;
	ideaFactorPosition?: IdeaFactorPositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface AgreementFactorEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface AgreementFactorEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface AgreementFactorEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	share?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	agreement?: AgreementEOptionalId;
	ideaFactorPosition?: IdeaFactorPositionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgreementFactorGraph
	extends AgreementFactorEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	axis?: string | IQStringField;
	share?: number | IQNumberField;

	// Relations
	agreement?: AgreementGraph;
	ideaFactorPosition?: IdeaFactorPositionGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface AgreementFactorEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
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
export interface AgreementFactorECreateProperties
extends Partial<AgreementFactorEId>, AgreementFactorEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface AgreementFactorECreateColumns
extends AgreementFactorEId, AgreementFactorEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QAgreementFactor extends QRepositoryEntity<AgreementFactor>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	axis: IQStringField;
	share: IQNumberField;

	// Non-Id Relations
	agreement: QAgreementQRelation;
	ideaFactorPosition: QIdeaFactorPositionQRelation;

}


// Entity Id Interface
export interface QAgreementFactorQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QAgreementFactorQRelation
	extends QRepositoryEntityQRelation<AgreementFactor, QAgreementFactor>, QAgreementFactorQId {
}

