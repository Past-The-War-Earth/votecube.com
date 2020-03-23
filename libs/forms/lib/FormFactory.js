"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("./tokens");
const ColorField_1 = require("./field/ColorField");
const DateField_1 = require("./field/date/DateField");
const Field_1 = require("./field/Field");
const FieldGroup_1 = require("./field/FieldGroup");
const MatchingField_1 = require("./field/MatchingField");
const OptionsField_1 = require("./field/OptionsField");
const Validator_1 = require("./validator/Validator");
class FormFactory {
    constructor() {
        this.validators = Validator_1.Validators;
    }
    color(validators, rules) {
        return new ColorField_1.ColorField(validators, rules);
    }
    date(validators, rules) {
        return new DateField_1.DateField(validators, rules);
    }
    field(validators, rules) {
        return new Field_1.Field(validators, rules);
    }
    group(name, fields, validators, text, textName) {
        return new FieldGroup_1.FieldGroup(name, fields, validators, text, textName);
    }
    matching(validators, rules) {
        return new MatchingField_1.MatchingField(validators, rules);
    }
    options(validators, options, rules) {
        return new OptionsField_1.OptionsField(validators, options, rules);
    }
}
exports.FormFactory = FormFactory;
di_1.DI.set(tokens_1.FORM_FACTORY, FormFactory);
//# sourceMappingURL=FormFactory.js.map