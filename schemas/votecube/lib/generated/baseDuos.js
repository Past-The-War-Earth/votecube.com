import { Duo, } from '@airport/check-in';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Duo
export class SQDIDuo extends Duo {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseAgreementDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(4);
    }
    constructor() {
        super(4);
    }
}
export class BaseAgreementFactorDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(3);
    }
    constructor() {
        super(3);
    }
}
export class BaseFactorDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(1);
    }
    constructor() {
        super(1);
    }
}
export class BaseIdeaDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(8);
    }
    constructor() {
        super(8);
    }
}
export class BaseIdeaFactorPositionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(5);
    }
    constructor() {
        super(5);
    }
}
export class BaseIdeaLabelDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(7);
    }
    constructor() {
        super(7);
    }
}
export class BaseLabelDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(6);
    }
    constructor() {
        super(6);
    }
}
export class BaseOutcomeDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(2);
    }
    constructor() {
        super(2);
    }
}
export class BasePositionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(0);
    }
    constructor() {
        super(0);
    }
}
export class BaseUserAccountDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(9);
    }
    constructor() {
        super(9);
    }
}
//# sourceMappingURL=baseDuos.js.map