import {
	container,
	DI
}                   from '@airport/di'
import {
	ICubeEventListener,
	IMutationApi,
	IValuesOutCallback
}                   from '@votecube/cube-logic'
import {
	Factor_Axis,
	IFactorPositionDefault,
	IPollFactorPositionDefault,
	IVote,
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

	loadCubeLogic(
		page,
		viewCallback: IValuesOutCallback
	): Promise<(vote: IVote) => void>

	shutDownCubeListener(
		cubeEventListener: ICubeEventListener,
		page
	): void

	setCubeAdjustment(
		cubeEventListener: ICubeEventListener,
		enableCubeAdjustment: boolean
	): void

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

	async loadCubeLogic(
		page,
		viewCallback: IValuesOutCallback
	): Promise<(vote: IVote) => void> {
		const cubeLogic = await import('@votecube/cube-logic')

		const cubeEventListener: ICubeEventListener = await container(this)
			.get(cubeLogic.CUBE_EVENT_LISTENER)

		// page.set({cubeListener})

		this.setCubeViewPort(
			cubeEventListener,
			(
				mutationApi
			) => {
				page.set({mutationApi})
			},
			viewCallback,
		)

		return (vote: IVote) => cubeEventListener.setPositionDataAndMove(vote).then()
		// startResizeInterval(page, viewCallback)
	}

	shutDownCubeListener(
		cubeEventListener: ICubeEventListener,
		page
	): void {
		// stopResizeInterval(page)
		this.setCubeViewPort(
			cubeEventListener,
			(
				mutationApi
			) => {
				page.set({mutationApi})
			},
			null
		)
		cubeEventListener.setPositionData(null).then()
	}

	setCubeAdjustment(
		cubeEventListener: ICubeEventListener,
		enableCubeAdjustment: boolean
	): void {
		if (enableCubeAdjustment) {
			cubeEventListener.addCubeAdjustment().then()
		} else {
			cubeEventListener.clearCubeAdjustment()
		}
	}

	private setCubeViewPort(
		cubeEventListener: ICubeEventListener,
		setMutationApi: (mutationApi: IMutationApi) => void,
		callback: IValuesOutCallback
	): void {
		cubeEventListener.setViewPort(true, callback).then(
			mutationApi => {
				setMutationApi(mutationApi)
			})
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
