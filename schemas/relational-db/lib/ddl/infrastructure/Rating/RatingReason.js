var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { SystemGeneratedRow } from '../row/SystemGeneratedRow';
let RatingReason = class RatingReason extends SystemGeneratedRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'RATING_REASON_ID' })
], RatingReason.prototype, "id", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'reason' })
], RatingReason.prototype, "translations", void 0);
RatingReason = __decorate([
    Entity(),
    Table({ name: 'RATING_REASONS' })
], RatingReason);
export { RatingReason };
//# sourceMappingURL=RatingReason.js.map