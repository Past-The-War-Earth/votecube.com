import { IVNumberField, IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { AgreementVDescriptor } from './vagreement';
import { ReasonVDescriptor } from '../idea/vreason';
export interface AgreementReasonVDescriptor extends AirEntityVDescriptor {
    axis?: string | IVStringField;
    share?: number | IVNumberField;
    agreement?: AgreementVDescriptor;
    reason?: ReasonVDescriptor;
}
//# sourceMappingURL=vagreementreason.d.ts.map