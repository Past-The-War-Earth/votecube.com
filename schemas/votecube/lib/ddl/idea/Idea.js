var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AirEntity } from '@airport/holding-pattern';
import { Column, Entity, ManyToOne, OneToMany, Table, Transient } from '@airport/tarmaq-entity';
let Idea = class Idea extends AirEntity {
    constructor(entityGUID) {
        super(entityGUID);
        this.agreements = [];
        this.children = [];
        this.ideaLabels = [];
        this.ideaTopics = [];
        this.reasons = [];
        this.situationIdeas = [];
        this.userReasons = [];
    }
};
__decorate([
    Column({ name: 'NAME', nullable: false })
], Idea.prototype, "name", void 0);
__decorate([
    Column({ name: 'AGREEMENT_SHARE_TOTAL' })
], Idea.prototype, "agreementShareTotal", void 0);
__decorate([
    Column({ name: 'NUMBER_OF_AGREEMENTS' })
], Idea.prototype, "numberOfAgreements", void 0);
__decorate([
    Column({ name: 'URGENCY_TOTAL' })
], Idea.prototype, "urgencyTotal", void 0);
__decorate([
    Column({ name: 'NUMBER_OF_URGENCY_RATINGS' })
], Idea.prototype, "numberOfUrgencyRatings", void 0);
__decorate([
    Column({ name: 'NUMBER_OF_REASONS' })
], Idea.prototype, "numberOfReasons", void 0);
__decorate([
    ManyToOne({ optional: true })
], Idea.prototype, "parent", void 0);
__decorate([
    OneToMany({ mappedBy: 'parent' })
], Idea.prototype, "children", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "ideaRatings", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "agreements", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "reasons", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "ideaLabels", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "situationIdeas", void 0);
__decorate([
    OneToMany({ mappedBy: 'idea' })
], Idea.prototype, "ideaTopics", void 0);
__decorate([
    Transient()
], Idea.prototype, "userIdeaRating", void 0);
__decorate([
    Transient()
], Idea.prototype, "userAgreement", void 0);
__decorate([
    Transient()
], Idea.prototype, "userReasons", void 0);
Idea = __decorate([
    Entity(),
    Table({ name: 'IDEAS' })
], Idea);
export { Idea };
//# sourceMappingURL=Idea.js.map