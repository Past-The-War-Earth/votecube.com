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
	optionText
	pages: IPage[]        = []
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
		this.validatorMap = {}
		for (const validator of validators) {
			this.validatorMap[validator.type] = validator
		}
	}

	abstract validate(): void;

}
