import { IFactorDoc } from '@votecube/model';
export interface IFactorDao {
    getAll(): Promise<IFactorDoc[]>;
}
export declare class FactorDao implements IFactorDao {
    getAll(): Promise<IFactorDoc[]>;
}
