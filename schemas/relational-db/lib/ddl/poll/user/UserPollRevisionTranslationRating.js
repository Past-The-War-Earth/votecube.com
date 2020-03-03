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
 * User ratings for a particular Poll Revision Translation.
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
let UserPollRevisionTranslationRating = class UserPollRevisionTranslationRating extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'USER_POLL_REVISION_TRANSLATION_RATING_ID' })
], UserPollRevisionTranslationRating.prototype, "id", void 0);
__decorate([
    Column({ name: 'USER_POLL_REVISION_TRANSLATION_RATING_IS_CURRENT' })
], UserPollRevisionTranslationRating.prototype, "isCurrent", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'USER_POLL_REVISION_TRANSLATION_ID' })
], UserPollRevisionTranslationRating.prototype, "userPollRevisionTranslation", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_TRANSLATION_ID' })
], UserPollRevisionTranslationRating.prototype, "pollRevisionTranslation", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_RUN_ID' })
], UserPollRevisionTranslationRating.prototype, "run", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_ID' })
], UserPollRevisionTranslationRating.prototype, "rating", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_USER_POLL_REVISION_TRANSLATION_RATING_ID',
        referencedColumnName: 'USER_POLL_REVISION_TRANSLATION_RATING_ID'
    })
], UserPollRevisionTranslationRating.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], UserPollRevisionTranslationRating.prototype, "child", void 0);
UserPollRevisionTranslationRating = __decorate([
    Entity(),
    Table({ name: 'USER_POLL_REVISION_TRANSLATION_RATINGS' })
], UserPollRevisionTranslationRating);
export { UserPollRevisionTranslationRating };
//# sourceMappingURL=UserPollRevisionTranslationRating.js.map