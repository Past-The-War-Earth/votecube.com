import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { Topic } from "@sapoto/core";
import { Idea } from "./Idea";

@Entity()
@Table({ name: 'IDEA_TOPICS' })
export class IdeaTopic
    extends AirEntity {

    @ManyToOne()
    idea: Idea

    @ManyToOne()
    topic: Topic

}