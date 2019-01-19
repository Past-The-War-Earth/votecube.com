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

export interface IFieldConstraints {
	maxLength?: '' | number
}

export interface IFieldOption {
	key: string
	text?: string

	[optionalKey: string]: any
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

	constraints: IFieldConstraints = {}
	options: IFieldOption[]        = []
	rules: IFieldRules             = {
		label: LabelRule.BOTH
	}
	selectionMap: { [optionKey: string]: IFieldOption }
	text: IFieldText

	constructor(
		value                    = '',
		validators: IValidator[] = [],
		constraintsOrOptions?: IFieldConstraints | IFieldOption[]
	) {
		super(validators)
		this.value     = value
		this.lastValue = value

		if (constraintsOrOptions) {
			if (constraintsOrOptions instanceof Array) {
				this.options      = constraintsOrOptions
				this.selectionMap = {}
			} else {
				this.constraints = constraintsOrOptions
			}
		}
	}

	get label() {
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

	get multiOptions() {
		return this.options.filter(
			option => !this.selectionMap[option.key])
	}

	get placeholder() {
		switch (this.rules.label) {
			case LabelRule.BOTH:
			case LabelRule.IN:
				return this.text.label
			case LabelRule.NONE:
			case LabelRule.OVER:
				return ''
		}
	}

	set optionText(
		textMap
	) {
		for (const option of this.options) {
			option.text = textMap[option.key]
		}
	}

	labelRule(
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

		const delta = addChange()
		for (const page of this.pages) {
			page.set({delta})
		}
	}

	select(
		option: IFieldOption
	) {
		if (this.value instanceof Array) {
			this.value.push(option)
		} else {
			this.value = option
		}
		this.onBlur()
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

	unselect(
		optionToUnselect: IFieldOption
	) {
		if (this.value instanceof Array) {
			this.value = this.value.filter(
				option => option !== optionToUnselect)
		} else {
			this.value = null
		}
		this.onBlur()
	}
}
