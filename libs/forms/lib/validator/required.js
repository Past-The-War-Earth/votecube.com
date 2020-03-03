export function required() {
    requiredValidator.type = 'required';
    return requiredValidator;
}
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