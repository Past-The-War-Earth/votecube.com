import { Agreement } from '../ddl/agreement/agreement';
import { AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement } from './agreement/qagreement';
import { AgreementReason } from '../ddl/agreement/agreementreason';
import { AgreementReasonESelect, AgreementReasonECreateProperties, AgreementReasonEUpdateColumns, AgreementReasonEUpdateProperties, AgreementReasonEId, AgreementReasonGraph, QAgreementReason } from './agreement/qagreementreason';
import { Factor } from '../ddl/factor/factor';
import { FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor } from './factor/qfactor';
import { Idea } from '../ddl/idea/idea';
import { IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea } from './idea/qidea';
import { IdeaLabel } from '../ddl/idea/idealabel';
import { IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel } from './idea/qidealabel';
import { IdeaTopic } from '../ddl/idea/ideatopic';
import { IdeaTopicESelect, IdeaTopicECreateProperties, IdeaTopicEUpdateColumns, IdeaTopicEUpdateProperties, IdeaTopicEId, IdeaTopicGraph, QIdeaTopic } from './idea/qideatopic';
import { Label } from '../ddl/label';
import { LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel } from './qlabel';
import { Position } from '../ddl/factor/position';
import { PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition } from './factor/qposition';
import { Reason } from '../ddl/idea/reason';
import { ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason } from './idea/qreason';
import { SituationIdea } from '../ddl/idea/situationidea';
import { SituationIdeaESelect, SituationIdeaECreateProperties, SituationIdeaEUpdateColumns, SituationIdeaEUpdateProperties, SituationIdeaEId, SituationIdeaGraph, QSituationIdea } from './idea/qsituationidea';
import { IDuo, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-traffic-control';
import { Duo } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDuo<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Duo<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseAgreementDuo extends IDuo<Agreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> {
}
export declare class BaseAgreementDuo extends SQDIDuo<Agreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> implements IBaseAgreementDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseAgreementReasonDuo extends IDuo<AgreementReason, AgreementReasonESelect, AgreementReasonECreateProperties, AgreementReasonEUpdateColumns, AgreementReasonEUpdateProperties, AgreementReasonEId, AgreementReasonGraph, QAgreementReason> {
}
export declare class BaseAgreementReasonDuo extends SQDIDuo<AgreementReason, AgreementReasonESelect, AgreementReasonECreateProperties, AgreementReasonEUpdateColumns, AgreementReasonEUpdateProperties, AgreementReasonEId, AgreementReasonGraph, QAgreementReason> implements IBaseAgreementReasonDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDuo extends IDuo<Factor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}
export declare class BaseFactorDuo extends SQDIDuo<Factor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> implements IBaseFactorDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaDuo extends IDuo<Idea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> {
}
export declare class BaseIdeaDuo extends SQDIDuo<Idea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> implements IBaseIdeaDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaLabelDuo extends IDuo<IdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> {
}
export declare class BaseIdeaLabelDuo extends SQDIDuo<IdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> implements IBaseIdeaLabelDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaTopicDuo extends IDuo<IdeaTopic, IdeaTopicESelect, IdeaTopicECreateProperties, IdeaTopicEUpdateColumns, IdeaTopicEUpdateProperties, IdeaTopicEId, IdeaTopicGraph, QIdeaTopic> {
}
export declare class BaseIdeaTopicDuo extends SQDIDuo<IdeaTopic, IdeaTopicESelect, IdeaTopicECreateProperties, IdeaTopicEUpdateColumns, IdeaTopicEUpdateProperties, IdeaTopicEId, IdeaTopicGraph, QIdeaTopic> implements IBaseIdeaTopicDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseLabelDuo extends IDuo<Label, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> {
}
export declare class BaseLabelDuo extends SQDIDuo<Label, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> implements IBaseLabelDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionDuo extends IDuo<Position, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}
export declare class BasePositionDuo extends SQDIDuo<Position, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> implements IBasePositionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReasonDuo extends IDuo<Reason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason> {
}
export declare class BaseReasonDuo extends SQDIDuo<Reason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason> implements IBaseReasonDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationIdeaDuo extends IDuo<SituationIdea, SituationIdeaESelect, SituationIdeaECreateProperties, SituationIdeaEUpdateColumns, SituationIdeaEUpdateProperties, SituationIdeaEId, SituationIdeaGraph, QSituationIdea> {
}
export declare class BaseSituationIdeaDuo extends SQDIDuo<SituationIdea, SituationIdeaESelect, SituationIdeaECreateProperties, SituationIdeaEUpdateColumns, SituationIdeaEUpdateProperties, SituationIdeaEId, SituationIdeaGraph, QSituationIdea> implements IBaseSituationIdeaDuo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDuos.d.ts.map