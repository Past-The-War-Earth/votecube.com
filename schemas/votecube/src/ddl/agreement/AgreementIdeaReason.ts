import { AirEntity } from "@airport/final-approach";
import {
    Column,
    Entity,
    ManyToOne,
    Table
} from "@airport/tarmaq-entity";
import { IdeaReason } from "../reason/IdeaReason";
import { Agreement } from "./Agreement";

@Entity()
@Table({ name: 'AGREEMENT_IDEA_REASONS' })
export class AgreementIdeaReason
    extends AirEntity {

    share: number // 0 - 100

    @ManyToOne()
    agreement: Agreement

    @ManyToOne()
    ideaReason: IdeaReason

}
