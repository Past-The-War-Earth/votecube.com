"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateSelection_1 = require("./DateSelection");
class DateCalendar extends DateSelection_1.DateSelection {
    constructor(field) {
        super();
        this.field = field;
    }
    /*	set year(
            year: number
        ) {
            this.current.impl.year   = year
            this.setWeeks(this.current.month)
        }*/
    setState(external, date, month, year) {
        if (month === this.month
            && year === this.year) {
            return;
        }
        super.setState(external, null, month, year);
        this.setWeeks(this.month);
    }
    toNextMonth() {
        this.setWeeks(this.month + 1);
    }
    toPrevMonth() {
        this.setWeeks(this.month - 1);
    }
    setWeeks(month) {
        if (month < 0) {
            this.impl.year--;
            this.impl.month = 11;
        }
        else if (month > 11) {
            this.impl.year++;
            this.impl.month = 0;
        }
        else {
            this.impl.month = month;
        }
        const previousMonthBorderDate = new Date(this.year, this.month);
        previousMonthBorderDate.setDate(1);
        const firstOfMonthDayOfWeek = previousMonthBorderDate.getDay();
        previousMonthBorderDate.setDate(0);
        const lastDateOfPreviousMonth = previousMonthBorderDate.getDate();
        this.weeks = [];
        let week = [];
        // FIXME: add support for weeks starting on Monday
        for (let i = firstOfMonthDayOfWeek - 1; i >= 0; i--) {
            week[i] = lastDateOfPreviousMonth - (firstOfMonthDayOfWeek - i - 1);
        }
        let dayOfMonth = 1;
        let dayOfWeek = firstOfMonthDayOfWeek;
        let inNextMonth = false;
        const lastOfDisplayedMonth = new Date(this.year, this.month);
        for (let weekOfMonth = 0; weekOfMonth < 6; weekOfMonth++) {
            for (; dayOfWeek < 7; dayOfWeek++, dayOfMonth++) {
                lastOfDisplayedMonth.setDate(dayOfMonth);
                if (!inNextMonth
                    && this.month !== lastOfDisplayedMonth.getMonth()) {
                    inNextMonth = true;
                    dayOfMonth = 1;
                }
                week[dayOfWeek] = dayOfMonth;
            }
            this.weeks.push(week);
            if (inNextMonth) {
                break;
            }
            dayOfWeek = 0;
            week = [];
        }
        this.field.detect();
    }
}
exports.DateCalendar = DateCalendar;
//# sourceMappingURL=DateCalendar.js.map