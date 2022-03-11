import {
    Entity,
    ManyToOne,
    Table
} from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Reason } from "../ddl";
import { Agreement } from "./Agreement";

@Entity()
@Table({ name: 'AGREEMENT_FACTORS' })
export class AgreementFactor
    extends RepositoryEntity {

    axis: string // 'x' | 'y' | 'z'

    share: number // 0 - 100

    @ManyToOne()
    agreement: Agreement

    @ManyToOne()
    reason: Reason

}
