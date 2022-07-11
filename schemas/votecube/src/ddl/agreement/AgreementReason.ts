import { AirEntity } from "@airport/holding-pattern";
import {
    Column,
    Entity,
    ManyToOne,
    Table
} from "@airport/tarmaq-entity";
import { Reason } from "../ddl";
import { Agreement } from "./Agreement";

@Entity()
@Table({ name: 'AGREEMENT_REASONS' })
export class AgreementReason
    extends AirEntity {

    @Column({ name: 'THREED_COORDINATE_AXIS', nullable: true })
    axis: string // 'x' | 'y' | 'z'

    share: number // 0 - 100

    @ManyToOne()
    agreement: Agreement

    @ManyToOne()
    reason: Reason

}
