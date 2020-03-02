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
import { ChosenPollRevision } from '../ddl/poll/revision/chosenpollrevision';
import { QChosenPollRevision } from './poll/revision/qchosenpollrevision';
import { ChosenPollRevisionType } from '../ddl/poll/revision/chosenpollrevisiontype';
import { QChosenPollRevisionType } from './poll/revision/qchosenpollrevisiontype';
import { ChosenPollTranslation } from '../ddl/poll/translation/chosenpolltranslation';
import { QChosenPollTranslation } from './poll/translation/qchosenpolltranslation';
import { ChosenPollTranslationType } from '../ddl/poll/translation/chosenpolltranslationtype';
import { QChosenPollTranslationType } from './poll/translation/qchosenpolltranslationtype';
import { ChosenVoteRevision } from '../ddl/vote/chosenvoterevision';
import { QChosenVoteRevision } from './vote/qchosenvoterevision';
import { ChosenVoteRevisionType } from '../ddl/vote/chosenvoterevisiontype';
import { QChosenVoteRevisionType } from './vote/qchosenvoterevisiontype';
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
import { FactorOpinionVersionRatingCount } from '../ddl/opinion/count/factoropinionversionratingcount';
import { QFactorOpinionVersionRatingCount } from './opinion/count/qfactoropinionversionratingcount';
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
import { Label } from '../ddl/poll/revision/label/label';
import { QLabel } from './poll/revision/label/qlabel';
import { LabelTranslation } from '../ddl/poll/revision/label/labeltranslation';
import { QLabelTranslation } from './poll/revision/label/qlabeltranslation';
import { LabelTranslationRating } from '../ddl/poll/revision/label/labeltranslationrating';
import { QLabelTranslationRating } from './poll/revision/label/qlabeltranslationrating';
import { LabelTranslationRatingCount } from '../ddl/poll/revision/label/labeltranslationratingcount';
import { QLabelTranslationRatingCount } from './poll/revision/label/qlabeltranslationratingcount';
import { Language } from '../ddl/infrastructure/language';
import { QLanguage } from './infrastructure/qlanguage';
import { MutableActorRow } from '../ddl/infrastructure/row/mutableactorrow';
import { QMutableActorRow } from './infrastructure/row/qmutableactorrow';
import { MutableRow } from '../ddl/infrastructure/row/mutablerow';
import { QMutableRow } from './infrastructure/row/qmutablerow';
import { Poll } from '../ddl/poll/poll';
import { QPoll } from './poll/qpoll';
import { PollFactorPositionRevision } from '../ddl/poll/revision/structure/pollfactorpositionrevision';
import { QPollFactorPositionRevision } from './poll/revision/structure/qpollfactorpositionrevision';
import { PollFactorRevision } from '../ddl/poll/revision/structure/pollfactorrevision';
import { QPollFactorRevision } from './poll/revision/structure/qpollfactorrevision';
import { PollFactorSkinRevision } from '../ddl/poll/revision/structure/pollfactorskinrevision';
import { QPollFactorSkinRevision } from './poll/revision/structure/qpollfactorskinrevision';
import { PollOpinion } from '../ddl/opinion/pollopinion';
import { QPollOpinion } from './opinion/qpollopinion';
import { PollOpinionRatingCount } from '../ddl/opinion/count/pollopinionratingcount';
import { QPollOpinionRatingCount } from './opinion/count/qpollopinionratingcount';
import { PollOpinionVersion } from '../ddl/opinion/pollopinionversion';
import { QPollOpinionVersion } from './opinion/qpollopinionversion';
import { PollOpinionVersionRating } from '../ddl/opinion/user/pollopinionversionrating';
import { QPollOpinionVersionRating } from './opinion/user/qpollopinionversionrating';
import { PollOpinionVersionRatingCount } from '../ddl/opinion/count/pollopinionversionratingcount';
import { QPollOpinionVersionRatingCount } from './opinion/count/qpollopinionversionratingcount';
import { PollOpinionVersionTranslation } from '../ddl/opinion/translation/pollopinionversiontranslation';
import { QPollOpinionVersionTranslation } from './opinion/translation/qpollopinionversiontranslation';
import { PollOpinionsCount } from '../ddl/poll/count/pollopinionscount';
import { QPollOpinionsCount } from './poll/count/qpollopinionscount';
import { PollOpinionsRatingCount } from '../ddl/poll/count/pollopinionsratingcount';
import { QPollOpinionsRatingCount } from './poll/count/qpollopinionsratingcount';
import { PollPositionRevision } from '../ddl/poll/revision/structure/pollpositionrevision';
import { QPollPositionRevision } from './poll/revision/structure/qpollpositionrevision';
import { PollRatingCount } from '../ddl/poll/count/pollratingcount';
import { QPollRatingCount } from './poll/count/qpollratingcount';
import { PollRevision } from '../ddl/poll/revision/pollrevision';
import { QPollRevision } from './poll/revision/qpollrevision';
import { PollRevisionFactorTranslation } from '../ddl/poll/revision/translation/pollrevisionfactortranslation';
import { QPollRevisionFactorTranslation } from './poll/revision/translation/qpollrevisionfactortranslation';
import { PollRevisionLabel } from '../ddl/poll/revision/pollrevisionlabel';
import { QPollRevisionLabel } from './poll/revision/qpollrevisionlabel';
import { PollRevisionOpinionCount } from '../ddl/poll/revision/count/pollrevisionopinioncount';
import { QPollRevisionOpinionCount } from './poll/revision/count/qpollrevisionopinioncount';
import { PollRevisionOpinionRatingCount } from '../ddl/poll/revision/count/pollrevisionopinionratingcount';
import { QPollRevisionOpinionRatingCount } from './poll/revision/count/qpollrevisionopinionratingcount';
import { PollRevisionPositionTranslation } from '../ddl/poll/revision/translation/pollrevisionpositiontranslation';
import { QPollRevisionPositionTranslation } from './poll/revision/translation/qpollrevisionpositiontranslation';
import { PollRevisionRatingCount } from '../ddl/poll/revision/count/pollrevisionratingcount';
import { QPollRevisionRatingCount } from './poll/revision/count/qpollrevisionratingcount';
import { PollRevisionTranslation } from '../ddl/poll/revision/translation/pollrevisiontranslation';
import { QPollRevisionTranslation } from './poll/revision/translation/qpollrevisiontranslation';
import { PollRevisionTranslationOpinionCount } from '../ddl/poll/revision/translation/count/pollrevisiontranslationopinioncount';
import { QPollRevisionTranslationOpinionCount } from './poll/revision/translation/count/qpollrevisiontranslationopinioncount';
import { PollRevisionTranslationOpinionRatingCount } from '../ddl/poll/revision/translation/count/pollrevisiontranslationopinionratingcount';
import { QPollRevisionTranslationOpinionRatingCount } from './poll/revision/translation/count/qpollrevisiontranslationopinionratingcount';
import { PollRevisionTranslationRatingCount } from '../ddl/poll/revision/translation/count/pollrevisiontranslationratingcount';
import { QPollRevisionTranslationRatingCount } from './poll/revision/translation/count/qpollrevisiontranslationratingcount';
import { PollRevisionTranslationVoteCount } from '../ddl/poll/revision/translation/count/pollrevisiontranslationvotecount';
import { QPollRevisionTranslationVoteCount } from './poll/revision/translation/count/qpollrevisiontranslationvotecount';
import { PollRevisionVoteCount } from '../ddl/poll/revision/count/pollrevisionvotecount';
import { QPollRevisionVoteCount } from './poll/revision/count/qpollrevisionvotecount';
import { PollRun } from '../ddl/poll/run/pollrun';
import { QPollRun } from './poll/run/qpollrun';
import { PollRunContinent } from '../ddl/poll/run/location/pollruncontinent';
import { QPollRunContinent } from './poll/run/location/qpollruncontinent';
import { PollRunCountry } from '../ddl/poll/run/location/pollruncountry';
import { QPollRunCountry } from './poll/run/location/qpollruncountry';
import { PollRunCounty } from '../ddl/poll/run/location/pollruncounty';
import { QPollRunCounty } from './poll/run/location/qpollruncounty';
import { PollRunOpinionCount } from '../ddl/poll/run/count/pollrunopinioncount';
import { QPollRunOpinionCount } from './poll/run/count/qpollrunopinioncount';
import { PollRunOpinionRatingCount } from '../ddl/poll/run/count/pollrunopinionratingcount';
import { QPollRunOpinionRatingCount } from './poll/run/count/qpollrunopinionratingcount';
import { PollRunRatingCount } from '../ddl/poll/run/count/pollrunratingcount';
import { QPollRunRatingCount } from './poll/run/count/qpollrunratingcount';
import { PollRunState } from '../ddl/poll/run/location/pollrunstate';
import { QPollRunState } from './poll/run/location/qpollrunstate';
import { PollRunTown } from '../ddl/poll/run/location/pollruntown';
import { QPollRunTown } from './poll/run/location/qpollruntown';
import { PollRunVoteCount } from '../ddl/poll/run/count/pollrunvotecount';
import { QPollRunVoteCount } from './poll/run/count/qpollrunvotecount';
import { PollType } from '../ddl/poll/polltype';
import { QPollType } from './poll/qpolltype';
import { PollVoteCount } from '../ddl/poll/count/pollvotecount';
import { QPollVoteCount } from './poll/count/qpollvotecount';
import { Position } from '../ddl/factor/position/position';
import { QPosition } from './factor/position/qposition';
import { PositionOpinionVersion } from '../ddl/opinion/positionopinionversion';
import { QPositionOpinionVersion } from './opinion/qpositionopinionversion';
import { PositionOpinionVersionRating } from '../ddl/opinion/user/positionopinionversionrating';
import { QPositionOpinionVersionRating } from './opinion/user/qpositionopinionversionrating';
import { PositionOpinionVersionRatingCount } from '../ddl/opinion/count/positionopinionversionratingcount';
import { QPositionOpinionVersionRatingCount } from './opinion/count/qpositionopinionversionratingcount';
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
	ChosenPollRevision: QChosenPollRevision;
	ChosenPollRevisionType: QChosenPollRevisionType;
	ChosenPollTranslation: QChosenPollTranslation;
	ChosenPollTranslationType: QChosenPollTranslationType;
	ChosenVoteRevision: QChosenVoteRevision;
	ChosenVoteRevisionType: QChosenVoteRevisionType;
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
	FactorOpinionVersionRatingCount: QFactorOpinionVersionRatingCount;
	FactorOpinionVersionTranslation: QFactorOpinionVersionTranslation;
	FactorPosition: QFactorPosition;
	FactorSkin: QFactorSkin;
	FactorTranslation: QFactorTranslation;
	ImmutableActorRow: QImmutableActorRow;
	ImmutableRow: QImmutableRow;
	Label: QLabel;
	LabelTranslation: QLabelTranslation;
	LabelTranslationRating: QLabelTranslationRating;
	LabelTranslationRatingCount: QLabelTranslationRatingCount;
	Language: QLanguage;
	MutableActorRow: QMutableActorRow;
	MutableRow: QMutableRow;
	Poll: QPoll;
	PollFactorPositionRevision: QPollFactorPositionRevision;
	PollFactorRevision: QPollFactorRevision;
	PollFactorSkinRevision: QPollFactorSkinRevision;
	PollOpinion: QPollOpinion;
	PollOpinionRatingCount: QPollOpinionRatingCount;
	PollOpinionVersion: QPollOpinionVersion;
	PollOpinionVersionRating: QPollOpinionVersionRating;
	PollOpinionVersionRatingCount: QPollOpinionVersionRatingCount;
	PollOpinionVersionTranslation: QPollOpinionVersionTranslation;
	PollOpinionsCount: QPollOpinionsCount;
	PollOpinionsRatingCount: QPollOpinionsRatingCount;
	PollPositionRevision: QPollPositionRevision;
	PollRatingCount: QPollRatingCount;
	PollRevision: QPollRevision;
	PollRevisionFactorTranslation: QPollRevisionFactorTranslation;
	PollRevisionLabel: QPollRevisionLabel;
	PollRevisionOpinionCount: QPollRevisionOpinionCount;
	PollRevisionOpinionRatingCount: QPollRevisionOpinionRatingCount;
	PollRevisionPositionTranslation: QPollRevisionPositionTranslation;
	PollRevisionRatingCount: QPollRevisionRatingCount;
	PollRevisionTranslation: QPollRevisionTranslation;
	PollRevisionTranslationOpinionCount: QPollRevisionTranslationOpinionCount;
	PollRevisionTranslationOpinionRatingCount: QPollRevisionTranslationOpinionRatingCount;
	PollRevisionTranslationRatingCount: QPollRevisionTranslationRatingCount;
	PollRevisionTranslationVoteCount: QPollRevisionTranslationVoteCount;
	PollRevisionVoteCount: QPollRevisionVoteCount;
	PollRun: QPollRun;
	PollRunContinent: QPollRunContinent;
	PollRunCountry: QPollRunCountry;
	PollRunCounty: QPollRunCounty;
	PollRunOpinionCount: QPollRunOpinionCount;
	PollRunOpinionRatingCount: QPollRunOpinionRatingCount;
	PollRunRatingCount: QPollRunRatingCount;
	PollRunState: QPollRunState;
	PollRunTown: QPollRunTown;
	PollRunVoteCount: QPollRunVoteCount;
	PollType: QPollType;
	PollVoteCount: QPollVoteCount;
	Position: QPosition;
	PositionOpinionVersion: QPositionOpinionVersion;
	PositionOpinionVersionRating: QPositionOpinionVersionRating;
	PositionOpinionVersionRatingCount: QPositionOpinionVersionRatingCount;
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
	ChosenPollRevision: ChosenPollRevision,
	ChosenPollRevisionType: ChosenPollRevisionType,
	ChosenPollTranslation: ChosenPollTranslation,
	ChosenPollTranslationType: ChosenPollTranslationType,
	ChosenVoteRevision: ChosenVoteRevision,
	ChosenVoteRevisionType: ChosenVoteRevisionType,
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
	FactorOpinionVersionRatingCount: FactorOpinionVersionRatingCount,
	FactorOpinionVersionTranslation: FactorOpinionVersionTranslation,
	FactorPosition: FactorPosition,
	FactorSkin: FactorSkin,
	FactorTranslation: FactorTranslation,
	ImmutableActorRow: ImmutableActorRow,
	ImmutableRow: ImmutableRow,
	Label: Label,
	LabelTranslation: LabelTranslation,
	LabelTranslationRating: LabelTranslationRating,
	LabelTranslationRatingCount: LabelTranslationRatingCount,
	Language: Language,
	MutableActorRow: MutableActorRow,
	MutableRow: MutableRow,
	Poll: Poll,
	PollFactorPositionRevision: PollFactorPositionRevision,
	PollFactorRevision: PollFactorRevision,
	PollFactorSkinRevision: PollFactorSkinRevision,
	PollOpinion: PollOpinion,
	PollOpinionRatingCount: PollOpinionRatingCount,
	PollOpinionVersion: PollOpinionVersion,
	PollOpinionVersionRating: PollOpinionVersionRating,
	PollOpinionVersionRatingCount: PollOpinionVersionRatingCount,
	PollOpinionVersionTranslation: PollOpinionVersionTranslation,
	PollOpinionsCount: PollOpinionsCount,
	PollOpinionsRatingCount: PollOpinionsRatingCount,
	PollPositionRevision: PollPositionRevision,
	PollRatingCount: PollRatingCount,
	PollRevision: PollRevision,
	PollRevisionFactorTranslation: PollRevisionFactorTranslation,
	PollRevisionLabel: PollRevisionLabel,
	PollRevisionOpinionCount: PollRevisionOpinionCount,
	PollRevisionOpinionRatingCount: PollRevisionOpinionRatingCount,
	PollRevisionPositionTranslation: PollRevisionPositionTranslation,
	PollRevisionRatingCount: PollRevisionRatingCount,
	PollRevisionTranslation: PollRevisionTranslation,
	PollRevisionTranslationOpinionCount: PollRevisionTranslationOpinionCount,
	PollRevisionTranslationOpinionRatingCount: PollRevisionTranslationOpinionRatingCount,
	PollRevisionTranslationRatingCount: PollRevisionTranslationRatingCount,
	PollRevisionTranslationVoteCount: PollRevisionTranslationVoteCount,
	PollRevisionVoteCount: PollRevisionVoteCount,
	PollRun: PollRun,
	PollRunContinent: PollRunContinent,
	PollRunCountry: PollRunCountry,
	PollRunCounty: PollRunCounty,
	PollRunOpinionCount: PollRunOpinionCount,
	PollRunOpinionRatingCount: PollRunOpinionRatingCount,
	PollRunRatingCount: PollRunRatingCount,
	PollRunState: PollRunState,
	PollRunTown: PollRunTown,
	PollRunVoteCount: PollRunVoteCount,
	PollType: PollType,
	PollVoteCount: PollVoteCount,
	Position: Position,
	PositionOpinionVersion: PositionOpinionVersion,
	PositionOpinionVersionRating: PositionOpinionVersionRating,
	PositionOpinionVersionRatingCount: PositionOpinionVersionRatingCount,
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
