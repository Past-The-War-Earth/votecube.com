import { IDetect, IValidate } from '../Field';
import { IMutableDateState } from './DateField';
import { DateOfMonth, Month } from './types';
export declare enum FragmentType {
    DATE = "date",
    MONTH = "month",
    YEAR = "year"
}
export interface IDateFragmentsData {
    date: string;
    month: string;
    year: string;
}
export interface IDateFragments extends IDateFragmentsData {
    valid: boolean;
    onInput(fragmentType: FragmentType, element: HTMLInputElement): void;
    onKeydown(fragmentType: FragmentType, event: KeyboardEvent): void;
}
export interface IInputFragmentValidity<N> {
    isPositiveInteger: boolean;
    inRange: boolean;
    number: N;
}
export interface IDateFragmentsValidity {
    date: IInputFragmentValidity<DateOfMonth>;
    fragmentToFocus: FragmentType;
    isValid: boolean;
    month: IInputFragmentValidity<Month>;
    year: IInputFragmentValidity<number>;
}
export interface IDateFragmentsInternal extends IDateFragments, IMutableDateState {
    impl: IDateFragmentsData;
}
export declare class DateFragments implements IDateFragmentsInternal {
    private fieldState;
    impl: IDateFragmentsData & {
        validity: IDateFragmentsValidity;
    };
    constructor(fieldState: IDetect & IMutableDateState & IValidate);
    get date(): string;
    get month(): string;
    get valid(): boolean;
    get year(): string;
    onInput(fragmentType: FragmentType, element: HTMLInputElement): void;
    onKeydown(fragmentType: FragmentType, event: KeyboardEvent): void;
    setState(external: boolean, date: DateOfMonth, month: Month, year: number): void;
    private adjustDateOrMonthInputAndRefocus;
    private focusFragment;
    private getAssumedFragmentValidity;
    private getAssumedValidity;
    private getInputFragmentValidity;
    private getPreviousFragmentType;
    private getValidity;
    private isValid;
    private setDate;
    private setFragmentValue;
    private setMonth;
    private setYear;
    private validateAndSetState;
}
