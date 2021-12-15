import { IRepositoryEntity } from '@airport/holding-pattern';
import { IUser } from '@airport/travel-document-checkpoint';
export interface IUserAccount extends IRepositoryEntity {
    userName?: string;
    email?: string;
    passwordHash?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    birthDate?: Date;
    user?: IUser;
}
//# sourceMappingURL=useraccount.d.ts.map