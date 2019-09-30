import {
	configPage,
	PAGE_CONF,
	setupPage
} from '@votecube/public-logic'

export const FACTOR_INFO_MAIN   = '/factor/info/Main/:mode/:pollId'
export const FACTOR_SEARCH_LIST = '/factor/List'
export const FACTOR_PICK_COLOR  = '/factor/PickColor/:mode/:pollId'
export const POSITION_INFO_MAIN = '/position/info/Main/:mode/:pollId'
export const POLL_SEARCH_LIST   = '/poll/search/List'
export const POLL_INFO_MAIN     = '/poll/info/Main/:mode/:pollId'
export const POLL_INFO_CHART    = '/poll/info/Chart/:mode/:pollId'
export const POLL_INFO_CUBE     = '/poll/info/Cube/:mode/:pollId'
export const POLL_LOCATIONS     = '/poll/Locations/:mode/:pollId'
export const POLL_TIMEFRAME     = '/poll/Timeframe/:mode/:pollId'

let appComp

configPage(
	POSITION_INFO_MAIN,
	false
)
configPage(
	FACTOR_INFO_MAIN,
	false
)
configPage(
	FACTOR_PICK_COLOR,
	false
)
configPage(
	FACTOR_SEARCH_LIST,
	true
)
configPage(
	POLL_INFO_CHART,
	true
)
configPage(
	POLL_SEARCH_LIST,
	true
)
configPage(
	POLL_INFO_MAIN,
	false
)
configPage(
	POLL_INFO_CUBE,
	true
)
configPage(
	POLL_LOCATIONS,
	false
)
configPage(
	POLL_TIMEFRAME,
	false
)

export function setupRoutes(
	applicationComponent,
	pageMap,
	topMenuMap
) {
	appComp = applicationComponent
	setupPage(PAGE_CONF[POLL_SEARCH_LIST], pageMap[POLL_SEARCH_LIST], topMenuMap[POLL_SEARCH_LIST], applicationComponent, '/')
	for (const pageKey in PAGE_CONF) {
		setupPage(PAGE_CONF[pageKey], pageMap[pageKey], topMenuMap[pageKey], applicationComponent)
	}
	page({
		hashbang: true
	})
}
