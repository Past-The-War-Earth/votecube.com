import page from 'page'
import {
	currentPage,
	PageComp,
	routeParams
} from '../store'

export const DEFAULT_ROUTE_PARAMS = {
	mode: 'build',
	pollId: 0
}

export let PAGE_CONF = {}

let pageComp, topMenuComp

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
	const theCurrentPage = PAGE_CONF[pageKey]
	let url           = '' + theCurrentPage.url
	if (paramMap) {
		for (const paramKey in paramMap) {
			url = url.replace(':' + paramKey, paramMap[paramKey])
		}
	}
	page(url)
	currentPage.set(theCurrentPage)
}

export function configPage(
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

export function setupPage(
	pageConfig,
	NewPageComp,
	TopMenuComp,
	url = pageConfig.url
) {
	page(
		url, (context) => {
			setPageComp(pageConfig, context.params, NewPageComp, TopMenuComp)
		})
}

function setPageComp(
	newCurrentPage,
	newRouteParams,
	NewPageComp,
	TopMenuComp
) {
	pageComp    = NewPageComp
	topMenuComp = TopMenuComp
	currentPage.set(newCurrentPage)
	PageComp.set(NewPageComp)
	routeParams.set(newRouteParams)
}
