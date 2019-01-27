import {
	addChange,
	getChange
}                   from '../changeTracker'
import {IValidator} from '../validator/Validator'
import {IFieldText} from './Field'
import {
	FieldBase,
	IComponent,
	IFieldBase,
	IFieldError
}                   from './FieldBase'

export interface IFieldMap {
	[key: string]: IFieldBase
}

export interface IFieldValidityMap {
	[key: string]: IFieldError[]
}

export interface IFieldGroupText {
	[key: string]: IFieldGroupText | IFieldGroupingText | IFieldText | string
}

export interface IFieldGroupingText {
	error: string
	info: string
	label: string
}

export interface IFieldGroup
	extends IFieldBase {

	error: IFieldError;
	fields: IFieldMap
	isRequired: boolean
	text: IFieldGroupText

	hideOtherPopups(
		fieldWithOpenPopup: FieldBase
	): void

}

export class FieldGroup
	extends FieldBase
	implements IFieldGroup {

	error: IFieldError = null

	text: IFieldGroupText

	private hasRequiredChild = false

	constructor(
		name,
		public fields: IFieldMap = {},
		validators: IValidator[],
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
			if (field.isRequired) {
				this.hasRequiredChild = true
			}
		}
		this.validate()
	}

	get isRequired(): boolean {
		return this.validatorMap.required
			|| this.hasRequiredChild
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

	addComponent(
		component: IComponent
	): void {
		for (const fieldName in this.fields) {
			const field = this.fields[fieldName]
			field.addComponent(component)
		}
		super.addComponent(component)
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

	removeComponent(
		component: IComponent
	): void {
		for (const fieldName in this.fields) {
			this.fields[fieldName].removeComponent(component)
		}
		super.removeComponent(component)
	}

	touch(
		fromChild?: boolean,
		fromParent?: boolean
	): void {
		let change
		if (!fromChild) {
			if (!fromParent) {
				change = addChange()
			} else {
				change = getChange()
			}
		}

		if (!fromChild) {
			for (const fieldName in this.fields) {
				this.fields[fieldName].touch(false, true)
			}
		}
		super.touch(fromChild, fromParent)

		if (!fromChild && !fromParent) {
			this.detect(change)
		}
	}

	validate(
		fromParentGroup?: boolean,
		relatedField?: IFieldBase
	): void {
		try {
			if (relatedField
				&& relatedField.valid === false) {
				this.valid = false
				return
			}

			this.valid = true
			for (const fieldName in this.fields) {
				const field = this.fields[fieldName]
				if (!relatedField ||
					(relatedField !== field
						&& field.valid == null)) {
					field.validate(true)
				}
				if (!field.valid) {
					this.valid = false
				}
				if (relatedField && !this.valid) {
					return
				}
			}
		} finally {
			this.error = this.valid
				? null
				: {
					key: 'grouping',
					message: this.text.error as string
				}

			if (this.group) {
				this.group.validate(false, this)
			}
			for (const page of this.components) {
				page.set({isValid: this.valid})
			}
		}
	}

}
