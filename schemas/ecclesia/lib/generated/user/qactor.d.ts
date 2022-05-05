import { IQDateField, IQNumberField } from '@airport/air-traffic-control';
import { SystemGeneratedRowGraph, SystemGeneratedRowEId, SystemGeneratedRowEUpdateColumns, SystemGeneratedRowEUpdateProperties, SystemGeneratedRowESelect, QSystemGeneratedRowQId, QSystemGeneratedRowQRelation, QSystemGeneratedRow } from '../infrastructure/row/qsystemgeneratedrow';
import { UserAccountGraph, UserAccountEOptionalId, UserAccountESelect, QUserAccountQRelation } from './quseraccount';
import { DeviceGraph, DeviceEOptionalId, DeviceESelect, QDeviceQRelation } from './qdevice';
import { ApplicationGraph, ApplicationEOptionalId, ApplicationESelect, QApplicationQRelation } from './qapplication';
import { Actor } from '../../ddl/user/Actor';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ActorESelect extends SystemGeneratedRowESelect, ActorEOptionalId {
    hash?: number | IQNumberField;
    userAccount?: UserAccountESelect;
    device?: DeviceESelect;
    application?: ApplicationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ActorEId extends SystemGeneratedRowEId {
    id: number | IQNumberField;
}
/**
 * Ids fields and relations only (optional).
 */
export interface ActorEOptionalId {
    id?: number | IQNumberField;
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ActorEUpdateProperties extends SystemGeneratedRowEUpdateProperties {
    hash?: number | IQNumberField;
    userAccount?: UserAccountEOptionalId;
    device?: DeviceEOptionalId;
    application?: ApplicationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ActorGraph extends ActorEOptionalId, SystemGeneratedRowGraph {
    hash?: number | IQNumberField;
    userAccount?: UserAccountGraph;
    device?: DeviceGraph;
    application?: ApplicationGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ActorEUpdateColumns extends SystemGeneratedRowEUpdateColumns {
    CREATED_AT?: Date | IQDateField;
    ACTOR_HASH?: number | IQNumberField;
    USER_ACCOUNT_ID?: number | IQNumberField;
    DEVICE_ID?: number | IQNumberField;
    APPLICATION_ID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ActorECreateProperties extends Partial<ActorEId>, ActorEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ActorECreateColumns extends ActorEId, ActorEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QActor extends QSystemGeneratedRow<Actor> {
    id: IQNumberField;
    hash: IQNumberField;
    userAccount: QUserAccountQRelation;
    device: QDeviceQRelation;
    application: QApplicationQRelation;
}
export interface QActorQId extends QSystemGeneratedRowQId {
    id: IQNumberField;
}
export interface QActorQRelation extends QSystemGeneratedRowQRelation<Actor, QActor>, QActorQId {
}
//# sourceMappingURL=qactor.d.ts.map