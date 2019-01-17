import {IFieldBase} from '../field/FieldBase'
import {IValidator} from './Validator'

export function minLength(
	minimumLength: number
): IValidator {
	return (
		field: IFieldBase,
	) => {
		if (!field.inputValue
			|| field.inputValue.length < minimumLength) {
			return {
				key: 'minLength'
			}
		}
	}
}
