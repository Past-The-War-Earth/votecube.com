import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-traffic-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { SituationIdea } from "../ddl";
import { AgreementReason } from "./AgreementReason";

@Entity()
@Table({ name: 'AGREEMENTS' })
export class Agreement
    extends RepositoryEntity {

    @ManyToOne()
    situationIdea: SituationIdea

    @OneToMany({ mappedBy: 'agreement' })
    agreementReasons: AgreementReason[]

}
