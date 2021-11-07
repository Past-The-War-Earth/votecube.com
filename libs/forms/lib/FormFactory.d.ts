import { IColorField } from './field/ColorField';
import { IDateField } from './field/date/DateField';
import { IField, IFieldRules } from './field/Field';
import { IFieldGroup, IFieldMap } from './field/FieldGroup';
import { IMatch, IMatchingField } from './field/MatchingField';
import { IFieldOption, IOptionFieldRules, IOptionsField } from './field/OptionsField';
import { IValidator, IValidators } from './validator/Validator';
import { IMonthYearField } from './field/date/MonthYearField';
export interface IFormFactory {
    validators: IValidators;
    color(validators: IValidator[], rules?: IFieldRules): IColorField;
    date(validators: IValidator[], rules?: IFieldRules): IDateField;
    field(validators: IValidator[], rules?: IFieldRules): IField;
    group(name: any, fields: IFieldMap, validators: IValidator[], text: any, textName?: string): IFieldGroup;
    matching(matchCallback: (text: string) => Promise<IMatch[]>, validators?: IValidator[], rules?: IFieldRules): IMatchingField;
    monthYear(validators: IValidator[], rules?: IFieldRules): IMonthYearField;
    options(validators: IValidator[], options: IFieldOption[], rules?: IOptionFieldRules): IOptionsField;
}
export declare class FormFactory implements IFormFactory {
    validators: IValidators;
    color(validators: IValidator[], rules?: IFieldRules): IColorField;
    date(validators: IValidator[], rules?: IFieldRules): IDateField;
    field(validators: IValidator[], rules?: IFieldRules): IField;
    group(name: any, fields: IFieldMap, validators: IValidator[], text: any, textName?: string): IFieldGroup;
    matching(matchCallback: (text: string) => Promise<IMatch[]>, validators?: IValidator[], rules?: IFieldRules): IMatchingField;
    monthYear(validators: IValidator[], rules?: IFieldRules): IMonthYearField;
    options(validators: IValidator[], options: IFieldOption[], rules?: IOptionFieldRules): IOptionsField;
    yearMonth(validators: IValidator[], rules?: IFieldRules): IDateField;
}
//# sourceMappingURL=FormFactory.d.ts.map