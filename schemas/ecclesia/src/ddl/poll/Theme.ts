import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {AgeSuitability}     from '../../types/common'
import {
	Theme_Id,
	Theme_Name
}                           from '../../types/poll/Theme'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'

@Entity()
@Table({name: 'THEMES'})
export class Theme
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'THEME_ID'})
	id: Theme_Id

	@Column({name: 'NAME', nullable: false})
	name: Theme_Name

	@Column({name: 'AGE_SUITABILITY', nullable: false})
	ageSuitability: AgeSuitability

}
