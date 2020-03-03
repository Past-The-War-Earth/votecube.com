import { IIdentified, Key }            from '@votecube/model';
import { CollectionName, ICollection } from './common';
import { IVCCollectionReference, IVCDocumentReference } from './DocRef';
export declare class Collection<K extends Key, T extends IIdentified<K>, PK extends Key | null = null, PT extends IIdentified<PK> | null = null> implements ICollection<K, T, PK, PT> {
    name: CollectionName;
    reference: IVCCollectionReference<K, T, PK, PT>;
    constructor(name: CollectionName);
    child<CK extends Key, CT extends IIdentified<CK>>(keyOrReference: K | IVCDocumentReference<K, T, PK, PT>, name: CollectionName, ChildCollectionConstructor?: new (name: CollectionName, parent: ICollection<PK, PT>, parentKeyOrReference: K | IVCDocumentReference<K, T>) => ICollection<CK, CT, K, T>): ICollection<CK, CT, K, T>;
    doc(key?: K): IVCDocumentReference<K, T, PK, PT>;
}
