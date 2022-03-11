import { IAgreement } from './agreement/agreement';
import { AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement } from './agreement/qagreement';
import { IAgreementFactor } from './agreement/agreementfactor';
import { AgreementFactorESelect, AgreementFactorECreateProperties, AgreementFactorEUpdateColumns, AgreementFactorEUpdateProperties, AgreementFactorEId, AgreementFactorGraph, QAgreementFactor } from './agreement/qagreementfactor';
import { IFactor } from './factor/factor';
import { FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor } from './factor/qfactor';
import { IIdea } from './idea/idea';
import { IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea } from './idea/qidea';
import { IIdeaFactorPosition } from './idea/ideafactorposition';
import { IdeaFactorPositionESelect, IdeaFactorPositionECreateProperties, IdeaFactorPositionEUpdateColumns, IdeaFactorPositionEUpdateProperties, IdeaFactorPositionEId, IdeaFactorPositionGraph, QIdeaFactorPosition } from './idea/qideafactorposition';
import { IIdeaLabel } from './idea/idealabel';
import { IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel } from './idea/qidealabel';
import { ILabel } from './label';
import { LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel } from './qlabel';
import { IOutcome } from './idea/outcome';
import { OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome } from './idea/qoutcome';
import { IPosition } from './factor/position';
import { PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition } from './factor/qposition';
import { IUserAccount } from './useraccount';
import { UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount } from './quseraccount';
import { IDuo, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Duo } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDuo<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity<Entity>> extends Duo<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
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
export interface IBaseIdeaFactorPositionDuo extends IDuo<IIdeaFactorPosition, IdeaFactorPositionESelect, IdeaFactorPositionECreateProperties, IdeaFactorPositionEUpdateColumns, IdeaFactorPositionEUpdateProperties, IdeaFactorPositionEId, IdeaFactorPositionGraph, QIdeaFactorPosition> {
}
export declare class BaseIdeaFactorPositionDuo extends SQDIDuo<IIdeaFactorPosition, IdeaFactorPositionESelect, IdeaFactorPositionECreateProperties, IdeaFactorPositionEUpdateColumns, IdeaFactorPositionEUpdateProperties, IdeaFactorPositionEId, IdeaFactorPositionGraph, QIdeaFactorPosition> implements IBaseIdeaFactorPositionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaLabelDuo extends IDuo<IIdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> {
}
export declare class BaseIdeaLabelDuo extends SQDIDuo<IIdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> implements IBaseIdeaLabelDuo {
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
export interface IBaseUserAccountDuo extends IDuo<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> {
}
export declare class BaseUserAccountDuo extends SQDIDuo<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> implements IBaseUserAccountDuo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDuos.d.ts.map