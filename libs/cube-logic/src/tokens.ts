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

export const CUBE_DIRECTION              = cubeLogic.token<ICubeDirection>('ICubeDirection')
export const CUBE_EVENT_LISTENER         = cubeLogic.token<ICubeEventListener>('ICubeEventListener')
export const CUBE_MOVE_MATRIX            = cubeLogic.token<ICubeMoveMatrix>('ICubeMoveMatrix')
export const CUBE_MOVEMENT               = cubeLogic.token<ICubeMovement>('ICubeMovement')
export const CUBE_UTILS                  = cubeLogic.token<ICubeUtils>('ICubeUtils')
export const DEGREE_POSITION_CHOOSER     = cubeLogic.token<IDegreePositionChooser>('IDegreePositionChooser')
export const EVENT_LISTENER_MAP          = cubeLogic.token<IEventListenerMap>('IEventListenerMap')
export const FINAL_POSITION_FINDER       = cubeLogic.token<IFinalPositionFinder>('IFinalPositionFinder')
export const MATRIX_VALUE_CHOOSER        = cubeLogic.token<IMatrixValueChooser>('IMatrixValueChooser')
export const MUTATION_API                = cubeLogic.token<IMutationApi>('IMutationApi')
export const PERCENTAGE_POSITION_CHOOSER = cubeLogic.token<IPercentagePositionChooser>('IPercentagePositionChooser')
export const VIEWPORT                    = cubeLogic.token<IViewport>('IViewport')
