import { QSchema as AirportQSchema } from '@airport/air-control';
import { DbSchema, EntityId } from '@airport/ground-control';
import { QCategory } from './qcategory';
import { QFactor } from './factor/qfactor';
import { QFactorPosition } from './factor/position/qfactorposition';
import { QOutcome } from './situation/qoutcome';
import { QPosition } from './factor/position/qposition';
import { QSituation } from './situation/qsituation';
import { QSituationFactorPosition } from './situation/qsituationfactorposition';
export interface LocalQSchema extends AirportQSchema {
    db: DbSchema;
    Category: QCategory;
    Factor: QFactor;
    FactorPosition: QFactorPosition;
    Outcome: QOutcome;
    Position: QPosition;
    Situation: QSituation;
    SituationFactorPosition: QSituationFactorPosition;
}
export declare const Q_SCHEMA: LocalQSchema;
export declare const Q: LocalQSchema;
export declare function diSet(dbEntityId: EntityId): boolean;
export declare function duoDiSet(dbEntityId: EntityId): boolean;
//# sourceMappingURL=qSchema.d.ts.map