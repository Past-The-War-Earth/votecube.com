import { DI } from '@airport/di';
import { APP_CONTAINER } from '../container';
import { CONNECTION_MANAGER, VOTE_MANAGER } from '../tokens';
export class VoteManager {
    async getVoteForPoll(username, passwordHash, pollId) {
        const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER);
        return await connectionManager.get('findUserVoteForPoll', {
            passwordHash,
            pollId,
            username
        });
    }
    async saveVote(poll) {
    }
}
DI.set(VOTE_MANAGER, VoteManager);
//# sourceMappingURL=VoteManager.js.map