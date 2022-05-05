import { IEntityContext } from '@airport/air-traffic-control';
import { IUserAccount } from './generated/user/useraccount';
export * from './dao/dao';
export * from './ddl/ddl';
export * from './duo/duo';
export * from './tokens';
export * from './generated/generated';
export * from './generated/interfaces';
export * from './types/types';
export interface IVotecubeContext extends IEntityContext {
    userAccount: IUserAccount;
}
//# sourceMappingURL=index.d.ts.map