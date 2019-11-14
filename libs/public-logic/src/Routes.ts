import {DI} from '@airport/di'
import page from 'page'

import {ROUTES} from './diTokens'

export type Route_Path = string

export type Component = any

export type Route_Authenticated = boolean
export type Route_RightMenu = boolean

export type Route_ParamValue = string

export interface IRouteParamMap {
	[paramName: string]: Route_ParamValue
}

export interface IRoutes {

	ABOUT: Route_Path
	FEEDBACK: Route_Path
	RELEASE_PLAN: Route_Path
	FACTOR_INFO_MAIN: Route_Path
	FACTOR_LIST: Route_Path
	POLL_LIST: Route_Path
	VARIATION_LIST: Route_Path
	POLL_FORM: Route_Path
	POLL_MAIN: Route_Path
	POLL_LOCATIONS: Route_Path
	POLL_TIME_FRAME: Route_Path
	CARD_CLIMATE_CHANGE: Route_Path

	getPageComponent(): Component

	getTopMenuComponent(): Component

	navigateToPage(
		pageKey: Route_Path,
		paramMap: {
			[paramName: string]: Route_ParamValue
		}
	): void

	setupRoutes(
		applicationComponent: Component,
		pageMap: {
			[pageKey: string]: Component
		},
		topMenuMap: {
			[componentKey: string]: Component
		}
	): void


}

export interface IRouteConfig {

	authenticated: Route_Authenticated
	key: Route_Path
	rightMenu: Route_RightMenu
	url: Route_Path

}

export class Routes
	implements IRoutes {

	ABOUT               = '/about'
	FEEDBACK            = '/feedback'
	RELEASE_PLAN        = '/releasePlan'
	FACTOR_INFO_MAIN    = '/factor/info/Main/:mode'
	FACTOR_LIST         = '/factor/List'
	POLL_LIST           = '/poll/List'
	VARIATION_LIST      = '/variation/List/:pollKey/:pollVariationKey'
	POLL_FORM           = '/poll/Form/:mode'
	POLL_MAIN           = '/poll/Main/:mode/:pollKey/:pollVariationKey'
	POLL_LOCATIONS      = '/poll/Locations/:mode'
	POLL_TIME_FRAME     = '/poll/TimeFrame/:mode'
	CARD_CLIMATE_CHANGE = '/card/ClimateChange'

	private appComp: Component

	private defaultRouteParams: IRouteParamMap = {
		mode: 'build'
	}

	private inProgressParams: IRouteParamMap

	private inProgressUrl: Route_Path

	private pageComp: Component

	private pageConf: {
		[key: string]: IRouteConfig
	} = {}

	private topMenuComp: Component

	constructor() {
		this.configPages([
			[this.ABOUT, false, false],
			[this.FEEDBACK, false, false],
			[this.RELEASE_PLAN, false, false],
			[this.CARD_CLIMATE_CHANGE, false, false],
			[this.FACTOR_INFO_MAIN, false, false],
			[this.FACTOR_LIST, false, true],
			[this.POLL_LIST, false, true],
			[this.VARIATION_LIST, false, true],
			[this.POLL_FORM, true, false],
			[this.POLL_MAIN, false, true],
			[this.POLL_LOCATIONS, true, false],
			[this.POLL_TIME_FRAME, true, false]
		])
	}

	getPageComponent(): Component {
		return this.pageComp
	}

	getTopMenuComponent(): Component {
		return this.topMenuComp
	}

	navigateToPage(
		pageKey: Route_Path,
		paramMap: IRouteParamMap = this.defaultRouteParams
	): void {
		const nextPage = this.pageConf[pageKey]
		this.setInProgressState(paramMap, nextPage.url)

		page(this.inProgressUrl)
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

	setupRoutes(
		applicationComponent: Component,
		pageMap: {
			[pageKey: string]: Component
		},
		topMenuMap: {
			[componentKey: string]: Component
		}
	): void {

		this.appComp = applicationComponent
		this.setupPage(
			this.pageConf[this.ABOUT],
			pageMap[this.ABOUT],
			topMenuMap[this.ABOUT],
			applicationComponent,
			'/'
		)

		for (const pageKey in this.pageConf) {
			this.setupPage(this.pageConf[pageKey], pageMap[pageKey],
				topMenuMap[pageKey], applicationComponent)
		}

		page({
			hashbang: true
		})
	}

	private configPages(
		config: Array<[Route_Path, Route_RightMenu, Route_RightMenu]>
	): void {
		for (const pathConfig of config) {
			const key = pathConfig[0]

			this.pageConf[key] = {
				authenticated: pathConfig[1],
				key,
				rightMenu: pathConfig[2],
				url: key
			}
		}
	}

	private setInProgressState(
		paramMap: IRouteParamMap,
		url: Route_Path
	): void {
		this.inProgressUrl    = '' + url
		this.inProgressParams = paramMap
		if (paramMap) {
			for (const paramKey in paramMap) {
				this.inProgressUrl = this.inProgressUrl.replace(':' + paramKey, paramMap[paramKey])
			}
		}
	}

	private setPageComp(
		currentPage: IRouteConfig,
		currentUrl: Route_Path,
		routeParams: IRouteParamMap,
		PageComp: Component,
		TopMenuComp: Component,
		appComp: Component
	): void {
		this.pageComp    = PageComp
		this.topMenuComp = TopMenuComp

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

	private setupPage(
		pageConfig: IRouteConfig,
		PageComp: Component,
		TopMenuComp: Component,
		appComp: Component,
		url = pageConfig.url
	): void {
		page(
			url, (context) => {
				let {user}  = appComp.store.get()
				let params  = this.inProgressParams
				let nextUrl = this.inProgressUrl

				if (!this.inProgressUrl) {
					params  = this.inProgressParams = context.params
					nextUrl = this.inProgressUrl = context.path
				}

				if (!pageConfig.authenticated || user) {
					this.setPageComp(pageConfig, nextUrl, params, PageComp, TopMenuComp, appComp)
					return
				}
				user = appComp.store.get().user
				if (user) {
					this.setPageComp(pageConfig, nextUrl, params, PageComp, TopMenuComp, appComp)
					return
				}

				// Give Firebase Auth a bit of time to react
				setTimeout(() => {
					user = appComp.store.get().user
					if (user) {
						this.setPageComp(pageConfig, nextUrl, params, PageComp, TopMenuComp, appComp)
						return
					}
					appComp.store.set({signIn: true})
					const storeListener = appComp.store.on('state', ({changed, current}) => {
						if (changed.authChecked && current.user) {
							storeListener.cancel()
							appComp.store.set({signIn: false})
							this.setPageComp(pageConfig, nextUrl, params, PageComp, TopMenuComp, appComp)
							return
						}
						if (!changed.signIn || current.signIn) {
							return
						}
						storeListener.cancel()
						appComp.store.set({signIn: false})
						if (current.user) {
							this.setPageComp(pageConfig, nextUrl, params, PageComp, TopMenuComp, appComp)
						} else {
							// const {lastPage, lastUrl} = appComp.store.get()
							// if (!lastPage || lastPage.authenticated) {
							// 	navigateToPage(POLL_LIST)
							// } else if (lastUrl) {
							// 	page(lastUrl)
							// }
							const {currentPage, currentUrl} = appComp.store.get()
							if (!currentPage || currentPage.authenticated) {
								this.navigateToPage(this.POLL_LIST)
							} else if (currentUrl) {
								page(currentUrl)
							}
						}
					})
				}, 400)
			})
	}

}

DI.set(ROUTES, Routes)
