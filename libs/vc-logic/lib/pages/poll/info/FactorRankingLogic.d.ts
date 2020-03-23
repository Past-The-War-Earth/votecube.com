import { IVote, IVoteFactor, Outcome_Ordinal } from '@votecube/model';
import { ILogicUtils } from '../../../LogicUtils';
import { IPageVote } from '../../../poll/PollManager';
export declare type AddOrRemove = 'add' | 'remove';
export interface IFactorInfo {
    factorNumber: number;
    factorTd: HTMLElement;
}
export interface IInElementOffset {
    topLeft: {
        x: number;
        y: number;
    };
    x: number;
    y: number;
}
export interface IInElementOffsetEvent {
    pageX: number;
    pageY: number;
    target: HTMLElement;
}
export interface IFactorRankingLogic {
    addOrRemoveAFactor(voteFactors: IVoteFactor[], index: number, addOrRemove: AddOrRemove, vote: IVote, logicUtils: ILogicUtils): {
        numMoved: number;
        placeholder: boolean;
    };
    getAlternateIndex(absDy: number, dy: number, originalIndex: number, have3: boolean): number;
    getFactorInfoAtCoords(x: number, y: number, factorNumberToExclude: number): IFactorInfo;
    getInElementOffset(event: IInElementOffsetEvent): IInElementOffset;
    moveFactorDown(voteFactors: IVoteFactor[], vote: IVote, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    moveFactorUp(voteFactors: IVoteFactor[], vote: IVote, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    setOutcome(voteFactors: IVoteFactor[], index: number, outcome: Outcome_Ordinal): void;
}
export declare class FactorRankingLogic implements IFactorRankingLogic {
    getFactorInfoAtCoords(x: number, y: number, factorNumberToExclude: number): IFactorInfo;
    getInElementOffset(event: IInElementOffsetEvent): IInElementOffset;
    getAlternateIndex(absDy: number, dy: number, originalIndex: number, have3: boolean): number;
    addOrRemoveAFactor(voteFactors: IVoteFactor[], index: number, addOrRemove: AddOrRemove, vote: IPageVote, logicUtils: ILogicUtils): {
        numMoved: number;
        placeholder: boolean;
    };
    move(index: number, options: any, logicUtils: ILogicUtils): void;
    moveFactorDown(voteFactors: IVoteFactor[], vote: IPageVote, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    moveFactorUp(voteFactors: IVoteFactor[], vote: IPageVote, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    setOutcome(voteFactors: IVoteFactor[], index: number, outcome: Outcome_Ordinal): void;
    private adjustRanking;
    private swapOnRemove;
    private removeFirstFactor;
    private setFactorOrder;
    private onMove;
    private moveDownOne;
    private moveDownTwo;
    private moveUpOne;
    private moveUpTwo;
    private factorsAt;
    private getFactorInfo;
}
