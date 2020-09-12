"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const ImmutableActorRow_1 = require("../../infrastructure/row/ImmutableActorRow");
/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
let PollRevisionOpinionRating = class PollRevisionOpinionRating extends ImmutableActorRow_1.ImmutableActorRow {
};
__decorate([
    air_control_1.Id(),
    air_control_1.GeneratedValue(),
    air_control_1.Column({ name: 'POLL_REVISION_OPINION_RATING_ID' })
], PollRevisionOpinionRating.prototype, "id", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_REVISION_OPINION_ID' })
], PollRevisionOpinionRating.prototype, "pollRevisionOpinion", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'RATING_ID' })
], PollRevisionOpinionRating.prototype, "rating", void 0);
PollRevisionOpinionRating = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'POLL_REVISION_OPINION_RATINGS' })
], PollRevisionOpinionRating);
exports.PollRevisionOpinionRating = PollRevisionOpinionRating;
//# sourceMappingURL=PollRevisionOpinionRating.js.map