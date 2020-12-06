var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, DbNumber, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
let Vote = class Vote extends ImmutableActorRow {
};
__decorate([
    GeneratedValue(),
    Id(),
    Column({ name: 'VOTE_ID' })
], Vote.prototype, "id", void 0);
__decorate([
    Column({ name: 'VOTE_TYPE_ID' }),
    DbNumber()
], Vote.prototype, "type", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_RUN_ID', nullable: false })
], Vote.prototype, "run", void 0);
__decorate([
    OneToMany({ mappedBy: 'vote' })
], Vote.prototype, "revisions", void 0);
Vote = __decorate([
    Entity(),
    Table({ name: 'VOTES' })
], Vote);
export { Vote };
//# sourceMappingURL=Vote.js.map