import { Color_Value } from '../core/Color';
import { IsDelta } from '../core/common';
import { UiDocStatus } from './common';
export interface IUiColor<Doc extends UiDocStatus> {
    blue: Doc extends IsDelta ? boolean : Color_Value;
    green: Doc extends IsDelta ? boolean : Color_Value;
    red: Doc extends IsDelta ? boolean : Color_Value;
}
