import { Poll_Id, PollRevision_Id, PollRevisionTranslation_Name } from '@votecube/relational-db';
import { IsData, IsDelta } from '../core/common';
import { UiDocStatus } from './common';
import { IUiAgeSuitabilityTracked } from './UiDocumentValue';
import { IUiFactor, IUiFactorFromForm } from './UiFactor';
import { IUiOutcome, IUiOutcomeFromForm } from './UiOutcome';
import { IUiVersioned } from './UiPathFragment';
import { IUiTheme, IUiThemeFromForm } from './UiTheme';
export interface IUiPollRevision extends IUiPollRevisionCore<IsData> {
}
export interface IUiPollRevisionDelta extends IUiPollRevisionCore<IsDelta> {
}
export interface IUiPollRevisionCore<Doc extends UiDocStatus> extends IUiAgeSuitabilityTracked<Doc>, IUiRevisionFromForm<Doc>, IUiVersioned<PollRevision_Id> {
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
    name: Doc extends IsDelta ? boolean : PollRevisionTranslation_Name;
    outcomes: {
        A: IUiOutcomeFromForm<Doc>;
        B: IUiOutcomeFromForm<Doc>;
    };
    theme: IUiThemeFromForm<Doc>;
}
