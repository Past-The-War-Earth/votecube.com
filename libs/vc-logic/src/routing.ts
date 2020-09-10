import {APP_CONTAINER} from './container'
import {
	Route_ParamValue,
	Route_Path
} from './Routes'
import {ROUTES}        from './tokens'

export const ABOUT: Route_Path               = '/about'
export const FEEDBACK: Route_Path            = '/feedback'
export const RELEASE_PLAN: Route_Path        = '/releasePlan'
export const FACTOR_INFO_MAIN: Route_Path    = '/factor/info/Main/:mode'
export const FACTOR_LIST: Route_Path         = '/factor/List'
export const POLL_LIST: Route_Path           = '/poll/List'
export const VARIATION_LIST: Route_Path      = '/revision/List/:pollId/:pollRevisionId'
export const POLL_FORM: Route_Path           = '/poll/Form/:mode'
export const POLL_MAIN: Route_Path           = '/poll/Main/:mode/:pollId/:pollRevisionId'
export const POLL_LOCATIONS: Route_Path      = '/poll/Locations/:mode'
export const POLL_TIME_FRAME: Route_Path     = '/poll/TimeFrame/:mode'
export const CARD_CLIMATE_CHANGE: Route_Path = '/card/ClimateChange'

export function navigateToPage(
	routePath: Route_Path,
	paramMap?: {
		[paramName: string]: Route_ParamValue
	}
) {
	APP_CONTAINER.get(ROUTES).then(
		routes => {
			routes.navigateToPage(routePath, paramMap)
		})
}
