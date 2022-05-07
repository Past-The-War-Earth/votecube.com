import { app } from '@votecube/dependency-injection';
import { CubeDirection } from './cube/CubeDirection';
import { CubeEventListener } from './cube/CubeEventListener';
import { CubeMoveMatrix } from './cube/CubeMoveMatrix';
import { CubeMovement } from './cube/CubeMovement';
import { DegreePositionChooser } from './cube/mutation/DegreePositionChooser';
import { FinalPositionFinder } from './cube/mutation/FinalPositionFinder';
import { MatrixValueChooser } from './cube/mutation/MatrixValueChooser';
import { MutationApi } from './cube/mutation/MutationApi';
import { PercentagePositionChooser } from './cube/mutation/PercentagePositionChooser';
import { Viewport } from './cube/Viewport';
import { CubeUtils } from './utils/CubeUtils';
import { EventListenerMap } from './utils/EventListenerMap';
const cubeLogic = app('cube-logic');
export const CUBE_DIRECTION = cubeLogic.token({
    class: CubeDirection,
    interface: 'ICubeDirection',
    token: 'CUBE_DIRECTION'
});
export const CUBE_EVENT_LISTENER = cubeLogic.token({
    class: CubeEventListener,
    interface: 'ICubeEventListener',
    token: 'CUBE_EVENT_LISTENER'
});
export const CUBE_MOVE_MATRIX = cubeLogic.token({
    class: CubeMoveMatrix,
    interface: 'ICubeMoveMatrix',
    token: 'CUBE_MOVE_MATRIX'
});
export const CUBE_MOVEMENT = cubeLogic.token({
    class: CubeMovement,
    interface: 'ICubeMovement',
    token: 'CUBE_MOVEMENT'
});
export const CUBE_UTILS = cubeLogic.token({
    class: CubeUtils,
    interface: 'ICubeUtils',
    token: 'CUBE_UTILS'
});
export const DEGREE_POSITION_CHOOSER = cubeLogic.token({
    class: DegreePositionChooser,
    interface: 'IDegreePositionChooser',
    token: 'DEGREE_POSITION_CHOOSER'
});
export const EVENT_LISTENER_MAP = cubeLogic.token({
    class: EventListenerMap,
    interface: 'IEventListenerMap',
    token: 'EVENT_LISTENER_MAP'
});
export const FINAL_POSITION_FINDER = cubeLogic.token({
    class: FinalPositionFinder,
    interface: 'IFinalPositionFinder',
    token: 'FINAL_POSITION_FINDER'
});
export const MATRIX_VALUE_CHOOSER = cubeLogic.token({
    class: MatrixValueChooser,
    interface: 'IMatrixValueChooser',
    token: 'MATRIX_VALUE_CHOOSER'
});
export const MUTATION_API = cubeLogic.token({
    class: MutationApi,
    interface: 'IMutationApi',
    token: 'MUTATION_API'
});
export const PERCENTAGE_POSITION_CHOOSER = cubeLogic.token({
    class: PercentagePositionChooser,
    interface: 'IPercentagePositionChooser',
    token: 'PERCENTAGE_POSITION_CHOOSER'
});
export const VIEWPORT = cubeLogic.token({
    class: Viewport,
    interface: 'IViewport',
    token: 'VIEWPORT'
});
CUBE_EVENT_LISTENER.setDependencies({
    cubeDirection: CUBE_DIRECTION,
    cubeMovement: CUBE_MOVEMENT,
    cubeUtils: CUBE_UTILS,
    eventListenerMap: EVENT_LISTENER_MAP,
    mutationApi: MUTATION_API,
    viewport: VIEWPORT
});
CUBE_MOVEMENT.setDependencies({
    cubeMoveMatrix: CUBE_MOVE_MATRIX
});
DEGREE_POSITION_CHOOSER.setDependencies({
    viewport: VIEWPORT
});
FINAL_POSITION_FINDER.setDependencies({
    viewport: VIEWPORT,
    cubeUtils: CUBE_UTILS,
    cubeMoveMatrix: CUBE_MOVE_MATRIX,
    cubeMovement: CUBE_MOVEMENT
});
MATRIX_VALUE_CHOOSER.setDependencies({
    cubeMoveMatrix: CUBE_MOVE_MATRIX,
    cubeUtils: CUBE_UTILS,
    viewport: VIEWPORT
});
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
});
PERCENTAGE_POSITION_CHOOSER.setDependencies({
    viewport: VIEWPORT
});
VIEWPORT.setDependencies({
    cubeMoveMatrix: CUBE_MOVE_MATRIX,
    cubeMovement: CUBE_MOVEMENT
});
//# sourceMappingURL=tokens.js.map