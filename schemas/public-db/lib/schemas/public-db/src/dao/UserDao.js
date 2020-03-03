import { container, DI } from '@airport/di';
import { SCHEMA, USER_DAO } from '../tokens';
export class UserDao {
    async signUp(username, password, user) {
        const schema = await container(this).get(SCHEMA);
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
DI.set(USER_DAO, UserDao);
//# sourceMappingURL=UserDao.js.map