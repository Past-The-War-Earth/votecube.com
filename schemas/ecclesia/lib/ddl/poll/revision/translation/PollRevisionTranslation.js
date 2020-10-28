var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableActorRow } from '../../../infrastructure/row/ImmutableActorRow';
/**
 * This the translation of a given poll revision.
 *
 */
let PollRevisionTranslation = class PollRevisionTranslation extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'POLL_REVISION_TRANSLATION_ID' })
], PollRevisionTranslation.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POLL_REVISION_ID' })
], PollRevisionTranslation.prototype, "pollRevision", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'LANGUAGE_ID' })
], PollRevisionTranslation.prototype, "language", void 0);
__decorate([
    Column({ name: 'POLL_NAME' })
], PollRevisionTranslation.prototype, "name", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'TRANSLATION_TYPE_ID' })
], PollRevisionTranslation.prototype, "type", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POLL_REVISION_TRANSLATION_ID',
        referencedColumnName: 'POLL_REVISION_TRANSLATION_ID'
    })
], PollRevisionTranslation.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], PollRevisionTranslation.prototype, "children", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'translation' })
], PollRevisionTranslation.prototype, "ratings", void 0);
PollRevisionTranslation = __decorate([
    Entity(),
    Table({ name: 'POLL_REVISION_TRANSLATIONS' })
], PollRevisionTranslation);
export { PollRevisionTranslation };
//# sourceMappingURL=PollRevisionTranslation.js.map