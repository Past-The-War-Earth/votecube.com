import { UserAccount_BirthDate, UserAccount_FirstName, UserAccount_Id, UserAccount_LastName, UserAccount_MiddleName, UserAccount_UserName } from '../../types/user/UserAccount';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
export declare class UserAccount extends SystemGeneratedRow {
    id: UserAccount_Id;
    userName: UserAccount_UserName;
    firstName: UserAccount_FirstName;
    middleName: UserAccount_MiddleName;
    lastName: UserAccount_LastName;
    birthDate: UserAccount_BirthDate;
}
