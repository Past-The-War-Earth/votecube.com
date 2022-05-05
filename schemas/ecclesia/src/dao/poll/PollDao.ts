import {
	I,
	A,
	ANOTHER,
	U
}                         from '@airport/air-traffic-control'
import {DI}               from '@airport/di'
import {
	BasePollDao,
	IBasePollDao,
	IPoll,
}                         from '../../generated/generated'
import { IVotecubeContext } from '../../index'
import {POLL_DAO}         from '../../tokens'

export interface IPollDao
	extends IBasePollDao {

	create(
		poll: IPoll | IPoll[],
		context: IVotecubeContext
	): Promise<void>

}

export class PollDao
	extends BasePollDao
	implements IPollDao {

	/*
	@PollDao.Save({
		ageSuitability: A,
		parent: {
			id: A
		} || null,
		revisions: [{
			id: U,
			ageSuitability: A,
			depth: 1,
			factorPositions: [{
				id: U,
				axis: A,
				dir: A,
				factorNumber: A,
				blue: A,
				green: A,
				red: A,
				outcomeOrdinal: A,
				parent: null || {
					id: A
				},
				skin: {
					id: A
				} || {
					id: U,
					backgroundColor: A,
					textColor: A,
					parent: null || {
						id: A
					}
				},
				factorPosition: {
					factor: {
						id: A
					} || {
						ageSuitability: I,
						parentTranslation: {
							name: I,
						},
						parent: null || {
							id: I
						}
					},
					position: {
						id: A
					} || {
						ageSuitability: I,
						parentTranslation: {
							name: I,
						},
						parent: null || {
							id: I
						}
					}
				}
			}, ANOTHER(2)],
			outcomeVersionA: {
				id: A
			} || {
				ageSuitability: I,
				parentTranslation: {
					name: I
				},
				parent: null || {
					id: I
				}
			},
			outcomeVersionB: {
				id: A
			} || {
				ageSuitability: I,
				parentTranslation: {
					name: I
				},
				parent: null || {
					id: I
				}
			},
			parentTranslation: {
				id: A,
			} || {
				name: I,
				parent: null || {
					id: I
				}
			},
			poll: {
				id: A
			}
		}],
		theme: {
			id: A,
		},
		type: {
			id: A,
		}
	})
	*/
	async create(
		poll: IPoll | IPoll[],
		context: IVotecubeContext
	) {
		this.save(poll, context)
	}

}

DI.set(POLL_DAO, PollDao)
