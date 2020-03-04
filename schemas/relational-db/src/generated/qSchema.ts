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
import { Actor } from '../ddl/user/actor';
import { QActor } from './user/qactor';
import { Application } from '../ddl/user/application';
import { QApplication } from './user/qapplication';
import { Continent } from '../ddl/location/continent';
import { QContinent } from './location/qcontinent';
import { Country } from '../ddl/location/country';
import { QCountry } from './location/qcountry';
import { CountryTown } from '../ddl/location/countrytown';
import { QCountryTown } from './location/qcountrytown';
import { County } from '../ddl/location/county';
import { QCounty } from './location/qcounty';
import { CountyTown } from '../ddl/location/countytown';
import { QCountyTown } from './location/qcountytown';
import { DesignPattern } from '../ddl/factor/position/designpattern';
import { QDesignPattern } from './factor/position/qdesignpattern';
import { Device } from '../ddl/user/device';
import { QDevice } from './user/qdevice';
import { Emoji } from '../ddl/factor/position/emoji';
import { QEmoji } from './factor/position/qemoji';
import { Factor } from '../ddl/factor/factor';
import { QFactor } from './factor/qfactor';
import { FactorOpinionVersion } from '../ddl/opinion/factoropinionversion';
import { QFactorOpinionVersion } from './opinion/qfactoropinionversion';
import { FactorOpinionVersionRating } from '../ddl/opinion/user/factoropinionversionrating';
import { QFactorOpinionVersionRating } from './opinion/user/qfactoropinionversionrating';
import { FactorOpinionVersionTranslation } from '../ddl/opinion/translation/factoropinionversiontranslation';
import { QFactorOpinionVersionTranslation } from './opinion/translation/qfactoropinionversiontranslation';
import { FactorPosition } from '../ddl/factor/position/factorposition';
import { QFactorPosition } from './factor/position/qfactorposition';
import { FactorSkin } from '../ddl/factor/factorskin';
import { QFactorSkin } from './factor/qfactorskin';
import { FactorTranslation } from '../ddl/factor/factortranslation';
import { QFactorTranslation } from './factor/qfactortranslation';
import { ImmutableActorRow } from '../ddl/infrastructure/row/immutableactorrow';
import { QImmutableActorRow } from './infrastructure/row/qimmutableactorrow';
import { ImmutableRow } from '../ddl/infrastructure/row/immutablerow';
import { QImmutableRow } from './infrastructure/row/qimmutablerow';
import { Language } from '../ddl/infrastructure/language';
import { QLanguage } from './infrastructure/qlanguage';
import { MutableActorRow } from '../ddl/infrastructure/row/mutableactorrow';
import { QMutableActorRow } from './infrastructure/row/qmutableactorrow';
import { MutableRow } from '../ddl/infrastructure/row/mutablerow';
import { QMutableRow } from './infrastructure/row/qmutablerow';
import { Outcome } from '../ddl/poll/revision/outcome';
import { QOutcome } from './poll/revision/qoutcome';
import { OutcomeOpinionVersion } from '../ddl/opinion/outcomeopinionversion';
import { QOutcomeOpinionVersion } from './opinion/qoutcomeopinionversion';
import { OutcomeOpinionVersionTranslation } from '../ddl/opinion/translation/outcomeopinionversiontranslation';
import { QOutcomeOpinionVersionTranslation } from './opinion/translation/qoutcomeopinionversiontranslation';
import { OutcomeTranslation } from '../ddl/poll/revision/translation/outcometranslation';
import { QOutcomeTranslation } from './poll/revision/translation/qoutcometranslation';
import { Poll } from '../ddl/poll/poll';
import { QPoll } from './poll/qpoll';
import { PollRevision } from '../ddl/poll/revision/pollrevision';
import { QPollRevision } from './poll/revision/qpollrevision';
import { PollRevisionFactorPosition } from '../ddl/poll/revision/pollrevisionfactorposition';
import { QPollRevisionFactorPosition } from './poll/revision/qpollrevisionfactorposition';
import { PollRevisionFactorTranslation } from '../ddl/poll/revision/translation/pollrevisionfactortranslation';
import { QPollRevisionFactorTranslation } from './poll/revision/translation/qpollrevisionfactortranslation';
import { PollRevisionOpinion } from '../ddl/opinion/pollrevisionopinion';
import { QPollRevisionOpinion } from './opinion/qpollrevisionopinion';
import { PollRevisionOpinionVersion } from '../ddl/opinion/pollrevisionopinionversion';
import { QPollRevisionOpinionVersion } from './opinion/qpollrevisionopinionversion';
import { PollRevisionOpinionVersionRating } from '../ddl/opinion/user/pollrevisionopinionversionrating';
import { QPollRevisionOpinionVersionRating } from './opinion/user/qpollrevisionopinionversionrating';
import { PollRevisionOpinionVersionTranslation } from '../ddl/opinion/translation/pollrevisionopinionversiontranslation';
import { QPollRevisionOpinionVersionTranslation } from './opinion/translation/qpollrevisionopinionversiontranslation';
import { PollRevisionPositionTranslation } from '../ddl/poll/revision/translation/pollrevisionpositiontranslation';
import { QPollRevisionPositionTranslation } from './poll/revision/translation/qpollrevisionpositiontranslation';
import { PollRevisionTranslation } from '../ddl/poll/revision/translation/pollrevisiontranslation';
import { QPollRevisionTranslation } from './poll/revision/translation/qpollrevisiontranslation';
import { PollRun } from '../ddl/poll/run/pollrun';
import { QPollRun } from './poll/run/qpollrun';
import { PollRunContinent } from '../ddl/poll/run/location/pollruncontinent';
import { QPollRunContinent } from './poll/run/location/qpollruncontinent';
import { PollRunCountry } from '../ddl/poll/run/location/pollruncountry';
import { QPollRunCountry } from './poll/run/location/qpollruncountry';
import { PollRunCounty } from '../ddl/poll/run/location/pollruncounty';
import { QPollRunCounty } from './poll/run/location/qpollruncounty';
import { PollRunState } from '../ddl/poll/run/location/pollrunstate';
import { QPollRunState } from './poll/run/location/qpollrunstate';
import { PollRunTown } from '../ddl/poll/run/location/pollruntown';
import { QPollRunTown } from './poll/run/location/qpollruntown';
import { PollType } from '../ddl/poll/polltype';
import { QPollType } from './poll/qpolltype';
import { Position } from '../ddl/factor/position/position';
import { QPosition } from './factor/position/qposition';
import { PositionOpinionVersion } from '../ddl/opinion/positionopinionversion';
import { QPositionOpinionVersion } from './opinion/qpositionopinionversion';
import { PositionOpinionVersionRating } from '../ddl/opinion/user/positionopinionversionrating';
import { QPositionOpinionVersionRating } from './opinion/user/qpositionopinionversionrating';
import { PositionOpinionVersionTranslation } from '../ddl/opinion/translation/positionopinionversiontranslation';
import { QPositionOpinionVersionTranslation } from './opinion/translation/qpositionopinionversiontranslation';
import { PositionTranslation } from '../ddl/factor/position/positiontranslation';
import { QPositionTranslation } from './factor/position/qpositiontranslation';
import { Rating } from '../ddl/infrastructure/rating/rating';
import { QRating } from './infrastructure/rating/qrating';
import { RatingReason } from '../ddl/infrastructure/rating/ratingreason';
import { QRatingReason } from './infrastructure/rating/qratingreason';
import { RatingReasonTranslation } from '../ddl/infrastructure/rating/ratingreasontranslation';
import { QRatingReasonTranslation } from './infrastructure/rating/qratingreasontranslation';
import { RatingSetting } from '../ddl/infrastructure/rating/ratingsetting';
import { QRatingSetting } from './infrastructure/rating/qratingsetting';
import { RatingTranslation } from '../ddl/infrastructure/rating/ratingtranslation';
import { QRatingTranslation } from './infrastructure/rating/qratingtranslation';
import { RatingType } from '../ddl/infrastructure/rating/ratingtype';
import { QRatingType } from './infrastructure/rating/qratingtype';
import { State } from '../ddl/location/state';
import { QState } from './location/qstate';
import { StateTown } from '../ddl/location/statetown';
import { QStateTown } from './location/qstatetown';
import { SystemGeneratedRow } from '../ddl/infrastructure/row/systemgeneratedrow';
import { QSystemGeneratedRow } from './infrastructure/row/qsystemgeneratedrow';
import { Theme } from '../ddl/poll/theme';
import { QTheme } from './poll/qtheme';
import { Town } from '../ddl/location/town';
import { QTown } from './location/qtown';
import { TranslationType } from '../ddl/infrastructure/translationtype';
import { QTranslationType } from './infrastructure/qtranslationtype';
import { UserAccount } from '../ddl/user/useraccount';
import { QUserAccount } from './user/quseraccount';
import { UserPoll } from '../ddl/poll/user/userpoll';
import { QUserPoll } from './poll/user/quserpoll';
import { UserPollRating } from '../ddl/poll/user/userpollrating';
import { QUserPollRating } from './poll/user/quserpollrating';
import { UserPollRevision } from '../ddl/poll/user/userpollrevision';
import { QUserPollRevision } from './poll/user/quserpollrevision';
import { UserPollRevisionRating } from '../ddl/poll/user/userpollrevisionrating';
import { QUserPollRevisionRating } from './poll/user/quserpollrevisionrating';
import { UserPollRevisionTranslation } from '../ddl/poll/user/userpollrevisiontranslation';
import { QUserPollRevisionTranslation } from './poll/user/quserpollrevisiontranslation';
import { UserPollRevisionTranslationRating } from '../ddl/poll/user/userpollrevisiontranslationrating';
import { QUserPollRevisionTranslationRating } from './poll/user/quserpollrevisiontranslationrating';
import { Vote } from '../ddl/vote/vote';
import { QVote } from './vote/qvote';
import { VoteFactor } from '../ddl/vote/votefactor';
import { QVoteFactor } from './vote/qvotefactor';
import { VoteFactorType } from '../ddl/vote/votefactortype';
import { QVoteFactorType } from './vote/qvotefactortype';
import { VoteRevision } from '../ddl/vote/voterevision';
import { QVoteRevision } from './vote/qvoterevision';
import { VoteType } from '../ddl/vote/votetype';
import { QVoteType } from './vote/qvotetype';

export interface LocalQSchema extends AirportQSchema {

  db: DbSchema;

	Actor: QActor;
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
	FactorOpinionVersionRating: QFactorOpinionVersionRating;
	FactorOpinionVersionTranslation: QFactorOpinionVersionTranslation;
	FactorPosition: QFactorPosition;
	FactorSkin: QFactorSkin;
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
	PollRevisionFactorTranslation: QPollRevisionFactorTranslation;
	PollRevisionOpinion: QPollRevisionOpinion;
	PollRevisionOpinionVersion: QPollRevisionOpinionVersion;
	PollRevisionOpinionVersionRating: QPollRevisionOpinionVersionRating;
	PollRevisionOpinionVersionTranslation: QPollRevisionOpinionVersionTranslation;
	PollRevisionPositionTranslation: QPollRevisionPositionTranslation;
	PollRevisionTranslation: QPollRevisionTranslation;
	PollRun: QPollRun;
	PollRunContinent: QPollRunContinent;
	PollRunCountry: QPollRunCountry;
	PollRunCounty: QPollRunCounty;
	PollRunState: QPollRunState;
	PollRunTown: QPollRunTown;
	PollType: QPollType;
	Position: QPosition;
	PositionOpinionVersion: QPositionOpinionVersion;
	PositionOpinionVersionRating: QPositionOpinionVersionRating;
	PositionOpinionVersionTranslation: QPositionOpinionVersionTranslation;
	PositionTranslation: QPositionTranslation;
	Rating: QRating;
	RatingReason: QRatingReason;
	RatingReasonTranslation: QRatingReasonTranslation;
	RatingSetting: QRatingSetting;
	RatingTranslation: QRatingTranslation;
	RatingType: QRatingType;
	State: QState;
	StateTown: QStateTown;
	SystemGeneratedRow: QSystemGeneratedRow;
	Theme: QTheme;
	Town: QTown;
	TranslationType: QTranslationType;
	UserAccount: QUserAccount;
	UserPoll: QUserPoll;
	UserPollRating: QUserPollRating;
	UserPollRevision: QUserPollRevision;
	UserPollRevisionRating: QUserPollRevisionRating;
	UserPollRevisionTranslation: QUserPollRevisionTranslation;
	UserPollRevisionTranslationRating: QUserPollRevisionTranslationRating;
	Vote: QVote;
	VoteFactor: QVoteFactor;
	VoteFactorType: QVoteFactorType;
	VoteRevision: QVoteRevision;
	VoteType: QVoteType;

}

const __constructors__ = {
	Actor: Actor,
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
	FactorOpinionVersionRating: FactorOpinionVersionRating,
	FactorOpinionVersionTranslation: FactorOpinionVersionTranslation,
	FactorPosition: FactorPosition,
	FactorSkin: FactorSkin,
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
	PollRevisionFactorTranslation: PollRevisionFactorTranslation,
	PollRevisionOpinion: PollRevisionOpinion,
	PollRevisionOpinionVersion: PollRevisionOpinionVersion,
	PollRevisionOpinionVersionRating: PollRevisionOpinionVersionRating,
	PollRevisionOpinionVersionTranslation: PollRevisionOpinionVersionTranslation,
	PollRevisionPositionTranslation: PollRevisionPositionTranslation,
	PollRevisionTranslation: PollRevisionTranslation,
	PollRun: PollRun,
	PollRunContinent: PollRunContinent,
	PollRunCountry: PollRunCountry,
	PollRunCounty: PollRunCounty,
	PollRunState: PollRunState,
	PollRunTown: PollRunTown,
	PollType: PollType,
	Position: Position,
	PositionOpinionVersion: PositionOpinionVersion,
	PositionOpinionVersionRating: PositionOpinionVersionRating,
	PositionOpinionVersionTranslation: PositionOpinionVersionTranslation,
	PositionTranslation: PositionTranslation,
	Rating: Rating,
	RatingReason: RatingReason,
	RatingReasonTranslation: RatingReasonTranslation,
	RatingSetting: RatingSetting,
	RatingTranslation: RatingTranslation,
	RatingType: RatingType,
	State: State,
	StateTown: StateTown,
	SystemGeneratedRow: SystemGeneratedRow,
	Theme: Theme,
	Town: Town,
	TranslationType: TranslationType,
	UserAccount: UserAccount,
	UserPoll: UserPoll,
	UserPollRating: UserPollRating,
	UserPollRevision: UserPollRevision,
	UserPollRevisionRating: UserPollRevisionRating,
	UserPollRevisionTranslation: UserPollRevisionTranslation,
	UserPollRevisionTranslationRating: UserPollRevisionTranslationRating,
	Vote: Vote,
	VoteFactor: VoteFactor,
	VoteFactorType: VoteFactorType,
	VoteRevision: VoteRevision,
	VoteType: VoteType
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
