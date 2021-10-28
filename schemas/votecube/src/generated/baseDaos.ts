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
	ISituation,
} from './situation';
import {
	SituationESelect,
	SituationECreateColumns,
	SituationECreateProperties,
	SituationEUpdateColumns,
	SituationEUpdateProperties,
	SituationEId,
	SituationGraph,
	QSituation,
} from './qsituation';
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


export interface IBaseCategoryDao
  extends IDao<ICategory, CategoryESelect, CategoryECreateProperties, CategoryEUpdateColumns, CategoryEUpdateProperties, CategoryEId, CategoryGraph, QCategory> {
}

export class BaseCategoryDao
  extends SQDIDao<ICategory, CategoryESelect, CategoryECreateProperties, CategoryEUpdateColumns, CategoryEUpdateProperties, CategoryEId, CategoryGraph, QCategory>
	implements IBaseCategoryDao {
	
	static Find      = new DaoQueryDecorators<CategoryESelect>();
	static FindOne   = new DaoQueryDecorators<CategoryESelect>();
	static Search    = new DaoQueryDecorators<CategoryESelect>();
	static SearchOne = new DaoQueryDecorators<CategoryESelect>();
	static Save(
		config: CategoryGraph
	): PropertyDecorator {
		return Dao.BaseSave<CategoryGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
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
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}
