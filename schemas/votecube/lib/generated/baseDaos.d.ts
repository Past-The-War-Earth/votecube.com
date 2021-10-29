import { ICategory } from './category';
import { CategoryESelect, CategoryECreateProperties, CategoryEUpdateColumns, CategoryEUpdateProperties, CategoryEId, CategoryGraph, QCategory } from './qcategory';
import { IFactor } from './factor/factor';
import { FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor } from './factor/qfactor';
import { IFactorPosition } from './factor/position/factorposition';
import { FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition } from './factor/position/qfactorposition';
import { IOutcome } from './situation/outcome';
import { OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome } from './situation/qoutcome';
import { IPosition } from './factor/position/position';
import { PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition } from './factor/position/qposition';
import { ISituation } from './situation/situation';
import { SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation } from './situation/qsituation';
import { ISituationFactorPosition } from './situation/situationfactorposition';
import { SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition } from './situation/qsituationfactorposition';
import { IDao, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Dao, DaoQueryDecorators } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity<Entity>> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseCategoryDao extends IDao<ICategory, CategoryESelect, CategoryECreateProperties, CategoryEUpdateColumns, CategoryEUpdateProperties, CategoryEId, CategoryGraph, QCategory> {
}
export declare class BaseCategoryDao extends SQDIDao<ICategory, CategoryESelect, CategoryECreateProperties, CategoryEUpdateColumns, CategoryEUpdateProperties, CategoryEId, CategoryGraph, QCategory> implements IBaseCategoryDao {
    static Find: DaoQueryDecorators<CategoryESelect>;
    static FindOne: DaoQueryDecorators<CategoryESelect>;
    static Search: DaoQueryDecorators<CategoryESelect>;
    static SearchOne: DaoQueryDecorators<CategoryESelect>;
    static Save(config: CategoryGraph): PropertyDecorator;
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
export interface IBaseFactorPositionDao extends IDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> {
}
export declare class BaseFactorPositionDao extends SQDIDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> implements IBaseFactorPositionDao {
    static Find: DaoQueryDecorators<FactorPositionESelect>;
    static FindOne: DaoQueryDecorators<FactorPositionESelect>;
    static Search: DaoQueryDecorators<FactorPositionESelect>;
    static SearchOne: DaoQueryDecorators<FactorPositionESelect>;
    static Save(config: FactorPositionGraph): PropertyDecorator;
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
//# sourceMappingURL=baseDaos.d.ts.map