import {
	IFieldBase,
	IFieldError
}                   from '../field/FieldBase'
import {IValidator} from './Validator'

export function required(): IValidator {
	requiredValidator.type = 'required'

	return requiredValidator
}

const requiredValidator: IValidator = function (
	field: IFieldBase
): IFieldError[] | IFieldError | null {
	if (!field.value
		&& field.value !== false
		&& field.value !== 0) {
		return {
			key: 'required'
		}
	}
} as any
