import {DI}           from '@airport/di'
import {FORM_FACTORY} from './tokens'
import {
	ColorField,
	IColorField
}                     from './field/ColorField'
import {
	DateField,
	IDateField
}                     from './field/date/DateField'
import {
	Field,
	IField,
	IFieldRules
}                     from './field/Field'
import {
	FieldGroup,
	IFieldGroup,
	IFieldMap
}                     from './field/FieldGroup'
import {
	IMatchingField,
	MatchingField
}                     from './field/MatchingField'
import {
	IFieldOption,
	IOptionFieldRules,
	IOptionsField,
	OptionsField
}                     from './field/OptionsField'
import {
	IValidator,
	IValidators,
	Validators
}                     from './validator/Validator'


export interface IFormFactory {
	validators: IValidators

	color(
		validators: IValidator[],
		rules?: IFieldRules
	): IColorField

	date(
		validators: IValidator[],
		rules?: IFieldRules
	): IDateField

	field(
		validators: IValidator[],
		rules?: IFieldRules
	): IField

	group(
		name,
		fields: IFieldMap,
		validators: IValidator[],
		text: any,
		textName?: string
	): IFieldGroup

	matching(
		validators: IValidator[],
		rules?: IFieldRules
	): IMatchingField

	options(
		validators: IValidator[],
		options: IFieldOption[],
		rules?: IOptionFieldRules
	): IOptionsField

}

export class FormFactory
	implements IFormFactory {

	validators: IValidators = Validators

	color(
		validators: IValidator[],
		rules?: IFieldRules
	): IColorField {
		return new ColorField(validators, rules)
	}

	date(
		validators: IValidator[],
		rules?: IFieldRules
	): IDateField {
		return new DateField(validators, rules)
	}

	field(
		validators: IValidator[],
		rules?: IFieldRules
	): IField {
		return new Field(validators, rules)
	}

	group(
		name,
		fields: IFieldMap,
		validators: IValidator[],
		text: any,
		textName?: string
	): IFieldGroup {
		return new FieldGroup(name, fields, validators, text, textName)
	}

	matching(
		validators: IValidator[],
		rules?: IFieldRules
	): IMatchingField {
		return new MatchingField(validators, rules)
	}

	options(
		validators: IValidator[],
		options: IFieldOption[],
		rules?: IOptionFieldRules
	): IOptionsField {
		return new OptionsField(validators, options, rules)
	}

}

DI.set(FORM_FACTORY, FormFactory)
