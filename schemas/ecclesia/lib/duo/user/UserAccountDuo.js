"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const generated_1 = require("../../generated/generated");
const tokens_1 = require("../../tokens");
class UserAccountDuo extends generated_1.BaseUserAccountDuo {
}
exports.UserAccountDuo = UserAccountDuo;
di_1.DI.set(tokens_1.USER_ACCOUNT_DUO, UserAccountDuo);
//# sourceMappingURL=UserAccountDuo.js.map