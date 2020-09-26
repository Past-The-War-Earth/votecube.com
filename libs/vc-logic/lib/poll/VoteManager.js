"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const tokens_1 = require("../tokens");
class VoteManager {
    async getVoteForPoll(username, passwordHash, pollId) {
        return null;
    }
}
exports.VoteManager = VoteManager;
di_1.DI.set(tokens_1.VOTE_MANAGER, VoteManager);
//# sourceMappingURL=VoteManager.js.map