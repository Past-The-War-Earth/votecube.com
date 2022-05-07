var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
let EventListenerMap = class EventListenerMap {
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
};
EventListenerMap = __decorate([
    Injected()
], EventListenerMap);
export { EventListenerMap };
//# sourceMappingURL=EventListenerMap.js.map