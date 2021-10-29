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
import { IDuo, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Duo } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDuo<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity<Entity>> extends Duo<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseCategoryDuo extends IDuo<ICategory, CategoryESelect, CategoryECreateProperties, CategoryEUpdateColumns, CategoryEUpdateProperties, CategoryEId, CategoryGraph, QCategory> {
}
export declare class BaseCategoryDuo extends SQDIDuo<ICategory, CategoryESelect, CategoryECreateProperties, CategoryEUpdateColumns, CategoryEUpdateProperties, CategoryEId, CategoryGraph, QCategory> implements IBaseCategoryDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDuo extends IDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}
export declare class BaseFactorDuo extends SQDIDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> implements IBaseFactorDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorPositionDuo extends IDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> {
}
export declare class BaseFactorPositionDuo extends SQDIDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> implements IBaseFactorPositionDuo {
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
export interface IBaseSituationDuo extends IDuo<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}
export declare class BaseSituationDuo extends SQDIDuo<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> implements IBaseSituationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationFactorPositionDuo extends IDuo<ISituationFactorPosition, SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition> {
}
export declare class BaseSituationFactorPositionDuo extends SQDIDuo<ISituationFactorPosition, SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition> implements IBaseSituationFactorPositionDuo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDuos.d.ts.map