import { IFactor } from './factor/factor';
import { FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor } from './factor/qfactor';
import { ILabel } from './label';
import { LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel } from './qlabel';
import { IOutcome } from './situation/outcome';
import { OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome } from './situation/qoutcome';
import { IPosition } from './factor/position';
import { PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition } from './factor/qposition';
import { ISituation } from './situation/situation';
import { SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation } from './situation/qsituation';
import { ISituationFactorPosition } from './situation/situationfactorposition';
import { SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition } from './situation/qsituationfactorposition';
import { ISituationLabel } from './situation/situationlabel';
import { SituationLabelESelect, SituationLabelECreateProperties, SituationLabelEUpdateColumns, SituationLabelEUpdateProperties, SituationLabelEId, SituationLabelGraph, QSituationLabel } from './situation/qsituationlabel';
import { ISolution } from './solution/solution';
import { SolutionESelect, SolutionECreateProperties, SolutionEUpdateColumns, SolutionEUpdateProperties, SolutionEId, SolutionGraph, QSolution } from './solution/qsolution';
import { ISolutionFactor } from './solution/solutionfactor';
import { SolutionFactorESelect, SolutionFactorECreateProperties, SolutionFactorEUpdateColumns, SolutionFactorEUpdateProperties, SolutionFactorEId, SolutionFactorGraph, QSolutionFactor } from './solution/qsolutionfactor';
import { IUserAccount } from './useraccount';
import { UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount } from './quseraccount';
import { IDao, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Dao, DaoQueryDecorators } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity<Entity>> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
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
export interface IBaseSituationDao extends IDao<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}
export declare class BaseSituationDao extends SQDIDao<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> implements IBaseSituationDao {
    static Find: DaoQueryDecorators<SituationESelect>;
    static FindOne: DaoQueryDecorators<SituationESelect>;
    static Search: DaoQueryDecorators<SituationESelect>;
    static SearchOne: DaoQueryDecorators<SituationESelect>;
    static Save(config: SituationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationFactorPositionDao extends IDao<ISituationFactorPosition, SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition> {
}
export declare class BaseSituationFactorPositionDao extends SQDIDao<ISituationFactorPosition, SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition> implements IBaseSituationFactorPositionDao {
    static Find: DaoQueryDecorators<SituationFactorPositionESelect>;
    static FindOne: DaoQueryDecorators<SituationFactorPositionESelect>;
    static Search: DaoQueryDecorators<SituationFactorPositionESelect>;
    static SearchOne: DaoQueryDecorators<SituationFactorPositionESelect>;
    static Save(config: SituationFactorPositionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationLabelDao extends IDao<ISituationLabel, SituationLabelESelect, SituationLabelECreateProperties, SituationLabelEUpdateColumns, SituationLabelEUpdateProperties, SituationLabelEId, SituationLabelGraph, QSituationLabel> {
}
export declare class BaseSituationLabelDao extends SQDIDao<ISituationLabel, SituationLabelESelect, SituationLabelECreateProperties, SituationLabelEUpdateColumns, SituationLabelEUpdateProperties, SituationLabelEId, SituationLabelGraph, QSituationLabel> implements IBaseSituationLabelDao {
    static Find: DaoQueryDecorators<SituationLabelESelect>;
    static FindOne: DaoQueryDecorators<SituationLabelESelect>;
    static Search: DaoQueryDecorators<SituationLabelESelect>;
    static SearchOne: DaoQueryDecorators<SituationLabelESelect>;
    static Save(config: SituationLabelGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseSolutionDao extends IDao<ISolution, SolutionESelect, SolutionECreateProperties, SolutionEUpdateColumns, SolutionEUpdateProperties, SolutionEId, SolutionGraph, QSolution> {
}
export declare class BaseSolutionDao extends SQDIDao<ISolution, SolutionESelect, SolutionECreateProperties, SolutionEUpdateColumns, SolutionEUpdateProperties, SolutionEId, SolutionGraph, QSolution> implements IBaseSolutionDao {
    static Find: DaoQueryDecorators<SolutionESelect>;
    static FindOne: DaoQueryDecorators<SolutionESelect>;
    static Search: DaoQueryDecorators<SolutionESelect>;
    static SearchOne: DaoQueryDecorators<SolutionESelect>;
    static Save(config: SolutionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseSolutionFactorDao extends IDao<ISolutionFactor, SolutionFactorESelect, SolutionFactorECreateProperties, SolutionFactorEUpdateColumns, SolutionFactorEUpdateProperties, SolutionFactorEId, SolutionFactorGraph, QSolutionFactor> {
}
export declare class BaseSolutionFactorDao extends SQDIDao<ISolutionFactor, SolutionFactorESelect, SolutionFactorECreateProperties, SolutionFactorEUpdateColumns, SolutionFactorEUpdateProperties, SolutionFactorEId, SolutionFactorGraph, QSolutionFactor> implements IBaseSolutionFactorDao {
    static Find: DaoQueryDecorators<SolutionFactorESelect>;
    static FindOne: DaoQueryDecorators<SolutionFactorESelect>;
    static Search: DaoQueryDecorators<SolutionFactorESelect>;
    static SearchOne: DaoQueryDecorators<SolutionFactorESelect>;
    static Save(config: SolutionFactorGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserAccountDao extends IDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> {
}
export declare class BaseUserAccountDao extends SQDIDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> implements IBaseUserAccountDao {
    static Find: DaoQueryDecorators<UserAccountESelect>;
    static FindOne: DaoQueryDecorators<UserAccountESelect>;
    static Search: DaoQueryDecorators<UserAccountESelect>;
    static SearchOne: DaoQueryDecorators<UserAccountESelect>;
    static Save(config: UserAccountGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDaos.d.ts.map