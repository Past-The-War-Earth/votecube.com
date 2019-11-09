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
	FactorVariationTranslationECascadeGraph,
	FactorVariationTranslationEId,
	FactorVariationTranslationEOptionalId,
	FactorVariationTranslationEUpdateProperties,
	FactorVariationTranslationESelect,
	QFactorVariationTranslation,
	QFactorVariationTranslationQId,
	QFactorVariationTranslationQRelation,
} from '../../../factor/qfactorvariationtranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollVariationFactorTranslationESelect
    extends IEntitySelectProperties, PollVariationFactorTranslationEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces
	pollVariationTranslation?: PollVariationTranslationESelect;
	factorVariationTranslation?: FactorVariationTranslationESelect;

  // Non-Id relations (including OneToMany's)

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollVariationFactorTranslationEId
    extends IEntityIdProperties {
	// Id Properties

	// Id Relations - Ids only
	pollVariationTranslation: PollVariationTranslationEId;
	factorVariationTranslation: FactorVariationTranslationEId;

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollVariationFactorTranslationEOptionalId {
	// Id Properties

	// Id Relations - Ids only
	pollVariationTranslation?: PollVariationTranslationEOptionalId;
	factorVariationTranslation?: FactorVariationTranslationEOptionalId;

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollVariationFactorTranslationEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollVariationFactorTranslationECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollVariationFactorTranslationEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollVariationFactorTranslationECreateProperties
extends Partial<PollVariationFactorTranslationEId>, PollVariationFactorTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollVariationFactorTranslationECreateColumns
extends PollVariationFactorTranslationEId, PollVariationFactorTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollVariationFactorTranslation extends IQEntity
{
	// Id Fields

	// Id Relations
	pollVariationTranslation: QPollVariationTranslationQRelation;
	factorVariationTranslation: QFactorVariationTranslationQRelation;

	// Non-Id Fields

	// Non-Id Relations

}


// Entity Id Interface
export interface QPollVariationFactorTranslationQId
{
	
	// Id Fields

	// Id Relations
	pollVariationTranslation: QPollVariationTranslationQId;
	factorVariationTranslation: QFactorVariationTranslationQId;


}

// Entity Relation Interface
export interface QPollVariationFactorTranslationQRelation
	extends IQRelation<QPollVariationFactorTranslation>, QPollVariationFactorTranslationQId {
}

