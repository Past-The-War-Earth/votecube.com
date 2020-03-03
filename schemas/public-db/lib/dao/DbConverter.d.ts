import { IVersioned, Key } from '@votecube/model';
export interface IDbConverter {
    fromDb<Db, Ui>(dbObject: Db, directProperties: any[], excludedProperties: any[]): Ui;
    toDb<Ui, Delta, Db>(uiObject: Ui, deltas: Delta, originalDbObject: Db, directProperties: any[]): Db;
    toVersionedDb<K extends Key, Ui extends IVersioned<K>, Delta, Db extends IVersioned<K>>(uiObject: Ui, deltas: Delta, originalDbObject: Db, directProperties: any[]): Db;
}
export declare class DbConverter implements IDbConverter {
    fromDb<Db, Ui>(dbObject: Db, directProperties: any[], excludedProperties: any[]): Ui;
    toDb<Ui, Delta, Db>(uiObject: Ui, deltas: Delta, originalDbObject: Db, directProperties: any[], create?: boolean): Db;
    toVersionedDb<K extends Key, Ui extends IVersioned<K>, Delta, Db extends IVersioned<K>>(uiObject: Ui, deltas: Delta, originalDbObject: Db, directProperties: any[]): Db;
    private toDbObject;
}
