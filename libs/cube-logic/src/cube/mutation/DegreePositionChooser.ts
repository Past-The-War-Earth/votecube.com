import {DI}                      from '@airport/di'
import {DEGREE_POSITION_CHOOSER} from '../../diTokens'
import {IViewport}               from '../Viewport'
import {IFinalPosition}          from './types'

export interface IDegreePositionChooser {

	setFinalDegrees(
		finalPosition: IFinalPosition,
		viewport: IViewport
	): void

}

export class DegreePositionChooser
	implements IDegreePositionChooser {

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

		// if (currentDegrees < 180 && newDegreeChange > 180) {
		// 	newDegreeChange -= 360
		// }

		return rotationMultiplier * 360 + newDegreeChange
	}

}

DI.set(DEGREE_POSITION_CHOOSER, DegreePositionChooser)
