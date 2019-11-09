import {IsDelta} from '../core/common'
import {
	ICoreFactorPosition,
	ICorePosition
}                from '../core/Position'

export interface IPositionDelta
	extends ICorePosition<IsDelta> {
}

export interface IFactorPositionDelta
	extends ICoreFactorPosition<IsDelta> {
}
