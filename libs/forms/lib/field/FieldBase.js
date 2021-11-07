import { addChange, getChange } from '../changeTracker';
export class FieldBase {
    constructor(validators = []) {
        this.validators = validators;
        // array: IFieldArray
        this.dirty = false;
        this.errors = [];
        this.id = '';
        // optionText
        this.components = [];
        this.pristine = true;
        this.theIsOriginal = true;
        this.valid = null;
        this.validationRun = 0;
        this.valueChangeCallbacks = [];
        this.theTouched = false;
        this.validatorMap = {};
        for (const validator of validators) {
            this.validatorMap[validator.type] = validator;
        }
    }
    get hasValue() {
        return this.theValue != null
            && this.theValue !== '';
    }
    get isRequired() {
        return this.validatorMap.required;
    }
    get optionText() {
        return this._optionText;
    }
    set optionText(newOptionText) {
        this._optionText = newOptionText;
    }
    get touched() {
        return this.theTouched;
    }
    get value() {
        return this.theValue;
    }
    set value(newValue) {
        this.setValue(newValue);
    }
    get changeFlags() {
        return this.isOriginal() ? 0 : 1;
    }
    get displayValue() {
        return this.theValue;
    }
    displayMatches() {
        return false;
    }
    setRun(runNumber) {
        this.validationRun = runNumber;
    }
    addComponent(component) {
        this.components.push(component);
    }
    clearComponents() {
        this.components = [];
    }
    detect(reuseChange) {
        setTimeout(() => {
            const delta = reuseChange
                ? reuseChange
                : reuseChange === 0
                    ? getChange()
                    : addChange();
            for (const page of this.components) {
                page.setDelta(delta);
            }
        });
    }
    focus() {
        this.group.hideOtherPopups(this);
    }
    hidePopup() {
        // nothing to do for fields with no popups
    }
    isSame(val1, val2) {
        if (val1 instanceof Object) {
            if (!(val2 instanceof Object)) {
                return false;
            }
            for (const property in val1) {
                if (!this.isSame(val1[property], val2[property])) {
                    return false;
                }
            }
            for (const property in val2) {
                if (!this.isSame(val1[property], val2[property])) {
                    return false;
                }
            }
            return true;
        }
        else {
            return val2 === val1;
        }
    }
    onChange(callback) {
        this.valueChangeCallbacks.push(callback);
    }
    removeComponent(component) {
        for (let index = this.components.length - 1; index >= 0; index--) {
            const currentComponent = this.components[index];
            if (component === currentComponent) {
                this.components.splice(index, 1);
                break;
            }
        }
    }
    revert() {
        const originalValue = this.originalValue;
        if (originalValue instanceof Object) {
            this.theValue = {};
            for (const property in originalValue) {
                this.theValue[property] = originalValue[property];
            }
        }
        else {
            this.theValue = this.originalValue;
        }
    }
    setAsField(component) {
        this.components.unshift(component);
    }
    setValue(newValue, resetOriginal = false) {
        this.theValue = newValue;
        if (resetOriginal) {
            if (newValue instanceof Object) {
                this.originalValue = {};
                for (const property in newValue) {
                    this.originalValue[property] = newValue[property];
                }
            }
            else {
                this.originalValue = newValue;
            }
        }
        this.onValueChanged();
    }
    touch(fromChild, formParent) {
        this.theTouched = true;
        if (!formParent) {
            if (this.group) {
                this.group.touch(true);
            }
        }
        else {
            this.detect(0);
        }
    }
    onValueChanged() {
        setTimeout(() => {
            for (const callback of this.valueChangeCallbacks) {
                callback(this.theValue);
            }
        });
    }
    shouldValidate(external) {
        if (external) {
            VALIDATION_RUN_NUMBER++;
        }
        if (this.validationRun !== VALIDATION_RUN_NUMBER) {
            this.validationRun = VALIDATION_RUN_NUMBER;
            return true;
        }
        return false;
    }
}
export function validate(field) {
    field.errors = [];
    field.validators.some(validator => {
        const error = validator(field);
        if (error) {
            if (error instanceof Array) {
                error.forEach(anError => {
                    anError.message = field.text.errors[anError.key];
                });
                field.errors = field.errors.concat(error);
            }
            else {
                error.message = field.text.errors[error.key];
                field.errors.push(error);
            }
            return true;
        }
    });
}
let VALIDATION_RUN_NUMBER = 0;
//# sourceMappingURL=FieldBase.js.map