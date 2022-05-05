import { IAgreement } from './agreement/agreement';
import { AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement } from './agreement/qagreement';
import { IAgreementFactor } from './agreement/agreementfactor';
import { AgreementFactorESelect, AgreementFactorECreateProperties, AgreementFactorEUpdateColumns, AgreementFactorEUpdateProperties, AgreementFactorEId, AgreementFactorGraph, QAgreementFactor } from './agreement/qagreementfactor';
import { IFactor } from './factor/factor';
import { FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor } from './factor/qfactor';
import { IIdea } from './idea/idea';
import { IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea } from './idea/qidea';
import { IIdeaLabel } from './idea/idealabel';
import { IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel } from './idea/qidealabel';
import { IIdeaSituation } from './idea/ideasituation';
import { IdeaSituationESelect, IdeaSituationECreateProperties, IdeaSituationEUpdateColumns, IdeaSituationEUpdateProperties, IdeaSituationEId, IdeaSituationGraph, QIdeaSituation } from './idea/qideasituation';
import { ILabel } from './label';
import { LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel } from './qlabel';
import { IOutcome } from './idea/outcome';
import { OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome } from './idea/qoutcome';
import { IPosition } from './factor/position';
import { PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition } from './factor/qposition';
import { IReason } from './idea/reason';
import { ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason } from './idea/qreason';
import { IDuo, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-traffic-control';
import { Duo } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDuo<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Duo<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseAgreementDuo extends IDuo<IAgreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> {
}
export declare class BaseAgreementDuo extends SQDIDuo<IAgreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> implements IBaseAgreementDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseAgreementFactorDuo extends IDuo<IAgreementFactor, AgreementFactorESelect, AgreementFactorECreateProperties, AgreementFactorEUpdateColumns, AgreementFactorEUpdateProperties, AgreementFactorEId, AgreementFactorGraph, QAgreementFactor> {
}
export declare class BaseAgreementFactorDuo extends SQDIDuo<IAgreementFactor, AgreementFactorESelect, AgreementFactorECreateProperties, AgreementFactorEUpdateColumns, AgreementFactorEUpdateProperties, AgreementFactorEId, AgreementFactorGraph, QAgreementFactor> implements IBaseAgreementFactorDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDuo extends IDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}
export declare class BaseFactorDuo extends SQDIDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> implements IBaseFactorDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaDuo extends IDuo<IIdea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> {
}
export declare class BaseIdeaDuo extends SQDIDuo<IIdea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> implements IBaseIdeaDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaLabelDuo extends IDuo<IIdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> {
}
export declare class BaseIdeaLabelDuo extends SQDIDuo<IIdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> implements IBaseIdeaLabelDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaSituationDuo extends IDuo<IIdeaSituation, IdeaSituationESelect, IdeaSituationECreateProperties, IdeaSituationEUpdateColumns, IdeaSituationEUpdateProperties, IdeaSituationEId, IdeaSituationGraph, QIdeaSituation> {
}
export declare class BaseIdeaSituationDuo extends SQDIDuo<IIdeaSituation, IdeaSituationESelect, IdeaSituationECreateProperties, IdeaSituationEUpdateColumns, IdeaSituationEUpdateProperties, IdeaSituationEId, IdeaSituationGraph, QIdeaSituation> implements IBaseIdeaSituationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseLabelDuo extends IDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> {
}
export declare class BaseLabelDuo extends SQDIDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> implements IBaseLabelDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeDuo extends IDuo<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> {
}
export declare class BaseOutcomeDuo extends SQDIDuo<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> implements IBaseOutcomeDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionDuo extends IDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}
export declare class BasePositionDuo extends SQDIDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> implements IBasePositionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReasonDuo extends IDuo<IReason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason> {
}
export declare class BaseReasonDuo extends SQDIDuo<IReason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason> implements IBaseReasonDuo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDuos.d.ts.map