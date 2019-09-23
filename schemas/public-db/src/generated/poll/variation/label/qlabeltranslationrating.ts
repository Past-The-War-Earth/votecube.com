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
} from '../../../infrastructure/qimmutableactorrow';
import {
	ILabelTranslation,
	LabelTranslationECascadeGraph,
	LabelTranslationEId,
	LabelTranslationEOptionalId,
	LabelTranslationEUpdateProperties,
	LabelTranslationESelect,
	QLabelTranslation,
	QLabelTranslationQId,
	QLabelTranslationQRelation,
} from './qlabeltranslation';
import {
	IRating,
	RatingECascadeGraph,
	RatingEId,
	RatingEOptionalId,
	RatingEUpdateProperties,
	RatingESelect,
	QRating,
	QRatingQId,
	QRatingQRelation,
} from '../../../infrastructure/rating/qrating';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ILabelTranslationRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	labelTranslation?: ILabelTranslation;
	rating?: IRating;
	parent?: ILabelTranslationRating;
	child?: ILabelTranslationRating[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface LabelTranslationRatingESelect
    extends ImmutableActorRowESelect, LabelTranslationRatingEOptionalId {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	labelTranslation?: LabelTranslationESelect;
	rating?: RatingESelect;
	parent?: LabelTranslationRatingESelect;
	child?: LabelTranslationRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface LabelTranslationRatingEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface LabelTranslationRatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface LabelTranslationRatingEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	labelTranslation?: LabelTranslationEOptionalId;
	rating?: RatingEOptionalId;
	parent?: LabelTranslationRatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface LabelTranslationRatingECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	child?: LabelTranslationRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface LabelTranslationRatingEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	LABEL_TRANSLATION_RATING_IS_CURRENT?: boolean | IQBooleanField;
	LABEL_TRANSLATION_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;
	PARENT_LABEL_TRANSLATION_RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface LabelTranslationRatingECreateProperties
extends Partial<LabelTranslationRatingEId>, LabelTranslationRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface LabelTranslationRatingECreateColumns
extends LabelTranslationRatingEId, LabelTranslationRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QLabelTranslationRating extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	isCurrent: IQBooleanField;

	// Non-Id Relations
	labelTranslation: QLabelTranslationQRelation;
	rating: QRatingQRelation;
	parent: QLabelTranslationRatingQRelation;
	child: IQOneToManyRelation<QLabelTranslationRating>;

}


// Entity Id Interface
export interface QLabelTranslationRatingQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QLabelTranslationRatingQRelation
	extends QImmutableActorRowQRelation<QLabelTranslationRating>, QLabelTranslationRatingQId {
}

