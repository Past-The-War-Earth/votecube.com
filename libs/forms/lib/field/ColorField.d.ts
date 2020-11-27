import { Field, IField } from './Field';
export declare type IColorChangeFlag = 0 | 1;
export interface IColorChangeFlags {
    blue: IColorChangeFlag;
    green: IColorChangeFlag;
    red: IColorChangeFlag;
}
export interface IColorField extends IField {
    changeFlags: IColorChangeFlags;
}
export declare class ColorField extends Field {
    get changeFlags(): IColorChangeFlags;
}
//# sourceMappingURL=ColorField.d.ts.map