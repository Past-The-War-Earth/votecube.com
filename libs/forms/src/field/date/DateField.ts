import {
	filterToRangeValidators,
	IValidator
} from '../../validator/Validator'
import {
	Field,
	IField,
	IFieldRules,
	LabelRule
} from '../Field'
import {
	DateCalendar,
	IDateCalendar
} from './DateCalendar'
import {
	DateFragments,
	IDateFragments
} from './DateFragments'
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
	calendar: IDateCalendar
	selection: IDateSelection
	value: Date

	cellFlags(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): string

	clear(): void

	isSelected(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): boolean

	isToday(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): boolean

	reset(): void

	showPopup(): void

	setToDate(
		date: Date
	): void

	setToNow(): void

}

export interface IMutableDateState {

	setState(
		date: DateOfMonth,
		month: Month,
		year: number,
		calendarOnly?: boolean
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
	calendar  = new DateCalendar(this)
	selection = new DateSelection()
	today     = new Date()

	private rangeValidators: IValidator[]

	constructor(
		validators: IValidator[],
		rules?: IFieldRules
	) {
		super(validators, rules)

		this.rules.label = LabelRule.OVER

		this.rangeValidators = filterToRangeValidators(validators)
		this.theValue        = null

		this.reset()
	}

	get numValue(): number {
		return this.value
			? this.value.getTime()
			: null
	}

	get value() {
		return this.theValue
	}

	set value(
		value: Date
	) {
		this.setValue(value)
	}

	cellFlags(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): string {
		const [inRange, inMonth] = this.inRangeAndMonth(dateOfMonth, weekIndex)

		return `R${inRange} M${inMonth}`
	}

	clear(): void {
		this.setState(null, null, null)
	}

	hidePopup(): void {
		this.components[0].set({showCalendar: false})
	}

	isOriginal(): boolean {
		if (!this.originalValue) {
			if (this.theValue) {
				return false
			}
		} else if (!this.theValue) {
			if (this.originalValue) {
				return false
			}
		} else {
			return this.originalValue.getTime() === this.theValue.getTime()
		}

		return true
	}

	isSelected(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): boolean {
		const [year, month] = this.getCalendarYearAndMonth(dateOfMonth, weekIndex)

		return year === this.selection.year
			&& month === this.selection.month
			&& dateOfMonth === this.selection.date
	}

	isToday(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): boolean {
		const [year, month] = this.getCalendarYearAndMonth(dateOfMonth, weekIndex)

		return year === this.today.getFullYear()
			&& month === this.today.getMonth()
			&& dateOfMonth === this.today.getDate()
	}

	reset(): void {
		this.setState(null, null, null, true)
	}

	setDateOfMonth(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): void {
		const [year, month] = this.getCalendarYearAndMonth(dateOfMonth, weekIndex)

		this.setState(dateOfMonth, month, year)
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
		value: Date,
		resetOriginal = false
	): void {
		if (value) {
			this.setToDate(value)
		} else {
			this.clear()
		}

		if (resetOriginal) {
			this.originalValue = new Date(this.theValue.getTime())
		}
	}

	setState(
		date: DateOfMonth,
		month: Month,
		year: number,
		calendarOnly?: boolean
	) {
		let calendarMonth = month
		let calendarYear  = year
		if (!year) {
			const now     = new Date()
			calendarMonth = now.getMonth() as Month
			calendarYear  = now.getFullYear()
		}
		this.calendar.setState(null, calendarMonth, calendarYear)

		if (calendarOnly) {
			return
		}

		this.fragments.setState(date, month, year)
		this.selection.setState(date, month, year)

		if (year) {
			this.theValue = new Date(Date.UTC(year, month, date))
		} else {
			this.theValue = null
		}
		this.onValueChanged()

		this.validate()
		this.detect()
	}

	showPopup(): void {
		this.group.hideOtherPopups(this)
		if (!this.selection.date) {
			return
		}
		this.calendar.setState(null, this.selection.month, this.selection.year)
	}

	validate(
		fromParentGroup?: boolean
	): void {
		if (this.fragments.valid) {
			super.validate(fromParentGroup)
		} else {
			let key     = 'format'
			this.errors = [{
				key,
				message: this.text.errors[key]
			}]
			this.updateValidity(fromParentGroup)
		}
	}

	private getCalendarYearAndMonth(
		dateOfMonth: DateOfMonth,
		weekIndex: 0 | 1 | 2 | 3 | 4 | 5
	): [number, Month] {
		let year  = this.calendar.year
		let month = this.calendar.month
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
		const [year, month] = this.getCalendarYearAndMonth(dateOfMonth, weekIndex)

		// FIXME: verify correctness after range validator is implemented
		const value          = new Date(Date.UTC(year, month, dateOfMonth))
		const numValue       = value.getTime()
		const fakeField: any = {
			fragments: {
				valid: true
			},
			numValue,
			selection: {
				date: dateOfMonth,
				month,
				year
			},
			value
		}

		const inMonth = year === this.calendar.year && month === this.calendar.month

		const invalid = this.rangeValidators.some(
			validator => !!validator(fakeField))

		return [!invalid, inMonth]
	}

}
