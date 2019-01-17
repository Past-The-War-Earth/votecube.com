import {
	IFieldBase,
	IFieldError
}                   from '../field/FieldBase'
import {IValidator} from './Validator'

export function required(): IValidator {
	return requiredValidator
}

export function requiredValidator(
	field: IFieldBase
): IFieldError[] | IFieldError | null {
	if (!field.value
		&& field.value !== false
		&& field.value !== 0) {
		return {
			key: 'required'
		}
	}
}
