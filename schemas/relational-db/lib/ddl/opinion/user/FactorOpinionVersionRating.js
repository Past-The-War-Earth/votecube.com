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
let FactorOpinionVersionRating = class FactorOpinionVersionRating extends ImmutableActorRow {
};
__decorate([
    Id(),
    GeneratedValue(),
    Column({ name: 'FACTOR_OPINION_VERSION_RATING_ID' })
], FactorOpinionVersionRating.prototype, "id", void 0);
__decorate([
    Column({ name: 'FACTOR_OPINION_VERSION_RATING_IS_CURRENT' })
], FactorOpinionVersionRating.prototype, "isCurrent", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'FACTOR_OPINION_VERSION_ID' })
], FactorOpinionVersionRating.prototype, "factorOpinionVersion", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({ name: 'RATING_ID' })
], FactorOpinionVersionRating.prototype, "rating", void 0);
__decorate([
    ManyToOne(),
    JoinColumn({
        name: 'PARENT_FACTOR_OPINION_VERSION_RATING_ID',
        referencedColumnName: 'FACTOR_OPINION_VERSION_RATING_ID'
    })
], FactorOpinionVersionRating.prototype, "parent", void 0);
__decorate([
    OneToMany({ cascade: CascadeType.ALL, mappedBy: 'parent' })
], FactorOpinionVersionRating.prototype, "child", void 0);
FactorOpinionVersionRating = __decorate([
    Entity(),
    Table({ name: 'FACTOR_OPINION_VERSION_RATINGS' })
], FactorOpinionVersionRating);
export { FactorOpinionVersionRating };
//# sourceMappingURL=FactorOpinionVersionRating.js.map