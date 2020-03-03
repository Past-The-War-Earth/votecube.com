import { Device_Hash, Device_Id } from '../../types/user/Device';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
export declare class Device extends SystemGeneratedRow {
    id: Device_Id;
    hash: Device_Hash;
}
