import { ALL_FIELDS, and, Y } from '@airport/air-control';
import { BaseSituationDao, Q, } from "../generated/generated";
import { DI } from '@airport/di';
import { SITUATION_DAO } from '../server';
export class SituationDao extends BaseSituationDao {
    /*
     * Are UuIds necessary for child records (they cause joins)?
     *    Updates are performed by AIRport internally so just the
     *    repository and actor numeric ids (embedded in the record)
     *    are sufficient.
     *    The UI itself does not need them - again lookups are done
     *    though AIRport as well.
     *
     * So, no need to join to repository and actor tables for
     * child tables.  For the root record the repositoryUuId is
     * already passed in anyway and actor uuid is not used (
     * repositoryUuId is used for page navigation).
     */
    async findByRepositoryUuId(repositorySource, situationReposioryUuid) {
        let s;
        let r;
        let s_r;
        let o1;
        let o2;
        let sl;
        let l;
        let sfp;
        let f;
        let p;
        const matchingRepositories = await this.db.find.tree({
            select: Object.assign(Object.assign({}, ALL_FIELDS), { repository: {
                    source: Y,
                    uuId: Y
                }, parent: {}, outcomeA: {}, outcomeB: {}, situationLabels: Object.assign(Object.assign({}, ALL_FIELDS), { label: {} }), situationFactorPositions: Object.assign(Object.assign({}, ALL_FIELDS), { factor: {}, position: {} }) }),
            from: [
                s = Q.Situation,
                r = s.repository.innerJoin(),
                s_r = s.parent.leftJoin(),
                o1 = s.outcomeA.innerJoin(),
                o2 = s.outcomeB.innerJoin(),
                sl = s.situationLabels.leftJoin(),
                l = sl.label.leftJoin(),
                sfp = s.situationFactorPositions.leftJoin(),
                f = sfp.factor.leftJoin(),
                p = sfp.position.leftJoin()
            ],
            where: and(r.source.equals(repositorySource), r.uuId.equals(situationReposioryUuid))
        }, {
            repository: {
                source: repositorySource,
                uuId: situationReposioryUuid
            }
        });
        if (matchingRepositories.length) {
            return matchingRepositories[0];
        }
        return null;
    }
    async saveSituation(
    // repositoryDestination: string,
    situation) {
        const saveResult = await this.db.save(situation);
        return {
            source: saveResult.newRepository.source,
            uuId: saveResult.newRepository.uuId
        };
    }
}
DI.set(SITUATION_DAO, SituationDao);
//# sourceMappingURL=SituationDao.js.map