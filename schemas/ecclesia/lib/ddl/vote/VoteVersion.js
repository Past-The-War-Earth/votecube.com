var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
let VoteVersion = class VoteVersion extends ImmutableActorRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'VOTE_VERSION_ID' })
], VoteVersion.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'VOTE_ID', nullable: false })
], VoteVersion.prototype, "vote", void 0);
__decorate([
    OneToMany({ mappedBy: 'voteRevision' })
], VoteVersion.prototype, "factors", void 0);
VoteVersion = __decorate([
    Entity(),
    Table({ name: 'VOTE_VERSIONS' })
], VoteVersion);
export { VoteVersion };
//# sourceMappingURL=VoteVersion.js.map