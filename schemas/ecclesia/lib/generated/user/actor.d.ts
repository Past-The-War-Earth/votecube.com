import { ISystemGeneratedRow } from '../infrastructure/row/systemgeneratedrow';
import { IUserAccount } from './useraccount';
import { IDevice } from './device';
import { IApplication } from './application';
export interface IActor extends ISystemGeneratedRow {
    id: number;
    hash?: number;
    userAccount?: IUserAccount;
    device?: IDevice;
    application?: IApplication;
}
//# sourceMappingURL=actor.d.ts.map