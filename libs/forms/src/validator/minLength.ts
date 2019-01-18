import {IFieldBase} from '../field/FieldBase'
import {IValidator} from './Validator'

export function minLength(
	minimumLength: number
): IValidator {
	return (
		field: IFieldBase,
	) => {
		if (!field.value
			|| field.value.length < minimumLength) {
			return {
				key: 'minLength'
			}
		}
	}
}
