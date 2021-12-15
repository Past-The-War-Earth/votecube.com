/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-control';
import { DI } from '@airport/di';
import { Position } from '../ddl/factor/Position';
import { Factor } from '../ddl/factor/Factor';
import { Outcome } from '../ddl/situation/Outcome';
import { SolutionFactor } from '../ddl/solution/SolutionFactor';
import { Solution } from '../ddl/solution/Solution';
import { SituationFactorPosition } from '../ddl/situation/SituationFactorPosition';
import { Label } from '../ddl/Label';
import { SituationLabel } from '../ddl/situation/SituationLabel';
import { Situation } from '../ddl/situation/Situation';
import { UserAccount } from '../ddl/UserAccount';

DI.db().get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('votecube.com', 'undefined');
  accumulator.add(Position, 0);
  accumulator.add(Factor, 1);
  accumulator.add(Outcome, 2);
  accumulator.add(SolutionFactor, 3);
  accumulator.add(Solution, 4);
  accumulator.add(SituationFactorPosition, 5);
  accumulator.add(Label, 6);
  accumulator.add(SituationLabel, 7);
  accumulator.add(Situation, 8);
  accumulator.add(UserAccount, 9);
});
