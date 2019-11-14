import {
	CUBE_EVENT_LISTENER,
	MUTATION_API
}                 from '@votecube/cube-logic'
import {VOTE_DAO} from '@votecube/public-db'
import {
	CUBE_LOGIC,
	POLL_MANAGER
}                 from '@votecube/public-logic'

// import {APP_CONTAINER} from './container'

export async function init() {
	// await APP_CONTAINER.get(AIR_DB)
	// const dbManager = await APP_CONTAINER.get(DATABASE_MANAGER)
	// await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}

export async function setupCubeView(
	pollKey,
	pollVariationKey,
	page,
	callback,
	container
) {
	const [
		      cubeEventListener, cubeLogic, mutationApi, pollManager, voteDao
	      ] = await container.get(
		CUBE_EVENT_LISTENER, CUBE_LOGIC, MUTATION_API, POLL_MANAGER, VOTE_DAO)

	const setPositionDataAndMove = await cubeLogic.loadCubeLogic(page, callback)

	const vote = await voteDao.findMyVoteForPoll(pollKey)

	// if (!vote) {
	// 	routes.navigateToPage(routes.POLL_FORM)
	// 	return
	// }

	const poll = await pollManager.getVariation(pollKey, pollVariationKey)

	await cubeEventListener.setPositionData(vote)
	await mutationApi.recompute()
	// const poll = vote.poll
	// const originalPoll =
	page.set({vote})
	setPositionDataAndMove(vote)

	page.store.set({
		pageTitle: poll.name
	})

	return poll
}
