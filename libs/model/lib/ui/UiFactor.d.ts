import { IUserCreated } from '../core/User';
import { Factor_Axis, Factor_Id, Factor_Name } from '../core/Factor';
import { IsData, IsDelta } from '../core/common';
import { IUiColor } from './UiColor';
import { UiDocStatus } from './common';
import { IUiAgeSuitabilityTracked } from './UiDocumentValue';
import { IUiPosition, IUiPositionFromForm } from './UiPosition';
export interface IUiFactor<Doc extends UiDocStatus> extends IUiFactorBase<Doc>, IUiFactorFromForm<Doc> {
    positions: {
        A: IUiPosition<Doc>;
        B: IUiPosition<Doc>;
    };
}
export interface IUiFactorFromForm<Doc extends UiDocStatus = IsData> {
    color: IUiColor<Doc>;
    name: Doc extends IsDelta ? boolean : Factor_Name;
    positions: {
        A: IUiPositionFromForm<Doc>;
        B: IUiPositionFromForm<Doc>;
    };
}
export interface IUiFactor<Doc extends UiDocStatus> extends IUiAgeSuitabilityTracked<Doc>, IUiFactorBase<Doc> {
    color: IUiColor<Doc>;
    positions: {
        A: IUiPosition<Doc>;
        B: IUiPosition<Doc>;
    };
}
export interface IUiFactorBase<Doc extends UiDocStatus> extends IUserCreated<Factor_Id> {
    axis: Doc extends IsDelta ? boolean : Factor_Axis;
    name: Doc extends IsDelta ? boolean : Factor_Name;
}
