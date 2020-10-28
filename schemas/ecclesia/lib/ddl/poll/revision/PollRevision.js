var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { AgeSuitableRow } from '../../infrastructure/row/AgeSuitableRow';
/**
 * Different revisions of a given poll.
 */
let PollRevision = class PollRevision extends AgeSuitableRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'POLL_REVISION_ID' })
], PollRevision.prototype, "id", void 0);
__decorate([
    Column({ name: 'DEPTH' })
], PollRevision.prototype, "depth", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_ID' })
], PollRevision.prototype, "poll", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_RUN_ID' })
], PollRevision.prototype, "createdAtRun", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'OUTCOME_A_VERSION_ID',
        referencedColumnName: 'OUTCOME_ID'
    })
], PollRevision.prototype, "outcomeVersionA", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'OUTCOME_B_VERSION_ID',
        referencedColumnName: 'OUTCOME_ID'
    })
], PollRevision.prototype, "outcomeVersionB", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POLL_REVISION_ID',
        referencedColumnName: 'POLL_REVISION_ID'
    })
], PollRevision.prototype, "parent", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POLL_REVISION_TRANSLATION_ID',
        referencedColumnName: 'POLL_REVISION_TRANSLATION_ID'
    })
], PollRevision.prototype, "parentTranslation", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], PollRevision.prototype, "children", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'pollRevision' })
], PollRevision.prototype, "ratings", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'pollRevision' })
], PollRevision.prototype, "factorPositions", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'pollRevision' })
], PollRevision.prototype, "allTranslations", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'pollRevision' })
], PollRevision.prototype, "opinions", void 0);
PollRevision = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISIONS' })
], PollRevision);
export { PollRevision };
//# sourceMappingURL=PollRevision.js.map