import {
	filterToRangeValidators,
	IValidator
} from '../../validator/Validator'
import {
	Field,
	IField,
	IFieldConstraints
} from '../Field'
import {
	DateDigits,
	IDateDigits
} from './DateDigits'
import {
	DatePopup,
	IDatePopup
} from './DatePopup'
import {
	DateSelection,
	IDateSelection
} from './DateSelection'
import {
	DateOfMonth,
	Month
} from './types'

export interface IDateField
	extends IField {

	digits: IDateDigits
	popup: IDatePopup
	selection: IDateSelection
	value: Date

	cellFlags(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): string

	clear(): void

	setToDate(
		date: Date
	): void

	setToNow(): void

	setValue(
		newValue: number
	): void
}

export interface IMutableDateState {
	setState(
		date: DateOfMonth,
		month: Month,
		year: number,
		value?: Date,
		validate?: boolean
	): void;
}

export interface IDateFieldInternal
	extends IDateField,
	        IMutableDateState {
}

export interface IDateFieldConstraints
	extends IFieldConstraints {
	minDate: Date;
}

export class DateField
	extends Field
	implements IDateFieldInternal {

	digits    = new DateDigits(this)
	popup     = new DatePopup(this)
	selection = new DateSelection()

	private rangeValidators: IValidator[]

	constructor(
		value: number,
		validators: IValidator[],
		constraints?: IDateFieldConstraints
	) {
		super(value, validators)

		this.rangeValidators = filterToRangeValidators(validators)

		if (value) {
			this.setValue(value)
		} else {
			this.setToNow()
		}
	}

	static get utcNow(): Date {
		const nowLocal = new Date()
		return new Date(Date.UTC(nowLocal.getFullYear(), nowLocal.getMonth(), nowLocal.getDate()))
	}

	cellFlags(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): string {
		const [inRange, inMonth] = this.inRangeAndMonth(dateOfMonth, weekIndex)

		return `R${inRange} M${inMonth}`
	}

	clear(): void {
		this.setState(null, null, null, null)
	}

	setToDate(
		date: Date // UTC only
	): void {
		this.setState(
			date.getUTCDate() as DateOfMonth,
			date.getUTCMonth() as Month,
			date.getUTCFullYear(),
			date)
	}

	setDateOfMonth(
		date: DateOfMonth
	): void {
		this.setState(date, this.popup.month, this.popup.year, null, true)
	}

	setToNow(): void {
		this.setToDate(DateField.utcNow)
	}

	setValue(
		newValue: number
	): void {
		let date = new Date(newValue)

		this.setToDate(date)
	}

	setState(
		date: DateOfMonth,
		month: Month,
		year: number,
		value?: Date,
		validate?: boolean
	) {
		this.digits.setState(date, month, year)
		this.popup.setState(null, month, year)
		this.selection.setState(date, month, year)

		if (!value) {
			value = new Date(Date.UTC(year, month, date))
		}
		this.value = value

		if (validate) {
			this.validate()
			this.detect()
		}
	}

	validate(): void {
		if (this.digits.valid) {
			super.validate()
		} else {
			let key     = 'format'
			this.errors = [{
				key,
				message: this.text.errors[key]
			}]
		}
	}

	private getPopupYearAndMonth(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): [number, Month] {
		let year  = this.popup.year
		let month = this.popup.month
		if (!weekIndex && dateOfMonth > 7) {
			month--
			if (month < 0) {
				year--
				month = 11
			}
		} else if (weekIndex > 3 && dateOfMonth <= 7) {
			month++
			if (month > 11) {
				year++
				month = 0
			}
		}

		return [year, month]
	}

	private inRangeAndMonth(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): [boolean, boolean] {
		const [year, month] = this.getPopupYearAndMonth(dateOfMonth, weekIndex)

		// FIXME: verify correctness after range validator is implemented
		const fakeField: any = {
			digits: {
				valid: true
			},
			selection: {
				date: dateOfMonth,
				month,
				year
			},
			value: 0
		}

		const inMonth = year === this.popup.year && month === this.popup.month

		const invalid = this.rangeValidators.some(
			validator => !!validator(fakeField))

		return [!invalid, inMonth]
	}

}
