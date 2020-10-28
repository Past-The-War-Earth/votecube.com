import { Color } from '@votecube/ecclesia';
import { DocStatus, IsDelta, IsDoc } from './common';
import { IDocumentValue } from './DocumentValue';
export declare type Color_Value = Color;
export interface ICoreColor<Doc extends DocStatus> {
    blue: Doc extends IsDoc ? IDocumentValue<Color_Value> : Doc extends IsDelta ? boolean : Color_Value;
    green: Doc extends IsDoc ? IDocumentValue<Color_Value> : Doc extends IsDelta ? boolean : Color_Value;
    red: Doc extends IsDoc ? IDocumentValue<Color_Value> : Doc extends IsDelta ? boolean : Color_Value;
}
//# sourceMappingURL=Color.d.ts.map