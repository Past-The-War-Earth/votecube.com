"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../tokens");
class CubeUtils {
    // Get by query selector
    gQ(selector // selector
    ) {
        return document.querySelector(selector);
    }
    // Prevent default
    pD(ev // Event
    ) {
        ev.preventDefault();
    }
    iT(target, // target
    tagName, // tag name
    aggregateMatch // aggregate match
    ) {
        if (!tagName) {
            return aggregateMatch;
        }
        if (!aggregateMatch) {
            aggregateMatch = target.tagName === tagName;
        }
        return (tagName2 // tag name
        ) => {
            return this.iT(target, tagName2, aggregateMatch);
        };
    }
    secondIsGreaterShortCircuit(chain) {
        for (const pair of chain) {
            if (pair[1] > pair[0]) {
                return true;
            }
            if (pair[1] < pair[0]) {
                return false;
            }
        }
        return false;
    }
}
exports.CubeUtils = CubeUtils;
di_1.DI.set(tokens_1.CUBE_UTILS, CubeUtils);
//# sourceMappingURL=CubeUtils.js.map