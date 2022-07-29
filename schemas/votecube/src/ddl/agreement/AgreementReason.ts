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

    share: number // 0 - 100

    @ManyToOne()
    agreement: Agreement

    @ManyToOne()
    reason: Reason

}
