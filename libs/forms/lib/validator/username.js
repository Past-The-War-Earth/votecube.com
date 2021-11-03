export function username() {
    usernameValidator.type = 'username';
    return usernameValidator;
}
const usernameValidator = function (field) {
    const value = field.value;
    if (!value
        || typeof value !== 'string'
        || !/^[a-zA-Z0-9_\-]+$/.test(value)) {
        return {
            key: 'username'
        };
    }
};
//# sourceMappingURL=username.js.map