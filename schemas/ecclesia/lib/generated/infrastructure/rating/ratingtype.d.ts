import { ISystemGeneratedRow } from '../row/systemgeneratedrow';
export interface IRatingType extends ISystemGeneratedRow {
    id: number;
    code?: string;
    description?: string;
}
