import {
    ICubeEventListener,
    MUTATION_API
} from '@votecube/cube-logic'
import {
    ICubeLogic,
    ISituationFormManager,
    SITUATION_FORM_MANAGER,
    SITUATION_MANAGER,
    SOLUTION_MANAGER
} from '@votecube/vc-logic'
import {
    pageTitle,
} from '@votecube/ui-logic'
import type {
    IUiSolution,
    IUiSituation,
    IUiSolutionFactor,
    ITweenSolution,
    ITweenSolutionFactor
} from '@votecube/model';
import type { IChildContainer, IRootContainer } from '@airport/di';

// import {APP_CONTAINER} from './container'

export async function init() {
    // await APP_CONTAINER.get(AIR
    // const dbManager = await APP_CONTAINER.get(DATABASE_MANAGER)
    // await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, APPLICATION)
}

export function getBlankTweenSolution(
    container: IChildContainer
): ITweenSolution {
    const situationFormManager = container.getSync(SITUATION_FORM_MANAGER)

    return {
        ...situationFormManager.getBlankUiRepositoryRecord(),
        1: getBlankTweenSolutionFactor(situationFormManager),
        2: getBlankTweenSolutionFactor(situationFormManager),
        3: getBlankTweenSolutionFactor(situationFormManager)
    }
}

export function getBlankUiSolution(
    container: IChildContainer
): IUiSolution {
    const situationFormManager = container.getSync(SITUATION_FORM_MANAGER)

    return {
        ...situationFormManager.getBlankUiRepositoryRecord(),
        1: getBlankUiSolutionFactor(situationFormManager),
        2: getBlankUiSolutionFactor(situationFormManager),
        3: getBlankUiSolutionFactor(situationFormManager)
    }
}

function getBlankTweenSolutionFactor(
    situationFormManager: ISituationFormManager
): ITweenSolutionFactor {
    return {
        ...getBlankUiSolutionFactor(situationFormManager),
        tweenOutcome: null,
        tweenValue: 0,
    }
}

function getBlankUiSolutionFactor(
    situationFormManager: ISituationFormManager
): IUiSolutionFactor {
    return {
        ...situationFormManager.getBlankUiRepositoryRecord(),
        factorNumber: 1,
        outcome: null,
        value: 0,
    }
}

export async function setupCubeView(
    hostingPlatform: string,
    repositoryUuId: string,
    cubeLogic: ICubeLogic,
    cubeEventListener: ICubeEventListener,
    container: IChildContainer
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

    const situation = await situationManager.getSituation(hostingPlatform, repositoryUuId)

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
