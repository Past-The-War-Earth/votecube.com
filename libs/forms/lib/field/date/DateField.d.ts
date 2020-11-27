import { IValidator } from '../../validator/Validator';
import { Field, IField, IFieldRules } from '../Field';
import { IDateCalendar } from './DateCalendar';
import { DateFragments, IDateFragments } from './DateFragments';
import { DateSelection, IDateSelection } from './DateSelection';
import { DateOfMonth, Month } from './types';
export interface IDateField extends IField {
    fragments: IDateFragments;
    calendar: IDateCalendar;
    selection: IDateSelection;
    value: Date;
    cellFlags(dateOfMonth: DateOfMonth, weekIndex: 0 | 1 | 2 | 3 | 4 | 5): string;
    clear(): void;
    isSelected(dateOfMonth: DateOfMonth, weekIndex: 0 | 1 | 2 | 3 | 4 | 5): boolean;
    isToday(dateOfMonth: DateOfMonth, weekIndex: 0 | 1 | 2 | 3 | 4 | 5): boolean;
    reset(): void;
    showPopup(): void;
    setToDate(external: boolean, date: Date): void;
    setToNow(): void;
}
export interface IMutableDateState {
    setState(external: boolean, date: DateOfMonth, month: Month, year: number, calendarOnly?: boolean): void;
}
export interface IDateFieldInternal extends IDateField, IMutableDateState {
}
export declare class DateField extends Field implements IDateFieldInternal {
    fragments: DateFragments;
    calendar: any;
    selection: DateSelection;
    today: Date;
    private rangeValidators;
    constructor(validators: IValidator[], rules?: IFieldRules);
    get numValue(): number;
    get value(): Date;
    set value(value: Date);
    cellFlags(dateOfMonth: DateOfMonth, weekIndex: 0 | 1 | 2 | 3 | 4 | 5): string;
    clear(): void;
    hidePopup(): void;
    isOriginal(): boolean;
    isSelected(dateOfMonth: DateOfMonth, weekIndex: 0 | 1 | 2 | 3 | 4 | 5): boolean;
    isToday(dateOfMonth: DateOfMonth, weekIndex: 0 | 1 | 2 | 3 | 4 | 5): boolean;
    reset(): void;
    revert(): void;
    setDateOfMonth(dateOfMonth: DateOfMonth, weekIndex: 0 | 1 | 2 | 3 | 4 | 5): void;
    setToDate(external: boolean, date: Date): void;
    setToNow(): void;
    setValue(value: Date, resetOriginal?: boolean): void;
    setState(external: boolean, date: DateOfMonth, month: Month, year: number, calendarOnly?: boolean): void;
    showPopup(): void;
    validate(external?: boolean, fromParentGroup?: boolean): void;
    protected getOriginal(): boolean;
    private getCalendarYearAndMonth;
    private inRangeAndMonth;
}
//# sourceMappingURL=DateField.d.ts.map