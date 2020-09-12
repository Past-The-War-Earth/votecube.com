import { Actor_Hash, Actor_Id } from '../../types/user/Actor';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
import { Application } from './Application';
import { Device } from './Device';
import { UserAccount } from './UserAccount';
export declare class Actor extends SystemGeneratedRow {
    id: Actor_Id;
    hash: Actor_Hash;
    userAccount: UserAccount;
    device: Device;
    application: Application;
}
