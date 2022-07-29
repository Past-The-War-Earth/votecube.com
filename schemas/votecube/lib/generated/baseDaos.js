import { Dao, DaoQueryDecorators, } from '@airport/tarmaq-dao';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseAgreementDao extends SQDIDao {
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
BaseAgreementDao.Find = new DaoQueryDecorators();
BaseAgreementDao.FindOne = new DaoQueryDecorators();
BaseAgreementDao.Search = new DaoQueryDecorators();
BaseAgreementDao.SearchOne = new DaoQueryDecorators();
export class BaseAgreementReasonDao extends SQDIDao {
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
BaseAgreementReasonDao.Find = new DaoQueryDecorators();
BaseAgreementReasonDao.FindOne = new DaoQueryDecorators();
BaseAgreementReasonDao.Search = new DaoQueryDecorators();
BaseAgreementReasonDao.SearchOne = new DaoQueryDecorators();
export class BaseFactorDao extends SQDIDao {
    constructor() {
        super(9);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(9);
    }
}
BaseFactorDao.Find = new DaoQueryDecorators();
BaseFactorDao.FindOne = new DaoQueryDecorators();
BaseFactorDao.Search = new DaoQueryDecorators();
BaseFactorDao.SearchOne = new DaoQueryDecorators();
export class BaseIdeaDao extends SQDIDao {
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
BaseIdeaDao.Find = new DaoQueryDecorators();
BaseIdeaDao.FindOne = new DaoQueryDecorators();
BaseIdeaDao.Search = new DaoQueryDecorators();
BaseIdeaDao.SearchOne = new DaoQueryDecorators();
export class BaseIdeaLabelDao extends SQDIDao {
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
BaseIdeaLabelDao.Find = new DaoQueryDecorators();
BaseIdeaLabelDao.FindOne = new DaoQueryDecorators();
BaseIdeaLabelDao.Search = new DaoQueryDecorators();
BaseIdeaLabelDao.SearchOne = new DaoQueryDecorators();
export class BaseIdeaRatingDao extends SQDIDao {
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
BaseIdeaRatingDao.Find = new DaoQueryDecorators();
BaseIdeaRatingDao.FindOne = new DaoQueryDecorators();
BaseIdeaRatingDao.Search = new DaoQueryDecorators();
BaseIdeaRatingDao.SearchOne = new DaoQueryDecorators();
export class BaseIdeaReasonDao extends SQDIDao {
    constructor() {
        super(12);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(12);
    }
}
BaseIdeaReasonDao.Find = new DaoQueryDecorators();
BaseIdeaReasonDao.FindOne = new DaoQueryDecorators();
BaseIdeaReasonDao.Search = new DaoQueryDecorators();
BaseIdeaReasonDao.SearchOne = new DaoQueryDecorators();
export class BaseIdeaTopicDao extends SQDIDao {
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
BaseIdeaTopicDao.Find = new DaoQueryDecorators();
BaseIdeaTopicDao.FindOne = new DaoQueryDecorators();
BaseIdeaTopicDao.Search = new DaoQueryDecorators();
BaseIdeaTopicDao.SearchOne = new DaoQueryDecorators();
export class BaseLabelDao extends SQDIDao {
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
BaseLabelDao.Find = new DaoQueryDecorators();
BaseLabelDao.FindOne = new DaoQueryDecorators();
BaseLabelDao.Search = new DaoQueryDecorators();
BaseLabelDao.SearchOne = new DaoQueryDecorators();
export class BasePositionDao extends SQDIDao {
    constructor() {
        super(10);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(10);
    }
}
BasePositionDao.Find = new DaoQueryDecorators();
BasePositionDao.FindOne = new DaoQueryDecorators();
BasePositionDao.Search = new DaoQueryDecorators();
BasePositionDao.SearchOne = new DaoQueryDecorators();
export class BaseReasonDao extends SQDIDao {
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
BaseReasonDao.Find = new DaoQueryDecorators();
BaseReasonDao.FindOne = new DaoQueryDecorators();
BaseReasonDao.Search = new DaoQueryDecorators();
BaseReasonDao.SearchOne = new DaoQueryDecorators();
export class BaseReasonCubeDisplayDao extends SQDIDao {
    constructor() {
        super(11);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(11);
    }
}
BaseReasonCubeDisplayDao.Find = new DaoQueryDecorators();
BaseReasonCubeDisplayDao.FindOne = new DaoQueryDecorators();
BaseReasonCubeDisplayDao.Search = new DaoQueryDecorators();
BaseReasonCubeDisplayDao.SearchOne = new DaoQueryDecorators();
export class BaseSituationIdeaDao extends SQDIDao {
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
BaseSituationIdeaDao.Find = new DaoQueryDecorators();
BaseSituationIdeaDao.FindOne = new DaoQueryDecorators();
BaseSituationIdeaDao.Search = new DaoQueryDecorators();
BaseSituationIdeaDao.SearchOne = new DaoQueryDecorators();
export class BaseSituationIdeaReasonDao extends SQDIDao {
    constructor() {
        super(13);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(13);
    }
}
BaseSituationIdeaReasonDao.Find = new DaoQueryDecorators();
BaseSituationIdeaReasonDao.FindOne = new DaoQueryDecorators();
BaseSituationIdeaReasonDao.Search = new DaoQueryDecorators();
BaseSituationIdeaReasonDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map