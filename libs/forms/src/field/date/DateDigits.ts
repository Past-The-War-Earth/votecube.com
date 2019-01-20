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

export interface IDateDigits {
	date: string;
	month: string;
	valid: boolean;
	year: string;
}

export interface IDateDigitsInternal
	extends IDateDigits,
	        IMutableDateState {
	impl: IDateDigits;
}

export class DateDigits
	implements IDateDigitsInternal {

	impl: IDateDigits = {
		date: '',
		month: '',
		valid: true,
		year: ''
	}

	constructor(
		private fieldState: IDetect & IMutableDateState & IValidate
	) {
	}

	get date(): string {
		return this.impl.date
	}

	set date(
		dateString: string
	) {
		this.impl.date = dateString
		this.validateAndSetState(dateString, undefined, undefined)
	}

	get month(): string {
		return this.impl.month
	}

	set month(
		monthString: string
	) {
		this.impl.month = monthString
		this.validateAndSetState(undefined, monthString, undefined)
	}

	get valid(): boolean {
		return this.impl.valid
	}

	get year(): string {
		return this.impl.year
	}

	set year(
		yearString: string
	) {
		this.impl.year = yearString
		this.validateAndSetState(undefined, undefined, yearString)
	}

	setState(
		date: DateOfMonth,
		month: Month,
		year: number
	): void {
		this.impl = {
			date: date === null ? '' : date as any,
			month: month === null ? '' : month + 1 as any,
			valid: true,
			year: year === null ? '' : year as any
		}
	}

	private validateAndSetState(
		dateString  = this.date,
		monthString = this.month,
		yearString  = this.year
	): void {
		this.impl.valid = this.setStateIfValid(dateString, monthString, yearString)
		if (!this.impl.valid) {
			this.fieldState.validate()
			this.fieldState.detect()
		}
	}

	private setStateIfValid(
		dateString: string,
		monthString: string,
		yearString: string
	): boolean {
		if (!isPositiveInteger(dateString) || !isPositiveInteger(monthString)
			|| !isPositiveInteger(yearString)) {
			return false
		}

		const year = parseInt(yearString)
		if (!(year >= 0 && year <= 9999)) {
			return false
		}

		const month = parseInt(monthString) - 1 as Month
		if (!(month >= 0 && month <= 11)) {
			return false
		}

		const date = parseInt(dateString) as DateOfMonth
		if (!(date >= 1 && date <= 31)) {
			return false
		}

		const dateObject = new Date(year, month)
		dateObject.setDate(date)
		if (dateObject.getMonth() !== month) {
			return false
		}

		this.fieldState.setState(date, month, year, dateObject, true)
	}

}
