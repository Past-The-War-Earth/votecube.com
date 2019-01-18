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
	page: IPage;
	pristine: boolean
	text
	touched: boolean
	valid: boolean
	validators?: IValidator[]
	validatorMap?: { [validatorName: string]: IValidator }
	value: any

	validate(): void;
}

export abstract class FieldBase
	implements IFieldBase {

	array: IFieldArray
	dirty                 = false
	errors: IFieldError[] = []
	group: IFieldGroup
	lastValue: any
	name: string
	page: IPage
	pristine              = true
	text
	touched               = false
	valid                 = true
	validatorMap
	value: any

	constructor(
		public validators: IValidator[] = [],
		nameOrComponentObject?: string | object
	) {
		if (nameOrComponentObject) {
			this.setName(nameOrComponentObject)
		}

		this.validatorMap = {}
		for (const validator of validators) {
			this.validatorMap[validator.type] = validator
		}
	}

	setName(
		nameOrComponentObject: string | object
	) {
		if (typeof nameOrComponentObject === 'string') {
			this.name = nameOrComponentObject
		} else {
			this.name = nameOrComponentObject.constructor.name
		}
	}

	abstract validate(): void;

}
