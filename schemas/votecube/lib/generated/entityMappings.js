/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-control';
import { DI } from '@airport/di';
import { Position } from '../ddl/factor/Position';
import { Factor } from '../ddl/factor/Factor';
import { Outcome } from '../ddl/idea/Outcome';
import { AgreementFactor } from '../ddl/agreement/AgreementFactor';
import { Agreement } from '../ddl/agreement/Agreement';
import { IdeaFactorPosition } from '../ddl/idea/IdeaFactorPosition';
import { Label } from '../ddl/Label';
import { IdeaLabel } from '../ddl/idea/IdeaLabel';
import { Idea } from '../ddl/idea/Idea';
import { UserAccount } from '../ddl/UserAccount';
DI.db().get(AIRPORT_DATABASE).then(airDb => {
    const accumulator = airDb.getAccumulator('localhost:8000', 'undefined');
    accumulator.add(Position, 0);
    accumulator.add(Factor, 1);
    accumulator.add(Outcome, 2);
    accumulator.add(AgreementFactor, 3);
    accumulator.add(Agreement, 4);
    accumulator.add(IdeaFactorPosition, 5);
    accumulator.add(Label, 6);
    accumulator.add(IdeaLabel, 7);
    accumulator.add(Idea, 8);
    accumulator.add(UserAccount, 9);
});
//# sourceMappingURL=entityMappings.js.map