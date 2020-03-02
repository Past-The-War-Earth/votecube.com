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
	FactorOpinionVersionECascadeGraph,
	FactorOpinionVersionEId,
	FactorOpinionVersionEOptionalId,
	FactorOpinionVersionEUpdateProperties,
	FactorOpinionVersionESelect,
	QFactorOpinionVersion,
	QFactorOpinionVersionQId,
	QFactorOpinionVersionQRelation,
} from './qfactoropinionversion';
import {
	PollPositionRevisionECascadeGraph,
	PollPositionRevisionEId,
	PollPositionRevisionEOptionalId,
	PollPositionRevisionEUpdateProperties,
	PollPositionRevisionESelect,
	QPollPositionRevision,
	QPollPositionRevisionQId,
	QPollPositionRevisionQRelation,
} from '../poll/revision/structure/qpollpositionrevision';
import {
	LanguageECascadeGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../infrastructure/qlanguage';
import {
	PositionOpinionVersionRatingECascadeGraph,
	PositionOpinionVersionRatingEId,
	PositionOpinionVersionRatingEOptionalId,
	PositionOpinionVersionRatingEUpdateProperties,
	PositionOpinionVersionRatingESelect,
	QPositionOpinionVersionRating,
	QPositionOpinionVersionRatingQId,
	QPositionOpinionVersionRatingQRelation,
} from './user/qpositionopinionversionrating';
import {
	PositionOpinionVersionTranslationECascadeGraph,
	PositionOpinionVersionTranslationEId,
	PositionOpinionVersionTranslationEOptionalId,
	PositionOpinionVersionTranslationEUpdateProperties,
	PositionOpinionVersionTranslationESelect,
	QPositionOpinionVersionTranslation,
	QPositionOpinionVersionTranslationQId,
	QPositionOpinionVersionTranslationQRelation,
} from './translation/qpositionopinionversiontranslation';
import {
	PositionOpinionVersionRatingCountECascadeGraph,
	PositionOpinionVersionRatingCountEId,
	PositionOpinionVersionRatingCountEOptionalId,
	PositionOpinionVersionRatingCountEUpdateProperties,
	PositionOpinionVersionRatingCountESelect,
	QPositionOpinionVersionRatingCount,
	QPositionOpinionVersionRatingCountQId,
	QPositionOpinionVersionRatingCountQRelation,
} from './count/qpositionopinionversionratingcount';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PositionOpinionVersionESelect
    extends IEntitySelectProperties, PositionOpinionVersionEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factorOpinionVersion?: FactorOpinionVersionESelect;
	pollPositionRevision?: PollPositionRevisionESelect;
	language?: LanguageESelect;
	ratings?: PositionOpinionVersionRatingESelect;
	translations?: PositionOpinionVersionTranslationESelect;
	ratingCounts?: PositionOpinionVersionRatingCountESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PositionOpinionVersionEId
    extends IEntityIdProperties {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PositionOpinionVersionEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PositionOpinionVersionEUpdateProperties
	extends IEntityUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	factorOpinionVersion?: FactorOpinionVersionEOptionalId;
	pollPositionRevision?: PollPositionRevisionEOptionalId;
	language?: LanguageEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PositionOpinionVersionECascadeGraph
	extends IEntityCascadeGraph {
	// Cascading Relations
	ratings?: PositionOpinionVersionRatingECascadeGraph;
	translations?: PositionOpinionVersionTranslationECascadeGraph;
	ratingCounts?: PositionOpinionVersionRatingCountECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PositionOpinionVersionEUpdateColumns
	extends IEntityUpdateColumns {
	// Non-Id Columns
	FACTOR_OPINION_VERSION_ID?: number | IQNumberField;
	POLL_POSITION_REVISION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PositionOpinionVersionECreateProperties
extends Partial<PositionOpinionVersionEId>, PositionOpinionVersionEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PositionOpinionVersionECreateColumns
extends PositionOpinionVersionEId, PositionOpinionVersionEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPositionOpinionVersion extends IQEntity
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	factorOpinionVersion: QFactorOpinionVersionQRelation;
	pollPositionRevision: QPollPositionRevisionQRelation;
	language: QLanguageQRelation;
	ratings: IQOneToManyRelation<QPositionOpinionVersionRating>;
	translations: IQOneToManyRelation<QPositionOpinionVersionTranslation>;
	ratingCounts: IQOneToManyRelation<QPositionOpinionVersionRatingCount>;

}


// Entity Id Interface
export interface QPositionOpinionVersionQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPositionOpinionVersionQRelation
	extends IQRelation<QPositionOpinionVersion>, QPositionOpinionVersionQId {
}

