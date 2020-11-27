import { IColorField } from './field/ColorField';
import { IDateField } from './field/date/DateField';
import { IField, IFieldRules } from './field/Field';
import { IFieldGroup, IFieldMap } from './field/FieldGroup';
import { IMatchingField } from './field/MatchingField';
import { IFieldOption, IOptionFieldRules, IOptionsField } from './field/OptionsField';
import { IValidator, IValidators } from './validator/Validator';
export interface IFormFactory {
    validators: IValidators;
    color(validators: IValidator[], rules?: IFieldRules): IColorField;
    date(validators: IValidator[], rules?: IFieldRules): IDateField;
    field(validators: IValidator[], rules?: IFieldRules): IField;
    group(name: any, fields: IFieldMap, validators: IValidator[], text: any, textName?: string): IFieldGroup;
    matching(validators: IValidator[], rules?: IFieldRules): IMatchingField;
    options(validators: IValidator[], options: IFieldOption[], rules?: IOptionFieldRules): IOptionsField;
}
export declare class FormFactory implements IFormFactory {
    validators: IValidators;
    color(validators: IValidator[], rules?: IFieldRules): IColorField;
    date(validators: IValidator[], rules?: IFieldRules): IDateField;
    field(validators: IValidator[], rules?: IFieldRules): IField;
    group(name: any, fields: IFieldMap, validators: IValidator[], text: any, textName?: string): IFieldGroup;
    matching(validators: IValidator[], rules?: IFieldRules): IMatchingField;
    options(validators: IValidator[], options: IFieldOption[], rules?: IOptionFieldRules): IOptionsField;
}
//# sourceMappingURL=FormFactory.d.ts.map