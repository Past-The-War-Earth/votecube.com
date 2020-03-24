import {UiObjectBuilder}          from '@votecube/public-db'
import {convertCommonFactorProps} from './commonConverter'

export function fromRevisionDoc(
	dbObject
) {
	if (!dbObject) {
		return null
	}

	const revision = new UiObjectBuilder(dbObject)

	revision.from(['ageSuitability', 'age']).to(['ageSuitability']).set()
	revision.fromTo(['name']).set()

	revision.fromTo(['outcomes']).setEach((
		outcome,
		db,
		outcomeKey
	) => {
		outcome.from(['name']).to(['outcome']).set()
		outcome.from([]).to(['ordinal']).set(outcomeKey)
		outcome.from(['key']).to(['key']).set(outcomeKey)
	})

	revision.from(['factors']).to([]).setEach((
		revisionToFactor,
		dbFactor,
		factorIndex
	) => {
		revisionToFactor.from(['positions']).to(['pollFactorPositions']).setEach((
			pollFp,
			db,
			positionOutcome
		) => {
			convertCommonFactorProps(pollFp, dbFactor)
			pollFp.from([revisionToFactor]).to(['outcome']).set(positionOutcome)
			pollFp.from(['name']).to(['factorPosition', 'position', 'name']).set()
			pollFp.from([]).to(['factorIndex']).set(factorIndex)
			pollFp.from([dbFactor, 'name']).to(['factorPosition', 'factor', 'name']).set()
			pollFp.fromTo(['dir']).set()
		})
	})

	revision.fromTo(['theme']).set((
		theme,
		ui
	) => {
		theme.fromTo(['id']).set()
		theme.fromTo(['name']).set()
	})

	const uiObject = revision.toObj

	copyRevisionProperties(dbObject, uiObject)
	copyDbProperties(dbObject, uiObject)

	return uiObject
}

export function fromPollListingDoc(
	dbObject
) {
	if (!dbObject) {
		return null
	}

	const uiObject            = fromListingDoc(dbObject)
	uiObject.rootRevisionId = dbObject.rootRevisionId

	return uiObject
}

export function fromRevisionListingDoc(
	dbObject
) {
	if (!dbObject) {
		return null
	}

	const uiObject = fromListingDoc(dbObject)

	copyRevisionProperties(dbObject, uiObject)
	uiObject.revisionKey = dbObject.revisionKey

	return uiObject
}

export function copyRevisionProperties(
	dbObject,
	uiObject
) {
	uiObject.depth   = dbObject.depth
	uiObject.parent  = dbObject.parent
	uiObject.path    = dbObject.path
	uiObject.pollId = dbObject.pollId
}

export function copyDbProperties(
	dbObject,
	uiObject
) {
	uiObject.createdAt = dbObject.createdAt
	uiObject.key       = dbObject.key
	uiObject.userId   = dbObject.userId
}

function fromListingDoc(
	dbObject
) {
	const revision = new UiObjectBuilder(dbObject)

	revision.fromTo(['ageSuitability', 'age']).set()

	revision.fromTo(['factors']).setEach((
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

	revision.fromTo(['name']).set()

	revision.fromTo(['outcomes']).setEach((
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

	revision.fromTo(['theme']).set((
		theme,
		ui
	) => {
		theme.fromTo(['id']).set()
		theme.fromTo(['name']).set()
	})

	const uiObject = revision.toObj

	copyDbProperties(dbObject, uiObject)

	return uiObject
}
