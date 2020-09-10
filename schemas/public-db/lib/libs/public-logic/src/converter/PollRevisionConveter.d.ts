import { Factor_Number, IsData, IUiFactor, IUiOutcome, IUiPollRevision, IUiPosition, IUiTheme } from '@votecube/model';
import { IFactor, IOutcome, IPollRevision, IPollRevisionFactorPosition, IPosition, ITheme, Outcome_Ordinal } from '@votecube/relational-db';
export interface IPollRevisionConverter {
    dbToUi(revisionDb: IPollRevision): IUiPollRevision;
    uiToDb(revisionDoc: IUiPollRevision): IPollRevision;
}
export declare class PollRevisionConverter implements IPollRevisionConverter {
    dbToUi(revisionDb: IPollRevision): IUiPollRevision;
    getUiFactor(factorNumber: Factor_Number, factorPositions: IPollRevisionFactorPosition[]): IUiFactor<IsData>;
    getUiPosition(prFactorPosition: IPollRevisionFactorPosition): IUiPosition<IsData>;
    getUiOutcome(outcome: IOutcome): IUiOutcome<IsData>;
    getUiTheme(theme: ITheme): IUiTheme<IsData>;
    uiToDb(revisionDoc: IUiPollRevision): IPollRevision;
    getDbOutcome(uiOutcome: IUiOutcome<IsData>): IOutcome;
    getDbPollFactorPosition(uiFactor: IUiFactor<IsData>, factorNumber: Factor_Number, outcomeOrdinal: Outcome_Ordinal): IPollRevisionFactorPosition;
    getDbFactor(uiFactor: IUiFactor<IsData>): IFactor;
    getDbPosition(uiPosition: IUiPosition<IsData>): IPosition;
}
