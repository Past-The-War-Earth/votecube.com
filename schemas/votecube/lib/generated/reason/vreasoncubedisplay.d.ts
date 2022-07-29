import { IVNumberField, IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
export interface ReasonCubeDisplayVDescriptor<T> extends AirEntityVDescriptor<T> {
    axis?: string | IVStringField;
    dir?: number | IVNumberField;
    factorNumber?: number | IVNumberField;
    blue?: number | IVNumberField;
    green?: number | IVNumberField;
    red?: number | IVNumberField;
}
//# sourceMappingURL=vreasoncubedisplay.d.ts.map