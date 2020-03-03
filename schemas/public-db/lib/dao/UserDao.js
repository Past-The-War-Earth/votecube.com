import { container, DI } from '@airport/di';
import { SCHEMA, USER_DAO } from '../tokens';
export class UserDao {
    async signUp(username, password, user) {
        const schema = await container(this).get(SCHEMA);
        await schema.db.runTransaction(async (transaction) => {
            const userRef = schema.users.doc(user.key);
            const credRef = schema.users.creds(userRef).doc(user.key);
            await userRef.set({
                key: user.key,
                name: username
            });
            await credRef.set({
                hash: password,
                key: user.key,
                userKey: user.key
            });
        });
    }
}
DI.set(USER_DAO, UserDao);
//# sourceMappingURL=UserDao.js.map