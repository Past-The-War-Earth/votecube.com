import { IFieldRules, IValidator } from '..';
import { Field, IField } from './Field';
export interface IMatchingField extends IField {
    matches: IMatch[];
}
export interface IMatch {
    id: {
        actorId: number;
        actorRecordId: number;
        repositoryId: number;
    };
    text: string;
}
export declare class MatchingField extends Field implements IMatchingField {
    private matchCallback;
    private theMatches;
    get matches(): IMatch[];
    set matches(newMatches: IMatch[]);
    get value(): any;
    set value(textOrValue: any);
    get displayValue(): any;
    constructor(matchCallback: (text: string) => Promise<IMatch[]>, validators?: IValidator[], rules?: IFieldRules);
    displayMatches(): boolean;
    private internalSetValue;
}
//# sourceMappingURL=MatchingField.d.ts.map