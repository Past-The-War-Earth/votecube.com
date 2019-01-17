import {IData}       from '../Data'
import {IValidator}  from '../validator/Validator'
import {IFieldArray} from './FieldArray'
import {IFieldGroup} from './FieldGroup'

export interface IFieldError {
	key: string;

	[otherKey: string]: any;
}

export interface IFieldBase {
	data: IData
	errors: IFieldError[]
	group: IFieldGroup
	inputValue: string
	name: string
	pristine: boolean
	touched: boolean
	valid: boolean
	validators?: IValidator[]
	value: any
}

export class FieldBase
	implements IFieldBase {

	array: IFieldArray
	data: IData
	errors: IFieldError[] = []
	inputValue: string
	group: IFieldGroup
	name: string
	pristine              = true
	touched               = false
	valid                 = true
	value: any

	constructor(
		public validators?: IValidator[],
		nameOrComponentObject?: string | object
	) {
		if (nameOrComponentObject) {
			this.setName(nameOrComponentObject)
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

}
