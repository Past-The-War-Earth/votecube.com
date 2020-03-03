import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
export interface IDevice extends ISystemGeneratedRow {
    id: number;
    hash?: number;
}
