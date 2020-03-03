import { ICoreColor, IsData, ITweenVoteFactor, IVote, IVoteFactor } from '@votecube/model';
export interface ILogicUtils {
    copyProperties(from: any, to: any, properties: string[]): void;
    getArrayValueTexts(arrayValue: Array<{
        text: string;
    }>): string;
    getColor(color: ICoreColor<IsData>): string;
    getDate(date: Date): string;
    getTextColor(color: ICoreColor<IsData>): string;
    getVoteFactorNodesInValueOrder(vote: IVote): IVoteFactor[];
    overlay(from: any, to: any): void;
    setDeltas(from: any, to: any, delta: any, excludeKeys?: string[]): void;
    transition(elementId: string, transitionFunction: any, options: any): void;
}
export declare class LogicUtils implements ILogicUtils {
    copyProperties(from: any, to: any, properties: string[]): void;
    getArrayValueTexts(arrayValue: Array<{
        text: string;
    }>): string;
    getColor(color: ICoreColor<IsData>): string;
    getDate(date: Date): string;
    getTextColor(color: ICoreColor<IsData>): string;
    getVoteFactorNodesInValueOrder<V extends IVote = IVote>(vote: V): IVoteFactor[] | ITweenVoteFactor[];
    overlay(from: any, to: any): void;
    setDeltas(from: any, to: any, delta: any, excludeKeys?: string[]): void;
    transition(elementId: string, transitionFunction: any, options: any): void;
    private ensure2Digits;
}
