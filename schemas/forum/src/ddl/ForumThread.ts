import {
    Column,
    DbDate,
    Entity,
    ManyToOne,
    OneToMany,
    Table
} from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { ForumPost } from "./ForumPost";

export type ForumThread_CreatedAt = Date

@Entity()
@Table({ name: "FORUM_THREAD" })
export class ForumThread
    extends RepositoryEntity {

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
