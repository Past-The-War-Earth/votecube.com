/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-control';
import { DI } from '@airport/di';
import { AgreementFactor } from '../ddl/agreement/AgreementFactor';
import { Agreement } from '../ddl/agreement/Agreement';
import { Position } from '../ddl/factor/Position';
import { Factor } from '../ddl/factor/Factor';
import { Outcome } from '../ddl/idea/Outcome';
import { IdeaSituation } from '../ddl/idea/IdeaSituation';
import { Reason } from '../ddl/idea/Reason';
import { Label } from '../ddl/Label';
import { IdeaLabel } from '../ddl/idea/IdeaLabel';
import { Idea } from '../ddl/idea/Idea';
DI.db().get(AIRPORT_DATABASE).then(airDb => {
    const accumulator = airDb.getAccumulator('localhost:8000', 'undefined');
    accumulator.add(AgreementFactor, 0);
    accumulator.add(Agreement, 1);
    accumulator.add(Position, 2);
    accumulator.add(Factor, 3);
    accumulator.add(Outcome, 4);
    accumulator.add(IdeaSituation, 5);
    accumulator.add(Reason, 6);
    accumulator.add(Label, 7);
    accumulator.add(IdeaLabel, 8);
    accumulator.add(Idea, 9);
});
//# sourceMappingURL=entityMappings.js.map