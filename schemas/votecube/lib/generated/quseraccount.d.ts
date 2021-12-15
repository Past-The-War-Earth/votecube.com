import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { UserGraph, UserEOptionalId, UserESelect, QUserQRelation } from '@airport/travel-document-checkpoint';
import { UserAccount } from '../ddl/UserAccount';
/**
 * SELECT - All fields and relations (optional).
 */
export interface UserAccountESelect extends RepositoryEntityESelect, UserAccountEOptionalId {
    userName?: string | IQStringField;
    email?: string | IQStringField;
    passwordHash?: string | IQStringField;
    firstName?: string | IQStringField;
    middleName?: string | IQStringField;
    lastName?: string | IQStringField;
    birthDate?: Date | IQDateField;
    user?: UserESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserAccountEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface UserAccountEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserAccountEUpdateProperties extends RepositoryEntityEUpdateProperties {
    userName?: string | IQStringField;
    email?: string | IQStringField;
    passwordHash?: string | IQStringField;
    firstName?: string | IQStringField;
    middleName?: string | IQStringField;
    lastName?: string | IQStringField;
    birthDate?: Date | IQDateField;
    user?: UserEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserAccountGraph extends UserAccountEOptionalId, RepositoryEntityGraph {
    userName?: string | IQStringField;
    email?: string | IQStringField;
    passwordHash?: string | IQStringField;
    firstName?: string | IQStringField;
    middleName?: string | IQStringField;
    lastName?: string | IQStringField;
    birthDate?: Date | IQDateField;
    user?: UserGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface UserAccountEUpdateColumns extends RepositoryEntityEUpdateColumns {
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
export interface UserAccountECreateProperties extends Partial<UserAccountEId>, UserAccountEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserAccountECreateColumns extends UserAccountEId, UserAccountEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserAccount extends QRepositoryEntity<UserAccount> {
    userName: IQStringField;
    email: IQStringField;
    passwordHash: IQStringField;
    firstName: IQStringField;
    middleName: IQStringField;
    lastName: IQStringField;
    birthDate: IQDateField;
    user: QUserQRelation;
}
export interface QUserAccountQId extends QRepositoryEntityQId {
}
export interface QUserAccountQRelation extends QRepositoryEntityQRelation<UserAccount, QUserAccount>, QUserAccountQId {
}
//# sourceMappingURL=quseraccount.d.ts.map