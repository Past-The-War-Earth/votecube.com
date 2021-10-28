/**
 * https://stackoverflow.com/questions/8482309/converting-javascript-integer-to-byte-array-and-back
 *
 * MODIFIED
 */
import { ICursor } from './Cursor';
export declare function addString(str: string, bytes: Uint8Array, cursor: ICursor): void;
export declare function addNum(num: number, bytes: Uint8Array, cursor: ICursor): void;
export declare function addDate(date: Date, bytes: Uint8Array, cursor: ICursor): void;
export declare function addBool(bool: boolean, bytes: Uint8Array, cursor: ICursor): void;
//# sourceMappingURL=serializer.d.ts.map