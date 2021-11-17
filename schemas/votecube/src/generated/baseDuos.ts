/* eslint-disable */
import {
	IFactor,
} from './factor/factor';
import {
	FactorESelect,
	FactorECreateColumns,
	FactorECreateProperties,
	FactorEUpdateColumns,
	FactorEUpdateProperties,
	FactorEId,
	FactorGraph,
	QFactor,
} from './factor/qfactor';
import {
	ILabel,
} from './label';
import {
	LabelESelect,
	LabelECreateColumns,
	LabelECreateProperties,
	LabelEUpdateColumns,
	LabelEUpdateProperties,
	LabelEId,
	LabelGraph,
	QLabel,
} from './qlabel';
import {
	IOutcome,
} from './situation/outcome';
import {
	OutcomeESelect,
	OutcomeECreateColumns,
	OutcomeECreateProperties,
	OutcomeEUpdateColumns,
	OutcomeEUpdateProperties,
	OutcomeEId,
	OutcomeGraph,
	QOutcome,
} from './situation/qoutcome';
import {
	IPosition,
} from './factor/position';
import {
	PositionESelect,
	PositionECreateColumns,
	PositionECreateProperties,
	PositionEUpdateColumns,
	PositionEUpdateProperties,
	PositionEId,
	PositionGraph,
	QPosition,
} from './factor/qposition';
import {
	ISituation,
} from './situation/situation';
import {
	SituationESelect,
	SituationECreateColumns,
	SituationECreateProperties,
	SituationEUpdateColumns,
	SituationEUpdateProperties,
	SituationEId,
	SituationGraph,
	QSituation,
} from './situation/qsituation';
import {
	ISituationFactorPosition,
} from './situation/situationfactorposition';
import {
	SituationFactorPositionESelect,
	SituationFactorPositionECreateColumns,
	SituationFactorPositionECreateProperties,
	SituationFactorPositionEUpdateColumns,
	SituationFactorPositionEUpdateProperties,
	SituationFactorPositionEId,
	SituationFactorPositionGraph,
	QSituationFactorPosition,
} from './situation/qsituationfactorposition';
import {
	ISituationLabel,
} from './situation/situationlabel';
import {
	SituationLabelESelect,
	SituationLabelECreateColumns,
	SituationLabelECreateProperties,
	SituationLabelEUpdateColumns,
	SituationLabelEUpdateProperties,
	SituationLabelEId,
	SituationLabelGraph,
	QSituationLabel,
} from './situation/qsituationlabel';
import {
	ISolution,
} from './solution/solution';
import {
	SolutionESelect,
	SolutionECreateColumns,
	SolutionECreateProperties,
	SolutionEUpdateColumns,
	SolutionEUpdateProperties,
	SolutionEId,
	SolutionGraph,
	QSolution,
} from './solution/qsolution';
import {
	ISolutionFactor,
} from './solution/solutionfactor';
import {
	SolutionFactorESelect,
	SolutionFactorECreateColumns,
	SolutionFactorECreateProperties,
	SolutionFactorEUpdateColumns,
	SolutionFactorEUpdateProperties,
	SolutionFactorEId,
	SolutionFactorGraph,
	QSolutionFactor,
} from './solution/qsolutionfactor';
import {
	IDuo,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/air-control';
import {
	Duo,
} from '@airport/check-in';
import {
	EntityId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qSchema';


// Schema Q object Dependency Injection readiness detection Duo
export class SQDIDuo<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
  EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity<Entity>>
	extends Duo<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateColumns,
		EntityUpdateProperties,
		EntityId,
		EntityCascadeGraph,
		IQE> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseFactorDuo
  extends IDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}

export class BaseFactorDuo
  extends SQDIDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor>
	implements IBaseFactorDuo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseLabelDuo
  extends IDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> {
}

export class BaseLabelDuo
  extends SQDIDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel>
	implements IBaseLabelDuo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseOutcomeDuo
  extends IDuo<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> {
}

export class BaseOutcomeDuo
  extends SQDIDuo<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome>
	implements IBaseOutcomeDuo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBasePositionDuo
  extends IDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}

export class BasePositionDuo
  extends SQDIDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition>
	implements IBasePositionDuo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseSituationDuo
  extends IDuo<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}

export class BaseSituationDuo
  extends SQDIDuo<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation>
	implements IBaseSituationDuo {

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseSituationFactorPositionDuo
  extends IDuo<ISituationFactorPosition, SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition> {
}

export class BaseSituationFactorPositionDuo
  extends SQDIDuo<ISituationFactorPosition, SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition>
	implements IBaseSituationFactorPositionDuo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseSituationLabelDuo
  extends IDuo<ISituationLabel, SituationLabelESelect, SituationLabelECreateProperties, SituationLabelEUpdateColumns, SituationLabelEUpdateProperties, SituationLabelEId, SituationLabelGraph, QSituationLabel> {
}

export class BaseSituationLabelDuo
  extends SQDIDuo<ISituationLabel, SituationLabelESelect, SituationLabelECreateProperties, SituationLabelEUpdateColumns, SituationLabelEUpdateProperties, SituationLabelEId, SituationLabelGraph, QSituationLabel>
	implements IBaseSituationLabelDuo {

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseSolutionDuo
  extends IDuo<ISolution, SolutionESelect, SolutionECreateProperties, SolutionEUpdateColumns, SolutionEUpdateProperties, SolutionEId, SolutionGraph, QSolution> {
}

export class BaseSolutionDuo
  extends SQDIDuo<ISolution, SolutionESelect, SolutionECreateProperties, SolutionEUpdateColumns, SolutionEUpdateProperties, SolutionEId, SolutionGraph, QSolution>
	implements IBaseSolutionDuo {

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseSolutionFactorDuo
  extends IDuo<ISolutionFactor, SolutionFactorESelect, SolutionFactorECreateProperties, SolutionFactorEUpdateColumns, SolutionFactorEUpdateProperties, SolutionFactorEId, SolutionFactorGraph, QSolutionFactor> {
}

export class BaseSolutionFactorDuo
  extends SQDIDuo<ISolutionFactor, SolutionFactorESelect, SolutionFactorECreateProperties, SolutionFactorEUpdateColumns, SolutionFactorEUpdateProperties, SolutionFactorEId, SolutionFactorGraph, QSolutionFactor>
	implements IBaseSolutionFactorDuo {

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}
