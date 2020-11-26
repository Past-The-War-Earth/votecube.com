import { IPollRevision } from '@votecube/ecclesia/lib/generated/interfaces';
import { IUiPollRevision } from '@votecube/model';
export interface IPollRevisionConverter {
    dbToUi(revisionDb: IPollRevision): IUiPollRevision;
    uiToDb(revisionDoc: IUiPollRevision): IPollRevision;
}
export declare const OPERATION_UNIQUE_ID_FIELD = "__UID__";
export declare class PollRevisionConverter implements IPollRevisionConverter {
    dbToUi(revisionDb: IPollRevision): IUiPollRevision;
    uiToDb(revisionDoc: IUiPollRevision): IPollRevision;
    private getUiFactor;
    private getUiPosition;
    private getUiOutcome;
    private getUiTheme;
    private getDbOutcome;
    private getDbPollFactorPosition;
    private getDbFactor;
    private getDbPosition;
}
//# sourceMappingURL=PollRevisionConveter.d.ts.map