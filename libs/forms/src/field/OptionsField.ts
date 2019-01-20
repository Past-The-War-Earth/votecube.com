import {IValidator} from '../validator/Validator'
import {
	Field,
	IField,
	IFieldConstraints
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
		value,
		validators: IValidator[],
		public options: IFieldOption[] = [],
		constraints?: IFieldConstraints
	) {
		super(value, validators)

		this.setMultiOptions()
	}

	set optionText(
		textMap
	) {
		for (const option of this.options) {
			option.text = textMap[option.key]
		}
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
