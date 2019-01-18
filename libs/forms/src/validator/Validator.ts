import {
	IFieldBase,
	IFieldError
}                  from '../field/FieldBase'
import {minLength} from './minLength'
import {required}  from './required'

export interface IValidator {
	type: string

	(field: IFieldBase): IFieldError[] | IFieldError | null
}

export interface IValidators {
	minLength: (minLength: number) => IValidator,
	required: () => IValidator
}

export const Validators = {
	minLength,
	required
}

export interface IErrorsText {
	minLength?: string;
	required?: string;
}
