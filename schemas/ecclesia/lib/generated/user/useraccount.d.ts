import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
export interface IUserAccount extends ISystemGeneratedRow {
    id: number;
    userName?: string;
    passwordHash?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    birthDate?: Date;
}
