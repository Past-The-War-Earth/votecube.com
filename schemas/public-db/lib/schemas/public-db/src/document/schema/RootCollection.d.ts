import { IIdentified, Id } from '@votecube/model';
import { Collection } from './Collection';
import { CollectionName, ISchema } from './common';
export declare class RootCollection<K extends Id, T extends IIdentified<K>> extends Collection<K, T> {
    name: CollectionName;
    schema: ISchema;
    constructor(name: CollectionName, schema: ISchema);
}
