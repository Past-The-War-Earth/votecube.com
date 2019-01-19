import {IValidator} from '../validator/Validator'
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

		fields.forEach(
			field => {
				field.text  = this.text
				field.array = this
			})

		this.validate()
	}

	validate(): void {
		this.valid = true
		for (const field of this.fields) {
			field.validate()
			if (!field.valid) {
				this.valid = false
			}
		}
	}

}
