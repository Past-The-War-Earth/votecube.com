"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../tokens");
class UserDao {
    async signUp(username, password, user) {
        const schema = await di_1.container(this).get(tokens_1.SCHEMA);
        await schema.db.runTransaction(async (transaction) => {
            const userRef = schema.users.doc(user.id);
            const credRef = schema.users.creds(userRef).doc(user.id);
            await userRef.set({
                id: user.id,
                name: username
            });
            await credRef.set({
                hash: password,
                id: user.id,
                userId: user.id
            });
        });
    }
}
exports.UserDao = UserDao;
di_1.DI.set(tokens_1.USER_DAO, UserDao);
//# sourceMappingURL=UserDao.js.map