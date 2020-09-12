import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
export interface IVoteType extends ISystemGeneratedRow {
    id: number;
    name?: string;
    description?: string;
}
