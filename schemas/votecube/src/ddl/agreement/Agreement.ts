import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Idea, IdeaSituation } from "../ddl";
import { AgreementFactor } from "./AgreementFactor";

@Entity()
@Table({ name: 'AGREEMENTS' })
export class Agreement
    extends RepositoryEntity {

    @ManyToOne()
    ideaSituation: IdeaSituation

    @OneToMany({ mappedBy: 'agreement' })
    factors: AgreementFactor[]

}
