import { ICoreColor } from './Color';
import { DocStatus, IFullTextSearch, IMarked, IsData, IsDelta, IsDoc, Id } from './common';
import { ICoreAgeSuitabilityTracked, IDocumentValue } from './DocumentValue';
import { ICorePosition, ICorePositionFromForm } from './Position';
import { IUserCreated } from './User';
export declare type Factor_Axis = 'x' | 'y' | 'z';
export declare type Factor_Id = Id;
export declare type Factor_Name = string;
export declare type Factor_Number = 1 | 2 | 3;
export interface ICoreFactor<Doc extends DocStatus> extends ICoreFactorBase<Doc>, ICoreFactorFromForm<Doc> {
    positions: {
        A: ICorePosition<Doc>;
        B: ICorePosition<Doc>;
    };
}
export interface ICoreFactorFromForm<Doc extends DocStatus = IsData> {
    color: ICoreColor<Doc>;
    name: Doc extends IsDoc ? IDocumentValue<Factor_Name> : Doc extends IsDelta ? boolean : Factor_Name;
    positions: {
        A: ICorePositionFromForm<Doc>;
        B: ICorePositionFromForm<Doc>;
    };
}
export interface ICoreMarkedFactor<Doc extends DocStatus> extends ICoreAgeSuitabilityTracked<Doc>, ICoreFactorBase<Doc>, IMarked {
    color: ICoreColor<Doc> & IMarked;
    positions: {
        A: ICorePosition<Doc> & IMarked;
        B: ICorePosition<Doc> & IMarked;
        marks: IMarked;
    };
}
export interface ICoreFactorBase<Doc extends DocStatus> extends IFullTextSearch, IUserCreated<Factor_Id> {
    axis: Doc extends IsDoc ? IDocumentValue<Factor_Axis> : Doc extends IsDelta ? boolean : Factor_Axis;
    name: Doc extends IsDoc ? IDocumentValue<Factor_Name> : Doc extends IsDelta ? boolean : Factor_Name;
}
