import { FactorPosition_Id } from '@votecube/relational-db';
import { IsDelta } from '../core/common';
import { Factor_Id } from '../core/Factor';
import { Position_Dir, Position_Id, Position_Name } from '../core/Position';
import { IUserCreated } from '../core/User';
import { UiDocStatus } from './common';
import { IUiAgeSuitabilityTracked } from './UiDocumentValue';
export interface IUiPosition<Doc extends UiDocStatus> extends IUiAgeSuitabilityTracked<Doc>, IUiPositionDefault<Doc>, IUiPositionFromForm<Doc>, IUserCreated<Position_Id> {
    factorPositionId: FactorPosition_Id;
}
export interface IUiFactorPosition<Doc extends UiDocStatus> extends IUiPosition<Doc> {
    factorId: Factor_Id;
}
export interface IUiPositionDefault<Doc extends UiDocStatus> {
    dir: Doc extends IsDelta ? boolean : Position_Dir;
}
export interface IUiPositionFromForm<Doc extends UiDocStatus> {
    name: Doc extends IsDelta ? boolean : Position_Name;
}
