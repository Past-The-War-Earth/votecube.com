import { IDao, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Dao } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
import { IActor } from './user/actor';
import { ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorGraph, QActor } from './user/qactor';
import { IApplication } from './user/application';
import { ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationGraph, QApplication } from './user/qapplication';
import { IContinent } from './location/continent';
import { ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentGraph, QContinent } from './location/qcontinent';
import { ICountry } from './location/country';
import { CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryGraph, QCountry } from './location/qcountry';
import { ICountryTown } from './location/countrytown';
import { CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownGraph, QCountryTown } from './location/qcountrytown';
import { ICounty } from './location/county';
import { CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyGraph, QCounty } from './location/qcounty';
import { ICountyTown } from './location/countytown';
import { CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownGraph, QCountyTown } from './location/qcountytown';
import { IDesignPattern } from './factor/position/designpattern';
import { DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternGraph, QDesignPattern } from './factor/position/qdesignpattern';
import { IDevice } from './user/device';
import { DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceGraph, QDevice } from './user/qdevice';
import { IEmoji } from './factor/position/emoji';
import { EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiGraph, QEmoji } from './factor/position/qemoji';
import { IFactor } from './factor/factor';
import { FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor } from './factor/qfactor';
import { IFactorOpinionVersion } from './opinion/factoropinionversion';
import { FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionGraph, QFactorOpinionVersion } from './opinion/qfactoropinionversion';
import { IFactorOpinionVersionTranslation } from './opinion/translation/factoropinionversiontranslation';
import { FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationGraph, QFactorOpinionVersionTranslation } from './opinion/translation/qfactoropinionversiontranslation';
import { IFactorPosition } from './factor/position/factorposition';
import { FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition } from './factor/position/qfactorposition';
import { IFactorTranslation } from './factor/factortranslation';
import { FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationGraph, QFactorTranslation } from './factor/qfactortranslation';
import { ILanguage } from './infrastructure/language';
import { LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageGraph, QLanguage } from './infrastructure/qlanguage';
import { IOutcome } from './poll/revision/outcome';
import { OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome } from './poll/revision/qoutcome';
import { IOutcomeOpinionVersion } from './opinion/outcomeopinionversion';
import { OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionGraph, QOutcomeOpinionVersion } from './opinion/qoutcomeopinionversion';
import { IOutcomeOpinionVersionTranslation } from './opinion/translation/outcomeopinionversiontranslation';
import { OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationGraph, QOutcomeOpinionVersionTranslation } from './opinion/translation/qoutcomeopinionversiontranslation';
import { IOutcomeTranslation } from './poll/revision/translation/outcometranslation';
import { OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationGraph, QOutcomeTranslation } from './poll/revision/translation/qoutcometranslation';
import { IPoll } from './poll/poll';
import { PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollGraph, QPoll } from './poll/qpoll';
import { IPollRevision } from './poll/revision/pollrevision';
import { PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionGraph, QPollRevision } from './poll/revision/qpollrevision';
import { IPollRevisionFactorPosition } from './poll/revision/pollrevisionfactorposition';
import { PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionGraph, QPollRevisionFactorPosition } from './poll/revision/qpollrevisionfactorposition';
import { IPollRevisionOpinion } from './opinion/pollrevisionopinion';
import { PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionGraph, QPollRevisionOpinion } from './opinion/qpollrevisionopinion';
import { IPollRevisionOpinionRating } from './opinion/rating/pollrevisionopinionrating';
import { PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingGraph, QPollRevisionOpinionRating } from './opinion/rating/qpollrevisionopinionrating';
import { IPollRevisionOpinionVersion } from './opinion/pollrevisionopinionversion';
import { PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionGraph, QPollRevisionOpinionVersion } from './opinion/qpollrevisionopinionversion';
import { IPollRevisionOpinionVersionTranslation } from './opinion/translation/pollrevisionopinionversiontranslation';
import { PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationGraph, QPollRevisionOpinionVersionTranslation } from './opinion/translation/qpollrevisionopinionversiontranslation';
import { IPollRevisionRating } from './poll/rating/pollrevisionrating';
import { PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingGraph, QPollRevisionRating } from './poll/rating/qpollrevisionrating';
import { IPollRevisionTranslation } from './poll/revision/translation/pollrevisiontranslation';
import { PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationGraph, QPollRevisionTranslation } from './poll/revision/translation/qpollrevisiontranslation';
import { IPollRevisionTranslationRating } from './poll/rating/pollrevisiontranslationrating';
import { PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingGraph, QPollRevisionTranslationRating } from './poll/rating/qpollrevisiontranslationrating';
import { IPollRun } from './poll/run/pollrun';
import { PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunGraph, QPollRun } from './poll/run/qpollrun';
import { IPollRunContinent } from './poll/run/location/pollruncontinent';
import { PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentGraph, QPollRunContinent } from './poll/run/location/qpollruncontinent';
import { IPollRunCountry } from './poll/run/location/pollruncountry';
import { PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryGraph, QPollRunCountry } from './poll/run/location/qpollruncountry';
import { IPollRunCounty } from './poll/run/location/pollruncounty';
import { PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyGraph, QPollRunCounty } from './poll/run/location/qpollruncounty';
import { IPollRunState } from './poll/run/location/pollrunstate';
import { PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateGraph, QPollRunState } from './poll/run/location/qpollrunstate';
import { IPollRunTown } from './poll/run/location/pollruntown';
import { PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownGraph, QPollRunTown } from './poll/run/location/qpollruntown';
import { IPollType } from './poll/polltype';
import { PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeGraph, QPollType } from './poll/qpolltype';
import { IPosition } from './factor/position/position';
import { PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition } from './factor/position/qposition';
import { IPositionOpinionVersion } from './opinion/positionopinionversion';
import { PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionGraph, QPositionOpinionVersion } from './opinion/qpositionopinionversion';
import { IPositionOpinionVersionTranslation } from './opinion/translation/positionopinionversiontranslation';
import { PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationGraph, QPositionOpinionVersionTranslation } from './opinion/translation/qpositionopinionversiontranslation';
import { IPositionTranslation } from './factor/position/positiontranslation';
import { PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationGraph, QPositionTranslation } from './factor/position/qpositiontranslation';
import { IRating } from './infrastructure/rating/rating';
import { RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingGraph, QRating } from './infrastructure/rating/qrating';
import { IRatingSetting } from './infrastructure/rating/ratingsetting';
import { RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingGraph, QRatingSetting } from './infrastructure/rating/qratingsetting';
import { IRatingType } from './infrastructure/rating/ratingtype';
import { RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeGraph, QRatingType } from './infrastructure/rating/qratingtype';
import { ISkin } from './factor/skin';
import { SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinGraph, QSkin } from './factor/qskin';
import { IState } from './location/state';
import { StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateGraph, QState } from './location/qstate';
import { IStateTown } from './location/statetown';
import { StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownGraph, QStateTown } from './location/qstatetown';
import { ITheme } from './poll/theme';
import { ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme } from './poll/qtheme';
import { ITown } from './location/town';
import { TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownGraph, QTown } from './location/qtown';
import { ITranslationType } from './infrastructure/translationtype';
import { TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeGraph, QTranslationType } from './infrastructure/qtranslationtype';
import { IUserAccount } from './user/useraccount';
import { UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount } from './user/quseraccount';
import { IVote } from './vote/vote';
import { VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteGraph, QVote } from './vote/qvote';
import { IVoteFactor } from './vote/votefactor';
import { VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorGraph, QVoteFactor } from './vote/qvotefactor';
import { IVoteFactorType } from './vote/votefactortype';
import { VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeGraph, QVoteFactorType } from './vote/qvotefactortype';
import { IVoteType } from './vote/votetype';
import { VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeGraph, QVoteType } from './vote/qvotetype';
import { IVoteVersion } from './vote/voteversion';
import { VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionGraph, QVoteVersion } from './vote/qvoteversion';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseActorDao extends IDao<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorGraph, QActor> {
}
export declare class BaseActorDao extends SQDIDao<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorGraph, QActor> implements IBaseActorDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseApplicationDao extends IDao<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationGraph, QApplication> {
}
export declare class BaseApplicationDao extends SQDIDao<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationGraph, QApplication> implements IBaseApplicationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseContinentDao extends IDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentGraph, QContinent> {
}
export declare class BaseContinentDao extends SQDIDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentGraph, QContinent> implements IBaseContinentDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountryDao extends IDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryGraph, QCountry> {
}
export declare class BaseCountryDao extends SQDIDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryGraph, QCountry> implements IBaseCountryDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountryTownDao extends IDao<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownGraph, QCountryTown> {
}
export declare class BaseCountryTownDao extends SQDIDao<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownGraph, QCountryTown> implements IBaseCountryTownDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountyDao extends IDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyGraph, QCounty> {
}
export declare class BaseCountyDao extends SQDIDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyGraph, QCounty> implements IBaseCountyDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountyTownDao extends IDao<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownGraph, QCountyTown> {
}
export declare class BaseCountyTownDao extends SQDIDao<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownGraph, QCountyTown> implements IBaseCountyTownDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseDesignPatternDao extends IDao<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternGraph, QDesignPattern> {
}
export declare class BaseDesignPatternDao extends SQDIDao<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternGraph, QDesignPattern> implements IBaseDesignPatternDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseDeviceDao extends IDao<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceGraph, QDevice> {
}
export declare class BaseDeviceDao extends SQDIDao<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceGraph, QDevice> implements IBaseDeviceDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseEmojiDao extends IDao<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiGraph, QEmoji> {
}
export declare class BaseEmojiDao extends SQDIDao<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiGraph, QEmoji> implements IBaseEmojiDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDao extends IDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}
export declare class BaseFactorDao extends SQDIDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> implements IBaseFactorDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorOpinionVersionDao extends IDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionGraph, QFactorOpinionVersion> {
}
export declare class BaseFactorOpinionVersionDao extends SQDIDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionGraph, QFactorOpinionVersion> implements IBaseFactorOpinionVersionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorOpinionVersionTranslationDao extends IDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationGraph, QFactorOpinionVersionTranslation> {
}
export declare class BaseFactorOpinionVersionTranslationDao extends SQDIDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationGraph, QFactorOpinionVersionTranslation> implements IBaseFactorOpinionVersionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorPositionDao extends IDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> {
}
export declare class BaseFactorPositionDao extends SQDIDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> implements IBaseFactorPositionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorTranslationDao extends IDao<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationGraph, QFactorTranslation> {
}
export declare class BaseFactorTranslationDao extends SQDIDao<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationGraph, QFactorTranslation> implements IBaseFactorTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseLanguageDao extends IDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageGraph, QLanguage> {
}
export declare class BaseLanguageDao extends SQDIDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageGraph, QLanguage> implements IBaseLanguageDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeDao extends IDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> {
}
export declare class BaseOutcomeDao extends SQDIDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> implements IBaseOutcomeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeOpinionVersionDao extends IDao<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionGraph, QOutcomeOpinionVersion> {
}
export declare class BaseOutcomeOpinionVersionDao extends SQDIDao<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionGraph, QOutcomeOpinionVersion> implements IBaseOutcomeOpinionVersionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeOpinionVersionTranslationDao extends IDao<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationGraph, QOutcomeOpinionVersionTranslation> {
}
export declare class BaseOutcomeOpinionVersionTranslationDao extends SQDIDao<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationGraph, QOutcomeOpinionVersionTranslation> implements IBaseOutcomeOpinionVersionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeTranslationDao extends IDao<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationGraph, QOutcomeTranslation> {
}
export declare class BaseOutcomeTranslationDao extends SQDIDao<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationGraph, QOutcomeTranslation> implements IBaseOutcomeTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollDao extends IDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollGraph, QPoll> {
}
export declare class BasePollDao extends SQDIDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollGraph, QPoll> implements IBasePollDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionDao extends IDao<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionGraph, QPollRevision> {
}
export declare class BasePollRevisionDao extends SQDIDao<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionGraph, QPollRevision> implements IBasePollRevisionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionFactorPositionDao extends IDao<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionGraph, QPollRevisionFactorPosition> {
}
export declare class BasePollRevisionFactorPositionDao extends SQDIDao<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionGraph, QPollRevisionFactorPosition> implements IBasePollRevisionFactorPositionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionDao extends IDao<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionGraph, QPollRevisionOpinion> {
}
export declare class BasePollRevisionOpinionDao extends SQDIDao<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionGraph, QPollRevisionOpinion> implements IBasePollRevisionOpinionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionRatingDao extends IDao<IPollRevisionOpinionRating, PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingGraph, QPollRevisionOpinionRating> {
}
export declare class BasePollRevisionOpinionRatingDao extends SQDIDao<IPollRevisionOpinionRating, PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingGraph, QPollRevisionOpinionRating> implements IBasePollRevisionOpinionRatingDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionVersionDao extends IDao<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionGraph, QPollRevisionOpinionVersion> {
}
export declare class BasePollRevisionOpinionVersionDao extends SQDIDao<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionGraph, QPollRevisionOpinionVersion> implements IBasePollRevisionOpinionVersionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionVersionTranslationDao extends IDao<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationGraph, QPollRevisionOpinionVersionTranslation> {
}
export declare class BasePollRevisionOpinionVersionTranslationDao extends SQDIDao<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationGraph, QPollRevisionOpinionVersionTranslation> implements IBasePollRevisionOpinionVersionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionRatingDao extends IDao<IPollRevisionRating, PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingGraph, QPollRevisionRating> {
}
export declare class BasePollRevisionRatingDao extends SQDIDao<IPollRevisionRating, PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingGraph, QPollRevisionRating> implements IBasePollRevisionRatingDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionTranslationDao extends IDao<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationGraph, QPollRevisionTranslation> {
}
export declare class BasePollRevisionTranslationDao extends SQDIDao<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationGraph, QPollRevisionTranslation> implements IBasePollRevisionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionTranslationRatingDao extends IDao<IPollRevisionTranslationRating, PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingGraph, QPollRevisionTranslationRating> {
}
export declare class BasePollRevisionTranslationRatingDao extends SQDIDao<IPollRevisionTranslationRating, PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingGraph, QPollRevisionTranslationRating> implements IBasePollRevisionTranslationRatingDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunDao extends IDao<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunGraph, QPollRun> {
}
export declare class BasePollRunDao extends SQDIDao<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunGraph, QPollRun> implements IBasePollRunDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunContinentDao extends IDao<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentGraph, QPollRunContinent> {
}
export declare class BasePollRunContinentDao extends SQDIDao<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentGraph, QPollRunContinent> implements IBasePollRunContinentDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunCountryDao extends IDao<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryGraph, QPollRunCountry> {
}
export declare class BasePollRunCountryDao extends SQDIDao<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryGraph, QPollRunCountry> implements IBasePollRunCountryDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunCountyDao extends IDao<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyGraph, QPollRunCounty> {
}
export declare class BasePollRunCountyDao extends SQDIDao<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyGraph, QPollRunCounty> implements IBasePollRunCountyDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunStateDao extends IDao<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateGraph, QPollRunState> {
}
export declare class BasePollRunStateDao extends SQDIDao<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateGraph, QPollRunState> implements IBasePollRunStateDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunTownDao extends IDao<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownGraph, QPollRunTown> {
}
export declare class BasePollRunTownDao extends SQDIDao<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownGraph, QPollRunTown> implements IBasePollRunTownDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePollTypeDao extends IDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeGraph, QPollType> {
}
export declare class BasePollTypeDao extends SQDIDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeGraph, QPollType> implements IBasePollTypeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionDao extends IDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}
export declare class BasePositionDao extends SQDIDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> implements IBasePositionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionOpinionVersionDao extends IDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionGraph, QPositionOpinionVersion> {
}
export declare class BasePositionOpinionVersionDao extends SQDIDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionGraph, QPositionOpinionVersion> implements IBasePositionOpinionVersionDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionOpinionVersionTranslationDao extends IDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationGraph, QPositionOpinionVersionTranslation> {
}
export declare class BasePositionOpinionVersionTranslationDao extends SQDIDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationGraph, QPositionOpinionVersionTranslation> implements IBasePositionOpinionVersionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionTranslationDao extends IDao<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationGraph, QPositionTranslation> {
}
export declare class BasePositionTranslationDao extends SQDIDao<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationGraph, QPositionTranslation> implements IBasePositionTranslationDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingDao extends IDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingGraph, QRating> {
}
export declare class BaseRatingDao extends SQDIDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingGraph, QRating> implements IBaseRatingDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingSettingDao extends IDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingGraph, QRatingSetting> {
}
export declare class BaseRatingSettingDao extends SQDIDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingGraph, QRatingSetting> implements IBaseRatingSettingDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingTypeDao extends IDao<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeGraph, QRatingType> {
}
export declare class BaseRatingTypeDao extends SQDIDao<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeGraph, QRatingType> implements IBaseRatingTypeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSkinDao extends IDao<ISkin, SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinGraph, QSkin> {
}
export declare class BaseSkinDao extends SQDIDao<ISkin, SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinGraph, QSkin> implements IBaseSkinDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseStateDao extends IDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateGraph, QState> {
}
export declare class BaseStateDao extends SQDIDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateGraph, QState> implements IBaseStateDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseStateTownDao extends IDao<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownGraph, QStateTown> {
}
export declare class BaseStateTownDao extends SQDIDao<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownGraph, QStateTown> implements IBaseStateTownDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseThemeDao extends IDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}
export declare class BaseThemeDao extends SQDIDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> implements IBaseThemeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTownDao extends IDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownGraph, QTown> {
}
export declare class BaseTownDao extends SQDIDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownGraph, QTown> implements IBaseTownDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTranslationTypeDao extends IDao<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeGraph, QTranslationType> {
}
export declare class BaseTranslationTypeDao extends SQDIDao<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeGraph, QTranslationType> implements IBaseTranslationTypeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserAccountDao extends IDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> {
}
export declare class BaseUserAccountDao extends SQDIDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> implements IBaseUserAccountDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteDao extends IDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteGraph, QVote> {
}
export declare class BaseVoteDao extends SQDIDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteGraph, QVote> implements IBaseVoteDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteFactorDao extends IDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorGraph, QVoteFactor> {
}
export declare class BaseVoteFactorDao extends SQDIDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorGraph, QVoteFactor> implements IBaseVoteFactorDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteFactorTypeDao extends IDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeGraph, QVoteFactorType> {
}
export declare class BaseVoteFactorTypeDao extends SQDIDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeGraph, QVoteFactorType> implements IBaseVoteFactorTypeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteTypeDao extends IDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeGraph, QVoteType> {
}
export declare class BaseVoteTypeDao extends SQDIDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeGraph, QVoteType> implements IBaseVoteTypeDao {
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteVersionDao extends IDao<IVoteVersion, VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionGraph, QVoteVersion> {
}
export declare class BaseVoteVersionDao extends SQDIDao<IVoteVersion, VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionGraph, QVoteVersion> implements IBaseVoteVersionDao {
    static diSet(): boolean;
    constructor();
}
