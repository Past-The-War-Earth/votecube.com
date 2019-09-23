import {
	Column,
	DbNumber,
	DbString,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../infrastructure/SystemGeneratedRow'

export type Application_Id = number;
export type Application_Host = string;
export type Application_Port = number;

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
