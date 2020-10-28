var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, MappedSuperclass } from '@airport/air-control';
import { ImmutableActorRow } from './ImmutableActorRow';
let AgeSuitableRow = class AgeSuitableRow extends ImmutableActorRow {
};
__decorate([
    Column({ name: 'AGE_SUITABILITY', nullable: false })
], AgeSuitableRow.prototype, "ageSuitability", void 0);
AgeSuitableRow = __decorate([
    MappedSuperclass()
], AgeSuitableRow);
export { AgeSuitableRow };
//# sourceMappingURL=AgeSuitableRow.js.map