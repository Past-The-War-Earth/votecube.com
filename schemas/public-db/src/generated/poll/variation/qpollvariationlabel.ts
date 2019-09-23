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
	IImmutableActorRow,
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
	ILabel,
	LabelECascadeGraph,
	LabelEId,
	LabelEOptionalId,
	LabelEUpdateProperties,
	LabelESelect,
	QLabel,
	QLabelQId,
	QLabelQRelation,
} from './label/qlabel';
import {
	IPollVariation,
	PollVariationECascadeGraph,
	PollVariationEId,
	PollVariationEOptionalId,
	PollVariationEUpdateProperties,
	PollVariationESelect,
	QPollVariation,
	QPollVariationQId,
	QPollVariationQRelation,
} from './qpollvariation';
import {
	IPollLocationTimeFrame,
	PollLocationTimeFrameECascadeGraph,
	PollLocationTimeFrameEId,
	PollLocationTimeFrameEOptionalId,
	PollLocationTimeFrameEUpdateProperties,
	PollLocationTimeFrameESelect,
	QPollLocationTimeFrame,
	QPollLocationTimeFrameQId,
	QPollLocationTimeFrameQRelation,
} from '../locationtimeframe/qpolllocationtimeframe';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationLabel extends IImmutableActorRow {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	id?: number;

	// Non-Id Relations
	label?: ILabel;
	pollVariation?: IPollVariation;
	locationTimeFrame?: IPollLocationTimeFrame;

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollVariationLabelESelect
    extends ImmutableActorRowESelect, PollVariationLabelEOptionalId {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	label?: LabelESelect;
	pollVariation?: PollVariationESelect;
	locationTimeFrame?: PollLocationTimeFrameESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollVariationLabelEId
    extends ImmutableActorRowEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollVariationLabelEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollVariationLabelEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	id?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	label?: LabelEOptionalId;
	pollVariation?: PollVariationEOptionalId;
	locationTimeFrame?: PollLocationTimeFrameEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollVariationLabelECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollVariationLabelEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	POLL_VARIATION_LABEL_ID?: number | IQNumberField;
	LABEL_ID?: number | IQNumberField;
	POLL_VARIATION_ID?: number | IQNumberField;
	POLL_LOCATION_TIME_FRAME_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollVariationLabelECreateProperties
extends Partial<PollVariationLabelEId>, PollVariationLabelEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollVariationLabelECreateColumns
extends PollVariationLabelEId, PollVariationLabelEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollVariationLabel extends QImmutableActorRow
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	id: IQNumberField;

	// Non-Id Relations
	label: QLabelQRelation;
	pollVariation: QPollVariationQRelation;
	locationTimeFrame: QPollLocationTimeFrameQRelation;

}


// Entity Id Interface
export interface QPollVariationLabelQId extends QImmutableActorRowQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QPollVariationLabelQRelation
	extends QImmutableActorRowQRelation<QPollVariationLabel>, QPollVariationLabelQId {
}

