import { IsData } from '../core/common';
import { ICoreFactorPoll, ICoreOutcomePoll, ICorePoll, ICorePositionPoll } from '../core/Poll';
import { IFactorPositionDefault } from './Factor';
export interface IPollData extends ICorePoll<IsData> {
}
export interface IFactorPollData extends ICoreFactorPoll<IsData> {
}
export interface IOutcomePollData extends ICoreOutcomePoll<IsData> {
}
export interface IPositionPollData extends ICorePositionPoll<IsData> {
}
export interface IPollFactorPositionDefault {
    1: IFactorPositionDefault;
    2: IFactorPositionDefault;
    3: IFactorPositionDefault;
}
//# sourceMappingURL=Poll.d.ts.map