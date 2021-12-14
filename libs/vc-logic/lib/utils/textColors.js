import { get } from './ajax';
import { HASH } from './hash';
var colorText;
export async function loadColorsText(locale) {
    if (colorText) {
        return colorText;
    }
    const text = await get(`./assets/text/${locale}/colors${HASH}.json`);
    colorText = JSON.parse(text);
    return colorText;
}
//# sourceMappingURL=textColors.js.map