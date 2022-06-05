import { Entity, ManyToOne, Table } from "@airport/air-traffic-control";
import { Topic } from "@sapoto/core";
import { Idea } from "./Idea";

@Entity()
@Table({ name: 'IDEA_TOPICS' })
export class IdeaTopic {

    @ManyToOne()
    idea: Idea

    @ManyToOne()
    topic: Topic

}