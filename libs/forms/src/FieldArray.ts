import {FieldBase} from './FieldBase'

export class FieldArray
	extends FieldBase {

	constructor(
		public fields: FieldBase[] = []
	) {
		super()
	}

}