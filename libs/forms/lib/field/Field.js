"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FieldBase_1 = require("./FieldBase");
var LabelRule;
(function (LabelRule) {
    LabelRule[LabelRule["BOTH"] = 0] = "BOTH";
    LabelRule[LabelRule["IN"] = 1] = "IN";
    LabelRule[LabelRule["NONE"] = 2] = "NONE";
    LabelRule[LabelRule["OVER"] = 3] = "OVER";
})(LabelRule = exports.LabelRule || (exports.LabelRule = {}));
class Field extends FieldBase_1.FieldBase {
    constructor(validators = [], rules) {
        super(validators);
        this.rules = {
            label: LabelRule.BOTH,
            trackOriginal: false
        };
        this.rules = Object.assign(Object.assign({}, this.rules), rules);
        this.lastValue = this.value;
        this.theValue = '';
    }
    get error() {
        return this.errors.length
            ? this.errors[0]
            : null;
    }
    get label() {
        switch (this.rules.label) {
            case LabelRule.BOTH:
                return this.value ? (this.text ? this.text.label : '!this.text') : '';
            case LabelRule.IN:
            case LabelRule.NONE:
                return '';
            case LabelRule.OVER:
                return (this.text ? this.text.label : '!this.text');
        }
    }
    get numValue() {
        return parseInt(this.value);
    }
    get placeholder() {
        switch (this.rules.label) {
            case LabelRule.BOTH:
            case LabelRule.IN:
                return (this.text ? this.text.label : '!this.text');
            case LabelRule.NONE:
            case LabelRule.OVER:
                return '';
        }
    }
    clear() {
        this.value = '';
        this.validate();
        this.detect();
    }
    isOriginal() {
        if (!this.rules.trackOriginal) {
            return true;
        }
        this.theIsOriginal = this.getOriginal();
        return this.theIsOriginal;
    }
    labelRule(labelRule = LabelRule.BOTH) {
        this.rules.label = labelRule;
    }
    onBlur() {
        this.touch();
        this.onInput();
    }
    onInput() {
        this.pristine = false;
        if (this.value !== this.lastValue) {
            this.dirty = true;
        }
        this.validate();
        this.lastValue = this.value;
        this.detect();
    }
    revert() {
        super.revert();
        this.validate();
        this.detect();
    }
    setTrackOriginal(trackOriginal) {
        this.rules.trackOriginal = trackOriginal;
    }
    validate(external = true, fromParentGroup) {
        if (!this.shouldValidate(external)) {
            return;
        }
        FieldBase_1.validate(this);
        this.updateValidity(fromParentGroup);
    }
    updateValidity(fromParentGroup) {
        const lastIsValid = this.valid;
        this.valid = !this.errors.length;
        const originalCheckOnly = lastIsValid === this.valid
            && this.lastValue === this.value;
        if (!fromParentGroup) {
            this.group.validate(false, false, this, originalCheckOnly);
        }
    }
    getOriginal() {
        return this.isSame(this.theValue, this.originalValue);
    }
}
exports.Field = Field;
//# sourceMappingURL=Field.js.map