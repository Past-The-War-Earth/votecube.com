var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
let CubeUtils = class CubeUtils {
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
};
CubeUtils = __decorate([
    Injected()
], CubeUtils);
export { CubeUtils };
//# sourceMappingURL=CubeUtils.js.map