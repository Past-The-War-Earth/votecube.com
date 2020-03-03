import { IModel } from '@votecube/model';
import { ICursor } from './Cursor';
export declare class Out {
    byteArray: ArrayBuffer;
    byteView: Uint8Array;
    cursor: ICursor;
    constructor(byteLength?: number);
    arrayLen(array: any[]): void;
    bool(bool: boolean): void;
    byte(byte: number): void;
    date(date: Date): void;
    idArray<M extends IModel>(models: M[]): void;
    nil(): void;
    num(num: number): void;
    str(str: string): void;
    toData(): ArrayBuffer;
}
