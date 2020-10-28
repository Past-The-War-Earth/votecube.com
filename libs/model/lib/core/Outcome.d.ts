import { Outcome_Name } from '@votecube/ecclesia';
import { DocStatus, IFullTextSearch, IsDelta, IsDoc } from './common';
import { ICoreAgeSuitabilityTracked, IDocumentValue } from './DocumentValue';
import { IUserCreated } from './User';
export interface ICoreOutcome<Doc extends DocStatus> extends ICoreAgeSuitabilityTracked<Doc>, ICoreOutcomeFromForm<Doc>, IFullTextSearch, IUserCreated {
    name: Doc extends IsDoc ? IDocumentValue<Outcome_Name> : Doc extends IsDelta ? boolean : Outcome_Name;
}
export interface ICoreOutcomeFromForm<Doc extends DocStatus> {
    name: Doc extends IsDoc ? IDocumentValue<Outcome_Name> : Doc extends IsDelta ? boolean : Outcome_Name;
}
//# sourceMappingURL=Outcome.d.ts.map