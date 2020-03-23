"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_1 = require("./custom");
const greaterThanOrEquals_1 = require("./greaterThanOrEquals");
const minDate_1 = require("./minDate");
const minLength_1 = require("./minLength");
const minTomorrow_1 = require("./minTomorrow");
const required_1 = require("./required");
exports.Validators = {
    custom: custom_1.custom,
    greaterThanOrEquals: greaterThanOrEquals_1.greaterThanOrEquals,
    minDate: minDate_1.minDate,
    minLength: minLength_1.minLength,
    minTomorrow: minTomorrow_1.minTomorrow,
    required: required_1.required
};
function filterToRangeValidators(validators) {
    return validators.filter(validator => ['min', 'max', 'greaterThanOrEquals'].indexOf(validator.type) > -1);
}
exports.filterToRangeValidators = filterToRangeValidators;
function isPositiveInteger(value) {
    return /^[1-9][0-9]*$/.test(value);
}
exports.isPositiveInteger = isPositiveInteger;
//# sourceMappingURL=Validator.js.map