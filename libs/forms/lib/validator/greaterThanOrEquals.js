"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greaterThanOrEquals(relatedField // UTC only
) {
    const validator = ((field) => {
        const relatedNumValue = relatedField.numValue;
        if (relatedNumValue === null
            || field.numValue >= relatedNumValue) {
            return null;
        }
        return {
            key: 'greaterThanOrEquals'
        };
    });
    validator.type = 'greaterThanOrEquals';
    return validator;
}
exports.greaterThanOrEquals = greaterThanOrEquals;
//# sourceMappingURL=greaterThanOrEquals.js.map