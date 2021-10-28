export function email() {
    emailValidator.type = 'email';
    return emailValidator;
}
const emailValidator = function (field) {
    const value = field.value;
    if (!value
        || typeof value !== 'string'
        || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
        return {
            key: 'email'
        };
    }
};
//# sourceMappingURL=email.js.map