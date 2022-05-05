/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { DI } from '@airport/di';
import { ForumThread } from '../ddl/ForumThread';
import { ForumPost } from '../ddl/ForumPost';

DI.db().get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('votecube.com', 'undefined');
  accumulator.add(ForumThread, 0);
  accumulator.add(ForumPost, 1);
});
