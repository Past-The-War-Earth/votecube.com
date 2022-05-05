var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-traffic-control';
import { SystemGeneratedRow } from '../../infrastructure/row/SystemGeneratedRow';
/**
 * Belongs to FactorOpinionVersion - does not need user tracking.
 */
let OutcomeOpinionVersionTranslation = class OutcomeOpinionVersionTranslation extends SystemGeneratedRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'OUTCOME_OPINION_VERSION_TRANSLATION_ID' })
], OutcomeOpinionVersionTranslation.prototype, "id", void 0);
__decorate([
    Column({ name: 'IS_ORIGINAL', nullable: false })
], OutcomeOpinionVersionTranslation.prototype, "original", void 0);
__decorate([
    Column({ name: 'TITLE', nullable: false })
], OutcomeOpinionVersionTranslation.prototype, "title", void 0);
__decorate([
    Column({ name: 'TEXT', nullable: false })
], OutcomeOpinionVersionTranslation.prototype, "text", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'OUTCOME_OPINION_VERSION_ID', nullable: false })
], OutcomeOpinionVersionTranslation.prototype, "outcomeOpinionVersion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'LANGUAGE_ID', nullable: false })
], OutcomeOpinionVersionTranslation.prototype, "language", void 0);
OutcomeOpinionVersionTranslation = __decorate([
    Entity(),
    Table({ name: 'OUTCOME_OPINION_VERSION_TRANSLATIONS' })
], OutcomeOpinionVersionTranslation);
export { OutcomeOpinionVersionTranslation };
//# sourceMappingURL=OutcomeOpinionVersionTranslation.js.map