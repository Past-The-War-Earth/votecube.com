import { IField } from '..';
import { IFieldBase, IFieldError } from '../field/FieldBase';
import { custom } from './custom';
import { email } from './email';
import { greaterThanOrEquals } from './greaterThanOrEquals';
import { minDate } from './minDate';
import { minLength } from './minLength';
import { minTomorrow } from './minTomorrow';
import { password } from './password';
import { required } from './required';
import { username } from './username';
export interface IValidator<F extends IFieldBase = IFieldBase> {
    type: string;
    (field: F): IFieldError[] | IFieldError | null;
}
export interface IValidators {
    custom: (validatorName: string, validatorFunction: (field?: IField) => IFieldError[] | IFieldError | null, validatorType?: string) => IValidator;
    email: () => IValidator;
    minLength: (minLength: number) => IValidator;
    password: () => IValidator;
    required: () => IValidator;
    username: () => IValidator;
}
export interface IErrorsText {
    minLength?: string;
    required?: string;
}
export declare const Validators: {
    custom: typeof custom;
    email: typeof email;
    greaterThanOrEquals: typeof greaterThanOrEquals;
    minDate: typeof minDate;
    minLength: typeof minLength;
    minTomorrow: typeof minTomorrow;
    password: typeof password;
    required: typeof required;
    username: typeof username;
};
export declare function filterToRangeValidators(validators: IValidator[]): IValidator[];
export declare function isPositiveInteger(value: string): boolean;
//# sourceMappingURL=Validator.d.ts.map