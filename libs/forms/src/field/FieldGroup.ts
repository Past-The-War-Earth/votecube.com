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
	private hasChildValues   = false
	private theIsOriginal    = true

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
			if (!(field instanceof FieldGroup)) {
				field.name = fieldName
				field.text = this.text[fieldName]
			}
			field.group = this
			if (field.isRequired) {
				this.hasRequiredChild = true
			}
		}
		this.validate()
	}

	get hasValue(): boolean {
		return this.hasChildValues
	}

	get isRequired(): boolean {
		return this.validatorMap.required
			// Group must have a required validator to be required and is otherwise optional
			// having child required fields only takes effect if any of the values
			// in the group are populated
			|| (this.hasChildValues && this.hasRequiredChild)
	}

	get value(): any {
		const value = {}

		for (const fieldName in this.fields) {
			const field      = this.fields[fieldName]
			value[fieldName] = field.value
		}

		return value
	}

	set value(
		value: any
	) {
		this.setValue(value)
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

	clearComponents(
	): void {
		for (const fieldName in this.fields) {
			this.fields[fieldName].clearComponents()
		}
		super.clearComponents()
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

	isOriginal(): boolean {
		return this.theIsOriginal
	}

	removeComponent(
		component: IComponent
	): void {
		for (const fieldName in this.fields) {
			this.fields[fieldName].removeComponent(component)
		}
		super.removeComponent(component)
	}

	setValue(
		value: any,
		resetOriginal = false
	) {
		for (const fieldName in this.fields) {
			const field = this.fields[fieldName]
			field.setValue(value[fieldName], resetOriginal)
		}
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

	/**
	 * If a Group is optional:
	 *    If it has values, check all validators
	 *    It it does not have any values, and only required validators on it's
	 *    child fields are erroring, then it is valid
	 *
	 * Group must have a required validator to be required and is otherwise optional
	 * @param fromParentGroup
	 * @param relatedField
	 */

	validate(
		fromParentGroup?: boolean,
		relatedField?: IFieldBase
	): void {
		this.hasChildValues = false
		this.valid          = true
		this.theIsOriginal  = true

		for (const fieldName in this.fields) {
			const field = this.fields[fieldName]
			if (!relatedField ||
				(relatedField !== field
					&& field.valid == null)) {
				field.validate(true)
			}
			this.hasChildValues = this.hasChildValues || field.hasValue
			if (!field.valid) {
				this.valid = false
			}

			if (!field.isOriginal()) {
				this.theIsOriginal = false
			}
		}

		this.valid = this.valid || (!this.hasChildValues && !this.validatorMap.required)

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
			page.set({isValid: this.valid, isOriginal: this.theIsOriginal})
		}
	}

}
