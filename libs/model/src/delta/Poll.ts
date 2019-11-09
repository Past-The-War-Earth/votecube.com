import {IsDelta} from '../core/common'
import {
	ICoreFactorPoll,
	ICoreOutcomePoll,
	ICorePoll,
	ICorePositionPoll
}                from '../core/Poll'

export interface IPollDelta
	extends ICorePoll<IsDelta> {
}

export interface IFactorPollDelta
	extends ICoreFactorPoll<IsDelta> {
}

export interface IOutcomePollDelta
	extends ICoreOutcomePoll<IsDelta> {
}

export interface IPositionPollDelta
	extends ICorePositionPoll<IsDelta> {
}
