import {
	CUBE_EVENT_LISTENER,
	MUTATION_API
}                 from '@votecube/cube-logic'
import {VOTE_DAO} from '@votecube/public-db'
import {
	CUBE_LOGIC,
	pageTitle,
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
	cubeLogic,
	cubeEventListener,
	container
) {
	const [
		      mutationApi, pollManager, voteDao
	      ] = await container.get(
		MUTATION_API, POLL_MANAGER, VOTE_DAO)

	const vote = await voteDao.findMyVoteForPoll(pollKey)

	// if (!vote) {
	// 	navigateToPage(POLL_FORM)
	// 	return
	// }

	const poll = await pollManager.getVariation(pollKey, pollVariationKey)

	cubeEventListener.setPositionData(vote)
	await mutationApi.recompute()
	// const poll = vote.poll
	const setPositionDataAndMove = (vote) => cubeEventListener.setPositionDataAndMove(vote)
	// const originalPoll =
	setPositionDataAndMove(vote)

	pageTitle.set(poll.name)

	return {
		poll,
		vote
	}
}
