var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-traffic-control';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
let PollRevisionOpinionRating = class PollRevisionOpinionRating extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'POLL_REVISION_OPINION_RATING_ID' })
], PollRevisionOpinionRating.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_OPINION_ID' })
], PollRevisionOpinionRating.prototype, "pollRevisionOpinion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_ID' })
], PollRevisionOpinionRating.prototype, "rating", void 0);
PollRevisionOpinionRating = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_OPINION_RATINGS' })
], PollRevisionOpinionRating);
export { PollRevisionOpinionRating };
//# sourceMappingURL=PollRevisionOpinionRating.js.map