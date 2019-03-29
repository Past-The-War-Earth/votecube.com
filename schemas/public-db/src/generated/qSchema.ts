import { QSchema as AirportQSchema } from '@airport/air-control';
import { DbSchema } from '@airport/ground-control';
import { Continent } from '../ddl/location/continent';
import { QContinent } from './location/qcontinent';
import { Country } from '../ddl/location/country';
import { QCountry } from './location/qcountry';
import { County } from '../ddl/location/county';
import { QCounty } from './location/qcounty';
import { Factor } from '../ddl/factor';
import { QFactor } from './qfactor';
import { FactorPosition } from '../ddl/factorposition';
import { QFactorPosition } from './qfactorposition';
import { Label } from '../ddl/poll/label';
import { QLabel } from './poll/qlabel';
import { Poll } from '../ddl/poll/poll';
import { QPoll } from './poll/qpoll';
import { PollContinent } from '../ddl/location/pollcontinent';
import { QPollContinent } from './location/qpollcontinent';
import { PollCountry } from '../ddl/location/pollcountry';
import { QPollCountry } from './location/qpollcountry';
import { PollCounty } from '../ddl/location/pollcounty';
import { QPollCounty } from './location/qpollcounty';
import { PollFactorPosition } from '../ddl/poll/pollfactorposition';
import { QPollFactorPosition } from './poll/qpollfactorposition';
import { PollLabel } from '../ddl/poll/polllabel';
import { QPollLabel } from './poll/qpolllabel';
import { PollState } from '../ddl/location/pollstate';
import { QPollState } from './location/qpollstate';
import { PollTown } from '../ddl/location/polltown';
import { QPollTown } from './location/qpolltown';
import { Position } from '../ddl/position';
import { QPosition } from './qposition';
import { State } from '../ddl/location/state';
import { QState } from './location/qstate';
import { Theme } from '../ddl/theme';
import { QTheme } from './qtheme';
import { Town } from '../ddl/location/town';
import { QTown } from './location/qtown';

import {
	IBaseContinentDmo,
	IBaseCountryDmo,
	IBaseCountyDmo,
	IBaseFactorDmo,
	IBaseFactorPositionDmo,
	IBaseLabelDmo,
	IBasePollDmo,
	IBasePollContinentDmo,
	IBasePollCountryDmo,
	IBasePollCountyDmo,
	IBasePollFactorPositionDmo,
	IBasePollLabelDmo,
	IBasePollStateDmo,
	IBasePollTownDmo,
	IBasePositionDmo,
	IBaseStateDmo,
	IBaseThemeDmo,
	IBaseTownDmo
} from './baseDmos';

import {
	IBaseContinentDao,
	IBaseCountryDao,
	IBaseCountyDao,
	IBaseFactorDao,
	IBaseFactorPositionDao,
	IBaseLabelDao,
	IBasePollDao,
	IBasePollContinentDao,
	IBasePollCountryDao,
	IBasePollCountyDao,
	IBasePollFactorPositionDao,
	IBasePollLabelDao,
	IBasePollStateDao,
	IBasePollTownDao,
	IBasePositionDao,
	IBaseStateDao,
	IBaseThemeDao,
	IBaseTownDao
} from './baseDaos';

export interface LocalQSchema extends AirportQSchema {

  db: DbSchema;

	dmo: {
		Continent: IBaseContinentDmo;
		Country: IBaseCountryDmo;
		County: IBaseCountyDmo;
		Factor: IBaseFactorDmo;
		FactorPosition: IBaseFactorPositionDmo;
		Label: IBaseLabelDmo;
		Poll: IBasePollDmo;
		PollContinent: IBasePollContinentDmo;
		PollCountry: IBasePollCountryDmo;
		PollCounty: IBasePollCountyDmo;
		PollFactorPosition: IBasePollFactorPositionDmo;
		PollLabel: IBasePollLabelDmo;
		PollState: IBasePollStateDmo;
		PollTown: IBasePollTownDmo;
		Position: IBasePositionDmo;
		State: IBaseStateDmo;
		Theme: IBaseThemeDmo;
		Town: IBaseTownDmo;
	}

	dao: {
		Continent: IBaseContinentDao;
		Country: IBaseCountryDao;
		County: IBaseCountyDao;
		Factor: IBaseFactorDao;
		FactorPosition: IBaseFactorPositionDao;
		Label: IBaseLabelDao;
		Poll: IBasePollDao;
		PollContinent: IBasePollContinentDao;
		PollCountry: IBasePollCountryDao;
		PollCounty: IBasePollCountyDao;
		PollFactorPosition: IBasePollFactorPositionDao;
		PollLabel: IBasePollLabelDao;
		PollState: IBasePollStateDao;
		PollTown: IBasePollTownDao;
		Position: IBasePositionDao;
		State: IBaseStateDao;
		Theme: IBaseThemeDao;
		Town: IBaseTownDao;
	}
	
	Continent: QContinent;
	Country: QCountry;
	County: QCounty;
	Factor: QFactor;
	FactorPosition: QFactorPosition;
	Label: QLabel;
	Poll: QPoll;
	PollContinent: QPollContinent;
	PollCountry: QPollCountry;
	PollCounty: QPollCounty;
	PollFactorPosition: QPollFactorPosition;
	PollLabel: QPollLabel;
	PollState: QPollState;
	PollTown: QPollTown;
	Position: QPosition;
	State: QState;
	Theme: QTheme;
	Town: QTown;

}

const __constructors__ = {
	Continent: Continent,
	Country: Country,
	County: County,
	Factor: Factor,
	FactorPosition: FactorPosition,
	Label: Label,
	Poll: Poll,
	PollContinent: PollContinent,
	PollCountry: PollCountry,
	PollCounty: PollCounty,
	PollFactorPosition: PollFactorPosition,
	PollLabel: PollLabel,
	PollState: PollState,
	PollTown: PollTown,
	Position: Position,
	State: State,
	Theme: Theme,
	Town: Town
};

export const Q_SCHEMA: LocalQSchema = <any>{
	__constructors__
};
export const Q: LocalQSchema = Q_SCHEMA;
