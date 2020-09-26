import { SystemGeneratedRow } from '../infrastructure/row/SystemGeneratedRow';
import { Country } from './Country';
import { Town } from './Town';
/**
 * Composite Id - should never be referenced by id, only by the first part.
 */
export declare class CountryTown extends SystemGeneratedRow {
    country: Country;
    town: Town;
}
//# sourceMappingURL=CountryTown.d.ts.map