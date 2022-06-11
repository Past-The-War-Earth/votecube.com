import { AirEntity } from '@airport/holding-pattern';
import { IdeaLabel } from './IdeaLabel';
import { SituationIdea } from './SituationIdea';
import { IdeaTopic } from './IdeaTopic';
export declare class Idea extends AirEntity {
    name: string;
    children: Idea[];
    ideaLabels: IdeaLabel[];
    situationIdeas: SituationIdea[];
    ideaTopics: IdeaTopic[];
}
//# sourceMappingURL=Idea.d.ts.map