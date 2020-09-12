import { Application_Host, Application_Id, Application_Port } from '../../types/user/Application';
import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
export declare class Application extends SystemGeneratedRow {
    id: Application_Id;
    host: Application_Host;
    port: Application_Port;
}
