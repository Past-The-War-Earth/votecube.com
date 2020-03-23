"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let changeCount = 0;
function addChange() {
    return ++changeCount;
}
exports.addChange = addChange;
function getChange() {
    return changeCount;
}
exports.getChange = getChange;
//# sourceMappingURL=changeTracker.js.map