export function password() {
    passwordValidator.type = 'password';
    return passwordValidator;
}
const passwordValidator = function (field) {
    const value = field.value;
    if (!value
        || typeof value !== 'string'
        || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,})/.test(value)) {
        return {
            key: 'password'
        };
    }
};
//# sourceMappingURL=password.js.map