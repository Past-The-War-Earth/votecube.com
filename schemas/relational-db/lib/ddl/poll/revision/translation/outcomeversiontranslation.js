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
let OutcomeVersionTranslation = class OutcomeVersionTranslation extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'OUTCOME_VERSION_TRANSLATION_ID' })
], OutcomeVersionTranslation.prototype, "id", void 0);
__decorate([
    Column({ name: 'NAME' })
], OutcomeVersionTranslation.prototype, "name", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'OUTCOME_VERSION_ID' })
], OutcomeVersionTranslation.prototype, "outcomeVersion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'LANGUAGE_ID' })
], OutcomeVersionTranslation.prototype, "language", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'TRANSLATION_TYPE_ID' })
], OutcomeVersionTranslation.prototype, "type", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_OUTCOME_VERSION_TRANSLATION_ID',
        referencedColumnName: 'OUTCOME_VERSION_TRANSLATION_ID'
    })
], OutcomeVersionTranslation.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], OutcomeVersionTranslation.prototype, "children", void 0);
OutcomeVersionTranslation = __decorate([
    Entity(),
    Table({ name: 'OUTCOME_VERSION_TRANSLATIONS' })
], OutcomeVersionTranslation);
export { OutcomeVersionTranslation };
//# sourceMappingURL=OutcomeVersionTranslation.js.map