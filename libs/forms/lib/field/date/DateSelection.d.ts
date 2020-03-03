import { IMutableDateState } from './DateField';
import { DateOfMonth, Month } from './types';
export interface IDateSelection {
    date: DateOfMonth;
    month: Month;
    year: number;
}
export interface IDateSelectionInternal extends IDateSelection, IMutableDateState {
    impl: IDateSelection;
}
export declare class DateSelection implements IDateSelection, IDateSelectionInternal {
    impl: IDateSelection;
    get date(): DateOfMonth;
    get month(): Month;
    get year(): number;
    setState(external: boolean, date: DateOfMonth, month: Month, year: number): void;
}
