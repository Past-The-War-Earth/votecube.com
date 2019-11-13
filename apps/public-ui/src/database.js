import {DI}            from '@airport/di'
import {
	mutationApi,
	setPositionData
}                      from '@votecube/cube-logic'
import {VOTE_DAO}      from '@votecube/public-db'
import {POLL_MANAGER}  from '@votecube/public-logic'
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
		      [pollManager, voteDao]
	      ] = await Promise.all([
		loadCubeLogic(page, callback),
		await DI.get(POLL_MANAGER, VOTE_DAO)
	])

	const vote = await voteDao.findMyVoteForPoll(pollKey)

	// if (!vote) {
	// 	routes.navigateToPage(routes.POLL_FORM)
	// 	return
	// }

	const poll = await pollManager.getVariation(pollKey, pollVariationKey)

	setPositionData(vote)
	mutationApi.recompute()
	// const poll = vote.poll
	// const originalPoll =
	page.set({vote})
	setPositionDataAndMove(vote)

	page.store.set({
		pageTitle: poll.name
	})

	return poll
}
