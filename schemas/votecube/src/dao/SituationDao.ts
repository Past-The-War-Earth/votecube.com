import {
    ALL_FIELDS,
    and,
    Y
} from '@airport/air-control'
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
import { DI } from '@airport/di';
import { SITUATION_DAO } from '../server';
import { IRepositoryIdentifier } from '../client/types';
import { ISaveResult } from '@airport/ground-control';

export interface ISituationDao {

    findByRepositoryUuId(
        repositorySource: string,
        situationReposioryUuid: string
    ): Promise<ISituation>

    saveExistingSituation(
        situation: ISituation
    ): Promise<IRepositoryIdentifier>

    saveNewSituation(
        situation: ISituation
    ): Promise<IRepositoryIdentifier>

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
        let o1: QOutcome
        let o2: QOutcome
        let sl: QSituationLabel
        let l: QLabel
        let sfp: QSituationFactorPosition
        let f: QFactor
        let p: QPosition
        const matchingRepositories = await this.db.find.tree({
            select: {
                ...ALL_FIELDS,
                repository: {},
                outcomeA: {},
                outcomeB: {},
                situationLabels: {
                    ...ALL_FIELDS,
                    label: {}
                },
                situationFactorPositions: {
                    ...ALL_FIELDS,
                    factor: {},
                    position: {},
                }
            },
            from: [
                s = Q.Situation,
                r = s.repository.innerJoin(),
                o1 = s.outcomeA.innerJoin(),
                o2 = s.outcomeB.innerJoin(),
                sl = s.situationLabels.leftJoin(),
                l = sl.label.leftJoin(),
                sfp = s.situationFactorPositions.leftJoin(),
                f = sfp.factor.leftJoin(),
                p = sfp.position.leftJoin()
            ],
            where: and(
                r.source.equals(repositorySource),
                r.uuId.equals(situationReposioryUuid)
            )
        }, {
            repository: {
                source: repositorySource,
                uuId: situationReposioryUuid
            }
        })

        if (matchingRepositories.length) {
            return matchingRepositories[0]
        }

        return null
    }

    async saveExistingSituation(
        situation: ISituation
    ): Promise<IRepositoryIdentifier> {
        let saveResult: ISaveResult
        saveResult = await this.db.save(situation)

        return {
            source: situation.repository.source,
            uuId: situation.repository.uuId
        }
    }

    async saveNewSituation(
        situation: ISituation
    ): Promise<IRepositoryIdentifier> {
        let saveResult: ISaveResult = await this.db.save(situation)
        const newRepository = saveResult.newRepository

        return {
            source: newRepository.source,
            uuId: newRepository.uuId
        }
    }

}
DI.set(SITUATION_DAO, SituationDao)
