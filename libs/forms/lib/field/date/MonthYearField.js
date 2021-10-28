import { filterToRangeValidators } from '../../validator/Validator';
import { Field, LabelRule } from '../Field';
import { utcNow } from './types';
export class MonthYearField extends Field {
    constructor(validators, rules) {
        super(validators, rules);
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
    clear() {
        this.setState(null, null);
    }
    hidePopup() {
        if (this.components[0].setShowCalendar) {
            this.components[0].setShowCalendar(false);
        }
    }
    isOriginal() {
        if (!this.rules.trackOriginal) {
            return true;
        }
        this.theIsOriginal = this.getOriginal();
        return this.theIsOriginal;
    }
    reset() {
        this.setState(null, null, false);
    }
    revert() {
        if (!this.originalValue) {
            this.clear();
        }
        else {
            this.setToDate(true, this.originalValue);
        }
    }
    setToDate(external, date // UTC only
    ) {
        this.setState(date.getUTCMonth(), date.getUTCFullYear());
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
    getLastDateOfMonth(calendarMonth) {
        switch (calendarMonth) {
            case 0:
                return 31;
            case 1:
                // FIXME: compute for Feb 29th
                return 28;
            case 2:
                return 31;
            case 3:
                return 30;
            case 4:
                return 31;
            case 5:
                return 30;
            case 6:
                return 31;
            case 7:
                return 31;
            case 8:
                return 30;
            case 9:
                return 31;
            case 10:
                return 30;
            case 11:
                return 31;
        }
    }
    setState(month, year, validate = true) {
        if (year && (month || month === 0)) {
            const date = this.getLastDateOfMonth(month);
            this.theValue = new Date(Date.UTC(year, month, date, 23, 59, 59, 999));
        }
        else {
            this.theValue = null;
        }
        if (!validate) {
            return;
        }
        this.onValueChanged();
        this.validate(true, false);
        this.detect();
    }
    validate(external = true, fromParentGroup) {
        // if (this.fragments.valid) {
        super.validate(external, fromParentGroup);
        // } else {
        // 	if (!this.shouldValidate(external)) {
        // 		return
        // 	}
        // 	const key = 'format'
        // 	this.errors = [{
        // 		key,
        // 		message: this.text.errors[key]
        // 	}]
        // 	this.updateValidity(fromParentGroup)
        // }
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
}
//# sourceMappingURL=MonthYearField.js.map