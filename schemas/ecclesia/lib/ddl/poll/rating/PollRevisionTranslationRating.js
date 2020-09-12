"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const ground_control_1 = require("@airport/ground-control");
const ImmutableActorRow_1 = require("../../infrastructure/row/ImmutableActorRow");
/**
 * User ratings for a particular Poll Revision Translation.
 *
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
let PollRevisionTranslationRating = class PollRevisionTranslationRating extends ImmutableActorRow_1.ImmutableActorRow {
};
__decorate([
    air_control_1.Id(),
    air_control_1.GeneratedValue(),
    air_control_1.Column({ name: 'POLL_REVISION_TRANSLATION_RATING_ID' })
], PollRevisionTranslationRating.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'VALUE' })
], PollRevisionTranslationRating.prototype, "value", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_RUN_ID' })
], PollRevisionTranslationRating.prototype, "run", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'RATING_ID' })
], PollRevisionTranslationRating.prototype, "rating", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_POLL_REVISION_TRANSLATION_RATING_ID',
        referencedColumnName: 'POLL_REVISION_TRANSLATION_RATING_ID'
    })
], PollRevisionTranslationRating.prototype, "parent", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parent' })
], PollRevisionTranslationRating.prototype, "child", void 0);
PollRevisionTranslationRating = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'POLL_REVISION_TRANSLATION_RATINGS' })
], PollRevisionTranslationRating);
exports.PollRevisionTranslationRating = PollRevisionTranslationRating;
//# sourceMappingURL=PollRevisionTranslationRating.js.map