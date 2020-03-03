export function greaterThanOrEquals(relatedField // UTC only
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
//# sourceMappingURL=greaterThanOrEquals.js.map