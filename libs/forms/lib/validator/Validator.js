import { custom } from './custom';
import { greaterThanOrEquals } from './greaterThanOrEquals';
import { minDate } from './minDate';
import { minLength } from './minLength';
import { minTomorrow } from './minTomorrow';
import { required } from './required';
export const Validators = {
    custom,
    greaterThanOrEquals,
    minDate,
    minLength,
    minTomorrow,
    required
};
export function filterToRangeValidators(validators) {
    return validators.filter(validator => ['min', 'max', 'greaterThanOrEquals'].indexOf(validator.type) > -1);
}
export function isPositiveInteger(value) {
    return /^[1-9][0-9]*$/.test(value);
}
//# sourceMappingURL=Validator.js.map