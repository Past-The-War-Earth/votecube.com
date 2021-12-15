import { QApplication as AirportQApplication } from '@airport/air-control';
import { DbApplication, EntityId } from '@airport/ground-control';
import { QFactor } from './factor/qfactor';
import { QLabel } from './qlabel';
import { QOutcome } from './situation/qoutcome';
import { QPosition } from './factor/qposition';
import { QSituation } from './situation/qsituation';
import { QSituationFactorPosition } from './situation/qsituationfactorposition';
import { QSituationLabel } from './situation/qsituationlabel';
import { QSolution } from './solution/qsolution';
import { QSolutionFactor } from './solution/qsolutionfactor';
import { QUserAccount } from './quseraccount';
export interface LocalQApplication extends AirportQApplication {
    db: DbApplication;
    Factor: QFactor;
    Label: QLabel;
    Outcome: QOutcome;
    Position: QPosition;
    Situation: QSituation;
    SituationFactorPosition: QSituationFactorPosition;
    SituationLabel: QSituationLabel;
    Solution: QSolution;
    SolutionFactor: QSolutionFactor;
    UserAccount: QUserAccount;
}
export declare const Q_APPLICATION: LocalQApplication;
export declare const Q: LocalQApplication;
export declare function diSet(dbEntityId: EntityId): boolean;
export declare function duoDiSet(dbEntityId: EntityId): boolean;
//# sourceMappingURL=qApplication.d.ts.map