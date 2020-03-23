"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const ground_control_1 = require("@airport/ground-control");
const ImmutableActorRow_1 = require("../infrastructure/row/ImmutableActorRow");
let FactorTranslation = class FactorTranslation extends ImmutableActorRow_1.ImmutableActorRow {
};
__decorate([
    air_control_1.Id(),
    air_control_1.GeneratedValue(),
    air_control_1.Column({ name: 'FACTOR_TRANSLATION_ID' })
], FactorTranslation.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'FACTOR_NAME' })
], FactorTranslation.prototype, "name", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'FACTOR_ID' })
], FactorTranslation.prototype, "factor", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({ name: 'LANGUAGE_ID' })
], FactorTranslation.prototype, "language", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_FACTOR_TRANSLATION_ID',
        referencedColumnName: 'FACTOR_TRANSLATION_ID'
    })
], FactorTranslation.prototype, "parent", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parent' })
], FactorTranslation.prototype, "children", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parentTranslation' })
], FactorTranslation.prototype, "childFactors", void 0);
FactorTranslation = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'FACTOR_TRANSLATIONS' })
], FactorTranslation);
exports.FactorTranslation = FactorTranslation;
//# sourceMappingURL=FactorTranslation.js.map