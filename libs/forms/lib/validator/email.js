"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function email() {
    emailValidator.type = 'email';
    return emailValidator;
}
exports.email = email;
const emailValidator = function (field) {
    const value = field.value;
    if (!value
        || typeof value !== 'string'
        || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
        return {
            key: 'email'
        };
    }
};
//# sourceMappingURL=email.js.map