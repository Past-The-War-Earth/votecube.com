import { app } from '@airport/direction-indicator'
import { CubeDirection, ICubeDirection } from './cube/CubeDirection'
import { CubeEventListener, ICubeEventListener } from './cube/CubeEventListener'
import { CubeMoveMatrix, ICubeMoveMatrix } from './cube/CubeMoveMatrix'
import { CubeMovement, ICubeMovement } from './cube/CubeMovement'
import { DegreePositionChooser, IDegreePositionChooser } from './cube/mutation/DegreePositionChooser'
import { FinalPositionFinder, IFinalPositionFinder } from './cube/mutation/FinalPositionFinder'
import { IMatrixValueChooser, MatrixValueChooser } from './cube/mutation/MatrixValueChooser'
import { IMutationApi, MutationApi } from './cube/mutation/MutationApi'
import { IPercentagePositionChooser, PercentagePositionChooser } from './cube/mutation/PercentagePositionChooser'
import { IViewport, Viewport } from './cube/Viewport'
import { CubeUtils, ICubeUtils } from './utils/CubeUtils'
import { EventListenerMap, IEventListenerMap } from './utils/EventListenerMap'

const cubeLogic = app('cube-logic')

export const CUBE_DIRECTION = cubeLogic.token<ICubeDirection>({
    class: CubeDirection,
    interface: 'ICubeDirection',
    token: 'CUBE_DIRECTION'
})
export const CUBE_EVENT_LISTENER = cubeLogic.token<ICubeEventListener>({
    class: CubeEventListener,
    interface: 'ICubeEventListener',
    token: 'CUBE_EVENT_LISTENER'
})
export const CUBE_MOVE_MATRIX = cubeLogic.token<ICubeMoveMatrix>({
    class: CubeMoveMatrix,
    interface: 'ICubeMoveMatrix',
    token: 'CUBE_MOVE_MATRIX'
})
export const CUBE_MOVEMENT = cubeLogic.token<ICubeMovement>({
    class: CubeMovement,
    interface: 'ICubeMovement',
    token: 'CUBE_MOVEMENT'
})
export const CUBE_UTILS = cubeLogic.token<ICubeUtils>({
    class: CubeUtils,
    interface: 'ICubeUtils',
    token: 'CUBE_UTILS'
})
export const DEGREE_POSITION_CHOOSER = cubeLogic.token<IDegreePositionChooser>({
    class: DegreePositionChooser,
    interface: 'IDegreePositionChooser',
    token: 'DEGREE_POSITION_CHOOSER'
})
export const EVENT_LISTENER_MAP = cubeLogic.token<IEventListenerMap>({
    class: EventListenerMap,
    interface: 'IEventListenerMap',
    token: 'EVENT_LISTENER_MAP'
})
export const FINAL_POSITION_FINDER = cubeLogic.token<IFinalPositionFinder>({
    class: FinalPositionFinder,
    interface: 'IFinalPositionFinder',
    token: 'FINAL_POSITION_FINDER'
})
export const MATRIX_VALUE_CHOOSER = cubeLogic.token<IMatrixValueChooser>({
    class: MatrixValueChooser,
    interface: 'IMatrixValueChooser',
    token: 'MATRIX_VALUE_CHOOSER'
})
export const MUTATION_API = cubeLogic.token<IMutationApi>({
    class: MutationApi,
    interface: 'IMutationApi',
    token: 'MUTATION_API'
})
export const PERCENTAGE_POSITION_CHOOSER = cubeLogic.token<IPercentagePositionChooser>({
    class: PercentagePositionChooser,
    interface: 'IPercentagePositionChooser',
    token: 'PERCENTAGE_POSITION_CHOOSER'
})
export const VIEWPORT = cubeLogic.token<IViewport>({
    class: Viewport,
    interface: 'IViewport',
    token: 'VIEWPORT'
})
CUBE_EVENT_LISTENER.setDependencies({
    cubeDirection: CUBE_DIRECTION,
    cubeMovement: CUBE_MOVEMENT,
    cubeUtils: CUBE_UTILS,
    eventListenerMap: EVENT_LISTENER_MAP,
    mutationApi: MUTATION_API,
    viewport: VIEWPORT
})
CUBE_MOVEMENT.setDependencies({
    cubeMoveMatrix: CUBE_MOVE_MATRIX
})
DEGREE_POSITION_CHOOSER.setDependencies({
    viewport: VIEWPORT
})
FINAL_POSITION_FINDER.setDependencies({
    viewport: VIEWPORT,
    cubeUtils: CUBE_UTILS,
    cubeMoveMatrix: CUBE_MOVE_MATRIX,
    cubeMovement: CUBE_MOVEMENT
})
MATRIX_VALUE_CHOOSER.setDependencies({
    cubeMoveMatrix: CUBE_MOVE_MATRIX,
    cubeUtils: CUBE_UTILS,
    viewport: VIEWPORT
})
MUTATION_API.setDependencies({
    cubeMoveMatrix: CUBE_MOVE_MATRIX,
    cubeMovement: CUBE_MOVEMENT,
    cubeUtils: CUBE_UTILS,
    degreePositionChooser: DEGREE_POSITION_CHOOSER,
    eventListenerMap: EVENT_LISTENER_MAP,
    finalPositionFinder: FINAL_POSITION_FINDER,
    matrixValueChooser: MATRIX_VALUE_CHOOSER,
    mutationApi: MUTATION_API,
    percentagePositionChooser: PERCENTAGE_POSITION_CHOOSER,
    viewport: VIEWPORT
})
PERCENTAGE_POSITION_CHOOSER.setDependencies({
    viewport: VIEWPORT
})
VIEWPORT.setDependencies({
    cubeMoveMatrix: CUBE_MOVE_MATRIX,
    cubeMovement: CUBE_MOVEMENT
})