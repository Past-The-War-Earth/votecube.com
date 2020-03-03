var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-control';
import { SystemGeneratedRow } from '../row/SystemGeneratedRow';
let RatingReasonTranslation = class RatingReasonTranslation extends SystemGeneratedRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'RATING_REASON_TRANSLATION_ID' })
], RatingReasonTranslation.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_REASON_ID', nullable: false })
], RatingReasonTranslation.prototype, "reason", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'LANGUAGE_ID', nullable: false })
], RatingReasonTranslation.prototype, "language", void 0);
__decorate([
    Column({ name: 'RATING_REASON_NAME', nullable: false })
], RatingReasonTranslation.prototype, "name", void 0);
__decorate([
    Column({ name: 'RATING_REASON_DESCRIPTION', nullable: false })
], RatingReasonTranslation.prototype, "description", void 0);
RatingReasonTranslation = __decorate([
    Entity(),
    Table({ name: 'RATING_REASON_TRANSLATIONS' })
], RatingReasonTranslation);
export { RatingReasonTranslation };
//# sourceMappingURL=RatingReasonTranslation.js.map