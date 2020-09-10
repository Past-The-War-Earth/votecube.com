import {
	IFieldBase,
	IFieldError
}                            from '../field/FieldBase'
import {custom}              from './custom'
import {email}               from './email'
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
	email: () => IValidator,
	minLength: (minLength: number) => IValidator,
	required: () => IValidator
}

export interface IErrorsText {
	minLength?: string;
	required?: string;
}

export const Validators = {
	custom,
	email,
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
