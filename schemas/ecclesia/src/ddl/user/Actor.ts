import {
	Column,
	DbNumber,
	Entity,
	GeneratedValue,
	Id,
	JoinColumn,
	ManyToOne,
	Table
}                           from '@airport/air-control'
import {
	Actor_Hash,
	Actor_Id
}                           from '../../types/user/Actor'
import {SystemGeneratedRow} from '../infrastructure/row/SystemGeneratedRow'
import {Application}        from './Application'
import {Device}             from './Device'
import {UserAccount}        from './UserAccount'

@Entity()
@Table({name: 'ACTORS'})
export class Actor
	extends SystemGeneratedRow {

	@Id()
	@GeneratedValue()
	@Column({name: 'ACTOR_ID'})
	id: Actor_Id

	@Column({name: 'ACTOR_HASH', nullable: false})
	@DbNumber()
	hash: Actor_Hash

	@ManyToOne()
	@JoinColumn({name: 'USER_ACCOUNT_ID', nullable: false})
	userAccount: UserAccount

	@ManyToOne()
	@JoinColumn({name: 'DEVICE_ID', nullable: false})
	device: Device

	@ManyToOne()
	@JoinColumn({name: 'APPLICATION_ID', nullable: false})
	application: Application


}
