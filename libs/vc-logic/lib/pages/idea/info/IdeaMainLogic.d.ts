import { ITweenAgreement, ITweenAgreementFactor, IUiAgreement, IUiAgreementFactor, AgreementFactor_Value } from '@votecube/model';
import { Observable } from 'rxjs';
declare type FrameDuration = number;
declare type FrameNumber = number;
declare type NumberOfFrames = number;
export interface IFactorFrameConfig {
    newDirFrameNumber: FrameNumber;
    newAgreementFactor: ITweenAgreementFactor;
    newAgreementValue: AgreementFactor_Value;
    numNewDirFrames: NumberOfFrames;
    numOldDirFrames: NumberOfFrames;
    numRemainingOldDirFrames: NumberOfFrames;
    oldAgreementFactor: IUiAgreementFactor;
    oldAgreementValue: AgreementFactor_Value;
    zeroValueFrameNumber: FrameNumber;
}
export interface IUiAgreementFrameConfig {
    1: IFactorFrameConfig;
    2: IFactorFrameConfig;
    3: IFactorFrameConfig;
}
export interface IFactorConfig {
    newAgreementFactor: ITweenAgreementFactor;
}
export interface IIdeaMainLogic {
    copyAgreementToTween(agreement: IUiAgreement, lastAgreement: IUiAgreement): ITweenAgreement;
    scheduleFactorTweens(oldAgreement: IUiAgreement, newAgreement: ITweenAgreement, durationMillis: FrameDuration): Observable<ITweenAgreement>;
    agreementsEqual(lastAgreement: IUiAgreement, agreement: IUiAgreement): boolean;
}
export declare class IdeaMainLogic implements IIdeaMainLogic {
    agreementsEqual(lastAgreement: IUiAgreement, agreement: IUiAgreement): boolean;
    copyAgreementToTween(agreement: IUiAgreement, lastAgreement: IUiAgreement): ITweenAgreement;
    scheduleFactorTweens(oldAgreement: IUiAgreement, newAgreement: ITweenAgreement, durationMillis: FrameDuration): Observable<ITweenAgreement>;
    private getTweenAgreementFactor;
    private runFactorTween;
    private setFinalFactor;
    private setupFactorTween;
}
export {};
//# sourceMappingURL=IdeaMainLogic.d.ts.map