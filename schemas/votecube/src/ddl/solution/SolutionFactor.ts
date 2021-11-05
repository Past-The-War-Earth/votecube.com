import {
    Entity,
    ManyToOne,
    Table
} from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { SituationFactorPosition } from "../ddl";
import { Solution } from "./Solution";

@Entity()
@Table({ name: 'SOLUTION_FACTORS' })
export class SolutionFactor
    extends RepositoryEntity {

    axis: string // 'x' | 'y' | 'z'

    share: number // 0 - 100

    @ManyToOne()
    solution: Solution

    @ManyToOne()
    situationFactorPosition: SituationFactorPosition

}
