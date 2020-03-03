var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Column, Entity, GeneratedValue, Id, JoinColumn, ManyToOne, OneToMany, Table } from '@airport/air-control';
import { CascadeType } from '@airport/ground-control';
import { ImmutableActorRow } from '../../infrastructure/row/ImmutableActorRow';
/**
 * Rating counts are aggregated by a batch job.  The batch job needs to know
 * the current Rating and is it a change in rating (of the same type) and
 * from what rating it was changed (so that it can decrement).
 */
let PositionOpinionVersionRating = class PositionOpinionVersionRating extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'POSITION_OPINION_VERSION_RATING_ID' })
], PositionOpinionVersionRating.prototype, "id", void 0);
__decorate([
    Column({ name: 'POSITION_OPINION_VERSION_RATING_IS_CURRENT' })
], PositionOpinionVersionRating.prototype, "isCurrent", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'POSITION_OPINION_VERSION_ID' })
], PositionOpinionVersionRating.prototype, "positionOpinionVersion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_ID' })
], PositionOpinionVersionRating.prototype, "rating", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_POSITION_OPINION_VERSION_RATING_ID',
        referencedColumnName: 'POSITION_OPINION_VERSION_RATING_ID'
    })
], PositionOpinionVersionRating.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], PositionOpinionVersionRating.prototype, "child", void 0);
PositionOpinionVersionRating = __decorate([
    Entity(),
    Table({ name: 'POSITION_OPINION_VERSION_RATINGS' })
], PositionOpinionVersionRating);
export { PositionOpinionVersionRating };
//# sourceMappingURL=PositionOpinionVersionRating.js.map