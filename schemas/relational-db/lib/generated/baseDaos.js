import { Dao } from '@airport/check-in';
import { Q, duoDiSet } from './qSchema';
// Schema Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseActorDao extends SQDIDao {
    static diSet() {
        return duoDiSet(5);
    }
    constructor() {
        super(5);
    }
}
export class BaseApplicationDao extends SQDIDao {
    static diSet() {
        return duoDiSet(2);
    }
    constructor() {
        super(2);
    }
}
export class BaseContinentDao extends SQDIDao {
    static diSet() {
        return duoDiSet(13);
    }
    constructor() {
        super(13);
    }
}
export class BaseCountryDao extends SQDIDao {
    static diSet() {
        return duoDiSet(12);
    }
    constructor() {
        super(12);
    }
}
export class BaseCountryTownDao extends SQDIDao {
    static diSet() {
        return duoDiSet(11);
    }
    constructor() {
        super(11);
    }
}
export class BaseCountyDao extends SQDIDao {
    static diSet() {
        return duoDiSet(9);
    }
    constructor() {
        super(9);
    }
}
export class BaseCountyTownDao extends SQDIDao {
    static diSet() {
        return duoDiSet(6);
    }
    constructor() {
        super(6);
    }
}
export class BaseDesignPatternDao extends SQDIDao {
    static diSet() {
        return duoDiSet(0);
    }
    constructor() {
        super(0);
    }
}
export class BaseDeviceDao extends SQDIDao {
    static diSet() {
        return duoDiSet(3);
    }
    constructor() {
        super(3);
    }
}
export class BaseEmojiDao extends SQDIDao {
    static diSet() {
        return duoDiSet(1);
    }
    constructor() {
        super(1);
    }
}
export class BaseFactorDao extends SQDIDao {
    static diSet() {
        return duoDiSet(52);
    }
    constructor() {
        super(52);
    }
}
export class BaseFactorOpinionVersionDao extends SQDIDao {
    static diSet() {
        return duoDiSet(37);
    }
    constructor() {
        super(37);
    }
}
export class BaseFactorOpinionVersionTranslationDao extends SQDIDao {
    static diSet() {
        return duoDiSet(36);
    }
    constructor() {
        super(36);
    }
}
export class BaseFactorPositionDao extends SQDIDao {
    static diSet() {
        return duoDiSet(55);
    }
    constructor() {
        super(55);
    }
}
export class BaseFactorSkinDao extends SQDIDao {
    static diSet() {
        return duoDiSet(50);
    }
    constructor() {
        super(50);
    }
}
export class BaseFactorTranslationDao extends SQDIDao {
    static diSet() {
        return duoDiSet(51);
    }
    constructor() {
        super(51);
    }
}
export class BaseLanguageDao extends SQDIDao {
    static diSet() {
        return duoDiSet(24);
    }
    constructor() {
        super(24);
    }
}
export class BaseOutcomeDao extends SQDIDao {
    static diSet() {
        return duoDiSet(39);
    }
    constructor() {
        super(39);
    }
}
export class BaseOutcomeOpinionVersionDao extends SQDIDao {
    static diSet() {
        return duoDiSet(41);
    }
    constructor() {
        super(41);
    }
}
export class BaseOutcomeOpinionVersionTranslationDao extends SQDIDao {
    static diSet() {
        return duoDiSet(40);
    }
    constructor() {
        super(40);
    }
}
export class BaseOutcomeTranslationDao extends SQDIDao {
    static diSet() {
        return duoDiSet(38);
    }
    constructor() {
        super(38);
    }
}
export class BasePollDao extends SQDIDao {
    static diSet() {
        return duoDiSet(22);
    }
    constructor() {
        super(22);
    }
}
export class BasePollRevisionDao extends SQDIDao {
    static diSet() {
        return duoDiSet(49);
    }
    constructor() {
        super(49);
    }
}
export class BasePollRevisionFactorPositionDao extends SQDIDao {
    static diSet() {
        return duoDiSet(31);
    }
    constructor() {
        super(31);
    }
}
export class BasePollRevisionOpinionDao extends SQDIDao {
    static diSet() {
        return duoDiSet(47);
    }
    constructor() {
        super(47);
    }
}
export class BasePollRevisionOpinionRatingDao extends SQDIDao {
    static diSet() {
        return duoDiSet(46);
    }
    constructor() {
        super(46);
    }
}
export class BasePollRevisionOpinionVersionDao extends SQDIDao {
    static diSet() {
        return duoDiSet(43);
    }
    constructor() {
        super(43);
    }
}
export class BasePollRevisionOpinionVersionTranslationDao extends SQDIDao {
    static diSet() {
        return duoDiSet(42);
    }
    constructor() {
        super(42);
    }
}
export class BasePollRevisionRatingDao extends SQDIDao {
    static diSet() {
        return duoDiSet(48);
    }
    constructor() {
        super(48);
    }
}
export class BasePollRevisionTranslationDao extends SQDIDao {
    static diSet() {
        return duoDiSet(30);
    }
    constructor() {
        super(30);
    }
}
export class BasePollRevisionTranslationRatingDao extends SQDIDao {
    static diSet() {
        return duoDiSet(29);
    }
    constructor() {
        super(29);
    }
}
export class BasePollRunDao extends SQDIDao {
    static diSet() {
        return duoDiSet(19);
    }
    constructor() {
        super(19);
    }
}
export class BasePollRunContinentDao extends SQDIDao {
    static diSet() {
        return duoDiSet(14);
    }
    constructor() {
        super(14);
    }
}
export class BasePollRunCountryDao extends SQDIDao {
    static diSet() {
        return duoDiSet(15);
    }
    constructor() {
        super(15);
    }
}
export class BasePollRunCountyDao extends SQDIDao {
    static diSet() {
        return duoDiSet(16);
    }
    constructor() {
        super(16);
    }
}
export class BasePollRunStateDao extends SQDIDao {
    static diSet() {
        return duoDiSet(17);
    }
    constructor() {
        super(17);
    }
}
export class BasePollRunTownDao extends SQDIDao {
    static diSet() {
        return duoDiSet(18);
    }
    constructor() {
        super(18);
    }
}
export class BasePollTypeDao extends SQDIDao {
    static diSet() {
        return duoDiSet(20);
    }
    constructor() {
        super(20);
    }
}
export class BasePositionDao extends SQDIDao {
    static diSet() {
        return duoDiSet(54);
    }
    constructor() {
        super(54);
    }
}
export class BasePositionOpinionVersionDao extends SQDIDao {
    static diSet() {
        return duoDiSet(45);
    }
    constructor() {
        super(45);
    }
}
export class BasePositionOpinionVersionTranslationDao extends SQDIDao {
    static diSet() {
        return duoDiSet(44);
    }
    constructor() {
        super(44);
    }
}
export class BasePositionTranslationDao extends SQDIDao {
    static diSet() {
        return duoDiSet(53);
    }
    constructor() {
        super(53);
    }
}
export class BaseRatingDao extends SQDIDao {
    static diSet() {
        return duoDiSet(28);
    }
    constructor() {
        super(28);
    }
}
export class BaseRatingSettingDao extends SQDIDao {
    static diSet() {
        return duoDiSet(26);
    }
    constructor() {
        super(26);
    }
}
export class BaseRatingTypeDao extends SQDIDao {
    static diSet() {
        return duoDiSet(27);
    }
    constructor() {
        super(27);
    }
}
export class BaseStateDao extends SQDIDao {
    static diSet() {
        return duoDiSet(8);
    }
    constructor() {
        super(8);
    }
}
export class BaseStateTownDao extends SQDIDao {
    static diSet() {
        return duoDiSet(7);
    }
    constructor() {
        super(7);
    }
}
export class BaseThemeDao extends SQDIDao {
    static diSet() {
        return duoDiSet(21);
    }
    constructor() {
        super(21);
    }
}
export class BaseTownDao extends SQDIDao {
    static diSet() {
        return duoDiSet(10);
    }
    constructor() {
        super(10);
    }
}
export class BaseTranslationTypeDao extends SQDIDao {
    static diSet() {
        return duoDiSet(25);
    }
    constructor() {
        super(25);
    }
}
export class BaseUserAccountDao extends SQDIDao {
    static diSet() {
        return duoDiSet(4);
    }
    constructor() {
        super(4);
    }
}
export class BaseVoteDao extends SQDIDao {
    static diSet() {
        return duoDiSet(35);
    }
    constructor() {
        super(35);
    }
}
export class BaseVoteFactorDao extends SQDIDao {
    static diSet() {
        return duoDiSet(33);
    }
    constructor() {
        super(33);
    }
}
export class BaseVoteFactorTypeDao extends SQDIDao {
    static diSet() {
        return duoDiSet(32);
    }
    constructor() {
        super(32);
    }
}
export class BaseVoteRevisionDao extends SQDIDao {
    static diSet() {
        return duoDiSet(34);
    }
    constructor() {
        super(34);
    }
}
export class BaseVoteTypeDao extends SQDIDao {
    static diSet() {
        return duoDiSet(23);
    }
    constructor() {
        super(23);
    }
}
//# sourceMappingURL=baseDaos.js.map