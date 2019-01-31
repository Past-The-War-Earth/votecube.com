import {Field} from './Field'

export interface IMatchingField {
	matches: any[]
}

export class MatchingField
	extends Field
	implements IMatchingField {

	private theMatches = null

	get matches() {
		return this.theMatches
	}

	set matches(
		newMatches: any[]
	) {
		this.theMatches = newMatches

		this.detect()
	}

}
