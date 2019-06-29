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
	IImmutableRepoRow,
	ImmutableRepoRowEId,
	ImmutableRepoRowEUpdateColumns,
	ImmutableRepoRowEUpdateProperties,
	ImmutableRepoRowESelect,
	QImmutableRepoRowQId,
	QImmutableRepoRowQRelation,
	QImmutableRepoRow,
} from '@airport/holding-pattern';
import {
	ITheme,
	ThemeEId,
	ThemeEOptionalId,
	ThemeEUpdateProperties,
	ThemeESelect,
	QTheme,
	QThemeQId,
	QThemeQRelation,
} from '../qtheme';
import {
	IPollType,
	PollTypeEId,
	PollTypeEOptionalId,
	PollTypeEUpdateProperties,
	PollTypeESelect,
	QPollType,
	QPollTypeQId,
	QPollTypeQRelation,
} from './qpolltype';
import {
	IPollContinent,
	PollContinentEId,
	PollContinentEOptionalId,
	PollContinentEUpdateProperties,
	PollContinentESelect,
	QPollContinent,
	QPollContinentQId,
	QPollContinentQRelation,
} from '../location/qpollcontinent';
import {
	IPollCountry,
	PollCountryEId,
	PollCountryEOptionalId,
	PollCountryEUpdateProperties,
	PollCountryESelect,
	QPollCountry,
	QPollCountryQId,
	QPollCountryQRelation,
} from '../location/qpollcountry';
import {
	IPollLabel,
	PollLabelEId,
	PollLabelEOptionalId,
	PollLabelEUpdateProperties,
	PollLabelESelect,
	QPollLabel,
	QPollLabelQId,
	QPollLabelQRelation,
} from './qpolllabel';
import {
	IPollFactorPosition,
	PollFactorPositionEId,
	PollFactorPositionEOptionalId,
	PollFactorPositionEUpdateProperties,
	PollFactorPositionESelect,
	QPollFactorPosition,
	QPollFactorPositionQId,
	QPollFactorPositionQRelation,
} from './qpollfactorposition';
import {
	IPollState,
	PollStateEId,
	PollStateEOptionalId,
	PollStateEUpdateProperties,
	PollStateESelect,
	QPollState,
	QPollStateQId,
	QPollStateQRelation,
} from '../location/qpollstate';
import {
	IPollTown,
	PollTownEId,
	PollTownEOptionalId,
	PollTownEUpdateProperties,
	PollTownESelect,
	QPollTown,
	QPollTownQId,
	QPollTownQRelation,
} from '../location/qpolltown';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPoll extends IImmutableRepoRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;
	endDate?: Date;
	startDate?: Date;
	name?: number;

	// Non-Id Relations
	parentPoll?: IPoll;
	theme?: ITheme;
	type?: IPollType;
	childPolls?: IPoll[];
	pollContinents?: IPollContinent[];
	pollCountries?: IPollCountry[];
	pollLabels?: IPollLabel[];
	pollFactorPositions?: IPollFactorPosition[];
	pollStates?: IPollState[];
	pollTowns?: IPollTown[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollESelect
    extends ImmutableRepoRowESelect, PollEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;
	endDate?: Date | IQDateField;
	startDate?: Date | IQDateField;
	name?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parentPoll?: PollESelect;
	theme?: ThemeESelect;
	type?: PollTypeESelect;
	childPolls?: PollESelect;
	pollContinents?: PollContinentESelect;
	pollCountries?: PollCountryESelect;
	pollLabels?: PollLabelESelect;
	pollFactorPositions?: PollFactorPositionESelect;
	pollStates?: PollStateESelect;
	pollTowns?: PollTownESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollEId
    extends ImmutableRepoRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollEUpdateProperties
	extends ImmutableRepoRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;
	endDate?: Date | IQDateField;
	startDate?: Date | IQDateField;
	name?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	parentPoll?: PollEOptionalId;
	theme?: ThemeEOptionalId;
	type?: PollTypeEOptionalId;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollEUpdateColumns
	extends ImmutableRepoRowEUpdateColumns {
	// Non-Id Columns
	IS_DRAFT?: boolean | IQBooleanField;
	CREATED_AT?: Date | IQDateField;
	POLL_ID?: number | IQNumberField;
	END_DATE?: Date | IQDateField;
	START_DATE?: Date | IQDateField;
	POLL_DESCRIPTION?: number | IQNumberField;
	POLLS_RID?: number | IQNumberField;
	POLLS_AID?: number | IQNumberField;
	POLLS_ARID?: number | IQNumberField;
	THEME_ID?: number | IQNumberField;
	POLL_TYPE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollECreateProperties
extends Partial<PollEId>, PollEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollECreateColumns
extends PollEId, PollEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPoll extends QImmutableRepoRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;
	endDate: IQDateField;
	startDate: IQDateField;
	name: IQNumberField;

	// Non-Id Relations
	parentPoll: QPollQRelation;
	theme: QThemeQRelation;
	type: QPollTypeQRelation;
	childPolls: IQOneToManyRelation<QPoll>;
	pollContinents: IQOneToManyRelation<QPollContinent>;
	pollCountries: IQOneToManyRelation<QPollCountry>;
	pollLabels: IQOneToManyRelation<QPollLabel>;
	pollFactorPositions: IQOneToManyRelation<QPollFactorPosition>;
	pollStates: IQOneToManyRelation<QPollState>;
	pollTowns: IQOneToManyRelation<QPollTown>;

}


// Entity Id Interface
export interface QPollQId extends QImmutableRepoRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollQRelation
	extends QImmutableRepoRowQRelation<QPoll>, QPollQId {
}

