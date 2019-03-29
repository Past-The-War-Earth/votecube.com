import {
	IQEntityInternal,
	IEntityIdProperties,
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
	QEntity,
	QRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-control';
import {
	IFactorPosition,
	FactorPositionEId,
	FactorPositionEOptionalId,
	FactorPositionEUpdateProperties,
	FactorPositionESelect,
	QFactorPosition,
	QFactorPositionQId,
	QFactorPositionQRelation,
} from '../qfactorposition';
import {
	IPoll,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from './qpoll';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollFactorPosition {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	axis?: string;
	color?: number;
	dir?: number;

	// Non-Id Relations
	factorPosition?: IFactorPosition;
	poll?: IPoll;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollFactorPositionESelect
    extends IEntitySelectProperties, PollFactorPositionEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	axis?: string | IQStringField;
	color?: number | IQNumberField;
	dir?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factorPosition?: FactorPositionESelect;
	poll?: PollESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollFactorPositionEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollFactorPositionEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollFactorPositionEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	axis?: string | IQStringField;
	color?: number | IQNumberField;
	dir?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	factorPosition?: FactorPositionEOptionalId;
	poll?: PollEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollFactorPositionEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POLL_FACTOR_POSITION_ID?: number | IQNumberField;
	FACTOR_COORDINATE_AXIS?: string | IQStringField;
	COLOR_ID?: number | IQNumberField;
	POSITION_ORIENTATION?: number | IQNumberField;
	FACTOR_POSITION_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollFactorPositionECreateProperties
extends Partial<PollFactorPositionEId>, PollFactorPositionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollFactorPositionECreateColumns
extends PollFactorPositionEId, PollFactorPositionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollFactorPosition extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	axis: IQStringField;
	color: IQNumberField;
	dir: IQNumberField;

	// Non-Id Relations
	factorPosition: QFactorPositionQRelation;
	poll: QPollQRelation;

}


// Entity Id Interface
export interface QPollFactorPositionQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollFactorPositionQRelation
	extends QRelation<QPollFactorPosition>, QPollFactorPositionQId {
}

