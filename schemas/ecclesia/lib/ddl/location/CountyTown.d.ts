import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
import { County } from './County';
import { Town } from './Town';
/**
 * Composite Id - should never be referenced by id, only by the first part.
 */
export declare class CountyTown extends SystemGeneratedRow {
    county: County;
    town: Town;
}
