import {
	Column,
	Entity,
	ManyToOne,
	OneToMany,
	Table
} from '@airport/air-control'
import { RepositoryEntity } from '@airport/holding-pattern'
import { Solution } from '../solution/Solution'
import { Outcome } from './Outcome'
import { SituationFactorPosition } from './SituationFactorPosition'
import { SituationLabel } from './SituationLabel'

@Entity()
@Table({ name: 'SITUATIONS' })
export class Situation
	extends RepositoryEntity {

	@Column({ name: 'NAME', nullable: false })
	name: string

	@ManyToOne()
	outcomeA: Outcome

	@ManyToOne()
	outcomeB: Outcome

	@OneToMany({ mappedBy: 'parent' })
	children: Situation[]

	@OneToMany({ mappedBy: 'situation' })
	situationLabels: SituationLabel[]

	@OneToMany({ mappedBy: 'situation' })
	situationFactorPositions: SituationFactorPosition[]

	@OneToMany({ mappedBy: 'situation' })
	solutions: Solution[]

}
