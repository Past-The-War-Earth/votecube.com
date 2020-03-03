import { IImmutableRow } from './immutablerow';
import { IActor } from '../../user/actor';
export interface IImmutableActorRow extends IImmutableRow {
    actor?: IActor;
}
