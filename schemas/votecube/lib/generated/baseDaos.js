import { Dao, DaoQueryDecorators, } from '@airport/check-in';
import { Q, duoDiSet, } from './qSchema';
// Schema Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseCategoryDao extends SQDIDao {
    constructor() {
        super(0);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(0);
    }
}
BaseCategoryDao.Find = new DaoQueryDecorators();
BaseCategoryDao.FindOne = new DaoQueryDecorators();
BaseCategoryDao.Search = new DaoQueryDecorators();
BaseCategoryDao.SearchOne = new DaoQueryDecorators();
export class BaseFactorDao extends SQDIDao {
    constructor() {
        super(3);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(3);
    }
}
BaseFactorDao.Find = new DaoQueryDecorators();
BaseFactorDao.FindOne = new DaoQueryDecorators();
BaseFactorDao.Search = new DaoQueryDecorators();
BaseFactorDao.SearchOne = new DaoQueryDecorators();
export class BaseFactorPositionDao extends SQDIDao {
    constructor() {
        super(2);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(2);
    }
}
BaseFactorPositionDao.Find = new DaoQueryDecorators();
BaseFactorPositionDao.FindOne = new DaoQueryDecorators();
BaseFactorPositionDao.Search = new DaoQueryDecorators();
BaseFactorPositionDao.SearchOne = new DaoQueryDecorators();
export class BaseOutcomeDao extends SQDIDao {
    constructor() {
        super(4);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(4);
    }
}
BaseOutcomeDao.Find = new DaoQueryDecorators();
BaseOutcomeDao.FindOne = new DaoQueryDecorators();
BaseOutcomeDao.Search = new DaoQueryDecorators();
BaseOutcomeDao.SearchOne = new DaoQueryDecorators();
export class BasePositionDao extends SQDIDao {
    constructor() {
        super(1);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(1);
    }
}
BasePositionDao.Find = new DaoQueryDecorators();
BasePositionDao.FindOne = new DaoQueryDecorators();
BasePositionDao.Search = new DaoQueryDecorators();
BasePositionDao.SearchOne = new DaoQueryDecorators();
export class BaseSituationDao extends SQDIDao {
    constructor() {
        super(6);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(6);
    }
}
BaseSituationDao.Find = new DaoQueryDecorators();
BaseSituationDao.FindOne = new DaoQueryDecorators();
BaseSituationDao.Search = new DaoQueryDecorators();
BaseSituationDao.SearchOne = new DaoQueryDecorators();
export class BaseSituationFactorPositionDao extends SQDIDao {
    constructor() {
        super(5);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(5);
    }
}
BaseSituationFactorPositionDao.Find = new DaoQueryDecorators();
BaseSituationFactorPositionDao.FindOne = new DaoQueryDecorators();
BaseSituationFactorPositionDao.Search = new DaoQueryDecorators();
BaseSituationFactorPositionDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map