import {IData} from './Data'

export interface IFieldError {
	key: string;
	message: string;
}

export class FieldBase {

	data: IData
	errors: IFieldError[] = []
	pristine              = true
	touched               = false
	valid                 = true
	value: any

	constructor(
		public name: string
	) {
	}

}
