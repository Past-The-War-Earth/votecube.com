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
	ImmutableActorRowECascadeGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../../infrastructure/qimmutableactorrow';
import {
	PollECascadeGraph,
	PollEId,
	PollEOptionalId,
	PollEUpdateProperties,
	PollESelect,
	QPoll,
	QPollQId,
	QPollQRelation,
} from '../qpoll';
import {
	ChosenPollVariationECascadeGraph,
	ChosenPollVariationEId,
	ChosenPollVariationEOptionalId,
	ChosenPollVariationEUpdateProperties,
	ChosenPollVariationESelect,
	QChosenPollVariation,
	QChosenPollVariationQId,
	QChosenPollVariationQRelation,
} from '../variation/qchosenpollvariation';
import {
	PollVariationECascadeGraph,
	PollVariationEId,
	PollVariationEOptionalId,
	PollVariationEUpdateProperties,
	PollVariationESelect,
	QPollVariation,
	QPollVariationQId,
	QPollVariationQRelation,
} from '../variation/qpollvariation';
import {
	PollLTFContinentECascadeGraph,
	PollLTFContinentEId,
	PollLTFContinentEOptionalId,
	PollLTFContinentEUpdateProperties,
	PollLTFContinentESelect,
	QPollLTFContinent,
	QPollLTFContinentQId,
	QPollLTFContinentQRelation,
} from './location/qpollltfcontinent';
import {
	PollLTFCountryECascadeGraph,
	PollLTFCountryEId,
	PollLTFCountryEOptionalId,
	PollLTFCountryEUpdateProperties,
	PollLTFCountryESelect,
	QPollLTFCountry,
	QPollLTFCountryQId,
	QPollLTFCountryQRelation,
} from './location/qpollltfcountry';
import {
	PollLTFStateECascadeGraph,
	PollLTFStateEId,
	PollLTFStateEOptionalId,
	PollLTFStateEUpdateProperties,
	PollLTFStateESelect,
	QPollLTFState,
	QPollLTFStateQId,
	QPollLTFStateQRelation,
} from './location/qpollltfstate';
import {
	PollLTFCountyECascadeGraph,
	PollLTFCountyEId,
	PollLTFCountyEOptionalId,
	PollLTFCountyEUpdateProperties,
	PollLTFCountyESelect,
	QPollLTFCounty,
	QPollLTFCountyQId,
	QPollLTFCountyQRelation,
} from './location/qpollltfcounty';
import {
	PollLTFTownECascadeGraph,
	PollLTFTownEId,
	PollLTFTownEOptionalId,
	PollLTFTownEUpdateProperties,
	PollLTFTownESelect,
	QPollLTFTown,
	QPollLTFTownQId,
	QPollLTFTownQRelation,
} from './location/qpollltftown';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollLocationTimeFrameESelect
    extends ImmutableActorRowESelect, PollLocationTimeFrameEOptionalId {
	// Non-Id Properties
	endDate?: Date | IQDateField;
	startDate?: Date | IQDateField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	poll?: PollESelect;
	chosenVariations?: ChosenPollVariationESelect;
	createdAtVariations?: PollVariationESelect;
	pollContinents?: PollLTFContinentESelect;
	pollCountries?: PollLTFCountryESelect;
	pollStates?: PollLTFStateESelect;
	pollCounties?: PollLTFCountyESelect;
	pollTowns?: PollLTFTownESelect;
	pollVariations?: PollVariationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollLocationTimeFrameEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollLocationTimeFrameEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollLocationTimeFrameEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	endDate?: Date | IQDateField;
	startDate?: Date | IQDateField;

	// Non-Id Relations - ids only & no OneToMany's
	poll?: PollEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollLocationTimeFrameECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	chosenVariations?: ChosenPollVariationECascadeGraph;
	createdAtVariations?: PollVariationECascadeGraph;
	pollContinents?: PollLTFContinentECascadeGraph;
	pollCountries?: PollLTFCountryECascadeGraph;
	pollStates?: PollLTFStateECascadeGraph;
	pollCounties?: PollLTFCountyECascadeGraph;
	pollTowns?: PollLTFTownECascadeGraph;
	pollVariations?: PollVariationECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollLocationTimeFrameEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	END_DATE?: Date | IQDateField;
	START_DATE?: Date | IQDateField;
	POLL_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollLocationTimeFrameECreateProperties
extends Partial<PollLocationTimeFrameEId>, PollLocationTimeFrameEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollLocationTimeFrameECreateColumns
extends PollLocationTimeFrameEId, PollLocationTimeFrameEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollLocationTimeFrame extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	endDate: IQDateField;
	startDate: IQDateField;

	// Non-Id Relations
	poll: QPollQRelation;
	chosenVariations: IQOneToManyRelation<QChosenPollVariation>;
	createdAtVariations: IQOneToManyRelation<QPollVariation>;
	pollContinents: IQOneToManyRelation<QPollLTFContinent>;
	pollCountries: IQOneToManyRelation<QPollLTFCountry>;
	pollStates: IQOneToManyRelation<QPollLTFState>;
	pollCounties: IQOneToManyRelation<QPollLTFCounty>;
	pollTowns: IQOneToManyRelation<QPollLTFTown>;
	pollVariations: IQOneToManyRelation<QPollVariation>;

}


// Entity Id Interface
export interface QPollLocationTimeFrameQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollLocationTimeFrameQRelation
	extends QImmutableActorRowQRelation<QPollLocationTimeFrame>, QPollLocationTimeFrameQId {
}

