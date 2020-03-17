import { Outcome_Id, Outcome_Name } from '@votecube/relational-db';
import { IsDelta } from '../core/common';
import { UiDocStatus } from './common';
import { IUiAgeSuitabilityTracked } from './UiDocumentValue';
import { IUiUserCreated } from './UiUser';
export interface IUiOutcome<Doc extends UiDocStatus> extends IUiAgeSuitabilityTracked<Doc>, IUiOutcomeFromForm<Doc>, IUiUserCreated<Outcome_Id> {
    name: Doc extends IsDelta ? boolean : Outcome_Name;
}
export interface IUiOutcomeFromForm<Doc extends UiDocStatus> {
    name: Doc extends IsDelta ? boolean : Outcome_Name;
}
