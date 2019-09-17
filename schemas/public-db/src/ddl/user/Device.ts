import {
	Column,
	DbNumber,
	Entity,
	GeneratedValue,
	Id,
	Table
} from '@airport/air-control'

export type DeviceId = number;
export type Device_Hash = string;

@Entity()
@Table({name: 'DEVICES'})
export class Device {

	@GeneratedValue()
	@Id()
	@Column({name: 'DEVICE_ID'})
	id: DeviceId

	@Column({name: 'DEVICE_HASH', nullable: false})
	@DbNumber()
	hash: Device_Hash

}
