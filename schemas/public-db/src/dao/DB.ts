/*
export async function init() {
	await DI.get(AIR_DB)
	const dbManager = await DI.get(DATABASE_MANAGER)
	await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}
*/


export function copy(
	object,
	skipKeys = ['marks']
) {
	let theCopy
	if (object instanceof Object) {
		if (object instanceof Array) {
			theCopy = object.map(
				arrayEntry => copy(arrayEntry, skipKeys))
		} else {
			theCopy = {}
			for (const propertyName in object) {
				if (skipKeys.indexOf(propertyName) > -1) {
					continue
				}
				theCopy[propertyName] = copy(object[propertyName], skipKeys)
			}
		}
	} else {
		theCopy = object
	}

	return theCopy
}

export function calculateWaterMarks(
	dbObject
) {
	const marks    = {
		change: {
			high: 0,
			low: 0
		},
		same: {
			high: 0,
			low: 0
		}
	}
	dbObject.marks = marks

	for (const key in dbObject) {
		if ([
			'createdAt',
			'depth',
			'marks',
			'key',
			'parent',
			'parentKey',
			'path',
			'pollKey',
			'uid'].indexOf(key) > -1) {
			continue
		}
		const childObject = dbObject[key]
		if (isDataObject(childObject)) {
			if (childObject.d === 0) {
				// Nothing to do, this is a brand new object
			} else if (childObject.d > 0) {
				marks.same.high = setHighSame(marks.same.high, childObject.d)
				marks.same.low  = setLowSame(marks.same.low, childObject.d)
			} else {
				marks.change.high = setHighChange(marks.change.high, childObject.d)
				marks.change.low  = setLowChange(marks.change.low, childObject.d)
			}
		} else {
			calculateWaterMarks(childObject)
			marks.same.high   = setHighSame(marks.same.high, childObject.marks.same.high)
			marks.same.low    = setLowSame(marks.same.low, childObject.marks.same.low)
			marks.change.high = setHighChange(marks.change.high, childObject.marks.change.high)
			marks.change.low  = setLowChange(marks.change.low, childObject.marks.change.low)
		}
	}
}

function setHighChange(
	aggregate,
	data
) {
	return data < aggregate ? data : aggregate
}

function setLowChange(
	aggregate,
	data
) {
	if (data < 0) {
		return data > aggregate ? data : aggregate
	}
	return aggregate
}

function setHighSame(
	aggregate,
	data
) {
	return data > aggregate ? data : aggregate
}

function setLowSame(
	aggregate,
	data
) {
	if (data > 0) {
		return data < aggregate ? data : aggregate
	}
	return aggregate
}

function isDataObject(
	object
) {
	return object.hasOwnProperty('v')
}
