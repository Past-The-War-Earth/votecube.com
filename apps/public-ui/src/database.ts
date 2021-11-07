import {MUTATION_API} from '@votecube/cube-logic'
import {ICubeLogic, pageTitle, SITUATION_MANAGER, SOLUTION_MANAGER} from '@votecube/vc-logic'
import type { IUiSolution } from '../../../libs/cube-logic/node_modules/@votecube/model/lib';
import type { IUiSituation } from '../../../libs/cube-logic/node_modules/@votecube/model/lib';

// import {APP_CONTAINER} from './container'

export async function init() {
    // await APP_CONTAINER.get(AIR
    // const dbManager = await APP_CONTAINER.get(DATABASE_MANAGER)
    // await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}

export async function setupCubeView(
    repositoryUuId: string,
    cubeLogic: ICubeLogic,
    cubeEventListener,
    container
): Promise<{
    situation: IUiSituation,
    solution: IUiSolution
}> {
    const [
        mutationApi, situationManager, solutionManager
    ] = await container.get(
        MUTATION_API, SITUATION_MANAGER, SOLUTION_MANAGER)

    const solution = await solutionManager.getSolutionForSituation(
        repositoryUuId
    );

    const situation = await situationManager.getSituation(repositoryUuId)

    cubeEventListener.setPositionData(solution)
    await mutationApi.recompute()
    const setPositionDataAndMove = (solution) => cubeEventListener.setPositionDataAndMove(solution)
    setPositionDataAndMove(solution)

    pageTitle.set(situation.name)

    return {
        situation,
        solution
    }
}
