import { RepositoryEntity } from '@airport/holding-pattern';
import { User } from '@airport/travel-document-checkpoint';
export declare type UserAccount_UserName = string;
export declare type UserAccount_FirstName = string;
export declare type UserAccount_MiddleName = string;
export declare type UserAccount_LastName = string;
export declare type UserAccount_BirthDate = Date;
export declare type UserAccount_PasswordHash = string;
export declare type UserAccount_Email = string;
export declare class UserAccount extends RepositoryEntity {
    userName: UserAccount_UserName;
    email: UserAccount_Email;
    passwordHash: UserAccount_PasswordHash;
    firstName: UserAccount_FirstName;
    middleName: UserAccount_MiddleName;
    lastName: UserAccount_LastName;
    birthDate: UserAccount_BirthDate;
    /**
     * "prefix_last_name_id"     Bigint, -- NOT NULL,
     * "name_after_last_name_id" Bigint, -- NOT NULL,
     */
    user: User;
}
//# sourceMappingURL=UserAccount.d.ts.map