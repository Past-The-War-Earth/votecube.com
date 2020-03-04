import { Duo } from '@airport/check-in';
import { Q, duoDiSet } from './qSchema';
// Schema Q object Dependency Injection readiness detection Duo
export class SQDIDuo extends Duo {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseActorDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(5);
    }
    constructor() {
        super(5);
    }
}
export class BaseApplicationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(2);
    }
    constructor() {
        super(2);
    }
}
export class BaseContinentDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(13);
    }
    constructor() {
        super(13);
    }
}
export class BaseCountryDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(12);
    }
    constructor() {
        super(12);
    }
}
export class BaseCountryTownDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(11);
    }
    constructor() {
        super(11);
    }
}
export class BaseCountyDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(9);
    }
    constructor() {
        super(9);
    }
}
export class BaseCountyTownDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(6);
    }
    constructor() {
        super(6);
    }
}
export class BaseDesignPatternDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(0);
    }
    constructor() {
        super(0);
    }
}
export class BaseDeviceDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(3);
    }
    constructor() {
        super(3);
    }
}
export class BaseEmojiDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(1);
    }
    constructor() {
        super(1);
    }
}
export class BaseFactorDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(53);
    }
    constructor() {
        super(53);
    }
}
export class BaseFactorOpinionVersionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(42);
    }
    constructor() {
        super(42);
    }
}
export class BaseFactorOpinionVersionRatingDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(41);
    }
    constructor() {
        super(41);
    }
}
export class BaseFactorOpinionVersionTranslationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(40);
    }
    constructor() {
        super(40);
    }
}
export class BaseFactorPositionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(56);
    }
    constructor() {
        super(56);
    }
}
export class BaseFactorSkinDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(51);
    }
    constructor() {
        super(51);
    }
}
export class BaseFactorTranslationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(52);
    }
    constructor() {
        super(52);
    }
}
export class BaseLanguageDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(24);
    }
    constructor() {
        super(24);
    }
}
export class BaseOutcomeDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(49);
    }
    constructor() {
        super(49);
    }
}
export class BaseOutcomeOpinionVersionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(59);
    }
    constructor() {
        super(59);
    }
}
export class BaseOutcomeOpinionVersionTranslationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(60);
    }
    constructor() {
        super(60);
    }
}
export class BaseOutcomeTranslationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(48);
    }
    constructor() {
        super(48);
    }
}
export class BasePollDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(22);
    }
    constructor() {
        super(22);
    }
}
export class BasePollRevisionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(50);
    }
    constructor() {
        super(50);
    }
}
export class BasePollRevisionFactorPositionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(32);
    }
    constructor() {
        super(32);
    }
}
export class BasePollRevisionOpinionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(46);
    }
    constructor() {
        super(46);
    }
}
export class BasePollRevisionOpinionVersionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(45);
    }
    constructor() {
        super(45);
    }
}
export class BasePollRevisionOpinionVersionRatingDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(44);
    }
    constructor() {
        super(44);
    }
}
export class BasePollRevisionOpinionVersionTranslationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(43);
    }
    constructor() {
        super(43);
    }
}
export class BasePollRevisionRatingDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(47);
    }
    constructor() {
        super(47);
    }
}
export class BasePollRevisionTranslationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(31);
    }
    constructor() {
        super(31);
    }
}
export class BasePollRevisionTranslationRatingDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(30);
    }
    constructor() {
        super(30);
    }
}
export class BasePollRunDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(19);
    }
    constructor() {
        super(19);
    }
}
export class BasePollRunContinentDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(14);
    }
    constructor() {
        super(14);
    }
}
export class BasePollRunCountryDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(15);
    }
    constructor() {
        super(15);
    }
}
export class BasePollRunCountyDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(16);
    }
    constructor() {
        super(16);
    }
}
export class BasePollRunStateDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(17);
    }
    constructor() {
        super(17);
    }
}
export class BasePollRunTownDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(18);
    }
    constructor() {
        super(18);
    }
}
export class BasePollTypeDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(20);
    }
    constructor() {
        super(20);
    }
}
export class BasePositionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(55);
    }
    constructor() {
        super(55);
    }
}
export class BasePositionOpinionVersionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(39);
    }
    constructor() {
        super(39);
    }
}
export class BasePositionOpinionVersionRatingDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(38);
    }
    constructor() {
        super(38);
    }
}
export class BasePositionOpinionVersionTranslationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(37);
    }
    constructor() {
        super(37);
    }
}
export class BasePositionTranslationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(54);
    }
    constructor() {
        super(54);
    }
}
export class BaseRatingDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(29);
    }
    constructor() {
        super(29);
    }
}
export class BaseRatingReasonDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(58);
    }
    constructor() {
        super(58);
    }
}
export class BaseRatingReasonTranslationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(57);
    }
    constructor() {
        super(57);
    }
}
export class BaseRatingSettingDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(26);
    }
    constructor() {
        super(26);
    }
}
export class BaseRatingTranslationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(27);
    }
    constructor() {
        super(27);
    }
}
export class BaseRatingTypeDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(28);
    }
    constructor() {
        super(28);
    }
}
export class BaseStateDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(8);
    }
    constructor() {
        super(8);
    }
}
export class BaseStateTownDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(7);
    }
    constructor() {
        super(7);
    }
}
export class BaseThemeDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(21);
    }
    constructor() {
        super(21);
    }
}
export class BaseTownDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(10);
    }
    constructor() {
        super(10);
    }
}
export class BaseTranslationTypeDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(25);
    }
    constructor() {
        super(25);
    }
}
export class BaseUserAccountDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(4);
    }
    constructor() {
        super(4);
    }
}
export class BaseVoteDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(36);
    }
    constructor() {
        super(36);
    }
}
export class BaseVoteFactorDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(34);
    }
    constructor() {
        super(34);
    }
}
export class BaseVoteFactorTypeDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(33);
    }
    constructor() {
        super(33);
    }
}
export class BaseVoteRevisionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(35);
    }
    constructor() {
        super(35);
    }
}
export class BaseVoteTypeDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(23);
    }
    constructor() {
        super(23);
    }
}
//# sourceMappingURL=baseDuos.js.map