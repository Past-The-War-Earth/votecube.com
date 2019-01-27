import page from 'page'

export var PAGE_CONF = {}

let appComp

export var DIMENSION_LIST = '/Dimension/List'
export var CHART = '/Poll/:pollId/Vote/Chart'
export var CREATE_POLL_NAME_LOC_DATE = '/Poll/Create/NameLocationsTimeframe'
export var CUBE = '/Poll/:pollId/Vote/Cube'
export var SELECT_POLL_DIMENSIONS = '/Poll/Create/Dimensions'
export var SELECT_POLL_LOCATIONS = '/Poll/Create/Locations'
export var SELECT_POLL_TIMEFRAME = '/Poll/Create/Timeframe'

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


export function navigateToPage(
    pageKey
) {
    let currentPage = PAGE_CONF[pageKey]
    page(currentPage.url)
    appComp.store.set({currentPage})
}

export function setupRoutes(
    applicationComponent,
    pageMap
) {
    appComp = applicationComponent
    setupPage(PAGE_CONF[CREATE_POLL_NAME_LOC_DATE], pageMap[CREATE_POLL_NAME_LOC_DATE], applicationComponent, '/')
    for (const pageKey in PAGE_CONF) {
        setupPage(PAGE_CONF[pageKey], pageMap[pageKey], applicationComponent)
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
    appComp,
    url = pageConfig.url
) {
    page(
        url, (context) => {
            setPageComp(pageConfig, context.params, PageComp, appComp)
        })
}

function setPageComp(
    currentPage,
    routeParams,
    PageComp,
    appComp
) {
    appComp.store.set({currentPage, routeParams})
    appComp.set({PageComp})
}
