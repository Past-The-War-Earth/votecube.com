var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, Table } from '@airport/air-control';
import { SystemGeneratedRow } from '../row/SystemGeneratedRow';
let RatingType = class RatingType extends SystemGeneratedRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'RATING_TYPE_ID' })
], RatingType.prototype, "id", void 0);
__decorate([
    Column({ name: 'RATING_TYPE_CODE', nullable: false })
], RatingType.prototype, "code", void 0);
__decorate([
    Column({ name: 'RATING_TYPE_DESCRIPTION', nullable: false })
], RatingType.prototype, "description", void 0);
RatingType = __decorate([
    Entity(),
    Table({ name: 'RATING_TYPES' })
], RatingType);
export { RatingType };
//# sourceMappingURL=RatingType.js.map