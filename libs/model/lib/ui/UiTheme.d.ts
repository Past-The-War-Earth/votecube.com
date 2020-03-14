import { Theme_Id, Theme_Name } from '@votecube/relational-db';
import { UiDocStatus } from './common';
import { IUiAgeSuitabilityTracked } from './UiDocumentValue';
export interface IUiTheme<Doc extends UiDocStatus> extends IUiAgeSuitabilityTracked<Doc>, IUiThemeFromForm {
    id: Theme_Id;
    name: Theme_Name;
}
export interface IUiThemeFromForm {
    id: Theme_Id;
    name: Theme_Name;
}
