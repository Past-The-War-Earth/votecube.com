import { IPoll } from '@votecube/model';
import { Dao, IDao } from '../Dao';
export interface IPollDao extends IDao<IPoll> {
}
export declare class PollDao extends Dao<IPoll> implements IPollDao {
    save(entity: IPoll): Promise<void>;
    private getTypesToSave;
}
