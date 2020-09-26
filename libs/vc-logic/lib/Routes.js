"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const page_1 = require("page");
const store_1 = require("svelte/store");
const store_2 = require("./store");
const tokens_1 = require("./tokens");
class Routes {
    constructor() {
        this.defaultRouteParams = {
            mode: 'build'
        };
        this.pageConf = {};
    }
    // private topMenuComp: Component
    configPages(config) {
        this.pageConf = {};
        for (const pathConfig of config) {
            const key = pathConfig[0];
            this.pageConf[key] = {
                authenticated: pathConfig[1],
                key,
                rightMenu: pathConfig[2],
                url: key
            };
        }
    }
    getPageComponent() {
        return this.pageComp;
    }
    // getTopMenuComponent(): Component {
    // 	return this.topMenuComp
    // }
    navigateToPage(pageKey, paramMap = this.defaultRouteParams) {
        const nextPage = this.pageConf[pageKey];
        this.setInProgressState(paramMap, nextPage.url);
        // FIXME: transition navigation to saper
        // page(this.inProgressUrl)
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
    setupRoutes(pageMap, setPageComp, defaultRoutePath, errorRoutePath) {
        this.setupPage(this.pageConf[defaultRoutePath], pageMap[defaultRoutePath], setPageComp, errorRoutePath, '/');
        for (const pageKey in this.pageConf) {
            this.setupPage(this.pageConf[pageKey], pageMap[pageKey], setPageComp, errorRoutePath);
        }
        page_1.default({
            hashbang: true
        });
    }
    setInProgressState(paramMap, url) {
        this.inProgressUrl = '' + url;
        this.inProgressParams = paramMap;
        if (paramMap) {
            for (const paramKey in paramMap) {
                this.inProgressUrl = this.inProgressUrl.replace(':' + paramKey, paramMap[paramKey]);
            }
        }
    }
    setPageComp(theCurrentPage, theCurrentUrl, theRouteParams, PageComp, setPageComp) {
        this.pageComp = PageComp;
        store_2.currentPage.set(theCurrentPage);
        store_2.currentUrl.set(theCurrentUrl);
        store_2.routeParams.set(theRouteParams);
        setPageComp(PageComp);
    }
    setupPage(pageConfig, PageComp, setPageComp, errorRoutePath, url = pageConfig.url) {
        page_1.default(url, (context) => {
            let currentUser = store_1.get(store_2.user);
            let params = this.inProgressParams;
            let nextUrl = this.inProgressUrl;
            if (!this.inProgressUrl) {
                params = this.inProgressParams = context.params;
                nextUrl = this.inProgressUrl = context.path;
            }
            if (!pageConfig.authenticated || currentUser) {
                this.setPageComp(pageConfig, nextUrl, params, PageComp, setPageComp);
                return;
            }
            if (currentUser) {
                this.setPageComp(pageConfig, nextUrl, params, PageComp, setPageComp);
                return;
            }
            // Give Firebase Auth a bit of time to react
            setTimeout(() => {
                currentUser = store_1.get(store_2.user);
                if (currentUser) {
                    this.setPageComp(pageConfig, nextUrl, params, PageComp, setPageComp);
                    return;
                }
                store_2.showSignIn.set(true);
                const signedInStateUnsubscribe = store_2.signedInState.subscribe(({ changed, current }) => {
                    if (changed.authChecked && current.user) {
                        signedInStateUnsubscribe();
                        store_2.showSignIn.set(false);
                        this.setPageComp(pageConfig, nextUrl, params, PageComp, setPageComp);
                        return;
                    }
                    if (!changed.showSignIn || current.showSignIn) {
                        return;
                    }
                    signedInStateUnsubscribe();
                    store_2.showSignIn.set(false);
                    if (current.user) {
                        this.setPageComp(pageConfig, nextUrl, params, PageComp, setPageComp);
                    }
                    else {
                        // const {lastPage, lastUrl} = appComp.store.get()
                        // if (!lastPage || lastPage.authenticated) {
                        // 	navigateToPage(POLL_LIST)
                        // } else if (lastUrl) {
                        // 	page(lastUrl)
                        // }
                        if (!current.currentPage || current.currentPage.authenticated) {
                            this.navigateToPage(errorRoutePath);
                        }
                        else if (current.currentUrl) {
                            page_1.default(current.currentUrl);
                        }
                    }
                });
            }, 400);
        });
    }
}
exports.Routes = Routes;
di_1.DI.set(tokens_1.ROUTES, Routes);
//# sourceMappingURL=Routes.js.map