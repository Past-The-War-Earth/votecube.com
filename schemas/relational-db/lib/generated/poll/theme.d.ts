import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
export interface ITheme extends ISystemGeneratedRow {
    id: number;
    name?: string;
    ageSuitability?: number;
}
