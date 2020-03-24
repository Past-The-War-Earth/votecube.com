import {MUTATION_API} from '@votecube/cube-logic'
import {pageTitle, POLL_MANAGER} from '@votecube/vc-logic'

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
        mutationApi, pollManager
    ] = await container.get(
        MUTATION_API, POLL_MANAGER)

    const vote = {
        // poll,
        1: {
            factorNumber: 1,
            outcome: 'A',
            value: 33,
        },
        2: {
            factorNumber: 2,
            outcome: 'A',
            value: 33,
        },
        3: {
            factorNumber: 3,
            outcome: 'B',
            value: 33,
        }
    }

    // if (!vote) {
    // 	navigateToPage(POLL_FORM)
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
