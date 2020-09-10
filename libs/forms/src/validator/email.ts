import {
	IFieldBase,
	IFieldError
}                   from '..'
import {IValidator} from './Validator'

export function email(): IValidator {
	emailValidator.type = 'email'

	return emailValidator
}

const emailValidator: IValidator = function (
	field: IFieldBase
): IFieldError[] | IFieldError | null {
	const value = field.value
	if (!value
		|| typeof value !== 'string'
		|| /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)){
		return {
			key: 'email'
		}
	}
} as any
