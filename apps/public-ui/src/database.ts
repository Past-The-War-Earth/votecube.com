import {MUTATION_API} from '@votecube/cube-logic'
import {pageTitle, SITUATION_MANAGER, SOLUTION_MANAGER} from '@votecube/vc-logic'

// import {APP_CONTAINER} from './container'

export async function init() {
    // await APP_CONTAINER.get(AIR_DB)
    // const dbManager = await APP_CONTAINER.get(DATABASE_MANAGER)
    // await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}

export async function setupCubeView(
    pollId,
    pollRevisionId,
    cubeLogic,
    cubeEventListener,
    container
) {
    const [
        mutationApi, pollManager, voteManager
    ] = await container.get(
        MUTATION_API, SITUATION_MANAGER, SOLUTION_MANAGER)

	const username = ''
	const passwordHash = ''
    const vote = await voteManager.getVoteForPoll(
        username,
        passwordHash,
        pollId
    );

    // if (!vote) {
    // 	navigateToPage(SITUATION_FORM)
    // 	return
    // }

    const poll = await pollManager.getRevision(pollId, pollRevisionId)

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
