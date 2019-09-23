import {
	Column,
	DbNumber,
	Entity,
	GeneratedValue,
	Id,
	Table
}                           from '@airport/air-control'
import {SystemGeneratedRow} from '../infrastructure/SystemGeneratedRow'

export type Device_Id = number;
export type Device_Hash = string;

@Entity()
@Table({name: 'DEVICES'})
export class Device
	extends SystemGeneratedRow {

	@GeneratedValue()
	@Id()
	@Column({name: 'DEVICE_ID'})
	id: Device_Id

	@Column({name: 'DEVICE_HASH', nullable: false})
	@DbNumber()
	hash: Device_Hash

}
