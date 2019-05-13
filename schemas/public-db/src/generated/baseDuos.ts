import {
	IDuo,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateProperties,
	IQEntity
} from '@airport/air-control';
import { Duo } from "@airport/check-in";
import { Q } from './qSchema';
import {
	IContinent,
	ContinentESelect,
	ContinentECreateColumns,
	ContinentECreateProperties,
	ContinentEUpdateColumns,
	ContinentEUpdateProperties,
	ContinentEId,
	QContinent
} from './location/qcontinent';
import {
	ICountry,
	CountryESelect,
	CountryECreateColumns,
	CountryECreateProperties,
	CountryEUpdateColumns,
	CountryEUpdateProperties,
	CountryEId,
	QCountry
} from './location/qcountry';
import {
	ICounty,
	CountyESelect,
	CountyECreateColumns,
	CountyECreateProperties,
	CountyEUpdateColumns,
	CountyEUpdateProperties,
	CountyEId,
	QCounty
} from './location/qcounty';
import {
	IFactor,
	FactorESelect,
	FactorECreateColumns,
	FactorECreateProperties,
	FactorEUpdateColumns,
	FactorEUpdateProperties,
	FactorEId,
	QFactor
} from './qfactor';
import {
	IFactorPosition,
	FactorPositionESelect,
	FactorPositionECreateColumns,
	FactorPositionECreateProperties,
	FactorPositionEUpdateColumns,
	FactorPositionEUpdateProperties,
	FactorPositionEId,
	QFactorPosition
} from './qfactorposition';
import {
	ILabel,
	LabelESelect,
	LabelECreateColumns,
	LabelECreateProperties,
	LabelEUpdateColumns,
	LabelEUpdateProperties,
	LabelEId,
	QLabel
} from './poll/qlabel';
import {
	IPoll,
	PollESelect,
	PollECreateColumns,
	PollECreateProperties,
	PollEUpdateColumns,
	PollEUpdateProperties,
	PollEId,
	QPoll
} from './poll/qpoll';
import {
	IPollContinent,
	PollContinentESelect,
	PollContinentECreateColumns,
	PollContinentECreateProperties,
	PollContinentEUpdateColumns,
	PollContinentEUpdateProperties,
	PollContinentEId,
	QPollContinent
} from './location/qpollcontinent';
import {
	IPollCountry,
	PollCountryESelect,
	PollCountryECreateColumns,
	PollCountryECreateProperties,
	PollCountryEUpdateColumns,
	PollCountryEUpdateProperties,
	PollCountryEId,
	QPollCountry
} from './location/qpollcountry';
import {
	IPollCounty,
	PollCountyESelect,
	PollCountyECreateColumns,
	PollCountyECreateProperties,
	PollCountyEUpdateColumns,
	PollCountyEUpdateProperties,
	PollCountyEId,
	QPollCounty
} from './location/qpollcounty';
import {
	IPollFactorPosition,
	PollFactorPositionESelect,
	PollFactorPositionECreateColumns,
	PollFactorPositionECreateProperties,
	PollFactorPositionEUpdateColumns,
	PollFactorPositionEUpdateProperties,
	PollFactorPositionEId,
	QPollFactorPosition
} from './poll/qpollfactorposition';
import {
	IPollLabel,
	PollLabelESelect,
	PollLabelECreateColumns,
	PollLabelECreateProperties,
	PollLabelEUpdateColumns,
	PollLabelEUpdateProperties,
	PollLabelEId,
	QPollLabel
} from './poll/qpolllabel';
import {
	IPollState,
	PollStateESelect,
	PollStateECreateColumns,
	PollStateECreateProperties,
	PollStateEUpdateColumns,
	PollStateEUpdateProperties,
	PollStateEId,
	QPollState
} from './location/qpollstate';
import {
	IPollTown,
	PollTownESelect,
	PollTownECreateColumns,
	PollTownECreateProperties,
	PollTownEUpdateColumns,
	PollTownEUpdateProperties,
	PollTownEId,
	QPollTown
} from './location/qpolltown';
import {
	IPollType,
	PollTypeESelect,
	PollTypeECreateColumns,
	PollTypeECreateProperties,
	PollTypeEUpdateColumns,
	PollTypeEUpdateProperties,
	PollTypeEId,
	QPollType
} from './poll/qpolltype';
import {
	IPosition,
	PositionESelect,
	PositionECreateColumns,
	PositionECreateProperties,
	PositionEUpdateColumns,
	PositionEUpdateProperties,
	PositionEId,
	QPosition
} from './qposition';
import {
	IState,
	StateESelect,
	StateECreateColumns,
	StateECreateProperties,
	StateEUpdateColumns,
	StateEUpdateProperties,
	StateEId,
	QState
} from './location/qstate';
import {
	ITheme,
	ThemeESelect,
	ThemeECreateColumns,
	ThemeECreateProperties,
	ThemeEUpdateColumns,
	ThemeEUpdateProperties,
	ThemeEId,
	QTheme
} from './qtheme';
import {
	ITown,
	TownESelect,
	TownECreateColumns,
	TownECreateProperties,
	TownEUpdateColumns,
	TownEUpdateProperties,
	TownEId,
	QTown
} from './location/qtown';
import {
	IVote,
	VoteESelect,
	VoteECreateColumns,
	VoteECreateProperties,
	VoteEUpdateColumns,
	VoteEUpdateProperties,
	VoteEId,
	QVote
} from './vote/qvote';
import {
	IVoteFactor,
	VoteFactorESelect,
	VoteFactorECreateColumns,
	VoteFactorECreateProperties,
	VoteFactorEUpdateColumns,
	VoteFactorEUpdateProperties,
	VoteFactorEId,
	QVoteFactor
} from './vote/qvotefactor';
import {
	IVoteFactorType,
	VoteFactorTypeESelect,
	VoteFactorTypeECreateColumns,
	VoteFactorTypeECreateProperties,
	VoteFactorTypeEUpdateColumns,
	VoteFactorTypeEUpdateProperties,
	VoteFactorTypeEId,
	QVoteFactorType
} from './vote/qvotefactortype';


// Schema Q object Dependency Injection readiness detection DAO
export class SQDIDuo<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	IQE extends IQEntity>
	extends Duo<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateProperties,
		EntityId,
		IQE> {

	static diSet(): boolean {
		return Q.db as any
	}

	constructor(
		dbEntityName: string
	) {
		super(dbEntityName, Q)
	}
}


export interface IBaseContinentDuo
  extends IDuo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateProperties, ContinentEId, QContinent> {
}

export class BaseContinentDuo
  extends SQDIDuo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateProperties, ContinentEId, QContinent>
	implements IBaseContinentDuo {
	constructor() {
		super('Continent');
	}
}


export interface IBaseCountryDuo
  extends IDuo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateProperties, CountryEId, QCountry> {
}

export class BaseCountryDuo
  extends SQDIDuo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateProperties, CountryEId, QCountry>
	implements IBaseCountryDuo {
	constructor() {
		super('Country');
	}
}


export interface IBaseCountyDuo
  extends IDuo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateProperties, CountyEId, QCounty> {
}

export class BaseCountyDuo
  extends SQDIDuo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateProperties, CountyEId, QCounty>
	implements IBaseCountyDuo {
	constructor() {
		super('County');
	}
}


export interface IBaseFactorDuo
  extends IDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateProperties, FactorEId, QFactor> {
}

export class BaseFactorDuo
  extends SQDIDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateProperties, FactorEId, QFactor>
	implements IBaseFactorDuo {
	constructor() {
		super('Factor');
	}
}


export interface IBaseFactorPositionDuo
  extends IDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateProperties, FactorPositionEId, QFactorPosition> {
}

export class BaseFactorPositionDuo
  extends SQDIDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateProperties, FactorPositionEId, QFactorPosition>
	implements IBaseFactorPositionDuo {
	constructor() {
		super('FactorPosition');
	}
}


export interface IBaseLabelDuo
  extends IDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateProperties, LabelEId, QLabel> {
}

export class BaseLabelDuo
  extends SQDIDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateProperties, LabelEId, QLabel>
	implements IBaseLabelDuo {
	constructor() {
		super('Label');
	}
}


export interface IBasePollDuo
  extends IDuo<IPoll, PollESelect, PollECreateProperties, PollEUpdateProperties, PollEId, QPoll> {
}

export class BasePollDuo
  extends SQDIDuo<IPoll, PollESelect, PollECreateProperties, PollEUpdateProperties, PollEId, QPoll>
	implements IBasePollDuo {
	constructor() {
		super('Poll');
	}
}


export interface IBasePollContinentDuo
  extends IDuo<IPollContinent, PollContinentESelect, PollContinentECreateProperties, PollContinentEUpdateProperties, PollContinentEId, QPollContinent> {
}

export class BasePollContinentDuo
  extends SQDIDuo<IPollContinent, PollContinentESelect, PollContinentECreateProperties, PollContinentEUpdateProperties, PollContinentEId, QPollContinent>
	implements IBasePollContinentDuo {
	constructor() {
		super('PollContinent');
	}
}


export interface IBasePollCountryDuo
  extends IDuo<IPollCountry, PollCountryESelect, PollCountryECreateProperties, PollCountryEUpdateProperties, PollCountryEId, QPollCountry> {
}

export class BasePollCountryDuo
  extends SQDIDuo<IPollCountry, PollCountryESelect, PollCountryECreateProperties, PollCountryEUpdateProperties, PollCountryEId, QPollCountry>
	implements IBasePollCountryDuo {
	constructor() {
		super('PollCountry');
	}
}


export interface IBasePollCountyDuo
  extends IDuo<IPollCounty, PollCountyESelect, PollCountyECreateProperties, PollCountyEUpdateProperties, PollCountyEId, QPollCounty> {
}

export class BasePollCountyDuo
  extends SQDIDuo<IPollCounty, PollCountyESelect, PollCountyECreateProperties, PollCountyEUpdateProperties, PollCountyEId, QPollCounty>
	implements IBasePollCountyDuo {
	constructor() {
		super('PollCounty');
	}
}


export interface IBasePollFactorPositionDuo
  extends IDuo<IPollFactorPosition, PollFactorPositionESelect, PollFactorPositionECreateProperties, PollFactorPositionEUpdateProperties, PollFactorPositionEId, QPollFactorPosition> {
}

export class BasePollFactorPositionDuo
  extends SQDIDuo<IPollFactorPosition, PollFactorPositionESelect, PollFactorPositionECreateProperties, PollFactorPositionEUpdateProperties, PollFactorPositionEId, QPollFactorPosition>
	implements IBasePollFactorPositionDuo {
	constructor() {
		super('PollFactorPosition');
	}
}


export interface IBasePollLabelDuo
  extends IDuo<IPollLabel, PollLabelESelect, PollLabelECreateProperties, PollLabelEUpdateProperties, PollLabelEId, QPollLabel> {
}

export class BasePollLabelDuo
  extends SQDIDuo<IPollLabel, PollLabelESelect, PollLabelECreateProperties, PollLabelEUpdateProperties, PollLabelEId, QPollLabel>
	implements IBasePollLabelDuo {
	constructor() {
		super('PollLabel');
	}
}


export interface IBasePollStateDuo
  extends IDuo<IPollState, PollStateESelect, PollStateECreateProperties, PollStateEUpdateProperties, PollStateEId, QPollState> {
}

export class BasePollStateDuo
  extends SQDIDuo<IPollState, PollStateESelect, PollStateECreateProperties, PollStateEUpdateProperties, PollStateEId, QPollState>
	implements IBasePollStateDuo {
	constructor() {
		super('PollState');
	}
}


export interface IBasePollTownDuo
  extends IDuo<IPollTown, PollTownESelect, PollTownECreateProperties, PollTownEUpdateProperties, PollTownEId, QPollTown> {
}

export class BasePollTownDuo
  extends SQDIDuo<IPollTown, PollTownESelect, PollTownECreateProperties, PollTownEUpdateProperties, PollTownEId, QPollTown>
	implements IBasePollTownDuo {
	constructor() {
		super('PollTown');
	}
}


export interface IBasePollTypeDuo
  extends IDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateProperties, PollTypeEId, QPollType> {
}

export class BasePollTypeDuo
  extends SQDIDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateProperties, PollTypeEId, QPollType>
	implements IBasePollTypeDuo {
	constructor() {
		super('PollType');
	}
}


export interface IBasePositionDuo
  extends IDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateProperties, PositionEId, QPosition> {
}

export class BasePositionDuo
  extends SQDIDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateProperties, PositionEId, QPosition>
	implements IBasePositionDuo {
	constructor() {
		super('Position');
	}
}


export interface IBaseStateDuo
  extends IDuo<IState, StateESelect, StateECreateProperties, StateEUpdateProperties, StateEId, QState> {
}

export class BaseStateDuo
  extends SQDIDuo<IState, StateESelect, StateECreateProperties, StateEUpdateProperties, StateEId, QState>
	implements IBaseStateDuo {
	constructor() {
		super('State');
	}
}


export interface IBaseThemeDuo
  extends IDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateProperties, ThemeEId, QTheme> {
}

export class BaseThemeDuo
  extends SQDIDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateProperties, ThemeEId, QTheme>
	implements IBaseThemeDuo {
	constructor() {
		super('Theme');
	}
}


export interface IBaseTownDuo
  extends IDuo<ITown, TownESelect, TownECreateProperties, TownEUpdateProperties, TownEId, QTown> {
}

export class BaseTownDuo
  extends SQDIDuo<ITown, TownESelect, TownECreateProperties, TownEUpdateProperties, TownEId, QTown>
	implements IBaseTownDuo {
	constructor() {
		super('Town');
	}
}


export interface IBaseVoteDuo
  extends IDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateProperties, VoteEId, QVote> {
}

export class BaseVoteDuo
  extends SQDIDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateProperties, VoteEId, QVote>
	implements IBaseVoteDuo {
	constructor() {
		super('Vote');
	}
}


export interface IBaseVoteFactorDuo
  extends IDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateProperties, VoteFactorEId, QVoteFactor> {
}

export class BaseVoteFactorDuo
  extends SQDIDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateProperties, VoteFactorEId, QVoteFactor>
	implements IBaseVoteFactorDuo {
	constructor() {
		super('VoteFactor');
	}
}


export interface IBaseVoteFactorTypeDuo
  extends IDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, QVoteFactorType> {
}

export class BaseVoteFactorTypeDuo
  extends SQDIDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, QVoteFactorType>
	implements IBaseVoteFactorTypeDuo {
	constructor() {
		super('VoteFactorType');
	}
}
