import {
	Column,
	Entity,
	OneToMany,
	Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { FactorPosition } from './position/FactorPosition'

@Entity()
@Table({ name: 'FACTORS' })
export class Factor
	extends RepositoryEntity {

	@Column({ name: 'NAME', nullable: false })
	name: string

	@OneToMany({ mappedBy: 'factor' })
	factorPositions: FactorPosition[]

}
