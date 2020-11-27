import { filterToRangeValidators } from '../../validator/Validator';
import { Field, LabelRule } from '../Field';
import { DateCalendar } from './DateCalendar';
import { DateFragments } from './DateFragments';
import { DateSelection } from './DateSelection';
import { utcNow } from './types';
export class DateField extends Field {
    constructor(validators, rules) {
        super(validators, rules);
        this.fragments = new DateFragments(this);
        this.calendar = new DateCalendar(this);
        this.selection = new DateSelection();
        this.today = new Date();
        this.rules.label = LabelRule.OVER;
        this.rangeValidators = filterToRangeValidators(validators);
        this.theValue = null;
        this.reset();
    }
    get numValue() {
        return this.value
            ? this.value.getTime()
            : null;
    }
    get value() {
        return this.theValue;
    }
    set value(value) {
        this.setValue(value);
    }
    cellFlags(dateOfMonth, weekIndex) {
        const [inRange, inMonth] = this.inRangeAndMonth(dateOfMonth, weekIndex);
        return `R${inRange} M${inMonth}`;
    }
    clear() {
        this.setState(true, null, null, null);
    }
    hidePopup() {
        this.components[0].setShowCalendar(false);
    }
    isOriginal() {
        if (!this.rules.trackOriginal) {
            return true;
        }
        this.theIsOriginal = this.getOriginal();
        return this.theIsOriginal;
    }
    isSelected(dateOfMonth, weekIndex) {
        const [year, month] = this.getCalendarYearAndMonth(dateOfMonth, weekIndex);
        return year === this.selection.year
            && month === this.selection.month
            && dateOfMonth === this.selection.date;
    }
    isToday(dateOfMonth, weekIndex) {
        const [year, month] = this.getCalendarYearAndMonth(dateOfMonth, weekIndex);
        return year === this.today.getFullYear()
            && month === this.today.getMonth()
            && dateOfMonth === this.today.getDate();
    }
    reset() {
        this.setState(true, null, null, null, true);
    }
    revert() {
        if (!this.originalValue) {
            this.clear();
        }
        else {
            this.setToDate(true, this.originalValue);
        }
    }
    setDateOfMonth(dateOfMonth, weekIndex) {
        const [year, month] = this.getCalendarYearAndMonth(dateOfMonth, weekIndex);
        this.setState(true, dateOfMonth, month, year);
    }
    setToDate(external, date // UTC only
    ) {
        this.setState(external, date.getUTCDate(), date.getUTCMonth(), date.getUTCFullYear());
    }
    setToNow() {
        this.setToDate(true, utcNow());
    }
    setValue(value, resetOriginal = false) {
        if (value) {
            this.setToDate(false, value);
        }
        else {
            this.clear();
        }
        if (resetOriginal) {
            this.originalValue = new Date(this.theValue.getTime());
        }
    }
    setState(external, date, month, year, calendarOnly) {
        let calendarMonth = month;
        let calendarYear = year;
        if (!year) {
            const now = new Date();
            calendarMonth = now.getMonth();
            calendarYear = now.getFullYear();
        }
        this.calendar.setState(external, null, calendarMonth, calendarYear);
        if (calendarOnly) {
            return;
        }
        this.fragments.setState(external, date, month, year);
        this.selection.setState(external, date, month, year);
        if (year) {
            this.theValue = new Date(Date.UTC(year, month, date));
        }
        else {
            this.theValue = null;
        }
        this.onValueChanged();
        this.validate(external, false);
        this.detect();
    }
    showPopup() {
        this.group.hideOtherPopups(this);
        if (!this.selection.date) {
            return;
        }
        this.calendar.setState(false, null, this.selection.month, this.selection.year);
    }
    validate(external = true, fromParentGroup) {
        if (this.fragments.valid) {
            super.validate(external, fromParentGroup);
        }
        else {
            if (!this.shouldValidate(external)) {
                return;
            }
            const key = 'format';
            this.errors = [{
                    key,
                    message: this.text.errors[key]
                }];
            this.updateValidity(fromParentGroup);
        }
    }
    getOriginal() {
        if (!this.originalValue) {
            if (this.theValue) {
                return false;
            }
        }
        else if (!this.theValue) {
            if (this.originalValue) {
                return false;
            }
        }
        else {
            return this.originalValue.getTime() === this.theValue.getTime();
        }
        return true;
    }
    getCalendarYearAndMonth(dateOfMonth, weekIndex) {
        let year = this.calendar.year;
        let month = this.calendar.month;
        if (!weekIndex && dateOfMonth > 7) {
            month--;
            if (month < 0) {
                year--;
                month = 11;
            }
        }
        else if (weekIndex > 3 && dateOfMonth <= 7) {
            month++;
            if (month > 11) {
                year++;
                month = 0;
            }
        }
        return [year, month];
    }
    inRangeAndMonth(dateOfMonth, weekIndex) {
        const [year, month] = this.getCalendarYearAndMonth(dateOfMonth, weekIndex);
        // FIXME: verify correctness after range validator is implemented
        const value = new Date(Date.UTC(year, month, dateOfMonth));
        const numValue = value.getTime();
        const fakeField = {
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
        };
        const inMonth = year === this.calendar.year && month === this.calendar.month;
        const invalid = this.rangeValidators.some(validator => !!validator(fakeField));
        return [!invalid, inMonth];
    }
}
//# sourceMappingURL=DateField.js.map