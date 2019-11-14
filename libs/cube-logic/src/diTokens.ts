import {system}                    from '@airport/di'
import {ICubeDirection}             from './cube/CubeDirection'
import {ICubeEventListener}         from './cube/CubeEventListener'
import {ICubeMoveMatrix}            from './cube/CubeMoveMatrix'
import {ICubeMovement}              from './cube/CubeMovement'
import {IDegreePositionChooser}     from './cube/mutation/DegreePositionChooser'
import {IFinalPositionFinder}       from './cube/mutation/FinalPositionFinder'
import {IMatrixValueChooser}        from './cube/mutation/MatrixValueChooser'
import {IMutationApi}               from './cube/mutation/MutationApi'
import {IPercentagePositionChooser} from './cube/mutation/PercentagePositionChooser'
import {IViewport}                  from './cube/Viewport'
import {ICubeUtils}                 from './utils/CubeUtils'
import {IEventListenerMap}          from './utils/EventListenerMap'

const cubeLogic = system('votecube-ui').lib('cube-logic')

export const CUBE_DIRECTION              = cubeLogic.token<ICubeDirection>()
export const CUBE_EVENT_LISTENER         = cubeLogic.token<ICubeEventListener>()
export const CUBE_MOVE_MATRIX            = cubeLogic.token<ICubeMoveMatrix>()
export const CUBE_MOVEMENT               = cubeLogic.token<ICubeMovement>()
export const CUBE_UTILS                  = cubeLogic.token<ICubeUtils>()
export const DEGREE_POSITION_CHOOSER     = cubeLogic.token<IDegreePositionChooser>()
export const EVENT_LISTENER_MAP          = cubeLogic.token<IEventListenerMap>()
export const FINAL_POSITION_FINDER       = cubeLogic.token<IFinalPositionFinder>()
export const MATRIX_VALUE_CHOOSER        = cubeLogic.token<IMatrixValueChooser>()
export const MUTATION_API                = cubeLogic.token<IMutationApi>()
export const PERCENTAGE_POSITION_CHOOSER = cubeLogic.token<IPercentagePositionChooser>()
export const VIEWPORT                    = cubeLogic.token<IViewport>()
