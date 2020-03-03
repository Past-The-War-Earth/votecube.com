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
 * User records for a particular revision
 */
let UserPollRevision = class UserPollRevision extends MutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'USER_POLL_REVISION_ID' })
], UserPollRevision.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'USER_POLL_ID',
        nullable: false
    })
], UserPollRevision.prototype, "userPoll", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID' })
], UserPollRevision.prototype, "revision", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'userPollRevision' })
], UserPollRevision.prototype, "translations", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'userPollRevision' })
], UserPollRevision.prototype, "ratings", void 0);
UserPollRevision = __decorate([
    Entity(),
    Table({ name: 'USER_POLL_REVISIONS' })
], UserPollRevision);
export { UserPollRevision };
//# sourceMappingURL=UserPollRevision.js.map