import {Field} from './Field'

export class ColorField
	extends Field {


	get changeFlags(): any {
		if (!this.originalValue) {
			return {
				blue: 0,
				green: 0,
				red: 0
			}
		}
		return {
			blue: this.theValue.blue === this.originalValue.blue ? 0 : 1,
			green: this.theValue.green === this.originalValue.green ? 0 : 1,
			red: this.theValue.red === this.originalValue.red ? 0 : 1,
		}
	}

}

