import {
	ANOTHER,
	Y
}                         from '@airport/air-control'
import {Persist}          from '@airport/check-in'
import {DI}               from '@airport/di'
import {
	BasePollDao,
	IBasePollDao,
	IPoll,
	PollGraph,
}                         from '../../generated/generated'
import {IVotecubeContext} from '../../index'
import {POLL_DAO}         from '../../tokens'

export interface IPollDao
	extends IBasePollDao {

	createNew(
		poll: IPoll,
		context: IVotecubeContext
	): Promise<void>

}

export class PollDao
	extends BasePollDao
	implements IPollDao {

	@Persist<PollGraph>({
		ageSuitability: Y,
		parent: {
			id: Y
		} || null,
		revisions: [{
			ageSuitability: Y,
			depth: 1,
			factorPositions: [{
				axis: Y,
				dir: Y,
				factorNumber: Y,
				blue: Y,
				green: Y,
				red: Y,
				outcomeOrdinal: Y,
				parent: null || {
					id: Y
				},
				skin: {
					id: Y
				} || {
					backgroundColor: Y,
					textColor: Y,
					parent: null || {
						id: Y
					}
				},
				factorPosition: {
					factor: {
						id: Y
					} || {
						ageSuitability: Y,
						parentTranslation: {
							name: Y,
						},
						parent: null || {
							id: Y
						}
					},
					position: {
						id: Y
					} || {
						ageSuitability: Y,
						parentTranslation: {
							name: Y,
						},
						parent: null || {
							id: Y
						}
					}
				}
			}, ANOTHER(2)],
			outcomeVersionA: {
				id: Y
			} || {
				ageSuitability: Y,
				parentTranslation: {
					name: Y
				},
				parent: null || {
					id: Y
				}
			},
			outcomeVersionB: {
				id: Y
			} || {
				ageSuitability: Y,
				parentTranslation: {
					name: Y
				},
				parent: null || {
					id: Y
				}
			},
			parentTranslation: {
				id: Y,
			} || {
				name: Y,
				parent: null || {
					id: Y
				}
			},
			poll: {
				id: Y
			}
		}],
		theme: {
			id: Y,
		},
		type: {
			id: Y,
		}
	})
	createOne = this.save

	async createNew(
		poll: IPoll,
		context: IVotecubeContext
	): Promise<void> {
		await this.createOne(poll, context)
	}

}

DI.set(POLL_DAO, PollDao)