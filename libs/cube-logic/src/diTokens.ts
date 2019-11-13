import {diToken}                    from '@airport/di'
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

export const CUBE_DIRECTION              = diToken<ICubeDirection>()
export const CUBE_EVENT_LISTENER         = diToken<ICubeEventListener>()
export const CUBE_MOVE_MATRIX            = diToken<ICubeMoveMatrix>()
export const CUBE_MOVEMENT               = diToken<ICubeMovement>()
export const CUBE_UTILS                  = diToken<ICubeUtils>()
export const DEGREE_POSITION_CHOOSER     = diToken<IDegreePositionChooser>()
export const EVENT_LISTENER_MAP          = diToken<IEventListenerMap>()
export const FINAL_POSITION_FINDER       = diToken<IFinalPositionFinder>()
export const MATRIX_VALUE_CHOOSER        = diToken<IMatrixValueChooser>()
export const MUTATION_API                = diToken<IMutationApi>()
export const PERCENTAGE_POSITION_CHOOSER = diToken<IPercentagePositionChooser>()
export const VIEWPORT                    = diToken<IViewport>()
