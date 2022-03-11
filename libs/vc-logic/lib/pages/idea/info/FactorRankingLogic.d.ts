import { IUiAgreement, IUiAgreementFactor } from '@votecube/model';
import { ILogicUtils } from '../../../LogicUtils';
import { IPageAgreement } from '../../../idea/IdeaManager';
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
    addOrRemoveAFactor(agreementFactors: IUiAgreementFactor[], index: number, addOrRemove: AddOrRemove, agreement: IUiAgreement, logicUtils: ILogicUtils): {
        numMoved: number;
        placeholder: boolean;
    };
    getAlternateIndex(absDy: number, dy: number, originalIndex: number, have3: boolean): number;
    getFactorInfoAtCoords(x: number, y: number, factorNumberToExclude: number): IFactorInfo;
    getInElementOffset(event: IInElementOffsetEvent): IInElementOffset;
    moveFactorDown(agreementFactors: IUiAgreementFactor[], agreement: IUiAgreement, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    moveFactorUp(agreementFactors: IUiAgreementFactor[], soultion: IUiAgreement, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    setOutcome(agreementFactors: IUiAgreementFactor[], index: number, outcome: 'A' | 'B'): void;
}
export declare class FactorRankingLogic implements IFactorRankingLogic {
    getFactorInfoAtCoords(x: number, y: number, factorNumberToExclude: number): IFactorInfo;
    getInElementOffset(event: IInElementOffsetEvent): IInElementOffset;
    getAlternateIndex(absDy: number, dy: number, originalIndex: number, have3: boolean): number;
    addOrRemoveAFactor(agreementFactors: IUiAgreementFactor[], index: number, addOrRemove: AddOrRemove, agreement: IPageAgreement, logicUtils: ILogicUtils): {
        numMoved: number;
        placeholder: boolean;
    };
    move(index: number, options: any, logicUtils: ILogicUtils): void;
    moveFactorDown(agreementFactors: IUiAgreementFactor[], agreement: IPageAgreement, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    moveFactorUp(agreementFactors: IUiAgreementFactor[], agreement: IPageAgreement, originalIndex: number, newIndex: number, logicUtils: ILogicUtils): boolean;
    setOutcome(agreementFactors: IUiAgreementFactor[], index: number, outcome: 'A' | 'B'): void;
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