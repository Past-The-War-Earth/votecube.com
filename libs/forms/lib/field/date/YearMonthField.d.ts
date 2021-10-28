import { IValidator } from '../../validator/Validator';
import { Field, IField, IFieldRules } from '../Field';
import { Month } from './types';
export interface IYearMonthField extends IField {
    value: Date;
    clear(): void;
    reset(): void;
    setToDate(external: boolean, date: Date): void;
    setState(month: Month, year: number): void;
    setToNow(): void;
}
export interface IMutableYearMonthState {
    setState(month: Month, year: number): void;
}
export interface YearMonthInternal extends IYearMonthField, IMutableYearMonthState {
}
export declare class YearMonthField extends Field implements YearMonthInternal {
    today: Date;
    private rangeValidators;
    constructor(validators: IValidator[], rules?: IFieldRules);
    get numValue(): number;
    get value(): Date;
    set value(value: Date);
    clear(): void;
    hidePopup(): void;
    isOriginal(): boolean;
    reset(): void;
    revert(): void;
    setToDate(external: boolean, date: Date): void;
    setToNow(): void;
    setValue(value: Date, resetOriginal?: boolean): void;
    private getLastDateOfMonth;
    setState(month: Month, year: number): void;
    validate(external?: boolean, fromParentGroup?: boolean): void;
    protected getOriginal(): boolean;
}
//# sourceMappingURL=YearMonthField.d.ts.map