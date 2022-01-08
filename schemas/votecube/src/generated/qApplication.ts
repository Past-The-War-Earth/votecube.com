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
import {
  Factor,
  Label,
  Outcome,
  Position,
  Situation,
  SituationFactorPosition,
  SituationLabel,
  Solution,
  SolutionFactor,
  UserAccount
} from '../ddl/ddl';

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

const __constructors__ = {
	Factor: Factor,
	Label: Label,
	Outcome: Outcome,
	Position: Position,
	Situation: Situation,
	SituationFactorPosition: SituationFactorPosition,
	SituationLabel: SituationLabel,
	Solution: Solution,
	SolutionFactor: SolutionFactor,
	UserAccount: UserAccount
};

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
  domain: 'votecube.com',
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
