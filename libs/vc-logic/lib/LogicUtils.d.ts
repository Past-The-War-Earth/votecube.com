import { ITweenAgreementFactor, IUiColor, IUiAgreement, IUiAgreementFactor } from '@votecube/model';
export interface ILogicUtils {
    copyProperties(from: any, to: any, properties: string[]): void;
    getArrayValueTexts(arrayValue: Array<{
        text: string;
    }>): string;
    getColor(color: IUiColor): string;
    getDate(date: Date): string;
    getTextColor(color: IUiColor): string;
    getAgreementFactorNodesInValueOrder(agreement: IUiAgreement): IUiAgreementFactor[];
    overlay(from: any, to: any): void;
    isDifferent(original: any, changed: any, excludeKeys?: string[]): boolean;
    transition(elementId: string, transitionFunction: any, options: any): void;
}
export declare class LogicUtils implements ILogicUtils {
    copyProperties(from: any, to: any, properties: string[]): void;
    getArrayValueTexts(arrayValue: Array<{
        text: string;
    }>): string;
    getColor(color: IUiColor): string;
    getDate(date: Date): string;
    getTextColor(color: IUiColor): string;
    getAgreementFactorNodesInValueOrder<V extends IUiAgreement = IUiAgreement>(agreement: V): IUiAgreementFactor[] | ITweenAgreementFactor[];
    overlay(from: any, to: any): void;
    isDifferent(original: any, changed: any, excludeKeys?: string[]): boolean;
    transition(elementId: string, transitionFunction: any, options: any): void;
    private ensure2Digits;
}
//# sourceMappingURL=LogicUtils.d.ts.map