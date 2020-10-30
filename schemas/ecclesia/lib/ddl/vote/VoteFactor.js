var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbString, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-control';
let VoteFactor = 
// User information recorded at Vote level
class VoteFactor {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'VOTE_FACTOR_ID' })
], VoteFactor.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'VOTE_VERSION_ID', nullable: false })
], VoteFactor.prototype, "voteRevision", void 0);
__decorate([
    Column({ name: 'SHARE', nullable: false }),
    DbString()
], VoteFactor.prototype, "share", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_FACTOR_POSITION_ID', nullable: false })
], VoteFactor.prototype, "pollFactorPos", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'VOTE_FACTOR_TYPE_ID', nullable: false })
], VoteFactor.prototype, "type", void 0);
VoteFactor = __decorate([
    Entity(),
    Table({ name: 'VOTE_FACTORS' })
    // User information recorded at Vote level
], VoteFactor);
export { VoteFactor };
//# sourceMappingURL=VoteFactor.js.map