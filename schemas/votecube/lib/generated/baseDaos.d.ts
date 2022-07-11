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
import { IdeaRating } from '../ddl/idea/idearating';
import { IdeaRatingESelect, IdeaRatingECreateProperties, IdeaRatingEUpdateColumns, IdeaRatingEUpdateProperties, IdeaRatingEId, IdeaRatingGraph, QIdeaRating } from './idea/qidearating';
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
import { IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/tarmaq-query';
import { IDao, Dao, DaoQueryDecorators } from '@airport/tarmaq-dao';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, ApplicationEntity_LocalId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, ApplicationEntity_LocalId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseAgreementDao extends IDao<Agreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> {
}
export declare class BaseAgreementDao extends SQDIDao<Agreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> implements IBaseAgreementDao {
    static Find: DaoQueryDecorators<AgreementESelect>;
    static FindOne: DaoQueryDecorators<AgreementESelect>;
    static Search: DaoQueryDecorators<AgreementESelect>;
    static SearchOne: DaoQueryDecorators<AgreementESelect>;
    static Save(config: AgreementGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseAgreementReasonDao extends IDao<AgreementReason, AgreementReasonESelect, AgreementReasonECreateProperties, AgreementReasonEUpdateColumns, AgreementReasonEUpdateProperties, AgreementReasonEId, AgreementReasonGraph, QAgreementReason> {
}
export declare class BaseAgreementReasonDao extends SQDIDao<AgreementReason, AgreementReasonESelect, AgreementReasonECreateProperties, AgreementReasonEUpdateColumns, AgreementReasonEUpdateProperties, AgreementReasonEId, AgreementReasonGraph, QAgreementReason> implements IBaseAgreementReasonDao {
    static Find: DaoQueryDecorators<AgreementReasonESelect>;
    static FindOne: DaoQueryDecorators<AgreementReasonESelect>;
    static Search: DaoQueryDecorators<AgreementReasonESelect>;
    static SearchOne: DaoQueryDecorators<AgreementReasonESelect>;
    static Save(config: AgreementReasonGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDao extends IDao<Factor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}
export declare class BaseFactorDao extends SQDIDao<Factor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> implements IBaseFactorDao {
    static Find: DaoQueryDecorators<FactorESelect>;
    static FindOne: DaoQueryDecorators<FactorESelect>;
    static Search: DaoQueryDecorators<FactorESelect>;
    static SearchOne: DaoQueryDecorators<FactorESelect>;
    static Save(config: FactorGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaDao extends IDao<Idea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> {
}
export declare class BaseIdeaDao extends SQDIDao<Idea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> implements IBaseIdeaDao {
    static Find: DaoQueryDecorators<IdeaESelect>;
    static FindOne: DaoQueryDecorators<IdeaESelect>;
    static Search: DaoQueryDecorators<IdeaESelect>;
    static SearchOne: DaoQueryDecorators<IdeaESelect>;
    static Save(config: IdeaGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaLabelDao extends IDao<IdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> {
}
export declare class BaseIdeaLabelDao extends SQDIDao<IdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> implements IBaseIdeaLabelDao {
    static Find: DaoQueryDecorators<IdeaLabelESelect>;
    static FindOne: DaoQueryDecorators<IdeaLabelESelect>;
    static Search: DaoQueryDecorators<IdeaLabelESelect>;
    static SearchOne: DaoQueryDecorators<IdeaLabelESelect>;
    static Save(config: IdeaLabelGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaRatingDao extends IDao<IdeaRating, IdeaRatingESelect, IdeaRatingECreateProperties, IdeaRatingEUpdateColumns, IdeaRatingEUpdateProperties, IdeaRatingEId, IdeaRatingGraph, QIdeaRating> {
}
export declare class BaseIdeaRatingDao extends SQDIDao<IdeaRating, IdeaRatingESelect, IdeaRatingECreateProperties, IdeaRatingEUpdateColumns, IdeaRatingEUpdateProperties, IdeaRatingEId, IdeaRatingGraph, QIdeaRating> implements IBaseIdeaRatingDao {
    static Find: DaoQueryDecorators<IdeaRatingESelect>;
    static FindOne: DaoQueryDecorators<IdeaRatingESelect>;
    static Search: DaoQueryDecorators<IdeaRatingESelect>;
    static SearchOne: DaoQueryDecorators<IdeaRatingESelect>;
    static Save(config: IdeaRatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseIdeaTopicDao extends IDao<IdeaTopic, IdeaTopicESelect, IdeaTopicECreateProperties, IdeaTopicEUpdateColumns, IdeaTopicEUpdateProperties, IdeaTopicEId, IdeaTopicGraph, QIdeaTopic> {
}
export declare class BaseIdeaTopicDao extends SQDIDao<IdeaTopic, IdeaTopicESelect, IdeaTopicECreateProperties, IdeaTopicEUpdateColumns, IdeaTopicEUpdateProperties, IdeaTopicEId, IdeaTopicGraph, QIdeaTopic> implements IBaseIdeaTopicDao {
    static Find: DaoQueryDecorators<IdeaTopicESelect>;
    static FindOne: DaoQueryDecorators<IdeaTopicESelect>;
    static Search: DaoQueryDecorators<IdeaTopicESelect>;
    static SearchOne: DaoQueryDecorators<IdeaTopicESelect>;
    static Save(config: IdeaTopicGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseLabelDao extends IDao<Label, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> {
}
export declare class BaseLabelDao extends SQDIDao<Label, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> implements IBaseLabelDao {
    static Find: DaoQueryDecorators<LabelESelect>;
    static FindOne: DaoQueryDecorators<LabelESelect>;
    static Search: DaoQueryDecorators<LabelESelect>;
    static SearchOne: DaoQueryDecorators<LabelESelect>;
    static Save(config: LabelGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionDao extends IDao<Position, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}
export declare class BasePositionDao extends SQDIDao<Position, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> implements IBasePositionDao {
    static Find: DaoQueryDecorators<PositionESelect>;
    static FindOne: DaoQueryDecorators<PositionESelect>;
    static Search: DaoQueryDecorators<PositionESelect>;
    static SearchOne: DaoQueryDecorators<PositionESelect>;
    static Save(config: PositionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseReasonDao extends IDao<Reason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason> {
}
export declare class BaseReasonDao extends SQDIDao<Reason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason> implements IBaseReasonDao {
    static Find: DaoQueryDecorators<ReasonESelect>;
    static FindOne: DaoQueryDecorators<ReasonESelect>;
    static Search: DaoQueryDecorators<ReasonESelect>;
    static SearchOne: DaoQueryDecorators<ReasonESelect>;
    static Save(config: ReasonGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationIdeaDao extends IDao<SituationIdea, SituationIdeaESelect, SituationIdeaECreateProperties, SituationIdeaEUpdateColumns, SituationIdeaEUpdateProperties, SituationIdeaEId, SituationIdeaGraph, QSituationIdea> {
}
export declare class BaseSituationIdeaDao extends SQDIDao<SituationIdea, SituationIdeaESelect, SituationIdeaECreateProperties, SituationIdeaEUpdateColumns, SituationIdeaEUpdateProperties, SituationIdeaEId, SituationIdeaGraph, QSituationIdea> implements IBaseSituationIdeaDao {
    static Find: DaoQueryDecorators<SituationIdeaESelect>;
    static FindOne: DaoQueryDecorators<SituationIdeaESelect>;
    static Search: DaoQueryDecorators<SituationIdeaESelect>;
    static SearchOne: DaoQueryDecorators<SituationIdeaESelect>;
    static Save(config: SituationIdeaGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDaos.d.ts.map