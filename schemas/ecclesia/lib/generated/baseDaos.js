"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_in_1 = require("@airport/check-in");
const qSchema_1 = require("./qSchema");
// Schema Q object Dependency Injection readiness detection Dao
class SQDIDao extends check_in_1.Dao {
    constructor(dbEntityId) {
        super(dbEntityId, qSchema_1.Q);
    }
}
exports.SQDIDao = SQDIDao;
class BaseActorDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(5);
    }
    constructor() {
        super(5);
    }
}
exports.BaseActorDao = BaseActorDao;
class BaseApplicationDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(2);
    }
    constructor() {
        super(2);
    }
}
exports.BaseApplicationDao = BaseApplicationDao;
class BaseContinentDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(13);
    }
    constructor() {
        super(13);
    }
}
exports.BaseContinentDao = BaseContinentDao;
class BaseCountryDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(12);
    }
    constructor() {
        super(12);
    }
}
exports.BaseCountryDao = BaseCountryDao;
class BaseCountryTownDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(11);
    }
    constructor() {
        super(11);
    }
}
exports.BaseCountryTownDao = BaseCountryTownDao;
class BaseCountyDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(9);
    }
    constructor() {
        super(9);
    }
}
exports.BaseCountyDao = BaseCountyDao;
class BaseCountyTownDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(6);
    }
    constructor() {
        super(6);
    }
}
exports.BaseCountyTownDao = BaseCountyTownDao;
class BaseDesignPatternDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(0);
    }
    constructor() {
        super(0);
    }
}
exports.BaseDesignPatternDao = BaseDesignPatternDao;
class BaseDeviceDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(3);
    }
    constructor() {
        super(3);
    }
}
exports.BaseDeviceDao = BaseDeviceDao;
class BaseEmojiDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(1);
    }
    constructor() {
        super(1);
    }
}
exports.BaseEmojiDao = BaseEmojiDao;
class BaseFactorDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(52);
    }
    constructor() {
        super(52);
    }
}
exports.BaseFactorDao = BaseFactorDao;
class BaseFactorOpinionVersionDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(29);
    }
    constructor() {
        super(29);
    }
}
exports.BaseFactorOpinionVersionDao = BaseFactorOpinionVersionDao;
class BaseFactorOpinionVersionTranslationDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(28);
    }
    constructor() {
        super(28);
    }
}
exports.BaseFactorOpinionVersionTranslationDao = BaseFactorOpinionVersionTranslationDao;
class BaseFactorPositionDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(55);
    }
    constructor() {
        super(55);
    }
}
exports.BaseFactorPositionDao = BaseFactorPositionDao;
class BaseFactorTranslationDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(51);
    }
    constructor() {
        super(51);
    }
}
exports.BaseFactorTranslationDao = BaseFactorTranslationDao;
class BaseLanguageDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(27);
    }
    constructor() {
        super(27);
    }
}
exports.BaseLanguageDao = BaseLanguageDao;
class BaseOutcomeDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(32);
    }
    constructor() {
        super(32);
    }
}
exports.BaseOutcomeDao = BaseOutcomeDao;
class BaseOutcomeOpinionVersionDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(34);
    }
    constructor() {
        super(34);
    }
}
exports.BaseOutcomeOpinionVersionDao = BaseOutcomeOpinionVersionDao;
class BaseOutcomeOpinionVersionTranslationDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(33);
    }
    constructor() {
        super(33);
    }
}
exports.BaseOutcomeOpinionVersionTranslationDao = BaseOutcomeOpinionVersionTranslationDao;
class BaseOutcomeTranslationDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(31);
    }
    constructor() {
        super(31);
    }
}
exports.BaseOutcomeTranslationDao = BaseOutcomeTranslationDao;
class BasePollDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(46);
    }
    constructor() {
        super(46);
    }
}
exports.BasePollDao = BasePollDao;
class BasePollRevisionDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(50);
    }
    constructor() {
        super(50);
    }
}
exports.BasePollRevisionDao = BasePollRevisionDao;
class BasePollRevisionFactorPositionDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(21);
    }
    constructor() {
        super(21);
    }
}
exports.BasePollRevisionFactorPositionDao = BasePollRevisionFactorPositionDao;
class BasePollRevisionOpinionDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(43);
    }
    constructor() {
        super(43);
    }
}
exports.BasePollRevisionOpinionDao = BasePollRevisionOpinionDao;
class BasePollRevisionOpinionRatingDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(42);
    }
    constructor() {
        super(42);
    }
}
exports.BasePollRevisionOpinionRatingDao = BasePollRevisionOpinionRatingDao;
class BasePollRevisionOpinionVersionDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(36);
    }
    constructor() {
        super(36);
    }
}
exports.BasePollRevisionOpinionVersionDao = BasePollRevisionOpinionVersionDao;
class BasePollRevisionOpinionVersionTranslationDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(35);
    }
    constructor() {
        super(35);
    }
}
exports.BasePollRevisionOpinionVersionTranslationDao = BasePollRevisionOpinionVersionTranslationDao;
class BasePollRevisionRatingDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(47);
    }
    constructor() {
        super(47);
    }
}
exports.BasePollRevisionRatingDao = BasePollRevisionRatingDao;
class BasePollRevisionTranslationDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(49);
    }
    constructor() {
        super(49);
    }
}
exports.BasePollRevisionTranslationDao = BasePollRevisionTranslationDao;
class BasePollRevisionTranslationRatingDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(48);
    }
    constructor() {
        super(48);
    }
}
exports.BasePollRevisionTranslationRatingDao = BasePollRevisionTranslationRatingDao;
class BasePollRunDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(19);
    }
    constructor() {
        super(19);
    }
}
exports.BasePollRunDao = BasePollRunDao;
class BasePollRunContinentDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(14);
    }
    constructor() {
        super(14);
    }
}
exports.BasePollRunContinentDao = BasePollRunContinentDao;
class BasePollRunCountryDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(15);
    }
    constructor() {
        super(15);
    }
}
exports.BasePollRunCountryDao = BasePollRunCountryDao;
class BasePollRunCountyDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(16);
    }
    constructor() {
        super(16);
    }
}
exports.BasePollRunCountyDao = BasePollRunCountyDao;
class BasePollRunStateDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(17);
    }
    constructor() {
        super(17);
    }
}
exports.BasePollRunStateDao = BasePollRunStateDao;
class BasePollRunTownDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(18);
    }
    constructor() {
        super(18);
    }
}
exports.BasePollRunTownDao = BasePollRunTownDao;
class BasePollTypeDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(44);
    }
    constructor() {
        super(44);
    }
}
exports.BasePollTypeDao = BasePollTypeDao;
class BasePositionDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(54);
    }
    constructor() {
        super(54);
    }
}
exports.BasePositionDao = BasePositionDao;
class BasePositionOpinionVersionDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(38);
    }
    constructor() {
        super(38);
    }
}
exports.BasePositionOpinionVersionDao = BasePositionOpinionVersionDao;
class BasePositionOpinionVersionTranslationDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(37);
    }
    constructor() {
        super(37);
    }
}
exports.BasePositionOpinionVersionTranslationDao = BasePositionOpinionVersionTranslationDao;
class BasePositionTranslationDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(53);
    }
    constructor() {
        super(53);
    }
}
exports.BasePositionTranslationDao = BasePositionTranslationDao;
class BaseRatingDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(41);
    }
    constructor() {
        super(41);
    }
}
exports.BaseRatingDao = BaseRatingDao;
class BaseRatingSettingDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(39);
    }
    constructor() {
        super(39);
    }
}
exports.BaseRatingSettingDao = BaseRatingSettingDao;
class BaseRatingTypeDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(40);
    }
    constructor() {
        super(40);
    }
}
exports.BaseRatingTypeDao = BaseRatingTypeDao;
class BaseSkinDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(20);
    }
    constructor() {
        super(20);
    }
}
exports.BaseSkinDao = BaseSkinDao;
class BaseStateDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(8);
    }
    constructor() {
        super(8);
    }
}
exports.BaseStateDao = BaseStateDao;
class BaseStateTownDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(7);
    }
    constructor() {
        super(7);
    }
}
exports.BaseStateTownDao = BaseStateTownDao;
class BaseThemeDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(45);
    }
    constructor() {
        super(45);
    }
}
exports.BaseThemeDao = BaseThemeDao;
class BaseTownDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(10);
    }
    constructor() {
        super(10);
    }
}
exports.BaseTownDao = BaseTownDao;
class BaseTranslationTypeDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(30);
    }
    constructor() {
        super(30);
    }
}
exports.BaseTranslationTypeDao = BaseTranslationTypeDao;
class BaseUserAccountDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(4);
    }
    constructor() {
        super(4);
    }
}
exports.BaseUserAccountDao = BaseUserAccountDao;
class BaseVoteDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(26);
    }
    constructor() {
        super(26);
    }
}
exports.BaseVoteDao = BaseVoteDao;
class BaseVoteFactorDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(23);
    }
    constructor() {
        super(23);
    }
}
exports.BaseVoteFactorDao = BaseVoteFactorDao;
class BaseVoteFactorTypeDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(22);
    }
    constructor() {
        super(22);
    }
}
exports.BaseVoteFactorTypeDao = BaseVoteFactorTypeDao;
class BaseVoteTypeDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(25);
    }
    constructor() {
        super(25);
    }
}
exports.BaseVoteTypeDao = BaseVoteTypeDao;
class BaseVoteVersionDao extends SQDIDao {
    static diSet() {
        return qSchema_1.duoDiSet(24);
    }
    constructor() {
        super(24);
    }
}
exports.BaseVoteVersionDao = BaseVoteVersionDao;
//# sourceMappingURL=baseDaos.js.map