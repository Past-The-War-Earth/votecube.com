import {
	AIR_DB,
	QSchema as AirportQSchema
}                      from '@airport/air-control'
import {
	diSet as dS,
	duoDiSet as ddS
}                      from '@airport/check-in'
import {DI}            from '@airport/di'
import {
	DbSchema,
	EntityId,
	getSchemaName
}                      from '@airport/ground-control';
import { Continent }       from '../ddl/location/Continent';
import { QContinent }      from './location/qcontinent';
import { Country }         from '../ddl/location/Country';
import { QCountry }        from './location/qcountry';
import { County }          from '../ddl/location/County';
import { QCounty }         from './location/qcounty';
import { Factor }          from '../ddl/Factor';
import { QFactor }             from './qfactor';
import { FactorPosition }      from '../ddl/FactorPosition';
import { QFactorPosition }     from './qfactorposition';
import { ImmutableRow }        from '../ddl/infrastructure/ImmutableRow';
import { QImmutableRow }       from './qimmutablerow';
import { Label }               from '../ddl/poll/label/Label';
import { QLabel }              from './poll/qlabel';
import { Poll }                from '../ddl/poll/Poll';
import { QPoll }               from './poll/qpoll';
import { PollContinent }       from '../ddl/poll/location/PollContinent';
import { QPollContinent }      from './location/qpollcontinent';
import { PollCountry }         from '../ddl/poll/location/PollCountry';
import { QPollCountry }        from './location/qpollcountry';
import { PollCounty }          from '../ddl/poll/location/PollCounty';
import { QPollCounty }         from './location/qpollcounty';
import { PollFactorPosition }  from '../ddl/poll/PollFactorPosition';
import { QPollFactorPosition } from './poll/qpollfactorposition';
import { PollLabel }           from '../ddl/poll/label/PollLabel';
import { QPollLabel }          from './poll/qpolllabel';
import { PollState }           from '../ddl/poll/location/PollState';
import { QPollState }          from './location/qpollstate';
import { PollTown }            from '../ddl/poll/location/PollTown';
import { QPollTown }           from './location/qpolltown';
import { PollType }            from '../ddl/poll/PollType';
import { QPollType }           from './poll/qpolltype';
import { Position }            from '../ddl/Position';
import { QPosition }           from './qposition';
import { State }               from '../ddl/location/State';
import { QState }              from './location/qstate';
import { Theme }               from '../ddl/poll/Theme';
import { QTheme }              from './qtheme';
import { Town }                from '../ddl/location/Town';
import { QTown }           from './location/qtown';
import { Vote }            from '../ddl/vote/Vote';
import { QVote }           from './vote/qvote';
import { VoteFactor }      from '../ddl/vote/VoteFactor';
import { QVoteFactor }     from './vote/qvotefactor';
import { VoteFactorType }  from '../ddl/vote/VoteFactorType';
import { QVoteFactorType } from './vote/qvotefactortype';

export interface LocalQSchema extends AirportQSchema {

  db: DbSchema;

	Continent: QContinent;
	Country: QCountry;
	County: QCounty;
	Factor: QFactor;
	FactorPosition: QFactorPosition;
	ImmutableRow: QImmutableRow;
	Label: QLabel;
	Poll: QPoll;
	PollContinent: QPollContinent;
	PollCountry: QPollCountry;
	PollCounty: QPollCounty;
	PollFactorPosition: QPollFactorPosition;
	PollLabel: QPollLabel;
	PollState: QPollState;
	PollTown: QPollTown;
	PollType: QPollType;
	Position: QPosition;
	State: QState;
	Theme: QTheme;
	Town: QTown;
	Vote: QVote;
	VoteFactor: QVoteFactor;
	VoteFactorType: QVoteFactorType;

}

const __constructors__ = {
	Continent: Continent,
	Country: Country,
	County: County,
	Factor: Factor,
	FactorPosition: FactorPosition,
	ImmutableRow: ImmutableRow,
	Label: Label,
	Poll: Poll,
	PollContinent: PollContinent,
	PollCountry: PollCountry,
	PollCounty: PollCounty,
	PollFactorPosition: PollFactorPosition,
	PollLabel: PollLabel,
	PollState: PollState,
	PollTown: PollTown,
	PollType: PollType,
	Position: Position,
	State: State,
	Theme: Theme,
	Town: Town,
	Vote: Vote,
	VoteFactor: VoteFactor,
	VoteFactorType: VoteFactorType
};

export const Q_SCHEMA: LocalQSchema = <any>{
	__constructors__,
  domain: 'public',
  name: '@votecube/public-db'
};
export const Q: LocalQSchema = Q_SCHEMA

export function diSet(
	dbEntityId: EntityId
): boolean {
	return dS(Q.__dbSchema__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: EntityId
): boolean {
	return ddS(Q.__dbSchema__, dbEntityId)
}

DI.get(AIR_DB).then((
	airDb
) => {
	airDb.QM[getSchemaName(Q_SCHEMA)] = Q
})
