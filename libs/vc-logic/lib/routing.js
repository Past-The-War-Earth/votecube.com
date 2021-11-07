import { APP_CONTAINER } from './container';
import { ROUTES } from './tokens';
export const ABOUT = '/about';
export const FEEDBACK = '/feedback';
export const RELEASE_PLAN = '/releasePlan';
export const FACTOR_INFO_MAIN = '/factor/info/Main/:mode';
export const FACTOR_LIST = '/factor/List';
export const SITUATION_LIST = '/poll/List';
export const VARIATION_LIST = '/revision/List/:repositoryUuId';
export const SITUATION_FORM = '/poll/Form/:mode';
export const SITUATION_MAIN = '/poll/Main/:mode/:repositoryUuId';
export const SITUATION_LOCATIONS = '/poll/Locations/:mode';
export const SITUATION_TIME_FRAME = '/poll/TimeFrame/:mode';
export const CARD_CLIMATE_CHANGE = '/card/ClimateChange';
export function navigateToPage(routePath, paramMap) {
    APP_CONTAINER.get(ROUTES).then(routes => {
        routes.navigateToPage(routePath, paramMap);
    });
}
//# sourceMappingURL=routing.js.map