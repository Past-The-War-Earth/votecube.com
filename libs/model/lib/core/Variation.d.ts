import { DocStatus, IFullTextSearch, IMarked, IMarks, IsData, IsDelta, IsDoc, Id } from './common';
import { ICoreAgeSuitabilityTracked, IDocumentValue } from './DocumentValue';
import { ICoreFactorFromForm, ICoreMarkedFactor } from './Factor';
import { ICoreOutcome, ICoreOutcomeFromForm } from './Outcome';
import { IVersioned } from './PathFragment';
import { Poll_Id, Poll_Name } from './Poll';
import { ICoreTheme, ICoreThemeFromForm } from './Theme';
export declare type Revision_Id = Id;
export interface ICoreRevision<Doc extends DocStatus> extends ICoreAgeSuitabilityTracked<Doc>, ICoreRevisionFromForm<Doc>, IFullTextSearch, IVersioned<Revision_Id> {
    factors: {
        1: ICoreMarkedFactor<Doc>;
        2: ICoreMarkedFactor<Doc>;
        3: ICoreMarkedFactor<Doc>;
        marks: IMarks;
    };
    marks: IMarks;
    outcomes: {
        A: ICoreOutcome<Doc> & IMarked;
        B: ICoreOutcome<Doc> & IMarked;
        marks: IMarks;
    };
    pollId: Poll_Id;
    theme: ICoreTheme<Doc>;
}
export interface ICoreRevisionFromForm<Doc extends DocStatus = IsData> {
    factors: {
        1: ICoreFactorFromForm<Doc>;
        2: ICoreFactorFromForm<Doc>;
        3: ICoreFactorFromForm<Doc>;
    };
    name: Doc extends IsDoc ? IDocumentValue<Poll_Name> : Doc extends IsDelta ? boolean : Poll_Name;
    outcomes: {
        A: ICoreOutcomeFromForm<Doc>;
        B: ICoreOutcomeFromForm<Doc>;
    };
    theme: ICoreThemeFromForm;
}
