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
    addOrRemoveAFactor(solutionFactors: IUiSolutionFactor[], index: number, addOrRemove: AddOrRemove, solution: IUiSolution, logicUtils: ILogicUtils): {
        numMoved: number;
        placeholder: boolean;
    };
    getAlternateIndex(absDy: number, dy: number, originalIndex: number, have3: boolean): number;
    getFactorInfoAtCoords(x: number, y: number, factorNumberToExclude: number): IFactorInfo;
    getInElementOffset(event: IInElementOffsetEvent): IInElementOffset;
    moveFactorDown(solutionFactors: IUiSolutionFactor[], solution: IUiSolution, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    moveFactorUp(solutionFactors: IUiSolutionFactor[], soultion: IUiSolution, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    setOutcome(solutionFactors: IUiSolutionFactor[], index: number, outcome: 'A' | 'B'): void;
}
export declare class FactorRankingLogic implements IFactorRankingLogic {
    getFactorInfoAtCoords(x: number, y: number, factorNumberToExclude: number): IFactorInfo;
    getInElementOffset(event: IInElementOffsetEvent): IInElementOffset;
    getAlternateIndex(absDy: number, dy: number, originalIndex: number, have3: boolean): number;
    addOrRemoveAFactor(solutionFactors: IUiSolutionFactor[], index: number, addOrRemove: AddOrRemove, solution: IPageSolution, logicUtils: ILogicUtils): {
        numMoved: number;
        placeholder: boolean;
    };
    move(index: number, options: any, logicUtils: ILogicUtils): void;
    moveFactorDown(solutionFactors: IUiSolutionFactor[], solution: IPageSolution, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    moveFactorUp(solutionFactors: IUiSolutionFactor[], solution: IPageSolution, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    setOutcome(solutionFactors: IUiSolutionFactor[], index: number, outcome: 'A' | 'B'): void;
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