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
import { IDuo, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Duo } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDuo<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity<Entity>> extends Duo<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseFactorDuo extends IDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}
export declare class BaseFactorDuo extends SQDIDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> implements IBaseFactorDuo {
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
export interface IBaseSituationLabelDuo extends IDuo<ISituationLabel, SituationLabelESelect, SituationLabelECreateProperties, SituationLabelEUpdateColumns, SituationLabelEUpdateProperties, SituationLabelEId, SituationLabelGraph, QSituationLabel> {
}
export declare class BaseSituationLabelDuo extends SQDIDuo<ISituationLabel, SituationLabelESelect, SituationLabelECreateProperties, SituationLabelEUpdateColumns, SituationLabelEUpdateProperties, SituationLabelEId, SituationLabelGraph, QSituationLabel> implements IBaseSituationLabelDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSolutionDuo extends IDuo<ISolution, SolutionESelect, SolutionECreateProperties, SolutionEUpdateColumns, SolutionEUpdateProperties, SolutionEId, SolutionGraph, QSolution> {
}
export declare class BaseSolutionDuo extends SQDIDuo<ISolution, SolutionESelect, SolutionECreateProperties, SolutionEUpdateColumns, SolutionEUpdateProperties, SolutionEId, SolutionGraph, QSolution> implements IBaseSolutionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSolutionFactorDuo extends IDuo<ISolutionFactor, SolutionFactorESelect, SolutionFactorECreateProperties, SolutionFactorEUpdateColumns, SolutionFactorEUpdateProperties, SolutionFactorEId, SolutionFactorGraph, QSolutionFactor> {
}
export declare class BaseSolutionFactorDuo extends SQDIDuo<ISolutionFactor, SolutionFactorESelect, SolutionFactorECreateProperties, SolutionFactorEUpdateColumns, SolutionFactorEUpdateProperties, SolutionFactorEId, SolutionFactorGraph, QSolutionFactor> implements IBaseSolutionFactorDuo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDuos.d.ts.map