import { IsData } from '../core/common';
import { Factor_Axis, ICoreFactor } from '../core/Factor';
import { ICorePositionDefault } from '../core/Position';
export interface IFactorData extends ICoreFactor<IsData> {
}
export interface IFactorPositionDefault {
    axis: Factor_Axis;
    positions: {
        A: ICorePositionDefault<IsData>;
        B: ICorePositionDefault<IsData>;
    };
}
