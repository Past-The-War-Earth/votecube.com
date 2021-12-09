import { APP_CONTAINER } from './container'
import {
	Route_ParamValue,
	Route_Path
} from './Routes'
import { ROUTES } from './tokens'

export const ABOUT: Route_Path = '/about'
export const FEEDBACK: Route_Path = '/feedback'
export const RELEASE_PLAN: Route_Path = '/releasePlan'
export const FACTOR_INFO_MAIN: Route_Path = '/factor/info/Main/:mode'
export const FACTOR_LIST: Route_Path = '/factor/List'
export const SITUATION_LIST: Route_Path = '/situation/List'
export const DERIVATION_LIST: Route_Path = '/derivation/List/:repositoryUuId'
export const SITUATION_FORM: Route_Path = '/situation/Form/:mode/:hostingPlatform/:repositoryUuId'
export const SITUATION_MAIN: Route_Path = '/situation/Main/:mode/:hostingPlatform/:repositoryUuId'
export const SITUATION_LOCATIONS: Route_Path = '/situation/Locations/:mode'
export const SITUATION_TIME_FRAME: Route_Path = '/situation/TimeFrame/:mode'
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
