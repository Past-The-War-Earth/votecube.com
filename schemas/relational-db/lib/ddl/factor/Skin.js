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
let Skin = class Skin extends ImmutableActorRow_1.ImmutableActorRow {
};
__decorate([
    air_control_1.Id(),
    air_control_1.GeneratedValue(),
    air_control_1.Column({ name: 'SKIN_ID' })
], Skin.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'BACKGROUND_COLOR_ID', nullable: false })
], Skin.prototype, "backgroundColor", void 0);
__decorate([
    air_control_1.Column({ name: 'TEXT_COLOR_ID', nullable: false })
], Skin.prototype, "textColor", void 0);
__decorate([
    air_control_1.ManyToOne(),
    air_control_1.JoinColumn({
        name: 'PARENT_SKIN_ID',
        referencedColumnName: 'SKIN_ID'
    })
], Skin.prototype, "parent", void 0);
__decorate([
    air_control_1.OneToMany({ cascade: ground_control_1.CascadeType.ALL, mappedBy: 'parent' })
], Skin.prototype, "children", void 0);
Skin = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'SKINS' })
], Skin);
exports.Skin = Skin;
//# sourceMappingURL=Skin.js.map