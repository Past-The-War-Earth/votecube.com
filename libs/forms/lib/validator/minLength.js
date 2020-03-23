"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minLength(minimumLength) {
    const validator = ((field) => {
        this.name = 'minLength';
        if (field.value
            && field.value.length < minimumLength) {
            return {
                key: 'minLength'
            };
        }
    });
    validator.type = 'minLength';
    return validator;
}
exports.minLength = minLength;
//# sourceMappingURL=minLength.js.map