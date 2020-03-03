import { IFieldBase, IFieldError } from '../field/FieldBase';
import { custom } from './custom';
import { greaterThanOrEquals } from './greaterThanOrEquals';
import { minDate } from './minDate';
import { minLength } from './minLength';
import { minTomorrow } from './minTomorrow';
import { required } from './required';
export interface IValidator<F extends IFieldBase = IFieldBase> {
    type: string;
    (field: F): IFieldError[] | IFieldError | null;
}
export interface IValidators {
    custom: (validatorName: string, validatorFunction: () => IFieldError[] | IFieldError | null, validatorType?: string) => IValidator;
    minLength: (minLength: number) => IValidator;
    required: () => IValidator;
}
export interface IErrorsText {
    minLength?: string;
    required?: string;
}
export declare const Validators: {
    custom: typeof custom;
    greaterThanOrEquals: typeof greaterThanOrEquals;
    minDate: typeof minDate;
    minLength: typeof minLength;
    minTomorrow: typeof minTomorrow;
    required: typeof required;
};
export declare function filterToRangeValidators(validators: IValidator[]): IValidator[];
export declare function isPositiveInteger(value: string): boolean;
