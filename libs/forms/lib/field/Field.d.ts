import { IErrorsText, IValidator } from '../validator/Validator';
import { FieldBase, IFieldBase, IFieldError } from './FieldBase';
export declare enum LabelRule {
    BOTH = 0,
    IN = 1,
    NONE = 2,
    OVER = 3
}
export interface IFieldRules {
    label?: LabelRule;
    maxLength?: '' | number;
    trackOriginal?: boolean;
}
export interface IFieldText {
    errors?: IErrorsText;
    info: string;
    infoSeconds?: number;
    label: string;
}
export interface IValidate {
    validate(external?: boolean, fromParentGroup?: boolean, relatedField?: IFieldBase, originalCheckOnly?: boolean): void;
}
export interface IDetect {
    detect(): void;
}
export interface IField extends IFieldBase, IValidate, IDetect {
    label: string;
    numValue: number;
    placeholder: string;
    rules: IFieldRules;
    text: IFieldText;
    clear(): void;
    labelRule(labelRule: LabelRule): void;
    onBlur(): void;
    onInput(): void;
}
export declare class Field extends FieldBase implements IField {
    rules: IFieldRules;
    text: IFieldText;
    constructor(validators?: IValidator[], rules?: IFieldRules);
    get error(): IFieldError | null;
    get label(): string;
    get numValue(): number;
    get placeholder(): string;
    clear(): void;
    isOriginal(): boolean;
    labelRule(labelRule?: LabelRule): void;
    onBlur(): void;
    onInput(): void;
    revert(): void;
    setTrackOriginal(trackOriginal: boolean): void;
    validate(external?: boolean, fromParentGroup?: boolean): void;
    protected updateValidity(fromParentGroup: boolean): void;
    protected getOriginal(): boolean;
}
//# sourceMappingURL=Field.d.ts.map