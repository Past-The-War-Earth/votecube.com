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
const SystemGeneratedRow_1 = require("../row/SystemGeneratedRow");
/**
 * Note suitability settings will either have a dedicated UI (like in age suitability),
 * or will be transparent (like country suitability - China).  However they share the
 * same table as all the ratings (since schematically they are the same).  The idea
 * is - rate the poll.  If you think that the poll is good enough to vote or even be shown
 * then you submit a vote.  Rating is about polls.  Voting is about poll opinions.
 */
let Rating = class Rating extends SystemGeneratedRow_1.SystemGeneratedRow {
};
__decorate([
    air_control_1.Id(),
    air_control_1.GeneratedValue(),
    air_control_1.Column({ name: 'RATING_ID' })
], Rating.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'RATING_CSS_CLASS', nullable: false })
], Rating.prototype, "cssClass", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'RATING_TYPE_ID' })
], Rating.prototype, "type", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'rating' })
], Rating.prototype, "settings", void 0);
Rating = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'RATINGS' })
], Rating);
exports.Rating = Rating;
//# sourceMappingURL=Rating.js.map