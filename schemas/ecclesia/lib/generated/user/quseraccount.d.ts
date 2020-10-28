import { IQDateField, IQNumberField, IQStringField } from '@airport/air-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface UserAccountESelect extends SystemGeneratedRowESelect, UserAccountEOptionalId {
    userName?: string | IQStringField;
    email?: string | IQStringField;
    passwordHash?: string | IQStringField;
    firstName?: string | IQStringField;
    middleName?: string | IQStringField;
    lastName?: string | IQStringField;
    birthDate?: Date | IQDateField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserAccountEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface UserAccountEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserAccountEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    userName?: string | IQStringField;
    email?: string | IQStringField;
    passwordHash?: string | IQStringField;
    firstName?: string | IQStringField;
    middleName?: string | IQStringField;
    lastName?: string | IQStringField;
    birthDate?: Date | IQDateField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserAccountGraph extends UserAccountEOptionalId, SystemGeneratedRowGraph {
    userName?: string | IQStringField;
    email?: string | IQStringField;
    passwordHash?: string | IQStringField;
    firstName?: string | IQStringField;
    middleName?: string | IQStringField;
    lastName?: string | IQStringField;
    birthDate?: Date | IQDateField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface UserAccountEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
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
export interface QUserAccount extends QSystemGeneratedRow {
    id: IQNumberField;
    userName: IQStringField;
    email: IQStringField;
    passwordHash: IQStringField;
    firstName: IQStringField;
    middleName: IQStringField;
    lastName: IQStringField;
    birthDate: IQDateField;
}
export interface QUserAccountQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QUserAccountQRelation extends QSystemGeneratedRowQRelation<QUserAccount>, QUserAccountQId {
}
//# sourceMappingURL=quseraccount.d.ts.map