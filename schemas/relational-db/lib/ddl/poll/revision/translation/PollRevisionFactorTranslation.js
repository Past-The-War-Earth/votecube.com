var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, Id, JoinColumn, ManyToOne, Table } from '@airport/air-control';
/**
 * Needed because Factor Translations can be shared across polls and
 * poll revisions.
 */
let PollRevisionFactorTranslation = class PollRevisionFactorTranslation {
};
__decorate([
    Id(),
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_TRANSLATION_ID' })
], PollRevisionFactorTranslation.prototype, "pollRevisionTranslation", void 0);
__decorate([
    Id(),
    ManyToOne(),
    JoinColumn({ name: 'FACTOR_TRANSLATION_ID' })
], PollRevisionFactorTranslation.prototype, "factorTranslation", void 0);
PollRevisionFactorTranslation = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_FACTOR_TRANSLATIONS' })
], PollRevisionFactorTranslation);
export { PollRevisionFactorTranslation };
//# sourceMappingURL=PollRevisionFactorTranslation.js.map