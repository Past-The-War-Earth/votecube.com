import {DbObjectBuilder}          from '@votecube/public-db'
import {convertCommonFactorProps} from './commonConverter'


export function toVariationDoc(
	dto,
	deltas,
	originalDbObject
) {
	const variation = new DbObjectBuilder(dto, deltas, originalDbObject)

	variation.from(['ageSuitability']).to(['ageSuitability', 'age']).set()
	variation.fromTo(['name']).set()

	variation.fromTo(['outcomes']).setEach((
		outcome,
		ui
	) => outcome.from(['outcome']).to([ui.data.key, 'name']).set())

	variation.from(['pollFactorPositions']).to(['factors']).setEach((
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

	variation.fromTo(['theme']).set((
		theme,
		ui
	) => {
		theme.fromTo(['id']).set()
		theme.fromTo(['name']).set()
	})

	const dbObject = variation.toObj

	if (originalDbObject) {
		dbObject.depth                        = originalDbObject.depth + 1
		dbObject.path                         = {
			...originalDbObject.path
		}
		dbObject.path[originalDbObject.depth] = {
			createdAt: originalDbObject.createdAt,
			key: originalDbObject.key,
			uid: originalDbObject.uid
		}
		dbObject.parent                       = {
			depth: originalDbObject.depth,
			key: originalDbObject.key
		}
		dbObject.pollKey                      = originalDbObject.pollKey
	} else {
		dbObject.parent    = null
		dbObject.parentKey = null
		dbObject.path      = {}
		dbObject.depth     = 1
	}

	return dbObject
}
