import {
	Entity,
	ManyToOne,
	Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { Factor } from '../Factor'
import { Position } from './Position'

/**
 * Which positions belong to which factors.
 */

export type FactorPosition_Id = number

@Entity()
@Table({ name: 'FACTOR_POSITIONS' })
export class FactorPosition
	extends RepositoryEntity {

	@ManyToOne()
	factor: Factor

	@ManyToOne()
	position: Position

}
