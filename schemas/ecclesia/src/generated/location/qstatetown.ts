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
	SystemGeneratedRowGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../infrastructure/row/qsystemgeneratedrow';
import {
	StateGraph,
	StateEId,
	StateEOptionalId,
	StateEUpdateProperties,
	StateESelect,
	QState,
	QStateQId,
	QStateQRelation,
} from './qstate';
import {
	TownGraph,
	TownEId,
	TownEOptionalId,
	TownEUpdateProperties,
	TownESelect,
	QTown,
	QTownQId,
	QTownQRelation,
} from './qtown';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface StateTownESelect
    extends SystemGeneratedRowESelect, StateTownEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces
	state?: StateESelect;
	town?: TownESelect;

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface StateTownEId
    extends SystemGeneratedRowEId {
	// Id Properties

	// Id Relations - Ids only
	state: StateEId;
	town: TownEId;

}

/**
 * Ids fields and relations only (optional).
 */
export interface StateTownEOptionalId {
	// Id Properties

	// Id Relations - Ids only
	state?: StateEOptionalId;
	town?: TownEOptionalId;

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface StateTownEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface StateTownGraph
	extends StateTownEOptionalId, SystemGeneratedRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	state?: StateGraph;
	town?: TownGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface StateTownEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface StateTownECreateProperties
extends Partial<StateTownEId>, StateTownEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface StateTownECreateColumns
extends StateTownEId, StateTownEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QStateTown extends QSystemGeneratedRow
{
	// Id Fields

	// Id Relations
	state: QStateQRelation;
	town: QTownQRelation;

	// Non-Id Fields

	// Non-Id Relations

}


// Entity Id Interface
export interface QStateTownQId extends QSystemGeneratedRowQId
{
	
	// Id Fields

	// Id Relations
	state: QStateQId;
	town: QTownQId;


}

// Entity Relation Interface
export interface QStateTownQRelation
	extends QSystemGeneratedRowQRelation<QStateTown>, QStateTownQId {
}

