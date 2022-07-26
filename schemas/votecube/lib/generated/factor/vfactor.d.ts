import { IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
export interface FactorVDescriptor extends AirEntityVDescriptor {
    object?: string | IVStringField;
    action?: string | IVStringField;
    customText?: string | IVStringField;
}
//# sourceMappingURL=vfactor.d.ts.map