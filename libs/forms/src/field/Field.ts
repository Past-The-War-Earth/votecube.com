import {IValidator} from '..'
import {FieldBase}  from './FieldBase'

export enum LabelRule {
	BOTH,
	IN,
	NONE,
	OVER
}

export interface IFieldRules {
	label?: LabelRule
}

export interface IFieldText {
	label: string;
}

export interface IField {
	rules: IFieldRules
	text: IFieldText
}

export class Field
	extends FieldBase
	implements IField {

	rules: IFieldRules = {
		label: LabelRule.BOTH
	}

	constructor(
		validators: IValidator[],
		nameOrComponentObject?: string | object
	) {
		super(validators, nameOrComponentObject)
	}

	label(
		labelRule: LabelRule = LabelRule.DYNAMIC
	) {
		this.rules.label = labelRule
	}
}
