import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { IdeaVDescriptor } from './videa';
import { Idea } from '../../ddl/idea/Idea';
import { TopicVDescriptor, Topic } from '@sapoto/core/lib/to_be_generated/runtime-index';
export interface IdeaTopicVDescriptor<T> extends AirEntityVDescriptor<T> {
    idea?: IdeaVDescriptor<Idea>;
    topic?: TopicVDescriptor<Topic>;
}
//# sourceMappingURL=videatopic.d.ts.map