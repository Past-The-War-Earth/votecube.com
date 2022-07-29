/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
import { Label } from '../ddl/Label';
import { IdeaLabel } from '../ddl/idea/IdeaLabel';
import { IdeaRating } from '../ddl/idea/IdeaRating';
import { Reason } from '../ddl/reason/Reason';
import { SituationIdea } from '../ddl/idea/SituationIdea';
import { IdeaTopic } from '../ddl/idea/IdeaTopic';
import { Idea } from '../ddl/idea/Idea';
import { AgreementReason } from '../ddl/agreement/AgreementReason';
import { Agreement } from '../ddl/agreement/Agreement';
import { Factor } from '../ddl/factor/Factor';
import { Position } from '../ddl/factor/Position';
import { ReasonCubeDisplay } from '../ddl/reason/ReasonCubeDisplay';
import { IdeaReason } from '../ddl/reason/IdeaReason';
import { SituationIdeaReason } from '../ddl/reason/SituationIdeaReason';

DEPENDENCY_INJECTION.db().get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('localhost:8000', 'undefined');
  accumulator.add(Label, 0);
  accumulator.add(IdeaLabel, 1);
  accumulator.add(IdeaRating, 2);
  accumulator.add(Reason, 3);
  accumulator.add(SituationIdea, 4);
  accumulator.add(IdeaTopic, 5);
  accumulator.add(Idea, 6);
  accumulator.add(AgreementReason, 7);
  accumulator.add(Agreement, 8);
  accumulator.add(Factor, 9);
  accumulator.add(Position, 10);
  accumulator.add(ReasonCubeDisplay, 11);
  accumulator.add(IdeaReason, 12);
  accumulator.add(SituationIdeaReason, 13);
});
