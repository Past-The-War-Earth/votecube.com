var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, Id, JoinColumn, ManyToOne, Table } from '@airport/air-control';
/**
 * Needed because Position Translations can be shared across polls and
 * poll revisions.
 */
let PollRevisionPositionTranslation = class PollRevisionPositionTranslation {
};
__decorate([
    Id(),
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_TRANSLATION_ID' })
], PollRevisionPositionTranslation.prototype, "pollRevisionTranslation", void 0);
__decorate([
    Id(),
    ManyToOne(),
    JoinColumn({ name: 'POSITION_TRANSLATION_ID' })
], PollRevisionPositionTranslation.prototype, "positionTranslation", void 0);
PollRevisionPositionTranslation = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_POSITION_TRANSLATIONS' })
], PollRevisionPositionTranslation);
export { PollRevisionPositionTranslation };
//# sourceMappingURL=PollRevisionPositionTranslation.js.map