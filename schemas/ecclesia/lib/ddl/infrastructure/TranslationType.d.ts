import { TranslationType_Code, TranslationType_Id } from '../../types/infrastructure/TranslationType';
import { SystemGeneratedRow } from './row/SystemGeneratedRow';
/**
 * Translation isn't necessarily from one language to another.
 *
 * You can translate to a different style for instance. You could
 * make a very technical poll more layman sounding.  Or make something
 * funny, etc.
 *
 * Internal Types like: Default, Best As voted, Best composite
 * User specified types: Funny, Abbreviated, Alegorical
 */
export declare class TranslationType extends SystemGeneratedRow {
    id: TranslationType_Id;
    code: TranslationType_Code;
}
//# sourceMappingURL=TranslationType.d.ts.map