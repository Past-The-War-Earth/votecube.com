import { Field, IField } from './Field';
export interface IMatchingField extends IField {
    matches: any[];
}
export declare class MatchingField extends Field implements IMatchingField {
    private theMatches;
    get matches(): any[];
    set matches(newMatches: any[]);
}
//# sourceMappingURL=MatchingField.d.ts.map