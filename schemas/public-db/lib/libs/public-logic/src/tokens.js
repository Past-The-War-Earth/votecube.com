"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("@airport/di");
const publicLogic = di_1.system('votecube-ui').lib('public-logic');
exports.AUTH = publicLogic.token();
exports.CUBE_LOGIC = publicLogic.token();
exports.DETAILED_CUBE_LOGIC = publicLogic.token();
exports.FACTOR_RANKING_LOGIC = publicLogic.token();
exports.LOGIC_UTILS = publicLogic.token();
exports.POLL_FORM_LOGIC = publicLogic.token();
exports.POLL_FORM_MANAGER = publicLogic.token();
exports.POLL_MAIN_LOGIC = publicLogic.token();
exports.POLL_MANAGER = publicLogic.token();
exports.POLL_REVISION_CONVERTER = publicLogic.token();
exports.ROUTES = publicLogic.token();
//# sourceMappingURL=tokens.js.map