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
import { QCategory } from './qcategory';
import { QFactor } from './factor/qfactor';
import { QFactorPosition } from './factor/position/qfactorposition';
import { QOutcome } from './situation/qoutcome';
import { QPosition } from './factor/position/qposition';
import { QSituation } from './situation/qsituation';
import { QSituationFactorPosition } from './situation/qsituationfactorposition';
import {
  Category,
  Factor,
  FactorPosition,
  Outcome,
  Position,
  Situation,
  SituationFactorPosition
} from '../ddl/ddl';

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

const __constructors__ = {
	Category: Category,
	Factor: Factor,
	FactorPosition: FactorPosition,
	Outcome: Outcome,
	Position: Position,
	Situation: Situation,
	SituationFactorPosition: SituationFactorPosition
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
