var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-traffic-control';
import { SystemGeneratedRow } from '../../infrastructure/row/SystemGeneratedRow';
/**
 * Belongs to PollRevisionOpinionVersion - does not need user tracking.
 */
let PollRevisionOpinionVersionTranslation = class PollRevisionOpinionVersionTranslation extends SystemGeneratedRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_ID' })
], PollRevisionOpinionVersionTranslation.prototype, "id", void 0);
__decorate([
    Column({ name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_IS_ORIGINAL', nullable: false })
], PollRevisionOpinionVersionTranslation.prototype, "original", void 0);
__decorate([
    Column({ name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_TITLE', nullable: false })
], PollRevisionOpinionVersionTranslation.prototype, "title", void 0);
__decorate([
    Column({ name: 'POLL_REVISION_OPINION_VERSION_TRANSLATION_TEXT', nullable: false })
], PollRevisionOpinionVersionTranslation.prototype, "text", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_OPINION_VERSION_ID', nullable: false })
], PollRevisionOpinionVersionTranslation.prototype, "opinionVersion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'LANGUAGE_ID', nullable: false })
], PollRevisionOpinionVersionTranslation.prototype, "language", void 0);
PollRevisionOpinionVersionTranslation = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_OPINION_VERSION_TRANSLATIONS' })
], PollRevisionOpinionVersionTranslation);
export { PollRevisionOpinionVersionTranslation };
//# sourceMappingURL=PollRevisionOpinionVersionTranslation.js.map