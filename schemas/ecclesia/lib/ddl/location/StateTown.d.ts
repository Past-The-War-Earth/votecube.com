import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
import { State } from './State';
import { Town } from './Town';
/**
 * Composite Id - should never be referenced by id, only by the first part.
 */
export declare class StateTown extends SystemGeneratedRow {
    state: State;
    town: Town;
}
//# sourceMappingURL=StateTown.d.ts.map