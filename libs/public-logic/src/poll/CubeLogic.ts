import {DI}         from '@airport/di'
import {
	Factor_Axis,
	IFactorPositionDefault,
	IPollFactorPositionDefault,
	Position_Dir
}                   from '@votecube/model'
import {CUBE_LOGIC} from '../diTokens'

export interface ICubePosition {
	axis: Factor_Axis
	dir: Position_Dir
}

export interface ICubeLogic {

	getDefaultCubePositions(): ICubePosition[]

	getPollFactorPositionDefault(): IPollFactorPositionDefault

}

export class CubeLogic
	implements ICubeLogic {

	getDefaultCubePositions(): ICubePosition[] {
		return [{
			axis: 'x',
			dir: 1
		}, {
			axis: 'y',
			dir: 1
		}, {
			axis: 'z',
			dir: 1
		}, {
			axis: 'y',
			dir: -1
		}, {
			axis: 'z',
			dir: -1
		}, {
			axis: 'x',
			dir: -1
		}]
	}

	getPollFactorPositionDefault(): IPollFactorPositionDefault {
		const dcp = this.getDefaultCubePositions()
		return {
			1: this.getFactorPositionDefault(
				dcp[0],
				dcp[5],
			),
			2: this.getFactorPositionDefault(
				dcp[1],
				dcp[3],
			),
			3: this.getFactorPositionDefault(
				dcp[2],
				dcp[4],
			)
		}
	}

	private getFactorPositionDefault(
		cubePosition1: ICubePosition,
		cubePosition2: ICubePosition,
	): IFactorPositionDefault {
		return {
			axis: cubePosition1.axis,
			positions: {
				A: {
					dir: cubePosition1.dir
				},
				B: {
					dir: cubePosition2.dir
				},
			}
		}
	}

}

DI.set(CUBE_LOGIC, CubeLogic)
