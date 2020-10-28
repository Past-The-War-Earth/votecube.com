import { DI } from '@airport/di';
import { BaseUserAccountDuo } from '../../generated/generated';
import { USER_ACCOUNT_DUO } from '../../tokens';
export class UserAccountDuo extends BaseUserAccountDuo {
}
DI.set(USER_ACCOUNT_DUO, UserAccountDuo);
//# sourceMappingURL=UserAccountDuo.js.map