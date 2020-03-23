"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_in_1 = require("@airport/check-in");
const qSchema_1 = require("./qSchema");
// Schema Q object Dependency Injection readiness detection Duo
class SQDIDuo extends check_in_1.Duo {
    constructor(dbEntityId) {
        super(dbEntityId, qSchema_1.Q);
    }
}
exports.SQDIDuo = SQDIDuo;
class BaseActorDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(5);
    }
    constructor() {
        super(5);
    }
}
exports.BaseActorDuo = BaseActorDuo;
class BaseApplicationDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(2);
    }
    constructor() {
        super(2);
    }
}
exports.BaseApplicationDuo = BaseApplicationDuo;
class BaseContinentDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(13);
    }
    constructor() {
        super(13);
    }
}
exports.BaseContinentDuo = BaseContinentDuo;
class BaseCountryDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(12);
    }
    constructor() {
        super(12);
    }
}
exports.BaseCountryDuo = BaseCountryDuo;
class BaseCountryTownDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(11);
    }
    constructor() {
        super(11);
    }
}
exports.BaseCountryTownDuo = BaseCountryTownDuo;
class BaseCountyDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(9);
    }
    constructor() {
        super(9);
    }
}
exports.BaseCountyDuo = BaseCountyDuo;
class BaseCountyTownDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(6);
    }
    constructor() {
        super(6);
    }
}
exports.BaseCountyTownDuo = BaseCountyTownDuo;
class BaseDesignPatternDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(0);
    }
    constructor() {
        super(0);
    }
}
exports.BaseDesignPatternDuo = BaseDesignPatternDuo;
class BaseDeviceDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(3);
    }
    constructor() {
        super(3);
    }
}
exports.BaseDeviceDuo = BaseDeviceDuo;
class BaseEmojiDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(1);
    }
    constructor() {
        super(1);
    }
}
exports.BaseEmojiDuo = BaseEmojiDuo;
class BaseFactorDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(52);
    }
    constructor() {
        super(52);
    }
}
exports.BaseFactorDuo = BaseFactorDuo;
class BaseFactorOpinionVersionDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(29);
    }
    constructor() {
        super(29);
    }
}
exports.BaseFactorOpinionVersionDuo = BaseFactorOpinionVersionDuo;
class BaseFactorOpinionVersionTranslationDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(28);
    }
    constructor() {
        super(28);
    }
}
exports.BaseFactorOpinionVersionTranslationDuo = BaseFactorOpinionVersionTranslationDuo;
class BaseFactorPositionDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(55);
    }
    constructor() {
        super(55);
    }
}
exports.BaseFactorPositionDuo = BaseFactorPositionDuo;
class BaseFactorTranslationDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(51);
    }
    constructor() {
        super(51);
    }
}
exports.BaseFactorTranslationDuo = BaseFactorTranslationDuo;
class BaseLanguageDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(27);
    }
    constructor() {
        super(27);
    }
}
exports.BaseLanguageDuo = BaseLanguageDuo;
class BaseOutcomeDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(32);
    }
    constructor() {
        super(32);
    }
}
exports.BaseOutcomeDuo = BaseOutcomeDuo;
class BaseOutcomeOpinionVersionDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(34);
    }
    constructor() {
        super(34);
    }
}
exports.BaseOutcomeOpinionVersionDuo = BaseOutcomeOpinionVersionDuo;
class BaseOutcomeOpinionVersionTranslationDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(33);
    }
    constructor() {
        super(33);
    }
}
exports.BaseOutcomeOpinionVersionTranslationDuo = BaseOutcomeOpinionVersionTranslationDuo;
class BaseOutcomeTranslationDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(31);
    }
    constructor() {
        super(31);
    }
}
exports.BaseOutcomeTranslationDuo = BaseOutcomeTranslationDuo;
class BasePollDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(46);
    }
    constructor() {
        super(46);
    }
}
exports.BasePollDuo = BasePollDuo;
class BasePollRevisionDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(50);
    }
    constructor() {
        super(50);
    }
}
exports.BasePollRevisionDuo = BasePollRevisionDuo;
class BasePollRevisionFactorPositionDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(21);
    }
    constructor() {
        super(21);
    }
}
exports.BasePollRevisionFactorPositionDuo = BasePollRevisionFactorPositionDuo;
class BasePollRevisionOpinionDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(43);
    }
    constructor() {
        super(43);
    }
}
exports.BasePollRevisionOpinionDuo = BasePollRevisionOpinionDuo;
class BasePollRevisionOpinionRatingDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(42);
    }
    constructor() {
        super(42);
    }
}
exports.BasePollRevisionOpinionRatingDuo = BasePollRevisionOpinionRatingDuo;
class BasePollRevisionOpinionVersionDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(36);
    }
    constructor() {
        super(36);
    }
}
exports.BasePollRevisionOpinionVersionDuo = BasePollRevisionOpinionVersionDuo;
class BasePollRevisionOpinionVersionTranslationDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(35);
    }
    constructor() {
        super(35);
    }
}
exports.BasePollRevisionOpinionVersionTranslationDuo = BasePollRevisionOpinionVersionTranslationDuo;
class BasePollRevisionRatingDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(47);
    }
    constructor() {
        super(47);
    }
}
exports.BasePollRevisionRatingDuo = BasePollRevisionRatingDuo;
class BasePollRevisionTranslationDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(49);
    }
    constructor() {
        super(49);
    }
}
exports.BasePollRevisionTranslationDuo = BasePollRevisionTranslationDuo;
class BasePollRevisionTranslationRatingDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(48);
    }
    constructor() {
        super(48);
    }
}
exports.BasePollRevisionTranslationRatingDuo = BasePollRevisionTranslationRatingDuo;
class BasePollRunDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(19);
    }
    constructor() {
        super(19);
    }
}
exports.BasePollRunDuo = BasePollRunDuo;
class BasePollRunContinentDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(14);
    }
    constructor() {
        super(14);
    }
}
exports.BasePollRunContinentDuo = BasePollRunContinentDuo;
class BasePollRunCountryDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(15);
    }
    constructor() {
        super(15);
    }
}
exports.BasePollRunCountryDuo = BasePollRunCountryDuo;
class BasePollRunCountyDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(16);
    }
    constructor() {
        super(16);
    }
}
exports.BasePollRunCountyDuo = BasePollRunCountyDuo;
class BasePollRunStateDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(17);
    }
    constructor() {
        super(17);
    }
}
exports.BasePollRunStateDuo = BasePollRunStateDuo;
class BasePollRunTownDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(18);
    }
    constructor() {
        super(18);
    }
}
exports.BasePollRunTownDuo = BasePollRunTownDuo;
class BasePollTypeDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(44);
    }
    constructor() {
        super(44);
    }
}
exports.BasePollTypeDuo = BasePollTypeDuo;
class BasePositionDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(54);
    }
    constructor() {
        super(54);
    }
}
exports.BasePositionDuo = BasePositionDuo;
class BasePositionOpinionVersionDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(38);
    }
    constructor() {
        super(38);
    }
}
exports.BasePositionOpinionVersionDuo = BasePositionOpinionVersionDuo;
class BasePositionOpinionVersionTranslationDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(37);
    }
    constructor() {
        super(37);
    }
}
exports.BasePositionOpinionVersionTranslationDuo = BasePositionOpinionVersionTranslationDuo;
class BasePositionTranslationDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(53);
    }
    constructor() {
        super(53);
    }
}
exports.BasePositionTranslationDuo = BasePositionTranslationDuo;
class BaseRatingDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(41);
    }
    constructor() {
        super(41);
    }
}
exports.BaseRatingDuo = BaseRatingDuo;
class BaseRatingSettingDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(39);
    }
    constructor() {
        super(39);
    }
}
exports.BaseRatingSettingDuo = BaseRatingSettingDuo;
class BaseRatingTypeDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(40);
    }
    constructor() {
        super(40);
    }
}
exports.BaseRatingTypeDuo = BaseRatingTypeDuo;
class BaseSkinDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(20);
    }
    constructor() {
        super(20);
    }
}
exports.BaseSkinDuo = BaseSkinDuo;
class BaseStateDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(8);
    }
    constructor() {
        super(8);
    }
}
exports.BaseStateDuo = BaseStateDuo;
class BaseStateTownDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(7);
    }
    constructor() {
        super(7);
    }
}
exports.BaseStateTownDuo = BaseStateTownDuo;
class BaseThemeDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(45);
    }
    constructor() {
        super(45);
    }
}
exports.BaseThemeDuo = BaseThemeDuo;
class BaseTownDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(10);
    }
    constructor() {
        super(10);
    }
}
exports.BaseTownDuo = BaseTownDuo;
class BaseTranslationTypeDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(30);
    }
    constructor() {
        super(30);
    }
}
exports.BaseTranslationTypeDuo = BaseTranslationTypeDuo;
class BaseUserAccountDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(4);
    }
    constructor() {
        super(4);
    }
}
exports.BaseUserAccountDuo = BaseUserAccountDuo;
class BaseVoteDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(26);
    }
    constructor() {
        super(26);
    }
}
exports.BaseVoteDuo = BaseVoteDuo;
class BaseVoteFactorDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(23);
    }
    constructor() {
        super(23);
    }
}
exports.BaseVoteFactorDuo = BaseVoteFactorDuo;
class BaseVoteFactorTypeDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(22);
    }
    constructor() {
        super(22);
    }
}
exports.BaseVoteFactorTypeDuo = BaseVoteFactorTypeDuo;
class BaseVoteTypeDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(25);
    }
    constructor() {
        super(25);
    }
}
exports.BaseVoteTypeDuo = BaseVoteTypeDuo;
class BaseVoteVersionDuo extends SQDIDuo {
    static diSet() {
        return qSchema_1.duoDiSet(24);
    }
    constructor() {
        super(24);
    }
}
exports.BaseVoteVersionDuo = BaseVoteVersionDuo;
//# sourceMappingURL=baseDuos.js.map