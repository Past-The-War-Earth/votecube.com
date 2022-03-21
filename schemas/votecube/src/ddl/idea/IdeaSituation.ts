import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "@sapoto/core/lib/app";
import { Agreement, Idea } from "../ddl";
import { Reason } from "./Reason";

@Entity()
@Table({ name: 'IDEA_SITUATIONS' })
export class IdeaSituation
    extends RepositoryEntity {

    @ManyToOne()
    idea: Idea

    @ManyToOne()
    situation: Situation

    @OneToMany({ mappedBy: 'ideaSituation' })
    agreements: Agreement[]

    @OneToMany({ mappedBy: 'ideaSituation' })
    reasons: Reason[]

}
