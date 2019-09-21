import {
	Column,
	DbNumber,
	Entity,
	GeneratedValue,
	Id,
	Table
} from '@airport/air-control'

export type Device_Id = number;
export type Device_Hash = string;

@Entity()
@Table({name: 'DEVICES'})
export class Device {

	@GeneratedValue()
	@Id()
	@Column({name: 'DEVICE_ID'})
	id: Device_Id

	@Column({name: 'DEVICE_HASH', nullable: false})
	@DbNumber()
	hash: Device_Hash

}
