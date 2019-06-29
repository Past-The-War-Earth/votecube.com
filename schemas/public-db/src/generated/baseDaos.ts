import {
	IDao,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity
} from '@airport/air-control'
import {
	Dao
} from '@airport/check-in'
import {
	EntityId as DbEntityId
} from '@airport/ground-control'
import {
	Q,
	diSet
} from './qSchema'
import {
	IContinent,
	ContinentESelect,
	ContinentECreateColumns,
	ContinentECreateProperties,
	ContinentEUpdateColumns,
	ContinentEUpdateProperties,
	ContinentEId,
	QContinent
} from './location/qcontinent'
import {
	ICountry,
	CountryESelect,
	CountryECreateColumns,
	CountryECreateProperties,
	CountryEUpdateColumns,
	CountryEUpdateProperties,
	CountryEId,
	QCountry
} from './location/qcountry'
import {
	ICounty,
	CountyESelect,
	CountyECreateColumns,
	CountyECreateProperties,
	CountyEUpdateColumns,
	CountyEUpdateProperties,
	CountyEId,
	QCounty
} from './location/qcounty'
import {
	IFactor,
	FactorESelect,
	FactorECreateColumns,
	FactorECreateProperties,
	FactorEUpdateColumns,
	FactorEUpdateProperties,
	FactorEId,
	QFactor
} from './qfactor'
import {
	IFactorPosition,
	FactorPositionESelect,
	FactorPositionECreateColumns,
	FactorPositionECreateProperties,
	FactorPositionEUpdateColumns,
	FactorPositionEUpdateProperties,
	FactorPositionEId,
	QFactorPosition
} from './qfactorposition'
import {
	ILabel,
	LabelESelect,
	LabelECreateColumns,
	LabelECreateProperties,
	LabelEUpdateColumns,
	LabelEUpdateProperties,
	LabelEId,
	QLabel
} from './poll/qlabel'
import {
	IPoll,
	PollESelect,
	PollECreateColumns,
	PollECreateProperties,
	PollEUpdateColumns,
	PollEUpdateProperties,
	PollEId,
	QPoll
} from './poll/qpoll'
import {
	IPollContinent,
	PollContinentESelect,
	PollContinentECreateColumns,
	PollContinentECreateProperties,
	PollContinentEUpdateColumns,
	PollContinentEUpdateProperties,
	PollContinentEId,
	QPollContinent
} from './location/qpollcontinent'
import {
	IPollCountry,
	PollCountryESelect,
	PollCountryECreateColumns,
	PollCountryECreateProperties,
	PollCountryEUpdateColumns,
	PollCountryEUpdateProperties,
	PollCountryEId,
	QPollCountry
} from './location/qpollcountry'
import {
	IPollCounty,
	PollCountyESelect,
	PollCountyECreateColumns,
	PollCountyECreateProperties,
	PollCountyEUpdateColumns,
	PollCountyEUpdateProperties,
	PollCountyEId,
	QPollCounty
} from './location/qpollcounty'
import {
	IPollFactorPosition,
	PollFactorPositionESelect,
	PollFactorPositionECreateColumns,
	PollFactorPositionECreateProperties,
	PollFactorPositionEUpdateColumns,
	PollFactorPositionEUpdateProperties,
	PollFactorPositionEId,
	QPollFactorPosition
} from './poll/qpollfactorposition'
import {
	IPollLabel,
	PollLabelESelect,
	PollLabelECreateColumns,
	PollLabelECreateProperties,
	PollLabelEUpdateColumns,
	PollLabelEUpdateProperties,
	PollLabelEId,
	QPollLabel
} from './poll/qpolllabel'
import {
	IPollState,
	PollStateESelect,
	PollStateECreateColumns,
	PollStateECreateProperties,
	PollStateEUpdateColumns,
	PollStateEUpdateProperties,
	PollStateEId,
	QPollState
} from './location/qpollstate'
import {
	IPollTown,
	PollTownESelect,
	PollTownECreateColumns,
	PollTownECreateProperties,
	PollTownEUpdateColumns,
	PollTownEUpdateProperties,
	PollTownEId,
	QPollTown
} from './location/qpolltown'
import {
	IPollType,
	PollTypeESelect,
	PollTypeECreateColumns,
	PollTypeECreateProperties,
	PollTypeEUpdateColumns,
	PollTypeEUpdateProperties,
	PollTypeEId,
	QPollType
} from './poll/qpolltype'
import {
	IPosition,
	PositionESelect,
	PositionECreateColumns,
	PositionECreateProperties,
	PositionEUpdateColumns,
	PositionEUpdateProperties,
	PositionEId,
	QPosition
} from './qposition'
import {
	IState,
	StateESelect,
	StateECreateColumns,
	StateECreateProperties,
	StateEUpdateColumns,
	StateEUpdateProperties,
	StateEId,
	QState
} from './location/qstate'
import {
	ITheme,
	ThemeESelect,
	ThemeECreateColumns,
	ThemeECreateProperties,
	ThemeEUpdateColumns,
	ThemeEUpdateProperties,
	ThemeEId,
	QTheme
} from './qtheme'
import {
	ITown,
	TownESelect,
	TownECreateColumns,
	TownECreateProperties,
	TownEUpdateColumns,
	TownEUpdateProperties,
	TownEId,
	QTown
} from './location/qtown'
import {
	IVote,
	VoteESelect,
	VoteECreateColumns,
	VoteECreateProperties,
	VoteEUpdateColumns,
	VoteEUpdateProperties,
	VoteEId,
	QVote
} from './vote/qvote'
import {
	IVoteFactor,
	VoteFactorESelect,
	VoteFactorECreateColumns,
	VoteFactorECreateProperties,
	VoteFactorEUpdateColumns,
	VoteFactorEUpdateProperties,
	VoteFactorEId,
	QVoteFactor
} from './vote/qvotefactor'
import {
	IVoteFactorType,
	VoteFactorTypeESelect,
	VoteFactorTypeECreateColumns,
	VoteFactorTypeECreateProperties,
	VoteFactorTypeEUpdateColumns,
	VoteFactorTypeEUpdateProperties,
	VoteFactorTypeEId,
	QVoteFactorType
} from './vote/qvotefactortype'

// Schema Q object Dependency Injection readiness detection DAO
export class SQDIDao<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
	EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	IQE extends IQEntity>
	extends Dao<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateColumns,
		EntityUpdateProperties,
		EntityId,
		IQE> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseContinentDao
  extends IDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, QContinent> {
}

export class BaseContinentDao
  extends SQDIDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, QContinent>
	implements IBaseContinentDao {

	static diSet(): boolean {
		return diSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseCountryDao
  extends IDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, QCountry> {
}

export class BaseCountryDao
  extends SQDIDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, QCountry>
	implements IBaseCountryDao {

	static diSet(): boolean {
		return diSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseCountyDao
  extends IDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, QCounty> {
}

export class BaseCountyDao
  extends SQDIDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, QCounty>
	implements IBaseCountyDao {

	static diSet(): boolean {
		return diSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseFactorDao
  extends IDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, QFactor> {
}

export class BaseFactorDao
  extends SQDIDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, QFactor>
	implements IBaseFactorDao {

	static diSet(): boolean {
		return diSet(9)
	}
	
	constructor() {
		super(9)
	}
}


export interface IBaseFactorPositionDao
  extends IDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, QFactorPosition> {
}

export class BaseFactorPositionDao
  extends SQDIDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, QFactorPosition>
	implements IBaseFactorPositionDao {

	static diSet(): boolean {
		return diSet(11)
	}
	
	constructor() {
		super(11)
	}
}


export interface IBaseLabelDao
  extends IDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, QLabel> {
}

export class BaseLabelDao
  extends SQDIDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, QLabel>
	implements IBaseLabelDao {

	static diSet(): boolean {
		return diSet(13)
	}
	
	constructor() {
		super(13)
	}
}


export interface IBasePollDao
  extends IDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, QPoll> {
}

export class BasePollDao
  extends SQDIDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, QPoll>
	implements IBasePollDao {

	static diSet(): boolean {
		return diSet(16)
	}
	
	constructor() {
		super(16)
	}
}


export interface IBasePollContinentDao
  extends IDao<IPollContinent, PollContinentESelect, PollContinentECreateProperties, PollContinentEUpdateColumns, PollContinentEUpdateProperties, PollContinentEId, QPollContinent> {
}

export class BasePollContinentDao
  extends SQDIDao<IPollContinent, PollContinentESelect, PollContinentECreateProperties, PollContinentEUpdateColumns, PollContinentEUpdateProperties, PollContinentEId, QPollContinent>
	implements IBasePollContinentDao {

	static diSet(): boolean {
		return diSet(21)
	}
	
	constructor() {
		super(21)
	}
}


export interface IBasePollCountryDao
  extends IDao<IPollCountry, PollCountryESelect, PollCountryECreateProperties, PollCountryEUpdateColumns, PollCountryEUpdateProperties, PollCountryEId, QPollCountry> {
}

export class BasePollCountryDao
  extends SQDIDao<IPollCountry, PollCountryESelect, PollCountryECreateProperties, PollCountryEUpdateColumns, PollCountryEUpdateProperties, PollCountryEId, QPollCountry>
	implements IBasePollCountryDao {

	static diSet(): boolean {
		return diSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBasePollCountyDao
  extends IDao<IPollCounty, PollCountyESelect, PollCountyECreateProperties, PollCountyEUpdateColumns, PollCountyEUpdateProperties, PollCountyEId, QPollCounty> {
}

export class BasePollCountyDao
  extends SQDIDao<IPollCounty, PollCountyESelect, PollCountyECreateProperties, PollCountyEUpdateColumns, PollCountyEUpdateProperties, PollCountyEId, QPollCounty>
	implements IBasePollCountyDao {

	static diSet(): boolean {
		return diSet(17)
	}
	
	constructor() {
		super(17)
	}
}


export interface IBasePollFactorPositionDao
  extends IDao<IPollFactorPosition, PollFactorPositionESelect, PollFactorPositionECreateProperties, PollFactorPositionEUpdateColumns, PollFactorPositionEUpdateProperties, PollFactorPositionEId, QPollFactorPosition> {
}

export class BasePollFactorPositionDao
  extends SQDIDao<IPollFactorPosition, PollFactorPositionESelect, PollFactorPositionECreateProperties, PollFactorPositionEUpdateColumns, PollFactorPositionEUpdateProperties, PollFactorPositionEId, QPollFactorPosition>
	implements IBasePollFactorPositionDao {

	static diSet(): boolean {
		return diSet(12)
	}
	
	constructor() {
		super(12)
	}
}


export interface IBasePollLabelDao
  extends IDao<IPollLabel, PollLabelESelect, PollLabelECreateProperties, PollLabelEUpdateColumns, PollLabelEUpdateProperties, PollLabelEId, QPollLabel> {
}

export class BasePollLabelDao
  extends SQDIDao<IPollLabel, PollLabelESelect, PollLabelECreateProperties, PollLabelEUpdateColumns, PollLabelEUpdateProperties, PollLabelEId, QPollLabel>
	implements IBasePollLabelDao {

	static diSet(): boolean {
		return diSet(14)
	}
	
	constructor() {
		super(14)
	}
}


export interface IBasePollStateDao
  extends IDao<IPollState, PollStateESelect, PollStateECreateProperties, PollStateEUpdateColumns, PollStateEUpdateProperties, PollStateEId, QPollState> {
}

export class BasePollStateDao
  extends SQDIDao<IPollState, PollStateESelect, PollStateECreateProperties, PollStateEUpdateColumns, PollStateEUpdateProperties, PollStateEId, QPollState>
	implements IBasePollStateDao {

	static diSet(): boolean {
		return diSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBasePollTownDao
  extends IDao<IPollTown, PollTownESelect, PollTownECreateProperties, PollTownEUpdateColumns, PollTownEUpdateProperties, PollTownEId, QPollTown> {
}

export class BasePollTownDao
  extends SQDIDao<IPollTown, PollTownESelect, PollTownECreateProperties, PollTownEUpdateColumns, PollTownEUpdateProperties, PollTownEId, QPollTown>
	implements IBasePollTownDao {

	static diSet(): boolean {
		return diSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBasePollTypeDao
  extends IDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, QPollType> {
}

export class BasePollTypeDao
  extends SQDIDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, QPollType>
	implements IBasePollTypeDao {

	static diSet(): boolean {
		return diSet(15)
	}
	
	constructor() {
		super(15)
	}
}


export interface IBasePositionDao
  extends IDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, QPosition> {
}

export class BasePositionDao
  extends SQDIDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, QPosition>
	implements IBasePositionDao {

	static diSet(): boolean {
		return diSet(10)
	}
	
	constructor() {
		super(10)
	}
}


export interface IBaseStateDao
  extends IDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, QState> {
}

export class BaseStateDao
  extends SQDIDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, QState>
	implements IBaseStateDao {

	static diSet(): boolean {
		return diSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseThemeDao
  extends IDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, QTheme> {
}

export class BaseThemeDao
  extends SQDIDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, QTheme>
	implements IBaseThemeDao {

	static diSet(): boolean {
		return diSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseTownDao
  extends IDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, QTown> {
}

export class BaseTownDao
  extends SQDIDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, QTown>
	implements IBaseTownDao {

	static diSet(): boolean {
		return diSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseVoteDao
  extends IDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, QVote> {
}

export class BaseVoteDao
  extends SQDIDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, QVote>
	implements IBaseVoteDao {

	static diSet(): boolean {
		return diSet(20)
	}
	
	constructor() {
		super(20)
	}
}


export interface IBaseVoteFactorDao
  extends IDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, QVoteFactor> {
}

export class BaseVoteFactorDao
  extends SQDIDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, QVoteFactor>
	implements IBaseVoteFactorDao {

	static diSet(): boolean {
		return diSet(19)
	}
	
	constructor() {
		super(19)
	}
}


export interface IBaseVoteFactorTypeDao
  extends IDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, QVoteFactorType> {
}

export class BaseVoteFactorTypeDao
  extends SQDIDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, QVoteFactorType>
	implements IBaseVoteFactorTypeDao {

	static diSet(): boolean {
		return diSet(18)
	}
	
	constructor() {
		super(18)
	}
}
