var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-control';
import { SystemGeneratedRow } from '../../infrastructure/row/SystemGeneratedRow';
/**
 * Belongs to FactorOpinionVersion - does not need user tracking.
 */
let FactorOpinionVersionTranslation = class FactorOpinionVersionTranslation extends SystemGeneratedRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'FACTOR_OPINION_VERSION_TRANSLATION_ID' })
], FactorOpinionVersionTranslation.prototype, "id", void 0);
__decorate([
    Column({ name: 'IS_ORIGINAL', nullable: false })
], FactorOpinionVersionTranslation.prototype, "original", void 0);
__decorate([
    Column({ name: 'TITLE', nullable: false })
], FactorOpinionVersionTranslation.prototype, "title", void 0);
__decorate([
    Column({ name: 'TEXT', nullable: false })
], FactorOpinionVersionTranslation.prototype, "text", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'FACTOR_OPINION_VERSION_ID', nullable: false })
], FactorOpinionVersionTranslation.prototype, "factorOpinionVersion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'LANGUAGE_ID', nullable: false })
], FactorOpinionVersionTranslation.prototype, "language", void 0);
FactorOpinionVersionTranslation = __decorate([
    Entity(),
    Table({ name: 'FACTOR_OPINION_VERSION_TRANSLATIONS' })
], FactorOpinionVersionTranslation);
export { FactorOpinionVersionTranslation };
//# sourceMappingURL=FactorOpinionVersionTranslation.js.map