import {Viewport}      from '../Viewport'
import {FinalPosition} from './types'

export class DegreePositionChooser {

	setFinalDegrees(
		finalPosition: FinalPosition,
		viewport: Viewport
	): void {
		viewport.x = this.getDimDegrees(viewport.x, finalPosition.x)
		viewport.y = this.getDimDegrees(viewport.y, finalPosition.y)
	}

	private getDimDegrees(
		currentDegrees: number,
		newDegreeChange: number
	): number {
		let rotationMultiplier = Math.floor(Math.abs(currentDegrees / 360))

		if(currentDegrees < 0){
			rotationMultiplier = -rotationMultiplier
		}

		return rotationMultiplier + newDegreeChange
	}

}
