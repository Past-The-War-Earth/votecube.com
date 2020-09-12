"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const SystemGeneratedRow_1 = require("../../infrastructure/row/SystemGeneratedRow");
/**
 * Belongs to PollRevisionOpinionVersion - does not need user tracking.
 */
let PollRevisionOpinionVersionTranslation = class PollRevisionOpinionVersionTranslation extends SystemGeneratedRow_1.SystemGeneratedRow {
};
__decorate([
    air_control_1.GeneratedValue(),
    air_control_1.Id(),
    air_control_1.Column({ name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_ID' })
], PollRevisionOpinionVersionTranslation.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_IS_ORIGINAL', nullable: false })
], PollRevisionOpinionVersionTranslation.prototype, "original", void 0);
__decorate([
    air_control_1.Column({ name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_TITLE', nullable: false })
], PollRevisionOpinionVersionTranslation.prototype, "title", void 0);
__decorate([
    air_control_1.Column({ name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_TEXT', nullable: false })
], PollRevisionOpinionVersionTranslation.prototype, "text", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'POLL_REVISION_OPINION_VERSION_ID', nullable: false })
], PollRevisionOpinionVersionTranslation.prototype, "opinionVersion", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'LANGUAGE_ID', nullable: false })
], PollRevisionOpinionVersionTranslation.prototype, "language", void 0);
PollRevisionOpinionVersionTranslation = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'POLL_REVISION_OPINION_VERSION_TRANSLATIONS' })
], PollRevisionOpinionVersionTranslation);
exports.PollRevisionOpinionVersionTranslation = PollRevisionOpinionVersionTranslation;
//# sourceMappingURL=PollRevisionOpinionVersionTranslation.js.map