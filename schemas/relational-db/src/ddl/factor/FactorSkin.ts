import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	OneToMany,
	Table
}                               from '@airport/air-control'
import {CascadeType}       from '@airport/ground-control'
import {
	FactorSkin_BackgroundColor,
	FactorSkin_Id,
	FactorSkin_TextColor
}                          from '../../types/factor/FactorSkin'
import {ImmutableActorRow} from '../infrastructure/row/ImmutableActorRow'
import {PollRevision}      from '../poll/revision/PollRevision'
import {Factor}            from './Factor'

@Entity()
@Table({name: 'FACTOR_SKINS'})
export class FactorSkin
	extends ImmutableActorRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'FACTOR_SKIN_ID'})
	id: FactorSkin_Id

	@Column({name: 'BACKGROUND_COLOR_ID', nullable: false})
	backgroundColor: FactorSkin_BackgroundColor

	@Column({name: 'TEXT_COLOR_ID', nullable: false})
	textColor: FactorSkin_TextColor

	@ManyToOne()
	@JoinColumn({name: 'POLL_REVISION_ID'})
	pollRevision: PollRevision

	@ManyToOne()
	@JoinColumn({name: 'FACTOR_ID'})
	factor: Factor

	@ManyToOne()
	@JoinColumn({
		name: 'PARENT_FACTOR_SKIN_ID',
		referencedColumnName: 'FACTOR_SKIN_ID'
	})
	parent: FactorSkin

	@OneToMany({cascade: CascadeType.ALL, mappedBy: 'parent'})
	children: FactorSkin[]

}
