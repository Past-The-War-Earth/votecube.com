import { DI } from '@airport/di';
import { APP_CONTAINER } from '../container';
import { CONNECTION_MANAGER, VOTE_MANAGER } from '../tokens';
export class VoteManager {
    async getVoteForPoll(username, passwordHash, pollId) {
        const connectionManager = await APP_CONTAINER.get(CONNECTION_MANAGER);
        if (!pollId) {
            return this.getStubVote();
        }
        return await connectionManager.get('findUserVoteForPoll', {
            passwordHash,
            pollId,
            username
        });
    }
    async saveVote(poll) {
    }
    getStubVote() {
        return {
            1: {
                factorNumber: 1,
                outcome: 'A',
                value: 33
            },
            2: {
                factorNumber: 2,
                outcome: 'A',
                value: 33
            },
            3: {
                factorNumber: 2,
                outcome: 'B',
                value: 34
            }
        };
    }
    dbToUi(vote) {
        return null;
    }
    uiToDb(vote) {
        return null;
    }
}
DI.set(VOTE_MANAGER, VoteManager);
//# sourceMappingURL=VoteManager.js.map