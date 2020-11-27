export function minLength(minimumLength) {
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
//# sourceMappingURL=minLength.js.map