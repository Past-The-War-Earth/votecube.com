import { ISystemGeneratedRow } from '../../infrastructure/row/systemgeneratedrow';
export interface IEmoji extends ISystemGeneratedRow {
    id: number;
    name?: string;
    cssClass?: string;
}
