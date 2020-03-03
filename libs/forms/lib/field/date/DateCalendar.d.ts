import { IDateFieldInternal } from './DateField';
import { DateSelection, IDateSelection, IDateSelectionInternal } from './DateSelection';
import { DateOfMonth, Month } from './types';
export interface IDateCalendar extends IDateSelection {
    weeks: DateOfMonth[][];
    toNextMonth(): void;
    toPrevMonth(): void;
}
export interface IDateCalendarInternal extends IDateCalendar, IDateSelectionInternal {
}
export declare class DateCalendar extends DateSelection implements IDateCalendarInternal {
    private field;
    weeks: DateOfMonth[][];
    constructor(field: IDateFieldInternal);
    setState(external: boolean, date: DateOfMonth, month: Month, year: number): boolean;
    toNextMonth(): void;
    toPrevMonth(): void;
    private setWeeks;
}
