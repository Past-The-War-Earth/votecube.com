import page from 'page'

export var PAGE_CONF = {}

let appComp,
    pageComp,
    topMenuComp,
    inProgressUrl,
    inProgressParams

export const FACTOR_INFO_MAIN    = '/factor/info/Main/:mode'
export const FACTOR_SEARCH_LIST  = '/factor/List'
export const POLL_SEARCH_LIST    = '/poll/search/List'
export const POLL_VARIATION_LIST = '/poll/variation/List/:pollKey/:pollVariationKey'
export const POLL_INFO_MAIN      = '/poll/info/Main/:mode'
export const POLL_INFO_CUBE      = '/poll/info/Cube/:mode/:pollKey/:pollVariationKey'
export const POLL_LOCATIONS      = '/poll/Locations/:mode'
export const POLL_TIMEFRAME      = '/poll/Timeframe/:mode'

export const DEFAULT_ROUTE_PARAMS = {
	mode: 'build'
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
	setInProgressState(paramMap, nextPage.url)

	page(inProgressUrl)
	// let currentPage,
	//     currentUrl
	// if (appComp.store) {
	// 	const state = appComp.store.get()
	// 	currentPage = state.currentPage
	// 	currentUrl  = state.currentUrl
	// }
	// appComp.store.set({
	// 	currentPage: nextPage,
	// 	currentUrl: url,
	// 	lastPage: currentPage,
	// 	lastUrl: currentUrl,
	// 	routeParams: paramMap
	// })
}

function setInProgressState(
	paramMap,
	url
) {
	inProgressUrl    = '' + url
	inProgressParams = paramMap
	if (paramMap) {
		for (const paramKey in paramMap) {
			inProgressUrl = inProgressUrl.replace(':' + paramKey, paramMap[paramKey])
		}
	}
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
			let params = inProgressParams
			let nextUrl = inProgressUrl

			if (!inProgressUrl) {
				params = inProgressParams = context.params
				nextUrl = inProgressUrl    = context.path
			}

			if (!pageConfig.authenticated || user) {
				setPageComp(pageConfig, nextUrl, params, PageComp, TopMenuComp, appComp)
				return
			}
			user = appComp.store.get().user
			if (user) {
				setPageComp(pageConfig, nextUrl, params, PageComp, TopMenuComp, appComp)
				return
			}

			// Give Firebase Auth a bit of time to react
			setTimeout(() => {
				user = appComp.store.get().user
				if (user) {
					setPageComp(pageConfig, nextUrl, params, PageComp, TopMenuComp, appComp)
					return
				}
				appComp.store.set({signIn: true})
				const storeListener = appComp.store.on('state', ({changed, current}) => {
					if (changed.authChecked && current.user) {
						storeListener.cancel()
						appComp.store.set({signIn: false})
						setPageComp(pageConfig, nextUrl, params, PageComp, TopMenuComp, appComp)
						return
					}
					if (!changed.signIn || current.signIn) {
						return
					}
					storeListener.cancel()
					appComp.store.set({signIn: false})
					if (current.user) {
						setPageComp(pageConfig, nextUrl, params, PageComp, TopMenuComp, appComp)
					} else {
						// const {lastPage, lastUrl} = appComp.store.get()
						// if (!lastPage || lastPage.authenticated) {
						// 	navigateToPage(POLL_SEARCH_LIST)
						// } else if (lastUrl) {
						// 	page(lastUrl)
						// }
						const {currentPage, currentUrl} = appComp.store.get()
						if (!currentPage || currentPage.authenticated) {
							navigateToPage(POLL_SEARCH_LIST)
						} else if (currentUrl) {
							page(currentUrl)
						}
					}
				})
			}, 400)
		})
}

function setPageComp(
	currentPage,
	currentUrl,
	routeParams,
	PageComp,
	TopMenuComp,
	appComp
) {
	pageComp    = PageComp
	topMenuComp = TopMenuComp

	// const state = appComp.store.get()

	appComp.store.set({
		currentPage,
		currentUrl,
		// lastPage: state.currentPage,
		// lastUrl: state.currentUrl,
		routeParams
	})

	appComp.set({PageComp})
}
