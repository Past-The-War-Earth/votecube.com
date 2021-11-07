import {MUTATION_API} from '@votecube/cube-logic'
import {pageTitle, SITUATION_MANAGER, SOLUTION_MANAGER} from '@votecube/vc-logic'

// import {APP_CONTAINER} from './container'

export async function init() {
    // await APP_CONTAINER.get(AIR
    // const dbManager = await APP_CONTAINER.get(DATABASE_MANAGER)
    // await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}

export async function setupCubeView(
    repositoryId,
    cubeLogic,
    cubeEventListener,
    container
) {
    const [
        mutationApi, situationManager, solutionManager
    ] = await container.get(
        MUTATION_API, SITUATION_MANAGER, SOLUTION_MANAGER)

    const solution = await solutionManager.getSolutionForSituation(
        null
    );

    // if (!vote) {
    // 	navigateToPage(SITUATION_FORM)
    // 	return
    // }

    const poll = await situationManager.getSituation(repositoryId)

    cubeEventListener.setPositionData(solution)
    await mutationApi.recompute()
    // const poll = vote.poll
    const setPositionDataAndMove = (vote) => cubeEventListener.setPositionDataAndMove(vote)
    // const originalPoll =
    setPositionDataAndMove(solution)

    pageTitle.set(poll.name)

    return {
        poll,
        vote: solution
    }
}
