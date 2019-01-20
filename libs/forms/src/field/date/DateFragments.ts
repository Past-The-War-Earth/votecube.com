import {isPositiveInteger} from '../..'
import {
	IDetect,
	IValidate
}                          from '../Field'
import {IMutableDateState} from './DateField'
import {
	DateOfMonth,
	Month
}                          from './types'

export enum FragmentType {
	DATE  = 'date',
	MONTH = 'month',
	YEAR  = 'year'
}

export interface IDateFragmentsData {
	date: string
	month: string
	year: string
}

export interface IDateFragments
	extends IDateFragmentsData {
	valid: boolean

	onKeydown(
		fragmentType: FragmentType,
		event: KeyboardEvent
	): void

	setFragment(
		fragmentType: FragmentType,
		element: HTMLInputElement
	): void

}

export interface IInputFragmentActivity {
	stringValue: string
	key: string
}

export interface IDateFragmentsActivity {
	date: IInputFragmentActivity
	month: IInputFragmentActivity
	year: IInputFragmentActivity
}

export interface IInputFragmentValidity<N> {
	inRange: boolean
	isPositiveInteger: boolean
	number: N
}

export interface IDateFragmentsValidity {
	date: IInputFragmentValidity<DateOfMonth>
	isValid: boolean
	month: IInputFragmentValidity<Month>
	fragmentToFocus: FragmentType
	year: IInputFragmentValidity<number>
}

export interface IDateFragmentsInternal
	extends IDateFragments,
	        IMutableDateState {
	impl: IDateFragmentsData
}

export class DateFragments
	implements IDateFragmentsInternal {

	impl: IDateFragmentsData & {
		last: IDateFragmentsActivity,
		validity: IDateFragmentsValidity
	} = {
		date: '',
		last: {
			date: {
				key: null,
				stringValue: null
			},
			month: {
				key: null,
				stringValue: null
			},
			year: {
				key: null,
				stringValue: null
			}
		},
		month: '',
		validity: this.getAssumedValidity(),
		year: ''
	}

	constructor(
		private fieldState: IDetect & IMutableDateState & IValidate
	) {
	}

	get date(): string {
		return this.impl.date
	}

	get month(): string {
		return this.impl.month
	}

	get valid(): boolean {
		return this.impl.validity.isValid
	}

	get year(): string {
		return this.impl.year
	}

	onKeydown(
		fragmentType: FragmentType,
		event: KeyboardEvent
	): void {
		const last = this.impl.last[fragmentType]
		last.key   = null
		last.stringValue = (event.target as HTMLInputElement).value
		// if (event.code !== 'Backspace') {
		// 	// TODO: add support other other keys, if needed
		// 	return
		// }
	}

	// TODO: move back to component if component lazy loading is introduced
	// since this breaks component encapsulation (a bit, though two are coupled)
	setFragment(
		fragmentType: FragmentType,
		element: HTMLInputElement
	): void {
		let currentValue = element.value

		const fragmentTypeToFocus = this.setFragmentValue(
			currentValue, fragmentType)

		let newValue = this[fragmentType]

		if (currentValue !== newValue) {
			// value binding does not work in this case, set manually
			element.value = newValue
		}

		if (fragmentTypeToFocus === fragmentType) {
			return
		}
		(element.parentElement.getElementsByClassName(fragmentTypeToFocus)
			[0] as any).focus()
	}

	setState(
		date: DateOfMonth,
		month: Month,
		year: number
	): void {
		this.impl = {
			date: date === null ? '' : date as any,
			last: this.impl.last,
			month: month === null ? '' : month + 1 as any,
			validity: this.getAssumedValidity(date, month, year),
			year: year === null ? '' : year as any
		}
	}

	private adjustDateOrMonthInputAndRefocus(
		validity: IDateFragmentsValidity,
		dateOrMonthString: string,
		currentFragmentType: FragmentType,
		nextFragmentType: FragmentType,
		singleDigitMaximum: 0 | 3
	): IDateFragmentsValidity {
		// FIXME: add support for non MM/DD/YYYY formats

		// always move ahead of both characters are set
		validity.fragmentToFocus = dateOrMonthString.length === 2
			? nextFragmentType
			: currentFragmentType

		if (!validity[currentFragmentType].isPositiveInteger) {
			return validity
		}

		if (validity[nextFragmentType].number !== null) {
			// Next fragment is already set and cannot be spilled over
			return validity
		}

		const fragmentValidity = validity[currentFragmentType]
		if (fragmentValidity.inRange) {
			switch (dateOrMonthString.length) {
				case 2:
					currentFragmentType = nextFragmentType
					break
				case 1: {
					if (fragmentValidity.number > singleDigitMaximum) {
						currentFragmentType = nextFragmentType
					}
					break
				}
			}
		} else {
			this.impl[currentFragmentType] = dateOrMonthString.substr(0, 1)
			this.impl[nextFragmentType]    = dateOrMonthString.substr(1)
			currentFragmentType            = nextFragmentType
			validity                       = this.getValidity()
		}
		validity.fragmentToFocus = currentFragmentType

		return validity
	}

	private getAssumedValidity(
		date: DateOfMonth = null,
		month: Month      = null,
		year: number      = null
	): IDateFragmentsValidity {
		return {
			date: this.getAssumedFragmentValidity(date),
			fragmentToFocus: null,
			isValid: true,
			month: this.getAssumedFragmentValidity(month),
			year: this.getAssumedFragmentValidity(year)
		}
	}

	private getAssumedFragmentValidity<N>(
		fragment: N
	): IInputFragmentValidity<N> {
		if (fragment === null) {
			return {
				inRange: false,
				isPositiveInteger: false,
				number: null
			}
		}

		return {
			inRange: true,
			isPositiveInteger: true,
			number: fragment
		}
	}

	private getInputFragmentValidity<N>(
		fragmentString: string
	): IInputFragmentValidity<N> {
		return {
			inRange: false,
			isPositiveInteger: isPositiveInteger(fragmentString),
			number: null
		}
	}

	private getValidity(
		dateString  = this.date,
		monthString = this.month,
		yearString  = this.year
	): IDateFragmentsValidity {
		const date  = this.getInputFragmentValidity<DateOfMonth>(dateString)
		const month = this.getInputFragmentValidity<Month>(monthString)
		const year  = this.getInputFragmentValidity<number>(yearString)

		let validity: IDateFragmentsValidity = {
			date,
			fragmentToFocus: null,
			isValid: false,
			month,
			year
		}

		if (date.isPositiveInteger) {
			const dateNumber = parseInt(dateString) as DateOfMonth
			date.inRange     = dateNumber >= 1 && dateNumber <= 31
			date.number      = dateNumber
		}

		if (month.isPositiveInteger) {
			const monthNumber = parseInt(monthString) - 1 as Month
			month.inRange     = monthNumber >= 0 && monthNumber <= 11
			month.number      = monthNumber
		}

		if (year.isPositiveInteger) {
			const yearNumber = parseInt(yearString)
			year.inRange     = yearNumber >= 0 && yearNumber <= 9999
			year.number      = yearNumber
		}

		if (this.isValid(validity)) {
			const dateObject = new Date(year.number, month.number)
			dateObject.setDate(date.number)
			if (dateObject.getMonth() !== month.number) {
				date.inRange = false
			}
		}

		validity.isValid = this.isValid(validity)

		return validity
	}

	private isValid(
		validity: IDateFragmentsValidity
	): boolean {
		return validity.date.isPositiveInteger
			&& validity.month.isPositiveInteger
			&& validity.year.isPositiveInteger
			&& validity.date.inRange
			&& validity.month.inRange
			&& validity.year.inRange
	}

	private setDate(
		dateString: string
	): FragmentType {
		this.impl.date = dateString
		return this.validateAndSetState(dateString, undefined, undefined, (
			validity: IDateFragmentsValidity
		) => {
			return this.adjustDateOrMonthInputAndRefocus(validity, dateString, FragmentType.DATE, FragmentType.YEAR, 3)
		})
	}

	private setFragmentValue(
		value: string,
		fragmentType: FragmentType
	): FragmentType {
		switch (fragmentType) {
			case FragmentType.DATE:
				return this.setDate(value)
			case FragmentType.MONTH:
				return this.setMonth(value)
			case FragmentType.YEAR:
				return this.setYear(value)
		}
	}

	private setMonth(
		monthString: string
	): FragmentType {
		this.impl.month = monthString
		return this.validateAndSetState(undefined, monthString, undefined, (
			validity: IDateFragmentsValidity
		) => {
			return this.adjustDateOrMonthInputAndRefocus(validity, monthString, FragmentType.MONTH, FragmentType.DATE, 0)
		})
	}

	private setYear(
		yearString: string
	): FragmentType {
		this.impl.year = yearString
		this.validateAndSetState(undefined, undefined, yearString)

		return FragmentType.YEAR
	}

	private validateAndSetState(
		dateString,
		monthString: string,
		yearString: string,
		spillOverCallback?: (
			validity: IDateFragmentsValidity
		) => IDateFragmentsValidity
	): FragmentType {
		let validity = this.getValidity(dateString, monthString, yearString)

		if (spillOverCallback) {
			validity = spillOverCallback(validity)
		}

		this.impl.validity = validity

		if (validity.isValid) {
			this.fieldState.setState(
				validity.date.number,
				validity.month.number,
				validity.year.number)
		} else {
			this.fieldState.validate()
			this.fieldState.detect()
		}

		return validity.fragmentToFocus
	}

}
