var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-control';
import { SystemGeneratedRow } from '../row/SystemGeneratedRow';
let RatingTranslation = class RatingTranslation extends SystemGeneratedRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'RATING_TRANSLATION_ID' })
], RatingTranslation.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_ID', nullable: false })
], RatingTranslation.prototype, "rating", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'LANGUAGE_ID', nullable: false })
], RatingTranslation.prototype, "language", void 0);
__decorate([
    Column({ name: 'RATING_NAME', nullable: false })
], RatingTranslation.prototype, "name", void 0);
__decorate([
    Column({ name: 'RATING_DESCRIPTION', nullable: false })
], RatingTranslation.prototype, "description", void 0);
RatingTranslation = __decorate([
    Entity(),
    Table({ name: 'RATING_TRANSLATIONS' })
], RatingTranslation);
export { RatingTranslation };
//# sourceMappingURL=RatingTranslation.js.map