export class UiObjectBuilder {

	currentDescriptor = {
		from: [],
		to: []
	}
	fromObj
	toObj

	constructor(
		from,
		to = {}
	) {
		this.fromObj = from
		this.toObj   = to
	}

	from(path): UiObjectBuilder {
		if (!(path instanceof Array)) {
			throw new Error('from Path must be an Array')
		}
		this.currentDescriptor.from = path

		return this
	}

	fromTo(path): UiObjectBuilder {
		this.from(path)
		this.to(path)

		return this
	}

	to(path): UiObjectBuilder {
		if (!(path instanceof Array)) {
			throw new Error('to Path must be an Array')
		}
		this.currentDescriptor.to = path

		return this
	}

	setEach(
		callback,
		options
	) {
		const {
			      lastToFragment,
			      nestedFrom,
			      nestedTo
		      } = this.traversePath(
			// true
		)
		if (!options) {
			options = {}
			if (options.indexOffset === undefined) {
				options.indexOffset = 0
			}
		}
		options.index = 0

		for (const fromKey in nestedFrom) {
			if (fromKey === 'marks') {
				continue
			}
			const aNestedFrom = nestedFrom[fromKey]
			const paths       = {
				lastToFragment,
				nestedFrom: aNestedFrom,
				nestedTo
			}
			this.doSet(paths, callback, fromKey, options)
			options.indexOffset = 0
			options.index++
		}
	}

	set(callback) {
		this.doSet(this.traversePath(), callback)
	}

	doSet(
		paths,
		callback,
		fromKey?,
		options?
	) {
		let {
			    lastToFragment,
			    nestedFrom,
			    nestedTo
		    } = paths
		if (callback) {
			if (callback instanceof Function) {
				if (lastToFragment) {
					if (!nestedTo[lastToFragment]) {
						// If there is a key we are traversing a database map and making an array
						if (fromKey) {
							nestedTo[lastToFragment] = options.keys ? {} : []
						} else {
							nestedTo[lastToFragment] = {}
						}
					}
					if (fromKey) {
						nestedTo           = nestedTo[lastToFragment]
						const object       = {}
						const newIndex     = options.keys
							? options.keys[options.index] :
							nestedTo.length + options.indexOffset
						nestedTo[newIndex] = object
						lastToFragment     = newIndex
					}
					nestedTo = nestedTo[lastToFragment]
				}

				const nestedObjDelta = new UiObjectBuilder(
					nestedFrom,
					nestedTo)
				callback(nestedObjDelta, nestedFrom, fromKey)
			} else {
				nestedTo[lastToFragment] = callback
			}
		} else {
			this.toUiObject(nestedTo, lastToFragment, nestedFrom)
		}
	}

	traversePath() {
		let nestedFrom = this.fromObj
		for (const currentFragment of this.currentDescriptor.from) {
			if (currentFragment instanceof Object) {
				nestedFrom = currentFragment
			} else {
				nestedFrom = nestedFrom[currentFragment]
			}
		}
		let nestedTo = this.toObj

		const lastToDescriptorIndex = this.currentDescriptor.to.length - 1
		for (let i = 0; i < lastToDescriptorIndex; i++) {
			const currentFragment = this.currentDescriptor.to[i]
			if (!nestedTo[currentFragment]) {
				nestedTo[currentFragment] = {}
			}
			nestedTo = nestedTo[currentFragment]
		}
		let lastToFragment
		if (lastToDescriptorIndex >= 0) {
			lastToFragment = this.currentDescriptor.to[lastToDescriptorIndex]
		}

		return {
			lastToFragment,
			nestedFrom,
			nestedTo
		}
	}

	toUiObject(
		uiObject,
		uiKey,
		dbObject
	) {
		uiObject[uiKey] = dbObject.v
	}

}
