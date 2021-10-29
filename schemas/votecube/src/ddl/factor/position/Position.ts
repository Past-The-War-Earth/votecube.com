import {
	Column,
	Entity,
	OneToMany,
	Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { FactorPosition } from './FactorPosition'

/**
 * This is the generic position records (not related to any poll).
 */
@Entity()
@Table({ name: 'POSITIONS' })
export class Position
	extends RepositoryEntity {

	@Column({ name: 'NAME', nullable: false })
	name: string

	@OneToMany({ mappedBy: 'position' })
	factorPositions: FactorPosition[]

}
