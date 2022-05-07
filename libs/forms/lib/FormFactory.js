var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ColorField } from './field/ColorField';
import { DateField } from './field/date/DateField';
import { Field } from './field/Field';
import { FieldGroup } from './field/FieldGroup';
import { MatchingField } from './field/MatchingField';
import { OptionsField } from './field/OptionsField';
import { Validators } from './validator/Validator';
import { MonthYearField } from './field/date/MonthYearField';
import { Injected } from '@airport/direction-indicator';
let FormFactory = class FormFactory {
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
};
FormFactory = __decorate([
    Injected()
], FormFactory);
export { FormFactory };
//# sourceMappingURL=FormFactory.js.map