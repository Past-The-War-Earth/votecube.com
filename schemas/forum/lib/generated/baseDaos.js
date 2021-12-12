import { Dao, DaoQueryDecorators, } from '@airport/check-in';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseForumPostDao extends SQDIDao {
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
BaseForumPostDao.Find = new DaoQueryDecorators();
BaseForumPostDao.FindOne = new DaoQueryDecorators();
BaseForumPostDao.Search = new DaoQueryDecorators();
BaseForumPostDao.SearchOne = new DaoQueryDecorators();
export class BaseForumThreadDao extends SQDIDao {
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
BaseForumThreadDao.Find = new DaoQueryDecorators();
BaseForumThreadDao.FindOne = new DaoQueryDecorators();
BaseForumThreadDao.Search = new DaoQueryDecorators();
BaseForumThreadDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map