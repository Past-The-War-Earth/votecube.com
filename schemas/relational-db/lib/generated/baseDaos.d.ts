import { IDao, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Dao } from '@airport/check-in';
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
import { IFactorOpinionVersionTranslation } from './opinion/translation/factoropinionversiontranslation';
import { FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation } from './opinion/translation/qfactoropinionversiontranslation';
import { IFactorPosition } from './factor/position/factorposition';
import { FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition } from './factor/position/qfactorposition';
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
import { IPollRevisionOpinion } from './opinion/pollrevisionopinion';
import { PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionECascadeGraph, QPollRevisionOpinion } from './opinion/qpollrevisionopinion';
import { IPollRevisionOpinionRating } from './opinion/rating/pollrevisionopinionrating';
import { PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingECascadeGraph, QPollRevisionOpinionRating } from './opinion/rating/qpollrevisionopinionrating';
import { IPollRevisionOpinionVersion } from './opinion/pollrevisionopinionversion';
import { PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionECascadeGraph, QPollRevisionOpinionVersion } from './opinion/qpollrevisionopinionversion';
import { IPollRevisionOpinionVersionTranslation } from './opinion/translation/pollrevisionopinionversiontranslation';
import { PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationECascadeGraph, QPollRevisionOpinionVersionTranslation } from './opinion/translation/qpollrevisionopinionversiontranslation';
import { IPollRevisionRating } from './poll/rating/pollrevisionrating';
import { PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingECascadeGraph, QPollRevisionRating } from './poll/rating/qpollrevisionrating';
import { IPollRevisionTranslation } from './poll/revision/translation/pollrevisiontranslation';
import { PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationECascadeGraph, QPollRevisionTranslation } from './poll/revision/translation/qpollrevisiontranslation';
import { IPollRevisionTranslationRating } from './poll/rating/pollrevisiontranslationrating';
import { PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingECascadeGraph, QPollRevisionTranslationRating } from './poll/rating/qpollrevisiontranslationrating';
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
import { IPositionOpinionVersionTranslation } from './opinion/translation/positionopinionversiontranslation';
import { PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation } from './opinion/translation/qpositionopinionversiontranslation';
import { IPositionTranslation } from './factor/position/positiontranslation';
import { PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationECascadeGraph, QPositionTranslation } from './factor/position/qpositiontranslation';
import { IRating } from './infrastructure/rating/rating';
import { RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating } from './infrastructure/rating/qrating';
import { IRatingSetting } from './infrastructure/rating/ratingsetting';
import { RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting } from './infrastructure/rating/qratingsetting';
import { IRatingType } from './infrastructure/rating/ratingtype';
import { RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType } from './infrastructure/rating/qratingtype';
import { ISkin } from './factor/skin';
import { SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinECascadeGraph, QSkin } from './factor/qskin';
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
import { IVote } from './vote/vote';
import { VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote } from './vote/qvote';
import { IVoteFactor } from './vote/votefactor';
import { VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor } from './vote/qvotefactor';
import { IVoteFactorType } from './vote/votefactortype';
import { VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType } from './vote/qvotefactortype';
import { IVoteType } from './vote/votetype';
import { VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType } from './vote/qvotetype';
import { IVoteVersion } from './vote/voteversion';
import { VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionECascadeGraph, QVoteVersion } from './vote/qvoteversion';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseActorDao extends IDao<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor> {
}
export declare class BaseActorDao extends SQDIDao<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor> implements IBaseActorDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseApplicationDao extends IDao<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication> {
}
export declare class BaseApplicationDao extends SQDIDao<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication> implements IBaseApplicationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseContinentDao extends IDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent> {
}
export declare class BaseContinentDao extends SQDIDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent> implements IBaseContinentDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountryDao extends IDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry> {
}
export declare class BaseCountryDao extends SQDIDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry> implements IBaseCountryDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountryTownDao extends IDao<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown> {
}
export declare class BaseCountryTownDao extends SQDIDao<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown> implements IBaseCountryTownDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountyDao extends IDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty> {
}
export declare class BaseCountyDao extends SQDIDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty> implements IBaseCountyDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountyTownDao extends IDao<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown> {
}
export declare class BaseCountyTownDao extends SQDIDao<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown> implements IBaseCountyTownDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseDesignPatternDao extends IDao<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern> {
}
export declare class BaseDesignPatternDao extends SQDIDao<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern> implements IBaseDesignPatternDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseDeviceDao extends IDao<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice> {
}
export declare class BaseDeviceDao extends SQDIDao<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice> implements IBaseDeviceDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseEmojiDao extends IDao<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji> {
}
export declare class BaseEmojiDao extends SQDIDao<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji> implements IBaseEmojiDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDao extends IDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor> {
}
export declare class BaseFactorDao extends SQDIDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor> implements IBaseFactorDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorOpinionVersionDao extends IDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion> {
}
export declare class BaseFactorOpinionVersionDao extends SQDIDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion> implements IBaseFactorOpinionVersionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorOpinionVersionTranslationDao extends IDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation> {
}
export declare class BaseFactorOpinionVersionTranslationDao extends SQDIDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation> implements IBaseFactorOpinionVersionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorPositionDao extends IDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition> {
}
export declare class BaseFactorPositionDao extends SQDIDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition> implements IBaseFactorPositionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorTranslationDao extends IDao<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationECascadeGraph, QFactorTranslation> {
}
export declare class BaseFactorTranslationDao extends SQDIDao<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationECascadeGraph, QFactorTranslation> implements IBaseFactorTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseLanguageDao extends IDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage> {
}
export declare class BaseLanguageDao extends SQDIDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage> implements IBaseLanguageDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeDao extends IDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeECascadeGraph, QOutcome> {
}
export declare class BaseOutcomeDao extends SQDIDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeECascadeGraph, QOutcome> implements IBaseOutcomeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeOpinionVersionDao extends IDao<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionECascadeGraph, QOutcomeOpinionVersion> {
}
export declare class BaseOutcomeOpinionVersionDao extends SQDIDao<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionECascadeGraph, QOutcomeOpinionVersion> implements IBaseOutcomeOpinionVersionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeOpinionVersionTranslationDao extends IDao<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationECascadeGraph, QOutcomeOpinionVersionTranslation> {
}
export declare class BaseOutcomeOpinionVersionTranslationDao extends SQDIDao<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationECascadeGraph, QOutcomeOpinionVersionTranslation> implements IBaseOutcomeOpinionVersionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeTranslationDao extends IDao<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationECascadeGraph, QOutcomeTranslation> {
}
export declare class BaseOutcomeTranslationDao extends SQDIDao<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationECascadeGraph, QOutcomeTranslation> implements IBaseOutcomeTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollDao extends IDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll> {
}
export declare class BasePollDao extends SQDIDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll> implements IBasePollDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionDao extends IDao<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionECascadeGraph, QPollRevision> {
}
export declare class BasePollRevisionDao extends SQDIDao<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionECascadeGraph, QPollRevision> implements IBasePollRevisionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionFactorPositionDao extends IDao<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionECascadeGraph, QPollRevisionFactorPosition> {
}
export declare class BasePollRevisionFactorPositionDao extends SQDIDao<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionECascadeGraph, QPollRevisionFactorPosition> implements IBasePollRevisionFactorPositionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionDao extends IDao<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionECascadeGraph, QPollRevisionOpinion> {
}
export declare class BasePollRevisionOpinionDao extends SQDIDao<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionECascadeGraph, QPollRevisionOpinion> implements IBasePollRevisionOpinionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionRatingDao extends IDao<IPollRevisionOpinionRating, PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingECascadeGraph, QPollRevisionOpinionRating> {
}
export declare class BasePollRevisionOpinionRatingDao extends SQDIDao<IPollRevisionOpinionRating, PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingECascadeGraph, QPollRevisionOpinionRating> implements IBasePollRevisionOpinionRatingDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionVersionDao extends IDao<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionECascadeGraph, QPollRevisionOpinionVersion> {
}
export declare class BasePollRevisionOpinionVersionDao extends SQDIDao<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionECascadeGraph, QPollRevisionOpinionVersion> implements IBasePollRevisionOpinionVersionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionVersionTranslationDao extends IDao<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationECascadeGraph, QPollRevisionOpinionVersionTranslation> {
}
export declare class BasePollRevisionOpinionVersionTranslationDao extends SQDIDao<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationECascadeGraph, QPollRevisionOpinionVersionTranslation> implements IBasePollRevisionOpinionVersionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionRatingDao extends IDao<IPollRevisionRating, PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingECascadeGraph, QPollRevisionRating> {
}
export declare class BasePollRevisionRatingDao extends SQDIDao<IPollRevisionRating, PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingECascadeGraph, QPollRevisionRating> implements IBasePollRevisionRatingDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionTranslationDao extends IDao<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationECascadeGraph, QPollRevisionTranslation> {
}
export declare class BasePollRevisionTranslationDao extends SQDIDao<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationECascadeGraph, QPollRevisionTranslation> implements IBasePollRevisionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionTranslationRatingDao extends IDao<IPollRevisionTranslationRating, PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingECascadeGraph, QPollRevisionTranslationRating> {
}
export declare class BasePollRevisionTranslationRatingDao extends SQDIDao<IPollRevisionTranslationRating, PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingECascadeGraph, QPollRevisionTranslationRating> implements IBasePollRevisionTranslationRatingDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunDao extends IDao<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunECascadeGraph, QPollRun> {
}
export declare class BasePollRunDao extends SQDIDao<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunECascadeGraph, QPollRun> implements IBasePollRunDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunContinentDao extends IDao<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentECascadeGraph, QPollRunContinent> {
}
export declare class BasePollRunContinentDao extends SQDIDao<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentECascadeGraph, QPollRunContinent> implements IBasePollRunContinentDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunCountryDao extends IDao<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryECascadeGraph, QPollRunCountry> {
}
export declare class BasePollRunCountryDao extends SQDIDao<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryECascadeGraph, QPollRunCountry> implements IBasePollRunCountryDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunCountyDao extends IDao<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyECascadeGraph, QPollRunCounty> {
}
export declare class BasePollRunCountyDao extends SQDIDao<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyECascadeGraph, QPollRunCounty> implements IBasePollRunCountyDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunStateDao extends IDao<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateECascadeGraph, QPollRunState> {
}
export declare class BasePollRunStateDao extends SQDIDao<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateECascadeGraph, QPollRunState> implements IBasePollRunStateDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunTownDao extends IDao<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownECascadeGraph, QPollRunTown> {
}
export declare class BasePollRunTownDao extends SQDIDao<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownECascadeGraph, QPollRunTown> implements IBasePollRunTownDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollTypeDao extends IDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType> {
}
export declare class BasePollTypeDao extends SQDIDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType> implements IBasePollTypeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionDao extends IDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition> {
}
export declare class BasePositionDao extends SQDIDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition> implements IBasePositionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionOpinionVersionDao extends IDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion> {
}
export declare class BasePositionOpinionVersionDao extends SQDIDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion> implements IBasePositionOpinionVersionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionOpinionVersionTranslationDao extends IDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation> {
}
export declare class BasePositionOpinionVersionTranslationDao extends SQDIDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation> implements IBasePositionOpinionVersionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionTranslationDao extends IDao<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationECascadeGraph, QPositionTranslation> {
}
export declare class BasePositionTranslationDao extends SQDIDao<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationECascadeGraph, QPositionTranslation> implements IBasePositionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingDao extends IDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating> {
}
export declare class BaseRatingDao extends SQDIDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating> implements IBaseRatingDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingSettingDao extends IDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting> {
}
export declare class BaseRatingSettingDao extends SQDIDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting> implements IBaseRatingSettingDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingTypeDao extends IDao<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType> {
}
export declare class BaseRatingTypeDao extends SQDIDao<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType> implements IBaseRatingTypeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSkinDao extends IDao<ISkin, SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinECascadeGraph, QSkin> {
}
export declare class BaseSkinDao extends SQDIDao<ISkin, SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinECascadeGraph, QSkin> implements IBaseSkinDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseStateDao extends IDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateECascadeGraph, QState> {
}
export declare class BaseStateDao extends SQDIDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateECascadeGraph, QState> implements IBaseStateDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseStateTownDao extends IDao<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown> {
}
export declare class BaseStateTownDao extends SQDIDao<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown> implements IBaseStateTownDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseThemeDao extends IDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme> {
}
export declare class BaseThemeDao extends SQDIDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme> implements IBaseThemeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTownDao extends IDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown> {
}
export declare class BaseTownDao extends SQDIDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown> implements IBaseTownDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTranslationTypeDao extends IDao<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType> {
}
export declare class BaseTranslationTypeDao extends SQDIDao<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType> implements IBaseTranslationTypeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserAccountDao extends IDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount> {
}
export declare class BaseUserAccountDao extends SQDIDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount> implements IBaseUserAccountDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteDao extends IDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote> {
}
export declare class BaseVoteDao extends SQDIDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote> implements IBaseVoteDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteFactorDao extends IDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor> {
}
export declare class BaseVoteFactorDao extends SQDIDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor> implements IBaseVoteFactorDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteFactorTypeDao extends IDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType> {
}
export declare class BaseVoteFactorTypeDao extends SQDIDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType> implements IBaseVoteFactorTypeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteTypeDao extends IDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType> {
}
export declare class BaseVoteTypeDao extends SQDIDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType> implements IBaseVoteTypeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteVersionDao extends IDao<IVoteVersion, VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionECascadeGraph, QVoteVersion> {
}
export declare class BaseVoteVersionDao extends SQDIDao<IVoteVersion, VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionECascadeGraph, QVoteVersion> implements IBaseVoteVersionDao {
    static diSet(): boolean;
    constructor();
}
