import { Y } from '@airport/air-control';
import { BaseSituationDao, Q, } from "../generated/generated";
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
        const matchingRepositories = await this.db.findForRepository(repositorySource, situationReposioryUuid).tree({
            select: {
                parent: {},
                outcomeA: {},
                outcomeB: {},
                situationLabels: {
                    label: {}
                },
                situationFactorPositions: {
                    axis: Y,
                    blue: Y,
                    dir: Y,
                    factor: {},
                    factorNumber: Y,
                    green: Y,
                    outcomeOrdinal: Y,
                    position: {},
                    red: Y,
                }
            },
            from: [
                s = Q.Situation,
                r = s.repository.innerJoin(),
                s_r = s.parent.leftJoin(),
                o1 = s.outcomeA.innerJoin(),
                o2 = s.outcomeB.innerJoin(),
                sl = s.situationLabels.leftJoin(),
                l = sl.label.innerJoin(),
                sfp = s.situationFactorPositions.innerJoin(),
                f = sfp.factor.innerJoin(),
                p = sfp.position.innerJoin()
            ],
            where: r.uuId.equals(situationReposioryUuid)
        });
        if (matchingRepositories.length) {
            return matchingRepositories[0];
        }
        return null;
    }
    async saveSituation(repositoryDestination, situation) {
        await this.db.save(situation);
    }
}
//# sourceMappingURL=SituationDao.js.map