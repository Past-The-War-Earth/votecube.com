import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "../ddl";
import { SolutionFactor } from "./SolutionFactor";

@Entity()
@Table({ name: 'SOLUTIONS' })
export class Solution
    extends RepositoryEntity {

    @ManyToOne()
    situation: Situation

    @OneToMany({ mappedBy: 'solution' })
    factors: SolutionFactor[]

}
