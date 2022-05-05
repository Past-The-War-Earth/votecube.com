var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-traffic-control';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
let FactorPosition = class FactorPosition extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'FACTOR_POSITION_ID' })
], FactorPosition.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'FACTOR_ID' })
], FactorPosition.prototype, "factor", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POSITION_ID' })
], FactorPosition.prototype, "position", void 0);
FactorPosition = __decorate([
    Entity(),
    Table({ name: 'FACTOR_POSITIONS' })
], FactorPosition);
export { FactorPosition };
//# sourceMappingURL=FactorPosition.js.map