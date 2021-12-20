import { app } from '@votecube/dependency-injection'
import { ICubeDirection } from './cube/CubeDirection'
import { ICubeEventListener } from './cube/CubeEventListener'
import { ICubeMoveMatrix } from './cube/CubeMoveMatrix'
import { ICubeMovement } from './cube/CubeMovement'
import { IDegreePositionChooser } from './cube/mutation/DegreePositionChooser'
import { IFinalPositionFinder } from './cube/mutation/FinalPositionFinder'
import { IMatrixValueChooser } from './cube/mutation/MatrixValueChooser'
import { IMutationApi } from './cube/mutation/MutationApi'
import { IPercentagePositionChooser } from './cube/mutation/PercentagePositionChooser'
import { IViewport } from './cube/Viewport'
import { ICubeUtils } from './utils/CubeUtils'
import { IEventListenerMap } from './utils/EventListenerMap'

const cubeLogic = app('cube-logic')

export const CUBE_DIRECTION = cubeLogic.token<ICubeDirection>('CUBE_DIRECTION')
export const CUBE_EVENT_LISTENER = cubeLogic.token<ICubeEventListener>('CUBE_EVENT_LISTENER')
export const CUBE_MOVE_MATRIX = cubeLogic.token<ICubeMoveMatrix>('CUBE_MOVE_MATRIX')
export const CUBE_MOVEMENT = cubeLogic.token<ICubeMovement>('CUBE_MOVEMENT')
export const CUBE_UTILS = cubeLogic.token<ICubeUtils>('CUBE_UTILS')
export const DEGREE_POSITION_CHOOSER = cubeLogic.token<IDegreePositionChooser>('DEGREE_POSITION_CHOOSER')
export const EVENT_LISTENER_MAP = cubeLogic.token<IEventListenerMap>('EVENT_LISTENER_MAP')
export const FINAL_POSITION_FINDER = cubeLogic.token<IFinalPositionFinder>('FINAL_POSITION_FINDER')
export const MATRIX_VALUE_CHOOSER = cubeLogic.token<IMatrixValueChooser>('MATRIX_VALUE_CHOOSER')
export const MUTATION_API = cubeLogic.token<IMutationApi>('MUTATION_API')
export const PERCENTAGE_POSITION_CHOOSER = cubeLogic.token<IPercentagePositionChooser>('PERCENTAGE_POSITION_CHOOSER')
export const VIEWPORT = cubeLogic.token<IViewport>('VIEWPORT')
