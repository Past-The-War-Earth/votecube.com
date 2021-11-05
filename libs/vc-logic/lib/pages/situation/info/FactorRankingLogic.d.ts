import { IUiSolution, IUiSolutionFactor } from '@votecube/model';
import { ILogicUtils } from '../../../LogicUtils';
import { IPageSolution } from '../../../situation/SituationManager';
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
    addOrRemoveAFactor(voteFactors: IUiSolutionFactor[], index: number, addOrRemove: AddOrRemove, vote: IUiSolution, logicUtils: ILogicUtils): {
        numMoved: number;
        placeholder: boolean;
    };
    getAlternateIndex(absDy: number, dy: number, originalIndex: number, have3: boolean): number;
    getFactorInfoAtCoords(x: number, y: number, factorNumberToExclude: number): IFactorInfo;
    getInElementOffset(event: IInElementOffsetEvent): IInElementOffset;
    moveFactorDown(voteFactors: IUiSolutionFactor[], vote: IUiSolution, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    moveFactorUp(voteFactors: IUiSolutionFactor[], vote: IUiSolution, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    setOutcome(voteFactors: IUiSolutionFactor[], index: number, outcome: 'A' | 'B'): void;
}
export declare class FactorRankingLogic implements IFactorRankingLogic {
    getFactorInfoAtCoords(x: number, y: number, factorNumberToExclude: number): IFactorInfo;
    getInElementOffset(event: IInElementOffsetEvent): IInElementOffset;
    getAlternateIndex(absDy: number, dy: number, originalIndex: number, have3: boolean): number;
    addOrRemoveAFactor(voteFactors: IUiSolutionFactor[], index: number, addOrRemove: AddOrRemove, vote: IPageSolution, logicUtils: ILogicUtils): {
        numMoved: number;
        placeholder: boolean;
    };
    move(index: number, options: any, logicUtils: ILogicUtils): void;
    moveFactorDown(voteFactors: IUiSolutionFactor[], vote: IPageSolution, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    moveFactorUp(voteFactors: IUiSolutionFactor[], vote: IPageSolution, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    setOutcome(voteFactors: IUiSolutionFactor[], index: number, outcome: 'A' | 'B'): void;
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
//# sourceMappingURL=FactorRankingLogic.d.ts.map