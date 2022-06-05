import {
    Entity,
    ManyToOne,
    Table
} from "@airport/air-traffic-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Reason } from "../ddl";
import { Agreement } from "./Agreement";

@Entity()
@Table({ name: 'AGREEMENT_REASONS' })
export class AgreementReason
    extends RepositoryEntity {

    axis: string // 'x' | 'y' | 'z'

    share: number // 0 - 100

    @ManyToOne()
    agreement: Agreement

    @ManyToOne()
    reason: Reason

}
