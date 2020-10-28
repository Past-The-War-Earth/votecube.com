var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableActorRow } from '../infrastructure/row/ImmutableActorRow';
let FactorTranslation = class FactorTranslation extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'FACTOR_TRANSLATION_ID' })
], FactorTranslation.prototype, "id", void 0);
__decorate([
    Column({ name: 'FACTOR_NAME' })
], FactorTranslation.prototype, "name", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'FACTOR_ID' })
], FactorTranslation.prototype, "factor", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'LANGUAGE_ID' })
], FactorTranslation.prototype, "language", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_FACTOR_TRANSLATION_ID',
        referencedColumnName: 'FACTOR_TRANSLATION_ID'
    })
], FactorTranslation.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], FactorTranslation.prototype, "children", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parentTranslation' })
], FactorTranslation.prototype, "childFactors", void 0);
FactorTranslation = __decorate([
    Entity(),
    Table({ name: 'FACTOR_TRANSLATIONS' })
], FactorTranslation);
export { FactorTranslation };
//# sourceMappingURL=FactorTranslation.js.map