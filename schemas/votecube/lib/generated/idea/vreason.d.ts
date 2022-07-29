import { IVNumberField, IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationIdeaVDescriptor } from './vsituationidea';
import { SituationIdea } from '../../ddl/idea/SituationIdea';
import { IdeaVDescriptor } from './videa';
import { Idea } from '../../ddl/idea/Idea';
import { FactorVDescriptor } from '../factor/vfactor';
import { Factor } from '../../ddl/factor/Factor';
import { PositionVDescriptor } from '../factor/vposition';
import { Position } from '../../ddl/factor/Position';
export interface ReasonVDescriptor<T> extends AirEntityVDescriptor<T> {
    axis?: string | IVStringField;
    dir?: number | IVNumberField;
    factorNumber?: number | IVNumberField;
    blue?: number | IVNumberField;
    green?: number | IVNumberField;
    red?: number | IVNumberField;
    outcomeOrdinal?: string | IVStringField;
    situationIdea?: SituationIdeaVDescriptor<SituationIdea>;
    idea?: IdeaVDescriptor<Idea>;
    factor?: FactorVDescriptor<Factor>;
    position?: PositionVDescriptor<Position>;
}
//# sourceMappingURL=vreason.d.ts.map