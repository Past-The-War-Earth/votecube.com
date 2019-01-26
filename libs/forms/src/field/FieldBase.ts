import {IValidator}  from '../validator/Validator'
import {IFieldArray} from './FieldArray'
import {IFieldGroup} from './FieldGroup'

export interface IFieldError {
	key: string;
	message?: string;

	[otherKey: string]: any;
}

export interface IPage {
	set(object: any): void;
}

export interface IFieldBase {
	errors: IFieldError[]
	group: IFieldGroup
	// inputValue: string
	name: string
	optionText
	pages: IPage[]
	pristine: boolean
	text
	touched: boolean
	valid: boolean
	validators?: IValidator[]
	validatorMap?: { [validatorName: string]: IValidator }
	value: any

	focus(): void;

	hidePopup(): void;

	onChange(
		callback: (
			value: any
		) => void
	): void

	validate(
		relatedField?: IFieldBase
	): void;
}

export abstract class FieldBase
	implements IFieldBase {

	array: IFieldArray
	dirty                 = false
	errors: IFieldError[] = []
	group: IFieldGroup
	lastValue: any
	name: string
	optionText
	pages: IPage[]        = []
	pristine              = true
	text
	touched               = false
	valid                 = null
	validatorMap
	valueChangeCallbacks  = []

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

	hidePopup(): void {
		// nothing to do for fields with no popups
	}

	focus(): void {
		this.group.hideOtherPopups(this)
	}

	onChange(
		callback: (
			value: any
		) => void
	): void {
		this.valueChangeCallbacks.push(callback)
	}

	abstract validate(
		relatedField?: IFieldBase
	): void;

}
