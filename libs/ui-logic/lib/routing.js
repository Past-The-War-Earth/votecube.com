import { APP_CONTAINER } from './container';
import { ROUTES } from './tokens';
export function navigateToPage(routePath, paramMap) {
    APP_CONTAINER.get(ROUTES).then(routes => {
        routes.navigateToPage(routePath, paramMap);
    });
}
//# sourceMappingURL=routing.js.map