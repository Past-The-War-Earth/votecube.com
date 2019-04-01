import { IDmo } from "@airport/air-control";
import { Dmo } from "@airport/check-in";
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


export interface IBaseContinentDmo
  extends IDmo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateProperties, ContinentEId, QContinent> {
}

export class BaseContinentDmo
  extends Dmo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateProperties, ContinentEId, QContinent>
	implements IBaseContinentDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Continent']);
	}
}


export interface IBaseCountryDmo
  extends IDmo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateProperties, CountryEId, QCountry> {
}

export class BaseCountryDmo
  extends Dmo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateProperties, CountryEId, QCountry>
	implements IBaseCountryDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Country']);
	}
}


export interface IBaseCountyDmo
  extends IDmo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateProperties, CountyEId, QCounty> {
}

export class BaseCountyDmo
  extends Dmo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateProperties, CountyEId, QCounty>
	implements IBaseCountyDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['County']);
	}
}


export interface IBaseFactorDmo
  extends IDmo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateProperties, FactorEId, QFactor> {
}

export class BaseFactorDmo
  extends Dmo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateProperties, FactorEId, QFactor>
	implements IBaseFactorDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Factor']);
	}
}


export interface IBaseFactorPositionDmo
  extends IDmo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateProperties, FactorPositionEId, QFactorPosition> {
}

export class BaseFactorPositionDmo
  extends Dmo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateProperties, FactorPositionEId, QFactorPosition>
	implements IBaseFactorPositionDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['FactorPosition']);
	}
}


export interface IBaseLabelDmo
  extends IDmo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateProperties, LabelEId, QLabel> {
}

export class BaseLabelDmo
  extends Dmo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateProperties, LabelEId, QLabel>
	implements IBaseLabelDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Label']);
	}
}


export interface IBasePollDmo
  extends IDmo<IPoll, PollESelect, PollECreateProperties, PollEUpdateProperties, PollEId, QPoll> {
}

export class BasePollDmo
  extends Dmo<IPoll, PollESelect, PollECreateProperties, PollEUpdateProperties, PollEId, QPoll>
	implements IBasePollDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Poll']);
	}
}


export interface IBasePollContinentDmo
  extends IDmo<IPollContinent, PollContinentESelect, PollContinentECreateProperties, PollContinentEUpdateProperties, PollContinentEId, QPollContinent> {
}

export class BasePollContinentDmo
  extends Dmo<IPollContinent, PollContinentESelect, PollContinentECreateProperties, PollContinentEUpdateProperties, PollContinentEId, QPollContinent>
	implements IBasePollContinentDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollContinent']);
	}
}


export interface IBasePollCountryDmo
  extends IDmo<IPollCountry, PollCountryESelect, PollCountryECreateProperties, PollCountryEUpdateProperties, PollCountryEId, QPollCountry> {
}

export class BasePollCountryDmo
  extends Dmo<IPollCountry, PollCountryESelect, PollCountryECreateProperties, PollCountryEUpdateProperties, PollCountryEId, QPollCountry>
	implements IBasePollCountryDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollCountry']);
	}
}


export interface IBasePollCountyDmo
  extends IDmo<IPollCounty, PollCountyESelect, PollCountyECreateProperties, PollCountyEUpdateProperties, PollCountyEId, QPollCounty> {
}

export class BasePollCountyDmo
  extends Dmo<IPollCounty, PollCountyESelect, PollCountyECreateProperties, PollCountyEUpdateProperties, PollCountyEId, QPollCounty>
	implements IBasePollCountyDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollCounty']);
	}
}


export interface IBasePollFactorPositionDmo
  extends IDmo<IPollFactorPosition, PollFactorPositionESelect, PollFactorPositionECreateProperties, PollFactorPositionEUpdateProperties, PollFactorPositionEId, QPollFactorPosition> {
}

export class BasePollFactorPositionDmo
  extends Dmo<IPollFactorPosition, PollFactorPositionESelect, PollFactorPositionECreateProperties, PollFactorPositionEUpdateProperties, PollFactorPositionEId, QPollFactorPosition>
	implements IBasePollFactorPositionDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollFactorPosition']);
	}
}


export interface IBasePollLabelDmo
  extends IDmo<IPollLabel, PollLabelESelect, PollLabelECreateProperties, PollLabelEUpdateProperties, PollLabelEId, QPollLabel> {
}

export class BasePollLabelDmo
  extends Dmo<IPollLabel, PollLabelESelect, PollLabelECreateProperties, PollLabelEUpdateProperties, PollLabelEId, QPollLabel>
	implements IBasePollLabelDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollLabel']);
	}
}


export interface IBasePollStateDmo
  extends IDmo<IPollState, PollStateESelect, PollStateECreateProperties, PollStateEUpdateProperties, PollStateEId, QPollState> {
}

export class BasePollStateDmo
  extends Dmo<IPollState, PollStateESelect, PollStateECreateProperties, PollStateEUpdateProperties, PollStateEId, QPollState>
	implements IBasePollStateDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollState']);
	}
}


export interface IBasePollTownDmo
  extends IDmo<IPollTown, PollTownESelect, PollTownECreateProperties, PollTownEUpdateProperties, PollTownEId, QPollTown> {
}

export class BasePollTownDmo
  extends Dmo<IPollTown, PollTownESelect, PollTownECreateProperties, PollTownEUpdateProperties, PollTownEId, QPollTown>
	implements IBasePollTownDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollTown']);
	}
}


export interface IBasePositionDmo
  extends IDmo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateProperties, PositionEId, QPosition> {
}

export class BasePositionDmo
  extends Dmo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateProperties, PositionEId, QPosition>
	implements IBasePositionDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Position']);
	}
}


export interface IBaseStateDmo
  extends IDmo<IState, StateESelect, StateECreateProperties, StateEUpdateProperties, StateEId, QState> {
}

export class BaseStateDmo
  extends Dmo<IState, StateESelect, StateECreateProperties, StateEUpdateProperties, StateEId, QState>
	implements IBaseStateDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['State']);
	}
}


export interface IBaseThemeDmo
  extends IDmo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateProperties, ThemeEId, QTheme> {
}

export class BaseThemeDmo
  extends Dmo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateProperties, ThemeEId, QTheme>
	implements IBaseThemeDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Theme']);
	}
}


export interface IBaseTownDmo
  extends IDmo<ITown, TownESelect, TownECreateProperties, TownEUpdateProperties, TownEId, QTown> {
}

export class BaseTownDmo
  extends Dmo<ITown, TownESelect, TownECreateProperties, TownEUpdateProperties, TownEId, QTown>
	implements IBaseTownDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Town']);
	}
}


export interface IBaseVoteDmo
  extends IDmo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateProperties, VoteEId, QVote> {
}

export class BaseVoteDmo
  extends Dmo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateProperties, VoteEId, QVote>
	implements IBaseVoteDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Vote']);
	}
}


export interface IBaseVoteFactorDmo
  extends IDmo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateProperties, VoteFactorEId, QVoteFactor> {
}

export class BaseVoteFactorDmo
  extends Dmo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateProperties, VoteFactorEId, QVoteFactor>
	implements IBaseVoteFactorDmo {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['VoteFactor']);
	}
}
