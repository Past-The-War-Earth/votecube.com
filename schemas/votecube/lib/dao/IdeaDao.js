import { ALL_FIELDS, and } from '@airport/air-control';
import { BaseIdeaDao, Q, } from "../generated/generated";
import { DI } from '@airport/di';
import { IDEA_DAO } from '../server-tokens';
export class IdeaDao extends BaseIdeaDao {
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
    async findByRepositoryUuId(repositorySource, ideaReposioryUuid) {
        let i;
        let r;
        let o1;
        let o2;
        let sl;
        let l;
        let is;
        let rs;
        let f;
        let p;
        const matchingRepositories = await this.db.find.tree({
            select: Object.assign(Object.assign({}, ALL_FIELDS), { repository: {}, outcomeA: {}, outcomeB: {}, ideaLabels: Object.assign(Object.assign({}, ALL_FIELDS), { label: {} }), ideaSituations: Object.assign(Object.assign({}, ALL_FIELDS), { reasons: Object.assign(Object.assign({}, ALL_FIELDS), { factor: {}, position: {} }) }) }),
            from: [
                i = Q.Idea,
                r = i.repository.innerJoin(),
                o1 = i.outcomeA.innerJoin(),
                o2 = i.outcomeB.innerJoin(),
                sl = i.ideaLabels.leftJoin(),
                l = sl.label.leftJoin(),
                is = i.ideaSituations.leftJoin(),
                rs = is.reasons.leftJoin(),
                f = rs.factor.leftJoin(),
                p = rs.position.leftJoin()
            ],
            where: and(r.source.equals(repositorySource), r.uuId.equals(ideaReposioryUuid))
        }, {
            repository: {
                source: repositorySource,
                uuId: ideaReposioryUuid
            }
        });
        if (matchingRepositories.length) {
            return matchingRepositories[0];
        }
        return null;
    }
    async saveExistingIdea(idea) {
        let saveResult;
        saveResult = await this.db.save(idea);
        return {
            source: idea.repository.source,
            uuId: idea.repository.uuId
        };
    }
    async saveNewIdea(idea) {
        let saveResult = await this.db.save(idea);
        const newRepository = saveResult.newRepository;
        return {
            source: newRepository.source,
            uuId: newRepository.uuId
        };
    }
}
DI.set(IDEA_DAO, IdeaDao);
//# sourceMappingURL=IdeaDao.js.map