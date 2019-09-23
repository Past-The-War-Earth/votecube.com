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
import { ChosenPollTranslation } from '../ddl/poll/translation/chosenpolltranslation';
import { QChosenPollTranslation } from './poll/translation/qchosenpolltranslation';
import { ChosenPollTranslationType } from '../ddl/poll/translation/chosenpolltranslationtype';
import { QChosenPollTranslationType } from './poll/translation/qchosenpolltranslationtype';
import { ChosenPollVariation } from '../ddl/poll/variation/chosenpollvariation';
import { QChosenPollVariation } from './poll/variation/qchosenpollvariation';
import { ChosenPollVariationType } from '../ddl/poll/variation/chosenpollvariationtype';
import { QChosenPollVariationType } from './poll/variation/qchosenpollvariationtype';
import { ChosenVoteVariation } from '../ddl/vote/chosenvotevariation';
import { QChosenVoteVariation } from './vote/qchosenvotevariation';
import { ChosenVoteVariationType } from '../ddl/vote/chosenvotevariationtype';
import { QChosenVoteVariationType } from './vote/qchosenvotevariationtype';
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
import { FactorSkinVariation } from '../ddl/factor/factorskinvariation';
import { QFactorSkinVariation } from './factor/qfactorskinvariation';
import { FactorVariation } from '../ddl/factor/factorvariation';
import { QFactorVariation } from './factor/qfactorvariation';
import { FactorVariationTranslation } from '../ddl/factor/factorvariationtranslation';
import { QFactorVariationTranslation } from './factor/qfactorvariationtranslation';
import { ImmutableActorRow } from '../ddl/infrastructure/immutableactorrow';
import { QImmutableActorRow } from './infrastructure/qimmutableactorrow';
import { ImmutableRow } from '../ddl/infrastructure/immutablerow';
import { QImmutableRow } from './infrastructure/qimmutablerow';
import { Label } from '../ddl/poll/variation/label/label';
import { QLabel } from './poll/variation/label/qlabel';
import { LabelTranslation } from '../ddl/poll/variation/label/labeltranslation';
import { QLabelTranslation } from './poll/variation/label/qlabeltranslation';
import { LabelTranslationRating } from '../ddl/poll/variation/label/labeltranslationrating';
import { QLabelTranslationRating } from './poll/variation/label/qlabeltranslationrating';
import { LabelTranslationRatingCount } from '../ddl/poll/variation/label/labeltranslationratingcount';
import { QLabelTranslationRatingCount } from './poll/variation/label/qlabeltranslationratingcount';
import { Language } from '../ddl/infrastructure/language';
import { QLanguage } from './infrastructure/qlanguage';
import { MutableActorRow } from '../ddl/infrastructure/mutableactorrow';
import { QMutableActorRow } from './infrastructure/qmutableactorrow';
import { MutableRow } from '../ddl/infrastructure/mutablerow';
import { QMutableRow } from './infrastructure/qmutablerow';
import { Poll } from '../ddl/poll/poll';
import { QPoll } from './poll/qpoll';
import { PollFactorPositionVariation } from '../ddl/poll/variation/structure/pollfactorpositionvariation';
import { QPollFactorPositionVariation } from './poll/variation/structure/qpollfactorpositionvariation';
import { PollFactorSkinVariation } from '../ddl/poll/variation/structure/pollfactorskinvariation';
import { QPollFactorSkinVariation } from './poll/variation/structure/qpollfactorskinvariation';
import { PollFactorVariation } from '../ddl/poll/variation/structure/pollfactorvariation';
import { QPollFactorVariation } from './poll/variation/structure/qpollfactorvariation';
import { PollLTFContinent } from '../ddl/poll/locationtimeframe/location/pollltfcontinent';
import { QPollLTFContinent } from './poll/locationtimeframe/location/qpollltfcontinent';
import { PollLTFCountry } from '../ddl/poll/locationtimeframe/location/pollltfcountry';
import { QPollLTFCountry } from './poll/locationtimeframe/location/qpollltfcountry';
import { PollLTFCounty } from '../ddl/poll/locationtimeframe/location/pollltfcounty';
import { QPollLTFCounty } from './poll/locationtimeframe/location/qpollltfcounty';
import { PollLTFOpinionCount } from '../ddl/poll/locationtimeframe/count/pollltfopinioncount';
import { QPollLTFOpinionCount } from './poll/locationtimeframe/count/qpollltfopinioncount';
import { PollLTFOpinionRatingCount } from '../ddl/poll/locationtimeframe/count/pollltfopinionratingcount';
import { QPollLTFOpinionRatingCount } from './poll/locationtimeframe/count/qpollltfopinionratingcount';
import { PollLTFRatingCount } from '../ddl/poll/locationtimeframe/count/pollltfratingcount';
import { QPollLTFRatingCount } from './poll/locationtimeframe/count/qpollltfratingcount';
import { PollLTFState } from '../ddl/poll/locationtimeframe/location/pollltfstate';
import { QPollLTFState } from './poll/locationtimeframe/location/qpollltfstate';
import { PollLTFTown } from '../ddl/poll/locationtimeframe/location/pollltftown';
import { QPollLTFTown } from './poll/locationtimeframe/location/qpollltftown';
import { PollLTFVoteCount } from '../ddl/poll/locationtimeframe/count/pollltfvotecount';
import { QPollLTFVoteCount } from './poll/locationtimeframe/count/qpollltfvotecount';
import { PollLocationTimeFrame } from '../ddl/poll/locationtimeframe/polllocationtimeframe';
import { QPollLocationTimeFrame } from './poll/locationtimeframe/qpolllocationtimeframe';
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
import { PollPositionVariation } from '../ddl/poll/variation/structure/pollpositionvariation';
import { QPollPositionVariation } from './poll/variation/structure/qpollpositionvariation';
import { PollRatingCount } from '../ddl/poll/count/pollratingcount';
import { QPollRatingCount } from './poll/count/qpollratingcount';
import { PollType } from '../ddl/poll/polltype';
import { QPollType } from './poll/qpolltype';
import { PollVariation } from '../ddl/poll/variation/pollvariation';
import { QPollVariation } from './poll/variation/qpollvariation';
import { PollVariationFactorTranslation } from '../ddl/poll/variation/translation/pollvariationfactortranslation';
import { QPollVariationFactorTranslation } from './poll/variation/translation/qpollvariationfactortranslation';
import { PollVariationLabel } from '../ddl/poll/variation/pollvariationlabel';
import { QPollVariationLabel } from './poll/variation/qpollvariationlabel';
import { PollVariationOpinionCount } from '../ddl/poll/variation/count/pollvariationopinioncount';
import { QPollVariationOpinionCount } from './poll/variation/count/qpollvariationopinioncount';
import { PollVariationOpinionRatingCount } from '../ddl/poll/variation/count/pollvariationopinionratingcount';
import { QPollVariationOpinionRatingCount } from './poll/variation/count/qpollvariationopinionratingcount';
import { PollVariationPositionTranslation } from '../ddl/poll/variation/translation/pollvariationpositiontranslation';
import { QPollVariationPositionTranslation } from './poll/variation/translation/qpollvariationpositiontranslation';
import { PollVariationRatingCount } from '../ddl/poll/variation/count/pollvariationratingcount';
import { QPollVariationRatingCount } from './poll/variation/count/qpollvariationratingcount';
import { PollVariationTranslation } from '../ddl/poll/variation/translation/pollvariationtranslation';
import { QPollVariationTranslation } from './poll/variation/translation/qpollvariationtranslation';
import { PollVariationTranslationOpinionCount } from '../ddl/poll/variation/translation/count/pollvariationtranslationopinioncount';
import { QPollVariationTranslationOpinionCount } from './poll/variation/translation/count/qpollvariationtranslationopinioncount';
import { PollVariationTranslationOpinionRatingCount } from '../ddl/poll/variation/translation/count/pollvariationtranslationopinionratingcount';
import { QPollVariationTranslationOpinionRatingCount } from './poll/variation/translation/count/qpollvariationtranslationopinionratingcount';
import { PollVariationTranslationRatingCount } from '../ddl/poll/variation/translation/count/pollvariationtranslationratingcount';
import { QPollVariationTranslationRatingCount } from './poll/variation/translation/count/qpollvariationtranslationratingcount';
import { PollVariationTranslationVoteCount } from '../ddl/poll/variation/translation/count/pollvariationtranslationvotecount';
import { QPollVariationTranslationVoteCount } from './poll/variation/translation/count/qpollvariationtranslationvotecount';
import { PollVariationVoteCount } from '../ddl/poll/variation/count/pollvariationvotecount';
import { QPollVariationVoteCount } from './poll/variation/count/qpollvariationvotecount';
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
import { PositionVariation } from '../ddl/factor/position/positionvariation';
import { QPositionVariation } from './factor/position/qpositionvariation';
import { PositionVariationTranslation } from '../ddl/factor/position/positionvariationtranslation';
import { QPositionVariationTranslation } from './factor/position/qpositionvariationtranslation';
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
import { SystemGeneratedRow } from '../ddl/infrastructure/systemgeneratedrow';
import { QSystemGeneratedRow } from './infrastructure/qsystemgeneratedrow';
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
import { UserPollVariation } from '../ddl/poll/user/userpollvariation';
import { QUserPollVariation } from './poll/user/quserpollvariation';
import { UserPollVariationRating } from '../ddl/poll/user/userpollvariationrating';
import { QUserPollVariationRating } from './poll/user/quserpollvariationrating';
import { UserPollVariationTranslation } from '../ddl/poll/user/userpollvariationtranslation';
import { QUserPollVariationTranslation } from './poll/user/quserpollvariationtranslation';
import { UserPollVariationTranslationRating } from '../ddl/poll/user/userpollvariationtranslationrating';
import { QUserPollVariationTranslationRating } from './poll/user/quserpollvariationtranslationrating';
import { Vote } from '../ddl/vote/vote';
import { QVote } from './vote/qvote';
import { VoteFactor } from '../ddl/vote/votefactor';
import { QVoteFactor } from './vote/qvotefactor';
import { VoteFactorType } from '../ddl/vote/votefactortype';
import { QVoteFactorType } from './vote/qvotefactortype';
import { VoteType } from '../ddl/vote/votetype';
import { QVoteType } from './vote/qvotetype';
import { VoteVariation } from '../ddl/vote/votevariation';
import { QVoteVariation } from './vote/qvotevariation';

export interface LocalQSchema extends AirportQSchema {

  db: DbSchema;

	Actor: QActor;
	Application: QApplication;
	ChosenPollTranslation: QChosenPollTranslation;
	ChosenPollTranslationType: QChosenPollTranslationType;
	ChosenPollVariation: QChosenPollVariation;
	ChosenPollVariationType: QChosenPollVariationType;
	ChosenVoteVariation: QChosenVoteVariation;
	ChosenVoteVariationType: QChosenVoteVariationType;
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
	FactorSkinVariation: QFactorSkinVariation;
	FactorVariation: QFactorVariation;
	FactorVariationTranslation: QFactorVariationTranslation;
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
	PollFactorPositionVariation: QPollFactorPositionVariation;
	PollFactorSkinVariation: QPollFactorSkinVariation;
	PollFactorVariation: QPollFactorVariation;
	PollLTFContinent: QPollLTFContinent;
	PollLTFCountry: QPollLTFCountry;
	PollLTFCounty: QPollLTFCounty;
	PollLTFOpinionCount: QPollLTFOpinionCount;
	PollLTFOpinionRatingCount: QPollLTFOpinionRatingCount;
	PollLTFRatingCount: QPollLTFRatingCount;
	PollLTFState: QPollLTFState;
	PollLTFTown: QPollLTFTown;
	PollLTFVoteCount: QPollLTFVoteCount;
	PollLocationTimeFrame: QPollLocationTimeFrame;
	PollOpinion: QPollOpinion;
	PollOpinionRatingCount: QPollOpinionRatingCount;
	PollOpinionVersion: QPollOpinionVersion;
	PollOpinionVersionRating: QPollOpinionVersionRating;
	PollOpinionVersionRatingCount: QPollOpinionVersionRatingCount;
	PollOpinionVersionTranslation: QPollOpinionVersionTranslation;
	PollOpinionsCount: QPollOpinionsCount;
	PollOpinionsRatingCount: QPollOpinionsRatingCount;
	PollPositionVariation: QPollPositionVariation;
	PollRatingCount: QPollRatingCount;
	PollType: QPollType;
	PollVariation: QPollVariation;
	PollVariationFactorTranslation: QPollVariationFactorTranslation;
	PollVariationLabel: QPollVariationLabel;
	PollVariationOpinionCount: QPollVariationOpinionCount;
	PollVariationOpinionRatingCount: QPollVariationOpinionRatingCount;
	PollVariationPositionTranslation: QPollVariationPositionTranslation;
	PollVariationRatingCount: QPollVariationRatingCount;
	PollVariationTranslation: QPollVariationTranslation;
	PollVariationTranslationOpinionCount: QPollVariationTranslationOpinionCount;
	PollVariationTranslationOpinionRatingCount: QPollVariationTranslationOpinionRatingCount;
	PollVariationTranslationRatingCount: QPollVariationTranslationRatingCount;
	PollVariationTranslationVoteCount: QPollVariationTranslationVoteCount;
	PollVariationVoteCount: QPollVariationVoteCount;
	PollVoteCount: QPollVoteCount;
	Position: QPosition;
	PositionOpinionVersion: QPositionOpinionVersion;
	PositionOpinionVersionRating: QPositionOpinionVersionRating;
	PositionOpinionVersionRatingCount: QPositionOpinionVersionRatingCount;
	PositionOpinionVersionTranslation: QPositionOpinionVersionTranslation;
	PositionVariation: QPositionVariation;
	PositionVariationTranslation: QPositionVariationTranslation;
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
	UserPollVariation: QUserPollVariation;
	UserPollVariationRating: QUserPollVariationRating;
	UserPollVariationTranslation: QUserPollVariationTranslation;
	UserPollVariationTranslationRating: QUserPollVariationTranslationRating;
	Vote: QVote;
	VoteFactor: QVoteFactor;
	VoteFactorType: QVoteFactorType;
	VoteType: QVoteType;
	VoteVariation: QVoteVariation;

}

const __constructors__ = {
	Actor: Actor,
	Application: Application,
	ChosenPollTranslation: ChosenPollTranslation,
	ChosenPollTranslationType: ChosenPollTranslationType,
	ChosenPollVariation: ChosenPollVariation,
	ChosenPollVariationType: ChosenPollVariationType,
	ChosenVoteVariation: ChosenVoteVariation,
	ChosenVoteVariationType: ChosenVoteVariationType,
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
	FactorSkinVariation: FactorSkinVariation,
	FactorVariation: FactorVariation,
	FactorVariationTranslation: FactorVariationTranslation,
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
	PollFactorPositionVariation: PollFactorPositionVariation,
	PollFactorSkinVariation: PollFactorSkinVariation,
	PollFactorVariation: PollFactorVariation,
	PollLTFContinent: PollLTFContinent,
	PollLTFCountry: PollLTFCountry,
	PollLTFCounty: PollLTFCounty,
	PollLTFOpinionCount: PollLTFOpinionCount,
	PollLTFOpinionRatingCount: PollLTFOpinionRatingCount,
	PollLTFRatingCount: PollLTFRatingCount,
	PollLTFState: PollLTFState,
	PollLTFTown: PollLTFTown,
	PollLTFVoteCount: PollLTFVoteCount,
	PollLocationTimeFrame: PollLocationTimeFrame,
	PollOpinion: PollOpinion,
	PollOpinionRatingCount: PollOpinionRatingCount,
	PollOpinionVersion: PollOpinionVersion,
	PollOpinionVersionRating: PollOpinionVersionRating,
	PollOpinionVersionRatingCount: PollOpinionVersionRatingCount,
	PollOpinionVersionTranslation: PollOpinionVersionTranslation,
	PollOpinionsCount: PollOpinionsCount,
	PollOpinionsRatingCount: PollOpinionsRatingCount,
	PollPositionVariation: PollPositionVariation,
	PollRatingCount: PollRatingCount,
	PollType: PollType,
	PollVariation: PollVariation,
	PollVariationFactorTranslation: PollVariationFactorTranslation,
	PollVariationLabel: PollVariationLabel,
	PollVariationOpinionCount: PollVariationOpinionCount,
	PollVariationOpinionRatingCount: PollVariationOpinionRatingCount,
	PollVariationPositionTranslation: PollVariationPositionTranslation,
	PollVariationRatingCount: PollVariationRatingCount,
	PollVariationTranslation: PollVariationTranslation,
	PollVariationTranslationOpinionCount: PollVariationTranslationOpinionCount,
	PollVariationTranslationOpinionRatingCount: PollVariationTranslationOpinionRatingCount,
	PollVariationTranslationRatingCount: PollVariationTranslationRatingCount,
	PollVariationTranslationVoteCount: PollVariationTranslationVoteCount,
	PollVariationVoteCount: PollVariationVoteCount,
	PollVoteCount: PollVoteCount,
	Position: Position,
	PositionOpinionVersion: PositionOpinionVersion,
	PositionOpinionVersionRating: PositionOpinionVersionRating,
	PositionOpinionVersionRatingCount: PositionOpinionVersionRatingCount,
	PositionOpinionVersionTranslation: PositionOpinionVersionTranslation,
	PositionVariation: PositionVariation,
	PositionVariationTranslation: PositionVariationTranslation,
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
	UserPollVariation: UserPollVariation,
	UserPollVariationRating: UserPollVariationRating,
	UserPollVariationTranslation: UserPollVariationTranslation,
	UserPollVariationTranslationRating: UserPollVariationTranslationRating,
	Vote: Vote,
	VoteFactor: VoteFactor,
	VoteFactorType: VoteFactorType,
	VoteType: VoteType,
	VoteVariation: VoteVariation
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
