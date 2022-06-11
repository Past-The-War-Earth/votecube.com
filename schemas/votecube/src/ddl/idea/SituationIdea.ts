import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
import { Situation } from "@sapoto/core";
import { Agreement, Idea } from "../ddl";
import { Reason } from "./Reason";

@Entity()
@Table({ name: 'SITUATION_IDEAS' })
export class SituationIdea
    extends AirEntity {

    @ManyToOne()
    idea: Idea

    @ManyToOne()
    situation: Situation

    @OneToMany({ mappedBy: 'situationIdea' })
    agreements: Agreement[]

    @OneToMany({ mappedBy: 'situationIdea' })
    reasons: Reason[]

    @Column({ name: 'AGREEMENT_SHARE_TOTAL' })
    agreementShareTotal: number

    @Column({ name: 'NUMBER_OF_AGREEMENTS' })
    numberOfAgreements: number

}
