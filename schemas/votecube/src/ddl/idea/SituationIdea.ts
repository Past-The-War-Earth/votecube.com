import { AirEntity } from "@airport/holding-pattern";
import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    Table,
    Transient
} from "@airport/tarmaq-entity";
import { Situation } from "@sapoto/core";
import { Agreement, Idea } from "../ddl";
import { IdeaRating } from "./IdeaRating";
import { Reason } from "../reason/Reason";

@Entity()
@Table({ name: 'SITUATION_IDEAS' })
export class SituationIdea
    extends AirEntity {

    constructor(
        entityGUID: string
    ) {
        super(entityGUID)
        this.agreements = []
        this.ideaRatings = []
        this.reasons = []
        this.userReasons = []
    }

    @Column({ name: 'AGREEMENT_SHARE_TOTAL' })
    agreementShareTotal: number

    @Column({ name: 'NUMBER_OF_AGREEMENTS' })
    numberOfAgreements: number

    @Column({ name: 'URGENCY_TOTAL' })
    urgencyTotal: number

    @Column({ name: 'NUMBER_OF_URGENCY_RATINGS' })
    numberOfUrgencyRatings: number

    @Column({ name: 'NUMBER_OF_REASONS' })
    numberOfReasons: number

    @ManyToOne()
    idea: Idea

    @ManyToOne()
    situation: Situation

    @OneToMany({ mappedBy: 'situationIdea' })
    ideaRatings: IdeaRating[]

    @OneToMany({ mappedBy: 'situationIdea' })
    agreements: Agreement[]

    @OneToMany({ mappedBy: 'situationIdea' })
    reasons: Reason[]

    @Transient()
    userIdeaRating?: IdeaRating

    @Transient()
    userAgreement?: Agreement

    @Transient()
    userReasons: Reason[]

}
