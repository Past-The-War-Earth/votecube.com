import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-traffic-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "@sapoto/core";
import { Agreement, Idea } from "../ddl";
import { Reason } from "./Reason";

@Entity()
@Table({ name: 'SITUATION_IDEAS' })
export class SituationIdea
    extends RepositoryEntity {

    @ManyToOne()
    idea: Idea

    @ManyToOne()
    situation: Situation

    @OneToMany({ mappedBy: 'ideaSituation' })
    agreements: Agreement[]

    @OneToMany({ mappedBy: 'ideaSituation' })
    reasons: Reason[]

    agreementShareTotal: number

    numberOfAgreementRatings: number

}
