import {IField}     from '..'
import {IValidator} from './Validator'

export function greaterThanOrEquals(
	relatedField: IField // UTC only
): IValidator<IField> {
	const validator = (
		field: IField,
	) => {
		const relatedNumValue = relatedField.numValue
		if (relatedNumValue === null
			|| field.numValue >= relatedNumValue) {
			return null
		}

		return {
			key: 'greaterThanOrEquals'
		}
	}

	validator.type = 'greaterThanOrEquals'

	return validator
}
