import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
export interface IPollType extends ISystemGeneratedRow {
    id: number;
    value?: string;
}
