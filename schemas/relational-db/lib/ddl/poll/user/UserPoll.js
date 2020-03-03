var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { MutableActorRow } from '../../infrastructure/row/MutableActorRow';
/**
 * This is a mutable record - its OK because it pertains only to a given user,
 * hence it will be retrieved (publically) only by that user.  Immutablity
 * does not help much here.
 */
let UserPoll = class UserPoll extends MutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'USER_POLL_ID' })
], UserPoll.prototype, "id", void 0);
__decorate([
    Column({ name: 'USER_POLL_PINNED_EXPLICITLY', nullable: false })
], UserPoll.prototype, "pinnedExplicitly", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_ID' })
], UserPoll.prototype, "poll", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID' })
], UserPoll.prototype, "pinnedRevision", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'userPoll' })
], UserPoll.prototype, "userPollRevisions", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'userPoll' })
], UserPoll.prototype, "ratings", void 0);
UserPoll = __decorate([
    Entity(),
    Table({ name: 'USER_POLLS' })
], UserPoll);
export { UserPoll };
//# sourceMappingURL=UserPoll.js.map