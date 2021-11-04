var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbNumber, DbString, Entity, ManyToOne, Table } from '@airport/air-control';
import { RepositoryEntity } from '@airport/holding-pattern';
let SituationFactorPosition = class SituationFactorPosition extends RepositoryEntity {
};
__decorate([
    Column({ name: 'FACTOR_COORDINATE_AXIS', nullable: false }),
    DbString()
], SituationFactorPosition.prototype, "axis", void 0);
__decorate([
    Column({ name: 'POSITION_ORIENTATION', nullable: false }),
    DbNumber()
], SituationFactorPosition.prototype, "dir", void 0);
__decorate([
    Column({ name: 'FACTOR_NUMBER', nullable: false }),
    DbNumber()
], SituationFactorPosition.prototype, "factorNumber", void 0);
__decorate([
    Column({ name: 'COLOR_BLUE', nullable: false })
], SituationFactorPosition.prototype, "blue", void 0);
__decorate([
    Column({ name: 'COLOR_GREEN', nullable: false })
], SituationFactorPosition.prototype, "green", void 0);
__decorate([
    Column({ name: 'COLOR_RED', nullable: false })
], SituationFactorPosition.prototype, "red", void 0);
__decorate([
    Column({ name: 'OUTCOME_ORDINAL', nullable: false }),
    DbString()
], SituationFactorPosition.prototype, "outcomeOrdinal", void 0);
__decorate([
    ManyToOne()
], SituationFactorPosition.prototype, "situation", void 0);
__decorate([
    ManyToOne()
], SituationFactorPosition.prototype, "factor", void 0);
__decorate([
    ManyToOne()
], SituationFactorPosition.prototype, "position", void 0);
SituationFactorPosition = __decorate([
    Entity(),
    Table({ name: 'SITUATION_FACTOR_POSITIONS' })
], SituationFactorPosition);
export { SituationFactorPosition };
//# sourceMappingURL=SituationFactorPosition.js.map