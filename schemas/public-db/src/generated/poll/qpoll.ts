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
	IImmutableRow,
	ImmutableRowECascadeGraph,
	ImmutableRowEId,
	ImmutableRowEUpdateColumns,
	ImmutableRowEUpdateProperties,
	ImmutableRowESelect,
	QImmutableRowQId,
	QImmutableRowQRelation,
	QImmutableRow,
} from '../qimmutablerow';
import {
	ITheme,
	ThemeECascadeGraph,
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
	PollTypeECascadeGraph,
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
	PollContinentECascadeGraph,
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
	PollCountryECascadeGraph,
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
	PollLabelECascadeGraph,
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
	PollFactorPositionECascadeGraph,
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
	PollStateECascadeGraph,
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
	PollTownECascadeGraph,
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

export interface IPoll extends IImmutableRow {
	
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
    extends ImmutableRowESelect, PollEOptionalId {
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
    extends ImmutableRowEId {
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
	extends ImmutableRowEUpdateProperties {
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
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollECascadeGraph
	extends ImmutableRowECascadeGraph {
	// Cascading Relations
	childPolls?: PollECascadeGraph;
	pollContinents?: PollContinentECascadeGraph;
	pollCountries?: PollCountryECascadeGraph;
	pollLabels?: PollLabelECascadeGraph;
	pollFactorPositions?: PollFactorPositionECascadeGraph;
	pollStates?: PollStateECascadeGraph;
	pollTowns?: PollTownECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollEUpdateColumns
	extends ImmutableRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	POLL_ID?: number | IQNumberField;
	END_DATE?: Date | IQDateField;
	START_DATE?: Date | IQDateField;
	POLL_DESCRIPTION?: number | IQNumberField;
	PARENT_POLL_ID?: number | IQNumberField;
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
export interface QPoll extends QImmutableRow
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
export interface QPollQId extends QImmutableRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollQRelation
	extends QImmutableRowQRelation<QPoll>, QPollQId {
}

