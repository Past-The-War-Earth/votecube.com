import { AirEntity } from "@airport/holding-pattern";
import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { Idea } from "../idea/Idea";
import { SituationIdea } from "../idea/SituationIdea";
import { AgreementReason } from "./AgreementReason";

@Entity()
@Table({ name: 'AGREEMENTS' })
export class Agreement
    extends AirEntity {

    constructor(
        entityGUID?: string
    ) {
        super(entityGUID)
        // FIXME: this should be done automatically, by the framework
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
