import {DI}        from '@airport/di'
import {
	AJAX_Z_POLL,
	IModelSerializer,
	Out
}                  from '@votecube/ajax'
import {
	FACTOR_POSITIONS,
	FACTORS,
	IPoll,
	LABELS,
	POLL_CONTINENTS,
	POLL_COUNTIES,
	POLL_COUNTRIES,
	POLL_FACTOR_POSITIONS,
	POLL_LABELS,
	POLL_STATES,
	POLL_TOWNS,
	POLLS,
	POSITIONS
}                  from '@votecube/model'
import {
	Dao,
	IDao
}                  from '../Dao'
import {IDatabase} from '../Database'
import {
	DATABASE,
	POLL_DAO
}                  from '../tokens'

export interface IPollDao
	extends IDao<IPoll> {

}

export class PollDao
	extends Dao<IPoll>
	implements IPollDao {

	pollSerializer: IModelSerializer<IPoll>
	db: IDatabase

	constructor() {
		super()
		DI.get(
			di => {
				[this.pollSerializer, this.db] = di
			}, AJAX_Z_POLL, DATABASE)
	}

	async save(
		entity: IPoll
	): Promise<void> {
		const out: Out = new Out()

		const localDbAvailable = true

		if (localDbAvailable) {
			const transaction = this.db.startTrans(this.getTypesToSave(entity))

			transaction.with(POLLS)
		}


		const isOnline = true
		if (isOnline) {
			const tempRecordIds = []
			this.pollSerializer.serialize(entity, out, tempRecordIds)
		}
	}

	private getTypesToSave(
		entity: IPoll
	): string[] {
		const entities = []

		if (entity.pollsCountries.length) {
			entities.push(POLL_COUNTRIES)
		}

		if (entity.pollsStates.length) {
			entities.push(POLL_STATES)
		}

		if (entity.pollsCounties.length) {
			entities.push(POLL_COUNTIES)
		}

		if (entity.pollsTowns.length) {
			entities.push(POLL_TOWNS)
		}

		if (entity.pollsLabels.length) {
			entities.push(POLL_LABELS)
			if (!entity.pollsLabels.every(
				pollLabel =>
					pollLabel.id as any)) {
				entities.push(LABELS)
			}
		}

		let saveFactorPositions = false
		let saveFactors         = false
		let savePositions       = false

		entity.pollsFactorPositions.forEach(
			pollFactorPosition => {
				const factorPosition = pollFactorPosition.factorPosition

				if (!saveFactorPositions && !factorPosition.id) {
					saveFactorPositions = true
					entities.push(FACTOR_POSITIONS)
				}

				if (!saveFactors && !factorPosition.factor.id) {
					saveFactors = true
					entities.push(FACTORS)
				}

				if (!savePositions && !factorPosition.position.id) {
					savePositions = true
					entities.push(POSITIONS)
				}
			})

		return [
			POLLS,
			POLL_CONTINENTS,
			POLL_FACTOR_POSITIONS,
			...entities
		]
	}

}

DI.set(POLL_DAO, PollDao)
