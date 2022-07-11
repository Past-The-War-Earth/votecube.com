var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from '@airport/holding-pattern';
import { Column, Entity, ManyToOne, Table } from '@airport/tarmaq-entity';
let IdeaRating = class IdeaRating extends AirEntity {
};
__decorate([
    Column({ name: 'URGENCY_RATING' })
], IdeaRating.prototype, "urgencyRating", void 0);
__decorate([
    ManyToOne()
], IdeaRating.prototype, "idea", void 0);
__decorate([
    ManyToOne({ optional: true })
], IdeaRating.prototype, "situationIdea", void 0);
IdeaRating = __decorate([
    Entity(),
    Table({ name: 'IDEA_RATINGS' })
], IdeaRating);
export { IdeaRating };
//# sourceMappingURL=IdeaRating.js.map