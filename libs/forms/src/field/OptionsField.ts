import {IValidator} from '../validator/Validator'
import {
	Field,
	IField,
	IFieldRules
}                   from './Field'

export interface IFieldOption {
	key: string
	text?: string

	[optionalKey: string]: any
}

export interface IOptionsField
	extends IField {
	multiOptions: IFieldOption[]
	options: IFieldOption[]
	optionText: { [optionKey: string]: string }
	selectionMap: { [optionKey: string]: IFieldOption }

	clear(): void

	select(
		option: IFieldOption
	)

	setMultiOptions()

	unselect(
		optionToUnselect: IFieldOption
	)
}

export class OptionsField
	extends Field
	implements IOptionsField {

	multiOptions: IFieldOption[]                        = []
	selectionMap: { [optionKey: string]: IFieldOption } = {}

	constructor(
		validators: IValidator[],
		private theOptions: IFieldOption[] = [],
		rules?: IFieldRules
	) {
		super(validators, rules)
		this.value = []

		this.setMultiOptions()
	}

	get options(): IFieldOption[] {
		return this.theOptions
	}

	set options(
		newOptions: IFieldOption[]
	) {
		this.theOptions = newOptions
		this.setMultiOptions()

		let optionsMap = {}
		for (let newOption of newOptions) {
			optionsMap[newOption.key] = newOption
		}

		let newValue        = []
		let newSelectionMap = {}
		let valueChanged    = false
		for (const selection of this.value) {
			if (!optionsMap[selection.key]) {
				valueChanged = true
			} else {
				newSelectionMap[selection.key] = selection
				newValue.push(selection)
			}
		}
		if (valueChanged) {
			this.selectionMap = newSelectionMap
			this.value        = newValue
			this.validate()
		}
		this.detect()
	}

	set optionText(
		textMap
	) {
		for (const option of this.options) {
			option.text = textMap[option.key]
		}
	}

	clear(): void {
		if (this.value instanceof Array) {
			this.selectionMap = {}
			this.value        = []
			this.setMultiOptions()
		} else {
			this.value = null
		}
		this.onBlur()
	}

	hidePopup(): void {
		this.pages[0].set({showOptions: false})
	}

	select(
		option: IFieldOption
	) {
		if (this.value instanceof Array) {
			this.selectionMap[option.key] = option
			this.value                    = [...this.value, option]
			this.setMultiOptions()
		} else {
			this.value = option
		}
		this.onBlur()
	}

	setMultiOptions() {
		this.multiOptions = this.options.filter(
			option => !this.selectionMap[option.key])
	}

	unselect(
		optionToUnselect: IFieldOption
	) {
		if (this.value instanceof Array) {
			delete this.selectionMap[optionToUnselect.key]
			this.value = this.value.filter(
				option => option !== optionToUnselect)
			this.setMultiOptions()
		} else {
			this.value = null
		}
		this.onBlur()
	}

}
