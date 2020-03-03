import { IIdentified, Key }                                           from '@votecube/model';
import { IVCCollectionReference, IVCDocumentReference, IVCFirestore } from './DocRef';
export interface ISchema {
    db: IVCFirestore;
}
export declare type CollectionName = string;
export interface ICollection<K extends Key, T extends IIdentified<K>, PK extends Key | null = null, PT extends IIdentified<PK> | null = null> {
    name: CollectionName;
    reference: IVCCollectionReference<K, T, PK, PT>;
    doc(key?: K): IVCDocumentReference<K, T, PK, PT>;
    child<CK extends Key, CT extends IIdentified<CK>>(keyOrReference: K | IVCDocumentReference<K, T, PK, PT>, name: CollectionName, constructor?: any): ICollection<CK, CT, K, T>;
}
