import {
	Column,
	DbNumber,
	DbString,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {
	Application_Host,
	Application_Id,
	Application_Port
}                           from '../../types/user/Application'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'

@Entity()
@Table({name: 'APPLICATIONS'})
export class Application
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'APPLICATION_ID'})
	id: Application_Id

	@DbString()
	@Column({name: 'HOST', nullable: false})
	host: Application_Host

	@Column({name: 'PORT', nullable: false})
	@DbNumber()
	port: Application_Port

}
