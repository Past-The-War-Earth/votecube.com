"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Field_1 = require("./Field");
class MatchingField extends Field_1.Field {
    constructor() {
        super(...arguments);
        this.theMatches = null;
    }
    get matches() {
        return this.theMatches;
    }
    set matches(newMatches) {
        this.theMatches = newMatches;
        this.detect();
    }
}
exports.MatchingField = MatchingField;
//# sourceMappingURL=MatchingField.js.map