import { Factor_Id, PollRevisionFactorPosition_Dir, PositionTranslation_Name } from '@votecube/ecclesia';
import { DocStatus, IFullTextSearch, IsDelta, IsDoc, Key } from './common';
import { ICoreAgeSuitabilityTracked, IDocumentValue } from './DocumentValue';
import { IUserCreated } from './User';
export declare type Position_Key = Key;
export declare type Position_Dir = PollRevisionFactorPosition_Dir | 0;
export interface ICorePosition<Doc extends DocStatus> extends ICoreAgeSuitabilityTracked<Doc>, ICorePositionDefault<Doc>, ICorePositionFromForm<Doc>, IFullTextSearch, IUserCreated {
}
export interface ICoreFactorPosition<Doc extends DocStatus> extends ICorePosition<Doc> {
    factorId: Factor_Id;
}
export interface ICorePositionDefault<Doc extends DocStatus> {
    dir: Doc extends IsDoc ? IDocumentValue<Position_Dir> : Doc extends IsDelta ? boolean : Position_Dir;
}
export interface ICorePositionFromForm<Doc extends DocStatus> {
    name: Doc extends IsDoc ? IDocumentValue<PositionTranslation_Name> : Doc extends IsDelta ? boolean : PositionTranslation_Name;
}
//# sourceMappingURL=Position.d.ts.map