import {
	FieldBase,
	IFieldBase
} from './FieldBase'

export interface IFieldMap {
	[key: string]: IFieldBase
}

export interface IFieldGroup
	extends IFieldBase {
	fields: IFieldMap
}

export class FieldGroup
	extends FieldBase
	implements IFieldGroup {

	constructor(
		public fields: IFieldMap = {},
		nameOrComponentObject: string | object
	) {
		super(nameOrComponentObject)

		for (const fieldName in this.fields) {
			fields[fieldName].name = fieldName
		}
	}

}
