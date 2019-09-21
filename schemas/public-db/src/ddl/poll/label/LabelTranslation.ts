import {
	Column,
	Entity,
	GeneratedValue,
	OneToMany,
	Table
}                                    from '@airport/air-control'
import {CascadeType}                 from '@airport/ground-control'
import {SystemGeneratedRow}          from '../../infrastructure/SystemGeneratedRow'
import {LabelTranslationRatingCount} from './LabelTranslationRatingCount'

export type LabelTranslation_Id = number
export type LabelTranslation_Name = string

@Entity()
@Table({name: 'LABEL_TRANSLATIONS'})
export class LabelTranslation
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Column({name: 'LABEL_TRANSLATION_ID'})
	id: LabelTranslation_Id

	@Column({name: 'NAME', nullable: false})
	name: LabelTranslation_Name

	/*
	Label allTranslations are machine generated only, no type needed.
			@ManyToOne()
			@JoinColumn({name: 'TRANSLATION_TYPE_ID', nullable: false})
			translationType: TranslationType
	 */


	@OneToMany({cascade: CascadeType.NONE, mappedBy: 'labelTranslation'})
	counts: LabelTranslationRatingCount[]

}
