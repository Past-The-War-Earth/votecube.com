import { AirEntity } from '@airport/final-approach'
import {
	Column,
	Entity,
	OneToMany,
	Table
} from '@airport/tarmaq-entity'
import { Reason } from '../reason/Reason'

@Entity()
@Table({ name: 'FACTORS' })
export class Factor
	extends AirEntity {

	@Column({ name: 'NAME', nullable: false })
	name: string

	@OneToMany({ mappedBy: 'factor' })
	reasons: Reason[]

}
