import { Field } from './Field';
export class MatchingField extends Field {
    constructor(matchCallback, validators, rules) {
        super(validators, rules);
        this.matchCallback = matchCallback;
        this.theMatches = [];
        this.internalSetValue('');
    }
    get matches() {
        return this.theMatches;
    }
    set matches(newMatches) {
        this.theMatches = newMatches;
        this.detect();
    }
    get value() {
        return this.theValue;
    }
    set value(textOrValue) {
        let value = this.internalSetValue(textOrValue);
        this.setValue(value);
        if (value.text && value.text.trim().length > 2) {
            this.matchCallback(value.text).then(matches => {
                for (const match of matches) {
                    if (match.text == this.theValue.text) {
                        this.setValue(match);
                        break;
                    }
                }
                this.matches = matches;
            });
        }
    }
    get displayValue() {
        return this.theValue.text;
    }
    displayMatches() {
        return !!(this.matches && this.matches.length);
    }
    internalSetValue(textOrValue) {
        if (!textOrValue) {
            textOrValue = '';
        }
        let value;
        let text;
        if (textOrValue.id) {
            value = textOrValue;
            text = textOrValue.text;
            if (!text) {
                text = '';
                value.text = text;
            }
        }
        else {
            text = textOrValue;
            value = {
                id: {
                    actorId: null,
                    actorRecordId: null,
                    repositoryId: null,
                    repositoryUuId: ''
                },
                text: textOrValue
            };
        }
        this.theValue = value;
        return value;
    }
}
//# sourceMappingURL=MatchingField.js.map