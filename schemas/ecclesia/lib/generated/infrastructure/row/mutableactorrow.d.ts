import { IImmutableActorRow } from './immutableactorrow';
export interface IMutableActorRow extends IImmutableActorRow {
    updatedAt?: Date;
}
