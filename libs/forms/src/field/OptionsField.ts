import {IValidator} from '../validator/Validator'
import {
	Field,
	IField,
	IFieldRules,
	LabelRule
}                   from './Field'

export interface IFieldOption {
	id: string
	text?: string

	[optionalKey: string]: any
}

export interface IOptionsField
	extends IField {
	filteredOptions: IFieldOption[]
	options: IFieldOption[]
	optionText: { [optionKey: string]: string }
	selectionMap: { [optionKey: string]: IFieldOption }

	clear(): void

	select(
		option: IFieldOption
	)

	unselect(
		optionToUnselect?: IFieldOption
	)
}

export interface IOptionFieldRules
	extends IFieldRules {
	multi?: boolean
}

export class OptionsField
	extends Field
	implements IOptionsField {

	filteredOptions: IFieldOption[]                     = []
	selectionMap: { [optionKey: string]: IFieldOption } = {}

	constructor(
		validators: IValidator[],
		private theOptions: IFieldOption[] = [],
		rules?: IOptionFieldRules
	) {
		super(validators, {
			...rules,
			label: LabelRule.OVER
		})
		this.theValue = rules && rules.multi ? [] : null

		this.filterOptions()
	}

	get options(): IFieldOption[] {
		return this.theOptions
	}

	set options(
		newOptions: IFieldOption[]
	) {
		this.theOptions = newOptions
		this.filterOptions()

		let optionsMap = {}
		for (let newOption of newOptions) {
			optionsMap[newOption.id] = newOption
		}

		let newValue        = []
		let newSelectionMap = {}
		let valueChanged    = false
		for (const selection of this.value) {
			if (!optionsMap[selection.id]) {
				valueChanged = true
			} else {
				newSelectionMap[selection.id] = selection
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
			option.text = textMap[option.id]
		}
	}

	get value() {
		return this.theValue
	}

	set value(
		value
	) {
		if (this.theValue instanceof Array) {
			this.theValue = []
			if (!value) {
				return
			}
			value.forEach(
				aValue => this.doSelect(aValue))
		} else {
			this.doSelect(value)
		}
	}

	clear(): void {
		if (this.value instanceof Array) {
			this.selectionMap = {}
			this.value        = []
			this.filterOptions()
		} else {
			this.value = null
		}
		this.onBlur()
	}

	hidePopup(): void {
		this.components[0].set({showOptions: false})
	}

	select(
		option: IFieldOption
	) {
		this.doSelect(option)
		this.onBlur()
	}

	unselect(
		optionToUnselect?: IFieldOption
	) {
		if (this.theValue instanceof Array) {
			delete this.selectionMap[optionToUnselect.id]
			this.theValue = this.theValue.filter(
				option => option !== optionToUnselect)
			this.filterOptions()
		} else {
			this.theValue = null
		}
		this.onBlur()
	}

	private doSelect(
		option: IFieldOption
	) {
		if (this.theValue instanceof Array) {
			this.selectionMap[option.id] = option
			this.theValue                = [...this.theValue, option]
			this.filterOptions()
		} else {
			this.theValue = option
		}
	}

	private filterOptions() {
		this.filteredOptions = this.options.filter(
			option => !this.selectionMap[option.id])
	}

}
