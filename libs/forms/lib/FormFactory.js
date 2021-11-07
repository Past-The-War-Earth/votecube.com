import { DI } from '@airport/di';
import { FORM_FACTORY } from './tokens';
import { ColorField } from './field/ColorField';
import { DateField } from './field/date/DateField';
import { Field } from './field/Field';
import { FieldGroup } from './field/FieldGroup';
import { MatchingField } from './field/MatchingField';
import { OptionsField } from './field/OptionsField';
import { Validators } from './validator/Validator';
import { MonthYearField } from './field/date/MonthYearField';
export class FormFactory {
    constructor() {
        this.validators = Validators;
    }
    color(validators, rules) {
        return new ColorField(validators, rules);
    }
    date(validators, rules) {
        return new DateField(validators, rules);
    }
    field(validators, rules) {
        return new Field(validators, rules);
    }
    group(name, fields, validators, text, textName) {
        return new FieldGroup(name, fields, validators, text, textName);
    }
    matching(matchCallback, validators, rules) {
        return new MatchingField(matchCallback, validators, rules);
    }
    monthYear(validators, rules) {
        return new MonthYearField(validators, rules);
    }
    options(validators, options, rules) {
        return new OptionsField(validators, options, rules);
    }
    yearMonth(validators, rules) {
        return new DateField(validators, rules);
    }
}
DI.set(FORM_FACTORY, FormFactory);
//# sourceMappingURL=FormFactory.js.map