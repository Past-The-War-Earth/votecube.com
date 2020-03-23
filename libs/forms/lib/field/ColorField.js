"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Field_1 = require("./Field");
class ColorField extends Field_1.Field {
    get changeFlags() {
        if (!this.originalValue) {
            return {
                blue: 0,
                green: 0,
                red: 0
            };
        }
        return {
            blue: this.theValue.blue === this.originalValue.blue ? 0 : 1,
            green: this.theValue.green === this.originalValue.green ? 0 : 1,
            red: this.theValue.red === this.originalValue.red ? 0 : 1,
        };
    }
}
exports.ColorField = ColorField;
//# sourceMappingURL=ColorField.js.map