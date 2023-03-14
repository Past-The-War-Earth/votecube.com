import { AirEntity } from '@airport/final-approach'
import {
	Column,
	Entity,
	Table
} from '@airport/tarmaq-entity'

@Entity()
@Table({ name: 'FACTORS' })
export class Factor
	extends AirEntity {

	@Column({ name: 'OBJECT', nullable: true })
	object: string

	@Column({ name: 'ACTION', nullable: true })
	action: string

	@Column({ name: 'NAME', nullable: true })
	customText: string

}
