import {IValidator}  from '../validator/Validator'
import {IFieldGroup} from './FieldGroup'

export interface IFieldError {
	key: string;
	message?: string;

	[otherKey: string]: any;
}

export interface IComponent {
	set(object: any): void;
}

export interface IFieldBase {
	errors: IFieldError[]
	group: IFieldGroup
	// inputValue: string
	name: string
	optionText
	components: IComponent[]
	pristine: boolean
	text
	touched: boolean
	valid: boolean
	validators?: IValidator[]
	validatorMap?: { [validatorName: string]: IValidator }
	value: any

	addComponent(
		component: IComponent
	): void

	removeComponent(
		component: IComponent
	): void

	focus(): void;

	hidePopup(): void;

	onChange(
		callback: (
			value: any
		) => void
	): void

	setAsField(
		component: IComponent
	): void

	validate(
		fromParentGroup?: boolean,
		relatedField?: IFieldBase
	): void;
}

export abstract class FieldBase
	implements IFieldBase {

	// array: IFieldArray
	dirty                    = false
	errors: IFieldError[]    = []
	group: IFieldGroup
	lastValue: any
	name: string
	optionText
	components: IComponent[] = []
	pristine                 = true
	text
	touched                  = false
	valid                    = null
	validatorMap
	valueChangeCallbacks     = []

	private theValue: any

	constructor(
		public validators: IValidator[] = []
	) {
		this.validatorMap = {}
		for (const validator of validators) {
			this.validatorMap[validator.type] = validator
		}
	}

	get value() {
		return this.theValue
	}

	set value(
		newValue
	) {
		this.theValue = newValue
		for (const callback of this.valueChangeCallbacks) {
			callback(newValue)
		}
	}

	addComponent(
		component: IComponent
	): void {
		this.components.push(component)
	}

	focus(): void {
		this.group.hideOtherPopups(this)
	}

	hidePopup(): void {
		// nothing to do for fields with no popups
	}

	onChange(
		callback: (
			value: any
		) => void
	): void {
		this.valueChangeCallbacks.push(callback)
	}

	removeComponent(
		component: IComponent
	): void {
		for (let index = this.components.length - 1; index >= 0; index--) {
			let currentComponent = this.components[index]
			if (component === currentComponent) {
				this.components.splice(index, 1)
				break
			}
		}
	}

	setAsField(
		component: IComponent
	): void {
		this.components.unshift(component)
	}

	abstract validate(
		fromParentGroup?: boolean,
		relatedField?: IFieldBase
	): void;

}
