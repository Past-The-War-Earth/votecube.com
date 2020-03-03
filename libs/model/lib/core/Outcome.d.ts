import { DocStatus, IFullTextSearch, IsDelta, IsDoc, Id } from './common';
import { ICoreAgeSuitabilityTracked, IDocumentValue } from './DocumentValue';
import { IUserCreated } from './User';
export declare type Outcome_Id = Id;
export declare type Outcome_Name = string;
export declare type Outcome_Ordinal = 'A' | 'B';
export interface ICoreOutcome<Doc extends DocStatus> extends ICoreAgeSuitabilityTracked<Doc>, ICoreOutcomeFromForm<Doc>, IFullTextSearch, IUserCreated<Outcome_Id> {
    name: Doc extends IsDoc ? IDocumentValue<Outcome_Name> : Doc extends IsDelta ? boolean : Outcome_Name;
}
export interface ICoreOutcomeFromForm<Doc extends DocStatus> {
    name: Doc extends IsDoc ? IDocumentValue<Outcome_Name> : Doc extends IsDelta ? boolean : Outcome_Name;
}
