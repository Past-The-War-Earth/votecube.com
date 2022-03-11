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
	IdeaGraph,
	IdeaEId,
	IdeaEOptionalId,
	IdeaEUpdateProperties,
	IdeaESelect,
	QIdea,
	QIdeaQId,
	QIdeaQRelation,
} from '../idea/qidea';
import {
	Idea,
} from '../../ddl/idea/Idea';
import {
	AgreementFactorGraph,
	AgreementFactorEId,
	AgreementFactorEOptionalId,
	AgreementFactorEUpdateProperties,
	AgreementFactorESelect,
	QAgreementFactor,
	QAgreementFactorQId,
	QAgreementFactorQRelation,
} from './qagreementfactor';
import {
	AgreementFactor,
} from '../../ddl/agreement/AgreementFactor';
import {
	Agreement,
} from '../../ddl/agreement/Agreement';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface AgreementESelect
    extends RepositoryEntityESelect, AgreementEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	idea?: IdeaESelect;
	factors?: AgreementFactorESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface AgreementEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface AgreementEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface AgreementEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	idea?: IdeaEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface AgreementGraph
	extends AgreementEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	idea?: IdeaGraph;
	factors?: AgreementFactorGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface AgreementEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	IDEAS_RID_1?: number | IQNumberField;
	IDEAS_AID_1?: number | IQNumberField;
	IDEAS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface AgreementECreateProperties
extends Partial<AgreementEId>, AgreementEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface AgreementECreateColumns
extends AgreementEId, AgreementEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QAgreement extends QRepositoryEntity<Agreement>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	idea: QIdeaQRelation;
	factors: IQOneToManyRelation<AgreementFactor, QAgreementFactor>;

}


// Entity Id Interface
export interface QAgreementQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QAgreementQRelation
	extends QRepositoryEntityQRelation<Agreement, QAgreement>, QAgreementQId {
}

