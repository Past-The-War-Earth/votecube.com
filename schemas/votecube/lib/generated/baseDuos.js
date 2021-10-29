import { Duo, } from '@airport/check-in';
import { Q, duoDiSet, } from './qSchema';
// Schema Q object Dependency Injection readiness detection Duo
export class SQDIDuo extends Duo {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseCategoryDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(0);
    }
    constructor() {
        super(0);
    }
}
export class BaseFactorDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(3);
    }
    constructor() {
        super(3);
    }
}
export class BaseFactorPositionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(2);
    }
    constructor() {
        super(2);
    }
}
export class BaseOutcomeDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(4);
    }
    constructor() {
        super(4);
    }
}
export class BasePositionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(1);
    }
    constructor() {
        super(1);
    }
}
export class BaseSituationDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(6);
    }
    constructor() {
        super(6);
    }
}
export class BaseSituationFactorPositionDuo extends SQDIDuo {
    static diSet() {
        return duoDiSet(5);
    }
    constructor() {
        super(5);
    }
}
//# sourceMappingURL=baseDuos.js.map