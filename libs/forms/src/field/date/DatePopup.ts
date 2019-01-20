import {IDateFieldInternal} from './DateField'
import {
	DateSelection,
	IDateSelection,
	IDateSelectionInternal
}                           from './DateSelection'
import {
	DateOfMonth,
	Month
}                           from './types'

export interface IDatePopup
	extends IDateSelection {

	weeks: DateOfMonth[][]

	toNextMonth(): void

	toPrevMonth(): void
}

export interface IDatePopupInternal
	extends IDatePopup,
	        IDateSelectionInternal {
	// year: number
}

export class DatePopup
	extends DateSelection
	implements IDatePopupInternal {

	weeks: DateOfMonth[][]

	constructor(
		private field: IDateFieldInternal
	) {
		super()
	}

	/*	set year(
			year: number
		) {
			this.current.impl.year   = year
			this.setWeeks(this.current.month)
		}*/

	setState(
		date: DateOfMonth,
		month: Month,
		year: number
	): void {
		super.setState(null, month, year)
		this.setWeeks(this.impl.month)
	}

	toNextMonth(): void {
		this.setWeeks(this.impl.month + 1 as Month)
	}

	toPrevMonth(): void {
		this.setWeeks(this.impl.month - 1 as Month)
	}

	private setWeeks(
		month: Month
	): void {
		if (month < 0) {
			this.impl.year--
			this.impl.month = 11
		} else if (month > 11) {
			this.impl.year++
			this.impl.month = 0
		} else {
			this.impl.month = month
		}

		const previousMonthBorderDate = new Date(this.impl.year, this.impl.month)
		previousMonthBorderDate.setDate(1)
		const firstOfMonthDayOfWeek = previousMonthBorderDate.getDay()

		previousMonthBorderDate.setDate(0)
		const lastDateOfPreviousMonth = previousMonthBorderDate.getDate()

		this.weeks = []
		let week   = []

		// FIXME: add support for weeks starting on Monday
		for (let i = firstOfMonthDayOfWeek - 1; i >= 0; i--) {
			week[i] = lastDateOfPreviousMonth - (firstOfMonthDayOfWeek - i - 1)
		}
		let dayOfMonth             = 1
		let dayOfWeek              = firstOfMonthDayOfWeek
		let inNextMonth            = false
		const lastOfDisplayedMonth = new Date(this.impl.year, this.impl.month)
		for (let weekOfMonth = 0; weekOfMonth < 6; weekOfMonth++) {
			for (; dayOfWeek < 7; dayOfWeek++, dayOfMonth++) {
				lastOfDisplayedMonth.setDate(dayOfMonth)
				if (!inNextMonth
					&& this.impl.month !== lastOfDisplayedMonth.getMonth()) {
					inNextMonth = true
					dayOfMonth  = 1
				}
				week[dayOfWeek] = dayOfMonth
			}
			this.weeks.push(week)
			if (inNextMonth) {
				break
			}
			dayOfWeek = 0
			week      = []
		}
		this.field.detect()
	}

}
