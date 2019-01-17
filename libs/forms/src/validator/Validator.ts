import {
	IFieldBase,
	IFieldError
}                  from '../field/FieldBase'
import {minLength} from './minLength'
import {required}  from './required'

export type IValidator =
	(field: IFieldBase) => IFieldError[] | IFieldError | null

export interface IValidators {
	minLength: (minLength: number) => IValidator,
	required: () => IValidator
}

export const Validators = {
	minLength,
	required
}