import { IUiRepositoryRecord } from './common';
import { IUiColor } from './UiColor';
import { IUiPosition } from './UiPosition';
export interface IUiFactor extends IUiRepositoryRecord {
    axis: 'x' | 'y' | 'z';
    color: IUiColor;
    name: string;
    positions: {
        A: IUiPosition;
        B: IUiPosition;
    };
}
//# sourceMappingURL=UiFactor.d.ts.map