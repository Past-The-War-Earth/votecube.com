import {IOperationContext} from '@airport/tower'
import {IUserAccount}      from '@votecube/ecclesia'

export interface IVotecubeContext<E, EntityCascadeGraph>
	extends IOperationContext<E, EntityCascadeGraph> {
	userAccount: IUserAccount
}