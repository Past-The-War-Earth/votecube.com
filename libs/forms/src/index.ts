export * from './field/date/DateField'
export * from './field/Field'
export * from './field/FieldArray'
export * from './field/FieldBase'
export * from './field/FieldGroup'
export * from './field/OptionsField'
export * from './validator/Validator'

import {LabelRule} from './field/Field'

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
