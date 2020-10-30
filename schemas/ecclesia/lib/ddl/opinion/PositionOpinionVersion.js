var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
/**
 * Belongs to FactorOpinionVersion - does not need user or creation tracking.
 */
let PositionOpinionVersion = 
// User information recorded at PollRevisionOpinion level
class PositionOpinionVersion {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'POSITION_OPINION_VERSION_ID' })
], PositionOpinionVersion.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'POLL_REVISION_OPINION_ID', nullable: false
    })
], PositionOpinionVersion.prototype, "pollRevisionOpinion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'POLL_REVISION_FACTOR_POSITION_ID', nullable: false
    })
], PositionOpinionVersion.prototype, "factorPosition", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POSITION_OPINION_VERSION_ID',
        referencedColumnName: 'POSITION_OPINION_VERSION_ID'
    })
], PositionOpinionVersion.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], PositionOpinionVersion.prototype, "children", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'positionOpinionVersion' })
], PositionOpinionVersion.prototype, "translations", void 0);
PositionOpinionVersion = __decorate([
    Entity(),
    Table({ name: 'POSITION_OPINION_VERSIONS' })
    // User information recorded at PollRevisionOpinion level
], PositionOpinionVersion);
export { PositionOpinionVersion };
//# sourceMappingURL=PositionOpinionVersion.js.map