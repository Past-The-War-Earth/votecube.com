var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
let PollRevisionOpinion = class PollRevisionOpinion extends ImmutableActorRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'POLL_REVISION_OPINION_ID' })
], PollRevisionOpinion.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_ID', nullable: false })
], PollRevisionOpinion.prototype, "pollRevision", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_RUN_ID' })
], PollRevisionOpinion.prototype, "run", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'VOTE_ID' })
], PollRevisionOpinion.prototype, "vote", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'pollRevisionOpinion' })
], PollRevisionOpinion.prototype, "ratings", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'pollRevisionOpinion' })
], PollRevisionOpinion.prototype, "versions", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'pollRevisionOpinion' })
], PollRevisionOpinion.prototype, "factors", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'pollRevisionOpinion' })
], PollRevisionOpinion.prototype, "outcomes", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'pollRevisionOpinion' })
], PollRevisionOpinion.prototype, "positions", void 0);
PollRevisionOpinion = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_OPINIONS' })
], PollRevisionOpinion);
export { PollRevisionOpinion };
//# sourceMappingURL=PollRevisionOpinion.js.map