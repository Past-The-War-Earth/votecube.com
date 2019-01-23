import {IValidator} from '../validator/Validator'
import {IFieldText} from './Field'
import {
	FieldBase,
	IFieldBase,
	IPage
}                   from './FieldBase'

export interface IFieldMap {
	[key: string]: IFieldBase
}

export interface IFieldGroupText {
	[key: string]: IFieldGroupText | IFieldText
}

export interface IFieldGroup
	extends IFieldBase {
	fields: IFieldMap
	text: IFieldGroupText
}

export class FieldGroup
	extends FieldBase
	implements IFieldGroup {

	text: IFieldGroupText

	constructor(
		name,
		public fields: IFieldMap = {},
		validators: IValidator[],
		nameOrComponentObject: string | IPage,
		text: any
	) {
		super(validators, nameOrComponentObject)
		this.name = name
		this.text = text[this.name]

		for (const fieldName in fields) {
			const field = fields[fieldName]
			field.name  = fieldName
			field.text  = this.text[fieldName]
			field.group = this

			if (typeof nameOrComponentObject !== 'string') {
				field.pages.push(nameOrComponentObject)
			}
		}

		this.validate()
	}

	get value(): any {
		const value = {}

		for (const fieldName in this.fields) {
			const field      = this.fields[fieldName]
			value[fieldName] = field.value
		}

		return value
	}

	set optionText(
		textMap
	) {
		for (const fieldName in this.fields) {
			const field      = this.fields[fieldName]
			field.optionText = textMap[fieldName]
		}
	}

	validate(): void {
		this.valid = true
		for (const fieldName in this.fields) {
			const field = this.fields[fieldName]
			field.validate()
			if (!field.valid) {
				this.valid = false
			}
		}
	}

}
