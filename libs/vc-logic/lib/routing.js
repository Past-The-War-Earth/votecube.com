"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = require("./container");
const tokens_1 = require("./tokens");
exports.ABOUT = '/about';
exports.FEEDBACK = '/feedback';
exports.RELEASE_PLAN = '/releasePlan';
exports.FACTOR_INFO_MAIN = '/factor/info/Main/:mode';
exports.FACTOR_LIST = '/factor/List';
exports.POLL_LIST = '/poll/List';
exports.VARIATION_LIST = '/revision/List/:pollId/:pollRevisionId';
exports.POLL_FORM = '/poll/Form/:mode';
exports.POLL_MAIN = '/poll/Main/:mode/:pollId/:pollRevisionId';
exports.POLL_LOCATIONS = '/poll/Locations/:mode';
exports.POLL_TIME_FRAME = '/poll/TimeFrame/:mode';
exports.CARD_CLIMATE_CHANGE = '/card/ClimateChange';
function navigateToPage(routePath, paramMap) {
    container_1.APP_CONTAINER.get(tokens_1.ROUTES).then(routes => {
        routes.navigateToPage(routePath, paramMap);
    });
}
exports.navigateToPage = navigateToPage;
//# sourceMappingURL=routing.js.map