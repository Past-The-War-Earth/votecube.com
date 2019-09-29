import {DI}            from '@airport/di'
import {VOTE_DAO}      from '@votecube/public-db'
import {loadCubeLogic} from './libs/cubeLogic'

export async function init() {
	// await DI.get(AIR_DB)
	// const dbManager = await DI.get(DATABASE_MANAGER)
	// await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}

export async function setupCubeView(
	mode,
	pollId,
	page
) {
	const [
		      setPositionDataAndMove,
		      voteDao
	      ] = await Promise.all([
		loadCubeLogic(page, () => {
			page.set({delta: page.get().delta + 1})
		}),
		await DI.get(VOTE_DAO)
	])

	const vote = await voteDao.findMyVoteForPoll(pollId)

	if (!vote) {
		if (pollId === 0) {
			routes.navigateToPage(routes.POLL_INFO_MAIN)
		}
		return
	}
	const poll = vote.poll
	page.set({mode, poll, vote})
	setPositionDataAndMove(vote)

	page.store.set({
		pageTitle: poll.name
	})
}
