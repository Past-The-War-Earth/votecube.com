import {
    Column,
    DbDate,
    Entity,
    ManyToOne,
    OneToMany,
    Table
} from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
import { ForumPost } from "./ForumPost";

export type ForumThread_CreatedAt = Date

@Entity()
@Table({ name: "FORUM_THREAD" })
export class ForumThread
    extends AirEntity {

    @Column({ name: "CREATED_AT" })
    @DbDate()
    createdAt: ForumThread_CreatedAt

    @ManyToOne({ mappedBy: "children" })
    parent: ForumThread

    @OneToMany()
    children: ForumThread[]

    @OneToMany()
    posts: ForumPost[]
}
