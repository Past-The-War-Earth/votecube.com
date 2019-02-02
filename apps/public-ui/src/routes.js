import page from 'page'

export var PAGE_CONF = {}

let appComp, pageComp, topMenuComp

export var CREATE_DIRECTION = '/Direction/Create'
export var CREATE_DIMENSION = '/Dimension/Create'
export var DIMENSION_LIST = '/Dimension/List'
export var PICK_DIMENSION_COLOR = '/Dimension/PickColor'
export var CHART = '/Poll/:pollId/Vote/Chart'
export var CREATE_POLL_NAME_LOC_DATE = '/Poll/Create/NameLocationsTimeframe'
export var CUBE = '/Poll/:pollId/Vote/Cube'
export var SELECT_POLL_DIMENSIONS = '/Poll/Create/Dimensions'
export var SELECT_POLL_LOCATIONS = '/Poll/Create/Locations'
export var SELECT_POLL_TIMEFRAME = '/Poll/Create/Timeframe'

configPage(
    CREATE_DIRECTION,
    'Create Direction',
    false
)
configPage(
    CREATE_DIMENSION,
    'Create Dimension',
    false
)
configPage(
    PICK_DIMENSION_COLOR,
    'Pick Dimension Color',
    false
)
configPage(
    DIMENSION_LIST,
    'Trump\'s Policies',
    true
)
configPage(
    CHART,
    'Trump\'s Policies',
    true
)
configPage(
    CREATE_POLL_NAME_LOC_DATE,
    'Create Poll',
    false
)
configPage(
    CUBE,
    'Trump\'s Policies',
    true
)
configPage(
    SELECT_POLL_DIMENSIONS,
    'Select Poll Dimensions',
    false
)
configPage(
    SELECT_POLL_LOCATIONS,
    'Select Poll Location(s)',
    false
)
configPage(
    SELECT_POLL_TIMEFRAME,
    'Select Poll Time-frame',
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
    setupPage(PAGE_CONF[CREATE_POLL_NAME_LOC_DATE], pageMap[CREATE_POLL_NAME_LOC_DATE], null, applicationComponent, '/')
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
