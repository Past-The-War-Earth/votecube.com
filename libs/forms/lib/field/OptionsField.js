import { Field, LabelRule } from './Field';
export class OptionsField extends Field {
    constructor(validators, options = [], rules) {
        super(validators, Object.assign(Object.assign({}, rules), { label: LabelRule.OVER }));
        this.filteredOptions = [];
        this.optionsMap = {};
        this.originalSelectionMap = {};
        this.selectionMap = {};
        this.theValue = rules && rules.multi ? [] : null;
        this.originalValue = rules && rules.multi ? [] : null;
        this.setOptions(options);
    }
    get options() {
        return this.theOptions;
    }
    set options(newOptions) {
        this.setOptions(newOptions);
        const newValue = [];
        const newSelectionMap = {};
        let valueChanged = false;
        for (const selection of this.value) {
            if (!this.optionsMap[selection.id]) {
                valueChanged = true;
            }
            else {
                newSelectionMap[selection.id] = selection;
                newValue.push(selection);
            }
        }
        if (valueChanged) {
            this.selectionMap = newSelectionMap;
            this.value = newValue;
            this.validate(true, false);
        }
        this.detect();
    }
    set optionText(textMap) {
        for (const option of this.options) {
            option.text = textMap[option.id];
        }
    }
    get value() {
        return this.theValue;
    }
    set value(value) {
        this.setValue(value);
    }
    clear() {
        if (this.theValue instanceof Array) {
            this.selectionMap = {};
            this.value = [];
            this.filterOptions();
        }
        else {
            this.value = null;
        }
        this.onBlur();
        this.onValueChanged();
    }
    hidePopup() {
        if (this.components[0].setShowOptions) {
            this.components[0].setShowOptions(false);
        }
    }
    isOriginal() {
        if (!this.rules.trackOriginal) {
            return true;
        }
        this.theIsOriginal = this.getOriginal();
        return this.theIsOriginal;
    }
    revert() {
        if (!this.originalValue
            || (this.originalValue instanceof Array
                && !this.originalValue.length)) {
            this.clear();
        }
        else {
            this.setValue(this.originalValue);
            this.onBlur();
        }
    }
    select(option) {
        this.doSelect(option);
        this.onBlur();
    }
    setValue(value, resetOriginal = false) {
        this.theValue = null;
        if (this.theValue instanceof Array) {
            this.theValue = [];
            if (!value) {
                return;
            }
            value.forEach(aValue => this.selectValue(aValue));
        }
        else {
            this.selectValue(value);
        }
        if (resetOriginal) {
            if (this.theValue instanceof Array) {
                this.originalValue = [
                    ...value
                ];
                this.originalSelectionMap = {};
                value.forEach(aValue => {
                    this.originalSelectionMap[aValue.id] = aValue;
                });
            }
            else {
                this.originalValue = value;
            }
        }
    }
    unselect(optionToUnselect) {
        if (this.theValue instanceof Array) {
            delete this.selectionMap[optionToUnselect.id];
            this.theValue = this.theValue.filter(option => option !== optionToUnselect);
            this.filterOptions();
        }
        else {
            this.theValue = null;
        }
        this.onValueChanged();
        this.onBlur();
    }
    getOriginal() {
        if (this.theValue instanceof Array) {
            for (const aValue of this.originalValue) {
                if (!this.selectionMap[aValue.id]) {
                    return false;
                }
            }
            for (const aValue of this.theValue) {
                if (!this.originalSelectionMap[aValue.id]) {
                    return false;
                }
            }
            return true;
        }
        else {
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
                return this.originalValue.id === this.theValue.id;
            }
            return true;
        }
    }
    doSelect(option) {
        if (this.theValue instanceof Array) {
            this.selectionMap[option.id] = option;
            this.theValue = [...this.theValue, option];
            this.filterOptions();
        }
        else {
            this.theValue = option;
        }
        this.onValueChanged();
    }
    filterOptions() {
        this.filteredOptions = this.options.filter(option => !this.selectionMap[option.id]);
    }
    selectValue(value) {
        let matchingOption;
        if (value) {
            matchingOption = this.optionsMap[value.id];
        }
        if (matchingOption) {
            this.doSelect(matchingOption);
        }
    }
    setOptions(newOptions) {
        this.theOptions = newOptions;
        this.filterOptions();
        this.optionsMap = {};
        for (let newOption of newOptions) {
            this.optionsMap[newOption.id] = newOption;
        }
    }
}
//# sourceMappingURL=OptionsField.js.map