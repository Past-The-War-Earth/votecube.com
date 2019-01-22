import {addChange} from '../changeTracker'
import {
	IErrorsText,
	IValidator
}                  from '../validator/Validator'
import {
	FieldBase,
	IFieldBase
}                  from './FieldBase'

export enum LabelRule {
	BOTH,
	IN,
	NONE,
	OVER
}

export interface IFieldRules {
	label?: LabelRule
	maxLength?: '' | number
}

export interface IFieldText {
	errors?: IErrorsText
	label: string
}

export interface IValidate {
	validate(): void
}

export interface IDetect {
	detect(): void
}

export interface IField
	extends IFieldBase,
	        IValidate,
	        IDetect {
	label: string
	placeholder: string
	rules: IFieldRules
	text: IFieldText

	labelRule(
		labelRule: LabelRule
	): void

	onBlur(): void

	onInput(): void

}

export class Field
	extends FieldBase
	implements IField {

	rules: IFieldRules = {
		label: LabelRule.BOTH
	}
	text: IFieldText
	value: any         = ''

	constructor(
		validators: IValidator[] = [],
		rules?: IFieldRules
	) {
		super(validators)
		this.rules     = {
			...this.rules,
			...rules
		}
		this.lastValue = this.value
	}

	get label(): string {
		switch (this.rules.label) {
			case LabelRule.BOTH:
				return this.value ? this.text.label : ''
			case LabelRule.IN:
			case LabelRule.NONE:
				return ''
			case LabelRule.OVER:
				return this.text.label
		}
	}

	get placeholder(): string {
		switch (this.rules.label) {
			case LabelRule.BOTH:
			case LabelRule.IN:
				return this.text.label
			case LabelRule.NONE:
			case LabelRule.OVER:
				return ''
		}
	}

	detect(): void {
		setTimeout(() => {
			const delta = addChange()
			for (const page of this.pages) {
				page.set({delta})
			}
		})
	}

	labelRule(
		labelRule: LabelRule = LabelRule.BOTH
	): void {
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

		this.detect()
	}

	validate(): void {
		this.errors = []

		this.validators.some(
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

					return true
				}
			})

		this.valid = !this.errors.length
	}

}
