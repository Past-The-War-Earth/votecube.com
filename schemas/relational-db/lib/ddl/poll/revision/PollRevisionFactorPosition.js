var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbNumber, DbString, Entity, GeneratedValue, Id, JoinColumn, JoinColumns, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableRow } from '../../infrastructure/row/ImmutableRow';
let PollRevisionFactorPosition = class PollRevisionFactorPosition extends ImmutableRow {
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
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], PollRevisionFactorPosition.prototype, "children", void 0);
PollRevisionFactorPosition = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_FACTOR_POSITIONS' })
], PollRevisionFactorPosition);
export { PollRevisionFactorPosition };
//# sourceMappingURL=PollRevisionFactorPosition.js.map