import {DI}            from '@airport/di'
import {
	mutationApi,
	setPositionData
}                      from '@votecube/cube-logic'
import {VOTE_DAO}      from '@votecube/public-db'
import {PollStore}     from './helpers/PollStore'
import {loadCubeLogic} from './libs/cubeLogic'

export async function init() {
	// await DI.get(AIR_DB)
	// const dbManager = await DI.get(DATABASE_MANAGER)
	// await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}

export async function setupCubeView(
	pollKey,
	pollVariationKey,
	page,
	callback
) {
	const [
		      setPositionDataAndMove,
		      voteDao
	      ] = await Promise.all([
		loadCubeLogic(page, callback),
		await DI.get(VOTE_DAO)
	])

	const vote = await voteDao.findMyVoteForPoll(pollKey)

	// if (!vote) {
	// 	routes.navigateToPage(routes.POLL_INFO_MAIN)
	// 	return
	// }

	const poll = await PollStore.getVariation(pollKey, pollVariationKey)

	setPositionData(vote)
	mutationApi.recompute()
	// const poll = vote.poll
	// const originalPoll =
	page.set({vote})
	setPositionDataAndMove(vote)

	page.store.set({
		pageTitle: poll.name,
		pollStore: true
	})
}
