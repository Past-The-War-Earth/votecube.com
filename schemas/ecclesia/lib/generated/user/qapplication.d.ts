import { IQDateField, IQNumberField, IQStringField } from '@airport/air-traffic-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { Application } from '../../ddl/user/Application';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ApplicationESelect extends SystemGeneratedRowESelect, ApplicationEOptionalId {
    host?: string | IQStringField;
    port?: number | IQNumberField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ApplicationEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface ApplicationEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ApplicationEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    host?: string | IQStringField;
    port?: number | IQNumberField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ApplicationGraph extends ApplicationEOptionalId, SystemGeneratedRowGraph {
    host?: string | IQStringField;
    port?: number | IQNumberField;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ApplicationEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    HOST?: string | IQStringField;
    PORT?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ApplicationECreateProperties extends Partial<ApplicationEId>, ApplicationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ApplicationECreateColumns extends ApplicationEId, ApplicationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QApplication extends QSystemGeneratedRow<Application> {
    id: IQNumberField;
    host: IQStringField;
    port: IQNumberField;
}
export interface QApplicationQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QApplicationQRelation extends QSystemGeneratedRowQRelation<Application, QApplication>, QApplicationQId {
}
//# sourceMappingURL=qapplication.d.ts.map