import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
import { IdeaRating } from "../idea/IdeaRating";
import { SituationIdea } from "../idea/SituationIdea";
import { AgreementReason } from "./AgreementReason";

@Entity()
@Table({ name: 'AGREEMENTS' })
export class Agreement
    extends AirEntity {

    @ManyToOne({ optional: true })
    situationIdea: SituationIdea

    @ManyToOne()
    idea: IdeaRating


    @OneToMany({ mappedBy: 'agreement' })
    agreementReasons: AgreementReason[]

}
