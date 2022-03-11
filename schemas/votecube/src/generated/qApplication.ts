import {
	AIRPORT_DATABASE,
	QApplication as AirportQApplication
}                      from '@airport/air-control'
import {
	diSet as dS,
	duoDiSet as ddS
}                      from '@airport/check-in'
import {DI}            from '@airport/di'
import {
	DbApplication,
	EntityId,
	getFullApplicationName
}                      from '@airport/ground-control';
import { QAgreement } from './agreement/qagreement';
import { QAgreementFactor } from './agreement/qagreementfactor';
import { QFactor } from './factor/qfactor';
import { QIdea } from './idea/qidea';
import { QIdeaFactorPosition } from './idea/qideafactorposition';
import { QIdeaLabel } from './idea/qidealabel';
import { QLabel } from './qlabel';
import { QOutcome } from './idea/qoutcome';
import { QPosition } from './factor/qposition';
import { QUserAccount } from './quseraccount';
import {
  Agreement,
  AgreementFactor,
  Factor,
  Idea,
  IdeaFactorPosition,
  IdeaLabel,
  Label,
  Outcome,
  Position,
  UserAccount
} from '../ddl/ddl';

export interface LocalQApplication extends AirportQApplication {

  db: DbApplication;

	Agreement: QAgreement;
	AgreementFactor: QAgreementFactor;
	Factor: QFactor;
	Idea: QIdea;
	IdeaFactorPosition: QIdeaFactorPosition;
	IdeaLabel: QIdeaLabel;
	Label: QLabel;
	Outcome: QOutcome;
	Position: QPosition;
	UserAccount: QUserAccount;

}

const __constructors__ = {
	Agreement: Agreement,
	AgreementFactor: AgreementFactor,
	Factor: Factor,
	Idea: Idea,
	IdeaFactorPosition: IdeaFactorPosition,
	IdeaLabel: IdeaLabel,
	Label: Label,
	Outcome: Outcome,
	Position: Position,
	UserAccount: UserAccount
};

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
  domain: 'localhost:8000',
  name: '@votecube/votecube'
};
export const Q: LocalQApplication = Q_APPLICATION

export function diSet(
	dbEntityId: EntityId
): boolean {
	return dS(Q.__dbApplication__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: EntityId
): boolean {
	return ddS(Q.__dbApplication__, dbEntityId)
}

DI.db().eventuallyGet(AIRPORT_DATABASE).then((
	airDb
) => {
	airDb.QM[getFullApplicationName(Q_APPLICATION)] = Q
})
