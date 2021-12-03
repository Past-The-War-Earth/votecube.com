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
	SolutionGraph,
	SolutionEId,
	SolutionEOptionalId,
	SolutionEUpdateProperties,
	SolutionESelect,
	QSolution,
	QSolutionQId,
	QSolutionQRelation,
} from './qsolution';
import {
	Solution,
} from '../../ddl/solution/Solution';
import {
	SituationFactorPositionGraph,
	SituationFactorPositionEId,
	SituationFactorPositionEOptionalId,
	SituationFactorPositionEUpdateProperties,
	SituationFactorPositionESelect,
	QSituationFactorPosition,
	QSituationFactorPositionQId,
	QSituationFactorPositionQRelation,
} from '../situation/qsituationfactorposition';
import {
	SituationFactorPosition,
} from '../../ddl/situation/SituationFactorPosition';
import {
	SolutionFactor,
} from '../../ddl/solution/SolutionFactor';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SolutionFactorESelect
    extends RepositoryEntityESelect, SolutionFactorEOptionalId {
	// Non-Id Properties
	axis?: string | IQStringField;
	share?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	solution?: SolutionESelect;
	situationFactorPosition?: SituationFactorPositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SolutionFactorEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SolutionFactorEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SolutionFactorEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	share?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	solution?: SolutionEOptionalId;
	situationFactorPosition?: SituationFactorPositionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SolutionFactorGraph
	extends SolutionFactorEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	axis?: string | IQStringField;
	share?: number | IQNumberField;

	// Relations
	solution?: SolutionGraph;
	situationFactorPosition?: SituationFactorPositionGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SolutionFactorEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	AXIS?: string | IQStringField;
	SHARE?: number | IQNumberField;
	SOLUTIONS_RID_1?: number | IQNumberField;
	SOLUTIONS_AID_1?: number | IQNumberField;
	SOLUTIONS_ARID_1?: number | IQNumberField;
	SITUATION_FACTOR_POSITIONS_RID_1?: number | IQNumberField;
	SITUATION_FACTOR_POSITIONS_AID_1?: number | IQNumberField;
	SITUATION_FACTOR_POSITIONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SolutionFactorECreateProperties
extends Partial<SolutionFactorEId>, SolutionFactorEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SolutionFactorECreateColumns
extends SolutionFactorEId, SolutionFactorEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSolutionFactor extends QRepositoryEntity<SolutionFactor>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	axis: IQStringField;
	share: IQNumberField;

	// Non-Id Relations
	solution: QSolutionQRelation;
	situationFactorPosition: QSituationFactorPositionQRelation;

}


// Entity Id Interface
export interface QSolutionFactorQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSolutionFactorQRelation
	extends QRepositoryEntityQRelation<SolutionFactor, QSolutionFactor>, QSolutionFactorQId {
}

