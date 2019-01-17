import {
	FieldBase,
	IFieldBase
} from './FieldBase'

export interface IFieldArray
	extends IFieldBase {
	fields: IFieldBase[]
}

export class FieldArray
	extends FieldBase
	implements IFieldArray {

	constructor(
		public fields: FieldBase[] = [],
		nameOrComponentObject: string | object
	) {
		super(nameOrComponentObject)
	}

}