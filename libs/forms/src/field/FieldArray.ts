import {IValidator} from '..'
import {
	FieldBase,
	IFieldBase
}                   from './FieldBase'

export interface IFieldArray
	extends IFieldBase {
	fields: IFieldBase[]
}

export class FieldArray
	extends FieldBase
	implements IFieldArray {

	constructor(
		public fields: FieldBase[] = [],
		validators?: IValidator[],
		nameOrComponentObject?: string | object
	) {
		super(validators, nameOrComponentObject)
	}

}