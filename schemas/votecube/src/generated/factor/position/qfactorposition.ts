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
	FactorGraph,
	FactorEId,
	FactorEOptionalId,
	FactorEUpdateProperties,
	FactorESelect,
	QFactor,
	QFactorQId,
	QFactorQRelation,
} from '../qfactor';
import {
	Factor,
} from '../../../ddl/factor/Factor';
import {
	PositionGraph,
	PositionEId,
	PositionEOptionalId,
	PositionEUpdateProperties,
	PositionESelect,
	QPosition,
	QPositionQId,
	QPositionQRelation,
} from './qposition';
import {
	Position,
} from '../../../ddl/factor/position/Position';
import {
	FactorPosition,
} from '../../../ddl/factor/position/FactorPosition';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorPositionESelect
    extends RepositoryEntityESelect, FactorPositionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factor?: FactorESelect;
	position?: PositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorPositionEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorPositionEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorPositionEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	factor?: FactorEOptionalId;
	position?: PositionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorPositionGraph
	extends FactorPositionEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	factor?: FactorGraph;
	position?: PositionGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorPositionEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	FACTORS_RID_1?: number | IQNumberField;
	FACTORS_AID_1?: number | IQNumberField;
	FACTORS_ARID_1?: number | IQNumberField;
	POSITIONS_RID_1?: number | IQNumberField;
	POSITIONS_AID_1?: number | IQNumberField;
	POSITIONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorPositionECreateProperties
extends Partial<FactorPositionEId>, FactorPositionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorPositionECreateColumns
extends FactorPositionEId, FactorPositionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorPosition extends QRepositoryEntity<FactorPosition>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	factor: QFactorQRelation;
	position: QPositionQRelation;

}


// Entity Id Interface
export interface QFactorPositionQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QFactorPositionQRelation
	extends QRepositoryEntityQRelation<FactorPosition, QFactorPosition>, QFactorPositionQId {
}

