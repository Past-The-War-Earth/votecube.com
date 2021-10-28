import { IField } from '../field/Field';
import { IFieldError } from '../field/FieldBase';
import { IValidator } from './Validator';
export declare function custom(validatorName: string, validatorFunction: (field: IField) => IFieldError[] | IFieldError | null, validatorType?: string): IValidator;
//# sourceMappingURL=custom.d.ts.map