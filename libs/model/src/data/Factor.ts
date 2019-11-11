import {
	FactorAxis,
	ICorePositionDefault
}                    from '..'
import {IsData}      from '../core/common'
import {ICoreFactor} from '../core/Factor'

export interface IFactorData
	extends ICoreFactor<IsData> {
}

export interface IFactorPositionDefault {

	axis: FactorAxis
	positions: {
		A: ICorePositionDefault<IsData>
		B: ICorePositionDefault<IsData>
	}

}
