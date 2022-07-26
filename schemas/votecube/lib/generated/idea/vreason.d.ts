import { IVNumberField, IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationIdeaVDescriptor } from './vsituationidea';
import { IdeaVDescriptor } from './videa';
import { FactorVDescriptor } from '../factor/vfactor';
import { PositionVDescriptor } from '../factor/vposition';
export interface ReasonVDescriptor extends AirEntityVDescriptor {
    axis?: string | IVStringField;
    dir?: number | IVNumberField;
    factorNumber?: number | IVNumberField;
    blue?: number | IVNumberField;
    green?: number | IVNumberField;
    red?: number | IVNumberField;
    outcomeOrdinal?: string | IVStringField;
    situationIdea?: SituationIdeaVDescriptor;
    idea?: IdeaVDescriptor;
    factor?: FactorVDescriptor;
    position?: PositionVDescriptor;
}
//# sourceMappingURL=vreason.d.ts.map