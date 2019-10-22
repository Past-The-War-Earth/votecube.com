import {UiObjectBuilder}          from '@votecube/public-db'
import {convertCommonFactorProps} from './commonConverter'

export function fromVariationDoc(
	dbObject
) {
	if (!dbObject) {
		return null
	}

	const variation = new UiObjectBuilder(dbObject)

	variation.from(['ageSuitability', 'age']).to(['ageSuitability']).set()
	variation.fromTo(['name']).set()

	variation.fromTo(['outcomes']).setEach((
		outcome,
		db,
		outcomeKey
	) => {
		outcome.from(['name']).to(['outcome']).set()
		outcome.from([]).to(['key']).set(outcomeKey)
	})

	variation.from(['factors']).to([]).setEach((
		variationToFactor,
		dbFactor,
		factorIndex
	) => {
		variationToFactor.from(['positions']).to(['pollFactorPositions']).setEach((
			pollFp,
			db,
			positionOutcome
		) => {
			convertCommonFactorProps(pollFp, dbFactor)
			pollFp.from([variationToFactor]).to(['outcome']).set(positionOutcome)
			pollFp.from(['name']).to(['factorPosition', 'position', 'name']).set()
			pollFp.from([]).to(['factorIndex']).set(factorIndex)
			pollFp.from(['name']).to(['factorPosition', 'factor', 'name']).set()
			pollFp.fromTo(['dir']).set()
		})
	})

	variation.fromTo(['theme']).set((
		theme,
		ui
	) => {
		theme.fromTo(['id']).set()
		theme.fromTo(['name']).set()
	})

	const uiObject = variation.toObj

	copyVariationProperties(dbObject, uiObject)
	copyDbProperties(dbObject, uiObject)

	return uiObject
}

export function fromPollListingDoc(
	dbObject
) {
	if (!dbObject) {
		return null
	}

	const uiObject = fromListingDoc(dbObject)
	uiObject.rootVariationKey = dbObject.rootVariationKey

	return uiObject
}

export function fromVariationListingDoc(
	dbObject
) {
	if (!dbObject) {
		return null
	}

	const uiObject = fromListingDoc(dbObject)

	copyVariationProperties(dbObject, uiObject)
	uiObject.variationKey = dbObject.variationKey

	return uiObject
}

export function copyVariationProperties(
	dbObject,
	uiObject
) {
	uiObject.depth = dbObject.depth
	uiObject.parent = dbObject.parent
	uiObject.path = dbObject.path
	uiObject.pollKey = dbObject.pollKey
}

export function copyDbProperties(
	dbObject,
	uiObject
) {
	uiObject.createdAt = dbObject.createdAt
	uiObject.key = dbObject.key
	uiObject.uid = dbObject.uid
}

function fromListingDoc(
	dbObject
) {
	const variation = new UiObjectBuilder(dbObject)

	variation.fromTo(['ageSuitability', 'age']).set()

	variation.fromTo(['factors']).setEach((
		factor,
		db,
		factorIndex
	) => {
		factor.fromTo(['axis']).set()
		factor.fromTo(['name']).set()

		factor.fromTo(['color']).set((
			color
		) => {
			color.fromTo(['blue']).set()
			color.fromTo(['green']).set()
			color.fromTo(['red']).set()
		})
	}, {
		indexOffset: 1
	})

	variation.fromTo(['name']).set()

	variation.fromTo(['outcomes']).setEach((
		outcome,
		db,
		outcomeKey
	) => {
		outcome.fromTo(['name']).set()
		outcome.from([]).to(['key']).set(outcomeKey)
	}, {
		// TODO: rethink this, should there be a different version of setEach for maps?
		keys: ['A', 'B']
	})

	variation.fromTo(['theme']).set((
		theme,
		ui
	) => {
		theme.fromTo(['id']).set()
		theme.fromTo(['name']).set()
	})

	const uiObject = variation.toObj

	copyDbProperties(dbObject, uiObject)

	return uiObject
}