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
import { IDao, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-traffic-control';
import { Dao, DaoQueryDecorators } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseAgreementDao extends IDao<IAgreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> {
}
export declare class BaseAgreementDao extends SQDIDao<IAgreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> implements IBaseAgreementDao {
    static Find: DaoQueryDecorators<AgreementESelect>;
    static FindOne: DaoQueryDecorators<AgreementESelect>;
    static Search: DaoQueryDecorators<AgreementESelect>;
    static SearchOne: DaoQueryDecorators<AgreementESelect>;
    static Save(config: AgreementGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseAgreementFactorDao extends IDao<IAgreementFactor, AgreementFactorESelect, AgreementFactorECreateProperties, AgreementFactorEUpdateColumns, AgreementFactorEUpdateProperties, AgreementFactorEId, AgreementFactorGraph, QAgreementFactor> {
}
export declare class BaseAgreementFactorDao extends SQDIDao<IAgreementFactor, AgreementFactorESelect, AgreementFactorECreateProperties, AgreementFactorEUpdateColumns, AgreementFactorEUpdateProperties, AgreementFactorEId, AgreementFactorGraph, QAgreementFactor> implements IBaseAgreementFactorDao {
    static Find: DaoQueryDecorators<AgreementFactorESelect>;
    static FindOne: DaoQueryDecorators<AgreementFactorESelect>;
    static Search: DaoQueryDecorators<AgreementFactorESelect>;
    static SearchOne: DaoQueryDecorators<AgreementFactorESelect>;
    static Save(config: AgreementFactorGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDao extends IDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}
export declare class BaseFactorDao extends SQDIDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> implements IBaseFactorDao {
    static Find: DaoQueryDecorators<FactorESelect>;
    static FindOne: DaoQueryDecorators<FactorESelect>;
    static Search: DaoQueryDecorators<FactorESelect>;
    static SearchOne: DaoQueryDecorators<FactorESelect>;
    static Save(config: FactorGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaDao extends IDao<IIdea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> {
}
export declare class BaseIdeaDao extends SQDIDao<IIdea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> implements IBaseIdeaDao {
    static Find: DaoQueryDecorators<IdeaESelect>;
    static FindOne: DaoQueryDecorators<IdeaESelect>;
    static Search: DaoQueryDecorators<IdeaESelect>;
    static SearchOne: DaoQueryDecorators<IdeaESelect>;
    static Save(config: IdeaGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaLabelDao extends IDao<IIdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> {
}
export declare class BaseIdeaLabelDao extends SQDIDao<IIdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> implements IBaseIdeaLabelDao {
    static Find: DaoQueryDecorators<IdeaLabelESelect>;
    static FindOne: DaoQueryDecorators<IdeaLabelESelect>;
    static Search: DaoQueryDecorators<IdeaLabelESelect>;
    static SearchOne: DaoQueryDecorators<IdeaLabelESelect>;
    static Save(config: IdeaLabelGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaSituationDao extends IDao<IIdeaSituation, IdeaSituationESelect, IdeaSituationECreateProperties, IdeaSituationEUpdateColumns, IdeaSituationEUpdateProperties, IdeaSituationEId, IdeaSituationGraph, QIdeaSituation> {
}
export declare class BaseIdeaSituationDao extends SQDIDao<IIdeaSituation, IdeaSituationESelect, IdeaSituationECreateProperties, IdeaSituationEUpdateColumns, IdeaSituationEUpdateProperties, IdeaSituationEId, IdeaSituationGraph, QIdeaSituation> implements IBaseIdeaSituationDao {
    static Find: DaoQueryDecorators<IdeaSituationESelect>;
    static FindOne: DaoQueryDecorators<IdeaSituationESelect>;
    static Search: DaoQueryDecorators<IdeaSituationESelect>;
    static SearchOne: DaoQueryDecorators<IdeaSituationESelect>;
    static Save(config: IdeaSituationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseLabelDao extends IDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> {
}
export declare class BaseLabelDao extends SQDIDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> implements IBaseLabelDao {
    static Find: DaoQueryDecorators<LabelESelect>;
    static FindOne: DaoQueryDecorators<LabelESelect>;
    static Search: DaoQueryDecorators<LabelESelect>;
    static SearchOne: DaoQueryDecorators<LabelESelect>;
    static Save(config: LabelGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeDao extends IDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> {
}
export declare class BaseOutcomeDao extends SQDIDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> implements IBaseOutcomeDao {
    static Find: DaoQueryDecorators<OutcomeESelect>;
    static FindOne: DaoQueryDecorators<OutcomeESelect>;
    static Search: DaoQueryDecorators<OutcomeESelect>;
    static SearchOne: DaoQueryDecorators<OutcomeESelect>;
    static Save(config: OutcomeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionDao extends IDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}
export declare class BasePositionDao extends SQDIDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> implements IBasePositionDao {
    static Find: DaoQueryDecorators<PositionESelect>;
    static FindOne: DaoQueryDecorators<PositionESelect>;
    static Search: DaoQueryDecorators<PositionESelect>;
    static SearchOne: DaoQueryDecorators<PositionESelect>;
    static Save(config: PositionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseReasonDao extends IDao<IReason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason> {
}
export declare class BaseReasonDao extends SQDIDao<IReason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason> implements IBaseReasonDao {
    static Find: DaoQueryDecorators<ReasonESelect>;
    static FindOne: DaoQueryDecorators<ReasonESelect>;
    static Search: DaoQueryDecorators<ReasonESelect>;
    static SearchOne: DaoQueryDecorators<ReasonESelect>;
    static Save(config: ReasonGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDaos.d.ts.map