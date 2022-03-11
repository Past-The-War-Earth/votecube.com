import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Idea } from "../ddl";
import { AgreementFactor } from "./AgreementFactor";

@Entity()
@Table({ name: 'AGREEMENTS' })
export class Agreement
    extends RepositoryEntity {

    @ManyToOne()
    idea: Idea

    @OneToMany({ mappedBy: 'agreement' })
    factors: AgreementFactor[]

}
