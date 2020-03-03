import { IQDateField, IQNumberField } from '@airport/air-control';
import { SystemGeneratedRowECascadeGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
/**
 * SELECT - All fields and relations (optional).
 */
export interface DeviceESelect extends SystemGeneratedRowESelect, DeviceEOptionalId {
    hash?: number | IQNumberField;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface DeviceEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface DeviceEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface DeviceEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    hash?: number | IQNumberField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface DeviceECascadeGraph extends SystemGeneratedRowECascadeGraph {
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface DeviceEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    DEVICE_HASH?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface DeviceECreateProperties extends Partial<DeviceEId>, DeviceEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface DeviceECreateColumns extends DeviceEId, DeviceEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QDevice extends QSystemGeneratedRow {
    id: IQNumberField;
    hash: IQNumberField;
}
export interface QDeviceQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QDeviceQRelation extends QSystemGeneratedRowQRelation<QDevice>, QDeviceQId {
}
