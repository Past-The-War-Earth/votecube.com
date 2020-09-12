import { IImmutableRow } from './immutablerow';
import { IActor } from '../../user/actor';
import { IUserAccount } from '../../user/useraccount';
export interface IImmutableActorRow extends IImmutableRow {
    actor?: IActor;
    userAccount?: IUserAccount;
}
