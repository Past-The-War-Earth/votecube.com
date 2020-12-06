var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
/**
 * User ratings for a particular Poll Revision Translation.
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
let PollRevisionTranslationRating = class PollRevisionTranslationRating extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'POLL_REVISION_TRANSLATION_RATING_ID' })
], PollRevisionTranslationRating.prototype, "id", void 0);
__decorate([
    Column({ name: 'VALUE' })
], PollRevisionTranslationRating.prototype, "value", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_RUN_ID' })
], PollRevisionTranslationRating.prototype, "run", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_ID' })
], PollRevisionTranslationRating.prototype, "rating", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POLL_REVISION_TRANSLATION_RATING_ID',
        referencedColumnName: 'POLL_REVISION_TRANSLATION_RATING_ID'
    })
], PollRevisionTranslationRating.prototype, "parent", void 0);
__decorate([
    OneToMany({ mappedBy: 'parent' })
], PollRevisionTranslationRating.prototype, "child", void 0);
PollRevisionTranslationRating = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_TRANSLATION_RATINGS' })
], PollRevisionTranslationRating);
export { PollRevisionTranslationRating };
//# sourceMappingURL=PollRevisionTranslationRating.js.map