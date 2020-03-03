import { DI } from '@airport/di';
import { CUBE_UTILS } from '../tokens';
export class CubeUtils {
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
DI.set(CUBE_UTILS, CubeUtils);
//# sourceMappingURL=CubeUtils.js.map