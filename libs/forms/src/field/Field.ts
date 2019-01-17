import {FieldBase} from './FieldBase'

export enum LabelRule {
	DYNAMIC,
	FIXED,
	NONE
}

export interface IFieldRules {
	label?: LabelRule
}

export interface IField {
	rules: IFieldRules
}

export class Field
	extends FieldBase
	implements IField {

	rules: IFieldRules = {
		label: LabelRule.DYNAMIC
	}

	constructor(
		validators = [],
		nameOrComponentObject?: string | object
	) {
		super()
	}

	label(
		labelRule: LabelRule = LabelRule.DYNAMIC
	) {
		this.rules.label = labelRule
	}
}
