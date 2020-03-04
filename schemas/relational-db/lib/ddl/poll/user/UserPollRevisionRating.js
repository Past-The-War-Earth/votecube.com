var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-control';
import { MutableActorRow } from '../../infrastructure/row/MutableActorRow';
// export type UserPollRevisionRating_IsCurrent = boolean
/**
 * User ratings for a particular Poll Revision (likely computed from
 * PollRevisionTranslationRating).
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
let UserPollRevisionRating = class UserPollRevisionRating extends MutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'USER_POLL_REVISION_RATING_ID' })
], UserPollRevisionRating.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'USER_POLL_REVISION_ID' })
], UserPollRevisionRating.prototype, "userPollRevision", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID' })
], UserPollRevisionRating.prototype, "pollRevision", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_ID' })
], UserPollRevisionRating.prototype, "rating", void 0);
UserPollRevisionRating = __decorate([
    Entity(),
    Table({ name: 'USER_POLL_REVISION_RATINGS' })
], UserPollRevisionRating);
export { UserPollRevisionRating };
//# sourceMappingURL=UserPollRevisionRating.js.map