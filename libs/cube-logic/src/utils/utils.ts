export interface IGlobalEventListenerMap {
	tM: Map<Node, IPerElementEventListenerMap>

	ad(
		target: Node // NodePtr
	): IPerElementEventListenerMap
}

export type IEventListener<E extends Event> =
	(event: E) => void

export type IAddEventListener =
	(
		eventName: string,
		listener: IEventListener<any>
	) => IAddEventListener

export type IRemoveEventListener =
	(
		eventName: string
	) => IRemoveEventListener

export interface IPerElementEventListenerMap {
	ad: IAddEventListener
	rm: IRemoveEventListener
	lM: Map<string, IEventListener<any>>
}

// Global (per Element) Event Listener map
export const LM: IGlobalEventListenerMap = {
	tM: new Map(), // Target element Map
	// Add add event handler to element
	ad(
		element: Node // | NodePtr, // element
	) {
		return eCO(this.tM, element,
			// Per element Event listener map
			{
				lM: new Map(), // Listener Map
				// And a listener fo a particular event
				ad(
					eventName: string, // event name
					listener: IEventListener<any> // listener
				) {
					// add to array
					eCA(this.lM, eventName)
						.push(listener)
					// let node: Node = <Node>tg
					// if (tg instanceof  NodePtr) {
					// 	node = tg.val
					// }
					// node.addEventListener(eN, ln)
					element.addEventListener(eventName, listener)

					return (
						eventName2: string,
						listener2: IEventListener<any>
					) => {
						return this.ad(eventName2, listener2)
					}
				},
				rm(
					eventName: string // event name
				) {
					if (this.lM.has(eventName)) {
						for (const listener of this.lM.get(eventName)) {
							// let node: Node = <Node>tg
							// if (tg instanceof NodePtr) {
							// 	node = tg.val
							// }
							// node.removeEventListener(eN, ln)
							element.removeEventListener(eventName, listener)
						}
						this.lM.delete(eventName)
					}

					return (
						eventName2: string
					) => {
						return this.rm(eventName2)
					}
				}
			})
	}

}

// Ensure Child Object
export function eCO<K, V>(
	map: Map<K, V>, // map
	key: K, // key
	object: V // object
): V {
	if (map.has(key)) {
		return map.get(key)
	}
	map.set(key, object)

	return object
}

// Ensure Child Array
export function eCA<K, V>(
	map: Map<K, V[]>, // map
	key: K // key
): V[] {
	let array = map.get(key)
	if (array) {
		return array
	}
	array = []
	map.set(key, array)

	return array
}

// Get by query selector
export function gQ(
	selector: string // selector
): Element {
	return document.querySelector(selector)
}

export type IDispatchEventOnKnownObject<E> =
	(event: E) => IDispatchEventOnKnownObject<E>

// dispatch event
export function dE<E>(
	target: Node,  // NodePtr, // target
	eventName: string, // Event Name,
	eventObject: E // Event Object
): IDispatchEventOnKnownObject<E> {
	// tg.val.dispatchEvent(new CustomEvent(eN, {detail: eO}))
	target.dispatchEvent(new CustomEvent(eventName, {detail: eventObject}))
	return (
		eO2 // event object
	) => {
		return dE(target, eventName, eO2)
	}
}

// Prevent default
export function pD(
	ev: Event // Event
): void {
	ev.preventDefault()
}

export interface IsKnownElementOfTag {
	(): boolean

	(tagName: string): IsKnownElementOfTag
}

// is tag
export function iT(t: Element): boolean;
export function iT(
	t: Element,
	tN: string,
	aM?: boolean
): IsKnownElementOfTag;
export function iT(
	target: Element, // target
	tagName?: string, // tag name
	aggregateMatch?: boolean  // aggregate match
): any {
	if (!tagName) {
		return aggregateMatch
	}
	if (!aggregateMatch) {
		aggregateMatch = target.tagName === tagName
	}
	return function (
		tagName2?: string // tag name
	) {
		return iT(target, tagName2, aggregateMatch)
	}
}

export function secondIsGreaterShortcircuit(
	chain: any[][]
): boolean {
	for (let pair of chain) {
		if (pair[1] > pair[0]) {
			return true
		}
		if (pair[1] < pair[0]) {
			return false
		}
	}
	return false
}
