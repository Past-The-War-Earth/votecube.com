import {
	AIRPORT_DATABASE,
	QSchema as AirportQSchema
}                      from '@airport/air-control'
import {
	diSet as dS,
	duoDiSet as ddS
}                      from '@airport/check-in'
import {DI}            from '@airport/di'
import {
	DbSchema,
	EntityId,
	getSchemaName
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
import {
  Factor,
  Label,
  Outcome,
  Position,
  Situation,
  SituationFactorPosition,
  SituationLabel,
  Solution,
  SolutionFactor
} from '../ddl/ddl';

export interface LocalQSchema extends AirportQSchema {

  db: DbSchema;

	Factor: QFactor;
	Label: QLabel;
	Outcome: QOutcome;
	Position: QPosition;
	Situation: QSituation;
	SituationFactorPosition: QSituationFactorPosition;
	SituationLabel: QSituationLabel;
	Solution: QSolution;
	SolutionFactor: QSolutionFactor;

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
	SolutionFactor: SolutionFactor
};

export const Q_SCHEMA: LocalQSchema = <any>{
	__constructors__,
  domain: 'votecube.com',
  name: '@votecube/votecube'
};
export const Q: LocalQSchema = Q_SCHEMA

export function diSet(
	dbEntityId: EntityId
): boolean {
	return dS(Q.__dbSchema__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: EntityId
): boolean {
	return ddS(Q.__dbSchema__, dbEntityId)
}

DI.db().eventuallyGet(AIRPORT_DATABASE).then((
	airDb
) => {
	airDb.QM[getSchemaName(Q_SCHEMA)] = Q
})
