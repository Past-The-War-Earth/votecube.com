import { IUser } from '../core/User';
import { Id } from '../old/model';
export declare type Label_Id = Id;
export declare const LABELS = "LABELS";
export interface ILabel {
    description: string;
    id: Label_Id;
    name: string;
    user: IUser;
}
