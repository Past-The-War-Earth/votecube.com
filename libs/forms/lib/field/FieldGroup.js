"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const changeTracker_1 = require("../changeTracker");
const FieldBase_1 = require("./FieldBase");
class FieldGroup extends FieldBase_1.FieldBase {
    constructor(name, fields = {}, validators, text, textName) {
        super(validators);
        this.fields = fields;
        this.error = null;
        this.rules = {
            trackOriginal: false
        };
        this.hasRequiredChild = false;
        this.hasChildValues = false;
        this.name = name;
        this.text = text[textName ? textName : this.name];
        for (const fieldName in fields) {
            const field = fields[fieldName];
            if (!(field instanceof FieldGroup)) {
                field.id = name + '_' + fieldName;
                field.name = fieldName;
                field.text = this.text[fieldName];
            }
            field.group = this;
            if (field.isRequired) {
                this.hasRequiredChild = true;
            }
        }
        this.validate(false);
    }
    get hasValue() {
        return this.hasChildValues;
    }
    get isRequired() {
        return this.validatorMap.required
            // Group must have a required validator to be required and is otherwise optional
            // having child required fields only takes effect if any of the values
            // in the group are populated
            || (this.hasChildValues && this.hasRequiredChild);
    }
    get value() {
        const value = {};
        for (const fieldName in this.fields) {
            const field = this.fields[fieldName];
            value[fieldName] = field.value;
        }
        return value;
    }
    get changeFlags() {
        const changeFlags = {};
        for (const fieldName in this.fields) {
            const field = this.fields[fieldName];
            changeFlags[fieldName] = field.changeFlags;
        }
        return changeFlags;
    }
    set value(value) {
        this.setValue(value);
    }
    set optionText(textMap) {
        for (const fieldName in this.fields) {
            const field = this.fields[fieldName];
            field.optionText = textMap[fieldName];
        }
    }
    addComponent(component) {
        for (const fieldName in this.fields) {
            const field = this.fields[fieldName];
            field.addComponent(component);
        }
        super.addComponent(component);
    }
    clearComponents() {
        for (const fieldName in this.fields) {
            this.fields[fieldName].clearComponents();
        }
        super.clearComponents();
    }
    hideOtherPopups(fieldWithOpenPopup) {
        for (const fieldName in this.fields) {
            const field = this.fields[fieldName];
            if (field !== fieldWithOpenPopup) {
                field.hidePopup();
            }
        }
    }
    isOriginal() {
        return this.theIsOriginal;
    }
    removeComponent(component) {
        for (const fieldName in this.fields) {
            this.fields[fieldName].removeComponent(component);
        }
        super.removeComponent(component);
    }
    setTrackOriginal(trackOriginal) {
        for (const fieldName in this.fields) {
            this.fields[fieldName].setTrackOriginal(trackOriginal);
        }
        this.rules.trackOriginal = trackOriginal;
    }
    setValue(value, resetOriginal = false) {
        for (const fieldName in this.fields) {
            const field = this.fields[fieldName];
            field.setValue(value[fieldName], resetOriginal);
        }
    }
    touch(fromChild, fromParent) {
        let change;
        if (!fromChild) {
            if (!fromParent) {
                change = changeTracker_1.addChange();
            }
            else {
                change = changeTracker_1.getChange();
            }
        }
        if (!fromChild) {
            for (const fieldName in this.fields) {
                this.fields[fieldName].touch(false, true);
            }
        }
        super.touch(fromChild, fromParent);
        if (!fromChild && !fromParent) {
            this.detect(change);
        }
    }
    /**
     * If a Group is optional:
     *    If it has values, check all validators
     *    It it does not have any values, and only required validators on it's
     *    child fields are erroring, then it is valid
     *
     * Group must have a required validator to be required and is otherwise optional
     * @param fromParentGroup
     * @param relatedField
     */
    setRun(runNumber) {
        super.setRun(runNumber);
        for (const fieldName in this.fields) {
            this.fields[fieldName].setRun(runNumber);
        }
    }
    validate(external = true, fromParentGroup, relatedField, originalCheckOnly = false) {
        if (!this.shouldValidate(external)) {
            return;
        }
        this.hasChildValues = false;
        this.valid = true;
        this.theIsOriginal = true;
        for (const fieldName in this.fields) {
            const field = this.fields[fieldName];
            if (!originalCheckOnly
                && (!relatedField ||
                    relatedField !== field)) {
                field.validate(false, true);
            }
            this.hasChildValues = this.hasChildValues || field.hasValue;
            if (!field.valid) {
                this.valid = false;
            }
            if (!field.isOriginal()) {
                this.theIsOriginal = false;
            }
        }
        // FIXME: add FieldGroup validation
        // validate(this)
        this.valid = this.valid || (!this.hasChildValues && !this.validatorMap.required);
        this.error = this.valid
            ? null
            : {
                key: 'grouping',
                message: this.text.error
            };
        if (this.group) {
            this.group.validate(false, false, this);
        }
        for (const page of this.components) {
            page.setIsValid(this.valid);
            page.setIsOriginal(this.theIsOriginal);
        }
    }
}
exports.FieldGroup = FieldGroup;
//# sourceMappingURL=FieldGroup.js.map