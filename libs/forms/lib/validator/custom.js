export function custom(validatorName, validatorFunction, validatorType = validatorName) {
    const validator = validatorFunction;
    validator.type = validatorType;
    return validator;
}
//# sourceMappingURL=custom.js.map