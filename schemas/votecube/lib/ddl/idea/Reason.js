var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbNumber, DbString, Entity, ManyToOne, Table } from '@airport/air-control';
import { RepositoryEntity } from '@airport/holding-pattern';
let Reason = class Reason extends RepositoryEntity {
};
__decorate([
    Column({ name: 'FACTOR_COORDINATE_AXIS', nullable: false }),
    DbString()
], Reason.prototype, "axis", void 0);
__decorate([
    Column({ name: 'POSITION_ORIENTATION', nullable: false }),
    DbNumber()
], Reason.prototype, "dir", void 0);
__decorate([
    Column({ name: 'FACTOR_NUMBER', nullable: false }),
    DbNumber()
], Reason.prototype, "factorNumber", void 0);
__decorate([
    Column({ name: 'COLOR_BLUE', nullable: false })
], Reason.prototype, "blue", void 0);
__decorate([
    Column({ name: 'COLOR_GREEN', nullable: false })
], Reason.prototype, "green", void 0);
__decorate([
    Column({ name: 'COLOR_RED', nullable: false })
], Reason.prototype, "red", void 0);
__decorate([
    Column({ name: 'OUTCOME_ORDINAL', nullable: false }),
    DbString()
], Reason.prototype, "outcomeOrdinal", void 0);
__decorate([
    ManyToOne()
], Reason.prototype, "ideaSituation", void 0);
__decorate([
    ManyToOne()
], Reason.prototype, "factor", void 0);
__decorate([
    ManyToOne()
], Reason.prototype, "position", void 0);
Reason = __decorate([
    Entity(),
    Table({ name: 'REASONS' })
], Reason);
export { Reason };
//# sourceMappingURL=Reason.js.map