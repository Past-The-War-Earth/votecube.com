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
	OutcomeGraph,
	OutcomeEId,
	OutcomeEOptionalId,
	OutcomeEUpdateProperties,
	OutcomeESelect,
	QOutcome,
	QOutcomeQId,
	QOutcomeQRelation,
} from '../qoutcome';
import {
	Outcome,
} from '../../../../ddl/poll/revision/Outcome';
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
	OutcomeTranslation,
} from '../../../../ddl/poll/revision/translation/OutcomeTranslation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface OutcomeTranslationESelect
    extends ImmutableActorRowESelect, OutcomeTranslationEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	outcome?: OutcomeESelect;
	language?: LanguageESelect;
	type?: TranslationTypeESelect;
	parent?: OutcomeTranslationESelect;
	children?: OutcomeTranslationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface OutcomeTranslationEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface OutcomeTranslationEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface OutcomeTranslationEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	outcome?: OutcomeEOptionalId;
	language?: LanguageEOptionalId;
	type?: TranslationTypeEOptionalId;
	parent?: OutcomeTranslationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface OutcomeTranslationGraph
	extends OutcomeTranslationEOptionalId, ImmutableActorRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;

	// Relations
	outcome?: OutcomeGraph;
	language?: LanguageGraph;
	type?: TranslationTypeGraph;
	parent?: OutcomeTranslationGraph;
	children?: OutcomeTranslationGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface OutcomeTranslationEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	NAME?: string | IQStringField;
	OUTCOME_ID?: number | IQNumberField;
	LANGUAGE_ID?: number | IQNumberField;
	TRANSLATION_TYPE_ID?: number | IQNumberField;
	PARENT_OUTCOME_TRANSLATION_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface OutcomeTranslationECreateProperties
extends Partial<OutcomeTranslationEId>, OutcomeTranslationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface OutcomeTranslationECreateColumns
extends OutcomeTranslationEId, OutcomeTranslationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QOutcomeTranslation extends QImmutableActorRow<OutcomeTranslation>
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	name: IQStringField;

	// Non-Id Relations
	outcome: QOutcomeQRelation;
	language: QLanguageQRelation;
	type: QTranslationTypeQRelation;
	parent: QOutcomeTranslationQRelation;
	children: IQOneToManyRelation<OutcomeTranslation, QOutcomeTranslation>;

}


// Entity Id Interface
export interface QOutcomeTranslationQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QOutcomeTranslationQRelation
	extends QImmutableActorRowQRelation<OutcomeTranslation, QOutcomeTranslation>, QOutcomeTranslationQId {
}

