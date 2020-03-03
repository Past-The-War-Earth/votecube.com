import { utcNow } from '../field/date/types';
import { minDate } from './minDate';
export function minTomorrow() {
    const tomorrow = utcNow();
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    return minDate(tomorrow);
}
//# sourceMappingURL=minTomorrow.js.map