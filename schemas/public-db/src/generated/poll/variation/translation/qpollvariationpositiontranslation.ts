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
	IPollVariationTranslation,
	PollVariationTranslationECascadeGraph,
	PollVariationTranslationEId,
	PollVariationTranslationEOptionalId,
	PollVariationTranslationEUpdateProperties,
	PollVariationTranslationESelect,
	QPollVariationTranslation,
	QPollVariationTranslationQId,
	QPollVariationTranslationQRelation,
} from './qpollvariationtranslation';
import {
	IPositionVariationTranslation,
	PositionVariationTranslationECascadeGraph,
	PositionVariationTranslationEId,
	PositionVariationTranslationEOptionalId,
	PositionVariationTranslationEUpdateProperties,
	PositionVariationTranslationESelect,
	QPositionVariationTranslation,
	QPositionVariationTranslationQId,
	QPositionVariationTranslationQRelation,
} from '../../../factor/position/qpositionvariationtranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IPollVariationPositionTranslation {
	
	// Id Properties

	// Id Relations
	pollVariationTranslation: IPollVariationTranslation;
	positionVariationTranslation: IPositionVariationTranslation;

	// Non-Id Properties

	// Non-Id Relations

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollVariationPositionTranslationESelect
    extends IEntitySelectProperties, PollVariationPositionTranslationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces
	pollVariationTranslation?: PollVariationTranslationESelect;
	positionVariationTranslation?: PositionVariationTranslationESelect;

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollVariationPositionTranslationEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only
	pollVariationTranslation: PollVariationTranslationEId;
	positionVariationTranslation: PositionVariationTranslationEId;

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollVariationPositionTranslationEOptionalId {
	// Id Properties

	// Id Relations - Ids only
	pollVariationTranslation?: PollVariationTranslationEOptionalId;
	positionVariationTranslation?: PositionVariationTranslationEOptionalId;

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollVariationPositionTranslationEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollVariationPositionTranslationECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollVariationPositionTranslationEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollVariationPositionTranslationECreateProperties
extends Partial<PollVariationPositionTranslationEId>, PollVariationPositionTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollVariationPositionTranslationECreateColumns
extends PollVariationPositionTranslationEId, PollVariationPositionTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollVariationPositionTranslation extends IQEntity
{
	// Id Fields

	// Id Relations
	pollVariationTranslation: QPollVariationTranslationQRelation;
	positionVariationTranslation: QPositionVariationTranslationQRelation;

	// Non-Id Fields

	// Non-Id Relations

}


// Entity Id Interface
export interface QPollVariationPositionTranslationQId
{
	
	// Id Fields

	// Id Relations
	pollVariationTranslation: QPollVariationTranslationQId;
	positionVariationTranslation: QPositionVariationTranslationQId;


}

// Entity Relation Interface
export interface QPollVariationPositionTranslationQRelation
	extends IQRelation<QPollVariationPositionTranslation>, QPollVariationPositionTranslationQId {
}

