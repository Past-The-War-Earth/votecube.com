"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function required() {
    requiredValidator.type = 'required';
    return requiredValidator;
}
exports.required = required;
const requiredValidator = function (field) {
    const value = field.value;
    if ((!value
        && value !== false
        && value !== 0)
        || (value instanceof Array
            && !value.length)) {
        return {
            key: 'required'
        };
    }
};
//# sourceMappingURL=required.js.map