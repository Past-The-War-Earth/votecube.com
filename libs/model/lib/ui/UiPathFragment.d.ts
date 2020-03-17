import { Id } from '@votecube/relational-db';
import { Doc_Depth, IIdentified } from '../core/common';
import { IUiUserCreated } from './UiUser';
export interface IUiParent<K extends Id> extends IIdentified<K> {
}
export interface IUiVersioned<K extends Id> extends IUiUserCreated<K> {
    depth: Doc_Depth;
    parent: IUiParent<K>;
}
