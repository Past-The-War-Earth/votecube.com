import {addChange} from '../changeTracker'
import {
	IErrorsText,
	IValidator
}                  from '../validator/Validator'
import {FieldBase} from './FieldBase'

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
	errors?: IErrorsText;
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
	text: IFieldText

	constructor(
		value                         = '',
		validators: IValidator[]      = [],
		public maxLength: '' | number = ''
	) {
		super(validators)
		this.value     = value
		this.lastValue = value
	}

	label(
		labelRule: LabelRule = LabelRule.BOTH
	) {
		this.rules.label = labelRule
	}

	onBlur(): void {
		this.touched = true
		this.onInput()
	}

	onInput(): void {
		this.pristine = false

		if (this.value !== this.lastValue) {
			this.dirty = true
		}
		this.lastValue = this.value

		this.validate()

		this.page.set({delta: addChange()})
	}

	validate(): void {
		this.errors = []

		this.validators.forEach(
			validator => {
				let error = validator(this)
				if (error) {
					if (error instanceof Array) {
						error.forEach(
							anError => {
								anError.message = this.text.errors[anError.key]
							})
						this.errors = this.errors.concat(error)
					} else {
						error.message = this.text.errors[error.key]
						this.errors.push(error)
					}
				}
			})

		this.valid = !this.errors.length
	}
}
