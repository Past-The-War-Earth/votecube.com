import {DI}     from '@airport/di'
import {ROUTES} from '@votecube/public-logic'

export const ABOUT               = '/about'
export const FEEDBACK            = '/feedback'
export const RELEASE_PLAN        = '/releasePlan'
export const FACTOR_INFO_MAIN    = '/factor/info/Main/:mode'
export const FACTOR_LIST         = '/factor/List'
export const POLL_LIST           = '/poll/List'
export const VARIATION_LIST      = '/variation/List/:pollKey/:pollVariationKey'
export const POLL_FORM           = '/poll/Form/:mode'
export const POLL_MAIN           = '/poll/Main/:mode/:pollKey/:pollVariationKey'
export const POLL_LOCATIONS      = '/poll/Locations/:mode'
export const POLL_TIME_FRAME     = '/poll/TimeFrame/:mode'
export const CARD_CLIMATE_CHANGE = '/card/ClimateChange'

export function navigateToPage(
	pageKey,
	paramMap
) {
	const container = DI.ui('App')
	container.get(ROUTES).then(
		routes => {
			routes.navigateToPage(pageKey, paramMap)
		})
}