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
import { IDao, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Dao, DaoQueryDecorators } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity<Entity>> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseActorDao extends IDao<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorGraph, QActor> {
}
export declare class BaseActorDao extends SQDIDao<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorGraph, QActor> implements IBaseActorDao {
    static Find: DaoQueryDecorators<ActorESelect>;
    static FindOne: DaoQueryDecorators<ActorESelect>;
    static Search: DaoQueryDecorators<ActorESelect>;
    static SearchOne: DaoQueryDecorators<ActorESelect>;
    static Save(config: ActorGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseApplicationDao extends IDao<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationGraph, QApplication> {
}
export declare class BaseApplicationDao extends SQDIDao<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationGraph, QApplication> implements IBaseApplicationDao {
    static Find: DaoQueryDecorators<ApplicationESelect>;
    static FindOne: DaoQueryDecorators<ApplicationESelect>;
    static Search: DaoQueryDecorators<ApplicationESelect>;
    static SearchOne: DaoQueryDecorators<ApplicationESelect>;
    static Save(config: ApplicationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseContinentDao extends IDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentGraph, QContinent> {
}
export declare class BaseContinentDao extends SQDIDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentGraph, QContinent> implements IBaseContinentDao {
    static Find: DaoQueryDecorators<ContinentESelect>;
    static FindOne: DaoQueryDecorators<ContinentESelect>;
    static Search: DaoQueryDecorators<ContinentESelect>;
    static SearchOne: DaoQueryDecorators<ContinentESelect>;
    static Save(config: ContinentGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountryDao extends IDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryGraph, QCountry> {
}
export declare class BaseCountryDao extends SQDIDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryGraph, QCountry> implements IBaseCountryDao {
    static Find: DaoQueryDecorators<CountryESelect>;
    static FindOne: DaoQueryDecorators<CountryESelect>;
    static Search: DaoQueryDecorators<CountryESelect>;
    static SearchOne: DaoQueryDecorators<CountryESelect>;
    static Save(config: CountryGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountryTownDao extends IDao<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownGraph, QCountryTown> {
}
export declare class BaseCountryTownDao extends SQDIDao<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownGraph, QCountryTown> implements IBaseCountryTownDao {
    static Find: DaoQueryDecorators<CountryTownESelect>;
    static FindOne: DaoQueryDecorators<CountryTownESelect>;
    static Search: DaoQueryDecorators<CountryTownESelect>;
    static SearchOne: DaoQueryDecorators<CountryTownESelect>;
    static Save(config: CountryTownGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountyDao extends IDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyGraph, QCounty> {
}
export declare class BaseCountyDao extends SQDIDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyGraph, QCounty> implements IBaseCountyDao {
    static Find: DaoQueryDecorators<CountyESelect>;
    static FindOne: DaoQueryDecorators<CountyESelect>;
    static Search: DaoQueryDecorators<CountyESelect>;
    static SearchOne: DaoQueryDecorators<CountyESelect>;
    static Save(config: CountyGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseCountyTownDao extends IDao<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownGraph, QCountyTown> {
}
export declare class BaseCountyTownDao extends SQDIDao<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownGraph, QCountyTown> implements IBaseCountyTownDao {
    static Find: DaoQueryDecorators<CountyTownESelect>;
    static FindOne: DaoQueryDecorators<CountyTownESelect>;
    static Search: DaoQueryDecorators<CountyTownESelect>;
    static SearchOne: DaoQueryDecorators<CountyTownESelect>;
    static Save(config: CountyTownGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseDesignPatternDao extends IDao<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternGraph, QDesignPattern> {
}
export declare class BaseDesignPatternDao extends SQDIDao<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternGraph, QDesignPattern> implements IBaseDesignPatternDao {
    static Find: DaoQueryDecorators<DesignPatternESelect>;
    static FindOne: DaoQueryDecorators<DesignPatternESelect>;
    static Search: DaoQueryDecorators<DesignPatternESelect>;
    static SearchOne: DaoQueryDecorators<DesignPatternESelect>;
    static Save(config: DesignPatternGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseDeviceDao extends IDao<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceGraph, QDevice> {
}
export declare class BaseDeviceDao extends SQDIDao<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceGraph, QDevice> implements IBaseDeviceDao {
    static Find: DaoQueryDecorators<DeviceESelect>;
    static FindOne: DaoQueryDecorators<DeviceESelect>;
    static Search: DaoQueryDecorators<DeviceESelect>;
    static SearchOne: DaoQueryDecorators<DeviceESelect>;
    static Save(config: DeviceGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseEmojiDao extends IDao<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiGraph, QEmoji> {
}
export declare class BaseEmojiDao extends SQDIDao<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiGraph, QEmoji> implements IBaseEmojiDao {
    static Find: DaoQueryDecorators<EmojiESelect>;
    static FindOne: DaoQueryDecorators<EmojiESelect>;
    static Search: DaoQueryDecorators<EmojiESelect>;
    static SearchOne: DaoQueryDecorators<EmojiESelect>;
    static Save(config: EmojiGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorDao extends IDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}
export declare class BaseFactorDao extends SQDIDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> implements IBaseFactorDao {
    static Find: DaoQueryDecorators<FactorESelect>;
    static FindOne: DaoQueryDecorators<FactorESelect>;
    static Search: DaoQueryDecorators<FactorESelect>;
    static SearchOne: DaoQueryDecorators<FactorESelect>;
    static Save(config: FactorGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorOpinionVersionDao extends IDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionGraph, QFactorOpinionVersion> {
}
export declare class BaseFactorOpinionVersionDao extends SQDIDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionGraph, QFactorOpinionVersion> implements IBaseFactorOpinionVersionDao {
    static Find: DaoQueryDecorators<FactorOpinionVersionESelect>;
    static FindOne: DaoQueryDecorators<FactorOpinionVersionESelect>;
    static Search: DaoQueryDecorators<FactorOpinionVersionESelect>;
    static SearchOne: DaoQueryDecorators<FactorOpinionVersionESelect>;
    static Save(config: FactorOpinionVersionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorOpinionVersionTranslationDao extends IDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationGraph, QFactorOpinionVersionTranslation> {
}
export declare class BaseFactorOpinionVersionTranslationDao extends SQDIDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationGraph, QFactorOpinionVersionTranslation> implements IBaseFactorOpinionVersionTranslationDao {
    static Find: DaoQueryDecorators<FactorOpinionVersionTranslationESelect>;
    static FindOne: DaoQueryDecorators<FactorOpinionVersionTranslationESelect>;
    static Search: DaoQueryDecorators<FactorOpinionVersionTranslationESelect>;
    static SearchOne: DaoQueryDecorators<FactorOpinionVersionTranslationESelect>;
    static Save(config: FactorOpinionVersionTranslationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorPositionDao extends IDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> {
}
export declare class BaseFactorPositionDao extends SQDIDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> implements IBaseFactorPositionDao {
    static Find: DaoQueryDecorators<FactorPositionESelect>;
    static FindOne: DaoQueryDecorators<FactorPositionESelect>;
    static Search: DaoQueryDecorators<FactorPositionESelect>;
    static SearchOne: DaoQueryDecorators<FactorPositionESelect>;
    static Save(config: FactorPositionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseFactorTranslationDao extends IDao<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationGraph, QFactorTranslation> {
}
export declare class BaseFactorTranslationDao extends SQDIDao<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationGraph, QFactorTranslation> implements IBaseFactorTranslationDao {
    static Find: DaoQueryDecorators<FactorTranslationESelect>;
    static FindOne: DaoQueryDecorators<FactorTranslationESelect>;
    static Search: DaoQueryDecorators<FactorTranslationESelect>;
    static SearchOne: DaoQueryDecorators<FactorTranslationESelect>;
    static Save(config: FactorTranslationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseLanguageDao extends IDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageGraph, QLanguage> {
}
export declare class BaseLanguageDao extends SQDIDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageGraph, QLanguage> implements IBaseLanguageDao {
    static Find: DaoQueryDecorators<LanguageESelect>;
    static FindOne: DaoQueryDecorators<LanguageESelect>;
    static Search: DaoQueryDecorators<LanguageESelect>;
    static SearchOne: DaoQueryDecorators<LanguageESelect>;
    static Save(config: LanguageGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeDao extends IDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> {
}
export declare class BaseOutcomeDao extends SQDIDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> implements IBaseOutcomeDao {
    static Find: DaoQueryDecorators<OutcomeESelect>;
    static FindOne: DaoQueryDecorators<OutcomeESelect>;
    static Search: DaoQueryDecorators<OutcomeESelect>;
    static SearchOne: DaoQueryDecorators<OutcomeESelect>;
    static Save(config: OutcomeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeOpinionVersionDao extends IDao<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionGraph, QOutcomeOpinionVersion> {
}
export declare class BaseOutcomeOpinionVersionDao extends SQDIDao<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionGraph, QOutcomeOpinionVersion> implements IBaseOutcomeOpinionVersionDao {
    static Find: DaoQueryDecorators<OutcomeOpinionVersionESelect>;
    static FindOne: DaoQueryDecorators<OutcomeOpinionVersionESelect>;
    static Search: DaoQueryDecorators<OutcomeOpinionVersionESelect>;
    static SearchOne: DaoQueryDecorators<OutcomeOpinionVersionESelect>;
    static Save(config: OutcomeOpinionVersionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeOpinionVersionTranslationDao extends IDao<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationGraph, QOutcomeOpinionVersionTranslation> {
}
export declare class BaseOutcomeOpinionVersionTranslationDao extends SQDIDao<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationGraph, QOutcomeOpinionVersionTranslation> implements IBaseOutcomeOpinionVersionTranslationDao {
    static Find: DaoQueryDecorators<OutcomeOpinionVersionTranslationESelect>;
    static FindOne: DaoQueryDecorators<OutcomeOpinionVersionTranslationESelect>;
    static Search: DaoQueryDecorators<OutcomeOpinionVersionTranslationESelect>;
    static SearchOne: DaoQueryDecorators<OutcomeOpinionVersionTranslationESelect>;
    static Save(config: OutcomeOpinionVersionTranslationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseOutcomeTranslationDao extends IDao<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationGraph, QOutcomeTranslation> {
}
export declare class BaseOutcomeTranslationDao extends SQDIDao<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationGraph, QOutcomeTranslation> implements IBaseOutcomeTranslationDao {
    static Find: DaoQueryDecorators<OutcomeTranslationESelect>;
    static FindOne: DaoQueryDecorators<OutcomeTranslationESelect>;
    static Search: DaoQueryDecorators<OutcomeTranslationESelect>;
    static SearchOne: DaoQueryDecorators<OutcomeTranslationESelect>;
    static Save(config: OutcomeTranslationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollDao extends IDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollGraph, QPoll> {
}
export declare class BasePollDao extends SQDIDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollGraph, QPoll> implements IBasePollDao {
    static Find: DaoQueryDecorators<PollESelect>;
    static FindOne: DaoQueryDecorators<PollESelect>;
    static Search: DaoQueryDecorators<PollESelect>;
    static SearchOne: DaoQueryDecorators<PollESelect>;
    static Save(config: PollGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionDao extends IDao<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionGraph, QPollRevision> {
}
export declare class BasePollRevisionDao extends SQDIDao<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionGraph, QPollRevision> implements IBasePollRevisionDao {
    static Find: DaoQueryDecorators<PollRevisionESelect>;
    static FindOne: DaoQueryDecorators<PollRevisionESelect>;
    static Search: DaoQueryDecorators<PollRevisionESelect>;
    static SearchOne: DaoQueryDecorators<PollRevisionESelect>;
    static Save(config: PollRevisionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionFactorPositionDao extends IDao<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionGraph, QPollRevisionFactorPosition> {
}
export declare class BasePollRevisionFactorPositionDao extends SQDIDao<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionGraph, QPollRevisionFactorPosition> implements IBasePollRevisionFactorPositionDao {
    static Find: DaoQueryDecorators<PollRevisionFactorPositionESelect>;
    static FindOne: DaoQueryDecorators<PollRevisionFactorPositionESelect>;
    static Search: DaoQueryDecorators<PollRevisionFactorPositionESelect>;
    static SearchOne: DaoQueryDecorators<PollRevisionFactorPositionESelect>;
    static Save(config: PollRevisionFactorPositionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionDao extends IDao<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionGraph, QPollRevisionOpinion> {
}
export declare class BasePollRevisionOpinionDao extends SQDIDao<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionGraph, QPollRevisionOpinion> implements IBasePollRevisionOpinionDao {
    static Find: DaoQueryDecorators<PollRevisionOpinionESelect>;
    static FindOne: DaoQueryDecorators<PollRevisionOpinionESelect>;
    static Search: DaoQueryDecorators<PollRevisionOpinionESelect>;
    static SearchOne: DaoQueryDecorators<PollRevisionOpinionESelect>;
    static Save(config: PollRevisionOpinionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionRatingDao extends IDao<IPollRevisionOpinionRating, PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingGraph, QPollRevisionOpinionRating> {
}
export declare class BasePollRevisionOpinionRatingDao extends SQDIDao<IPollRevisionOpinionRating, PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingGraph, QPollRevisionOpinionRating> implements IBasePollRevisionOpinionRatingDao {
    static Find: DaoQueryDecorators<PollRevisionOpinionRatingESelect>;
    static FindOne: DaoQueryDecorators<PollRevisionOpinionRatingESelect>;
    static Search: DaoQueryDecorators<PollRevisionOpinionRatingESelect>;
    static SearchOne: DaoQueryDecorators<PollRevisionOpinionRatingESelect>;
    static Save(config: PollRevisionOpinionRatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionVersionDao extends IDao<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionGraph, QPollRevisionOpinionVersion> {
}
export declare class BasePollRevisionOpinionVersionDao extends SQDIDao<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionGraph, QPollRevisionOpinionVersion> implements IBasePollRevisionOpinionVersionDao {
    static Find: DaoQueryDecorators<PollRevisionOpinionVersionESelect>;
    static FindOne: DaoQueryDecorators<PollRevisionOpinionVersionESelect>;
    static Search: DaoQueryDecorators<PollRevisionOpinionVersionESelect>;
    static SearchOne: DaoQueryDecorators<PollRevisionOpinionVersionESelect>;
    static Save(config: PollRevisionOpinionVersionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionOpinionVersionTranslationDao extends IDao<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationGraph, QPollRevisionOpinionVersionTranslation> {
}
export declare class BasePollRevisionOpinionVersionTranslationDao extends SQDIDao<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationGraph, QPollRevisionOpinionVersionTranslation> implements IBasePollRevisionOpinionVersionTranslationDao {
    static Find: DaoQueryDecorators<PollRevisionOpinionVersionTranslationESelect>;
    static FindOne: DaoQueryDecorators<PollRevisionOpinionVersionTranslationESelect>;
    static Search: DaoQueryDecorators<PollRevisionOpinionVersionTranslationESelect>;
    static SearchOne: DaoQueryDecorators<PollRevisionOpinionVersionTranslationESelect>;
    static Save(config: PollRevisionOpinionVersionTranslationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionRatingDao extends IDao<IPollRevisionRating, PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingGraph, QPollRevisionRating> {
}
export declare class BasePollRevisionRatingDao extends SQDIDao<IPollRevisionRating, PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingGraph, QPollRevisionRating> implements IBasePollRevisionRatingDao {
    static Find: DaoQueryDecorators<PollRevisionRatingESelect>;
    static FindOne: DaoQueryDecorators<PollRevisionRatingESelect>;
    static Search: DaoQueryDecorators<PollRevisionRatingESelect>;
    static SearchOne: DaoQueryDecorators<PollRevisionRatingESelect>;
    static Save(config: PollRevisionRatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionTranslationDao extends IDao<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationGraph, QPollRevisionTranslation> {
}
export declare class BasePollRevisionTranslationDao extends SQDIDao<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationGraph, QPollRevisionTranslation> implements IBasePollRevisionTranslationDao {
    static Find: DaoQueryDecorators<PollRevisionTranslationESelect>;
    static FindOne: DaoQueryDecorators<PollRevisionTranslationESelect>;
    static Search: DaoQueryDecorators<PollRevisionTranslationESelect>;
    static SearchOne: DaoQueryDecorators<PollRevisionTranslationESelect>;
    static Save(config: PollRevisionTranslationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRevisionTranslationRatingDao extends IDao<IPollRevisionTranslationRating, PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingGraph, QPollRevisionTranslationRating> {
}
export declare class BasePollRevisionTranslationRatingDao extends SQDIDao<IPollRevisionTranslationRating, PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingGraph, QPollRevisionTranslationRating> implements IBasePollRevisionTranslationRatingDao {
    static Find: DaoQueryDecorators<PollRevisionTranslationRatingESelect>;
    static FindOne: DaoQueryDecorators<PollRevisionTranslationRatingESelect>;
    static Search: DaoQueryDecorators<PollRevisionTranslationRatingESelect>;
    static SearchOne: DaoQueryDecorators<PollRevisionTranslationRatingESelect>;
    static Save(config: PollRevisionTranslationRatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunDao extends IDao<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunGraph, QPollRun> {
}
export declare class BasePollRunDao extends SQDIDao<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunGraph, QPollRun> implements IBasePollRunDao {
    static Find: DaoQueryDecorators<PollRunESelect>;
    static FindOne: DaoQueryDecorators<PollRunESelect>;
    static Search: DaoQueryDecorators<PollRunESelect>;
    static SearchOne: DaoQueryDecorators<PollRunESelect>;
    static Save(config: PollRunGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunContinentDao extends IDao<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentGraph, QPollRunContinent> {
}
export declare class BasePollRunContinentDao extends SQDIDao<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentGraph, QPollRunContinent> implements IBasePollRunContinentDao {
    static Find: DaoQueryDecorators<PollRunContinentESelect>;
    static FindOne: DaoQueryDecorators<PollRunContinentESelect>;
    static Search: DaoQueryDecorators<PollRunContinentESelect>;
    static SearchOne: DaoQueryDecorators<PollRunContinentESelect>;
    static Save(config: PollRunContinentGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunCountryDao extends IDao<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryGraph, QPollRunCountry> {
}
export declare class BasePollRunCountryDao extends SQDIDao<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryGraph, QPollRunCountry> implements IBasePollRunCountryDao {
    static Find: DaoQueryDecorators<PollRunCountryESelect>;
    static FindOne: DaoQueryDecorators<PollRunCountryESelect>;
    static Search: DaoQueryDecorators<PollRunCountryESelect>;
    static SearchOne: DaoQueryDecorators<PollRunCountryESelect>;
    static Save(config: PollRunCountryGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunCountyDao extends IDao<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyGraph, QPollRunCounty> {
}
export declare class BasePollRunCountyDao extends SQDIDao<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyGraph, QPollRunCounty> implements IBasePollRunCountyDao {
    static Find: DaoQueryDecorators<PollRunCountyESelect>;
    static FindOne: DaoQueryDecorators<PollRunCountyESelect>;
    static Search: DaoQueryDecorators<PollRunCountyESelect>;
    static SearchOne: DaoQueryDecorators<PollRunCountyESelect>;
    static Save(config: PollRunCountyGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunStateDao extends IDao<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateGraph, QPollRunState> {
}
export declare class BasePollRunStateDao extends SQDIDao<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateGraph, QPollRunState> implements IBasePollRunStateDao {
    static Find: DaoQueryDecorators<PollRunStateESelect>;
    static FindOne: DaoQueryDecorators<PollRunStateESelect>;
    static Search: DaoQueryDecorators<PollRunStateESelect>;
    static SearchOne: DaoQueryDecorators<PollRunStateESelect>;
    static Save(config: PollRunStateGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollRunTownDao extends IDao<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownGraph, QPollRunTown> {
}
export declare class BasePollRunTownDao extends SQDIDao<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownGraph, QPollRunTown> implements IBasePollRunTownDao {
    static Find: DaoQueryDecorators<PollRunTownESelect>;
    static FindOne: DaoQueryDecorators<PollRunTownESelect>;
    static Search: DaoQueryDecorators<PollRunTownESelect>;
    static SearchOne: DaoQueryDecorators<PollRunTownESelect>;
    static Save(config: PollRunTownGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePollTypeDao extends IDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeGraph, QPollType> {
}
export declare class BasePollTypeDao extends SQDIDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeGraph, QPollType> implements IBasePollTypeDao {
    static Find: DaoQueryDecorators<PollTypeESelect>;
    static FindOne: DaoQueryDecorators<PollTypeESelect>;
    static Search: DaoQueryDecorators<PollTypeESelect>;
    static SearchOne: DaoQueryDecorators<PollTypeESelect>;
    static Save(config: PollTypeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionDao extends IDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}
export declare class BasePositionDao extends SQDIDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> implements IBasePositionDao {
    static Find: DaoQueryDecorators<PositionESelect>;
    static FindOne: DaoQueryDecorators<PositionESelect>;
    static Search: DaoQueryDecorators<PositionESelect>;
    static SearchOne: DaoQueryDecorators<PositionESelect>;
    static Save(config: PositionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionOpinionVersionDao extends IDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionGraph, QPositionOpinionVersion> {
}
export declare class BasePositionOpinionVersionDao extends SQDIDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionGraph, QPositionOpinionVersion> implements IBasePositionOpinionVersionDao {
    static Find: DaoQueryDecorators<PositionOpinionVersionESelect>;
    static FindOne: DaoQueryDecorators<PositionOpinionVersionESelect>;
    static Search: DaoQueryDecorators<PositionOpinionVersionESelect>;
    static SearchOne: DaoQueryDecorators<PositionOpinionVersionESelect>;
    static Save(config: PositionOpinionVersionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionOpinionVersionTranslationDao extends IDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationGraph, QPositionOpinionVersionTranslation> {
}
export declare class BasePositionOpinionVersionTranslationDao extends SQDIDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationGraph, QPositionOpinionVersionTranslation> implements IBasePositionOpinionVersionTranslationDao {
    static Find: DaoQueryDecorators<PositionOpinionVersionTranslationESelect>;
    static FindOne: DaoQueryDecorators<PositionOpinionVersionTranslationESelect>;
    static Search: DaoQueryDecorators<PositionOpinionVersionTranslationESelect>;
    static SearchOne: DaoQueryDecorators<PositionOpinionVersionTranslationESelect>;
    static Save(config: PositionOpinionVersionTranslationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBasePositionTranslationDao extends IDao<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationGraph, QPositionTranslation> {
}
export declare class BasePositionTranslationDao extends SQDIDao<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationGraph, QPositionTranslation> implements IBasePositionTranslationDao {
    static Find: DaoQueryDecorators<PositionTranslationESelect>;
    static FindOne: DaoQueryDecorators<PositionTranslationESelect>;
    static Search: DaoQueryDecorators<PositionTranslationESelect>;
    static SearchOne: DaoQueryDecorators<PositionTranslationESelect>;
    static Save(config: PositionTranslationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingDao extends IDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingGraph, QRating> {
}
export declare class BaseRatingDao extends SQDIDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingGraph, QRating> implements IBaseRatingDao {
    static Find: DaoQueryDecorators<RatingESelect>;
    static FindOne: DaoQueryDecorators<RatingESelect>;
    static Search: DaoQueryDecorators<RatingESelect>;
    static SearchOne: DaoQueryDecorators<RatingESelect>;
    static Save(config: RatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingSettingDao extends IDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingGraph, QRatingSetting> {
}
export declare class BaseRatingSettingDao extends SQDIDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingGraph, QRatingSetting> implements IBaseRatingSettingDao {
    static Find: DaoQueryDecorators<RatingSettingESelect>;
    static FindOne: DaoQueryDecorators<RatingSettingESelect>;
    static Search: DaoQueryDecorators<RatingSettingESelect>;
    static SearchOne: DaoQueryDecorators<RatingSettingESelect>;
    static Save(config: RatingSettingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseRatingTypeDao extends IDao<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeGraph, QRatingType> {
}
export declare class BaseRatingTypeDao extends SQDIDao<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeGraph, QRatingType> implements IBaseRatingTypeDao {
    static Find: DaoQueryDecorators<RatingTypeESelect>;
    static FindOne: DaoQueryDecorators<RatingTypeESelect>;
    static Search: DaoQueryDecorators<RatingTypeESelect>;
    static SearchOne: DaoQueryDecorators<RatingTypeESelect>;
    static Save(config: RatingTypeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseSkinDao extends IDao<ISkin, SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinGraph, QSkin> {
}
export declare class BaseSkinDao extends SQDIDao<ISkin, SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinGraph, QSkin> implements IBaseSkinDao {
    static Find: DaoQueryDecorators<SkinESelect>;
    static FindOne: DaoQueryDecorators<SkinESelect>;
    static Search: DaoQueryDecorators<SkinESelect>;
    static SearchOne: DaoQueryDecorators<SkinESelect>;
    static Save(config: SkinGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseStateDao extends IDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateGraph, QState> {
}
export declare class BaseStateDao extends SQDIDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateGraph, QState> implements IBaseStateDao {
    static Find: DaoQueryDecorators<StateESelect>;
    static FindOne: DaoQueryDecorators<StateESelect>;
    static Search: DaoQueryDecorators<StateESelect>;
    static SearchOne: DaoQueryDecorators<StateESelect>;
    static Save(config: StateGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseStateTownDao extends IDao<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownGraph, QStateTown> {
}
export declare class BaseStateTownDao extends SQDIDao<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownGraph, QStateTown> implements IBaseStateTownDao {
    static Find: DaoQueryDecorators<StateTownESelect>;
    static FindOne: DaoQueryDecorators<StateTownESelect>;
    static Search: DaoQueryDecorators<StateTownESelect>;
    static SearchOne: DaoQueryDecorators<StateTownESelect>;
    static Save(config: StateTownGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseThemeDao extends IDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}
export declare class BaseThemeDao extends SQDIDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> implements IBaseThemeDao {
    static Find: DaoQueryDecorators<ThemeESelect>;
    static FindOne: DaoQueryDecorators<ThemeESelect>;
    static Search: DaoQueryDecorators<ThemeESelect>;
    static SearchOne: DaoQueryDecorators<ThemeESelect>;
    static Save(config: ThemeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseTownDao extends IDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownGraph, QTown> {
}
export declare class BaseTownDao extends SQDIDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownGraph, QTown> implements IBaseTownDao {
    static Find: DaoQueryDecorators<TownESelect>;
    static FindOne: DaoQueryDecorators<TownESelect>;
    static Search: DaoQueryDecorators<TownESelect>;
    static SearchOne: DaoQueryDecorators<TownESelect>;
    static Save(config: TownGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseTranslationTypeDao extends IDao<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeGraph, QTranslationType> {
}
export declare class BaseTranslationTypeDao extends SQDIDao<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeGraph, QTranslationType> implements IBaseTranslationTypeDao {
    static Find: DaoQueryDecorators<TranslationTypeESelect>;
    static FindOne: DaoQueryDecorators<TranslationTypeESelect>;
    static Search: DaoQueryDecorators<TranslationTypeESelect>;
    static SearchOne: DaoQueryDecorators<TranslationTypeESelect>;
    static Save(config: TranslationTypeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserAccountDao extends IDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> {
}
export declare class BaseUserAccountDao extends SQDIDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> implements IBaseUserAccountDao {
    static Find: DaoQueryDecorators<UserAccountESelect>;
    static FindOne: DaoQueryDecorators<UserAccountESelect>;
    static Search: DaoQueryDecorators<UserAccountESelect>;
    static SearchOne: DaoQueryDecorators<UserAccountESelect>;
    static Save(config: UserAccountGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteDao extends IDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteGraph, QVote> {
}
export declare class BaseVoteDao extends SQDIDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteGraph, QVote> implements IBaseVoteDao {
    static Find: DaoQueryDecorators<VoteESelect>;
    static FindOne: DaoQueryDecorators<VoteESelect>;
    static Search: DaoQueryDecorators<VoteESelect>;
    static SearchOne: DaoQueryDecorators<VoteESelect>;
    static Save(config: VoteGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteFactorDao extends IDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorGraph, QVoteFactor> {
}
export declare class BaseVoteFactorDao extends SQDIDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorGraph, QVoteFactor> implements IBaseVoteFactorDao {
    static Find: DaoQueryDecorators<VoteFactorESelect>;
    static FindOne: DaoQueryDecorators<VoteFactorESelect>;
    static Search: DaoQueryDecorators<VoteFactorESelect>;
    static SearchOne: DaoQueryDecorators<VoteFactorESelect>;
    static Save(config: VoteFactorGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteFactorTypeDao extends IDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeGraph, QVoteFactorType> {
}
export declare class BaseVoteFactorTypeDao extends SQDIDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeGraph, QVoteFactorType> implements IBaseVoteFactorTypeDao {
    static Find: DaoQueryDecorators<VoteFactorTypeESelect>;
    static FindOne: DaoQueryDecorators<VoteFactorTypeESelect>;
    static Search: DaoQueryDecorators<VoteFactorTypeESelect>;
    static SearchOne: DaoQueryDecorators<VoteFactorTypeESelect>;
    static Save(config: VoteFactorTypeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteTypeDao extends IDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeGraph, QVoteType> {
}
export declare class BaseVoteTypeDao extends SQDIDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeGraph, QVoteType> implements IBaseVoteTypeDao {
    static Find: DaoQueryDecorators<VoteTypeESelect>;
    static FindOne: DaoQueryDecorators<VoteTypeESelect>;
    static Search: DaoQueryDecorators<VoteTypeESelect>;
    static SearchOne: DaoQueryDecorators<VoteTypeESelect>;
    static Save(config: VoteTypeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseVoteVersionDao extends IDao<IVoteVersion, VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionGraph, QVoteVersion> {
}
export declare class BaseVoteVersionDao extends SQDIDao<IVoteVersion, VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionGraph, QVoteVersion> implements IBaseVoteVersionDao {
    static Find: DaoQueryDecorators<VoteVersionESelect>;
    static FindOne: DaoQueryDecorators<VoteVersionESelect>;
    static Search: DaoQueryDecorators<VoteVersionESelect>;
    static SearchOne: DaoQueryDecorators<VoteVersionESelect>;
    static Save(config: VoteVersionGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDaos.d.ts.map