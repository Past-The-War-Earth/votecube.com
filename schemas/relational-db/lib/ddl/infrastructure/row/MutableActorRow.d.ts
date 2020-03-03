import { UpdatedAt } from '../../../types/common';
import { ImmutableActorRow } from './ImmutableActorRow';
export declare abstract class MutableActorRow extends ImmutableActorRow {
    updatedAt: UpdatedAt;
}
