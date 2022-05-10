/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
import { Label } from '../ddl/Label';
import { AgreementFactor } from '../ddl/agreement/AgreementFactor';
import { Agreement } from '../ddl/agreement/Agreement';
import { Position } from '../ddl/factor/Position';
import { Factor } from '../ddl/factor/Factor';
import { Outcome } from '../ddl/idea/Outcome';
import { IdeaSituation } from '../ddl/idea/IdeaSituation';
import { Reason } from '../ddl/idea/Reason';
import { IdeaLabel } from '../ddl/idea/IdeaLabel';
import { Idea } from '../ddl/idea/Idea';

DEPENDENCY_INJECTION.db().get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('localhost:8000', 'undefined');
  accumulator.add(Label, 0);
  accumulator.add(AgreementFactor, 1);
  accumulator.add(Agreement, 2);
  accumulator.add(Position, 3);
  accumulator.add(Factor, 4);
  accumulator.add(Outcome, 5);
  accumulator.add(IdeaSituation, 6);
  accumulator.add(Reason, 7);
  accumulator.add(IdeaLabel, 8);
  accumulator.add(Idea, 9);
});
