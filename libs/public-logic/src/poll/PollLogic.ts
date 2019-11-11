import {DI}         from '@airport/di'
import {
	IUser,
	IVariationDoc
}                   from '@votecube/model'
import {
	IPollDao,
	POLL_DAO
}                   from '@votecube/public-db'
import {POLL_LOGIC} from '../diTokens'

export interface IPollLogic {

	stage(
		variation: IVariationDoc
	): Promise<void>

	save(
		variation: IVariationDoc,
		user: IUser
	): Promise<void>

}

export class PollLogic
	implements IPollLogic {

	/**
	 * All Poll data is immutable once created,
	 * draft pollDrafts can be modified though.
	 * Stage simply modifies a draft poll (or creates if if there is none)
	 * Q&A:
	 * ?Note a poll that has nothing different form its default state should not
	 * be staged? - no create always - you may still need that record between
	 * screens in case data is first added in a child screen
	 *
	 * ?Draft records do not respect non-null rules? - yes, this way you can
	 * save a partial record temporarily
	 */
	async stage(
		variation: IVariationDoc
	): Promise<void> {
		const pollDao: IPollDao = await DI.get(POLL_DAO)

		await pollDao.addTemp(variation)
	}

	async save(
		variation: IVariationDoc,
		user: IUser
	): Promise<void> {
		const pollDao: IPollDao = await DI.get(POLL_DAO)

		await pollDao.save(variation, user)
	}

}

DI.set(POLL_LOGIC, PollLogic)
