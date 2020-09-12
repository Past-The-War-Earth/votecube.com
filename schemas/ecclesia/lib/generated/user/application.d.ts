import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
export interface IApplication extends ISystemGeneratedRow {
    id: number;
    host?: string;
    port?: number;
}
