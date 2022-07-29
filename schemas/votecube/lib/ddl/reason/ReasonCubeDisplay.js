var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from '@airport/holding-pattern';
import { Column, DbNumber, DbString, Entity, Table } from '@airport/tarmaq-entity';
let ReasonCubeDisplay = class ReasonCubeDisplay extends AirEntity {
};
__decorate([
    Column({ name: 'FACTOR_COORDINATE_AXIS', nullable: false }),
    DbString()
], ReasonCubeDisplay.prototype, "axis", void 0);
__decorate([
    Column({ name: 'POSITION_ORIENTATION', nullable: false }),
    DbNumber()
], ReasonCubeDisplay.prototype, "dir", void 0);
__decorate([
    Column({ name: 'FACTOR_NUMBER', nullable: false }),
    DbNumber()
], ReasonCubeDisplay.prototype, "factorNumber", void 0);
__decorate([
    Column({ name: 'COLOR_BLUE', nullable: false })
], ReasonCubeDisplay.prototype, "blue", void 0);
__decorate([
    Column({ name: 'COLOR_GREEN', nullable: false })
], ReasonCubeDisplay.prototype, "green", void 0);
__decorate([
    Column({ name: 'COLOR_RED', nullable: false })
], ReasonCubeDisplay.prototype, "red", void 0);
ReasonCubeDisplay = __decorate([
    Entity(),
    Table({ name: 'REASONS_CUBE_DISPLAYS' })
], ReasonCubeDisplay);
export { ReasonCubeDisplay };
//# sourceMappingURL=ReasonCubeDisplay.js.map