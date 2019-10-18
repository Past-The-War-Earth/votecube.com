import {
	IFieldBase,
	IFieldError
}                            from '../field/FieldBase'
import {custom}              from './custom'
import {greaterThanOrEquals} from './greaterThanOrEquals'
import {minDate}             from './minDate'
import {minLength}           from './minLength'
import {minTomorrow}         from './minTomorrow'
import {required}            from './required'

export interface IValidator<F extends IFieldBase = IFieldBase> {
	type: string

	(field: F): IFieldError[] | IFieldError | null
}

export interface IValidators {
	custom: (
		validatorName: string,
		validatorFunction: () => IFieldError[] | IFieldError | null,
		validatorType?: string
	) => IValidator,
	minLength: (minLength: number) => IValidator,
	required: () => IValidator
}

export const Validators = {
	custom,
	greaterThanOrEquals,
	minDate,
	minLength,
	minTomorrow,
	required
}

export function filterToRangeValidators(
	validators: IValidator[]
): IValidator[] {
	return validators.filter(
		validator =>
			['min', 'max', 'greaterThanOrEquals'].indexOf(validator.type) > -1)
}

export function isPositiveInteger(
	value: string
): boolean {
	return /^[1-9][0-9]*$/.test(value)
}

export interface IErrorsText {
	minLength?: string;
	required?: string;
}
