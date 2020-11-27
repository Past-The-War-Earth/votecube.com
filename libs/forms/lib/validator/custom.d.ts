import { IFieldError } from '../field/FieldBase';
import { IValidator } from './Validator';
export declare function custom(validatorName: string, validatorFunction: () => IFieldError[] | IFieldError | null, validatorType?: string): IValidator;
//# sourceMappingURL=custom.d.ts.map