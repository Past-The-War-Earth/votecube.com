import {
	IDao, 
	IUtils 
} from '@airport/air-control';
import { Dao } from '@airport/check-in';
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


export interface IBaseContinentDao
  extends IDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, QContinent> {
}

export class BaseContinentDao
  extends Dao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, QContinent>
	implements IBaseContinentDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Continent'], Q)
	}
}


export interface IBaseCountryDao
  extends IDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, QCountry> {
}

export class BaseCountryDao
  extends Dao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, QCountry>
	implements IBaseCountryDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Country'], Q)
	}
}


export interface IBaseCountyDao
  extends IDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, QCounty> {
}

export class BaseCountyDao
  extends Dao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, QCounty>
	implements IBaseCountyDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['County'], Q)
	}
}


export interface IBaseFactorDao
  extends IDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, QFactor> {
}

export class BaseFactorDao
  extends Dao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, QFactor>
	implements IBaseFactorDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Factor'], Q)
	}
}


export interface IBaseFactorPositionDao
  extends IDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, QFactorPosition> {
}

export class BaseFactorPositionDao
  extends Dao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, QFactorPosition>
	implements IBaseFactorPositionDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['FactorPosition'], Q)
	}
}


export interface IBaseLabelDao
  extends IDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, QLabel> {
}

export class BaseLabelDao
  extends Dao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, QLabel>
	implements IBaseLabelDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Label'], Q)
	}
}


export interface IBasePollDao
  extends IDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, QPoll> {
}

export class BasePollDao
  extends Dao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, QPoll>
	implements IBasePollDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Poll'], Q)
	}
}


export interface IBasePollContinentDao
  extends IDao<IPollContinent, PollContinentESelect, PollContinentECreateProperties, PollContinentEUpdateColumns, PollContinentEUpdateProperties, PollContinentEId, QPollContinent> {
}

export class BasePollContinentDao
  extends Dao<IPollContinent, PollContinentESelect, PollContinentECreateProperties, PollContinentEUpdateColumns, PollContinentEUpdateProperties, PollContinentEId, QPollContinent>
	implements IBasePollContinentDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollContinent'], Q)
	}
}


export interface IBasePollCountryDao
  extends IDao<IPollCountry, PollCountryESelect, PollCountryECreateProperties, PollCountryEUpdateColumns, PollCountryEUpdateProperties, PollCountryEId, QPollCountry> {
}

export class BasePollCountryDao
  extends Dao<IPollCountry, PollCountryESelect, PollCountryECreateProperties, PollCountryEUpdateColumns, PollCountryEUpdateProperties, PollCountryEId, QPollCountry>
	implements IBasePollCountryDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollCountry'], Q)
	}
}


export interface IBasePollCountyDao
  extends IDao<IPollCounty, PollCountyESelect, PollCountyECreateProperties, PollCountyEUpdateColumns, PollCountyEUpdateProperties, PollCountyEId, QPollCounty> {
}

export class BasePollCountyDao
  extends Dao<IPollCounty, PollCountyESelect, PollCountyECreateProperties, PollCountyEUpdateColumns, PollCountyEUpdateProperties, PollCountyEId, QPollCounty>
	implements IBasePollCountyDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollCounty'], Q)
	}
}


export interface IBasePollFactorPositionDao
  extends IDao<IPollFactorPosition, PollFactorPositionESelect, PollFactorPositionECreateProperties, PollFactorPositionEUpdateColumns, PollFactorPositionEUpdateProperties, PollFactorPositionEId, QPollFactorPosition> {
}

export class BasePollFactorPositionDao
  extends Dao<IPollFactorPosition, PollFactorPositionESelect, PollFactorPositionECreateProperties, PollFactorPositionEUpdateColumns, PollFactorPositionEUpdateProperties, PollFactorPositionEId, QPollFactorPosition>
	implements IBasePollFactorPositionDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollFactorPosition'], Q)
	}
}


export interface IBasePollLabelDao
  extends IDao<IPollLabel, PollLabelESelect, PollLabelECreateProperties, PollLabelEUpdateColumns, PollLabelEUpdateProperties, PollLabelEId, QPollLabel> {
}

export class BasePollLabelDao
  extends Dao<IPollLabel, PollLabelESelect, PollLabelECreateProperties, PollLabelEUpdateColumns, PollLabelEUpdateProperties, PollLabelEId, QPollLabel>
	implements IBasePollLabelDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollLabel'], Q)
	}
}


export interface IBasePollStateDao
  extends IDao<IPollState, PollStateESelect, PollStateECreateProperties, PollStateEUpdateColumns, PollStateEUpdateProperties, PollStateEId, QPollState> {
}

export class BasePollStateDao
  extends Dao<IPollState, PollStateESelect, PollStateECreateProperties, PollStateEUpdateColumns, PollStateEUpdateProperties, PollStateEId, QPollState>
	implements IBasePollStateDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollState'], Q)
	}
}


export interface IBasePollTownDao
  extends IDao<IPollTown, PollTownESelect, PollTownECreateProperties, PollTownEUpdateColumns, PollTownEUpdateProperties, PollTownEId, QPollTown> {
}

export class BasePollTownDao
  extends Dao<IPollTown, PollTownESelect, PollTownECreateProperties, PollTownEUpdateColumns, PollTownEUpdateProperties, PollTownEId, QPollTown>
	implements IBasePollTownDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['PollTown'], Q)
	}
}


export interface IBasePositionDao
  extends IDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, QPosition> {
}

export class BasePositionDao
  extends Dao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, QPosition>
	implements IBasePositionDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Position'], Q)
	}
}


export interface IBaseStateDao
  extends IDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, QState> {
}

export class BaseStateDao
  extends Dao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, QState>
	implements IBaseStateDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['State'], Q)
	}
}


export interface IBaseThemeDao
  extends IDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, QTheme> {
}

export class BaseThemeDao
  extends Dao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, QTheme>
	implements IBaseThemeDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Theme'], Q)
	}
}


export interface IBaseTownDao
  extends IDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, QTown> {
}

export class BaseTownDao
  extends Dao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, QTown>
	implements IBaseTownDao {
	constructor() {
		super(Q.db.currentVersion.entityMapByName['Town'], Q)
	}
}
