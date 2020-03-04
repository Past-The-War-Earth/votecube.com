import {
	JoinColumn,
	ManyToOne,
	MappedSuperclass
}                     from '@airport/air-control'
import {Actor}        from '../../user/Actor'
import {UserAccount}  from '../../user/UserAccount'
import {ImmutableRow} from './ImmutableRow'

@MappedSuperclass()
export abstract class ImmutableActorRow
	extends ImmutableRow {

	@ManyToOne()
	@JoinColumn({name: 'ACTOR_ID'})
	actor: Actor

	@ManyToOne()
	@JoinColumn({name: 'USER_ACCOUNT_ID'})
	userAccount: UserAccount

}
