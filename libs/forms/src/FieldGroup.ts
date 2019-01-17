import {FieldBase} from './FieldBase'

export interface IFieldMap {
	[key: string]: FieldBase
}

export class FieldGroup
	extends FieldBase {

	constructor(
		public fields: IFieldMap = {}
	) {
		super()
	}

}
