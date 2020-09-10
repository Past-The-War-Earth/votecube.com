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
import { QActor } from './user/qactor';
import { QAgeSuitableRow } from './infrastructure/row/qagesuitablerow';
import { QApplication } from './user/qapplication';
import { QContinent } from './location/qcontinent';
import { QCountry } from './location/qcountry';
import { QCountryTown } from './location/qcountrytown';
import { QCounty } from './location/qcounty';
import { QCountyTown } from './location/qcountytown';
import { QDesignPattern } from './factor/position/qdesignpattern';
import { QDevice } from './user/qdevice';
import { QEmoji } from './factor/position/qemoji';
import { QFactor } from './factor/qfactor';
import { QFactorOpinionVersion } from './opinion/qfactoropinionversion';
import { QFactorOpinionVersionTranslation } from './opinion/translation/qfactoropinionversiontranslation';
import { QFactorPosition } from './factor/position/qfactorposition';
import { QFactorTranslation } from './factor/qfactortranslation';
import { QImmutableActorRow } from './infrastructure/row/qimmutableactorrow';
import { QImmutableRow } from './infrastructure/row/qimmutablerow';
import { QLanguage } from './infrastructure/qlanguage';
import { QMutableActorRow } from './infrastructure/row/qmutableactorrow';
import { QMutableRow } from './infrastructure/row/qmutablerow';
import { QOutcome } from './poll/revision/qoutcome';
import { QOutcomeOpinionVersion } from './opinion/qoutcomeopinionversion';
import { QOutcomeOpinionVersionTranslation } from './opinion/translation/qoutcomeopinionversiontranslation';
import { QOutcomeTranslation } from './poll/revision/translation/qoutcometranslation';
import { QPoll } from './poll/qpoll';
import { QPollRevision } from './poll/revision/qpollrevision';
import { QPollRevisionFactorPosition } from './poll/revision/qpollrevisionfactorposition';
import { QPollRevisionOpinion } from './opinion/qpollrevisionopinion';
import { QPollRevisionOpinionRating } from './opinion/rating/qpollrevisionopinionrating';
import { QPollRevisionOpinionVersion } from './opinion/qpollrevisionopinionversion';
import { QPollRevisionOpinionVersionTranslation } from './opinion/translation/qpollrevisionopinionversiontranslation';
import { QPollRevisionRating } from './poll/rating/qpollrevisionrating';
import { QPollRevisionTranslation } from './poll/revision/translation/qpollrevisiontranslation';
import { QPollRevisionTranslationRating } from './poll/rating/qpollrevisiontranslationrating';
import { QPollRun } from './poll/run/qpollrun';
import { QPollRunContinent } from './poll/run/location/qpollruncontinent';
import { QPollRunCountry } from './poll/run/location/qpollruncountry';
import { QPollRunCounty } from './poll/run/location/qpollruncounty';
import { QPollRunState } from './poll/run/location/qpollrunstate';
import { QPollRunTown } from './poll/run/location/qpollruntown';
import { QPollType } from './poll/qpolltype';
import { QPosition } from './factor/position/qposition';
import { QPositionOpinionVersion } from './opinion/qpositionopinionversion';
import { QPositionOpinionVersionTranslation } from './opinion/translation/qpositionopinionversiontranslation';
import { QPositionTranslation } from './factor/position/qpositiontranslation';
import { QRating } from './infrastructure/rating/qrating';
import { QRatingSetting } from './infrastructure/rating/qratingsetting';
import { QRatingType } from './infrastructure/rating/qratingtype';
import { QSkin } from './factor/qskin';
import { QState } from './location/qstate';
import { QStateTown } from './location/qstatetown';
import { QSystemGeneratedRow } from './infrastructure/row/qsystemgeneratedrow';
import { QTheme } from './poll/qtheme';
import { QTown } from './location/qtown';
import { QTranslationType } from './infrastructure/qtranslationtype';
import { QUserAccount } from './user/quseraccount';
import { QVote } from './vote/qvote';
import { QVoteFactor } from './vote/qvotefactor';
import { QVoteFactorType } from './vote/qvotefactortype';
import { QVoteType } from './vote/qvotetype';
import { QVoteVersion } from './vote/qvoteversion';
import {
  Actor,
  AgeSuitableRow,
  Application,
  Continent,
  Country,
  CountryTown,
  County,
  CountyTown,
  DesignPattern,
  Device,
  Emoji,
  Factor,
  FactorOpinionVersion,
  FactorOpinionVersionTranslation,
  FactorPosition,
  FactorTranslation,
  ImmutableActorRow,
  ImmutableRow,
  Language,
  MutableActorRow,
  MutableRow,
  Outcome,
  OutcomeOpinionVersion,
  OutcomeOpinionVersionTranslation,
  OutcomeTranslation,
  Poll,
  PollRevision,
  PollRevisionFactorPosition,
  PollRevisionOpinion,
  PollRevisionOpinionRating,
  PollRevisionOpinionVersion,
  PollRevisionOpinionVersionTranslation,
  PollRevisionRating,
  PollRevisionTranslation,
  PollRevisionTranslationRating,
  PollRun,
  PollRunContinent,
  PollRunCountry,
  PollRunCounty,
  PollRunState,
  PollRunTown,
  PollType,
  Position,
  PositionOpinionVersion,
  PositionOpinionVersionTranslation,
  PositionTranslation,
  Rating,
  RatingSetting,
  RatingType,
  Skin,
  State,
  StateTown,
  SystemGeneratedRow,
  Theme,
  Town,
  TranslationType,
  UserAccount,
  Vote,
  VoteFactor,
  VoteFactorType,
  VoteType,
  VoteVersion
} from '../ddl/ddl';

export interface LocalQSchema extends AirportQSchema {

  db: DbSchema;

	Actor: QActor;
	AgeSuitableRow: QAgeSuitableRow;
	Application: QApplication;
	Continent: QContinent;
	Country: QCountry;
	CountryTown: QCountryTown;
	County: QCounty;
	CountyTown: QCountyTown;
	DesignPattern: QDesignPattern;
	Device: QDevice;
	Emoji: QEmoji;
	Factor: QFactor;
	FactorOpinionVersion: QFactorOpinionVersion;
	FactorOpinionVersionTranslation: QFactorOpinionVersionTranslation;
	FactorPosition: QFactorPosition;
	FactorTranslation: QFactorTranslation;
	ImmutableActorRow: QImmutableActorRow;
	ImmutableRow: QImmutableRow;
	Language: QLanguage;
	MutableActorRow: QMutableActorRow;
	MutableRow: QMutableRow;
	Outcome: QOutcome;
	OutcomeOpinionVersion: QOutcomeOpinionVersion;
	OutcomeOpinionVersionTranslation: QOutcomeOpinionVersionTranslation;
	OutcomeTranslation: QOutcomeTranslation;
	Poll: QPoll;
	PollRevision: QPollRevision;
	PollRevisionFactorPosition: QPollRevisionFactorPosition;
	PollRevisionOpinion: QPollRevisionOpinion;
	PollRevisionOpinionRating: QPollRevisionOpinionRating;
	PollRevisionOpinionVersion: QPollRevisionOpinionVersion;
	PollRevisionOpinionVersionTranslation: QPollRevisionOpinionVersionTranslation;
	PollRevisionRating: QPollRevisionRating;
	PollRevisionTranslation: QPollRevisionTranslation;
	PollRevisionTranslationRating: QPollRevisionTranslationRating;
	PollRun: QPollRun;
	PollRunContinent: QPollRunContinent;
	PollRunCountry: QPollRunCountry;
	PollRunCounty: QPollRunCounty;
	PollRunState: QPollRunState;
	PollRunTown: QPollRunTown;
	PollType: QPollType;
	Position: QPosition;
	PositionOpinionVersion: QPositionOpinionVersion;
	PositionOpinionVersionTranslation: QPositionOpinionVersionTranslation;
	PositionTranslation: QPositionTranslation;
	Rating: QRating;
	RatingSetting: QRatingSetting;
	RatingType: QRatingType;
	Skin: QSkin;
	State: QState;
	StateTown: QStateTown;
	SystemGeneratedRow: QSystemGeneratedRow;
	Theme: QTheme;
	Town: QTown;
	TranslationType: QTranslationType;
	UserAccount: QUserAccount;
	Vote: QVote;
	VoteFactor: QVoteFactor;
	VoteFactorType: QVoteFactorType;
	VoteType: QVoteType;
	VoteVersion: QVoteVersion;

}

const __constructors__ = {
	Actor: Actor,
	AgeSuitableRow: AgeSuitableRow,
	Application: Application,
	Continent: Continent,
	Country: Country,
	CountryTown: CountryTown,
	County: County,
	CountyTown: CountyTown,
	DesignPattern: DesignPattern,
	Device: Device,
	Emoji: Emoji,
	Factor: Factor,
	FactorOpinionVersion: FactorOpinionVersion,
	FactorOpinionVersionTranslation: FactorOpinionVersionTranslation,
	FactorPosition: FactorPosition,
	FactorTranslation: FactorTranslation,
	ImmutableActorRow: ImmutableActorRow,
	ImmutableRow: ImmutableRow,
	Language: Language,
	MutableActorRow: MutableActorRow,
	MutableRow: MutableRow,
	Outcome: Outcome,
	OutcomeOpinionVersion: OutcomeOpinionVersion,
	OutcomeOpinionVersionTranslation: OutcomeOpinionVersionTranslation,
	OutcomeTranslation: OutcomeTranslation,
	Poll: Poll,
	PollRevision: PollRevision,
	PollRevisionFactorPosition: PollRevisionFactorPosition,
	PollRevisionOpinion: PollRevisionOpinion,
	PollRevisionOpinionRating: PollRevisionOpinionRating,
	PollRevisionOpinionVersion: PollRevisionOpinionVersion,
	PollRevisionOpinionVersionTranslation: PollRevisionOpinionVersionTranslation,
	PollRevisionRating: PollRevisionRating,
	PollRevisionTranslation: PollRevisionTranslation,
	PollRevisionTranslationRating: PollRevisionTranslationRating,
	PollRun: PollRun,
	PollRunContinent: PollRunContinent,
	PollRunCountry: PollRunCountry,
	PollRunCounty: PollRunCounty,
	PollRunState: PollRunState,
	PollRunTown: PollRunTown,
	PollType: PollType,
	Position: Position,
	PositionOpinionVersion: PositionOpinionVersion,
	PositionOpinionVersionTranslation: PositionOpinionVersionTranslation,
	PositionTranslation: PositionTranslation,
	Rating: Rating,
	RatingSetting: RatingSetting,
	RatingType: RatingType,
	Skin: Skin,
	State: State,
	StateTown: StateTown,
	SystemGeneratedRow: SystemGeneratedRow,
	Theme: Theme,
	Town: Town,
	TranslationType: TranslationType,
	UserAccount: UserAccount,
	Vote: Vote,
	VoteFactor: VoteFactor,
	VoteFactorType: VoteFactorType,
	VoteType: VoteType,
	VoteVersion: VoteVersion
};

export const Q_SCHEMA: LocalQSchema = <any>{
	__constructors__,
  domain: 'public',
  name: '@votecube/relational-db'
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

DI.db().get(AIR_DB).then((
	airDb
) => {
	airDb.QM[getSchemaName(Q_SCHEMA)] = Q
})
