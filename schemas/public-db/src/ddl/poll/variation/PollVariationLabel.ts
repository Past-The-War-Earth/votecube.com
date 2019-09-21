import {
	Column,
	Entity,
	GeneratedValue,
	JoinColumn,
	ManyToOne,
	Table
}                      from '@airport/air-control'
import {ImmutableRow}  from '../../infrastructure/ImmutableRow'
import {Label}         from '../label/Label'
import {PollVariation} from './PollVariation'

export type PollVariationLabel_Id = number

@Entity()
@Table({name: 'POLL_VARIATION_LABELS'})
export class PollVariationLabel
	extends ImmutableRow {

	@GeneratedValue()
	@Column({name: 'POLL_VARIATION_LABEL_ID'})
	id: PollVariationLabel_Id

	@ManyToOne()
	@JoinColumn({name: 'LABEL_ID', nullable: false})
	label: Label

	@ManyToOne()
	@JoinColumn({name: 'POLL_VARIATION_ID', nullable: false})
	pollVariation: PollVariation

}
