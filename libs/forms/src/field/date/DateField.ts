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
	DateFragments,
	IDateFragments
} from './DateFragments'
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
	Month,
	utcNow
} from './types'

export interface IDateField
	extends IField {

	fragments: IDateFragments
	popup: IDatePopup
	selection: IDateSelection
	value: Date

	cellFlags(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): string

	clear(): void

	reset(): void

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
		popupOnly?: boolean
	): void;

}

export interface IDateFieldInternal
	extends IDateField,
	        IMutableDateState {
}

export class DateField
	extends Field
	implements IDateFieldInternal {

	fragments = new DateFragments(this)
	popup       = new DatePopup(this)
	selection   = new DateSelection()

	private rangeValidators: IValidator[]

	constructor(
		validators: IValidator[],
		constraints?: IFieldConstraints
	) {
		super(validators, constraints)

		this.rangeValidators = filterToRangeValidators(validators)
		this.value           = null

		this.reset()
	}

	cellFlags(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): string {
		const [inRange, inMonth] = this.inRangeAndMonth(dateOfMonth, weekIndex)

		return `R${inRange} M${inMonth}`
	}

	setDateOfMonth(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): void {
		const [year, month] = this.getPopupYearAndMonth(dateOfMonth, weekIndex)

		this.setState(dateOfMonth, month, year)
	}

	clear(): void {
		this.setState(null, null, null)
	}

	reset(): void {
		this.setState(null, null, null, true)
	}

	setToDate(
		date: Date // UTC only
	): void {
		this.setState(
			date.getUTCDate() as DateOfMonth,
			date.getUTCMonth() as Month,
			date.getUTCFullYear())
	}

	setToNow(): void {
		this.setToDate(utcNow())
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
		popupOnly?: boolean
	) {
		let popupMonth = month
		let popupYear  = year
		if (!year) {
			const now  = new Date()
			popupMonth = now.getMonth() as Month
			popupYear  = now.getFullYear()
		}
		this.popup.setState(null, popupMonth, popupYear)

		if (popupOnly) {
			return
		}

		this.fragments.setState(date, month, year)
		this.selection.setState(date, month, year)

		if (year) {
			this.value = new Date(Date.UTC(year, month, date))
		} else {
			this.value = null
		}

		this.validate()
		this.detect()
	}

	validate(): void {
		if (this.fragments.valid) {
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
			fragments: {
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
