import { IObservable } from '@airport/observe';
import { ITweenVote, ITweenVoteFactor, IVote, IVoteFactor, VoteFactor_Value } from '@votecube/model';
declare type FrameDuration = number;
declare type FrameNumber = number;
declare type NumberOfFrames = number;
export interface IFactorFrameConfig {
    newDirFrameNumber: FrameNumber;
    newVoteFactor: ITweenVoteFactor;
    newVoteValue: VoteFactor_Value;
    numNewDirFrames: NumberOfFrames;
    numOldDirFrames: NumberOfFrames;
    numRemainingOldDirFrames: NumberOfFrames;
    oldVoteFactor: IVoteFactor;
    oldVoteValue: VoteFactor_Value;
    zeroValueFrameNumber: FrameNumber;
}
export interface IVoteFrameConfig {
    1: IFactorFrameConfig;
    2: IFactorFrameConfig;
    3: IFactorFrameConfig;
}
export interface IFactorConfig {
    newVoteFactor: ITweenVoteFactor;
}
export interface IPollMainLogic {
    copyVoteToTween(vote: IVote, lastVote: IVote): ITweenVote;
    scheduleFactorTweens(oldVote: IVote, newVote: ITweenVote, durationMillis: FrameDuration): IObservable<ITweenVote>;
    votesEqual(lastVote: IVote, vote: IVote): boolean;
}
export declare class PollMainLogic implements IPollMainLogic {
    votesEqual(lastVote: IVote, vote: IVote): boolean;
    copyVoteToTween(vote: IVote, lastVote: IVote): ITweenVote;
    scheduleFactorTweens(oldVote: IVote, newVote: ITweenVote, durationMillis: FrameDuration): IObservable<ITweenVote>;
    private getTweenVoteFactor;
    private runFactorTween;
    private setFinalFactor;
    private setupFactorTween;
}
export {};
//# sourceMappingURL=PollMainLogic.d.ts.map