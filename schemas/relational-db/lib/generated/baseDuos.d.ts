import { IDuo, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Duo } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
import { IActor } from './user/actor';
import { ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor } from './user/qactor';
import { IApplication } from './user/application';
import { ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication } from './user/qapplication';
import { IContinent } from './location/continent';
import { ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent } from './location/qcontinent';
import { ICountry } from './location/country';
import { CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry } from './location/qcountry';
import { ICountryTown } from './location/countrytown';
import { CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown } from './location/qcountrytown';
import { ICounty } from './location/county';
import { CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty } from './location/qcounty';
import { ICountyTown } from './location/countytown';
import { CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown } from './location/qcountytown';
import { IDesignPattern } from './factor/position/designpattern';
import { DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern } from './factor/position/qdesignpattern';
import { IDevice } from './user/device';
import { DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice } from './user/qdevice';
import { IEmoji } from './factor/position/emoji';
import { EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji } from './factor/position/qemoji';
import { IFactor } from './factor/factor';
import { FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor } from './factor/qfactor';
import { IFactorOpinionVersion } from './opinion/factoropinionversion';
import { FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion } from './opinion/qfactoropinionversion';
import { IFactorOpinionVersionRating } from './opinion/user/factoropinionversionrating';
import { FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating } from './opinion/user/qfactoropinionversionrating';
import { IFactorOpinionVersionTranslation } from './opinion/translation/factoropinionversiontranslation';
import { FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation } from './opinion/translation/qfactoropinionversiontranslation';
import { IFactorPosition } from './factor/position/factorposition';
import { FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition } from './factor/position/qfactorposition';
import { IFactorSkin } from './factor/factorskin';
import { FactorSkinESelect, FactorSkinECreateProperties, FactorSkinEUpdateColumns, FactorSkinEUpdateProperties, FactorSkinEId, FactorSkinECascadeGraph, QFactorSkin } from './factor/qfactorskin';
import { IFactorTranslation } from './factor/factortranslation';
import { FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationECascadeGraph, QFactorTranslation } from './factor/qfactortranslation';
import { ILanguage } from './infrastructure/language';
import { LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage } from './infrastructure/qlanguage';
import { IOutcome } from './poll/revision/outcome';
import { OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeECascadeGraph, QOutcome } from './poll/revision/qoutcome';
import { IOutcomeOpinionVersion } from './opinion/outcomeopinionversion';
import { OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionECascadeGraph, QOutcomeOpinionVersion } from './opinion/qoutcomeopinionversion';
import { IOutcomeOpinionVersionTranslation } from './opinion/translation/outcomeopinionversiontranslation';
import { OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationECascadeGraph, QOutcomeOpinionVersionTranslation } from './opinion/translation/qoutcomeopinionversiontranslation';
import { IOutcomeTranslation } from './poll/revision/translation/outcometranslation';
import { OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationECascadeGraph, QOutcomeTranslation } from './poll/revision/translation/qoutcometranslation';
import { IPoll } from './poll/poll';
import { PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll } from './poll/qpoll';
import { IPollRevision } from './poll/revision/pollrevision';
import { PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionECascadeGraph, QPollRevision } from './poll/revision/qpollrevision';
import { IPollRevisionFactorPosition } from './poll/revision/pollrevisionfactorposition';
import { PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionECascadeGraph, QPollRevisionFactorPosition } from './poll/revision/qpollrevisionfactorposition';
import { IPollRevisionFactorTranslation } from './poll/revision/translation/pollrevisionfactortranslation';
import { PollRevisionFactorTranslationESelect, PollRevisionFactorTranslationECreateProperties, PollRevisionFactorTranslationEUpdateColumns, PollRevisionFactorTranslationEUpdateProperties, PollRevisionFactorTranslationEId, PollRevisionFactorTranslationECascadeGraph, QPollRevisionFactorTranslation } from './poll/revision/translation/qpollrevisionfactortranslation';
import { IPollRevisionOpinion } from './opinion/pollrevisionopinion';
import { PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionECascadeGraph, QPollRevisionOpinion } from './opinion/qpollrevisionopinion';
import { IPollRevisionOpinionVersion } from './opinion/pollrevisionopinionversion';
import { PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionECascadeGraph, QPollRevisionOpinionVersion } from './opinion/qpollrevisionopinionversion';
import { IPollRevisionOpinionVersionRating } from './opinion/user/pollrevisionopinionversionrating';
import { PollRevisionOpinionVersionRatingESelect, PollRevisionOpinionVersionRatingECreateProperties, PollRevisionOpinionVersionRatingEUpdateColumns, PollRevisionOpinionVersionRatingEUpdateProperties, PollRevisionOpinionVersionRatingEId, PollRevisionOpinionVersionRatingECascadeGraph, QPollRevisionOpinionVersionRating } from './opinion/user/qpollrevisionopinionversionrating';
import { IPollRevisionOpinionVersionTranslation } from './opinion/translation/pollrevisionopinionversiontranslation';
import { PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationECascadeGraph, QPollRevisionOpinionVersionTranslation } from './opinion/translation/qpollrevisionopinionversiontranslation';
import { IPollRevisionPositionTranslation } from './poll/revision/translation/pollrevisionpositiontranslation';
import { PollRevisionPositionTranslationESelect, PollRevisionPositionTranslationECreateProperties, PollRevisionPositionTranslationEUpdateColumns, PollRevisionPositionTranslationEUpdateProperties, PollRevisionPositionTranslationEId, PollRevisionPositionTranslationECascadeGraph, QPollRevisionPositionTranslation } from './poll/revision/translation/qpollrevisionpositiontranslation';
import { IPollRevisionTranslation } from './poll/revision/translation/pollrevisiontranslation';
import { PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationECascadeGraph, QPollRevisionTranslation } from './poll/revision/translation/qpollrevisiontranslation';
import { IPollRun } from './poll/run/pollrun';
import { PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunECascadeGraph, QPollRun } from './poll/run/qpollrun';
import { IPollRunContinent } from './poll/run/location/pollruncontinent';
import { PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentECascadeGraph, QPollRunContinent } from './poll/run/location/qpollruncontinent';
import { IPollRunCountry } from './poll/run/location/pollruncountry';
import { PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryECascadeGraph, QPollRunCountry } from './poll/run/location/qpollruncountry';
import { IPollRunCounty } from './poll/run/location/pollruncounty';
import { PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyECascadeGraph, QPollRunCounty } from './poll/run/location/qpollruncounty';
import { IPollRunState } from './poll/run/location/pollrunstate';
import { PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateECascadeGraph, QPollRunState } from './poll/run/location/qpollrunstate';
import { IPollRunTown } from './poll/run/location/pollruntown';
import { PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownECascadeGraph, QPollRunTown } from './poll/run/location/qpollruntown';
import { IPollType } from './poll/polltype';
import { PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType } from './poll/qpolltype';
import { IPosition } from './factor/position/position';
import { PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition } from './factor/position/qposition';
import { IPositionOpinionVersion } from './opinion/positionopinionversion';
import { PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion } from './opinion/qpositionopinionversion';
import { IPositionOpinionVersionRating } from './opinion/user/positionopinionversionrating';
import { PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating } from './opinion/user/qpositionopinionversionrating';
import { IPositionOpinionVersionTranslation } from './opinion/translation/positionopinionversiontranslation';
import { PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation } from './opinion/translation/qpositionopinionversiontranslation';
import { IPositionTranslation } from './factor/position/positiontranslation';
import { PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationECascadeGraph, QPositionTranslation } from './factor/position/qpositiontranslation';
import { IRating } from './infrastructure/rating/rating';
import { RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating } from './infrastructure/rating/qrating';
import { IRatingReason } from './infrastructure/rating/ratingreason';
import { RatingReasonESelect, RatingReasonECreateProperties, RatingReasonEUpdateColumns, RatingReasonEUpdateProperties, RatingReasonEId, RatingReasonECascadeGraph, QRatingReason } from './infrastructure/rating/qratingreason';
import { IRatingReasonTranslation } from './infrastructure/rating/ratingreasontranslation';
import { RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation } from './infrastructure/rating/qratingreasontranslation';
import { IRatingSetting } from './infrastructure/rating/ratingsetting';
import { RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting } from './infrastructure/rating/qratingsetting';
import { IRatingTranslation } from './infrastructure/rating/ratingtranslation';
import { RatingTranslationESelect, RatingTranslationECreateProperties, RatingTranslationEUpdateColumns, RatingTranslationEUpdateProperties, RatingTranslationEId, RatingTranslationECascadeGraph, QRatingTranslation } from './infrastructure/rating/qratingtranslation';
import { IRatingType } from './infrastructure/rating/ratingtype';
import { RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType } from './infrastructure/rating/qratingtype';
import { IState } from './location/state';
import { StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateECascadeGraph, QState } from './location/qstate';
import { IStateTown } from './location/statetown';
import { StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown } from './location/qstatetown';
import { ITheme } from './poll/theme';
import { ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme } from './poll/qtheme';
import { ITown } from './location/town';
import { TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown } from './location/qtown';
import { ITranslationType } from './infrastructure/translationtype';
import { TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType } from './infrastructure/qtranslationtype';
import { IUserAccount } from './user/useraccount';
import { UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount } from './user/quseraccount';
import { IUserPoll } from './poll/user/userpoll';
import { UserPollESelect, UserPollECreateProperties, UserPollEUpdateColumns, UserPollEUpdateProperties, UserPollEId, UserPollECascadeGraph, QUserPoll } from './poll/user/quserpoll';
import { IUserPollRating } from './poll/user/userpollrating';
import { UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating } from './poll/user/quserpollrating';
import { IUserPollRevision } from './poll/user/userpollrevision';
import { UserPollRevisionESelect, UserPollRevisionECreateProperties, UserPollRevisionEUpdateColumns, UserPollRevisionEUpdateProperties, UserPollRevisionEId, UserPollRevisionECascadeGraph, QUserPollRevision } from './poll/user/quserpollrevision';
import { IUserPollRevisionRating } from './poll/user/userpollrevisionrating';
import { UserPollRevisionRatingESelect, UserPollRevisionRatingECreateProperties, UserPollRevisionRatingEUpdateColumns, UserPollRevisionRatingEUpdateProperties, UserPollRevisionRatingEId, UserPollRevisionRatingECascadeGraph, QUserPollRevisionRating } from './poll/user/quserpollrevisionrating';
import { IUserPollRevisionTranslation } from './poll/user/userpollrevisiontranslation';
import { UserPollRevisionTranslationESelect, UserPollRevisionTranslationECreateProperties, UserPollRevisionTranslationEUpdateColumns, UserPollRevisionTranslationEUpdateProperties, UserPollRevisionTranslationEId, UserPollRevisionTranslationECascadeGraph, QUserPollRevisionTranslation } from './poll/user/quserpollrevisiontranslation';
import { IUserPollRevisionTranslationRating } from './poll/user/userpollrevisiontranslationrating';
import { UserPollRevisionTranslationRatingESelect, UserPollRevisionTranslationRatingECreateProperties, UserPollRevisionTranslationRatingEUpdateColumns, UserPollRevisionTranslationRatingEUpdateProperties, UserPollRevisionTranslationRatingEId, UserPollRevisionTranslationRatingECascadeGraph, QUserPollRevisionTranslationRating } from './poll/user/quserpollrevisiontranslationrating';
import { IVote } from './vote/vote';
import { VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote } from './vote/qvote';
import { IVoteFactor } from './vote/votefactor';
import { VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor } from './vote/qvotefactor';
import { IVoteFactorType } from './vote/votefactortype';
import { VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType } from './vote/qvotefactortype';
import { IVoteRevision } from './vote/voterevision';
import { VoteRevisionESelect, VoteRevisionECreateProperties, VoteRevisionEUpdateColumns, VoteRevisionEUpdateProperties, VoteRevisionEId, VoteRevisionECascadeGraph, QVoteRevision } from './vote/qvoterevision';
import { IVoteType } from './vote/votetype';
import { VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType } from './vote/qvotetype';
export declare class SQDIDuo<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Duo<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseActorDuo extends IDuo<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor> {
}
export declare class BaseActorDuo extends SQDIDuo<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor> implements IBaseActorDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseApplicationDuo extends IDuo<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication> {
}
export declare class BaseApplicationDuo extends SQDIDuo<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication> implements IBaseApplicationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseContinentDuo extends IDuo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent> {
}
export declare class BaseContinentDuo extends SQDIDuo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent> implements IBaseContinentDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountryDuo extends IDuo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry> {
}
export declare class BaseCountryDuo extends SQDIDuo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry> implements IBaseCountryDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountryTownDuo extends IDuo<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown> {
}
export declare class BaseCountryTownDuo extends SQDIDuo<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown> implements IBaseCountryTownDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountyDuo extends IDuo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty> {
}
export declare class BaseCountyDuo extends SQDIDuo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty> implements IBaseCountyDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountyTownDuo extends IDuo<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown> {
}
export declare class BaseCountyTownDuo extends SQDIDuo<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown> implements IBaseCountyTownDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseDesignPatternDuo extends IDuo<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern> {
}
export declare class BaseDesignPatternDuo extends SQDIDuo<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern> implements IBaseDesignPatternDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseDeviceDuo extends IDuo<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice> {
}
export declare class BaseDeviceDuo extends SQDIDuo<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice> implements IBaseDeviceDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseEmojiDuo extends IDuo<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji> {
}
export declare class BaseEmojiDuo extends SQDIDuo<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji> implements IBaseEmojiDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDuo extends IDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor> {
}
export declare class BaseFactorDuo extends SQDIDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor> implements IBaseFactorDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorOpinionVersionDuo extends IDuo<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion> {
}
export declare class BaseFactorOpinionVersionDuo extends SQDIDuo<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion> implements IBaseFactorOpinionVersionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorOpinionVersionRatingDuo extends IDuo<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating> {
}
export declare class BaseFactorOpinionVersionRatingDuo extends SQDIDuo<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating> implements IBaseFactorOpinionVersionRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorOpinionVersionTranslationDuo extends IDuo<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation> {
}
export declare class BaseFactorOpinionVersionTranslationDuo extends SQDIDuo<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation> implements IBaseFactorOpinionVersionTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorPositionDuo extends IDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition> {
}
export declare class BaseFactorPositionDuo extends SQDIDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition> implements IBaseFactorPositionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorSkinDuo extends IDuo<IFactorSkin, FactorSkinESelect, FactorSkinECreateProperties, FactorSkinEUpdateColumns, FactorSkinEUpdateProperties, FactorSkinEId, FactorSkinECascadeGraph, QFactorSkin> {
}
export declare class BaseFactorSkinDuo extends SQDIDuo<IFactorSkin, FactorSkinESelect, FactorSkinECreateProperties, FactorSkinEUpdateColumns, FactorSkinEUpdateProperties, FactorSkinEId, FactorSkinECascadeGraph, QFactorSkin> implements IBaseFactorSkinDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorTranslationDuo extends IDuo<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationECascadeGraph, QFactorTranslation> {
}
export declare class BaseFactorTranslationDuo extends SQDIDuo<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationECascadeGraph, QFactorTranslation> implements IBaseFactorTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseLanguageDuo extends IDuo<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage> {
}
export declare class BaseLanguageDuo extends SQDIDuo<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage> implements IBaseLanguageDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeDuo extends IDuo<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeECascadeGraph, QOutcome> {
}
export declare class BaseOutcomeDuo extends SQDIDuo<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeECascadeGraph, QOutcome> implements IBaseOutcomeDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeOpinionVersionDuo extends IDuo<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionECascadeGraph, QOutcomeOpinionVersion> {
}
export declare class BaseOutcomeOpinionVersionDuo extends SQDIDuo<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionECascadeGraph, QOutcomeOpinionVersion> implements IBaseOutcomeOpinionVersionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeOpinionVersionTranslationDuo extends IDuo<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationECascadeGraph, QOutcomeOpinionVersionTranslation> {
}
export declare class BaseOutcomeOpinionVersionTranslationDuo extends SQDIDuo<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationECascadeGraph, QOutcomeOpinionVersionTranslation> implements IBaseOutcomeOpinionVersionTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeTranslationDuo extends IDuo<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationECascadeGraph, QOutcomeTranslation> {
}
export declare class BaseOutcomeTranslationDuo extends SQDIDuo<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationECascadeGraph, QOutcomeTranslation> implements IBaseOutcomeTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollDuo extends IDuo<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll> {
}
export declare class BasePollDuo extends SQDIDuo<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll> implements IBasePollDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionDuo extends IDuo<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionECascadeGraph, QPollRevision> {
}
export declare class BasePollRevisionDuo extends SQDIDuo<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionECascadeGraph, QPollRevision> implements IBasePollRevisionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionFactorPositionDuo extends IDuo<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionECascadeGraph, QPollRevisionFactorPosition> {
}
export declare class BasePollRevisionFactorPositionDuo extends SQDIDuo<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionECascadeGraph, QPollRevisionFactorPosition> implements IBasePollRevisionFactorPositionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionFactorTranslationDuo extends IDuo<IPollRevisionFactorTranslation, PollRevisionFactorTranslationESelect, PollRevisionFactorTranslationECreateProperties, PollRevisionFactorTranslationEUpdateColumns, PollRevisionFactorTranslationEUpdateProperties, PollRevisionFactorTranslationEId, PollRevisionFactorTranslationECascadeGraph, QPollRevisionFactorTranslation> {
}
export declare class BasePollRevisionFactorTranslationDuo extends SQDIDuo<IPollRevisionFactorTranslation, PollRevisionFactorTranslationESelect, PollRevisionFactorTranslationECreateProperties, PollRevisionFactorTranslationEUpdateColumns, PollRevisionFactorTranslationEUpdateProperties, PollRevisionFactorTranslationEId, PollRevisionFactorTranslationECascadeGraph, QPollRevisionFactorTranslation> implements IBasePollRevisionFactorTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionDuo extends IDuo<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionECascadeGraph, QPollRevisionOpinion> {
}
export declare class BasePollRevisionOpinionDuo extends SQDIDuo<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionECascadeGraph, QPollRevisionOpinion> implements IBasePollRevisionOpinionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionVersionDuo extends IDuo<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionECascadeGraph, QPollRevisionOpinionVersion> {
}
export declare class BasePollRevisionOpinionVersionDuo extends SQDIDuo<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionECascadeGraph, QPollRevisionOpinionVersion> implements IBasePollRevisionOpinionVersionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionVersionRatingDuo extends IDuo<IPollRevisionOpinionVersionRating, PollRevisionOpinionVersionRatingESelect, PollRevisionOpinionVersionRatingECreateProperties, PollRevisionOpinionVersionRatingEUpdateColumns, PollRevisionOpinionVersionRatingEUpdateProperties, PollRevisionOpinionVersionRatingEId, PollRevisionOpinionVersionRatingECascadeGraph, QPollRevisionOpinionVersionRating> {
}
export declare class BasePollRevisionOpinionVersionRatingDuo extends SQDIDuo<IPollRevisionOpinionVersionRating, PollRevisionOpinionVersionRatingESelect, PollRevisionOpinionVersionRatingECreateProperties, PollRevisionOpinionVersionRatingEUpdateColumns, PollRevisionOpinionVersionRatingEUpdateProperties, PollRevisionOpinionVersionRatingEId, PollRevisionOpinionVersionRatingECascadeGraph, QPollRevisionOpinionVersionRating> implements IBasePollRevisionOpinionVersionRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionVersionTranslationDuo extends IDuo<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationECascadeGraph, QPollRevisionOpinionVersionTranslation> {
}
export declare class BasePollRevisionOpinionVersionTranslationDuo extends SQDIDuo<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationECascadeGraph, QPollRevisionOpinionVersionTranslation> implements IBasePollRevisionOpinionVersionTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionPositionTranslationDuo extends IDuo<IPollRevisionPositionTranslation, PollRevisionPositionTranslationESelect, PollRevisionPositionTranslationECreateProperties, PollRevisionPositionTranslationEUpdateColumns, PollRevisionPositionTranslationEUpdateProperties, PollRevisionPositionTranslationEId, PollRevisionPositionTranslationECascadeGraph, QPollRevisionPositionTranslation> {
}
export declare class BasePollRevisionPositionTranslationDuo extends SQDIDuo<IPollRevisionPositionTranslation, PollRevisionPositionTranslationESelect, PollRevisionPositionTranslationECreateProperties, PollRevisionPositionTranslationEUpdateColumns, PollRevisionPositionTranslationEUpdateProperties, PollRevisionPositionTranslationEId, PollRevisionPositionTranslationECascadeGraph, QPollRevisionPositionTranslation> implements IBasePollRevisionPositionTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionTranslationDuo extends IDuo<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationECascadeGraph, QPollRevisionTranslation> {
}
export declare class BasePollRevisionTranslationDuo extends SQDIDuo<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationECascadeGraph, QPollRevisionTranslation> implements IBasePollRevisionTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunDuo extends IDuo<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunECascadeGraph, QPollRun> {
}
export declare class BasePollRunDuo extends SQDIDuo<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunECascadeGraph, QPollRun> implements IBasePollRunDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunContinentDuo extends IDuo<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentECascadeGraph, QPollRunContinent> {
}
export declare class BasePollRunContinentDuo extends SQDIDuo<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentECascadeGraph, QPollRunContinent> implements IBasePollRunContinentDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunCountryDuo extends IDuo<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryECascadeGraph, QPollRunCountry> {
}
export declare class BasePollRunCountryDuo extends SQDIDuo<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryECascadeGraph, QPollRunCountry> implements IBasePollRunCountryDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunCountyDuo extends IDuo<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyECascadeGraph, QPollRunCounty> {
}
export declare class BasePollRunCountyDuo extends SQDIDuo<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyECascadeGraph, QPollRunCounty> implements IBasePollRunCountyDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunStateDuo extends IDuo<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateECascadeGraph, QPollRunState> {
}
export declare class BasePollRunStateDuo extends SQDIDuo<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateECascadeGraph, QPollRunState> implements IBasePollRunStateDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunTownDuo extends IDuo<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownECascadeGraph, QPollRunTown> {
}
export declare class BasePollRunTownDuo extends SQDIDuo<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownECascadeGraph, QPollRunTown> implements IBasePollRunTownDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollTypeDuo extends IDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType> {
}
export declare class BasePollTypeDuo extends SQDIDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType> implements IBasePollTypeDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionDuo extends IDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition> {
}
export declare class BasePositionDuo extends SQDIDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition> implements IBasePositionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionOpinionVersionDuo extends IDuo<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion> {
}
export declare class BasePositionOpinionVersionDuo extends SQDIDuo<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion> implements IBasePositionOpinionVersionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionOpinionVersionRatingDuo extends IDuo<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating> {
}
export declare class BasePositionOpinionVersionRatingDuo extends SQDIDuo<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating> implements IBasePositionOpinionVersionRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionOpinionVersionTranslationDuo extends IDuo<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation> {
}
export declare class BasePositionOpinionVersionTranslationDuo extends SQDIDuo<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation> implements IBasePositionOpinionVersionTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionTranslationDuo extends IDuo<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationECascadeGraph, QPositionTranslation> {
}
export declare class BasePositionTranslationDuo extends SQDIDuo<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationECascadeGraph, QPositionTranslation> implements IBasePositionTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingDuo extends IDuo<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating> {
}
export declare class BaseRatingDuo extends SQDIDuo<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating> implements IBaseRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingReasonDuo extends IDuo<IRatingReason, RatingReasonESelect, RatingReasonECreateProperties, RatingReasonEUpdateColumns, RatingReasonEUpdateProperties, RatingReasonEId, RatingReasonECascadeGraph, QRatingReason> {
}
export declare class BaseRatingReasonDuo extends SQDIDuo<IRatingReason, RatingReasonESelect, RatingReasonECreateProperties, RatingReasonEUpdateColumns, RatingReasonEUpdateProperties, RatingReasonEId, RatingReasonECascadeGraph, QRatingReason> implements IBaseRatingReasonDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingReasonTranslationDuo extends IDuo<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation> {
}
export declare class BaseRatingReasonTranslationDuo extends SQDIDuo<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation> implements IBaseRatingReasonTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingSettingDuo extends IDuo<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting> {
}
export declare class BaseRatingSettingDuo extends SQDIDuo<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting> implements IBaseRatingSettingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingTranslationDuo extends IDuo<IRatingTranslation, RatingTranslationESelect, RatingTranslationECreateProperties, RatingTranslationEUpdateColumns, RatingTranslationEUpdateProperties, RatingTranslationEId, RatingTranslationECascadeGraph, QRatingTranslation> {
}
export declare class BaseRatingTranslationDuo extends SQDIDuo<IRatingTranslation, RatingTranslationESelect, RatingTranslationECreateProperties, RatingTranslationEUpdateColumns, RatingTranslationEUpdateProperties, RatingTranslationEId, RatingTranslationECascadeGraph, QRatingTranslation> implements IBaseRatingTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingTypeDuo extends IDuo<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType> {
}
export declare class BaseRatingTypeDuo extends SQDIDuo<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType> implements IBaseRatingTypeDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseStateDuo extends IDuo<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateECascadeGraph, QState> {
}
export declare class BaseStateDuo extends SQDIDuo<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateECascadeGraph, QState> implements IBaseStateDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseStateTownDuo extends IDuo<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown> {
}
export declare class BaseStateTownDuo extends SQDIDuo<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown> implements IBaseStateTownDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseThemeDuo extends IDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme> {
}
export declare class BaseThemeDuo extends SQDIDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme> implements IBaseThemeDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTownDuo extends IDuo<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown> {
}
export declare class BaseTownDuo extends SQDIDuo<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown> implements IBaseTownDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTranslationTypeDuo extends IDuo<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType> {
}
export declare class BaseTranslationTypeDuo extends SQDIDuo<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType> implements IBaseTranslationTypeDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserAccountDuo extends IDuo<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount> {
}
export declare class BaseUserAccountDuo extends SQDIDuo<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount> implements IBaseUserAccountDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserPollDuo extends IDuo<IUserPoll, UserPollESelect, UserPollECreateProperties, UserPollEUpdateColumns, UserPollEUpdateProperties, UserPollEId, UserPollECascadeGraph, QUserPoll> {
}
export declare class BaseUserPollDuo extends SQDIDuo<IUserPoll, UserPollESelect, UserPollECreateProperties, UserPollEUpdateColumns, UserPollEUpdateProperties, UserPollEId, UserPollECascadeGraph, QUserPoll> implements IBaseUserPollDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserPollRatingDuo extends IDuo<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating> {
}
export declare class BaseUserPollRatingDuo extends SQDIDuo<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating> implements IBaseUserPollRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserPollRevisionDuo extends IDuo<IUserPollRevision, UserPollRevisionESelect, UserPollRevisionECreateProperties, UserPollRevisionEUpdateColumns, UserPollRevisionEUpdateProperties, UserPollRevisionEId, UserPollRevisionECascadeGraph, QUserPollRevision> {
}
export declare class BaseUserPollRevisionDuo extends SQDIDuo<IUserPollRevision, UserPollRevisionESelect, UserPollRevisionECreateProperties, UserPollRevisionEUpdateColumns, UserPollRevisionEUpdateProperties, UserPollRevisionEId, UserPollRevisionECascadeGraph, QUserPollRevision> implements IBaseUserPollRevisionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserPollRevisionRatingDuo extends IDuo<IUserPollRevisionRating, UserPollRevisionRatingESelect, UserPollRevisionRatingECreateProperties, UserPollRevisionRatingEUpdateColumns, UserPollRevisionRatingEUpdateProperties, UserPollRevisionRatingEId, UserPollRevisionRatingECascadeGraph, QUserPollRevisionRating> {
}
export declare class BaseUserPollRevisionRatingDuo extends SQDIDuo<IUserPollRevisionRating, UserPollRevisionRatingESelect, UserPollRevisionRatingECreateProperties, UserPollRevisionRatingEUpdateColumns, UserPollRevisionRatingEUpdateProperties, UserPollRevisionRatingEId, UserPollRevisionRatingECascadeGraph, QUserPollRevisionRating> implements IBaseUserPollRevisionRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserPollRevisionTranslationDuo extends IDuo<IUserPollRevisionTranslation, UserPollRevisionTranslationESelect, UserPollRevisionTranslationECreateProperties, UserPollRevisionTranslationEUpdateColumns, UserPollRevisionTranslationEUpdateProperties, UserPollRevisionTranslationEId, UserPollRevisionTranslationECascadeGraph, QUserPollRevisionTranslation> {
}
export declare class BaseUserPollRevisionTranslationDuo extends SQDIDuo<IUserPollRevisionTranslation, UserPollRevisionTranslationESelect, UserPollRevisionTranslationECreateProperties, UserPollRevisionTranslationEUpdateColumns, UserPollRevisionTranslationEUpdateProperties, UserPollRevisionTranslationEId, UserPollRevisionTranslationECascadeGraph, QUserPollRevisionTranslation> implements IBaseUserPollRevisionTranslationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserPollRevisionTranslationRatingDuo extends IDuo<IUserPollRevisionTranslationRating, UserPollRevisionTranslationRatingESelect, UserPollRevisionTranslationRatingECreateProperties, UserPollRevisionTranslationRatingEUpdateColumns, UserPollRevisionTranslationRatingEUpdateProperties, UserPollRevisionTranslationRatingEId, UserPollRevisionTranslationRatingECascadeGraph, QUserPollRevisionTranslationRating> {
}
export declare class BaseUserPollRevisionTranslationRatingDuo extends SQDIDuo<IUserPollRevisionTranslationRating, UserPollRevisionTranslationRatingESelect, UserPollRevisionTranslationRatingECreateProperties, UserPollRevisionTranslationRatingEUpdateColumns, UserPollRevisionTranslationRatingEUpdateProperties, UserPollRevisionTranslationRatingEId, UserPollRevisionTranslationRatingECascadeGraph, QUserPollRevisionTranslationRating> implements IBaseUserPollRevisionTranslationRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteDuo extends IDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote> {
}
export declare class BaseVoteDuo extends SQDIDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote> implements IBaseVoteDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteFactorDuo extends IDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor> {
}
export declare class BaseVoteFactorDuo extends SQDIDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor> implements IBaseVoteFactorDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteFactorTypeDuo extends IDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType> {
}
export declare class BaseVoteFactorTypeDuo extends SQDIDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType> implements IBaseVoteFactorTypeDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteRevisionDuo extends IDuo<IVoteRevision, VoteRevisionESelect, VoteRevisionECreateProperties, VoteRevisionEUpdateColumns, VoteRevisionEUpdateProperties, VoteRevisionEId, VoteRevisionECascadeGraph, QVoteRevision> {
}
export declare class BaseVoteRevisionDuo extends SQDIDuo<IVoteRevision, VoteRevisionESelect, VoteRevisionECreateProperties, VoteRevisionEUpdateColumns, VoteRevisionEUpdateProperties, VoteRevisionEId, VoteRevisionECascadeGraph, QVoteRevision> implements IBaseVoteRevisionDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteTypeDuo extends IDuo<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType> {
}
export declare class BaseVoteTypeDuo extends SQDIDuo<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType> implements IBaseVoteTypeDuo {
    static diSet(): boolean;
    constructor();
}
