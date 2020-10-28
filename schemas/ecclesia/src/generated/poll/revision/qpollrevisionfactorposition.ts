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
	ImmutableRowGraph,
	ImmutableRowEId,
	ImmutableRowEUpdateColumns,
	ImmutableRowEUpdateProperties,
	ImmutableRowESelect,
	QImmutableRowQId,
	QImmutableRowQRelation,
	QImmutableRow,
} from '../../infrastructure/row/qimmutablerow';
import {
	SkinGraph,
	SkinEId,
	SkinEOptionalId,
	SkinEUpdateProperties,
	SkinESelect,
	QSkin,
	QSkinQId,
	QSkinQRelation,
} from '../../factor/qskin';
import {
	PollRevisionGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from './qpollrevision';
import {
	FactorPositionGraph,
	FactorPositionEId,
	FactorPositionEOptionalId,
	FactorPositionEUpdateProperties,
	FactorPositionESelect,
	QFactorPosition,
	QFactorPositionQId,
	QFactorPositionQRelation,
} from '../../factor/position/qfactorposition';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionFactorPositionESelect
    extends ImmutableRowESelect, PollRevisionFactorPositionEOptionalId {
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
	skin?: SkinESelect;
	pollRevision?: PollRevisionESelect;
	factorPosition?: FactorPositionESelect;
	parent?: PollRevisionFactorPositionESelect;
	children?: PollRevisionFactorPositionESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionFactorPositionEId
    extends ImmutableRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionFactorPositionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionFactorPositionEUpdateProperties
	extends ImmutableRowEUpdateProperties {
	// Non-Id Properties
	axis?: string | IQStringField;
	dir?: number | IQNumberField;
	factorNumber?: number | IQNumberField;
	blue?: number | IQNumberField;
	green?: number | IQNumberField;
	red?: number | IQNumberField;
	outcomeOrdinal?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	skin?: SkinEOptionalId;
	pollRevision?: PollRevisionEOptionalId;
	factorPosition?: FactorPositionEOptionalId;
	parent?: PollRevisionFactorPositionEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionFactorPositionGraph
	extends PollRevisionFactorPositionEOptionalId, ImmutableRowGraph {
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
	skin?: SkinGraph;
	pollRevision?: PollRevisionGraph;
	factorPosition?: FactorPositionGraph;
	parent?: PollRevisionFactorPositionGraph;
	children?: PollRevisionFactorPositionGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionFactorPositionEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	FACTOR_COORDINATE_AXIS?: string | IQStringField;
	POSITION_ORIENTATION?: number | IQNumberField;
	FACTOR_NUMBER?: number | IQNumberField;
	COLOR_BLUE?: number | IQNumberField;
	COLOR_GREEN?: number | IQNumberField;
	COLOR_RED?: number | IQNumberField;
	OUTCOME_ORDINAL?: string | IQStringField;
	SKIN_ID?: number | IQNumberField;
	POLL_REVISION_ID?: number | IQNumberField;
	FACTOR_ID?: number | IQNumberField;
	POSITION_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_FACTOR_POSITION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionFactorPositionECreateProperties
extends Partial<PollRevisionFactorPositionEId>, PollRevisionFactorPositionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionFactorPositionECreateColumns
extends PollRevisionFactorPositionEId, PollRevisionFactorPositionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionFactorPosition extends QImmutableRow
{
	// Id Fields
	id: IQNumberField;

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
	skin: QSkinQRelation;
	pollRevision: QPollRevisionQRelation;
	factorPosition: QFactorPositionQRelation;
	parent: QPollRevisionFactorPositionQRelation;
	children: IQOneToManyRelation<QPollRevisionFactorPosition>;

}


// Entity Id Interface
export interface QPollRevisionFactorPositionQId extends QImmutableRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionFactorPositionQRelation
	extends QImmutableRowQRelation<QPollRevisionFactorPosition>, QPollRevisionFactorPositionQId {
}

