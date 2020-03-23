"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../field/date/types");
const minDate_1 = require("./minDate");
function minTomorrow() {
    const tomorrow = types_1.utcNow();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    return minDate_1.minDate(tomorrow);
}
exports.minTomorrow = minTomorrow;
//# sourceMappingURL=minTomorrow.js.map