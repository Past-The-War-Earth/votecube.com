export class DbObjectBuilder {

	currentDescriptor = {
		from: [],
		to: []
	}
	fromObj
	fromDeltas
	toOriginal
	toObj
	create

	constructor(
		from,
		fromDeltas,
		toOriginal,
		to = {}
	) {
		this.fromObj    = from
		this.fromDeltas = fromDeltas
		this.toOriginal = toOriginal
		this.toObj      = to
		this.create     = !toOriginal
	}

	from(path): DbObjectBuilder {
		if (!(path instanceof Array)) {
			throw new Error('from Path must be an Array')
		}
		this.currentDescriptor.from = path

		return this
	}

	fromTo(path): DbObjectBuilder {
		this.from(path)
		this.to(path)

		return this
	}

	to(path): DbObjectBuilder {
		if (!(path instanceof Array)) {
			throw new Error('to Path must be an Array')
		}
		this.currentDescriptor.to = path

		return this
	}

	setEach(callback) {
		const {
			      nestedFrom,
			      nestedFromDeltas,
			      nestedOriginalTo,
			      nestedTo
		      } = this.traversePath(
			// true
		)
		for (let i = 0; i < nestedFrom.length; i++) {
			const paths = {
				nestedFrom: nestedFrom[i],
				nestedFromDeltas: nestedFromDeltas[i],
				nestedOriginalTo,
				nestedTo
			}
			this.doSet(paths, callback)
		}
	}

	set(callback) {
		this.doSet(this.traversePath(), callback)
	}

	doSet(
		paths,
		callback,
		fromKey?
	) {
		const {
			      nestedFrom,
			      nestedFromDeltas,
			      nestedOriginalTo,
			      nestedTo
		      } = paths

		if (callback) {
			const nestedObjDelta = new DbObjectBuilder(
				nestedFrom,
				nestedFromDeltas,
				nestedOriginalTo,
				nestedTo
			)
			callback(nestedObjDelta, {
				data: nestedFrom,
				delta: nestedFromDeltas
			})
		} else {
			this.toDbObject(nestedFrom, nestedFromDeltas, nestedOriginalTo, nestedTo, this.create)
		}
	}

	traversePath() {
		let nestedFrom       = this.fromObj
		let nestedFromDeltas = this.fromDeltas
		for (const currentFragment of this.currentDescriptor.from) {
			if (currentFragment instanceof Object) {
				nestedFrom       = currentFragment.data
				nestedFromDeltas = currentFragment.delta
			} else {
				nestedFrom       = nestedFrom[currentFragment]
				nestedFromDeltas = nestedFromDeltas[currentFragment]
			}
		}
		let nestedOriginalTo = this.toOriginal
		let nestedTo         = this.toObj
		for (const currentFragment of this.currentDescriptor.to) {
			if (!this.create) {
				nestedOriginalTo = nestedOriginalTo[currentFragment]
			}
			if (!nestedTo[currentFragment]) {
				nestedTo[currentFragment] = {}
			}
			nestedTo = nestedTo[currentFragment]
		}

		return {
			nestedFrom,
			nestedFromDeltas,
			nestedOriginalTo,
			nestedTo
		}
	}

	toDbObject(
		uiValue,
		uiDelta,
		originalDbObject,
		dbObject,
		create
	) {
		let d
		if (create) {
			d = 0
		} else if (uiDelta) {
			if (originalDbObject.d < 0) {
				d = -1
			} else {
				d = -(originalDbObject.d + 1)
			}
		} else {
			d = originalDbObject.d + 1
		}

		dbObject.v = uiValue
		dbObject.d = d
	}
}
