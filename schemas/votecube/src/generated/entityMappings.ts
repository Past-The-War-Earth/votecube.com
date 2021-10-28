/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-control';
import { DI } from '@airport/di';
import { Category } from '../ddl/Category';
import { Situation } from '../ddl/Situation';

DI.db().get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('votecube.com', 'votecube');
  accumulator.add(Category, 0);
  accumulator.add(Situation, 1);
});
