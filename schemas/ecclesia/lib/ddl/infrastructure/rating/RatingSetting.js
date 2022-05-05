var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, Table } from '@airport/air-traffic-control';
import { SystemGeneratedRow } from '../row/SystemGeneratedRow';
/**
 * Different countries might have different age brackets for common
 * suitability ratings - record that here.
 */
let RatingSetting = class RatingSetting extends SystemGeneratedRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'RATING_SETTING_ID' })
], RatingSetting.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'COUNTRY_ID' })
], RatingSetting.prototype, "country", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_ID' })
], RatingSetting.prototype, "rating", void 0);
__decorate([
    Column({ name: 'RATING_SETTING_KEY' })
], RatingSetting.prototype, "key", void 0);
__decorate([
    Column({ name: 'RATING_SETTING_VALUE' })
], RatingSetting.prototype, "value", void 0);
RatingSetting = __decorate([
    Entity(),
    Table({ name: 'RATING_SETTINGS' })
], RatingSetting);
export { RatingSetting };
//# sourceMappingURL=RatingSetting.js.map