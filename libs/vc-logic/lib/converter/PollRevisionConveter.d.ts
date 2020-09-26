import { IUiPollRevision } from '@votecube/model';
import { IPollRevision } from '@votecube/ecclesia/lib/generated/interfaces';
export interface IPollRevisionConverter {
    dbToUi(revisionDb: IPollRevision): IUiPollRevision;
    uiToDb(revisionDoc: IUiPollRevision): IPollRevision;
}
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