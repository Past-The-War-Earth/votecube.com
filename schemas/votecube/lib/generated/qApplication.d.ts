import { QApplication as AirportQApplication } from '@airport/air-control';
import { DbApplication, EntityId } from '@airport/ground-control';
import { QAgreement } from './agreement/qagreement';
import { QAgreementFactor } from './agreement/qagreementfactor';
import { QFactor } from './factor/qfactor';
import { QIdea } from './idea/qidea';
import { QIdeaLabel } from './idea/qidealabel';
import { QLabel } from './qlabel';
import { QOutcome } from './idea/qoutcome';
import { QPosition } from './factor/qposition';
import { QReason } from './idea/qreason';
import { QUserAccount } from './quseraccount';
export interface LocalQApplication extends AirportQApplication {
    db: DbApplication;
    Agreement: QAgreement;
    AgreementFactor: QAgreementFactor;
    Factor: QFactor;
    Idea: QIdea;
    IdeaLabel: QIdeaLabel;
    Label: QLabel;
    Outcome: QOutcome;
    Position: QPosition;
    Reason: QReason;
    UserAccount: QUserAccount;
}
export declare const Q_APPLICATION: LocalQApplication;
export declare const Q: LocalQApplication;
export declare function diSet(dbEntityId: EntityId): boolean;
export declare function duoDiSet(dbEntityId: EntityId): boolean;
//# sourceMappingURL=qApplication.d.ts.map