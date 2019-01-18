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
		public fields: IFieldMap = {},
		validators: IValidator[],
		nameOrComponentObject: string | IPage,
		text: any
	) {
		super(validators, nameOrComponentObject)
		this.text = text[this.name]

		for (const fieldName in this.fields) {
			const field = fields[fieldName]
			field.name  = fieldName
			field.text  = this.text[fieldName]
			field.group = this

			if (typeof nameOrComponentObject !== 'string') {
				field.page = nameOrComponentObject
			}

			field.validate()
		}
	}

	validate()

}
