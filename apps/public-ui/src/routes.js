import page from 'page'

export var PAGE_CONF = {}

let appComp, pageComp, topMenuComp

export var DIMENSION_INFO_MAIN = '/dimension/info/Main'
export var DIMENSION_SEARCH_LIST = '/dimension/List'
export var DIMENSION_PICK_COLOR = '/dimension/PickColor'
export var DIRECTION_INFO_MAIN = '/direction/info/Main'
export var POLL_SEARCH_LIST = '/poll/search/List'
export var POLL_INFO_MAIN = '/poll/info/Main/:mode/:pollId'
export var POLL_INFO_CHART = '/poll/info/Chart/:mode/:pollId'
export var POLL_INFO_CUBE = '/poll/info/Cube/:mode/:pollId'
export var POLL_LOCATIONS = '/poll/Locations'
export var POLL_TIMEFRAME = '/poll/Timeframe'

configPage(
    DIRECTION_INFO_MAIN,
    'Direction Info',
    false
)
configPage(
    DIMENSION_INFO_MAIN,
    'Dimension Info',
    false
)
configPage(
    DIMENSION_PICK_COLOR,
    'Pick Dimension Color',
    false
)
configPage(
    DIMENSION_SEARCH_LIST,
    'Trump\'s Policies',
    true
)
configPage(
    POLL_INFO_CHART,
    'Trump\'s Policies',
    true
)
configPage(
    POLL_SEARCH_LIST,
    'Poll List',
    true
)
configPage(
    POLL_INFO_MAIN,
    'Poll Info',
    false
)
configPage(
    POLL_INFO_CUBE,
    'Trump\'s Policies',
    true
)
configPage(
    POLL_LOCATIONS,
    'Select Poll Location(s)',
    false
)
configPage(
    POLL_TIMEFRAME,
    'Poll Time-frame',
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
    paramMap
) {
    let currentPage = PAGE_CONF[pageKey]
    let url = '' + currentPage.url
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
    name,
    rightMenu,
    url = key
) {
    PAGE_CONF[key] = {
        key,
        name,
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
    pageComp = PageComp
    topMenuComp = TopMenuComp
    appComp.store.set({currentPage, routeParams})
    appComp.set({PageComp})
}
