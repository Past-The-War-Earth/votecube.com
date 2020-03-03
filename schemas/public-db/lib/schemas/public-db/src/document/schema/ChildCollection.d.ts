import { IIdentified, Id } from '@votecube/model';
import { Collection } from './Collection';
import { CollectionName, ICollection } from './common';
import { IVCCollectionReference, IVCDocumentReference } from './DocRef';
export declare class ChildCollection<K extends Id, T extends IIdentified<K>, PK extends Id, PT extends IIdentified<PK>> extends Collection<K, T, PK, PT> {
    name: CollectionName;
    parent: ICollection<PK, PT>;
    reference: IVCCollectionReference<K, T, PK, PT>;
    constructor(name: CollectionName, parent: ICollection<PK, PT>, parentKeyOrReference: Id | IVCDocumentReference<PK, PT>);
}
