/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-control';
import { DI } from '@airport/di';
import { Category } from '../ddl/Category';
import { Position } from '../ddl/factor/Position';
import { Factor } from '../ddl/factor/Factor';
import { Outcome } from '../ddl/situation/Outcome';
import { SituationFactorPosition } from '../ddl/situation/SituationFactorPosition';
import { Situation } from '../ddl/situation/Situation';
DI.db().get(AIRPORT_DATABASE).then(airDb => {
    const accumulator = airDb.getAccumulator('votecube.com', 'votecube');
    accumulator.add(Category, 0);
    accumulator.add(Position, 1);
    accumulator.add(Factor, 2);
    accumulator.add(Outcome, 3);
    accumulator.add(SituationFactorPosition, 4);
    accumulator.add(Situation, 5);
});
//# sourceMappingURL=entityMappings.js.map