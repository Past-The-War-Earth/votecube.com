import { IIdentified, Key } from '@votecube/model';
import { Collection }       from './Collection';
import { CollectionName, ISchema } from './common';
export declare class RootCollection<K extends Key, T extends IIdentified<K>> extends Collection<K, T> {
    name: CollectionName;
    schema: ISchema;
    constructor(name: CollectionName, schema: ISchema);
}
