import { IValidator } from '../../validator/Validator';
import { Field, IField, IFieldRules } from '../Field';
import { Month } from './types';
export interface IMonthYearField extends IField {
    value: Date;
    clear(): void;
    reset(): void;
    setState(month: Month, year: number, validate?: boolean): void;
    setToDate(external: boolean, date: Date): void;
    setToNow(): void;
}
export interface IMutableYearMonthState {
    setState(month: Month, year: number, validate?: boolean): void;
}
export interface MonthYearInternal extends IMonthYearField, IMutableYearMonthState {
}
export declare class MonthYearField extends Field implements MonthYearInternal {
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
    setState(month: Month, year: number, validate?: boolean): void;
    validate(external?: boolean, fromParentGroup?: boolean): void;
    protected getOriginal(): boolean;
}
//# sourceMappingURL=MonthYearField.d.ts.map