import { Agreement } from '../ddl/agreement/agreement';
import { AgreementVDescriptor } from './agreement/vagreement';
import { AgreementReason } from '../ddl/agreement/agreementreason';
import { AgreementReasonVDescriptor } from './agreement/vagreementreason';
import { Factor } from '../ddl/factor/factor';
import { FactorVDescriptor } from './factor/vfactor';
import { Idea } from '../ddl/idea/idea';
import { IdeaVDescriptor } from './idea/videa';
import { IdeaLabel } from '../ddl/idea/idealabel';
import { IdeaLabelVDescriptor } from './idea/videalabel';
import { IdeaRating } from '../ddl/idea/idearating';
import { IdeaRatingVDescriptor } from './idea/videarating';
import { IdeaTopic } from '../ddl/idea/ideatopic';
import { IdeaTopicVDescriptor } from './idea/videatopic';
import { Label } from '../ddl/label';
import { LabelVDescriptor } from './vlabel';
import { Position } from '../ddl/factor/position';
import { PositionVDescriptor } from './factor/vposition';
import { Reason } from '../ddl/idea/reason';
import { ReasonVDescriptor } from './idea/vreason';
import { SituationIdea } from '../ddl/idea/situationidea';
import { SituationIdeaVDescriptor } from './idea/vsituationidea';
import { IDvo, Dvo } from '@airport/airbridge-validate';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseAgreementDvo extends IDvo<Agreement, AgreementVDescriptor> {
}
export declare class BaseAgreementDvo extends SQDIDvo<Agreement, AgreementVDescriptor> implements IBaseAgreementDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseAgreementReasonDvo extends IDvo<AgreementReason, AgreementReasonVDescriptor> {
}
export declare class BaseAgreementReasonDvo extends SQDIDvo<AgreementReason, AgreementReasonVDescriptor> implements IBaseAgreementReasonDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDvo extends IDvo<Factor, FactorVDescriptor> {
}
export declare class BaseFactorDvo extends SQDIDvo<Factor, FactorVDescriptor> implements IBaseFactorDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaDvo extends IDvo<Idea, IdeaVDescriptor> {
}
export declare class BaseIdeaDvo extends SQDIDvo<Idea, IdeaVDescriptor> implements IBaseIdeaDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaLabelDvo extends IDvo<IdeaLabel, IdeaLabelVDescriptor> {
}
export declare class BaseIdeaLabelDvo extends SQDIDvo<IdeaLabel, IdeaLabelVDescriptor> implements IBaseIdeaLabelDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaRatingDvo extends IDvo<IdeaRating, IdeaRatingVDescriptor> {
}
export declare class BaseIdeaRatingDvo extends SQDIDvo<IdeaRating, IdeaRatingVDescriptor> implements IBaseIdeaRatingDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaTopicDvo extends IDvo<IdeaTopic, IdeaTopicVDescriptor> {
}
export declare class BaseIdeaTopicDvo extends SQDIDvo<IdeaTopic, IdeaTopicVDescriptor> implements IBaseIdeaTopicDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseLabelDvo extends IDvo<Label, LabelVDescriptor> {
}
export declare class BaseLabelDvo extends SQDIDvo<Label, LabelVDescriptor> implements IBaseLabelDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionDvo extends IDvo<Position, PositionVDescriptor> {
}
export declare class BasePositionDvo extends SQDIDvo<Position, PositionVDescriptor> implements IBasePositionDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReasonDvo extends IDvo<Reason, ReasonVDescriptor> {
}
export declare class BaseReasonDvo extends SQDIDvo<Reason, ReasonVDescriptor> implements IBaseReasonDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationIdeaDvo extends IDvo<SituationIdea, SituationIdeaVDescriptor> {
}
export declare class BaseSituationIdeaDvo extends SQDIDvo<SituationIdea, SituationIdeaVDescriptor> implements IBaseSituationIdeaDvo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDvos.d.ts.map