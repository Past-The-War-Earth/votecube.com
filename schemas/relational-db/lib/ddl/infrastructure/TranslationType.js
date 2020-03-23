"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
/**
 * Translation isn't necessarily from one language to another.
 *
 * You can translate to a different style for instance. You could
 * make a very technical poll more layman sounding.  Or make something
 * funny, etc.
 *
 * Internal Types like: Default, Best As voted, Best composite
 * User specified types: Funny, Abbreviated, Alegorical
 */
let TranslationType = class TranslationType {
};
__decorate([
    air_control_1.Id(),
    air_control_1.GeneratedValue(),
    air_control_1.Column({ name: 'TRANSLATION_TYPE_ID' })
], TranslationType.prototype, "id", void 0);
__decorate([
    air_control_1.Column({ name: 'TRANSLATION_TYPE_CODE' })
], TranslationType.prototype, "code", void 0);
TranslationType = __decorate([
    air_control_1.Entity(),
    air_control_1.Table({ name: 'TRANSLATION_TYPES' })
], TranslationType);
exports.TranslationType = TranslationType;
//# sourceMappingURL=TranslationType.js.map