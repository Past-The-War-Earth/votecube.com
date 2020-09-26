import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
export interface IUserAccount extends ISystemGeneratedRow {
    id: number;
    userName?: string;
    email?: string;
    passwordHash?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    birthDate?: Date;
}
//# sourceMappingURL=useraccount.d.ts.map