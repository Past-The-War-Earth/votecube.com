import {
	DateField,
	IDateField
}                   from '..'
import {minDate}    from './minDate'
import {IValidator} from './Validator'

export function minTomorrow(): IValidator<IDateField> {
	const tomorrow = DateField.utcNow
	tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)

	return minDate(tomorrow)
}
