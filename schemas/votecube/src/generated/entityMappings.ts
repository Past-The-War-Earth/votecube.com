/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-control';
import { DI } from '@airport/di';
import { Factor } from '../ddl/factor/Factor';
import { Label } from '../ddl/Label';
import { Outcome } from '../ddl/situation/Outcome';
import { Position } from '../ddl/factor/Position';
import { SituationFactorPosition } from '../ddl/situation/SituationFactorPosition';
import { SituationLabel } from '../ddl/situation/SituationLabel';
import { SolutionFactor } from '../ddl/solution/SolutionFactor';
import { Solution } from '../ddl/solution/Solution';
import { Situation } from '../ddl/situation/Situation';

DI.db().get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('votecube.com', 'votecube');
  accumulator.add(Factor, 0);
  accumulator.add(Label, 1);
  accumulator.add(Outcome, 2);
  accumulator.add(Position, 3);
  accumulator.add(SituationFactorPosition, 4);
  accumulator.add(SituationLabel, 5);
  accumulator.add(SolutionFactor, 6);
  accumulator.add(Solution, 7);
  accumulator.add(Situation, 8);
});
