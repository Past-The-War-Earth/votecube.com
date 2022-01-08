import { AIRPORT_DATABASE } from '@airport/air-control';
import { diSet as dS, duoDiSet as ddS } from '@airport/check-in';
import { DI } from '@airport/di';
import { getFullApplicationName } from '@airport/ground-control';
import { ForumPost, ForumThread } from '../ddl/ddl';
const __constructors__ = {
    ForumPost: ForumPost,
    ForumThread: ForumThread
};
export const Q_APPLICATION = {
    __constructors__,
    domain: 'votecube.com',
    name: '@votecube/forum'
};
export const Q = Q_APPLICATION;
export function diSet(dbEntityId) {
    return dS(Q.__dbApplication__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return ddS(Q.__dbApplication__, dbEntityId);
}
DI.db().eventuallyGet(AIRPORT_DATABASE).then((airDb) => {
    airDb.QM[getFullApplicationName(Q_APPLICATION)] = Q;
});
//# sourceMappingURL=qApplication.js.map