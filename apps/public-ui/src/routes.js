import page from 'page'

export var PAGE_CONF = {}

let appComp,
    pageComp,
    topMenuComp

export const FACTOR_INFO_MAIN    = '/factor/info/Main/:mode/:pollId'
export const FACTOR_SEARCH_LIST  = '/factor/List'
export const POLL_SEARCH_LIST    = '/poll/search/List'
export const POLL_VARIATION_LIST = '/poll/variation/List'
export const POLL_INFO_MAIN      = '/poll/info/Main/:mode/:pollId'
export const POLL_INFO_CUBE      = '/poll/info/Cube/:mode/:pollId'
export const POLL_LOCATIONS      = '/poll/Locations/:mode/:pollId'
export const POLL_TIMEFRAME      = '/poll/Timeframe/:mode/:pollId'

export const DEFAULT_ROUTE_PARAMS = {
	mode: 'build',
	pollId: 0
}

configPage(
	FACTOR_INFO_MAIN,
	false,
	false,
)
configPage(
	FACTOR_SEARCH_LIST,
	false,
	true
)
configPage(
	POLL_SEARCH_LIST,
	false,
	true
)
configPage(
	POLL_VARIATION_LIST,
	false,
	true
)
configPage(
	POLL_INFO_MAIN,
	true,
	false
)
configPage(
	POLL_INFO_CUBE,
	false,
	true
)
configPage(
	POLL_LOCATIONS,
	true,
	false
)
configPage(
	POLL_TIMEFRAME,
	true,
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
	const nextPage = PAGE_CONF[pageKey]
	const {user}   = appComp.store.get()
	let url        = '' + nextPage.url
	if (paramMap) {
		for (const paramKey in paramMap) {
			url = url.replace(':' + paramKey, paramMap[paramKey])
		}
	}
	page(url)
	appComp.store.set({currentPage: nextPage})
}

export function setupRoutes(
	applicationComponent,
	pageMap,
	topMenuMap
) {
	appComp = applicationComponent
	setupPage(
		PAGE_CONF[POLL_SEARCH_LIST],
		pageMap[POLL_SEARCH_LIST],
		topMenuMap[POLL_SEARCH_LIST],
		applicationComponent,
		'/'
	)
	for (const pageKey in PAGE_CONF) {
		setupPage(PAGE_CONF[pageKey], pageMap[pageKey], topMenuMap[pageKey], applicationComponent)
	}
	page({
		hashbang: true
	})
}

function configPage(
	key,
	authenticated,
	rightMenu,
	url = key
) {
	PAGE_CONF[key] = {
		authenticated,
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
			let {user}   = appComp.store.get()
			const params = {
				...context.params
			}
			if (!pageConfig.authenticated || user) {
				setPageComp(pageConfig, params, PageComp, TopMenuComp, appComp)
				return
			}
			user = appComp.store.get().user
			if (user) {
				setPageComp(pageConfig, params, PageComp, TopMenuComp, appComp)
				return
			}

			// Give Firebase Auth a bit of time to react
			setTimeout(() => {
				user = appComp.store.get().user
				if (user) {
					setPageComp(pageConfig, params, PageComp, TopMenuComp, appComp)
					return
				}
				appComp.store.set({signIn: true})
				const storeListener = appComp.store.on('state', ({changed, current}) => {
					if (changed.authChecked && current.user) {
						storeListener.cancel()
						appComp.store.set({signIn: false})
						setPageComp(pageConfig, params, PageComp, TopMenuComp, appComp)
						return
					}
					if (!changed.signIn || current.signIn) {
						return
					}
					storeListener.cancel()
					if (current.user) {
						setPageComp(pageConfig, params, PageComp, TopMenuComp, appComp)
					} else {
						navigateToPage(POLL_SEARCH_LIST)
					}
				})
			}, 400)
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
