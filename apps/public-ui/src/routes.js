import page from 'page'

export var PAGE_CONF = {}

let appComp, pageComp, topMenuComp

export const FACTOR_INFO_MAIN   = '/factor/info/Main/:mode/:pollId'
export const FACTOR_SEARCH_LIST = '/factor/List'
export const FACTOR_PICK_COLOR  = '/factor/PickColor/:mode/:pollId'
export const POSITION_INFO_MAIN   = '/position/info/Main/:mode/:pollId'
export const POLL_SEARCH_LIST      = '/poll/search/List'
export const POLL_INFO_MAIN        = '/poll/info/Main/:mode/:pollId'
export const POLL_INFO_CUBE        = '/poll/info/Cube/:mode/:pollId'
export const POLL_LOCATIONS        = '/poll/Locations/:mode/:pollId'
export const POLL_TIMEFRAME        = '/poll/Timeframe/:mode/:pollId'

export const DEFAULT_ROUTE_PARAMS = {
	mode: 'build',
	pollId: 0
}

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

export function getPageComponent() {
	return pageComp
}

export function getTopMenuComponent() {
	return topMenuComp
}


export function navigateToPage(
	pageKey,
	paramMap = DEFAULT_ROUTE_PARAMS
) {
	let currentPage = PAGE_CONF[pageKey]
	let url         = '' + currentPage.url
	if (paramMap) {
		for (const paramKey in paramMap) {
			url = url.replace(':' + paramKey, paramMap[paramKey])
		}
	}
	page(url)
	appComp.store.set({currentPage})
}

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

function configPage(
	key,
	rightMenu,
	url = key
) {
	PAGE_CONF[key] = {
		key,
		rightMenu,
		url
	}
}

function setupPage(
	pageConfig,
	PageComp,
	TopMenuComp,
	appComp,
	url = pageConfig.url
) {
	page(
		url, (context) => {
			setPageComp(pageConfig, context.params, PageComp, TopMenuComp, appComp)
		})
}

function setPageComp(
	currentPage,
	routeParams,
	PageComp,
	TopMenuComp,
	appComp
) {
	pageComp    = PageComp
	topMenuComp = TopMenuComp
	appComp.store.set({currentPage, routeParams})
	appComp.set({PageComp})
}
