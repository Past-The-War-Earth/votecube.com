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
} from '../infrastructure/row/qimmutableactorrow';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SkinESelect
    extends ImmutableActorRowESelect, SkinEOptionalId {
	// Non-Id Properties
	backgroundColor?: number | IQNumberField;
	textColor?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	parent?: SkinESelect;
	children?: SkinESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SkinEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SkinEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SkinEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	backgroundColor?: number | IQNumberField;
	textColor?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	parent?: SkinEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SkinGraph
	extends SkinEOptionalId, ImmutableActorRowGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	backgroundColor?: number | IQNumberField;
	textColor?: number | IQNumberField;

	// Relations
	parent?: SkinGraph;
	children?: SkinGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SkinEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_ACCOUNT_ID?: number | IQNumberField;
	BACKGROUND_COLOR_ID?: number | IQNumberField;
	TEXT_COLOR_ID?: number | IQNumberField;
	PARENT_SKIN_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SkinECreateProperties
extends Partial<SkinEId>, SkinEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SkinECreateColumns
extends SkinEId, SkinEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSkin extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	backgroundColor: IQNumberField;
	textColor: IQNumberField;

	// Non-Id Relations
	parent: QSkinQRelation;
	children: IQOneToManyRelation<QSkin>;

}


// Entity Id Interface
export interface QSkinQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QSkinQRelation
	extends QImmutableActorRowQRelation<QSkin>, QSkinQId {
}

