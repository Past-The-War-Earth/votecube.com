var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-traffic-control';
import { ImmutableRow } from '../infrastructure/row/ImmutableRow';
/**
 * This the computed translation (based on most pinned factor revision).
 *
 * This record is mutable, it's only got IDs so that's OK.
 *
 * Belongs to PollRevisionOpinion - does not need user tracking
 */
let PollRevisionOpinionVersion = 
// User information recorded at PollRevisionOpinion level
class PollRevisionOpinionVersion extends ImmutableRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'POLL_REVISION_OPINION_VERSION_ID' })
], PollRevisionOpinionVersion.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_OPINION_ID', nullable: false })
], PollRevisionOpinionVersion.prototype, "pollRevisionOpinion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POLL_REVISION_OPINION_VERSION_ID',
        referencedColumnName: 'POLL_REVISION_OPINION_VERSION_ID'
    })
], PollRevisionOpinionVersion.prototype, "parent", void 0);
__decorate([
    OneToMany({ mappedBy: 'parent' })
], PollRevisionOpinionVersion.prototype, "children", void 0);
__decorate([
    OneToMany({ mappedBy: 'pollOpinionVersion' })
], PollRevisionOpinionVersion.prototype, "translations", void 0);
PollRevisionOpinionVersion = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_OPINION_VERSIONS' })
    // User information recorded at PollRevisionOpinion level
], PollRevisionOpinionVersion);
export { PollRevisionOpinionVersion };
//# sourceMappingURL=PollRevisionOpinionVersion.js.map