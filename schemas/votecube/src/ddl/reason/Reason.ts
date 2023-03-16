import { AirEntity } from '@airport/final-approach'
import {
	Column,
	DbBoolean,
	Entity,
	ManyToOne,
	OneToMany,
	Table,
	Transient
} from '@airport/tarmaq-entity'
import { SituationIdeaReason } from './SituationIdeaReason'
import { IdeaReason } from './IdeaReason'
import { Factor } from '../factor/Factor'
import { Position } from '../factor/Position'

@Entity()
@Table({ name: 'REASONS' })
export class Reason
	extends AirEntity {

	@ManyToOne()
	factor: Factor

	@ManyToOne()
	position: Position

	@OneToMany({ mappedBy: 'reason' })
	ideaReasons: IdeaReason[] = []

	@OneToMany({ mappedBy: 'reason' })
	situationIdeaReasons: SituationIdeaReason[] = []

	@Transient()
	enabled: boolean = true

}
