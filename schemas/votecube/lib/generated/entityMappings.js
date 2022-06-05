/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
import { Label } from '../ddl/Label';
import { AgreementReason } from '../ddl/agreement/AgreementReason';
import { Agreement } from '../ddl/agreement/Agreement';
import { Position } from '../ddl/factor/Position';
import { Factor } from '../ddl/factor/Factor';
import { IdeaLabel } from '../ddl/idea/IdeaLabel';
import { Reason } from '../ddl/idea/Reason';
import { SituationIdea } from '../ddl/idea/SituationIdea';
import { IdeaTopic } from '../ddl/idea/IdeaTopic';
import { Idea } from '../ddl/idea/Idea';
DEPENDENCY_INJECTION.db().get(AIRPORT_DATABASE).then(airDb => {
    const accumulator = airDb.getAccumulator('localhost:8000', 'undefined');
    accumulator.add(Label, 0);
    accumulator.add(AgreementReason, 1);
    accumulator.add(Agreement, 2);
    accumulator.add(Position, 3);
    accumulator.add(Factor, 4);
    accumulator.add(IdeaLabel, 5);
    accumulator.add(Reason, 6);
    accumulator.add(SituationIdea, 7);
    accumulator.add(IdeaTopic, 8);
    accumulator.add(Idea, 9);
});
//# sourceMappingURL=entityMappings.js.map