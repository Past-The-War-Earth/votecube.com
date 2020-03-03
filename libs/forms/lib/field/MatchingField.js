import { Field } from './Field';
export class MatchingField extends Field {
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
//# sourceMappingURL=MatchingField.js.map