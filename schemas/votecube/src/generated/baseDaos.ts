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
	IDao,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/air-control';
import {
	Dao,
	DaoQueryDecorators,
} from '@airport/check-in';
import {
	EntityId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qSchema';


// Schema Q object Dependency Injection readiness detection Dao
export class SQDIDao<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
  EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity<Entity>>
	extends Dao<Entity,
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


export interface IBaseFactorDao
  extends IDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}

export class BaseFactorDao
  extends SQDIDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor>
	implements IBaseFactorDao {
	
	static Find      = new DaoQueryDecorators<FactorESelect>();
	static FindOne   = new DaoQueryDecorators<FactorESelect>();
	static Search    = new DaoQueryDecorators<FactorESelect>();
	static SearchOne = new DaoQueryDecorators<FactorESelect>();
	static Save(
		config: FactorGraph
	): PropertyDecorator {
		return Dao.BaseSave<FactorGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseLabelDao
  extends IDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> {
}

export class BaseLabelDao
  extends SQDIDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel>
	implements IBaseLabelDao {
	
	static Find      = new DaoQueryDecorators<LabelESelect>();
	static FindOne   = new DaoQueryDecorators<LabelESelect>();
	static Search    = new DaoQueryDecorators<LabelESelect>();
	static SearchOne = new DaoQueryDecorators<LabelESelect>();
	static Save(
		config: LabelGraph
	): PropertyDecorator {
		return Dao.BaseSave<LabelGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseOutcomeDao
  extends IDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> {
}

export class BaseOutcomeDao
  extends SQDIDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome>
	implements IBaseOutcomeDao {
	
	static Find      = new DaoQueryDecorators<OutcomeESelect>();
	static FindOne   = new DaoQueryDecorators<OutcomeESelect>();
	static Search    = new DaoQueryDecorators<OutcomeESelect>();
	static SearchOne = new DaoQueryDecorators<OutcomeESelect>();
	static Save(
		config: OutcomeGraph
	): PropertyDecorator {
		return Dao.BaseSave<OutcomeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBasePositionDao
  extends IDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}

export class BasePositionDao
  extends SQDIDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition>
	implements IBasePositionDao {
	
	static Find      = new DaoQueryDecorators<PositionESelect>();
	static FindOne   = new DaoQueryDecorators<PositionESelect>();
	static Search    = new DaoQueryDecorators<PositionESelect>();
	static SearchOne = new DaoQueryDecorators<PositionESelect>();
	static Save(
		config: PositionGraph
	): PropertyDecorator {
		return Dao.BaseSave<PositionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseSituationDao
  extends IDao<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}

export class BaseSituationDao
  extends SQDIDao<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation>
	implements IBaseSituationDao {
	
	static Find      = new DaoQueryDecorators<SituationESelect>();
	static FindOne   = new DaoQueryDecorators<SituationESelect>();
	static Search    = new DaoQueryDecorators<SituationESelect>();
	static SearchOne = new DaoQueryDecorators<SituationESelect>();
	static Save(
		config: SituationGraph
	): PropertyDecorator {
		return Dao.BaseSave<SituationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseSituationFactorPositionDao
  extends IDao<ISituationFactorPosition, SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition> {
}

export class BaseSituationFactorPositionDao
  extends SQDIDao<ISituationFactorPosition, SituationFactorPositionESelect, SituationFactorPositionECreateProperties, SituationFactorPositionEUpdateColumns, SituationFactorPositionEUpdateProperties, SituationFactorPositionEId, SituationFactorPositionGraph, QSituationFactorPosition>
	implements IBaseSituationFactorPositionDao {
	
	static Find      = new DaoQueryDecorators<SituationFactorPositionESelect>();
	static FindOne   = new DaoQueryDecorators<SituationFactorPositionESelect>();
	static Search    = new DaoQueryDecorators<SituationFactorPositionESelect>();
	static SearchOne = new DaoQueryDecorators<SituationFactorPositionESelect>();
	static Save(
		config: SituationFactorPositionGraph
	): PropertyDecorator {
		return Dao.BaseSave<SituationFactorPositionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseSituationLabelDao
  extends IDao<ISituationLabel, SituationLabelESelect, SituationLabelECreateProperties, SituationLabelEUpdateColumns, SituationLabelEUpdateProperties, SituationLabelEId, SituationLabelGraph, QSituationLabel> {
}

export class BaseSituationLabelDao
  extends SQDIDao<ISituationLabel, SituationLabelESelect, SituationLabelECreateProperties, SituationLabelEUpdateColumns, SituationLabelEUpdateProperties, SituationLabelEId, SituationLabelGraph, QSituationLabel>
	implements IBaseSituationLabelDao {
	
	static Find      = new DaoQueryDecorators<SituationLabelESelect>();
	static FindOne   = new DaoQueryDecorators<SituationLabelESelect>();
	static Search    = new DaoQueryDecorators<SituationLabelESelect>();
	static SearchOne = new DaoQueryDecorators<SituationLabelESelect>();
	static Save(
		config: SituationLabelGraph
	): PropertyDecorator {
		return Dao.BaseSave<SituationLabelGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseSolutionDao
  extends IDao<ISolution, SolutionESelect, SolutionECreateProperties, SolutionEUpdateColumns, SolutionEUpdateProperties, SolutionEId, SolutionGraph, QSolution> {
}

export class BaseSolutionDao
  extends SQDIDao<ISolution, SolutionESelect, SolutionECreateProperties, SolutionEUpdateColumns, SolutionEUpdateProperties, SolutionEId, SolutionGraph, QSolution>
	implements IBaseSolutionDao {
	
	static Find      = new DaoQueryDecorators<SolutionESelect>();
	static FindOne   = new DaoQueryDecorators<SolutionESelect>();
	static Search    = new DaoQueryDecorators<SolutionESelect>();
	static SearchOne = new DaoQueryDecorators<SolutionESelect>();
	static Save(
		config: SolutionGraph
	): PropertyDecorator {
		return Dao.BaseSave<SolutionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseSolutionFactorDao
  extends IDao<ISolutionFactor, SolutionFactorESelect, SolutionFactorECreateProperties, SolutionFactorEUpdateColumns, SolutionFactorEUpdateProperties, SolutionFactorEId, SolutionFactorGraph, QSolutionFactor> {
}

export class BaseSolutionFactorDao
  extends SQDIDao<ISolutionFactor, SolutionFactorESelect, SolutionFactorECreateProperties, SolutionFactorEUpdateColumns, SolutionFactorEUpdateProperties, SolutionFactorEId, SolutionFactorGraph, QSolutionFactor>
	implements IBaseSolutionFactorDao {
	
	static Find      = new DaoQueryDecorators<SolutionFactorESelect>();
	static FindOne   = new DaoQueryDecorators<SolutionFactorESelect>();
	static Search    = new DaoQueryDecorators<SolutionFactorESelect>();
	static SearchOne = new DaoQueryDecorators<SolutionFactorESelect>();
	static Save(
		config: SolutionFactorGraph
	): PropertyDecorator {
		return Dao.BaseSave<SolutionFactorGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}
