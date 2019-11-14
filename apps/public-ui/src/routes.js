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

const container = DI.ui('App')

container.get(ROUTES).then(
	routes => {
		routes.configPages([
			[ABOUT, false, false],
			[FEEDBACK, false, false],
			[RELEASE_PLAN, false, false],
			[CARD_CLIMATE_CHANGE, false, false],
			[FACTOR_INFO_MAIN, false, false],
			[FACTOR_LIST, false, true],
			[POLL_LIST, false, true],
			[VARIATION_LIST, false, true],
			[POLL_FORM, true, false],
			[POLL_MAIN, false, true],
			[POLL_LOCATIONS, true, false],
			[POLL_TIME_FRAME, true, false]
		])
	})

export function navigateToPage(
	pageKey,
	paramMap
) {
	container.get(ROUTES).then(
		routes => {
			routes.navigateToPage(pageKey, paramMap)
		})
}