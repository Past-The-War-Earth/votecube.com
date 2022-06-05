import {
	Column,
	Entity,
	Table
} from '@airport/air-traffic-control'
import { RepositoryEntity } from '@airport/holding-pattern'

@Entity()
@Table({ name: 'FACTORS' })
export class Factor
	extends RepositoryEntity {

	@Column({ name: 'OBJECT', nullable: true })
	object: string

	@Column({ name: 'ACTION', nullable: true })
	action: string

	@Column({ name: 'NAME', nullable: true })
	customText: string

}
