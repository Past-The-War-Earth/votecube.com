import {IsData} from '../core/common'
import {
	ICoreFactorPoll,
	ICoreOutcomePoll,
	ICorePoll,
	ICorePositionPoll
}               from '../core/Poll'

export interface IPollData
	extends ICorePoll<IsData> {
}

export interface IFactorPollData
	extends ICoreFactorPoll<IsData> {
}

export interface IOutcomePollData
	extends ICoreOutcomePoll<IsData> {
}

export interface IPositionPollData
	extends ICorePositionPoll<IsData> {
}
