"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../tokens");
class EventListenerMap {
    constructor() {
        this.tM = new Map(); // Target element Map
    }
    // Add add event handler to element
    ad(element // | NodePtr, // element
    ) {
        const eventListener = this;
        return this.eCO(this.tM, element, 
        // Per element Event listener map
        {
            lM: new Map(),
            // And a listener fo a particular event
            ad(eventName, // event name
            listener // listener
            ) {
                // add to array
                eventListener.eCA(this.lM, eventName)
                    .push(listener);
                // let node: Node = <Node>tg
                // if (tg instanceof  NodePtr) {
                // 	node = tg.val
                // }
                // node.addEventListener(eN, ln)
                element.addEventListener(eventName, listener);
                return (eventName2, listener2) => {
                    return this.ad(eventName2, listener2);
                };
            },
            rm(eventName // event name
            ) {
                if (this.lM.has(eventName)) {
                    for (const listener of this.lM.get(eventName)) {
                        // let node: Node = <Node>tg
                        // if (tg instanceof NodePtr) {
                        // 	node = tg.val
                        // }
                        // node.removeEventListener(eN, ln)
                        element.removeEventListener(eventName, listener);
                    }
                    this.lM.delete(eventName);
                }
                return (eventName2) => {
                    return this.rm(eventName2);
                };
            }
        });
    }
    // Ensure Child Object
    eCO(map, // map
    key, // key
    object // object
    ) {
        if (map.has(key)) {
            return map.get(key);
        }
        map.set(key, object);
        return object;
    }
    // Ensure Child Array
    eCA(map, // map
    key // key
    ) {
        let array = map.get(key);
        if (array) {
            return array;
        }
        array = [];
        map.set(key, array);
        return array;
    }
    // dispatch event
    dE(target, // NodePtr, // target
    eventName, // Event Name,
    eventObject // Event Object
    ) {
        // tg.val.dispatchEvent(new CustomEvent(eN, {detail: eO}))
        target.dispatchEvent(new CustomEvent(eventName, { detail: eventObject }));
        return (eO2 // event object
        ) => {
            return this.dE(target, eventName, eO2);
        };
    }
}
exports.EventListenerMap = EventListenerMap;
di_1.DI.set(tokens_1.EVENT_LISTENER_MAP, EventListenerMap);
//# sourceMappingURL=EventListenerMap.js.map