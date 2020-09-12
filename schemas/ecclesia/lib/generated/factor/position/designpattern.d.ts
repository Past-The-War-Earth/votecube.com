import { ISystemGeneratedRow } from '../../infrastructure/row/systemgeneratedrow';
export interface IDesignPattern extends ISystemGeneratedRow {
    id: number;
    name?: string;
    cssClass?: string;
}
