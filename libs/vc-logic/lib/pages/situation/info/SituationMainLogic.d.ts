import { ITweenSolution, ITweenSolutionFactor, IUiSolution, IUiSolutionFactor, SolutionFactor_Value } from '@votecube/model';
import { Observable } from 'rxjs';
declare type FrameDuration = number;
declare type FrameNumber = number;
declare type NumberOfFrames = number;
export interface IFactorFrameConfig {
    newDirFrameNumber: FrameNumber;
    newSolutionFactor: ITweenSolutionFactor;
    newSolutionValue: SolutionFactor_Value;
    numNewDirFrames: NumberOfFrames;
    numOldDirFrames: NumberOfFrames;
    numRemainingOldDirFrames: NumberOfFrames;
    oldSolutionFactor: IUiSolutionFactor;
    oldSolutionValue: SolutionFactor_Value;
    zeroValueFrameNumber: FrameNumber;
}
export interface IUiSolutionFrameConfig {
    1: IFactorFrameConfig;
    2: IFactorFrameConfig;
    3: IFactorFrameConfig;
}
export interface IFactorConfig {
    newSolutionFactor: ITweenSolutionFactor;
}
export interface ISituationMainLogic {
    copySolutionToTween(solution: IUiSolution, lastSolution: IUiSolution): ITweenSolution;
    scheduleFactorTweens(oldSolution: IUiSolution, newSolution: ITweenSolution, durationMillis: FrameDuration): Observable<ITweenSolution>;
    solutionsEqual(lastSolution: IUiSolution, solution: IUiSolution): boolean;
}
export declare class SituationMainLogic implements ISituationMainLogic {
    solutionsEqual(lastSolution: IUiSolution, solution: IUiSolution): boolean;
    copySolutionToTween(solution: IUiSolution, lastSolution: IUiSolution): ITweenSolution;
    scheduleFactorTweens(oldSolution: IUiSolution, newSolution: ITweenSolution, durationMillis: FrameDuration): Observable<ITweenSolution>;
    private getTweenSolutionFactor;
    private runFactorTween;
    private setFinalFactor;
    private setupFactorTween;
}
export {};
//# sourceMappingURL=SituationMainLogic.d.ts.map