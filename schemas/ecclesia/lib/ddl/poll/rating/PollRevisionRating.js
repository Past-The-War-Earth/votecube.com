var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-traffic-control';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
// export type UserPollRevisionRating_IsCurrent = boolean
/**
 * User ratings for a particular Poll Revision (likely computed from
 * PollRevisionTranslationRating).
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
let PollRevisionRating = class PollRevisionRating extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'POLL_REVISION_RATING_ID' })
], PollRevisionRating.prototype, "id", void 0);
__decorate([
    Column({ name: 'VALUE' })
], PollRevisionRating.prototype, "value", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID' })
], PollRevisionRating.prototype, "pollRevision", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_ID' })
], PollRevisionRating.prototype, "rating", void 0);
PollRevisionRating = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_RATINGS' })
], PollRevisionRating);
export { PollRevisionRating };
//# sourceMappingURL=PollRevisionRating.js.map