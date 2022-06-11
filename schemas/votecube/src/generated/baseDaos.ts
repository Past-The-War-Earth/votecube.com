/* eslint-disable */
import {
	Agreement,
} from '../ddl/agreement/agreement';
import {
	AgreementESelect,
	AgreementECreateColumns,
	AgreementECreateProperties,
	AgreementEUpdateColumns,
	AgreementEUpdateProperties,
	AgreementEId,
	AgreementGraph,
	QAgreement,
} from './agreement/qagreement';
import {
	AgreementReason,
} from '../ddl/agreement/agreementreason';
import {
	AgreementReasonESelect,
	AgreementReasonECreateColumns,
	AgreementReasonECreateProperties,
	AgreementReasonEUpdateColumns,
	AgreementReasonEUpdateProperties,
	AgreementReasonEId,
	AgreementReasonGraph,
	QAgreementReason,
} from './agreement/qagreementreason';
import {
	Factor,
} from '../ddl/factor/factor';
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
	Idea,
} from '../ddl/idea/idea';
import {
	IdeaESelect,
	IdeaECreateColumns,
	IdeaECreateProperties,
	IdeaEUpdateColumns,
	IdeaEUpdateProperties,
	IdeaEId,
	IdeaGraph,
	QIdea,
} from './idea/qidea';
import {
	IdeaLabel,
} from '../ddl/idea/idealabel';
import {
	IdeaLabelESelect,
	IdeaLabelECreateColumns,
	IdeaLabelECreateProperties,
	IdeaLabelEUpdateColumns,
	IdeaLabelEUpdateProperties,
	IdeaLabelEId,
	IdeaLabelGraph,
	QIdeaLabel,
} from './idea/qidealabel';
import {
	IdeaTopic,
} from '../ddl/idea/ideatopic';
import {
	IdeaTopicESelect,
	IdeaTopicECreateColumns,
	IdeaTopicECreateProperties,
	IdeaTopicEUpdateColumns,
	IdeaTopicEUpdateProperties,
	IdeaTopicEId,
	IdeaTopicGraph,
	QIdeaTopic,
} from './idea/qideatopic';
import {
	Label,
} from '../ddl/label';
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
	Position,
} from '../ddl/factor/position';
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
	Reason,
} from '../ddl/idea/reason';
import {
	ReasonESelect,
	ReasonECreateColumns,
	ReasonECreateProperties,
	ReasonEUpdateColumns,
	ReasonEUpdateProperties,
	ReasonEId,
	ReasonGraph,
	QReason,
} from './idea/qreason';
import {
	SituationIdea,
} from '../ddl/idea/situationidea';
import {
	SituationIdeaESelect,
	SituationIdeaECreateColumns,
	SituationIdeaECreateProperties,
	SituationIdeaEUpdateColumns,
	SituationIdeaEUpdateProperties,
	SituationIdeaEId,
	SituationIdeaGraph,
	QSituationIdea,
} from './idea/qsituationidea';
import {
	IDao,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/air-traffic-control';
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
} from './qApplication';


// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
	EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity>
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


export interface IBaseAgreementDao
  extends IDao<Agreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> {
}

export class BaseAgreementDao
  extends SQDIDao<Agreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement>
	implements IBaseAgreementDao {
	
	static Find      = new DaoQueryDecorators<AgreementESelect>();
	static FindOne   = new DaoQueryDecorators<AgreementESelect>();
	static Search    = new DaoQueryDecorators<AgreementESelect>();
	static SearchOne = new DaoQueryDecorators<AgreementESelect>();
	static Save(
		config: AgreementGraph
	): PropertyDecorator {
		return Dao.BaseSave<AgreementGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseAgreementReasonDao
  extends IDao<AgreementReason, AgreementReasonESelect, AgreementReasonECreateProperties, AgreementReasonEUpdateColumns, AgreementReasonEUpdateProperties, AgreementReasonEId, AgreementReasonGraph, QAgreementReason> {
}

export class BaseAgreementReasonDao
  extends SQDIDao<AgreementReason, AgreementReasonESelect, AgreementReasonECreateProperties, AgreementReasonEUpdateColumns, AgreementReasonEUpdateProperties, AgreementReasonEId, AgreementReasonGraph, QAgreementReason>
	implements IBaseAgreementReasonDao {
	
	static Find      = new DaoQueryDecorators<AgreementReasonESelect>();
	static FindOne   = new DaoQueryDecorators<AgreementReasonESelect>();
	static Search    = new DaoQueryDecorators<AgreementReasonESelect>();
	static SearchOne = new DaoQueryDecorators<AgreementReasonESelect>();
	static Save(
		config: AgreementReasonGraph
	): PropertyDecorator {
		return Dao.BaseSave<AgreementReasonGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseFactorDao
  extends IDao<Factor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}

export class BaseFactorDao
  extends SQDIDao<Factor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor>
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
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseIdeaDao
  extends IDao<Idea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> {
}

export class BaseIdeaDao
  extends SQDIDao<Idea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea>
	implements IBaseIdeaDao {
	
	static Find      = new DaoQueryDecorators<IdeaESelect>();
	static FindOne   = new DaoQueryDecorators<IdeaESelect>();
	static Search    = new DaoQueryDecorators<IdeaESelect>();
	static SearchOne = new DaoQueryDecorators<IdeaESelect>();
	static Save(
		config: IdeaGraph
	): PropertyDecorator {
		return Dao.BaseSave<IdeaGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(9)
	}
	
	constructor() {
		super(9)
	}
}


export interface IBaseIdeaLabelDao
  extends IDao<IdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> {
}

export class BaseIdeaLabelDao
  extends SQDIDao<IdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel>
	implements IBaseIdeaLabelDao {
	
	static Find      = new DaoQueryDecorators<IdeaLabelESelect>();
	static FindOne   = new DaoQueryDecorators<IdeaLabelESelect>();
	static Search    = new DaoQueryDecorators<IdeaLabelESelect>();
	static SearchOne = new DaoQueryDecorators<IdeaLabelESelect>();
	static Save(
		config: IdeaLabelGraph
	): PropertyDecorator {
		return Dao.BaseSave<IdeaLabelGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseIdeaTopicDao
  extends IDao<IdeaTopic, IdeaTopicESelect, IdeaTopicECreateProperties, IdeaTopicEUpdateColumns, IdeaTopicEUpdateProperties, IdeaTopicEId, IdeaTopicGraph, QIdeaTopic> {
}

export class BaseIdeaTopicDao
  extends SQDIDao<IdeaTopic, IdeaTopicESelect, IdeaTopicECreateProperties, IdeaTopicEUpdateColumns, IdeaTopicEUpdateProperties, IdeaTopicEId, IdeaTopicGraph, QIdeaTopic>
	implements IBaseIdeaTopicDao {
	
	static Find      = new DaoQueryDecorators<IdeaTopicESelect>();
	static FindOne   = new DaoQueryDecorators<IdeaTopicESelect>();
	static Search    = new DaoQueryDecorators<IdeaTopicESelect>();
	static SearchOne = new DaoQueryDecorators<IdeaTopicESelect>();
	static Save(
		config: IdeaTopicGraph
	): PropertyDecorator {
		return Dao.BaseSave<IdeaTopicGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseLabelDao
  extends IDao<Label, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> {
}

export class BaseLabelDao
  extends SQDIDao<Label, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel>
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
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBasePositionDao
  extends IDao<Position, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}

export class BasePositionDao
  extends SQDIDao<Position, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition>
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


export interface IBaseReasonDao
  extends IDao<Reason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason> {
}

export class BaseReasonDao
  extends SQDIDao<Reason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason>
	implements IBaseReasonDao {
	
	static Find      = new DaoQueryDecorators<ReasonESelect>();
	static FindOne   = new DaoQueryDecorators<ReasonESelect>();
	static Search    = new DaoQueryDecorators<ReasonESelect>();
	static SearchOne = new DaoQueryDecorators<ReasonESelect>();
	static Save(
		config: ReasonGraph
	): PropertyDecorator {
		return Dao.BaseSave<ReasonGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBaseSituationIdeaDao
  extends IDao<SituationIdea, SituationIdeaESelect, SituationIdeaECreateProperties, SituationIdeaEUpdateColumns, SituationIdeaEUpdateProperties, SituationIdeaEId, SituationIdeaGraph, QSituationIdea> {
}

export class BaseSituationIdeaDao
  extends SQDIDao<SituationIdea, SituationIdeaESelect, SituationIdeaECreateProperties, SituationIdeaEUpdateColumns, SituationIdeaEUpdateProperties, SituationIdeaEId, SituationIdeaGraph, QSituationIdea>
	implements IBaseSituationIdeaDao {
	
	static Find      = new DaoQueryDecorators<SituationIdeaESelect>();
	static FindOne   = new DaoQueryDecorators<SituationIdeaESelect>();
	static Search    = new DaoQueryDecorators<SituationIdeaESelect>();
	static SearchOne = new DaoQueryDecorators<SituationIdeaESelect>();
	static Save(
		config: SituationIdeaGraph
	): PropertyDecorator {
		return Dao.BaseSave<SituationIdeaGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}
