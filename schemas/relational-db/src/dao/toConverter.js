import {DbObjectBuilder}          from '@votecube/public-db'
import {convertCommonFactorProps} from './commonConverter'


export function toRevisionDoc(
	dto,
	deltas,
	originalDbObject
) {
	const revision = new DbObjectBuilder(dto, deltas, originalDbObject)

	revision.from(['ageSuitability']).to(['ageSuitability', 'age']).set()
	revision.fromTo(['name']).set()

	revision.fromTo(['outcomes']).setEach((
		outcome,
		ui
	) => outcome.from(['outcome']).to([ui.data.ordinal, 'name']).set())

	revision.from(['pollFactorPositions']).to(['factors']).setEach((
		pollFp,
		uiPfp
	) => pollFp.from([]).to([uiPfp.data.factorIndex]).set((
		factor
	) => {
		factor.from(['factorPosition']).to([]).set((
			factorPosition
		) => {
			factorPosition.from(['factor', 'name']).to(['name']).set()
			convertCommonFactorProps(factorPosition, uiPfp)
			factorPosition.from(['position']).to(['positions', uiPfp.data.outcome]).set((
				position,
			) => {
				position.fromTo(['name']).set()
				position.from([uiPfp, 'dir']).to(['dir']).set()
			})
		})
	}))

	revision.fromTo(['theme']).set((
		theme,
		ui
	) => {
		theme.fromTo(['id']).set()
		theme.fromTo(['name']).set()
	})

	const dbObject = revision.toObj

	if (originalDbObject) {
		dbObject.depth                        = originalDbObject.depth + 1
		dbObject.path                         = {
			...originalDbObject.path
		}
		dbObject.path[originalDbObject.depth] = {
			createdAt: originalDbObject.createdAt,
			key: originalDbObject.key,
			userId: originalDbObject.userId
		}
		dbObject.parent                       = {
			depth: originalDbObject.depth,
			key: originalDbObject.key,
			userId: originalDbObject.userId
		}
		dbObject.pollId                      = originalDbObject.pollId
	} else {
		dbObject.parent = null
		dbObject.path   = {}
		dbObject.depth  = 1
	}

	return dbObject
}
