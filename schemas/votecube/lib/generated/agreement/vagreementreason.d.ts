import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { AgreementVDescriptor } from './vagreement';
import { Agreement } from '../../ddl/agreement/Agreement';
import { ReasonVDescriptor } from '../reason/vreason';
import { Reason } from '../../ddl/reason/Reason';
export interface AgreementReasonVDescriptor<T> extends AirEntityVDescriptor<T> {
    share?: number | IVNumberField;
    agreement?: AgreementVDescriptor<Agreement>;
    reason?: ReasonVDescriptor<Reason>;
}
//# sourceMappingURL=vagreementreason.d.ts.map