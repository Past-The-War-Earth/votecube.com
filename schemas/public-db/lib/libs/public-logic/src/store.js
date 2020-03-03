import { derived, get, writable } from 'svelte/store';
function createShowMainMenu() {
    const store = writable(false);
    return {
        subscribe: store.subscribe,
        toggle: () => store.set(!get(store))
    };
}
function createTopMenuShown() {
    const store = writable(false);
    return {
        subscribe: store.subscribe,
        toggle: () => store.set(!get(store))
    };
}
function createTextToast() {
    const { set, subscribe } = writable({
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
export let authChecked = writable(false);
export let cardMove = writable(null);
export let checkSizeIntervalId = writable(-1);
export let cube = writable(false);
export let currentPage = writable(null);
export let currentUrl = writable('');
export let emInPx = writable(0);
export let forms = writable(null);
export let isDesktop = writable(false);
export let mode = writable(null);
export let noOverflow = writable(false);
export let pageTitle = writable('Votecube');
export let popup = writable(false);
export let portalHeight = writable(0);
export let resized = writable(false);
export let routeParams = writable(null);
export let showConfirm = writable(false);
export let showMainMenu = createShowMainMenu();
export let showSignIn = writable(false);
export let text = writable({});
export let textToast = createTextToast();
export const topMenuShown = createTopMenuShown();
export let user = writable(null);
export let verticalLayout = writable(true);
export let windowWidth = writable(0);
export let showTopMenu = derived([
    showMainMenu,
    topMenuShown
], ([$showMainMenu, $topMenuShown]) => !$showMainMenu && $topMenuShown);
let lastSignedInState = {
    authChecked: false,
    currentPage: null,
    currentUrl: '',
    showSignIn: false,
    user: null
};
export let signedInState = derived([
    authChecked,
    currentPage,
    currentUrl,
    showSignIn,
    user
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