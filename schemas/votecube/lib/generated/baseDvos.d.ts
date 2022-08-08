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
import { IdeaReason } from '../ddl/reason/ideareason';
import { IdeaReasonVDescriptor } from './reason/videareason';
import { IdeaTopic } from '../ddl/idea/ideatopic';
import { IdeaTopicVDescriptor } from './idea/videatopic';
import { Label } from '../ddl/label';
import { LabelVDescriptor } from './vlabel';
import { Position } from '../ddl/factor/position';
import { PositionVDescriptor } from './factor/vposition';
import { Reason } from '../ddl/reason/reason';
import { ReasonVDescriptor } from './reason/vreason';
import { ReasonCubeDisplay } from '../ddl/reason/reasoncubedisplay';
import { ReasonCubeDisplayVDescriptor } from './reason/vreasoncubedisplay';
import { SituationIdea } from '../ddl/idea/situationidea';
import { SituationIdeaVDescriptor } from './idea/vsituationidea';
import { SituationIdeaReason } from '../ddl/reason/situationideareason';
import { SituationIdeaReasonVDescriptor } from './reason/vsituationideareason';
import { IDvo, Dvo } from '@airbridge/validate';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseAgreementDvo extends IDvo<Agreement, AgreementVDescriptor<Agreement>> {
}
export declare class BaseAgreementDvo extends SQDIDvo<Agreement, AgreementVDescriptor<Agreement>> implements IBaseAgreementDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseAgreementReasonDvo extends IDvo<AgreementReason, AgreementReasonVDescriptor<AgreementReason>> {
}
export declare class BaseAgreementReasonDvo extends SQDIDvo<AgreementReason, AgreementReasonVDescriptor<AgreementReason>> implements IBaseAgreementReasonDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDvo extends IDvo<Factor, FactorVDescriptor<Factor>> {
}
export declare class BaseFactorDvo extends SQDIDvo<Factor, FactorVDescriptor<Factor>> implements IBaseFactorDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaDvo extends IDvo<Idea, IdeaVDescriptor<Idea>> {
}
export declare class BaseIdeaDvo extends SQDIDvo<Idea, IdeaVDescriptor<Idea>> implements IBaseIdeaDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaLabelDvo extends IDvo<IdeaLabel, IdeaLabelVDescriptor<IdeaLabel>> {
}
export declare class BaseIdeaLabelDvo extends SQDIDvo<IdeaLabel, IdeaLabelVDescriptor<IdeaLabel>> implements IBaseIdeaLabelDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaRatingDvo extends IDvo<IdeaRating, IdeaRatingVDescriptor<IdeaRating>> {
}
export declare class BaseIdeaRatingDvo extends SQDIDvo<IdeaRating, IdeaRatingVDescriptor<IdeaRating>> implements IBaseIdeaRatingDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaReasonDvo extends IDvo<IdeaReason, IdeaReasonVDescriptor<IdeaReason>> {
}
export declare class BaseIdeaReasonDvo extends SQDIDvo<IdeaReason, IdeaReasonVDescriptor<IdeaReason>> implements IBaseIdeaReasonDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaTopicDvo extends IDvo<IdeaTopic, IdeaTopicVDescriptor<IdeaTopic>> {
}
export declare class BaseIdeaTopicDvo extends SQDIDvo<IdeaTopic, IdeaTopicVDescriptor<IdeaTopic>> implements IBaseIdeaTopicDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseLabelDvo extends IDvo<Label, LabelVDescriptor<Label>> {
}
export declare class BaseLabelDvo extends SQDIDvo<Label, LabelVDescriptor<Label>> implements IBaseLabelDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionDvo extends IDvo<Position, PositionVDescriptor<Position>> {
}
export declare class BasePositionDvo extends SQDIDvo<Position, PositionVDescriptor<Position>> implements IBasePositionDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReasonDvo extends IDvo<Reason, ReasonVDescriptor<Reason>> {
}
export declare class BaseReasonDvo extends SQDIDvo<Reason, ReasonVDescriptor<Reason>> implements IBaseReasonDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReasonCubeDisplayDvo extends IDvo<ReasonCubeDisplay, ReasonCubeDisplayVDescriptor<ReasonCubeDisplay>> {
}
export declare class BaseReasonCubeDisplayDvo extends SQDIDvo<ReasonCubeDisplay, ReasonCubeDisplayVDescriptor<ReasonCubeDisplay>> implements IBaseReasonCubeDisplayDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationIdeaDvo extends IDvo<SituationIdea, SituationIdeaVDescriptor<SituationIdea>> {
}
export declare class BaseSituationIdeaDvo extends SQDIDvo<SituationIdea, SituationIdeaVDescriptor<SituationIdea>> implements IBaseSituationIdeaDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationIdeaReasonDvo extends IDvo<SituationIdeaReason, SituationIdeaReasonVDescriptor<SituationIdeaReason>> {
}
export declare class BaseSituationIdeaReasonDvo extends SQDIDvo<SituationIdeaReason, SituationIdeaReasonVDescriptor<SituationIdeaReason>> implements IBaseSituationIdeaReasonDvo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDvos.d.ts.map