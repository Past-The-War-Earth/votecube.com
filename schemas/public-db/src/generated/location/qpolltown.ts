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
	IQEntity,
	IQRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-control';
import {
	IChildRepoRow,
	ChildRepoRowEId,
	ChildRepoRowEUpdateColumns,
	ChildRepoRowEUpdateProperties,
	ChildRepoRowESelect,
	QChildRepoRowQId,
	QChildRepoRowQRelation,
	QChildRepoRow,
} from '@airport/holding-pattern';
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
import {
	ITown,
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
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollTown extends IChildRepoRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	pollId?: number;

	// Non-Id Relations
	poll?: IPoll;
	town?: ITown;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollTownESelect
    extends ChildRepoRowESelect, PollTownEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	pollId?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	town?: TownESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollTownEId
    extends ChildRepoRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollTownEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollTownEUpdateProperties
	extends ChildRepoRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	pollId?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;
	town?: TownEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollTownEUpdateColumns
	extends ChildRepoRowEUpdateColumns {
	// Non-Id Columns
	IS_DRAFT?: boolean | IQBooleanField;
	POLL_STATE_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	POLLS_RID?: number | IQNumberField;
	POLLS_AID?: number | IQNumberField;
	POLLS_ARID?: number | IQNumberField;
	TOWN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollTownECreateProperties
extends Partial<PollTownEId>, PollTownEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollTownECreateColumns
extends PollTownEId, PollTownEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollTown extends QChildRepoRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	pollId: IQNumberField;

	// Non-Id Relations
	poll: QPollQRelation;
	town: QTownQRelation;

}


// Entity Id Interface
export interface QPollTownQId extends QChildRepoRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollTownQRelation
	extends QChildRepoRowQRelation<QPollTown>, QPollTownQId {
}

