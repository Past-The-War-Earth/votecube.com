"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("../../validator/Validator");
var FragmentType;
(function (FragmentType) {
    FragmentType["DATE"] = "date";
    FragmentType["MONTH"] = "month";
    FragmentType["YEAR"] = "year";
})(FragmentType = exports.FragmentType || (exports.FragmentType = {}));
class DateFragments {
    constructor(fieldState) {
        this.fieldState = fieldState;
        this.impl = {
            date: '',
            // last: {
            // 	date: this.getActivity(),
            // 	inputOrKeydown: null,
            // 	month: this.getActivity(),
            // 	year: this.getActivity()
            // },
            month: '',
            validity: this.getAssumedValidity(),
            year: ''
        };
    }
    get date() {
        return this.impl.date;
    }
    get month() {
        return this.impl.month;
    }
    get valid() {
        return this.impl.validity.isValid;
    }
    get year() {
        return this.impl.year;
    }
    // DateField and DatePicker.html
    // are coupled, so this is here
    onInput(fragmentType, element) {
        // this.impl.last.inputOrKeydown = LastInputOrKeydownEvent.ON_KEYDOWN
        const currentValue = element.value;
        const fragmentTypeToFocus = this.setFragmentValue(currentValue, fragmentType);
        const newValue = this[fragmentType];
        if (currentValue !== newValue) {
            // value binding does not work in this case, set manually
            element.value = newValue;
        }
        if (fragmentTypeToFocus === fragmentType) {
            return;
        }
        this.focusFragment(fragmentTypeToFocus, element);
    }
    onKeydown(fragmentType, event) {
        const element = event.target;
        // this.impl.last[fragmentType] = this.getActivity(
        // 	inputOrKeydown.code, element.selectionEnd, element.selectionStart, element.value)
        // this.impl.last.inputOrKeydown = LastInputOrKeydownEvent.ON_INPUT
        // console.log("onKeydown")
        // console.log(this.impl.last[fragmentType])
        if (event.code !== 'Backspace'
            || element.selectionEnd !== 0
            || element.selectionStart !== 0) {
            // TODO: add support other other cases, if needed
            return;
        }
        // NOTE: Backspace in input with no selection and cursor at beginning
        // (this case) does not cause input event
        const previousFragmentType = this.getPreviousFragmentType(fragmentType);
        if (!previousFragmentType) {
            return;
        }
        let previousValue = this[previousFragmentType];
        // TODO: possible TS bug? (remove as any)
        if (previousValue || previousValue === 0) {
            previousValue = ('' + previousValue).substr(0, previousValue.length - 1);
        }
        this.setFragmentValue(previousValue, previousFragmentType, true);
        this.focusFragment(previousFragmentType, element);
    }
    setState(external, date, month, year) {
        this.impl = {
            date: date === null ? '' : date,
            // last: this.impl.last,
            month: month === null ? '' : month + 1,
            validity: this.getAssumedValidity(date, month, year),
            year: year === null ? '' : year
        };
    }
    adjustDateOrMonthInputAndRefocus(validity, dateOrMonthString, currentFragmentType, nextFragmentType, singleDigitMaximum) {
        // FIXME: add support for non MM/DD/YYYY formats
        // always move ahead of both characters are set
        validity.fragmentToFocus = dateOrMonthString.length === 2
            ? nextFragmentType
            : currentFragmentType;
        if (!validity[currentFragmentType].isPositiveInteger) {
            return validity;
        }
        if (validity[nextFragmentType].number !== null) {
            // Next fragment is already set and cannot be spilled over
            return validity;
        }
        const fragmentValidity = validity[currentFragmentType];
        if (fragmentValidity.inRange) {
            switch (dateOrMonthString.length) {
                case 2:
                    currentFragmentType = nextFragmentType;
                    break;
                case 1: {
                    if (fragmentValidity.number > singleDigitMaximum) {
                        currentFragmentType = nextFragmentType;
                    }
                    break;
                }
            }
        }
        else {
            this.impl[currentFragmentType] = dateOrMonthString.substr(0, 1);
            this.impl[nextFragmentType] = dateOrMonthString.substr(1);
            currentFragmentType = nextFragmentType;
            validity = this.getValidity();
        }
        validity.fragmentToFocus = currentFragmentType;
        return validity;
    }
    focusFragment(fragmentTypeToFocus, siblingFragmentElement) {
        siblingFragmentElement.parentElement.getElementsByClassName(fragmentTypeToFocus)[0].focus();
    }
    /*
    private getActivity(
        id         = null,
        end         = null,
        start       = null,
        stringValue = null
    ): IInputFragmentActivity {
        return {
            id,
            selection: {
                end,
                start
            },
            stringValue
        }
    }
*/
    getAssumedFragmentValidity(fragment) {
        if (fragment === null) {
            return {
                inRange: false,
                isPositiveInteger: false,
                number: null
            };
        }
        return {
            inRange: true,
            isPositiveInteger: true,
            number: fragment
        };
    }
    getAssumedValidity(date = null, month = null, year = null) {
        return {
            date: this.getAssumedFragmentValidity(date),
            fragmentToFocus: null,
            isValid: true,
            month: this.getAssumedFragmentValidity(month),
            year: this.getAssumedFragmentValidity(year)
        };
    }
    getInputFragmentValidity(fragmentString) {
        return {
            inRange: false,
            isPositiveInteger: Validator_1.isPositiveInteger(fragmentString),
            number: null
        };
    }
    getPreviousFragmentType(fragmentType) {
        // FIXME: add support for non MM/DD/YYYY formats
        switch (fragmentType) {
            case FragmentType.DATE:
                return FragmentType.MONTH;
            case FragmentType.YEAR:
                return FragmentType.DATE;
        }
    }
    getValidity(dateString = this.date, monthString = this.month, yearString = this.year) {
        const date = this.getInputFragmentValidity(dateString);
        const month = this.getInputFragmentValidity(monthString);
        const year = this.getInputFragmentValidity(yearString);
        const validity = {
            date,
            fragmentToFocus: null,
            isValid: false,
            month,
            year
        };
        if (date.isPositiveInteger) {
            const dateNumber = parseInt(dateString);
            date.inRange = dateNumber >= 1 && dateNumber <= 31;
            date.number = dateNumber;
        }
        if (month.isPositiveInteger) {
            const monthNumber = parseInt(monthString) - 1;
            month.inRange = monthNumber >= 0 && monthNumber <= 11;
            month.number = monthNumber;
        }
        if (year.isPositiveInteger) {
            const yearNumber = parseInt(yearString);
            year.inRange = yearNumber >= 0 && yearNumber <= 9999;
            year.number = yearNumber;
        }
        if (this.isValid(validity)) {
            const dateObject = new Date(year.number, month.number);
            dateObject.setDate(date.number);
            if (dateObject.getMonth() !== month.number) {
                date.inRange = false;
            }
        }
        validity.isValid = this.isValid(validity);
        return validity;
    }
    isValid(validity) {
        return validity.date.isPositiveInteger
            && validity.month.isPositiveInteger
            && validity.year.isPositiveInteger
            && validity.date.inRange
            && validity.month.inRange
            && validity.year.inRange;
    }
    setDate(dateString, onBackspace) {
        this.impl.date = dateString;
        return this.validateAndSetState(dateString, undefined, undefined, (validity) => {
            if (onBackspace) {
                // FIXME: add support for non MM/DD/YYYY formats
                validity.fragmentToFocus = FragmentType.DATE;
                return validity;
            }
            return this.adjustDateOrMonthInputAndRefocus(validity, dateString, FragmentType.DATE, FragmentType.YEAR, 3);
        });
    }
    setFragmentValue(value, fragmentType, onBackspace = false) {
        switch (fragmentType) {
            case FragmentType.DATE:
                return this.setDate(value, onBackspace);
            case FragmentType.MONTH:
                return this.setMonth(value, onBackspace);
            case FragmentType.YEAR:
                return this.setYear(value, onBackspace);
        }
    }
    setMonth(monthString, onBackspace) {
        this.impl.month = monthString;
        return this.validateAndSetState(undefined, monthString, undefined, (validity) => {
            if (onBackspace) {
                // FIXME: add support for non MM/DD/YYYY formats
                validity.fragmentToFocus = FragmentType.MONTH;
                return validity;
            }
            return this.adjustDateOrMonthInputAndRefocus(validity, monthString, FragmentType.MONTH, FragmentType.DATE, 0);
        });
    }
    setYear(yearString, onBackspace) {
        this.impl.year = yearString;
        this.validateAndSetState(undefined, undefined, yearString, (validity) => {
            if (onBackspace) {
                // FIXME: add support for non MM/DD/YYYY formats
                return validity;
            }
            return validity;
        });
        return FragmentType.YEAR;
    }
    validateAndSetState(dateString, monthString, yearString, spillOverCallback) {
        let validity = this.getValidity(dateString, monthString, yearString);
        validity = spillOverCallback(validity);
        this.impl.validity = validity;
        if (validity.isValid) {
            this.fieldState.setState(true, validity.date.number, validity.month.number, validity.year.number);
        }
        else {
            // fieldState.setState validates & detects, do so here as well
            this.fieldState.validate();
            this.fieldState.detect();
        }
        return validity.fragmentToFocus;
    }
}
exports.DateFragments = DateFragments;
//# sourceMappingURL=DateFragments.js.map