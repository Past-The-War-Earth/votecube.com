import {
	Route_ParamValue,
	Route_Path,
} from './Routes'
import { APP_CONTAINER } from './container'
import { ROUTES } from './tokens'

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
