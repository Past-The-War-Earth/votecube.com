/* eslint-disable */
import {
	IActor,
} from './user/actor';
import {
	ActorESelect,
	ActorECreateColumns,
	ActorECreateProperties,
	ActorEUpdateColumns,
	ActorEUpdateProperties,
	ActorEId,
	ActorGraph,
	QActor,
} from './user/qactor';
import {
	IApplication,
} from './user/application';
import {
	ApplicationESelect,
	ApplicationECreateColumns,
	ApplicationECreateProperties,
	ApplicationEUpdateColumns,
	ApplicationEUpdateProperties,
	ApplicationEId,
	ApplicationGraph,
	QApplication,
} from './user/qapplication';
import {
	IContinent,
} from './location/continent';
import {
	ContinentESelect,
	ContinentECreateColumns,
	ContinentECreateProperties,
	ContinentEUpdateColumns,
	ContinentEUpdateProperties,
	ContinentEId,
	ContinentGraph,
	QContinent,
} from './location/qcontinent';
import {
	ICountry,
} from './location/country';
import {
	CountryESelect,
	CountryECreateColumns,
	CountryECreateProperties,
	CountryEUpdateColumns,
	CountryEUpdateProperties,
	CountryEId,
	CountryGraph,
	QCountry,
} from './location/qcountry';
import {
	ICountryTown,
} from './location/countrytown';
import {
	CountryTownESelect,
	CountryTownECreateColumns,
	CountryTownECreateProperties,
	CountryTownEUpdateColumns,
	CountryTownEUpdateProperties,
	CountryTownEId,
	CountryTownGraph,
	QCountryTown,
} from './location/qcountrytown';
import {
	ICounty,
} from './location/county';
import {
	CountyESelect,
	CountyECreateColumns,
	CountyECreateProperties,
	CountyEUpdateColumns,
	CountyEUpdateProperties,
	CountyEId,
	CountyGraph,
	QCounty,
} from './location/qcounty';
import {
	ICountyTown,
} from './location/countytown';
import {
	CountyTownESelect,
	CountyTownECreateColumns,
	CountyTownECreateProperties,
	CountyTownEUpdateColumns,
	CountyTownEUpdateProperties,
	CountyTownEId,
	CountyTownGraph,
	QCountyTown,
} from './location/qcountytown';
import {
	IDesignPattern,
} from './factor/position/designpattern';
import {
	DesignPatternESelect,
	DesignPatternECreateColumns,
	DesignPatternECreateProperties,
	DesignPatternEUpdateColumns,
	DesignPatternEUpdateProperties,
	DesignPatternEId,
	DesignPatternGraph,
	QDesignPattern,
} from './factor/position/qdesignpattern';
import {
	IDevice,
} from './user/device';
import {
	DeviceESelect,
	DeviceECreateColumns,
	DeviceECreateProperties,
	DeviceEUpdateColumns,
	DeviceEUpdateProperties,
	DeviceEId,
	DeviceGraph,
	QDevice,
} from './user/qdevice';
import {
	IEmoji,
} from './factor/position/emoji';
import {
	EmojiESelect,
	EmojiECreateColumns,
	EmojiECreateProperties,
	EmojiEUpdateColumns,
	EmojiEUpdateProperties,
	EmojiEId,
	EmojiGraph,
	QEmoji,
} from './factor/position/qemoji';
import {
	IFactor,
} from './factor/factor';
import {
	FactorESelect,
	FactorECreateColumns,
	FactorECreateProperties,
	FactorEUpdateColumns,
	FactorEUpdateProperties,
	FactorEId,
	FactorGraph,
	QFactor,
} from './factor/qfactor';
import {
	IFactorOpinionVersion,
} from './opinion/factoropinionversion';
import {
	FactorOpinionVersionESelect,
	FactorOpinionVersionECreateColumns,
	FactorOpinionVersionECreateProperties,
	FactorOpinionVersionEUpdateColumns,
	FactorOpinionVersionEUpdateProperties,
	FactorOpinionVersionEId,
	FactorOpinionVersionGraph,
	QFactorOpinionVersion,
} from './opinion/qfactoropinionversion';
import {
	IFactorOpinionVersionTranslation,
} from './opinion/translation/factoropinionversiontranslation';
import {
	FactorOpinionVersionTranslationESelect,
	FactorOpinionVersionTranslationECreateColumns,
	FactorOpinionVersionTranslationECreateProperties,
	FactorOpinionVersionTranslationEUpdateColumns,
	FactorOpinionVersionTranslationEUpdateProperties,
	FactorOpinionVersionTranslationEId,
	FactorOpinionVersionTranslationGraph,
	QFactorOpinionVersionTranslation,
} from './opinion/translation/qfactoropinionversiontranslation';
import {
	IFactorPosition,
} from './factor/position/factorposition';
import {
	FactorPositionESelect,
	FactorPositionECreateColumns,
	FactorPositionECreateProperties,
	FactorPositionEUpdateColumns,
	FactorPositionEUpdateProperties,
	FactorPositionEId,
	FactorPositionGraph,
	QFactorPosition,
} from './factor/position/qfactorposition';
import {
	IFactorTranslation,
} from './factor/factortranslation';
import {
	FactorTranslationESelect,
	FactorTranslationECreateColumns,
	FactorTranslationECreateProperties,
	FactorTranslationEUpdateColumns,
	FactorTranslationEUpdateProperties,
	FactorTranslationEId,
	FactorTranslationGraph,
	QFactorTranslation,
} from './factor/qfactortranslation';
import {
	ILanguage,
} from './infrastructure/language';
import {
	LanguageESelect,
	LanguageECreateColumns,
	LanguageECreateProperties,
	LanguageEUpdateColumns,
	LanguageEUpdateProperties,
	LanguageEId,
	LanguageGraph,
	QLanguage,
} from './infrastructure/qlanguage';
import {
	IOutcome,
} from './poll/revision/outcome';
import {
	OutcomeESelect,
	OutcomeECreateColumns,
	OutcomeECreateProperties,
	OutcomeEUpdateColumns,
	OutcomeEUpdateProperties,
	OutcomeEId,
	OutcomeGraph,
	QOutcome,
} from './poll/revision/qoutcome';
import {
	IOutcomeOpinionVersion,
} from './opinion/outcomeopinionversion';
import {
	OutcomeOpinionVersionESelect,
	OutcomeOpinionVersionECreateColumns,
	OutcomeOpinionVersionECreateProperties,
	OutcomeOpinionVersionEUpdateColumns,
	OutcomeOpinionVersionEUpdateProperties,
	OutcomeOpinionVersionEId,
	OutcomeOpinionVersionGraph,
	QOutcomeOpinionVersion,
} from './opinion/qoutcomeopinionversion';
import {
	IOutcomeOpinionVersionTranslation,
} from './opinion/translation/outcomeopinionversiontranslation';
import {
	OutcomeOpinionVersionTranslationESelect,
	OutcomeOpinionVersionTranslationECreateColumns,
	OutcomeOpinionVersionTranslationECreateProperties,
	OutcomeOpinionVersionTranslationEUpdateColumns,
	OutcomeOpinionVersionTranslationEUpdateProperties,
	OutcomeOpinionVersionTranslationEId,
	OutcomeOpinionVersionTranslationGraph,
	QOutcomeOpinionVersionTranslation,
} from './opinion/translation/qoutcomeopinionversiontranslation';
import {
	IOutcomeTranslation,
} from './poll/revision/translation/outcometranslation';
import {
	OutcomeTranslationESelect,
	OutcomeTranslationECreateColumns,
	OutcomeTranslationECreateProperties,
	OutcomeTranslationEUpdateColumns,
	OutcomeTranslationEUpdateProperties,
	OutcomeTranslationEId,
	OutcomeTranslationGraph,
	QOutcomeTranslation,
} from './poll/revision/translation/qoutcometranslation';
import {
	IPoll,
} from './poll/poll';
import {
	PollESelect,
	PollECreateColumns,
	PollECreateProperties,
	PollEUpdateColumns,
	PollEUpdateProperties,
	PollEId,
	PollGraph,
	QPoll,
} from './poll/qpoll';
import {
	IPollRevision,
} from './poll/revision/pollrevision';
import {
	PollRevisionESelect,
	PollRevisionECreateColumns,
	PollRevisionECreateProperties,
	PollRevisionEUpdateColumns,
	PollRevisionEUpdateProperties,
	PollRevisionEId,
	PollRevisionGraph,
	QPollRevision,
} from './poll/revision/qpollrevision';
import {
	IPollRevisionFactorPosition,
} from './poll/revision/pollrevisionfactorposition';
import {
	PollRevisionFactorPositionESelect,
	PollRevisionFactorPositionECreateColumns,
	PollRevisionFactorPositionECreateProperties,
	PollRevisionFactorPositionEUpdateColumns,
	PollRevisionFactorPositionEUpdateProperties,
	PollRevisionFactorPositionEId,
	PollRevisionFactorPositionGraph,
	QPollRevisionFactorPosition,
} from './poll/revision/qpollrevisionfactorposition';
import {
	IPollRevisionOpinion,
} from './opinion/pollrevisionopinion';
import {
	PollRevisionOpinionESelect,
	PollRevisionOpinionECreateColumns,
	PollRevisionOpinionECreateProperties,
	PollRevisionOpinionEUpdateColumns,
	PollRevisionOpinionEUpdateProperties,
	PollRevisionOpinionEId,
	PollRevisionOpinionGraph,
	QPollRevisionOpinion,
} from './opinion/qpollrevisionopinion';
import {
	IPollRevisionOpinionRating,
} from './opinion/rating/pollrevisionopinionrating';
import {
	PollRevisionOpinionRatingESelect,
	PollRevisionOpinionRatingECreateColumns,
	PollRevisionOpinionRatingECreateProperties,
	PollRevisionOpinionRatingEUpdateColumns,
	PollRevisionOpinionRatingEUpdateProperties,
	PollRevisionOpinionRatingEId,
	PollRevisionOpinionRatingGraph,
	QPollRevisionOpinionRating,
} from './opinion/rating/qpollrevisionopinionrating';
import {
	IPollRevisionOpinionVersion,
} from './opinion/pollrevisionopinionversion';
import {
	PollRevisionOpinionVersionESelect,
	PollRevisionOpinionVersionECreateColumns,
	PollRevisionOpinionVersionECreateProperties,
	PollRevisionOpinionVersionEUpdateColumns,
	PollRevisionOpinionVersionEUpdateProperties,
	PollRevisionOpinionVersionEId,
	PollRevisionOpinionVersionGraph,
	QPollRevisionOpinionVersion,
} from './opinion/qpollrevisionopinionversion';
import {
	IPollRevisionOpinionVersionTranslation,
} from './opinion/translation/pollrevisionopinionversiontranslation';
import {
	PollRevisionOpinionVersionTranslationESelect,
	PollRevisionOpinionVersionTranslationECreateColumns,
	PollRevisionOpinionVersionTranslationECreateProperties,
	PollRevisionOpinionVersionTranslationEUpdateColumns,
	PollRevisionOpinionVersionTranslationEUpdateProperties,
	PollRevisionOpinionVersionTranslationEId,
	PollRevisionOpinionVersionTranslationGraph,
	QPollRevisionOpinionVersionTranslation,
} from './opinion/translation/qpollrevisionopinionversiontranslation';
import {
	IPollRevisionRating,
} from './poll/rating/pollrevisionrating';
import {
	PollRevisionRatingESelect,
	PollRevisionRatingECreateColumns,
	PollRevisionRatingECreateProperties,
	PollRevisionRatingEUpdateColumns,
	PollRevisionRatingEUpdateProperties,
	PollRevisionRatingEId,
	PollRevisionRatingGraph,
	QPollRevisionRating,
} from './poll/rating/qpollrevisionrating';
import {
	IPollRevisionTranslation,
} from './poll/revision/translation/pollrevisiontranslation';
import {
	PollRevisionTranslationESelect,
	PollRevisionTranslationECreateColumns,
	PollRevisionTranslationECreateProperties,
	PollRevisionTranslationEUpdateColumns,
	PollRevisionTranslationEUpdateProperties,
	PollRevisionTranslationEId,
	PollRevisionTranslationGraph,
	QPollRevisionTranslation,
} from './poll/revision/translation/qpollrevisiontranslation';
import {
	IPollRevisionTranslationRating,
} from './poll/rating/pollrevisiontranslationrating';
import {
	PollRevisionTranslationRatingESelect,
	PollRevisionTranslationRatingECreateColumns,
	PollRevisionTranslationRatingECreateProperties,
	PollRevisionTranslationRatingEUpdateColumns,
	PollRevisionTranslationRatingEUpdateProperties,
	PollRevisionTranslationRatingEId,
	PollRevisionTranslationRatingGraph,
	QPollRevisionTranslationRating,
} from './poll/rating/qpollrevisiontranslationrating';
import {
	IPollRun,
} from './poll/run/pollrun';
import {
	PollRunESelect,
	PollRunECreateColumns,
	PollRunECreateProperties,
	PollRunEUpdateColumns,
	PollRunEUpdateProperties,
	PollRunEId,
	PollRunGraph,
	QPollRun,
} from './poll/run/qpollrun';
import {
	IPollRunContinent,
} from './poll/run/location/pollruncontinent';
import {
	PollRunContinentESelect,
	PollRunContinentECreateColumns,
	PollRunContinentECreateProperties,
	PollRunContinentEUpdateColumns,
	PollRunContinentEUpdateProperties,
	PollRunContinentEId,
	PollRunContinentGraph,
	QPollRunContinent,
} from './poll/run/location/qpollruncontinent';
import {
	IPollRunCountry,
} from './poll/run/location/pollruncountry';
import {
	PollRunCountryESelect,
	PollRunCountryECreateColumns,
	PollRunCountryECreateProperties,
	PollRunCountryEUpdateColumns,
	PollRunCountryEUpdateProperties,
	PollRunCountryEId,
	PollRunCountryGraph,
	QPollRunCountry,
} from './poll/run/location/qpollruncountry';
import {
	IPollRunCounty,
} from './poll/run/location/pollruncounty';
import {
	PollRunCountyESelect,
	PollRunCountyECreateColumns,
	PollRunCountyECreateProperties,
	PollRunCountyEUpdateColumns,
	PollRunCountyEUpdateProperties,
	PollRunCountyEId,
	PollRunCountyGraph,
	QPollRunCounty,
} from './poll/run/location/qpollruncounty';
import {
	IPollRunState,
} from './poll/run/location/pollrunstate';
import {
	PollRunStateESelect,
	PollRunStateECreateColumns,
	PollRunStateECreateProperties,
	PollRunStateEUpdateColumns,
	PollRunStateEUpdateProperties,
	PollRunStateEId,
	PollRunStateGraph,
	QPollRunState,
} from './poll/run/location/qpollrunstate';
import {
	IPollRunTown,
} from './poll/run/location/pollruntown';
import {
	PollRunTownESelect,
	PollRunTownECreateColumns,
	PollRunTownECreateProperties,
	PollRunTownEUpdateColumns,
	PollRunTownEUpdateProperties,
	PollRunTownEId,
	PollRunTownGraph,
	QPollRunTown,
} from './poll/run/location/qpollruntown';
import {
	IPollType,
} from './poll/polltype';
import {
	PollTypeESelect,
	PollTypeECreateColumns,
	PollTypeECreateProperties,
	PollTypeEUpdateColumns,
	PollTypeEUpdateProperties,
	PollTypeEId,
	PollTypeGraph,
	QPollType,
} from './poll/qpolltype';
import {
	IPosition,
} from './factor/position/position';
import {
	PositionESelect,
	PositionECreateColumns,
	PositionECreateProperties,
	PositionEUpdateColumns,
	PositionEUpdateProperties,
	PositionEId,
	PositionGraph,
	QPosition,
} from './factor/position/qposition';
import {
	IPositionOpinionVersion,
} from './opinion/positionopinionversion';
import {
	PositionOpinionVersionESelect,
	PositionOpinionVersionECreateColumns,
	PositionOpinionVersionECreateProperties,
	PositionOpinionVersionEUpdateColumns,
	PositionOpinionVersionEUpdateProperties,
	PositionOpinionVersionEId,
	PositionOpinionVersionGraph,
	QPositionOpinionVersion,
} from './opinion/qpositionopinionversion';
import {
	IPositionOpinionVersionTranslation,
} from './opinion/translation/positionopinionversiontranslation';
import {
	PositionOpinionVersionTranslationESelect,
	PositionOpinionVersionTranslationECreateColumns,
	PositionOpinionVersionTranslationECreateProperties,
	PositionOpinionVersionTranslationEUpdateColumns,
	PositionOpinionVersionTranslationEUpdateProperties,
	PositionOpinionVersionTranslationEId,
	PositionOpinionVersionTranslationGraph,
	QPositionOpinionVersionTranslation,
} from './opinion/translation/qpositionopinionversiontranslation';
import {
	IPositionTranslation,
} from './factor/position/positiontranslation';
import {
	PositionTranslationESelect,
	PositionTranslationECreateColumns,
	PositionTranslationECreateProperties,
	PositionTranslationEUpdateColumns,
	PositionTranslationEUpdateProperties,
	PositionTranslationEId,
	PositionTranslationGraph,
	QPositionTranslation,
} from './factor/position/qpositiontranslation';
import {
	IRating,
} from './infrastructure/rating/rating';
import {
	RatingESelect,
	RatingECreateColumns,
	RatingECreateProperties,
	RatingEUpdateColumns,
	RatingEUpdateProperties,
	RatingEId,
	RatingGraph,
	QRating,
} from './infrastructure/rating/qrating';
import {
	IRatingSetting,
} from './infrastructure/rating/ratingsetting';
import {
	RatingSettingESelect,
	RatingSettingECreateColumns,
	RatingSettingECreateProperties,
	RatingSettingEUpdateColumns,
	RatingSettingEUpdateProperties,
	RatingSettingEId,
	RatingSettingGraph,
	QRatingSetting,
} from './infrastructure/rating/qratingsetting';
import {
	IRatingType,
} from './infrastructure/rating/ratingtype';
import {
	RatingTypeESelect,
	RatingTypeECreateColumns,
	RatingTypeECreateProperties,
	RatingTypeEUpdateColumns,
	RatingTypeEUpdateProperties,
	RatingTypeEId,
	RatingTypeGraph,
	QRatingType,
} from './infrastructure/rating/qratingtype';
import {
	ISkin,
} from './factor/skin';
import {
	SkinESelect,
	SkinECreateColumns,
	SkinECreateProperties,
	SkinEUpdateColumns,
	SkinEUpdateProperties,
	SkinEId,
	SkinGraph,
	QSkin,
} from './factor/qskin';
import {
	IState,
} from './location/state';
import {
	StateESelect,
	StateECreateColumns,
	StateECreateProperties,
	StateEUpdateColumns,
	StateEUpdateProperties,
	StateEId,
	StateGraph,
	QState,
} from './location/qstate';
import {
	IStateTown,
} from './location/statetown';
import {
	StateTownESelect,
	StateTownECreateColumns,
	StateTownECreateProperties,
	StateTownEUpdateColumns,
	StateTownEUpdateProperties,
	StateTownEId,
	StateTownGraph,
	QStateTown,
} from './location/qstatetown';
import {
	ITheme,
} from './poll/theme';
import {
	ThemeESelect,
	ThemeECreateColumns,
	ThemeECreateProperties,
	ThemeEUpdateColumns,
	ThemeEUpdateProperties,
	ThemeEId,
	ThemeGraph,
	QTheme,
} from './poll/qtheme';
import {
	ITown,
} from './location/town';
import {
	TownESelect,
	TownECreateColumns,
	TownECreateProperties,
	TownEUpdateColumns,
	TownEUpdateProperties,
	TownEId,
	TownGraph,
	QTown,
} from './location/qtown';
import {
	ITranslationType,
} from './infrastructure/translationtype';
import {
	TranslationTypeESelect,
	TranslationTypeECreateColumns,
	TranslationTypeECreateProperties,
	TranslationTypeEUpdateColumns,
	TranslationTypeEUpdateProperties,
	TranslationTypeEId,
	TranslationTypeGraph,
	QTranslationType,
} from './infrastructure/qtranslationtype';
import {
	IUserAccount,
} from './user/useraccount';
import {
	UserAccountESelect,
	UserAccountECreateColumns,
	UserAccountECreateProperties,
	UserAccountEUpdateColumns,
	UserAccountEUpdateProperties,
	UserAccountEId,
	UserAccountGraph,
	QUserAccount,
} from './user/quseraccount';
import {
	IVote,
} from './vote/vote';
import {
	VoteESelect,
	VoteECreateColumns,
	VoteECreateProperties,
	VoteEUpdateColumns,
	VoteEUpdateProperties,
	VoteEId,
	VoteGraph,
	QVote,
} from './vote/qvote';
import {
	IVoteFactor,
} from './vote/votefactor';
import {
	VoteFactorESelect,
	VoteFactorECreateColumns,
	VoteFactorECreateProperties,
	VoteFactorEUpdateColumns,
	VoteFactorEUpdateProperties,
	VoteFactorEId,
	VoteFactorGraph,
	QVoteFactor,
} from './vote/qvotefactor';
import {
	IVoteFactorType,
} from './vote/votefactortype';
import {
	VoteFactorTypeESelect,
	VoteFactorTypeECreateColumns,
	VoteFactorTypeECreateProperties,
	VoteFactorTypeEUpdateColumns,
	VoteFactorTypeEUpdateProperties,
	VoteFactorTypeEId,
	VoteFactorTypeGraph,
	QVoteFactorType,
} from './vote/qvotefactortype';
import {
	IVoteType,
} from './vote/votetype';
import {
	VoteTypeESelect,
	VoteTypeECreateColumns,
	VoteTypeECreateProperties,
	VoteTypeEUpdateColumns,
	VoteTypeEUpdateProperties,
	VoteTypeEId,
	VoteTypeGraph,
	QVoteType,
} from './vote/qvotetype';
import {
	IVoteVersion,
} from './vote/voteversion';
import {
	VoteVersionESelect,
	VoteVersionECreateColumns,
	VoteVersionECreateProperties,
	VoteVersionEUpdateColumns,
	VoteVersionEUpdateProperties,
	VoteVersionEId,
	VoteVersionGraph,
	QVoteVersion,
} from './vote/qvoteversion';
import {
	IDao,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/air-control';
import {
	Dao,
	DaoQueryDecorators,
} from '@airport/check-in';
import {
	EntityId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qSchema';


// Schema Q object Dependency Injection readiness detection Dao
export class SQDIDao<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
  EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity<Entity>>
	extends Dao<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateColumns,
		EntityUpdateProperties,
		EntityId,
		EntityCascadeGraph,
		IQE> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseActorDao
  extends IDao<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorGraph, QActor> {
}

export class BaseActorDao
  extends SQDIDao<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorGraph, QActor>
	implements IBaseActorDao {
	
	static Find      = new DaoQueryDecorators<ActorESelect>();
	static FindOne   = new DaoQueryDecorators<ActorESelect>();
	static Search    = new DaoQueryDecorators<ActorESelect>();
	static SearchOne = new DaoQueryDecorators<ActorESelect>();
	static Save(
		config: ActorGraph
	): PropertyDecorator {
		return Dao.BaseSave<ActorGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseApplicationDao
  extends IDao<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationGraph, QApplication> {
}

export class BaseApplicationDao
  extends SQDIDao<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationGraph, QApplication>
	implements IBaseApplicationDao {
	
	static Find      = new DaoQueryDecorators<ApplicationESelect>();
	static FindOne   = new DaoQueryDecorators<ApplicationESelect>();
	static Search    = new DaoQueryDecorators<ApplicationESelect>();
	static SearchOne = new DaoQueryDecorators<ApplicationESelect>();
	static Save(
		config: ApplicationGraph
	): PropertyDecorator {
		return Dao.BaseSave<ApplicationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseContinentDao
  extends IDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentGraph, QContinent> {
}

export class BaseContinentDao
  extends SQDIDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentGraph, QContinent>
	implements IBaseContinentDao {
	
	static Find      = new DaoQueryDecorators<ContinentESelect>();
	static FindOne   = new DaoQueryDecorators<ContinentESelect>();
	static Search    = new DaoQueryDecorators<ContinentESelect>();
	static SearchOne = new DaoQueryDecorators<ContinentESelect>();
	static Save(
		config: ContinentGraph
	): PropertyDecorator {
		return Dao.BaseSave<ContinentGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(11)
	}
	
	constructor() {
		super(11)
	}
}


export interface IBaseCountryDao
  extends IDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryGraph, QCountry> {
}

export class BaseCountryDao
  extends SQDIDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryGraph, QCountry>
	implements IBaseCountryDao {
	
	static Find      = new DaoQueryDecorators<CountryESelect>();
	static FindOne   = new DaoQueryDecorators<CountryESelect>();
	static Search    = new DaoQueryDecorators<CountryESelect>();
	static SearchOne = new DaoQueryDecorators<CountryESelect>();
	static Save(
		config: CountryGraph
	): PropertyDecorator {
		return Dao.BaseSave<CountryGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(10)
	}
	
	constructor() {
		super(10)
	}
}


export interface IBaseCountryTownDao
  extends IDao<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownGraph, QCountryTown> {
}

export class BaseCountryTownDao
  extends SQDIDao<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownGraph, QCountryTown>
	implements IBaseCountryTownDao {
	
	static Find      = new DaoQueryDecorators<CountryTownESelect>();
	static FindOne   = new DaoQueryDecorators<CountryTownESelect>();
	static Search    = new DaoQueryDecorators<CountryTownESelect>();
	static SearchOne = new DaoQueryDecorators<CountryTownESelect>();
	static Save(
		config: CountryTownGraph
	): PropertyDecorator {
		return Dao.BaseSave<CountryTownGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(9)
	}
	
	constructor() {
		super(9)
	}
}


export interface IBaseCountyDao
  extends IDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyGraph, QCounty> {
}

export class BaseCountyDao
  extends SQDIDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyGraph, QCounty>
	implements IBaseCountyDao {
	
	static Find      = new DaoQueryDecorators<CountyESelect>();
	static FindOne   = new DaoQueryDecorators<CountyESelect>();
	static Search    = new DaoQueryDecorators<CountyESelect>();
	static SearchOne = new DaoQueryDecorators<CountyESelect>();
	static Save(
		config: CountyGraph
	): PropertyDecorator {
		return Dao.BaseSave<CountyGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseCountyTownDao
  extends IDao<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownGraph, QCountyTown> {
}

export class BaseCountyTownDao
  extends SQDIDao<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownGraph, QCountyTown>
	implements IBaseCountyTownDao {
	
	static Find      = new DaoQueryDecorators<CountyTownESelect>();
	static FindOne   = new DaoQueryDecorators<CountyTownESelect>();
	static Search    = new DaoQueryDecorators<CountyTownESelect>();
	static SearchOne = new DaoQueryDecorators<CountyTownESelect>();
	static Save(
		config: CountyTownGraph
	): PropertyDecorator {
		return Dao.BaseSave<CountyTownGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseDesignPatternDao
  extends IDao<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternGraph, QDesignPattern> {
}

export class BaseDesignPatternDao
  extends SQDIDao<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternGraph, QDesignPattern>
	implements IBaseDesignPatternDao {
	
	static Find      = new DaoQueryDecorators<DesignPatternESelect>();
	static FindOne   = new DaoQueryDecorators<DesignPatternESelect>();
	static Search    = new DaoQueryDecorators<DesignPatternESelect>();
	static SearchOne = new DaoQueryDecorators<DesignPatternESelect>();
	static Save(
		config: DesignPatternGraph
	): PropertyDecorator {
		return Dao.BaseSave<DesignPatternGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(12)
	}
	
	constructor() {
		super(12)
	}
}


export interface IBaseDeviceDao
  extends IDao<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceGraph, QDevice> {
}

export class BaseDeviceDao
  extends SQDIDao<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceGraph, QDevice>
	implements IBaseDeviceDao {
	
	static Find      = new DaoQueryDecorators<DeviceESelect>();
	static FindOne   = new DaoQueryDecorators<DeviceESelect>();
	static Search    = new DaoQueryDecorators<DeviceESelect>();
	static SearchOne = new DaoQueryDecorators<DeviceESelect>();
	static Save(
		config: DeviceGraph
	): PropertyDecorator {
		return Dao.BaseSave<DeviceGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseEmojiDao
  extends IDao<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiGraph, QEmoji> {
}

export class BaseEmojiDao
  extends SQDIDao<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiGraph, QEmoji>
	implements IBaseEmojiDao {
	
	static Find      = new DaoQueryDecorators<EmojiESelect>();
	static FindOne   = new DaoQueryDecorators<EmojiESelect>();
	static Search    = new DaoQueryDecorators<EmojiESelect>();
	static SearchOne = new DaoQueryDecorators<EmojiESelect>();
	static Save(
		config: EmojiGraph
	): PropertyDecorator {
		return Dao.BaseSave<EmojiGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(13)
	}
	
	constructor() {
		super(13)
	}
}


export interface IBaseFactorDao
  extends IDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}

export class BaseFactorDao
  extends SQDIDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor>
	implements IBaseFactorDao {
	
	static Find      = new DaoQueryDecorators<FactorESelect>();
	static FindOne   = new DaoQueryDecorators<FactorESelect>();
	static Search    = new DaoQueryDecorators<FactorESelect>();
	static SearchOne = new DaoQueryDecorators<FactorESelect>();
	static Save(
		config: FactorGraph
	): PropertyDecorator {
		return Dao.BaseSave<FactorGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(25)
	}
	
	constructor() {
		super(25)
	}
}


export interface IBaseFactorOpinionVersionDao
  extends IDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionGraph, QFactorOpinionVersion> {
}

export class BaseFactorOpinionVersionDao
  extends SQDIDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionGraph, QFactorOpinionVersion>
	implements IBaseFactorOpinionVersionDao {
	
	static Find      = new DaoQueryDecorators<FactorOpinionVersionESelect>();
	static FindOne   = new DaoQueryDecorators<FactorOpinionVersionESelect>();
	static Search    = new DaoQueryDecorators<FactorOpinionVersionESelect>();
	static SearchOne = new DaoQueryDecorators<FactorOpinionVersionESelect>();
	static Save(
		config: FactorOpinionVersionGraph
	): PropertyDecorator {
		return Dao.BaseSave<FactorOpinionVersionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(36)
	}
	
	constructor() {
		super(36)
	}
}


export interface IBaseFactorOpinionVersionTranslationDao
  extends IDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationGraph, QFactorOpinionVersionTranslation> {
}

export class BaseFactorOpinionVersionTranslationDao
  extends SQDIDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationGraph, QFactorOpinionVersionTranslation>
	implements IBaseFactorOpinionVersionTranslationDao {
	
	static Find      = new DaoQueryDecorators<FactorOpinionVersionTranslationESelect>();
	static FindOne   = new DaoQueryDecorators<FactorOpinionVersionTranslationESelect>();
	static Search    = new DaoQueryDecorators<FactorOpinionVersionTranslationESelect>();
	static SearchOne = new DaoQueryDecorators<FactorOpinionVersionTranslationESelect>();
	static Save(
		config: FactorOpinionVersionTranslationGraph
	): PropertyDecorator {
		return Dao.BaseSave<FactorOpinionVersionTranslationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(35)
	}
	
	constructor() {
		super(35)
	}
}


export interface IBaseFactorPositionDao
  extends IDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> {
}

export class BaseFactorPositionDao
  extends SQDIDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition>
	implements IBaseFactorPositionDao {
	
	static Find      = new DaoQueryDecorators<FactorPositionESelect>();
	static FindOne   = new DaoQueryDecorators<FactorPositionESelect>();
	static Search    = new DaoQueryDecorators<FactorPositionESelect>();
	static SearchOne = new DaoQueryDecorators<FactorPositionESelect>();
	static Save(
		config: FactorPositionGraph
	): PropertyDecorator {
		return Dao.BaseSave<FactorPositionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(28)
	}
	
	constructor() {
		super(28)
	}
}


export interface IBaseFactorTranslationDao
  extends IDao<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationGraph, QFactorTranslation> {
}

export class BaseFactorTranslationDao
  extends SQDIDao<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationGraph, QFactorTranslation>
	implements IBaseFactorTranslationDao {
	
	static Find      = new DaoQueryDecorators<FactorTranslationESelect>();
	static FindOne   = new DaoQueryDecorators<FactorTranslationESelect>();
	static Search    = new DaoQueryDecorators<FactorTranslationESelect>();
	static SearchOne = new DaoQueryDecorators<FactorTranslationESelect>();
	static Save(
		config: FactorTranslationGraph
	): PropertyDecorator {
		return Dao.BaseSave<FactorTranslationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(24)
	}
	
	constructor() {
		super(24)
	}
}


export interface IBaseLanguageDao
  extends IDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageGraph, QLanguage> {
}

export class BaseLanguageDao
  extends SQDIDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageGraph, QLanguage>
	implements IBaseLanguageDao {
	
	static Find      = new DaoQueryDecorators<LanguageESelect>();
	static FindOne   = new DaoQueryDecorators<LanguageESelect>();
	static Search    = new DaoQueryDecorators<LanguageESelect>();
	static SearchOne = new DaoQueryDecorators<LanguageESelect>();
	static Save(
		config: LanguageGraph
	): PropertyDecorator {
		return Dao.BaseSave<LanguageGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(23)
	}
	
	constructor() {
		super(23)
	}
}


export interface IBaseOutcomeDao
  extends IDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> {
}

export class BaseOutcomeDao
  extends SQDIDao<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome>
	implements IBaseOutcomeDao {
	
	static Find      = new DaoQueryDecorators<OutcomeESelect>();
	static FindOne   = new DaoQueryDecorators<OutcomeESelect>();
	static Search    = new DaoQueryDecorators<OutcomeESelect>();
	static SearchOne = new DaoQueryDecorators<OutcomeESelect>();
	static Save(
		config: OutcomeGraph
	): PropertyDecorator {
		return Dao.BaseSave<OutcomeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(39)
	}
	
	constructor() {
		super(39)
	}
}


export interface IBaseOutcomeOpinionVersionDao
  extends IDao<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionGraph, QOutcomeOpinionVersion> {
}

export class BaseOutcomeOpinionVersionDao
  extends SQDIDao<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionGraph, QOutcomeOpinionVersion>
	implements IBaseOutcomeOpinionVersionDao {
	
	static Find      = new DaoQueryDecorators<OutcomeOpinionVersionESelect>();
	static FindOne   = new DaoQueryDecorators<OutcomeOpinionVersionESelect>();
	static Search    = new DaoQueryDecorators<OutcomeOpinionVersionESelect>();
	static SearchOne = new DaoQueryDecorators<OutcomeOpinionVersionESelect>();
	static Save(
		config: OutcomeOpinionVersionGraph
	): PropertyDecorator {
		return Dao.BaseSave<OutcomeOpinionVersionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(41)
	}
	
	constructor() {
		super(41)
	}
}


export interface IBaseOutcomeOpinionVersionTranslationDao
  extends IDao<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationGraph, QOutcomeOpinionVersionTranslation> {
}

export class BaseOutcomeOpinionVersionTranslationDao
  extends SQDIDao<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationGraph, QOutcomeOpinionVersionTranslation>
	implements IBaseOutcomeOpinionVersionTranslationDao {
	
	static Find      = new DaoQueryDecorators<OutcomeOpinionVersionTranslationESelect>();
	static FindOne   = new DaoQueryDecorators<OutcomeOpinionVersionTranslationESelect>();
	static Search    = new DaoQueryDecorators<OutcomeOpinionVersionTranslationESelect>();
	static SearchOne = new DaoQueryDecorators<OutcomeOpinionVersionTranslationESelect>();
	static Save(
		config: OutcomeOpinionVersionTranslationGraph
	): PropertyDecorator {
		return Dao.BaseSave<OutcomeOpinionVersionTranslationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(40)
	}
	
	constructor() {
		super(40)
	}
}


export interface IBaseOutcomeTranslationDao
  extends IDao<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationGraph, QOutcomeTranslation> {
}

export class BaseOutcomeTranslationDao
  extends SQDIDao<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationGraph, QOutcomeTranslation>
	implements IBaseOutcomeTranslationDao {
	
	static Find      = new DaoQueryDecorators<OutcomeTranslationESelect>();
	static FindOne   = new DaoQueryDecorators<OutcomeTranslationESelect>();
	static Search    = new DaoQueryDecorators<OutcomeTranslationESelect>();
	static SearchOne = new DaoQueryDecorators<OutcomeTranslationESelect>();
	static Save(
		config: OutcomeTranslationGraph
	): PropertyDecorator {
		return Dao.BaseSave<OutcomeTranslationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(38)
	}
	
	constructor() {
		super(38)
	}
}


export interface IBasePollDao
  extends IDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollGraph, QPoll> {
}

export class BasePollDao
  extends SQDIDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollGraph, QPoll>
	implements IBasePollDao {
	
	static Find      = new DaoQueryDecorators<PollESelect>();
	static FindOne   = new DaoQueryDecorators<PollESelect>();
	static Search    = new DaoQueryDecorators<PollESelect>();
	static SearchOne = new DaoQueryDecorators<PollESelect>();
	static Save(
		config: PollGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(51)
	}
	
	constructor() {
		super(51)
	}
}


export interface IBasePollRevisionDao
  extends IDao<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionGraph, QPollRevision> {
}

export class BasePollRevisionDao
  extends SQDIDao<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionGraph, QPollRevision>
	implements IBasePollRevisionDao {
	
	static Find      = new DaoQueryDecorators<PollRevisionESelect>();
	static FindOne   = new DaoQueryDecorators<PollRevisionESelect>();
	static Search    = new DaoQueryDecorators<PollRevisionESelect>();
	static SearchOne = new DaoQueryDecorators<PollRevisionESelect>();
	static Save(
		config: PollRevisionGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRevisionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(55)
	}
	
	constructor() {
		super(55)
	}
}


export interface IBasePollRevisionFactorPositionDao
  extends IDao<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionGraph, QPollRevisionFactorPosition> {
}

export class BasePollRevisionFactorPositionDao
  extends SQDIDao<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionGraph, QPollRevisionFactorPosition>
	implements IBasePollRevisionFactorPositionDao {
	
	static Find      = new DaoQueryDecorators<PollRevisionFactorPositionESelect>();
	static FindOne   = new DaoQueryDecorators<PollRevisionFactorPositionESelect>();
	static Search    = new DaoQueryDecorators<PollRevisionFactorPositionESelect>();
	static SearchOne = new DaoQueryDecorators<PollRevisionFactorPositionESelect>();
	static Save(
		config: PollRevisionFactorPositionGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRevisionFactorPositionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(30)
	}
	
	constructor() {
		super(30)
	}
}


export interface IBasePollRevisionOpinionDao
  extends IDao<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionGraph, QPollRevisionOpinion> {
}

export class BasePollRevisionOpinionDao
  extends SQDIDao<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionGraph, QPollRevisionOpinion>
	implements IBasePollRevisionOpinionDao {
	
	static Find      = new DaoQueryDecorators<PollRevisionOpinionESelect>();
	static FindOne   = new DaoQueryDecorators<PollRevisionOpinionESelect>();
	static Search    = new DaoQueryDecorators<PollRevisionOpinionESelect>();
	static SearchOne = new DaoQueryDecorators<PollRevisionOpinionESelect>();
	static Save(
		config: PollRevisionOpinionGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRevisionOpinionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(50)
	}
	
	constructor() {
		super(50)
	}
}


export interface IBasePollRevisionOpinionRatingDao
  extends IDao<IPollRevisionOpinionRating, PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingGraph, QPollRevisionOpinionRating> {
}

export class BasePollRevisionOpinionRatingDao
  extends SQDIDao<IPollRevisionOpinionRating, PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingGraph, QPollRevisionOpinionRating>
	implements IBasePollRevisionOpinionRatingDao {
	
	static Find      = new DaoQueryDecorators<PollRevisionOpinionRatingESelect>();
	static FindOne   = new DaoQueryDecorators<PollRevisionOpinionRatingESelect>();
	static Search    = new DaoQueryDecorators<PollRevisionOpinionRatingESelect>();
	static SearchOne = new DaoQueryDecorators<PollRevisionOpinionRatingESelect>();
	static Save(
		config: PollRevisionOpinionRatingGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRevisionOpinionRatingGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(49)
	}
	
	constructor() {
		super(49)
	}
}


export interface IBasePollRevisionOpinionVersionDao
  extends IDao<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionGraph, QPollRevisionOpinionVersion> {
}

export class BasePollRevisionOpinionVersionDao
  extends SQDIDao<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionGraph, QPollRevisionOpinionVersion>
	implements IBasePollRevisionOpinionVersionDao {
	
	static Find      = new DaoQueryDecorators<PollRevisionOpinionVersionESelect>();
	static FindOne   = new DaoQueryDecorators<PollRevisionOpinionVersionESelect>();
	static Search    = new DaoQueryDecorators<PollRevisionOpinionVersionESelect>();
	static SearchOne = new DaoQueryDecorators<PollRevisionOpinionVersionESelect>();
	static Save(
		config: PollRevisionOpinionVersionGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRevisionOpinionVersionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(43)
	}
	
	constructor() {
		super(43)
	}
}


export interface IBasePollRevisionOpinionVersionTranslationDao
  extends IDao<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationGraph, QPollRevisionOpinionVersionTranslation> {
}

export class BasePollRevisionOpinionVersionTranslationDao
  extends SQDIDao<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationGraph, QPollRevisionOpinionVersionTranslation>
	implements IBasePollRevisionOpinionVersionTranslationDao {
	
	static Find      = new DaoQueryDecorators<PollRevisionOpinionVersionTranslationESelect>();
	static FindOne   = new DaoQueryDecorators<PollRevisionOpinionVersionTranslationESelect>();
	static Search    = new DaoQueryDecorators<PollRevisionOpinionVersionTranslationESelect>();
	static SearchOne = new DaoQueryDecorators<PollRevisionOpinionVersionTranslationESelect>();
	static Save(
		config: PollRevisionOpinionVersionTranslationGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRevisionOpinionVersionTranslationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(42)
	}
	
	constructor() {
		super(42)
	}
}


export interface IBasePollRevisionRatingDao
  extends IDao<IPollRevisionRating, PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingGraph, QPollRevisionRating> {
}

export class BasePollRevisionRatingDao
  extends SQDIDao<IPollRevisionRating, PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingGraph, QPollRevisionRating>
	implements IBasePollRevisionRatingDao {
	
	static Find      = new DaoQueryDecorators<PollRevisionRatingESelect>();
	static FindOne   = new DaoQueryDecorators<PollRevisionRatingESelect>();
	static Search    = new DaoQueryDecorators<PollRevisionRatingESelect>();
	static SearchOne = new DaoQueryDecorators<PollRevisionRatingESelect>();
	static Save(
		config: PollRevisionRatingGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRevisionRatingGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(52)
	}
	
	constructor() {
		super(52)
	}
}


export interface IBasePollRevisionTranslationDao
  extends IDao<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationGraph, QPollRevisionTranslation> {
}

export class BasePollRevisionTranslationDao
  extends SQDIDao<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationGraph, QPollRevisionTranslation>
	implements IBasePollRevisionTranslationDao {
	
	static Find      = new DaoQueryDecorators<PollRevisionTranslationESelect>();
	static FindOne   = new DaoQueryDecorators<PollRevisionTranslationESelect>();
	static Search    = new DaoQueryDecorators<PollRevisionTranslationESelect>();
	static SearchOne = new DaoQueryDecorators<PollRevisionTranslationESelect>();
	static Save(
		config: PollRevisionTranslationGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRevisionTranslationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(54)
	}
	
	constructor() {
		super(54)
	}
}


export interface IBasePollRevisionTranslationRatingDao
  extends IDao<IPollRevisionTranslationRating, PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingGraph, QPollRevisionTranslationRating> {
}

export class BasePollRevisionTranslationRatingDao
  extends SQDIDao<IPollRevisionTranslationRating, PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingGraph, QPollRevisionTranslationRating>
	implements IBasePollRevisionTranslationRatingDao {
	
	static Find      = new DaoQueryDecorators<PollRevisionTranslationRatingESelect>();
	static FindOne   = new DaoQueryDecorators<PollRevisionTranslationRatingESelect>();
	static Search    = new DaoQueryDecorators<PollRevisionTranslationRatingESelect>();
	static SearchOne = new DaoQueryDecorators<PollRevisionTranslationRatingESelect>();
	static Save(
		config: PollRevisionTranslationRatingGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRevisionTranslationRatingGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(53)
	}
	
	constructor() {
		super(53)
	}
}


export interface IBasePollRunDao
  extends IDao<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunGraph, QPollRun> {
}

export class BasePollRunDao
  extends SQDIDao<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunGraph, QPollRun>
	implements IBasePollRunDao {
	
	static Find      = new DaoQueryDecorators<PollRunESelect>();
	static FindOne   = new DaoQueryDecorators<PollRunESelect>();
	static Search    = new DaoQueryDecorators<PollRunESelect>();
	static SearchOne = new DaoQueryDecorators<PollRunESelect>();
	static Save(
		config: PollRunGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRunGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(21)
	}
	
	constructor() {
		super(21)
	}
}


export interface IBasePollRunContinentDao
  extends IDao<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentGraph, QPollRunContinent> {
}

export class BasePollRunContinentDao
  extends SQDIDao<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentGraph, QPollRunContinent>
	implements IBasePollRunContinentDao {
	
	static Find      = new DaoQueryDecorators<PollRunContinentESelect>();
	static FindOne   = new DaoQueryDecorators<PollRunContinentESelect>();
	static Search    = new DaoQueryDecorators<PollRunContinentESelect>();
	static SearchOne = new DaoQueryDecorators<PollRunContinentESelect>();
	static Save(
		config: PollRunContinentGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRunContinentGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(16)
	}
	
	constructor() {
		super(16)
	}
}


export interface IBasePollRunCountryDao
  extends IDao<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryGraph, QPollRunCountry> {
}

export class BasePollRunCountryDao
  extends SQDIDao<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryGraph, QPollRunCountry>
	implements IBasePollRunCountryDao {
	
	static Find      = new DaoQueryDecorators<PollRunCountryESelect>();
	static FindOne   = new DaoQueryDecorators<PollRunCountryESelect>();
	static Search    = new DaoQueryDecorators<PollRunCountryESelect>();
	static SearchOne = new DaoQueryDecorators<PollRunCountryESelect>();
	static Save(
		config: PollRunCountryGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRunCountryGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(17)
	}
	
	constructor() {
		super(17)
	}
}


export interface IBasePollRunCountyDao
  extends IDao<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyGraph, QPollRunCounty> {
}

export class BasePollRunCountyDao
  extends SQDIDao<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyGraph, QPollRunCounty>
	implements IBasePollRunCountyDao {
	
	static Find      = new DaoQueryDecorators<PollRunCountyESelect>();
	static FindOne   = new DaoQueryDecorators<PollRunCountyESelect>();
	static Search    = new DaoQueryDecorators<PollRunCountyESelect>();
	static SearchOne = new DaoQueryDecorators<PollRunCountyESelect>();
	static Save(
		config: PollRunCountyGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRunCountyGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(18)
	}
	
	constructor() {
		super(18)
	}
}


export interface IBasePollRunStateDao
  extends IDao<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateGraph, QPollRunState> {
}

export class BasePollRunStateDao
  extends SQDIDao<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateGraph, QPollRunState>
	implements IBasePollRunStateDao {
	
	static Find      = new DaoQueryDecorators<PollRunStateESelect>();
	static FindOne   = new DaoQueryDecorators<PollRunStateESelect>();
	static Search    = new DaoQueryDecorators<PollRunStateESelect>();
	static SearchOne = new DaoQueryDecorators<PollRunStateESelect>();
	static Save(
		config: PollRunStateGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRunStateGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(19)
	}
	
	constructor() {
		super(19)
	}
}


export interface IBasePollRunTownDao
  extends IDao<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownGraph, QPollRunTown> {
}

export class BasePollRunTownDao
  extends SQDIDao<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownGraph, QPollRunTown>
	implements IBasePollRunTownDao {
	
	static Find      = new DaoQueryDecorators<PollRunTownESelect>();
	static FindOne   = new DaoQueryDecorators<PollRunTownESelect>();
	static Search    = new DaoQueryDecorators<PollRunTownESelect>();
	static SearchOne = new DaoQueryDecorators<PollRunTownESelect>();
	static Save(
		config: PollRunTownGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollRunTownGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(20)
	}
	
	constructor() {
		super(20)
	}
}


export interface IBasePollTypeDao
  extends IDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeGraph, QPollType> {
}

export class BasePollTypeDao
  extends SQDIDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeGraph, QPollType>
	implements IBasePollTypeDao {
	
	static Find      = new DaoQueryDecorators<PollTypeESelect>();
	static FindOne   = new DaoQueryDecorators<PollTypeESelect>();
	static Search    = new DaoQueryDecorators<PollTypeESelect>();
	static SearchOne = new DaoQueryDecorators<PollTypeESelect>();
	static Save(
		config: PollTypeGraph
	): PropertyDecorator {
		return Dao.BaseSave<PollTypeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(15)
	}
	
	constructor() {
		super(15)
	}
}


export interface IBasePositionDao
  extends IDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}

export class BasePositionDao
  extends SQDIDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition>
	implements IBasePositionDao {
	
	static Find      = new DaoQueryDecorators<PositionESelect>();
	static FindOne   = new DaoQueryDecorators<PositionESelect>();
	static Search    = new DaoQueryDecorators<PositionESelect>();
	static SearchOne = new DaoQueryDecorators<PositionESelect>();
	static Save(
		config: PositionGraph
	): PropertyDecorator {
		return Dao.BaseSave<PositionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(27)
	}
	
	constructor() {
		super(27)
	}
}


export interface IBasePositionOpinionVersionDao
  extends IDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionGraph, QPositionOpinionVersion> {
}

export class BasePositionOpinionVersionDao
  extends SQDIDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionGraph, QPositionOpinionVersion>
	implements IBasePositionOpinionVersionDao {
	
	static Find      = new DaoQueryDecorators<PositionOpinionVersionESelect>();
	static FindOne   = new DaoQueryDecorators<PositionOpinionVersionESelect>();
	static Search    = new DaoQueryDecorators<PositionOpinionVersionESelect>();
	static SearchOne = new DaoQueryDecorators<PositionOpinionVersionESelect>();
	static Save(
		config: PositionOpinionVersionGraph
	): PropertyDecorator {
		return Dao.BaseSave<PositionOpinionVersionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(45)
	}
	
	constructor() {
		super(45)
	}
}


export interface IBasePositionOpinionVersionTranslationDao
  extends IDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationGraph, QPositionOpinionVersionTranslation> {
}

export class BasePositionOpinionVersionTranslationDao
  extends SQDIDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationGraph, QPositionOpinionVersionTranslation>
	implements IBasePositionOpinionVersionTranslationDao {
	
	static Find      = new DaoQueryDecorators<PositionOpinionVersionTranslationESelect>();
	static FindOne   = new DaoQueryDecorators<PositionOpinionVersionTranslationESelect>();
	static Search    = new DaoQueryDecorators<PositionOpinionVersionTranslationESelect>();
	static SearchOne = new DaoQueryDecorators<PositionOpinionVersionTranslationESelect>();
	static Save(
		config: PositionOpinionVersionTranslationGraph
	): PropertyDecorator {
		return Dao.BaseSave<PositionOpinionVersionTranslationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(44)
	}
	
	constructor() {
		super(44)
	}
}


export interface IBasePositionTranslationDao
  extends IDao<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationGraph, QPositionTranslation> {
}

export class BasePositionTranslationDao
  extends SQDIDao<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationGraph, QPositionTranslation>
	implements IBasePositionTranslationDao {
	
	static Find      = new DaoQueryDecorators<PositionTranslationESelect>();
	static FindOne   = new DaoQueryDecorators<PositionTranslationESelect>();
	static Search    = new DaoQueryDecorators<PositionTranslationESelect>();
	static SearchOne = new DaoQueryDecorators<PositionTranslationESelect>();
	static Save(
		config: PositionTranslationGraph
	): PropertyDecorator {
		return Dao.BaseSave<PositionTranslationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(26)
	}
	
	constructor() {
		super(26)
	}
}


export interface IBaseRatingDao
  extends IDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingGraph, QRating> {
}

export class BaseRatingDao
  extends SQDIDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingGraph, QRating>
	implements IBaseRatingDao {
	
	static Find      = new DaoQueryDecorators<RatingESelect>();
	static FindOne   = new DaoQueryDecorators<RatingESelect>();
	static Search    = new DaoQueryDecorators<RatingESelect>();
	static SearchOne = new DaoQueryDecorators<RatingESelect>();
	static Save(
		config: RatingGraph
	): PropertyDecorator {
		return Dao.BaseSave<RatingGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(48)
	}
	
	constructor() {
		super(48)
	}
}


export interface IBaseRatingSettingDao
  extends IDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingGraph, QRatingSetting> {
}

export class BaseRatingSettingDao
  extends SQDIDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingGraph, QRatingSetting>
	implements IBaseRatingSettingDao {
	
	static Find      = new DaoQueryDecorators<RatingSettingESelect>();
	static FindOne   = new DaoQueryDecorators<RatingSettingESelect>();
	static Search    = new DaoQueryDecorators<RatingSettingESelect>();
	static SearchOne = new DaoQueryDecorators<RatingSettingESelect>();
	static Save(
		config: RatingSettingGraph
	): PropertyDecorator {
		return Dao.BaseSave<RatingSettingGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(46)
	}
	
	constructor() {
		super(46)
	}
}


export interface IBaseRatingTypeDao
  extends IDao<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeGraph, QRatingType> {
}

export class BaseRatingTypeDao
  extends SQDIDao<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeGraph, QRatingType>
	implements IBaseRatingTypeDao {
	
	static Find      = new DaoQueryDecorators<RatingTypeESelect>();
	static FindOne   = new DaoQueryDecorators<RatingTypeESelect>();
	static Search    = new DaoQueryDecorators<RatingTypeESelect>();
	static SearchOne = new DaoQueryDecorators<RatingTypeESelect>();
	static Save(
		config: RatingTypeGraph
	): PropertyDecorator {
		return Dao.BaseSave<RatingTypeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(47)
	}
	
	constructor() {
		super(47)
	}
}


export interface IBaseSkinDao
  extends IDao<ISkin, SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinGraph, QSkin> {
}

export class BaseSkinDao
  extends SQDIDao<ISkin, SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinGraph, QSkin>
	implements IBaseSkinDao {
	
	static Find      = new DaoQueryDecorators<SkinESelect>();
	static FindOne   = new DaoQueryDecorators<SkinESelect>();
	static Search    = new DaoQueryDecorators<SkinESelect>();
	static SearchOne = new DaoQueryDecorators<SkinESelect>();
	static Save(
		config: SkinGraph
	): PropertyDecorator {
		return Dao.BaseSave<SkinGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(29)
	}
	
	constructor() {
		super(29)
	}
}


export interface IBaseStateDao
  extends IDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateGraph, QState> {
}

export class BaseStateDao
  extends SQDIDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateGraph, QState>
	implements IBaseStateDao {
	
	static Find      = new DaoQueryDecorators<StateESelect>();
	static FindOne   = new DaoQueryDecorators<StateESelect>();
	static Search    = new DaoQueryDecorators<StateESelect>();
	static SearchOne = new DaoQueryDecorators<StateESelect>();
	static Save(
		config: StateGraph
	): PropertyDecorator {
		return Dao.BaseSave<StateGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBaseStateTownDao
  extends IDao<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownGraph, QStateTown> {
}

export class BaseStateTownDao
  extends SQDIDao<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownGraph, QStateTown>
	implements IBaseStateTownDao {
	
	static Find      = new DaoQueryDecorators<StateTownESelect>();
	static FindOne   = new DaoQueryDecorators<StateTownESelect>();
	static Search    = new DaoQueryDecorators<StateTownESelect>();
	static SearchOne = new DaoQueryDecorators<StateTownESelect>();
	static Save(
		config: StateTownGraph
	): PropertyDecorator {
		return Dao.BaseSave<StateTownGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseThemeDao
  extends IDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}

export class BaseThemeDao
  extends SQDIDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme>
	implements IBaseThemeDao {
	
	static Find      = new DaoQueryDecorators<ThemeESelect>();
	static FindOne   = new DaoQueryDecorators<ThemeESelect>();
	static Search    = new DaoQueryDecorators<ThemeESelect>();
	static SearchOne = new DaoQueryDecorators<ThemeESelect>();
	static Save(
		config: ThemeGraph
	): PropertyDecorator {
		return Dao.BaseSave<ThemeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(14)
	}
	
	constructor() {
		super(14)
	}
}


export interface IBaseTownDao
  extends IDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownGraph, QTown> {
}

export class BaseTownDao
  extends SQDIDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownGraph, QTown>
	implements IBaseTownDao {
	
	static Find      = new DaoQueryDecorators<TownESelect>();
	static FindOne   = new DaoQueryDecorators<TownESelect>();
	static Search    = new DaoQueryDecorators<TownESelect>();
	static SearchOne = new DaoQueryDecorators<TownESelect>();
	static Save(
		config: TownGraph
	): PropertyDecorator {
		return Dao.BaseSave<TownGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseTranslationTypeDao
  extends IDao<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeGraph, QTranslationType> {
}

export class BaseTranslationTypeDao
  extends SQDIDao<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeGraph, QTranslationType>
	implements IBaseTranslationTypeDao {
	
	static Find      = new DaoQueryDecorators<TranslationTypeESelect>();
	static FindOne   = new DaoQueryDecorators<TranslationTypeESelect>();
	static Search    = new DaoQueryDecorators<TranslationTypeESelect>();
	static SearchOne = new DaoQueryDecorators<TranslationTypeESelect>();
	static Save(
		config: TranslationTypeGraph
	): PropertyDecorator {
		return Dao.BaseSave<TranslationTypeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(37)
	}
	
	constructor() {
		super(37)
	}
}


export interface IBaseUserAccountDao
  extends IDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> {
}

export class BaseUserAccountDao
  extends SQDIDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount>
	implements IBaseUserAccountDao {
	
	static Find      = new DaoQueryDecorators<UserAccountESelect>();
	static FindOne   = new DaoQueryDecorators<UserAccountESelect>();
	static Search    = new DaoQueryDecorators<UserAccountESelect>();
	static SearchOne = new DaoQueryDecorators<UserAccountESelect>();
	static Save(
		config: UserAccountGraph
	): PropertyDecorator {
		return Dao.BaseSave<UserAccountGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseVoteDao
  extends IDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteGraph, QVote> {
}

export class BaseVoteDao
  extends SQDIDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteGraph, QVote>
	implements IBaseVoteDao {
	
	static Find      = new DaoQueryDecorators<VoteESelect>();
	static FindOne   = new DaoQueryDecorators<VoteESelect>();
	static Search    = new DaoQueryDecorators<VoteESelect>();
	static SearchOne = new DaoQueryDecorators<VoteESelect>();
	static Save(
		config: VoteGraph
	): PropertyDecorator {
		return Dao.BaseSave<VoteGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(34)
	}
	
	constructor() {
		super(34)
	}
}


export interface IBaseVoteFactorDao
  extends IDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorGraph, QVoteFactor> {
}

export class BaseVoteFactorDao
  extends SQDIDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorGraph, QVoteFactor>
	implements IBaseVoteFactorDao {
	
	static Find      = new DaoQueryDecorators<VoteFactorESelect>();
	static FindOne   = new DaoQueryDecorators<VoteFactorESelect>();
	static Search    = new DaoQueryDecorators<VoteFactorESelect>();
	static SearchOne = new DaoQueryDecorators<VoteFactorESelect>();
	static Save(
		config: VoteFactorGraph
	): PropertyDecorator {
		return Dao.BaseSave<VoteFactorGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(32)
	}
	
	constructor() {
		super(32)
	}
}


export interface IBaseVoteFactorTypeDao
  extends IDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeGraph, QVoteFactorType> {
}

export class BaseVoteFactorTypeDao
  extends SQDIDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeGraph, QVoteFactorType>
	implements IBaseVoteFactorTypeDao {
	
	static Find      = new DaoQueryDecorators<VoteFactorTypeESelect>();
	static FindOne   = new DaoQueryDecorators<VoteFactorTypeESelect>();
	static Search    = new DaoQueryDecorators<VoteFactorTypeESelect>();
	static SearchOne = new DaoQueryDecorators<VoteFactorTypeESelect>();
	static Save(
		config: VoteFactorTypeGraph
	): PropertyDecorator {
		return Dao.BaseSave<VoteFactorTypeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(31)
	}
	
	constructor() {
		super(31)
	}
}


export interface IBaseVoteTypeDao
  extends IDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeGraph, QVoteType> {
}

export class BaseVoteTypeDao
  extends SQDIDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeGraph, QVoteType>
	implements IBaseVoteTypeDao {
	
	static Find      = new DaoQueryDecorators<VoteTypeESelect>();
	static FindOne   = new DaoQueryDecorators<VoteTypeESelect>();
	static Search    = new DaoQueryDecorators<VoteTypeESelect>();
	static SearchOne = new DaoQueryDecorators<VoteTypeESelect>();
	static Save(
		config: VoteTypeGraph
	): PropertyDecorator {
		return Dao.BaseSave<VoteTypeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(22)
	}
	
	constructor() {
		super(22)
	}
}


export interface IBaseVoteVersionDao
  extends IDao<IVoteVersion, VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionGraph, QVoteVersion> {
}

export class BaseVoteVersionDao
  extends SQDIDao<IVoteVersion, VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionGraph, QVoteVersion>
	implements IBaseVoteVersionDao {
	
	static Find      = new DaoQueryDecorators<VoteVersionESelect>();
	static FindOne   = new DaoQueryDecorators<VoteVersionESelect>();
	static Search    = new DaoQueryDecorators<VoteVersionESelect>();
	static SearchOne = new DaoQueryDecorators<VoteVersionESelect>();
	static Save(
		config: VoteVersionGraph
	): PropertyDecorator {
		return Dao.BaseSave<VoteVersionGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(33)
	}
	
	constructor() {
		super(33)
	}
}
