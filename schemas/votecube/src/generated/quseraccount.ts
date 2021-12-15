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
	RepositoryEntityGraph,
	RepositoryEntityEId,
	RepositoryEntityEUpdateColumns,
	RepositoryEntityEUpdateProperties,
	RepositoryEntityESelect,
	QRepositoryEntityQId,
	QRepositoryEntityQRelation,
	QRepositoryEntity,
} from '@airport/holding-pattern';
import {
	UserGraph,
	UserEId,
	UserEOptionalId,
	UserEUpdateProperties,
	UserESelect,
	QUser,
	QUserQId,
	QUserQRelation,
	User,
} from '@airport/travel-document-checkpoint';
import {
	UserAccount,
} from '../ddl/UserAccount';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserAccountESelect
    extends RepositoryEntityESelect, UserAccountEOptionalId {
	// Non-Id Properties
	userName?: string | IQStringField;
	email?: string | IQStringField;
	passwordHash?: string | IQStringField;
	firstName?: string | IQStringField;
	middleName?: string | IQStringField;
	lastName?: string | IQStringField;
	birthDate?: Date | IQDateField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	user?: UserESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserAccountEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserAccountEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserAccountEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	userName?: string | IQStringField;
	email?: string | IQStringField;
	passwordHash?: string | IQStringField;
	firstName?: string | IQStringField;
	middleName?: string | IQStringField;
	lastName?: string | IQStringField;
	birthDate?: Date | IQDateField;

	// Non-Id Relations - ids only & no OneToMany's
	user?: UserEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserAccountGraph
	extends UserAccountEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	userName?: string | IQStringField;
	email?: string | IQStringField;
	passwordHash?: string | IQStringField;
	firstName?: string | IQStringField;
	middleName?: string | IQStringField;
	lastName?: string | IQStringField;
	birthDate?: Date | IQDateField;

	// Relations
	user?: UserGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserAccountEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	USER_NAME?: string | IQStringField;
	EMAIL?: string | IQStringField;
	PASSWORD_HASH?: string | IQStringField;
	FIRST_NAME?: string | IQStringField;
	MIDDLE_NAME?: string | IQStringField;
	LAST_NAME?: string | IQStringField;
	BIRTH_DATE?: Date | IQDateField;
	USER_ID?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserAccountECreateProperties
extends Partial<UserAccountEId>, UserAccountEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserAccountECreateColumns
extends UserAccountEId, UserAccountEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserAccount extends QRepositoryEntity<UserAccount>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	userName: IQStringField;
	email: IQStringField;
	passwordHash: IQStringField;
	firstName: IQStringField;
	middleName: IQStringField;
	lastName: IQStringField;
	birthDate: IQDateField;

	// Non-Id Relations
	user: QUserQRelation;

}


// Entity Id Interface
export interface QUserAccountQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QUserAccountQRelation
	extends QRepositoryEntityQRelation<UserAccount, QUserAccount>, QUserAccountQId {
}

