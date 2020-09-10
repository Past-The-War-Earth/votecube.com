"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("svelte/store");
const store_2 = require("./store");
let viewCallback;
function setResizeCllBck(resizeCallback) {
    viewCallback = resizeCallback;
    if (resizeCallback) {
        resize();
    }
}
exports.setResizeCllBck = setResizeCllBck;
function startResizeInterval() {
    resize();
    const newCheckSizeIntervalId = setInterval(() => {
        if (store_1.get(store_2.resized)) {
            resize();
        }
    }, 500);
    store_2.checkSizeIntervalId.set(newCheckSizeIntervalId);
}
exports.startResizeInterval = startResizeInterval;
/*
export function stopResizeInterval() {
    clearInterval(get(checkSizeIntervalId))
}*/
function scheduleToResize() {
    store_2.resized.set(true);
}
exports.scheduleToResize = scheduleToResize;
function resize() {
    const theWindowWidth = window.innerWidth;
    const thePortalHeight = window.innerHeight;
    let theVerticalLayout = true;
    if (thePortalHeight < theWindowWidth && thePortalHeight < 400) {
        theVerticalLayout = false;
    }
    store_2.isDesktop.set(theWindowWidth >= store_1.get(store_2.emInPx) * 62);
    store_2.portalHeight.set(thePortalHeight);
    store_2.resized.set(false);
    store_2.verticalLayout.set(theVerticalLayout);
    store_2.windowWidth.set(theWindowWidth);
    if (viewCallback) {
        viewCallback(thePortalHeight, theWindowWidth, theVerticalLayout);
    }
}
//# sourceMappingURL=resizer.js.map