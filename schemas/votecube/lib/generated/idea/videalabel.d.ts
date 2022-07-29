import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { IdeaVDescriptor } from './videa';
import { Idea } from '../../ddl/idea/Idea';
import { LabelVDescriptor } from '../vlabel';
import { Label } from '../../ddl/Label';
export interface IdeaLabelVDescriptor<T> extends AirEntityVDescriptor<T> {
    idea?: IdeaVDescriptor<Idea>;
    label?: LabelVDescriptor<Label>;
}
//# sourceMappingURL=videalabel.d.ts.map