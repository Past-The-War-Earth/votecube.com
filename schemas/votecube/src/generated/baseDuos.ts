/* eslint-disable */
import {
	ICategory,
} from './category';
import {
	CategoryESelect,
	CategoryECreateColumns,
	CategoryECreateProperties,
	CategoryEUpdateColumns,
	CategoryEUpdateProperties,
	CategoryEId,
	CategoryGraph,
	QCategory,
} from './qcategory';
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
	IFactorPosition,
} from './factor/position/factorposition';
import {
	FactorPositionESelect,
	FactorPositionECreateColumns,
	FactorPositionECreateProperties,
	FactorPositionEUpdateColumns,
	FactorPositionEUpdateProperties,
	FactorPositionEId,
	FactorPositionGraph,
	QFactorPosition,
} from './factor/position/qfactorposition';
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
} from './factor/position/position';
import {
	PositionESelect,
	PositionECreateColumns,
	PositionECreateProperties,
	PositionEUpdateColumns,
	PositionEUpdateProperties,
	PositionEId,
	PositionGraph,
	QPosition,
} from './factor/position/qposition';
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


export interface IBaseCategoryDuo
  extends IDuo<ICategory, CategoryESelect, CategoryECreateProperties, CategoryEUpdateColumns, CategoryEUpdateProperties, CategoryEId, CategoryGraph, QCategory> {
}

export class BaseCategoryDuo
  extends SQDIDuo<ICategory, CategoryESelect, CategoryECreateProperties, CategoryEUpdateColumns, CategoryEUpdateProperties, CategoryEId, CategoryGraph, QCategory>
	implements IBaseCategoryDuo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseFactorDuo
  extends IDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}

export class BaseFactorDuo
  extends SQDIDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor>
	implements IBaseFactorDuo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseFactorPositionDuo
  extends IDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> {
}

export class BaseFactorPositionDuo
  extends SQDIDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition>
	implements IBaseFactorPositionDuo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseOutcomeDuo
  extends IDuo<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> {
}

export class BaseOutcomeDuo
  extends SQDIDuo<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome>
	implements IBaseOutcomeDuo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBasePositionDuo
  extends IDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}

export class BasePositionDuo
  extends SQDIDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition>
	implements IBasePositionDuo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseSituationDuo
  extends IDuo<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}

export class BaseSituationDuo
  extends SQDIDuo<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation>
	implements IBaseSituationDuo {

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBaseSituationFactorPositionDuo
  extends IDuo<ISituationFactorPosition, SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition> {
}

export class BaseSituationFactorPositionDuo
  extends SQDIDuo<ISituationFactorPosition, SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition>
	implements IBaseSituationFactorPositionDuo {

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}
