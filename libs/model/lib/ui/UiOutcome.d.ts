import { Outcome_Id, Outcome_Name } from '@votecube/relational-db';
import { IsDelta } from '../core/common';
import { IUserCreated } from '../core/User';
import { UiDocStatus } from './common';
import { IUiAgeSuitabilityTracked } from './UiDocumentValue';
export interface IUiOutcome<Doc extends UiDocStatus> extends IUiAgeSuitabilityTracked<Doc>, IUiOutcomeFromForm<Doc>, IUserCreated<Outcome_Id> {
    name: Doc extends IsDelta ? boolean : Outcome_Name;
}
export interface IUiOutcomeFromForm<Doc extends UiDocStatus> {
    name: Doc extends IsDelta ? boolean : Outcome_Name;
}
