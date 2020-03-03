import { IsData, IsDelta } from '../core/common';
import { IVersioned } from '../core/PathFragment';
import { Poll_Id, Poll_Name } from '../core/Poll';
import { Revision_Id } from '../core/Revision';
import { UiDocStatus } from './common';
import { IUiAgeSuitabilityTracked } from './UiDocumentValue';
import { IUiFactor, IUiFactorFromForm } from './UiFactor';
import { IUiOutcome, IUiOutcomeFromForm } from './UiOutcome';
import { IUiTheme, IUiThemeFromForm } from './UiTheme';
export interface IUiPollRevision extends IUiPollRevisionCore<IsData> {
}
export interface IUiPollRevisionDelta extends IUiPollRevisionCore<IsDelta> {
}
export interface IUiPollRevisionCore<Doc extends UiDocStatus> extends IUiAgeSuitabilityTracked<Doc>, IUiRevisionFromForm<Doc>, IVersioned<Revision_Id> {
    factors: {
        1: IUiFactor<Doc>;
        2: IUiFactor<Doc>;
        3: IUiFactor<Doc>;
    };
    outcomes: {
        A: IUiOutcome<Doc>;
        B: IUiOutcome<Doc>;
    };
    pollId: Poll_Id;
    theme: IUiTheme<Doc>;
}
export interface IUiRevisionFromForm<Doc extends UiDocStatus = IsData> {
    factors: {
        1: IUiFactorFromForm<Doc>;
        2: IUiFactorFromForm<Doc>;
        3: IUiFactorFromForm<Doc>;
    };
    name: Doc extends IsDelta ? boolean : Poll_Name;
    outcomes: {
        A: IUiOutcomeFromForm<Doc>;
        B: IUiOutcomeFromForm<Doc>;
    };
    theme: IUiThemeFromForm;
}
