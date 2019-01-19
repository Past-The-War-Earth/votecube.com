import page from 'page'

export var PAGE_CONF = {}

let appComp

export var CHART = '/Poll/Vote/Chart'
export var CREATE_POLL_NAME_LOG_DATE = '/Poll/Create/NameLocationDates'
export var CUBE = '/Poll/Vote/Cube'
export var SELECT_POLL_DATES = '/Poll/Create/Dates'
export var SELECT_POLL_LOCATION = '/Poll/Create/Location'

configPage(
    CHART,
    'Trump\'s Policies',
    true
)
configPage(
    CREATE_POLL_NAME_LOG_DATE,
    'Create Poll',
    false
)
configPage(
    CUBE,
    'Trump\'s Policies',
    true
)
configPage(
    SELECT_POLL_DATES,
    'Select Poll Date(s)',
    false
)
configPage(
    SELECT_POLL_LOCATION,
    'Select Poll Location',
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
    setupPage(PAGE_CONF[CUBE], pageMap[CUBE], applicationComponent, '/')
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
        url, () => {
            setPageComp(pageConfig, PageComp, appComp)
        })
}

function setPageComp(
    currentPage,
    PageComp,
    appComp
) {
    appComp.store.set({currentPage})
    appComp.set({PageComp})
}
