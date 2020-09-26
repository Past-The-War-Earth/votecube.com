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
	SystemGeneratedRowGraph,
	SystemGeneratedRowEId,
	SystemGeneratedRowEUpdateColumns,
	SystemGeneratedRowEUpdateProperties,
	SystemGeneratedRowESelect,
	QSystemGeneratedRowQId,
	QSystemGeneratedRowQRelation,
	QSystemGeneratedRow,
} from '../infrastructure/row/qsystemgeneratedrow';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserAccountESelect
    extends SystemGeneratedRowESelect, UserAccountEOptionalId {
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

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserAccountEId
    extends SystemGeneratedRowEId {
	// Id Properties
	id: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserAccountEOptionalId {
	// Id Properties
	id?: number | IQNumberField;

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserAccountEUpdateProperties
	extends SystemGeneratedRowEUpdateProperties {
	// Non-Id Properties
	userName?: string | IQStringField;
	email?: string | IQStringField;
	passwordHash?: string | IQStringField;
	firstName?: string | IQStringField;
	middleName?: string | IQStringField;
	lastName?: string | IQStringField;
	birthDate?: Date | IQDateField;

	// Non-Id Relations - ids only & no OneToMany's

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserAccountGraph
	extends SystemGeneratedRowESelect, UserAccountEOptionalId, SystemGeneratedRowGraph {
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

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserAccountEUpdateColumns
	extends SystemGeneratedRowEUpdateColumns {
	// Non-Id Columns
	CREATED_AT?: Date | IQDateField;
	USER_NAME?: string | IQStringField;
	EMAIL?: string | IQStringField;
	PASSWORD_HASH?: string | IQStringField;
	FIRST_NAME?: string | IQStringField;
	MIDDLE_NAME?: string | IQStringField;
	LAST_NAME?: string | IQStringField;
	BIRTH_DATE?: Date | IQDateField;

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
export interface QUserAccount extends QSystemGeneratedRow
{
	// Id Fields
	id: IQNumberField;

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

}


// Entity Id Interface
export interface QUserAccountQId extends QSystemGeneratedRowQId
{
	
	// Id Fields
	id: IQNumberField;

	// Id Relations


}

// Entity Relation Interface
export interface QUserAccountQRelation
	extends QSystemGeneratedRowQRelation<QUserAccount>, QUserAccountQId {
}

