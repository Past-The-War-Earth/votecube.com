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
	SituationGraph,
	SituationEId,
	SituationEOptionalId,
	SituationEUpdateProperties,
	SituationESelect,
	QSituation,
	QSituationQId,
	QSituationQRelation,
} from './qsituation';
import {
	Situation,
} from '../../ddl/situation/Situation';
import {
	FactorGraph,
	FactorEId,
	FactorEOptionalId,
	FactorEUpdateProperties,
	FactorESelect,
	QFactor,
	QFactorQId,
	QFactorQRelation,
} from '../factor/qfactor';
import {
	Factor,
} from '../../ddl/factor/Factor';
import {
	PositionGraph,
	PositionEId,
	PositionEOptionalId,
	PositionEUpdateProperties,
	PositionESelect,
	QPosition,
	QPositionQId,
	QPositionQRelation,
} from '../factor/qposition';
import {
	Position,
} from '../../ddl/factor/Position';
import {
	SituationFactorPosition,
} from '../../ddl/situation/SituationFactorPosition';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationFactorPositionESelect
    extends RepositoryEntityESelect, SituationFactorPositionEOptionalId {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;
	outcomeOrdinal?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situation?: SituationESelect;
	factor?: FactorESelect;
	position?: PositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationFactorPositionEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SituationFactorPositionEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationFactorPositionEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;
	outcomeOrdinal?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	situation?: SituationEOptionalId;
	factor?: FactorEOptionalId;
	position?: PositionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationFactorPositionGraph
	extends SituationFactorPositionEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;
	outcomeOrdinal?: string | IQStringField;

	// Relations
	situation?: SituationGraph;
	factor?: FactorGraph;
	position?: PositionGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationFactorPositionEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	FACTOR_COORDINATE_AXIS?: string | IQStringField;
	POSITION_ORIENTATION?: number | IQNumberField;
	FACTOR_NUMBER?: number | IQNumberField;
	COLOR_BLUE?: number | IQNumberField;
	COLOR_GREEN?: number | IQNumberField;
	COLOR_RED?: number | IQNumberField;
	OUTCOME_ORDINAL?: string | IQStringField;
	SITUATIONS_RID_1?: number | IQNumberField;
	SITUATIONS_AID_1?: number | IQNumberField;
	SITUATIONS_ARID_1?: number | IQNumberField;
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
export interface SituationFactorPositionECreateProperties
extends Partial<SituationFactorPositionEId>, SituationFactorPositionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationFactorPositionECreateColumns
extends SituationFactorPositionEId, SituationFactorPositionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituationFactorPosition extends QRepositoryEntity<SituationFactorPosition>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	axis: IQStringField;
	dir: IQNumberField;
	factorNumber: IQNumberField;
	blue: IQNumberField;
	green: IQNumberField;
	red: IQNumberField;
	outcomeOrdinal: IQStringField;

	// Non-Id Relations
	situation: QSituationQRelation;
	factor: QFactorQRelation;
	position: QPositionQRelation;

}


// Entity Id Interface
export interface QSituationFactorPositionQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSituationFactorPositionQRelation
	extends QRepositoryEntityQRelation<SituationFactorPosition, QSituationFactorPosition>, QSituationFactorPositionQId {
}

