"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function custom(validatorName, validatorFunction, validatorType = validatorName) {
    const validator = validatorFunction;
    validator.type = validatorType;
    return validator;
}
exports.custom = custom;
//# sourceMappingURL=custom.js.map