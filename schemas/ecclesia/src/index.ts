import {IContext}     from '@airport/di'
import {IUserAccount} from './generated/user/useraccount'

export *          from './dao/dao'
export *          from './ddl/ddl'
export *          from './duo/duo'
export *          from './tokens'
export *          from './generated/generated'
export *          from './generated/interfaces'
export *          from './types/types'

export interface IVotecubeContext
	extends IContext {
	userAccount: IUserAccount
}