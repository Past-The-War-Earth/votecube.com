import { Dao, DaoQueryDecorators, } from '@airport/check-in';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseFactorDao extends SQDIDao {
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
BaseFactorDao.Find = new DaoQueryDecorators();
BaseFactorDao.FindOne = new DaoQueryDecorators();
BaseFactorDao.Search = new DaoQueryDecorators();
BaseFactorDao.SearchOne = new DaoQueryDecorators();
export class BaseLabelDao extends SQDIDao {
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
BaseLabelDao.Find = new DaoQueryDecorators();
BaseLabelDao.FindOne = new DaoQueryDecorators();
BaseLabelDao.Search = new DaoQueryDecorators();
BaseLabelDao.SearchOne = new DaoQueryDecorators();
export class BaseOutcomeDao extends SQDIDao {
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
BaseOutcomeDao.Find = new DaoQueryDecorators();
BaseOutcomeDao.FindOne = new DaoQueryDecorators();
BaseOutcomeDao.Search = new DaoQueryDecorators();
BaseOutcomeDao.SearchOne = new DaoQueryDecorators();
export class BasePositionDao extends SQDIDao {
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
BasePositionDao.Find = new DaoQueryDecorators();
BasePositionDao.FindOne = new DaoQueryDecorators();
BasePositionDao.Search = new DaoQueryDecorators();
BasePositionDao.SearchOne = new DaoQueryDecorators();
export class BaseSituationDao extends SQDIDao {
    constructor() {
        super(8);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(8);
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
export class BaseSituationLabelDao extends SQDIDao {
    constructor() {
        super(7);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(7);
    }
}
BaseSituationLabelDao.Find = new DaoQueryDecorators();
BaseSituationLabelDao.FindOne = new DaoQueryDecorators();
BaseSituationLabelDao.Search = new DaoQueryDecorators();
BaseSituationLabelDao.SearchOne = new DaoQueryDecorators();
export class BaseSolutionDao extends SQDIDao {
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
BaseSolutionDao.Find = new DaoQueryDecorators();
BaseSolutionDao.FindOne = new DaoQueryDecorators();
BaseSolutionDao.Search = new DaoQueryDecorators();
BaseSolutionDao.SearchOne = new DaoQueryDecorators();
export class BaseSolutionFactorDao extends SQDIDao {
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
BaseSolutionFactorDao.Find = new DaoQueryDecorators();
BaseSolutionFactorDao.FindOne = new DaoQueryDecorators();
BaseSolutionFactorDao.Search = new DaoQueryDecorators();
BaseSolutionFactorDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map