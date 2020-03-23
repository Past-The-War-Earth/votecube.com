"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function utcNow() {
    const nowLocal = new Date();
    return new Date(Date.UTC(nowLocal.getFullYear(), nowLocal.getMonth(), nowLocal.getDate()));
}
exports.utcNow = utcNow;
//# sourceMappingURL=types.js.map