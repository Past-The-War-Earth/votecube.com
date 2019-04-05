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
	ICounty,
	CountyEId,
	CountyEOptionalId,
	CountyEUpdateProperties,
	CountyESelect,
	QCounty,
	QCountyQId,
	QCountyQRelation,
} from './qcounty';
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

export interface IPollCounty extends IChildRepoRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	pollId?: number;

	// Non-Id Relations
	country?: ICounty;
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
export interface PollCountyESelect
    extends ChildRepoRowESelect, PollCountyEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	pollId?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	country?: CountyESelect;
	poll?: PollESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollCountyEId
    extends ChildRepoRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollCountyEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollCountyEUpdateProperties
	extends ChildRepoRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	pollId?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	country?: CountyEOptionalId;
	poll?: PollEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollCountyEUpdateColumns
	extends ChildRepoRowEUpdateColumns {
	// Non-Id Columns
	IS_DRAFT?: boolean | IQBooleanField;
	POLL_COUNTY_ID?: number | IQNumberField;
	POLL_ID?: number | IQNumberField;
	COUNTY_ID?: number | IQNumberField;
	POLLS_RID?: number | IQNumberField;
	POLLS_AID?: number | IQNumberField;
	POLLS_ARID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollCountyECreateProperties
extends Partial<PollCountyEId>, PollCountyEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollCountyECreateColumns
extends PollCountyEId, PollCountyEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollCounty extends QChildRepoRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	pollId: IQNumberField;

	// Non-Id Relations
	country: QCountyQRelation;
	poll: QPollQRelation;

}


// Entity Id Interface
export interface QPollCountyQId extends QChildRepoRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollCountyQRelation
	extends QChildRepoRowQRelation<QPollCounty>, QPollCountyQId {
}

