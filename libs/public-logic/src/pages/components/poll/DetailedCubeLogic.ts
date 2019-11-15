import {
	DI,
	IChildContainer
}                      from '@airport/di'
import {
	Factor_Axis,
	IFactorData,
	IPositionData,
	IVariationData,
	Outcome_Ordinal,
	Position_Dir
}                      from '@votecube/model'
import {
	CUBE_LOGIC,
	DETAILED_CUBE_LOGIC,
	LOGIC_UTILS
}                      from '../../../diTokens'
import {ICubePosition} from '../../../poll/CubeLogic'
import {Component}     from '../../../Routes'

export interface ICubeSide
	extends ICubePosition {

	colorRGB: string
	factor: IFactorData
	outcome: Outcome_Ordinal
	position: IPositionData
	textColorRGB: string

}

export interface ICubeSideMap {
	x: {
		1?: ICubeSide
		'-1'?: ICubeSide
	},
	y: {
		1?: ICubeSide
		'-1'?: ICubeSide
	},
	z: {
		1?: ICubeSide
		'-1'?: ICubeSide
	},
}

interface ISwitchPositionMap {
	x: {
		1?: 0
		'-1'?: 1
	},
	y: {
		1?: 2
		'-1'?: 3
	},
	z: {
		1?: 4
		'-1'?: 5
	},
}

interface ISwitchRecord {
	from: {
		axis: Factor_Axis
		dir: Position_Dir
	},
	to: {
		axis: Factor_Axis
		dir: Position_Dir
	}
}

export interface IDetailedCubeLogic {

	getCubeSides(
		variation: IVariationData,
		container: IChildContainer
	): Promise<{
		cubeSideMap: ICubeSideMap
		cubeSides: ICubeSide[]
	}>

}

export class DetailedCubeLogic
	implements IDetailedCubeLogic {

	async getCubeSides(
		variation: IVariationData,
		container: IChildContainer
	): Promise<{
		cubeSideMap: ICubeSideMap
		cubeSides: ICubeSide[]
	}> {
		const [cubeLogic, logicUtils] =
			      await container.get(CUBE_LOGIC, LOGIC_UTILS)
		const cubeSides: ICubeSide[]  =
			      cubeLogic.getDefaultCubePositions() as ICubeSide[]

		const cubeSideMap: ICubeSideMap = {
			x: {},
			y: {},
			z: {}
		}

		for (const cubeSide of cubeSides) {
			cubeSideMap[cubeSide.axis][cubeSide.dir]
				= cubeSide
		}

		for (const factorNumber in variation.factors) {
			const factor: IFactorData = variation.factors[factorNumber]

			for (const outcome in factor.positions) {
				const position: IPositionData = factor.positions[outcome]

				const cubeSide: ICubeSide = cubeSideMap[factor.axis][position.dir]

				cubeSide.colorRGB     = logicUtils.getColor(factor.color)
				cubeSide.factor       = factor
				cubeSide.outcome      = outcome as Outcome_Ordinal
				cubeSide.position     = position
				cubeSide.textColorRGB = logicUtils.getTextColor(factor.color)
			}
		}

		return {
			cubeSideMap,
			cubeSides
		}
	}

	move(
		cubeSideMap: ICubeSideMap,
		axis: Factor_Axis,
		dir: Position_Dir,
		switchToDefinitions
	) {
		const switchPositions = this.getSwitchArray(axis, dir, switchToDefinitions)

		this.movePositionPair(switchPositions[0], cubeSideMap)
		this.movePositionPair(switchPositions[1], cubeSideMap)
	}

	switchPoles(
		cubeSideMap: ICubeSideMap,
		axis: Factor_Axis,
		dir: Position_Dir
	) {
		const switchPositions = [{
			axis,
			dir
		},
			{
				axis,
				dir: dir === 1 ? -1 : 1
			}]

		const cubeSideFrom = cubeSideMap[switchPositions[0].axis][switchPositions[0].dir]
		const cubeSideTo   = cubeSideMap[switchPositions[1].axis][switchPositions[1].dir]

		const toDir               = cubeSideFrom.position.dir
		cubeSideTo.position.dir   = cubeSideFrom.position.dir
		cubeSideFrom.position.dir = toDir
	}

	private movePositionPair(
		switchPosition,
		cubeSideMap: ICubeSideMap
	) {
		const cubeSideFrom = cubeSideMap[switchPosition.from.axis][switchPosition.from.dir]
		const cubeSideTo   = cubeSideMap[switchPosition.to.axis][switchPosition.to.dir]

		// const toDir  = cubeSideTo.dir
		const toAxis = cubeSideTo.factor.axis

		cubeSideTo.factor.axis = cubeSideFrom.factor.axis
		// cubeSideTo.dir  = cubeSideFrom.dir

		cubeSideFrom.factor.axis = toAxis
		// cubeSideFrom.dir  = toDir
	}

	private getSwitchArray(
		axis: Factor_Axis,
		dir: Position_Dir,
		switchToDefinitions
	): ISwitchRecord[] {
		const switchPositionMap: ISwitchPositionMap = {
			x: {
				'-1': 1,
				'1': 0,
			},
			y: {
				'-1': 3,
				'1': 2,
			},
			z: {
				'-1': 5,
				'1': 4,
			}
		}
		const to                                    = switchToDefinitions[switchPositionMap[axis][dir]]

		const [toAxis, toDir] = to
		const oppositeDir     = dir === 1 ? -1 : 1
		const toOppositeDir   = toDir === 1 ? -1 : 1

		return [{
			from: {
				axis,
				dir
			},
			to: {
				axis: toAxis,
				dir: toDir
			}
		}, {
			from: {
				axis,
				dir: oppositeDir
			},
			to: {
				axis: toAxis,
				dir: toOppositeDir
			}
		}]
	}

}

DI.set(DETAILED_CUBE_LOGIC, DetailedCubeLogic)
