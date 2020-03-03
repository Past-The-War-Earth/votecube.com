var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
let VoteRevision = class VoteRevision extends ImmutableActorRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'VOTE_REVISION_ID' })
], VoteRevision.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID', nullable: false })
], VoteRevision.prototype, "revision", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'VOTE_ID', nullable: false })
], VoteRevision.prototype, "vote", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_TRANSLATION_ID', nullable: false })
], VoteRevision.prototype, "revisionTranslation", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_RUN_ID', nullable: false })
], VoteRevision.prototype, "run", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'voteRevision' })
], VoteRevision.prototype, "factors", void 0);
VoteRevision = __decorate([
    Entity(),
    Table({ name: 'VOTE_REVISIONS' })
], VoteRevision);
export { VoteRevision };
//# sourceMappingURL=VoteRevision.js.map