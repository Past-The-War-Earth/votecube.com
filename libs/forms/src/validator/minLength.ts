import {IFieldBase} from '../field/FieldBase'
import {IValidator} from './Validator'

export function minLength(
	minimumLength: number
): IValidator {
	const validator = (
		field: IFieldBase,
	) => {
		this.name = 'minLength'

		if (field.value
			&& field.value.length < minimumLength) {
			return {
				key: 'minLength'
			}
		}
	}

	validator.type = 'minLength'

	return validator
}
