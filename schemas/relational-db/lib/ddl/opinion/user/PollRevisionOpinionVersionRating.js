var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
let PollRevisionOpinionVersionRating = class PollRevisionOpinionVersionRating extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'POLL_REVISION_OPINION_VERSION_RATING_ID' })
], PollRevisionOpinionVersionRating.prototype, "id", void 0);
__decorate([
    Column({ name: 'IS_CURRENT' })
], PollRevisionOpinionVersionRating.prototype, "isCurrent", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_OPINION_VERSION_ID' })
], PollRevisionOpinionVersionRating.prototype, "pollRevisionOpinionVersion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_ID' })
], PollRevisionOpinionVersionRating.prototype, "rating", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POLL_REVISION_OPINION_VERSION_RATING_ID',
        referencedColumnName: 'POLL_REVISION_OPINION_VERSION_RATING_ID'
    })
], PollRevisionOpinionVersionRating.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], PollRevisionOpinionVersionRating.prototype, "child", void 0);
PollRevisionOpinionVersionRating = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_OPINION_VERSION_RATINGS' })
], PollRevisionOpinionVersionRating);
export { PollRevisionOpinionVersionRating };
//# sourceMappingURL=PollRevisionOpinionVersionRating.js.map