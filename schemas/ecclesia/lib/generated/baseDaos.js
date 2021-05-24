import { Dao, DaoQueryDecorators, } from '@airport/check-in';
import { Q, duoDiSet, } from './qSchema';
// Schema Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseActorDao extends SQDIDao {
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
BaseActorDao.Find = new DaoQueryDecorators();
BaseActorDao.FindOne = new DaoQueryDecorators();
BaseActorDao.Search = new DaoQueryDecorators();
BaseActorDao.SearchOne = new DaoQueryDecorators();
export class BaseApplicationDao extends SQDIDao {
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
BaseApplicationDao.Find = new DaoQueryDecorators();
BaseApplicationDao.FindOne = new DaoQueryDecorators();
BaseApplicationDao.Search = new DaoQueryDecorators();
BaseApplicationDao.SearchOne = new DaoQueryDecorators();
export class BaseContinentDao extends SQDIDao {
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
BaseContinentDao.Find = new DaoQueryDecorators();
BaseContinentDao.FindOne = new DaoQueryDecorators();
BaseContinentDao.Search = new DaoQueryDecorators();
BaseContinentDao.SearchOne = new DaoQueryDecorators();
export class BaseCountryDao extends SQDIDao {
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
BaseCountryDao.Find = new DaoQueryDecorators();
BaseCountryDao.FindOne = new DaoQueryDecorators();
BaseCountryDao.Search = new DaoQueryDecorators();
BaseCountryDao.SearchOne = new DaoQueryDecorators();
export class BaseCountryTownDao extends SQDIDao {
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
BaseCountryTownDao.Find = new DaoQueryDecorators();
BaseCountryTownDao.FindOne = new DaoQueryDecorators();
BaseCountryTownDao.Search = new DaoQueryDecorators();
BaseCountryTownDao.SearchOne = new DaoQueryDecorators();
export class BaseCountyDao extends SQDIDao {
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
BaseCountyDao.Find = new DaoQueryDecorators();
BaseCountyDao.FindOne = new DaoQueryDecorators();
BaseCountyDao.Search = new DaoQueryDecorators();
BaseCountyDao.SearchOne = new DaoQueryDecorators();
export class BaseCountyTownDao extends SQDIDao {
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
BaseCountyTownDao.Find = new DaoQueryDecorators();
BaseCountyTownDao.FindOne = new DaoQueryDecorators();
BaseCountyTownDao.Search = new DaoQueryDecorators();
BaseCountyTownDao.SearchOne = new DaoQueryDecorators();
export class BaseDesignPatternDao extends SQDIDao {
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
BaseDesignPatternDao.Find = new DaoQueryDecorators();
BaseDesignPatternDao.FindOne = new DaoQueryDecorators();
BaseDesignPatternDao.Search = new DaoQueryDecorators();
BaseDesignPatternDao.SearchOne = new DaoQueryDecorators();
export class BaseDeviceDao extends SQDIDao {
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
BaseDeviceDao.Find = new DaoQueryDecorators();
BaseDeviceDao.FindOne = new DaoQueryDecorators();
BaseDeviceDao.Search = new DaoQueryDecorators();
BaseDeviceDao.SearchOne = new DaoQueryDecorators();
export class BaseEmojiDao extends SQDIDao {
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
BaseEmojiDao.Find = new DaoQueryDecorators();
BaseEmojiDao.FindOne = new DaoQueryDecorators();
BaseEmojiDao.Search = new DaoQueryDecorators();
BaseEmojiDao.SearchOne = new DaoQueryDecorators();
export class BaseFactorDao extends SQDIDao {
    constructor() {
        super(25);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(25);
    }
}
BaseFactorDao.Find = new DaoQueryDecorators();
BaseFactorDao.FindOne = new DaoQueryDecorators();
BaseFactorDao.Search = new DaoQueryDecorators();
BaseFactorDao.SearchOne = new DaoQueryDecorators();
export class BaseFactorOpinionVersionDao extends SQDIDao {
    constructor() {
        super(36);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(36);
    }
}
BaseFactorOpinionVersionDao.Find = new DaoQueryDecorators();
BaseFactorOpinionVersionDao.FindOne = new DaoQueryDecorators();
BaseFactorOpinionVersionDao.Search = new DaoQueryDecorators();
BaseFactorOpinionVersionDao.SearchOne = new DaoQueryDecorators();
export class BaseFactorOpinionVersionTranslationDao extends SQDIDao {
    constructor() {
        super(35);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(35);
    }
}
BaseFactorOpinionVersionTranslationDao.Find = new DaoQueryDecorators();
BaseFactorOpinionVersionTranslationDao.FindOne = new DaoQueryDecorators();
BaseFactorOpinionVersionTranslationDao.Search = new DaoQueryDecorators();
BaseFactorOpinionVersionTranslationDao.SearchOne = new DaoQueryDecorators();
export class BaseFactorPositionDao extends SQDIDao {
    constructor() {
        super(28);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(28);
    }
}
BaseFactorPositionDao.Find = new DaoQueryDecorators();
BaseFactorPositionDao.FindOne = new DaoQueryDecorators();
BaseFactorPositionDao.Search = new DaoQueryDecorators();
BaseFactorPositionDao.SearchOne = new DaoQueryDecorators();
export class BaseFactorTranslationDao extends SQDIDao {
    constructor() {
        super(24);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(24);
    }
}
BaseFactorTranslationDao.Find = new DaoQueryDecorators();
BaseFactorTranslationDao.FindOne = new DaoQueryDecorators();
BaseFactorTranslationDao.Search = new DaoQueryDecorators();
BaseFactorTranslationDao.SearchOne = new DaoQueryDecorators();
export class BaseLanguageDao extends SQDIDao {
    constructor() {
        super(23);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(23);
    }
}
BaseLanguageDao.Find = new DaoQueryDecorators();
BaseLanguageDao.FindOne = new DaoQueryDecorators();
BaseLanguageDao.Search = new DaoQueryDecorators();
BaseLanguageDao.SearchOne = new DaoQueryDecorators();
export class BaseOutcomeDao extends SQDIDao {
    constructor() {
        super(39);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(39);
    }
}
BaseOutcomeDao.Find = new DaoQueryDecorators();
BaseOutcomeDao.FindOne = new DaoQueryDecorators();
BaseOutcomeDao.Search = new DaoQueryDecorators();
BaseOutcomeDao.SearchOne = new DaoQueryDecorators();
export class BaseOutcomeOpinionVersionDao extends SQDIDao {
    constructor() {
        super(41);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(41);
    }
}
BaseOutcomeOpinionVersionDao.Find = new DaoQueryDecorators();
BaseOutcomeOpinionVersionDao.FindOne = new DaoQueryDecorators();
BaseOutcomeOpinionVersionDao.Search = new DaoQueryDecorators();
BaseOutcomeOpinionVersionDao.SearchOne = new DaoQueryDecorators();
export class BaseOutcomeOpinionVersionTranslationDao extends SQDIDao {
    constructor() {
        super(40);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(40);
    }
}
BaseOutcomeOpinionVersionTranslationDao.Find = new DaoQueryDecorators();
BaseOutcomeOpinionVersionTranslationDao.FindOne = new DaoQueryDecorators();
BaseOutcomeOpinionVersionTranslationDao.Search = new DaoQueryDecorators();
BaseOutcomeOpinionVersionTranslationDao.SearchOne = new DaoQueryDecorators();
export class BaseOutcomeTranslationDao extends SQDIDao {
    constructor() {
        super(38);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(38);
    }
}
BaseOutcomeTranslationDao.Find = new DaoQueryDecorators();
BaseOutcomeTranslationDao.FindOne = new DaoQueryDecorators();
BaseOutcomeTranslationDao.Search = new DaoQueryDecorators();
BaseOutcomeTranslationDao.SearchOne = new DaoQueryDecorators();
export class BasePollDao extends SQDIDao {
    constructor() {
        super(51);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(51);
    }
}
BasePollDao.Find = new DaoQueryDecorators();
BasePollDao.FindOne = new DaoQueryDecorators();
BasePollDao.Search = new DaoQueryDecorators();
BasePollDao.SearchOne = new DaoQueryDecorators();
export class BasePollRevisionDao extends SQDIDao {
    constructor() {
        super(55);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(55);
    }
}
BasePollRevisionDao.Find = new DaoQueryDecorators();
BasePollRevisionDao.FindOne = new DaoQueryDecorators();
BasePollRevisionDao.Search = new DaoQueryDecorators();
BasePollRevisionDao.SearchOne = new DaoQueryDecorators();
export class BasePollRevisionFactorPositionDao extends SQDIDao {
    constructor() {
        super(30);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(30);
    }
}
BasePollRevisionFactorPositionDao.Find = new DaoQueryDecorators();
BasePollRevisionFactorPositionDao.FindOne = new DaoQueryDecorators();
BasePollRevisionFactorPositionDao.Search = new DaoQueryDecorators();
BasePollRevisionFactorPositionDao.SearchOne = new DaoQueryDecorators();
export class BasePollRevisionOpinionDao extends SQDIDao {
    constructor() {
        super(50);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(50);
    }
}
BasePollRevisionOpinionDao.Find = new DaoQueryDecorators();
BasePollRevisionOpinionDao.FindOne = new DaoQueryDecorators();
BasePollRevisionOpinionDao.Search = new DaoQueryDecorators();
BasePollRevisionOpinionDao.SearchOne = new DaoQueryDecorators();
export class BasePollRevisionOpinionRatingDao extends SQDIDao {
    constructor() {
        super(49);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(49);
    }
}
BasePollRevisionOpinionRatingDao.Find = new DaoQueryDecorators();
BasePollRevisionOpinionRatingDao.FindOne = new DaoQueryDecorators();
BasePollRevisionOpinionRatingDao.Search = new DaoQueryDecorators();
BasePollRevisionOpinionRatingDao.SearchOne = new DaoQueryDecorators();
export class BasePollRevisionOpinionVersionDao extends SQDIDao {
    constructor() {
        super(43);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(43);
    }
}
BasePollRevisionOpinionVersionDao.Find = new DaoQueryDecorators();
BasePollRevisionOpinionVersionDao.FindOne = new DaoQueryDecorators();
BasePollRevisionOpinionVersionDao.Search = new DaoQueryDecorators();
BasePollRevisionOpinionVersionDao.SearchOne = new DaoQueryDecorators();
export class BasePollRevisionOpinionVersionTranslationDao extends SQDIDao {
    constructor() {
        super(42);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(42);
    }
}
BasePollRevisionOpinionVersionTranslationDao.Find = new DaoQueryDecorators();
BasePollRevisionOpinionVersionTranslationDao.FindOne = new DaoQueryDecorators();
BasePollRevisionOpinionVersionTranslationDao.Search = new DaoQueryDecorators();
BasePollRevisionOpinionVersionTranslationDao.SearchOne = new DaoQueryDecorators();
export class BasePollRevisionRatingDao extends SQDIDao {
    constructor() {
        super(52);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(52);
    }
}
BasePollRevisionRatingDao.Find = new DaoQueryDecorators();
BasePollRevisionRatingDao.FindOne = new DaoQueryDecorators();
BasePollRevisionRatingDao.Search = new DaoQueryDecorators();
BasePollRevisionRatingDao.SearchOne = new DaoQueryDecorators();
export class BasePollRevisionTranslationDao extends SQDIDao {
    constructor() {
        super(54);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(54);
    }
}
BasePollRevisionTranslationDao.Find = new DaoQueryDecorators();
BasePollRevisionTranslationDao.FindOne = new DaoQueryDecorators();
BasePollRevisionTranslationDao.Search = new DaoQueryDecorators();
BasePollRevisionTranslationDao.SearchOne = new DaoQueryDecorators();
export class BasePollRevisionTranslationRatingDao extends SQDIDao {
    constructor() {
        super(53);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(53);
    }
}
BasePollRevisionTranslationRatingDao.Find = new DaoQueryDecorators();
BasePollRevisionTranslationRatingDao.FindOne = new DaoQueryDecorators();
BasePollRevisionTranslationRatingDao.Search = new DaoQueryDecorators();
BasePollRevisionTranslationRatingDao.SearchOne = new DaoQueryDecorators();
export class BasePollRunDao extends SQDIDao {
    constructor() {
        super(21);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(21);
    }
}
BasePollRunDao.Find = new DaoQueryDecorators();
BasePollRunDao.FindOne = new DaoQueryDecorators();
BasePollRunDao.Search = new DaoQueryDecorators();
BasePollRunDao.SearchOne = new DaoQueryDecorators();
export class BasePollRunContinentDao extends SQDIDao {
    constructor() {
        super(16);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(16);
    }
}
BasePollRunContinentDao.Find = new DaoQueryDecorators();
BasePollRunContinentDao.FindOne = new DaoQueryDecorators();
BasePollRunContinentDao.Search = new DaoQueryDecorators();
BasePollRunContinentDao.SearchOne = new DaoQueryDecorators();
export class BasePollRunCountryDao extends SQDIDao {
    constructor() {
        super(17);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(17);
    }
}
BasePollRunCountryDao.Find = new DaoQueryDecorators();
BasePollRunCountryDao.FindOne = new DaoQueryDecorators();
BasePollRunCountryDao.Search = new DaoQueryDecorators();
BasePollRunCountryDao.SearchOne = new DaoQueryDecorators();
export class BasePollRunCountyDao extends SQDIDao {
    constructor() {
        super(18);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(18);
    }
}
BasePollRunCountyDao.Find = new DaoQueryDecorators();
BasePollRunCountyDao.FindOne = new DaoQueryDecorators();
BasePollRunCountyDao.Search = new DaoQueryDecorators();
BasePollRunCountyDao.SearchOne = new DaoQueryDecorators();
export class BasePollRunStateDao extends SQDIDao {
    constructor() {
        super(19);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(19);
    }
}
BasePollRunStateDao.Find = new DaoQueryDecorators();
BasePollRunStateDao.FindOne = new DaoQueryDecorators();
BasePollRunStateDao.Search = new DaoQueryDecorators();
BasePollRunStateDao.SearchOne = new DaoQueryDecorators();
export class BasePollRunTownDao extends SQDIDao {
    constructor() {
        super(20);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(20);
    }
}
BasePollRunTownDao.Find = new DaoQueryDecorators();
BasePollRunTownDao.FindOne = new DaoQueryDecorators();
BasePollRunTownDao.Search = new DaoQueryDecorators();
BasePollRunTownDao.SearchOne = new DaoQueryDecorators();
export class BasePollTypeDao extends SQDIDao {
    constructor() {
        super(15);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(15);
    }
}
BasePollTypeDao.Find = new DaoQueryDecorators();
BasePollTypeDao.FindOne = new DaoQueryDecorators();
BasePollTypeDao.Search = new DaoQueryDecorators();
BasePollTypeDao.SearchOne = new DaoQueryDecorators();
export class BasePositionDao extends SQDIDao {
    constructor() {
        super(27);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(27);
    }
}
BasePositionDao.Find = new DaoQueryDecorators();
BasePositionDao.FindOne = new DaoQueryDecorators();
BasePositionDao.Search = new DaoQueryDecorators();
BasePositionDao.SearchOne = new DaoQueryDecorators();
export class BasePositionOpinionVersionDao extends SQDIDao {
    constructor() {
        super(45);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(45);
    }
}
BasePositionOpinionVersionDao.Find = new DaoQueryDecorators();
BasePositionOpinionVersionDao.FindOne = new DaoQueryDecorators();
BasePositionOpinionVersionDao.Search = new DaoQueryDecorators();
BasePositionOpinionVersionDao.SearchOne = new DaoQueryDecorators();
export class BasePositionOpinionVersionTranslationDao extends SQDIDao {
    constructor() {
        super(44);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(44);
    }
}
BasePositionOpinionVersionTranslationDao.Find = new DaoQueryDecorators();
BasePositionOpinionVersionTranslationDao.FindOne = new DaoQueryDecorators();
BasePositionOpinionVersionTranslationDao.Search = new DaoQueryDecorators();
BasePositionOpinionVersionTranslationDao.SearchOne = new DaoQueryDecorators();
export class BasePositionTranslationDao extends SQDIDao {
    constructor() {
        super(26);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(26);
    }
}
BasePositionTranslationDao.Find = new DaoQueryDecorators();
BasePositionTranslationDao.FindOne = new DaoQueryDecorators();
BasePositionTranslationDao.Search = new DaoQueryDecorators();
BasePositionTranslationDao.SearchOne = new DaoQueryDecorators();
export class BaseRatingDao extends SQDIDao {
    constructor() {
        super(48);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(48);
    }
}
BaseRatingDao.Find = new DaoQueryDecorators();
BaseRatingDao.FindOne = new DaoQueryDecorators();
BaseRatingDao.Search = new DaoQueryDecorators();
BaseRatingDao.SearchOne = new DaoQueryDecorators();
export class BaseRatingSettingDao extends SQDIDao {
    constructor() {
        super(46);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(46);
    }
}
BaseRatingSettingDao.Find = new DaoQueryDecorators();
BaseRatingSettingDao.FindOne = new DaoQueryDecorators();
BaseRatingSettingDao.Search = new DaoQueryDecorators();
BaseRatingSettingDao.SearchOne = new DaoQueryDecorators();
export class BaseRatingTypeDao extends SQDIDao {
    constructor() {
        super(47);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(47);
    }
}
BaseRatingTypeDao.Find = new DaoQueryDecorators();
BaseRatingTypeDao.FindOne = new DaoQueryDecorators();
BaseRatingTypeDao.Search = new DaoQueryDecorators();
BaseRatingTypeDao.SearchOne = new DaoQueryDecorators();
export class BaseSkinDao extends SQDIDao {
    constructor() {
        super(29);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(29);
    }
}
BaseSkinDao.Find = new DaoQueryDecorators();
BaseSkinDao.FindOne = new DaoQueryDecorators();
BaseSkinDao.Search = new DaoQueryDecorators();
BaseSkinDao.SearchOne = new DaoQueryDecorators();
export class BaseStateDao extends SQDIDao {
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
BaseStateDao.Find = new DaoQueryDecorators();
BaseStateDao.FindOne = new DaoQueryDecorators();
BaseStateDao.Search = new DaoQueryDecorators();
BaseStateDao.SearchOne = new DaoQueryDecorators();
export class BaseStateTownDao extends SQDIDao {
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
BaseStateTownDao.Find = new DaoQueryDecorators();
BaseStateTownDao.FindOne = new DaoQueryDecorators();
BaseStateTownDao.Search = new DaoQueryDecorators();
BaseStateTownDao.SearchOne = new DaoQueryDecorators();
export class BaseThemeDao extends SQDIDao {
    constructor() {
        super(14);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(14);
    }
}
BaseThemeDao.Find = new DaoQueryDecorators();
BaseThemeDao.FindOne = new DaoQueryDecorators();
BaseThemeDao.Search = new DaoQueryDecorators();
BaseThemeDao.SearchOne = new DaoQueryDecorators();
export class BaseTownDao extends SQDIDao {
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
BaseTownDao.Find = new DaoQueryDecorators();
BaseTownDao.FindOne = new DaoQueryDecorators();
BaseTownDao.Search = new DaoQueryDecorators();
BaseTownDao.SearchOne = new DaoQueryDecorators();
export class BaseTranslationTypeDao extends SQDIDao {
    constructor() {
        super(37);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(37);
    }
}
BaseTranslationTypeDao.Find = new DaoQueryDecorators();
BaseTranslationTypeDao.FindOne = new DaoQueryDecorators();
BaseTranslationTypeDao.Search = new DaoQueryDecorators();
BaseTranslationTypeDao.SearchOne = new DaoQueryDecorators();
export class BaseUserAccountDao extends SQDIDao {
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
BaseUserAccountDao.Find = new DaoQueryDecorators();
BaseUserAccountDao.FindOne = new DaoQueryDecorators();
BaseUserAccountDao.Search = new DaoQueryDecorators();
BaseUserAccountDao.SearchOne = new DaoQueryDecorators();
export class BaseVoteDao extends SQDIDao {
    constructor() {
        super(34);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(34);
    }
}
BaseVoteDao.Find = new DaoQueryDecorators();
BaseVoteDao.FindOne = new DaoQueryDecorators();
BaseVoteDao.Search = new DaoQueryDecorators();
BaseVoteDao.SearchOne = new DaoQueryDecorators();
export class BaseVoteFactorDao extends SQDIDao {
    constructor() {
        super(32);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(32);
    }
}
BaseVoteFactorDao.Find = new DaoQueryDecorators();
BaseVoteFactorDao.FindOne = new DaoQueryDecorators();
BaseVoteFactorDao.Search = new DaoQueryDecorators();
BaseVoteFactorDao.SearchOne = new DaoQueryDecorators();
export class BaseVoteFactorTypeDao extends SQDIDao {
    constructor() {
        super(31);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(31);
    }
}
BaseVoteFactorTypeDao.Find = new DaoQueryDecorators();
BaseVoteFactorTypeDao.FindOne = new DaoQueryDecorators();
BaseVoteFactorTypeDao.Search = new DaoQueryDecorators();
BaseVoteFactorTypeDao.SearchOne = new DaoQueryDecorators();
export class BaseVoteTypeDao extends SQDIDao {
    constructor() {
        super(22);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(22);
    }
}
BaseVoteTypeDao.Find = new DaoQueryDecorators();
BaseVoteTypeDao.FindOne = new DaoQueryDecorators();
BaseVoteTypeDao.Search = new DaoQueryDecorators();
BaseVoteTypeDao.SearchOne = new DaoQueryDecorators();
export class BaseVoteVersionDao extends SQDIDao {
    constructor() {
        super(33);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(33);
    }
}
BaseVoteVersionDao.Find = new DaoQueryDecorators();
BaseVoteVersionDao.FindOne = new DaoQueryDecorators();
BaseVoteVersionDao.Search = new DaoQueryDecorators();
BaseVoteVersionDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map