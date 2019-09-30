export {FragmentType} from './field/date/DateFragments'
export *              from './field/date/DateField'
export *              from './field/MatchingField'
export *              from './field/Field'
// export *             from './field/FieldArray'
export *              from './field/FieldBase'
export *              from './field/FieldGroup'
export *              from './field/OptionsField'
export *              from './validator/Validator'

import {IDateField}     from './field/date/DateField'
import {FragmentType}   from './field/date/DateFragments'
import {
	IField,
	LabelRule
}                       from './field/Field'
import {IFieldBase}     from './field/FieldBase'
import {IFieldGroup}    from './field/FieldGroup'
import {IMatchingField} from './field/MatchingField'
import {IOptionsField}  from './field/OptionsField'
import {IValidator}     from './validator/Validator'

export interface IFormsLibrary {
	DateField: IDateField
	Field: IField
	FieldBase: IFieldBase
	FieldGroup: IFieldGroup
	FragmentType: FragmentType
	MatchingField: IMatchingField
	OptionsField: IOptionsField
	Validator: IValidator
}

export interface IConstants {
	rules: IRuleConstants
}

export interface IRuleConstants {
	label: typeof LabelRule
}

export const CONSTS: IConstants = {
	rules: {
		label: LabelRule
	}
}
