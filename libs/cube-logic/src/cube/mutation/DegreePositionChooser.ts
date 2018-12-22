import {IViewport}      from '../Viewport'
import {IFinalPosition} from './types'

export class DegreePositionChooser {

	setFinalDegrees(
		finalPosition: IFinalPosition,
		viewport: IViewport
	): void {
		viewport.x = this.getDimDegrees(viewport.x, finalPosition.x)
		viewport.y = this.getDimDegrees(viewport.y, finalPosition.y)
		viewport.moveToDegree()
	}

	private getDimDegrees(
		currentDegrees: number,
		newDegreeChange: number
	): number {
		let rotationMultiplier = Math.floor(Math.abs(currentDegrees / 360))

		if (currentDegrees < 0) {
			rotationMultiplier = -rotationMultiplier
		}

		return rotationMultiplier * 360 + newDegreeChange
	}

}
