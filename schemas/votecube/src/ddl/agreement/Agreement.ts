import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
import { Idea } from "../idea/Idea";
import { SituationIdea } from "../idea/SituationIdea";
import { AgreementReason } from "./AgreementReason";

@Entity()
@Table({ name: 'AGREEMENTS' })
export class Agreement
    extends AirEntity {

    constructor(
        entityGUID: string
    ) {
        super(entityGUID)
        this.agreementReasons = []
    }

    @Column({ name: "SHARE_TOTAL" })
    shareTotal: number

    @ManyToOne({ optional: true })
    situationIdea: SituationIdea

    @ManyToOne()
    idea: Idea

    @OneToMany({ mappedBy: 'agreement' })
    agreementReasons: AgreementReason[]

}
