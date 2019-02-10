import page from 'page'

export var PAGE_CONF = {}

let appComp, pageComp, topMenuComp

export var DIMENSION_INFO = '/Dimension/Create'
export var DIMENSION_LIST = '/Dimension/List'
export var DIMENSION_PICK_COLOR = '/Dimension/PickColor'
export var DIRECTION_INFO = '/Direction/Create'
export var POLL_LIST = '/Poll/List'
export var POLL_MAIN_INFO = '/Poll/MainInfo'
export var POLL_VOTE_CHART = '/Poll/:pollId/Vote/Chart'
export var POLL_VOTE_CUBE = '/Poll/:pollId/Vote/Cube'
export var POLL_LOCATIONS = '/Poll/Locations'
export var POLL_TIMEFRAME = '/Poll/Timeframe'

configPage(
    DIRECTION_INFO,
    'Direction Info',
    false
)
configPage(
    DIMENSION_INFO,
    'Dimension Info',
    false
)
configPage(
    DIMENSION_PICK_COLOR,
    'Pick Dimension Color',
    false
)
configPage(
    DIMENSION_LIST,
    'Trump\'s Policies',
    true
)
configPage(
    POLL_VOTE_CHART,
    'Trump\'s Policies',
    true
)
configPage(
    POLL_LIST,
    'Poll List',
    true
)
configPage(
    POLL_MAIN_INFO,
    'Poll Info',
    false
)
configPage(
    POLL_VOTE_CUBE,
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
    setupPage(PAGE_CONF[POLL_LIST], pageMap[POLL_LIST], topMenuMap[POLL_LIST], applicationComponent, '/')
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
