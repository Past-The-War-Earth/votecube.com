import {IValidator} from '../validator/Validator'
import {IFieldText} from './Field'
import {
	FieldBase,
	IFieldBase,
	IFieldError,
	IPage
}                   from './FieldBase'

export interface IFieldMap {
	[key: string]: IFieldBase
}

export interface IFieldValidityMap {
	[key: string]: IFieldError[]
}

export interface IFieldGroupText {
	[key: string]: IFieldGroupText | IFieldText
}

export interface IFieldGroup
	extends IFieldBase {
	fields: IFieldMap
	text: IFieldGroupText

	hideOtherPopups(
		fieldWithOpenPopup: FieldBase
	): void
}

export class FieldGroup
	extends FieldBase
	implements IFieldGroup {

	text: IFieldGroupText

	constructor(
		name,
		public fields: IFieldMap = {},
		validators: IValidator[],
		page: IPage,
		text: any
	) {
		super(validators)
		this.name = name
		this.text = text[this.name]

		for (const fieldName in fields) {
			const field = fields[fieldName]
			field.name  = fieldName
			field.text  = this.text[fieldName]
			field.group = this
			field.pages.push(page)
		}
		this.pages.push(page)
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

	hideOtherPopups(
		fieldWithOpenPopup: FieldBase
	): void {
		for (const fieldName in this.fields) {
			const field = this.fields[fieldName]
			if (field !== fieldWithOpenPopup) {
				field.hidePopup()
			}
		}
	}

	validate(
		relatedField?: IFieldBase
	): void {
		try {
			if (relatedField && !relatedField.valid) {
				this.valid = false
				return
			}

			this.valid = true
			for (const fieldName in this.fields) {
				const field = this.fields[fieldName]
				if (!relatedField ||
					(relatedField !== field
						&& field.valid == null)) {
					field.validate(this)
				}
				if (!field.valid) {
					this.valid = false
				}
				if (relatedField && !this.valid) {
					return
				}
			}
		} finally {
			for (const page of this.pages) {
				page.set({isValid: this.valid})
			}
		}
	}

}
