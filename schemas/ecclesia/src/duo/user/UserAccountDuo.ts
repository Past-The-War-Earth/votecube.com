import {DI}               from '@airport/direction-indicator'
import {
	BaseUserAccountDuo,
	IBaseUserAccountDuo
}                         from '../../generated/generated'
import {USER_ACCOUNT_DUO} from '../../tokens'

export interface IUserAccountDuo extends IBaseUserAccountDuo {

}

export class UserAccountDuo extends BaseUserAccountDuo
	implements IUserAccountDuo {

}
DI.set(USER_ACCOUNT_DUO, UserAccountDuo)
