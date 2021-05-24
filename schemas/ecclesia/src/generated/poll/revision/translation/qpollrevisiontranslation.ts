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
	ImmutableActorRowGraph,
	ImmutableActorRowEId,
	ImmutableActorRowEUpdateColumns,
	ImmutableActorRowEUpdateProperties,
	ImmutableActorRowESelect,
	QImmutableActorRowQId,
	QImmutableActorRowQRelation,
	QImmutableActorRow,
} from '../../../infrastructure/row/qimmutableactorrow';
import {
	PollRevisionGraph,
	PollRevisionEId,
	PollRevisionEOptionalId,
	PollRevisionEUpdateProperties,
	PollRevisionESelect,
	QPollRevision,
	QPollRevisionQId,
	QPollRevisionQRelation,
} from '../qpollrevision';
import {
	PollRevision,
} from '../../../../ddl/poll/revision/PollRevision';
import {
	LanguageGraph,
	LanguageEId,
	LanguageEOptionalId,
	LanguageEUpdateProperties,
	LanguageESelect,
	QLanguage,
	QLanguageQId,
	QLanguageQRelation,
} from '../../../infrastructure/qlanguage';
import {
	Language,
} from '../../../../ddl/infrastructure/Language';
import {
	TranslationTypeGraph,
	TranslationTypeEId,
	TranslationTypeEOptionalId,
	TranslationTypeEUpdateProperties,
	TranslationTypeESelect,
	QTranslationType,
	QTranslationTypeQId,
	QTranslationTypeQRelation,
} from '../../../infrastructure/qtranslationtype';
import {
	TranslationType,
} from '../../../../ddl/infrastructure/TranslationType';
import {
	PollRevisionTranslationRatingGraph,
	PollRevisionTranslationRatingEId,
	PollRevisionTranslationRatingEOptionalId,
	PollRevisionTranslationRatingEUpdateProperties,
	PollRevisionTranslationRatingESelect,
	QPollRevisionTranslationRating,
	QPollRevisionTranslationRatingQId,
	QPollRevisionTranslationRatingQRelation,
} from '../../rating/qpollrevisiontranslationrating';
import {
	PollRevisionTranslationRating,
} from '../../../../ddl/poll/rating/PollRevisionTranslationRating';
import {
	PollRevisionTranslation,
} from '../../../../ddl/poll/revision/translation/PollRevisionTranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface PollRevisionTranslationESelect
    extends ImmutableActorRowESelect, PollRevisionTranslationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	pollRevision?: PollRevisionESelect;
	language?: LanguageESelect;
	type?: TranslationTypeESelect;
	parent?: PollRevisionTranslationESelect;
	children?: PollRevisionTranslationESelect;
	ratings?: PollRevisionTranslationRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface PollRevisionTranslationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface PollRevisionTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface PollRevisionTranslationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	pollRevision?: PollRevisionEOptionalId;
	language?: LanguageEOptionalId;
	type?: TranslationTypeEOptionalId;
	parent?: PollRevisionTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface PollRevisionTranslationGraph
	extends PollRevisionTranslationEOptionalId, ImmutableActorRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;

	// Relations
	pollRevision?: PollRevisionGraph;
	language?: LanguageGraph;
	type?: TranslationTypeGraph;
	parent?: PollRevisionTranslationGraph;
	children?: PollRevisionTranslationGraph[];
	ratings?: PollRevisionTranslationRatingGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface PollRevisionTranslationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	POLL_NAME?: string | IQStringField;
	POLL_REVISION_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	TRANSLATION_TYPE_ID?: number | IQNumberField;
	PARENT_POLL_REVISION_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface PollRevisionTranslationECreateProperties
extends Partial<PollRevisionTranslationEId>, PollRevisionTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface PollRevisionTranslationECreateColumns
extends PollRevisionTranslationEId, PollRevisionTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QPollRevisionTranslation extends QImmutableActorRow<PollRevisionTranslation>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations
	pollRevision: QPollRevisionQRelation;
	language: QLanguageQRelation;
	type: QTranslationTypeQRelation;
	parent: QPollRevisionTranslationQRelation;
	children: IQOneToManyRelation<PollRevisionTranslation, QPollRevisionTranslation>;
	ratings: IQOneToManyRelation<PollRevisionTranslationRating, QPollRevisionTranslationRating>;

}


// Entity Id Interface
export interface QPollRevisionTranslationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QPollRevisionTranslationQRelation
	extends QImmutableActorRowQRelation<PollRevisionTranslation, QPollRevisionTranslation>, QPollRevisionTranslationQId {
}

