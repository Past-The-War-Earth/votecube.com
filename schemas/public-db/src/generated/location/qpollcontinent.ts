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
	IContinent,
	ContinentEId,
	ContinentEOptionalId,
	ContinentEUpdateProperties,
	ContinentESelect,
	QContinent,
	QContinentQId,
	QContinentQRelation,
} from './qcontinent';
import {
	IPoll,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../poll/qpoll';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollContinent {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;

	// Non-Id Relations
	continent?: IContinent;
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
export interface PollContinentESelect
    extends IEntitySelectProperties, PollContinentEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	continent?: ContinentESelect;
	poll?: PollESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollContinentEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollContinentEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollContinentEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	continent?: ContinentEOptionalId;
	poll?: PollEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollContinentEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	POLL_CONTINENT_ID?: number | IQNumberField;
	CONTINENT_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollContinentECreateProperties
extends Partial<PollContinentEId>, PollContinentEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollContinentECreateColumns
extends PollContinentEId, PollContinentEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollContinent extends QEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;

	// Non-Id Relations
	continent: QContinentQRelation;
	poll: QPollQRelation;

}


// Entity Id Interface
export interface QPollContinentQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollContinentQRelation
	extends QRelation<QPollContinent>, QPollContinentQId {
}

