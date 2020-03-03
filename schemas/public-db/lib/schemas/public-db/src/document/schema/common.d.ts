import { IIdentified, Id } from '@votecube/model';
import { IVCCollectionReference, IVCDocumentReference, IVCFirestore } from './DocRef';
export interface ISchema {
    db: IVCFirestore;
}
export declare type CollectionName = string;
export interface ICollection<K extends Id, T extends IIdentified<K>, PK extends Id | null = null, PT extends IIdentified<PK> | null = null> {
    name: CollectionName;
    reference: IVCCollectionReference<K, T, PK, PT>;
    doc(key?: K): IVCDocumentReference<K, T, PK, PT>;
    child<CK extends Id, CT extends IIdentified<CK>>(keyOrReference: K | IVCDocumentReference<K, T, PK, PT>, name: CollectionName, constructor?: any): ICollection<CK, CT, K, T>;
}
