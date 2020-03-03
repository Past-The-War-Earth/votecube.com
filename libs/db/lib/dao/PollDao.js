import { DI } from '@airport/di';
import { AJAX_Z_POLL, Out } from '@votecube/ajax';
import { FACTOR_POSITIONS, FACTORS, LABELS, POLL_CONTINENTS, POLL_COUNTIES, POLL_COUNTRIES, POLL_FACTOR_POSITIONS, POLL_LABELS, POLL_STATES, POLL_TOWNS, POLLS, POSITIONS } from '@votecube/model';
import { Dao } from '../Dao';
export class PollDao extends Dao {
    async save(entity) {
        const out = new Out();
        const localDbAvailable = true;
        const [pollSerializer, db] = await DI.get(AJAX_Z_POLL, DATABASE);
        if (localDbAvailable) {
            const transaction = db.startTrans(this.getTypesToSave(entity));
            transaction.with(POLLS);
        }
        const isOnline = true;
        if (isOnline) {
            const tempRecordIds = [];
            pollSerializer.serialize(entity, out, tempRecordIds);
        }
    }
    getTypesToSave(entity) {
        const entities = [];
        if (entity.pollsCountries.length) {
            entities.push(POLL_COUNTRIES);
        }
        if (entity.pollsStates.length) {
            entities.push(POLL_STATES);
        }
        if (entity.pollsCounties.length) {
            entities.push(POLL_COUNTIES);
        }
        if (entity.pollsTowns.length) {
            entities.push(POLL_TOWNS);
        }
        if (entity.pollsLabels.length) {
            entities.push(POLL_LABELS);
            if (!entity.pollsLabels.every(pollLabel => pollLabel.id)) {
                entities.push(LABELS);
            }
        }
        let saveFactorPositions = false;
        let saveFactors = false;
        let savePositions = false;
        entity.pollsFactorPositions.forEach(pollFactorPosition => {
            const factorPosition = pollFactorPosition.factorPosition;
            if (!saveFactorPositions && !factorPosition.id) {
                saveFactorPositions = true;
                entities.push(FACTOR_POSITIONS);
            }
            if (!saveFactors && !factorPosition.factor.id) {
                saveFactors = true;
                entities.push(FACTORS);
            }
            if (!savePositions && !factorPosition.position.id) {
                savePositions = true;
                entities.push(POSITIONS);
            }
        });
        return [
            POLLS,
            POLL_CONTINENTS,
            POLL_FACTOR_POSITIONS,
            ...entities
        ];
    }
}
DI.set(POLL_DAO, PollDao);
//# sourceMappingURL=PollDao.js.map