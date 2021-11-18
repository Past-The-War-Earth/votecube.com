import { Y } from '@airport/air-control'
import {
    BaseSituationDao,
    ISituation,
    Q,
    QFactor,
    QLabel,
    QOutcome,
    QPosition,
    QSituation,
    QSituationFactorPosition,
    QSituationLabel,
} from "../generated/generated";
import {
    QRepository
} from "@airport/holding-pattern";
import { Situation } from "../ddl/ddl";
import { DI } from '@airport/di';
import { SITUATION_DAO } from '../server';

export interface ISituationDao {

    findByRepositoryUuId(
        repositorySource: string,
        situationReposioryUuid: string
    ): Promise<ISituation>

    saveSituation(
        situation: ISituation
    ): Promise<void>

}

export class SituationDao
    extends BaseSituationDao
    implements ISituationDao {

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
    async findByRepositoryUuId(
        repositorySource: string,
        situationReposioryUuid: string
    ): Promise<ISituation> {
        let s: QSituation
        let r: QRepository
        let s_r: QSituation
        let o1: QOutcome
        let o2: QOutcome
        let sl: QSituationLabel
        let l: QLabel
        let sfp: QSituationFactorPosition
        let f: QFactor
        let p: QPosition
        const matchingRepositories = await this.db.findForRepository(
            repositorySource,
            situationReposioryUuid,
        ).tree({
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
        })

        if (matchingRepositories.length) {
            return matchingRepositories[0]
        }

        return null
    }

    async saveSituation(
        // repositoryDestination: string,
        situation: ISituation
    ): Promise<void> {
        await this.db.save(situation)
    }

}
DI.set(SITUATION_DAO, SituationDao)
