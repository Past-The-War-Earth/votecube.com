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
	IFactorOpinionVersion,
	FactorOpinionVersionECascadeGraph,
	FactorOpinionVersionEId,
	FactorOpinionVersionEOptionalId,
	FactorOpinionVersionEUpdateProperties,
	FactorOpinionVersionESelect,
	QFactorOpinionVersion,
	QFactorOpinionVersionQId,
	QFactorOpinionVersionQRelation,
} from '../qfactoropinionversion';
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
} from '../../infrastructure/rating/qrating';


declare function require(moduleName: string): any;


//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IFactorOpinionVersionRating extends IImmutableActorRow {
	
	// Id Properties
	id: number;

	// Id Relations

	// Non-Id Properties
	isCurrent?: boolean;

	// Non-Id Relations
	factorOpinionVersion?: IFactorOpinionVersion;
	rating?: IRating;
	parent?: IFactorOpinionVersionRating;
	child?: IFactorOpinionVersionRating[];

	// Transient Properties

	// Public Methods
	
}		
		
//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface FactorOpinionVersionRatingESelect
    extends ImmutableActorRowESelect, FactorOpinionVersionRatingEOptionalId {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	factorOpinionVersion?: FactorOpinionVersionESelect;
	rating?: RatingESelect;
	parent?: FactorOpinionVersionRatingESelect;
	child?: FactorOpinionVersionRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface FactorOpinionVersionRatingEId
    extends ImmutableActorRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface FactorOpinionVersionRatingEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface FactorOpinionVersionRatingEUpdateProperties
	extends ImmutableActorRowEUpdateProperties {
	// Non-Id Properties
	isCurrent?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	factorOpinionVersion?: FactorOpinionVersionEOptionalId;
	rating?: RatingEOptionalId;
	parent?: FactorOpinionVersionRatingEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface FactorOpinionVersionRatingECascadeGraph
	extends ImmutableActorRowECascadeGraph {
	// Cascading Relations
	child?: FactorOpinionVersionRatingECascadeGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface FactorOpinionVersionRatingEUpdateColumns
	extends ImmutableActorRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	ACTOR_ID?: number | IQNumberField;
	FACTOR_OPINION_VERSION_RATING_IS_CURRENT?: boolean | IQBooleanField;
	FACTOR_OPINION_VERSION_ID?: number | IQNumberField;
	RATING_ID?: number | IQNumberField;
	PARENT_FACTOR_OPINION_VERSION_RATING_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface FactorOpinionVersionRatingECreateProperties
extends Partial<FactorOpinionVersionRatingEId>, FactorOpinionVersionRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface FactorOpinionVersionRatingECreateColumns
extends FactorOpinionVersionRatingEId, FactorOpinionVersionRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QFactorOpinionVersionRating extends QImmutableActorRow
{
	// Id Fields
	id: IQNumberField;

	// Id Relations

	// Non-Id Fields
	isCurrent: IQBooleanField;

	// Non-Id Relations
	factorOpinionVersion: QFactorOpinionVersionQRelation;
	rating: QRatingQRelation;
	parent: QFactorOpinionVersionRatingQRelation;
	child: IQOneToManyRelation<QFactorOpinionVersionRating>;

}


// Entity Id Interface
export interface QFactorOpinionVersionRatingQId extends QImmutableActorRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QFactorOpinionVersionRatingQRelation
	extends QImmutableActorRowQRelation<QFactorOpinionVersionRating>, QFactorOpinionVersionRatingQId {
}

