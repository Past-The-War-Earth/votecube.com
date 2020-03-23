"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("svelte/store");
function createShowMainMenu() {
    const store = store_1.writable(false);
    return {
        subscribe: store.subscribe,
        toggle: () => store.set(!store_1.get(store))
    };
}
function createTopMenuShown() {
    const store = store_1.writable(false);
    return {
        subscribe: store.subscribe,
        toggle: () => store.set(!store_1.get(store))
    };
}
function createTextToast() {
    const { set, subscribe } = store_1.writable({
        seconds: 0,
        text: '',
        time: null
    });
    return {
        subscribe,
        toggle: (newText, seconds = 3) => {
            set({
                seconds,
                text: newText,
                time: new Date().getTime()
            });
        }
    };
}
exports.authChecked = store_1.writable(false);
exports.cardMove = store_1.writable(null);
exports.checkSizeIntervalId = store_1.writable(-1);
exports.cube = store_1.writable(false);
exports.currentPage = store_1.writable(null);
// export let currentPage         = writable<IRouteConfig>(null)
// export let currentUrl          = writable<Route_Path>('')
exports.emInPx = store_1.writable(0);
exports.forms = store_1.writable(null);
exports.isDesktop = store_1.writable(false);
exports.mode = store_1.writable(null);
exports.noOverflow = store_1.writable(false);
exports.pageTitle = store_1.writable('Votecube');
exports.popup = store_1.writable(false);
exports.portalHeight = store_1.writable(0);
exports.resized = store_1.writable(false);
exports.routeParams = store_1.writable(null);
exports.showConfirm = store_1.writable(false);
exports.showMainMenu = createShowMainMenu();
exports.showSignIn = store_1.writable(false);
exports.text = store_1.writable({});
exports.textToast = createTextToast();
exports.topMenuShown = createTopMenuShown();
exports.user = store_1.writable(null);
exports.verticalLayout = store_1.writable(true);
exports.windowWidth = store_1.writable(0);
exports.showTopMenu = store_1.derived([
    exports.showMainMenu,
    exports.topMenuShown
], ([$showMainMenu, $topMenuShown]) => !$showMainMenu && $topMenuShown);
let lastSignedInState = {
    authChecked: false,
    currentPage: null,
    currentUrl: '',
    showSignIn: false,
    user: null
};
exports.signedInState = store_1.derived([
    exports.authChecked,
    exports.currentPage,
    // currentUrl,
    exports.showSignIn,
    exports.user
], ([$authChecked, $currentPage, $currentUrl, $showSignIn, $user]) => {
    const changed = {
        authChecked: $authChecked !== lastSignedInState.authChecked,
        currentPage: $currentPage !== lastSignedInState.currentPage,
        currentUrl: $currentUrl !== lastSignedInState.currentUrl,
        showSignIn: $showSignIn !== lastSignedInState.showSignIn,
        user: $user !== lastSignedInState.user
    };
    lastSignedInState = {
        authChecked: $authChecked,
        currentPage: $currentPage,
        currentUrl: $currentUrl,
        showSignIn: $showSignIn,
        user: $user
    };
    return {
        changed,
        current: lastSignedInState
    };
});
//# sourceMappingURL=store.js.map