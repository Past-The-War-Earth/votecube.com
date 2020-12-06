var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbNumber, DbString, Entity, GeneratedValue, Id, JoinColumn, JoinColumns, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { ImmutableRow } from '../../infrastructure/row/ImmutableRow';
let PollRevisionFactorPosition = 
// User information recorded at PollRevisionOpinion level
class PollRevisionFactorPosition extends ImmutableRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'POLL_REVISION_FACTOR_POSITION_ID' })
], PollRevisionFactorPosition.prototype, "id", void 0);
__decorate([
    Column({ name: 'FACTOR_COORDINATE_AXIS', nullable: false }),
    DbString()
], PollRevisionFactorPosition.prototype, "axis", void 0);
__decorate([
    Column({ name: 'POSITION_ORIENTATION', nullable: false }),
    DbNumber()
], PollRevisionFactorPosition.prototype, "dir", void 0);
__decorate([
    Column({ name: 'FACTOR_NUMBER', nullable: false }),
    DbNumber()
], PollRevisionFactorPosition.prototype, "factorNumber", void 0);
__decorate([
    Column({ name: 'COLOR_BLUE', nullable: false })
], PollRevisionFactorPosition.prototype, "blue", void 0);
__decorate([
    Column({ name: 'COLOR_GREEN', nullable: false })
], PollRevisionFactorPosition.prototype, "green", void 0);
__decorate([
    Column({ name: 'COLOR_RED', nullable: false })
], PollRevisionFactorPosition.prototype, "red", void 0);
__decorate([
    Column({ name: 'OUTCOME_ORDINAL', nullable: false }),
    DbString()
], PollRevisionFactorPosition.prototype, "outcomeOrdinal", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'SKIN_ID' })
], PollRevisionFactorPosition.prototype, "skin", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID' })
], PollRevisionFactorPosition.prototype, "pollRevision", void 0);
__decorate([
    ManyToOne(),
    JoinColumns([{
            name: 'FACTOR_ID', nullable: false
        }, {
            name: 'POSITION_ID', nullable: false
        }])
], PollRevisionFactorPosition.prototype, "factorPosition", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POLL_REVISION_FACTOR_POSITION_ID',
        referencedColumnName: 'POLL_REVISION_FACTOR_POSITION_ID'
    })
], PollRevisionFactorPosition.prototype, "parent", void 0);
__decorate([
    OneToMany({ mappedBy: 'parent' })
], PollRevisionFactorPosition.prototype, "children", void 0);
PollRevisionFactorPosition = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_FACTOR_POSITIONS' })
    // User information recorded at PollRevisionOpinion level
], PollRevisionFactorPosition);
export { PollRevisionFactorPosition };
//# sourceMappingURL=PollRevisionFactorPosition.js.map