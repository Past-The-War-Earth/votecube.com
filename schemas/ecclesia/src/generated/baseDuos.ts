import {
	IDuo,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity
} from '@airport/air-control'
import { Duo } from '@airport/check-in'
import {
	EntityId as DbEntityId
} from '@airport/ground-control'
import {
	Q,
	duoDiSet
} from './qSchema'
import {
	IActor
} from './user/actor'
import {
	ActorESelect,
	ActorECreateColumns,
	ActorECreateProperties,
	ActorEUpdateColumns,
	ActorEUpdateProperties,
	ActorEId,
	ActorGraph,
	QActor
} from './user/qactor'
import {
	IApplication
} from './user/application'
import {
	ApplicationESelect,
	ApplicationECreateColumns,
	ApplicationECreateProperties,
	ApplicationEUpdateColumns,
	ApplicationEUpdateProperties,
	ApplicationEId,
	ApplicationGraph,
	QApplication
} from './user/qapplication'
import {
	IContinent
} from './location/continent'
import {
	ContinentESelect,
	ContinentECreateColumns,
	ContinentECreateProperties,
	ContinentEUpdateColumns,
	ContinentEUpdateProperties,
	ContinentEId,
	ContinentGraph,
	QContinent
} from './location/qcontinent'
import {
	ICountry
} from './location/country'
import {
	CountryESelect,
	CountryECreateColumns,
	CountryECreateProperties,
	CountryEUpdateColumns,
	CountryEUpdateProperties,
	CountryEId,
	CountryGraph,
	QCountry
} from './location/qcountry'
import {
	ICountryTown
} from './location/countrytown'
import {
	CountryTownESelect,
	CountryTownECreateColumns,
	CountryTownECreateProperties,
	CountryTownEUpdateColumns,
	CountryTownEUpdateProperties,
	CountryTownEId,
	CountryTownGraph,
	QCountryTown
} from './location/qcountrytown'
import {
	ICounty
} from './location/county'
import {
	CountyESelect,
	CountyECreateColumns,
	CountyECreateProperties,
	CountyEUpdateColumns,
	CountyEUpdateProperties,
	CountyEId,
	CountyGraph,
	QCounty
} from './location/qcounty'
import {
	ICountyTown
} from './location/countytown'
import {
	CountyTownESelect,
	CountyTownECreateColumns,
	CountyTownECreateProperties,
	CountyTownEUpdateColumns,
	CountyTownEUpdateProperties,
	CountyTownEId,
	CountyTownGraph,
	QCountyTown
} from './location/qcountytown'
import {
	IDesignPattern
} from './factor/position/designpattern'
import {
	DesignPatternESelect,
	DesignPatternECreateColumns,
	DesignPatternECreateProperties,
	DesignPatternEUpdateColumns,
	DesignPatternEUpdateProperties,
	DesignPatternEId,
	DesignPatternGraph,
	QDesignPattern
} from './factor/position/qdesignpattern'
import {
	IDevice
} from './user/device'
import {
	DeviceESelect,
	DeviceECreateColumns,
	DeviceECreateProperties,
	DeviceEUpdateColumns,
	DeviceEUpdateProperties,
	DeviceEId,
	DeviceGraph,
	QDevice
} from './user/qdevice'
import {
	IEmoji
} from './factor/position/emoji'
import {
	EmojiESelect,
	EmojiECreateColumns,
	EmojiECreateProperties,
	EmojiEUpdateColumns,
	EmojiEUpdateProperties,
	EmojiEId,
	EmojiGraph,
	QEmoji
} from './factor/position/qemoji'
import {
	IFactor
} from './factor/factor'
import {
	FactorESelect,
	FactorECreateColumns,
	FactorECreateProperties,
	FactorEUpdateColumns,
	FactorEUpdateProperties,
	FactorEId,
	FactorGraph,
	QFactor
} from './factor/qfactor'
import {
	IFactorOpinionVersion
} from './opinion/factoropinionversion'
import {
	FactorOpinionVersionESelect,
	FactorOpinionVersionECreateColumns,
	FactorOpinionVersionECreateProperties,
	FactorOpinionVersionEUpdateColumns,
	FactorOpinionVersionEUpdateProperties,
	FactorOpinionVersionEId,
	FactorOpinionVersionGraph,
	QFactorOpinionVersion
} from './opinion/qfactoropinionversion'
import {
	IFactorOpinionVersionTranslation
} from './opinion/translation/factoropinionversiontranslation'
import {
	FactorOpinionVersionTranslationESelect,
	FactorOpinionVersionTranslationECreateColumns,
	FactorOpinionVersionTranslationECreateProperties,
	FactorOpinionVersionTranslationEUpdateColumns,
	FactorOpinionVersionTranslationEUpdateProperties,
	FactorOpinionVersionTranslationEId,
	FactorOpinionVersionTranslationGraph,
	QFactorOpinionVersionTranslation
} from './opinion/translation/qfactoropinionversiontranslation'
import {
	IFactorPosition
} from './factor/position/factorposition'
import {
	FactorPositionESelect,
	FactorPositionECreateColumns,
	FactorPositionECreateProperties,
	FactorPositionEUpdateColumns,
	FactorPositionEUpdateProperties,
	FactorPositionEId,
	FactorPositionGraph,
	QFactorPosition
} from './factor/position/qfactorposition'
import {
	IFactorTranslation
} from './factor/factortranslation'
import {
	FactorTranslationESelect,
	FactorTranslationECreateColumns,
	FactorTranslationECreateProperties,
	FactorTranslationEUpdateColumns,
	FactorTranslationEUpdateProperties,
	FactorTranslationEId,
	FactorTranslationGraph,
	QFactorTranslation
} from './factor/qfactortranslation'
import {
	ILanguage
} from './infrastructure/language'
import {
	LanguageESelect,
	LanguageECreateColumns,
	LanguageECreateProperties,
	LanguageEUpdateColumns,
	LanguageEUpdateProperties,
	LanguageEId,
	LanguageGraph,
	QLanguage
} from './infrastructure/qlanguage'
import {
	IOutcome
} from './poll/revision/outcome'
import {
	OutcomeESelect,
	OutcomeECreateColumns,
	OutcomeECreateProperties,
	OutcomeEUpdateColumns,
	OutcomeEUpdateProperties,
	OutcomeEId,
	OutcomeGraph,
	QOutcome
} from './poll/revision/qoutcome'
import {
	IOutcomeOpinionVersion
} from './opinion/outcomeopinionversion'
import {
	OutcomeOpinionVersionESelect,
	OutcomeOpinionVersionECreateColumns,
	OutcomeOpinionVersionECreateProperties,
	OutcomeOpinionVersionEUpdateColumns,
	OutcomeOpinionVersionEUpdateProperties,
	OutcomeOpinionVersionEId,
	OutcomeOpinionVersionGraph,
	QOutcomeOpinionVersion
} from './opinion/qoutcomeopinionversion'
import {
	IOutcomeOpinionVersionTranslation
} from './opinion/translation/outcomeopinionversiontranslation'
import {
	OutcomeOpinionVersionTranslationESelect,
	OutcomeOpinionVersionTranslationECreateColumns,
	OutcomeOpinionVersionTranslationECreateProperties,
	OutcomeOpinionVersionTranslationEUpdateColumns,
	OutcomeOpinionVersionTranslationEUpdateProperties,
	OutcomeOpinionVersionTranslationEId,
	OutcomeOpinionVersionTranslationGraph,
	QOutcomeOpinionVersionTranslation
} from './opinion/translation/qoutcomeopinionversiontranslation'
import {
	IOutcomeTranslation
} from './poll/revision/translation/outcometranslation'
import {
	OutcomeTranslationESelect,
	OutcomeTranslationECreateColumns,
	OutcomeTranslationECreateProperties,
	OutcomeTranslationEUpdateColumns,
	OutcomeTranslationEUpdateProperties,
	OutcomeTranslationEId,
	OutcomeTranslationGraph,
	QOutcomeTranslation
} from './poll/revision/translation/qoutcometranslation'
import {
	IPoll
} from './poll/poll'
import {
	PollESelect,
	PollECreateColumns,
	PollECreateProperties,
	PollEUpdateColumns,
	PollEUpdateProperties,
	PollEId,
	PollGraph,
	QPoll
} from './poll/qpoll'
import {
	IPollRevision
} from './poll/revision/pollrevision'
import {
	PollRevisionESelect,
	PollRevisionECreateColumns,
	PollRevisionECreateProperties,
	PollRevisionEUpdateColumns,
	PollRevisionEUpdateProperties,
	PollRevisionEId,
	PollRevisionGraph,
	QPollRevision
} from './poll/revision/qpollrevision'
import {
	IPollRevisionFactorPosition
} from './poll/revision/pollrevisionfactorposition'
import {
	PollRevisionFactorPositionESelect,
	PollRevisionFactorPositionECreateColumns,
	PollRevisionFactorPositionECreateProperties,
	PollRevisionFactorPositionEUpdateColumns,
	PollRevisionFactorPositionEUpdateProperties,
	PollRevisionFactorPositionEId,
	PollRevisionFactorPositionGraph,
	QPollRevisionFactorPosition
} from './poll/revision/qpollrevisionfactorposition'
import {
	IPollRevisionOpinion
} from './opinion/pollrevisionopinion'
import {
	PollRevisionOpinionESelect,
	PollRevisionOpinionECreateColumns,
	PollRevisionOpinionECreateProperties,
	PollRevisionOpinionEUpdateColumns,
	PollRevisionOpinionEUpdateProperties,
	PollRevisionOpinionEId,
	PollRevisionOpinionGraph,
	QPollRevisionOpinion
} from './opinion/qpollrevisionopinion'
import {
	IPollRevisionOpinionRating
} from './opinion/rating/pollrevisionopinionrating'
import {
	PollRevisionOpinionRatingESelect,
	PollRevisionOpinionRatingECreateColumns,
	PollRevisionOpinionRatingECreateProperties,
	PollRevisionOpinionRatingEUpdateColumns,
	PollRevisionOpinionRatingEUpdateProperties,
	PollRevisionOpinionRatingEId,
	PollRevisionOpinionRatingGraph,
	QPollRevisionOpinionRating
} from './opinion/rating/qpollrevisionopinionrating'
import {
	IPollRevisionOpinionVersion
} from './opinion/pollrevisionopinionversion'
import {
	PollRevisionOpinionVersionESelect,
	PollRevisionOpinionVersionECreateColumns,
	PollRevisionOpinionVersionECreateProperties,
	PollRevisionOpinionVersionEUpdateColumns,
	PollRevisionOpinionVersionEUpdateProperties,
	PollRevisionOpinionVersionEId,
	PollRevisionOpinionVersionGraph,
	QPollRevisionOpinionVersion
} from './opinion/qpollrevisionopinionversion'
import {
	IPollRevisionOpinionVersionTranslation
} from './opinion/translation/pollrevisionopinionversiontranslation'
import {
	PollRevisionOpinionVersionTranslationESelect,
	PollRevisionOpinionVersionTranslationECreateColumns,
	PollRevisionOpinionVersionTranslationECreateProperties,
	PollRevisionOpinionVersionTranslationEUpdateColumns,
	PollRevisionOpinionVersionTranslationEUpdateProperties,
	PollRevisionOpinionVersionTranslationEId,
	PollRevisionOpinionVersionTranslationGraph,
	QPollRevisionOpinionVersionTranslation
} from './opinion/translation/qpollrevisionopinionversiontranslation'
import {
	IPollRevisionRating
} from './poll/rating/pollrevisionrating'
import {
	PollRevisionRatingESelect,
	PollRevisionRatingECreateColumns,
	PollRevisionRatingECreateProperties,
	PollRevisionRatingEUpdateColumns,
	PollRevisionRatingEUpdateProperties,
	PollRevisionRatingEId,
	PollRevisionRatingGraph,
	QPollRevisionRating
} from './poll/rating/qpollrevisionrating'
import {
	IPollRevisionTranslation
} from './poll/revision/translation/pollrevisiontranslation'
import {
	PollRevisionTranslationESelect,
	PollRevisionTranslationECreateColumns,
	PollRevisionTranslationECreateProperties,
	PollRevisionTranslationEUpdateColumns,
	PollRevisionTranslationEUpdateProperties,
	PollRevisionTranslationEId,
	PollRevisionTranslationGraph,
	QPollRevisionTranslation
} from './poll/revision/translation/qpollrevisiontranslation'
import {
	IPollRevisionTranslationRating
} from './poll/rating/pollrevisiontranslationrating'
import {
	PollRevisionTranslationRatingESelect,
	PollRevisionTranslationRatingECreateColumns,
	PollRevisionTranslationRatingECreateProperties,
	PollRevisionTranslationRatingEUpdateColumns,
	PollRevisionTranslationRatingEUpdateProperties,
	PollRevisionTranslationRatingEId,
	PollRevisionTranslationRatingGraph,
	QPollRevisionTranslationRating
} from './poll/rating/qpollrevisiontranslationrating'
import {
	IPollRun
} from './poll/run/pollrun'
import {
	PollRunESelect,
	PollRunECreateColumns,
	PollRunECreateProperties,
	PollRunEUpdateColumns,
	PollRunEUpdateProperties,
	PollRunEId,
	PollRunGraph,
	QPollRun
} from './poll/run/qpollrun'
import {
	IPollRunContinent
} from './poll/run/location/pollruncontinent'
import {
	PollRunContinentESelect,
	PollRunContinentECreateColumns,
	PollRunContinentECreateProperties,
	PollRunContinentEUpdateColumns,
	PollRunContinentEUpdateProperties,
	PollRunContinentEId,
	PollRunContinentGraph,
	QPollRunContinent
} from './poll/run/location/qpollruncontinent'
import {
	IPollRunCountry
} from './poll/run/location/pollruncountry'
import {
	PollRunCountryESelect,
	PollRunCountryECreateColumns,
	PollRunCountryECreateProperties,
	PollRunCountryEUpdateColumns,
	PollRunCountryEUpdateProperties,
	PollRunCountryEId,
	PollRunCountryGraph,
	QPollRunCountry
} from './poll/run/location/qpollruncountry'
import {
	IPollRunCounty
} from './poll/run/location/pollruncounty'
import {
	PollRunCountyESelect,
	PollRunCountyECreateColumns,
	PollRunCountyECreateProperties,
	PollRunCountyEUpdateColumns,
	PollRunCountyEUpdateProperties,
	PollRunCountyEId,
	PollRunCountyGraph,
	QPollRunCounty
} from './poll/run/location/qpollruncounty'
import {
	IPollRunState
} from './poll/run/location/pollrunstate'
import {
	PollRunStateESelect,
	PollRunStateECreateColumns,
	PollRunStateECreateProperties,
	PollRunStateEUpdateColumns,
	PollRunStateEUpdateProperties,
	PollRunStateEId,
	PollRunStateGraph,
	QPollRunState
} from './poll/run/location/qpollrunstate'
import {
	IPollRunTown
} from './poll/run/location/pollruntown'
import {
	PollRunTownESelect,
	PollRunTownECreateColumns,
	PollRunTownECreateProperties,
	PollRunTownEUpdateColumns,
	PollRunTownEUpdateProperties,
	PollRunTownEId,
	PollRunTownGraph,
	QPollRunTown
} from './poll/run/location/qpollruntown'
import {
	IPollType
} from './poll/polltype'
import {
	PollTypeESelect,
	PollTypeECreateColumns,
	PollTypeECreateProperties,
	PollTypeEUpdateColumns,
	PollTypeEUpdateProperties,
	PollTypeEId,
	PollTypeGraph,
	QPollType
} from './poll/qpolltype'
import {
	IPosition
} from './factor/position/position'
import {
	PositionESelect,
	PositionECreateColumns,
	PositionECreateProperties,
	PositionEUpdateColumns,
	PositionEUpdateProperties,
	PositionEId,
	PositionGraph,
	QPosition
} from './factor/position/qposition'
import {
	IPositionOpinionVersion
} from './opinion/positionopinionversion'
import {
	PositionOpinionVersionESelect,
	PositionOpinionVersionECreateColumns,
	PositionOpinionVersionECreateProperties,
	PositionOpinionVersionEUpdateColumns,
	PositionOpinionVersionEUpdateProperties,
	PositionOpinionVersionEId,
	PositionOpinionVersionGraph,
	QPositionOpinionVersion
} from './opinion/qpositionopinionversion'
import {
	IPositionOpinionVersionTranslation
} from './opinion/translation/positionopinionversiontranslation'
import {
	PositionOpinionVersionTranslationESelect,
	PositionOpinionVersionTranslationECreateColumns,
	PositionOpinionVersionTranslationECreateProperties,
	PositionOpinionVersionTranslationEUpdateColumns,
	PositionOpinionVersionTranslationEUpdateProperties,
	PositionOpinionVersionTranslationEId,
	PositionOpinionVersionTranslationGraph,
	QPositionOpinionVersionTranslation
} from './opinion/translation/qpositionopinionversiontranslation'
import {
	IPositionTranslation
} from './factor/position/positiontranslation'
import {
	PositionTranslationESelect,
	PositionTranslationECreateColumns,
	PositionTranslationECreateProperties,
	PositionTranslationEUpdateColumns,
	PositionTranslationEUpdateProperties,
	PositionTranslationEId,
	PositionTranslationGraph,
	QPositionTranslation
} from './factor/position/qpositiontranslation'
import {
	IRating
} from './infrastructure/rating/rating'
import {
	RatingESelect,
	RatingECreateColumns,
	RatingECreateProperties,
	RatingEUpdateColumns,
	RatingEUpdateProperties,
	RatingEId,
	RatingGraph,
	QRating
} from './infrastructure/rating/qrating'
import {
	IRatingSetting
} from './infrastructure/rating/ratingsetting'
import {
	RatingSettingESelect,
	RatingSettingECreateColumns,
	RatingSettingECreateProperties,
	RatingSettingEUpdateColumns,
	RatingSettingEUpdateProperties,
	RatingSettingEId,
	RatingSettingGraph,
	QRatingSetting
} from './infrastructure/rating/qratingsetting'
import {
	IRatingType
} from './infrastructure/rating/ratingtype'
import {
	RatingTypeESelect,
	RatingTypeECreateColumns,
	RatingTypeECreateProperties,
	RatingTypeEUpdateColumns,
	RatingTypeEUpdateProperties,
	RatingTypeEId,
	RatingTypeGraph,
	QRatingType
} from './infrastructure/rating/qratingtype'
import {
	ISkin
} from './factor/skin'
import {
	SkinESelect,
	SkinECreateColumns,
	SkinECreateProperties,
	SkinEUpdateColumns,
	SkinEUpdateProperties,
	SkinEId,
	SkinGraph,
	QSkin
} from './factor/qskin'
import {
	IState
} from './location/state'
import {
	StateESelect,
	StateECreateColumns,
	StateECreateProperties,
	StateEUpdateColumns,
	StateEUpdateProperties,
	StateEId,
	StateGraph,
	QState
} from './location/qstate'
import {
	IStateTown
} from './location/statetown'
import {
	StateTownESelect,
	StateTownECreateColumns,
	StateTownECreateProperties,
	StateTownEUpdateColumns,
	StateTownEUpdateProperties,
	StateTownEId,
	StateTownGraph,
	QStateTown
} from './location/qstatetown'
import {
	ITheme
} from './poll/theme'
import {
	ThemeESelect,
	ThemeECreateColumns,
	ThemeECreateProperties,
	ThemeEUpdateColumns,
	ThemeEUpdateProperties,
	ThemeEId,
	ThemeGraph,
	QTheme
} from './poll/qtheme'
import {
	ITown
} from './location/town'
import {
	TownESelect,
	TownECreateColumns,
	TownECreateProperties,
	TownEUpdateColumns,
	TownEUpdateProperties,
	TownEId,
	TownGraph,
	QTown
} from './location/qtown'
import {
	ITranslationType
} from './infrastructure/translationtype'
import {
	TranslationTypeESelect,
	TranslationTypeECreateColumns,
	TranslationTypeECreateProperties,
	TranslationTypeEUpdateColumns,
	TranslationTypeEUpdateProperties,
	TranslationTypeEId,
	TranslationTypeGraph,
	QTranslationType
} from './infrastructure/qtranslationtype'
import {
	IUserAccount
} from './user/useraccount'
import {
	UserAccountESelect,
	UserAccountECreateColumns,
	UserAccountECreateProperties,
	UserAccountEUpdateColumns,
	UserAccountEUpdateProperties,
	UserAccountEId,
	UserAccountGraph,
	QUserAccount
} from './user/quseraccount'
import {
	IVote
} from './vote/vote'
import {
	VoteESelect,
	VoteECreateColumns,
	VoteECreateProperties,
	VoteEUpdateColumns,
	VoteEUpdateProperties,
	VoteEId,
	VoteGraph,
	QVote
} from './vote/qvote'
import {
	IVoteFactor
} from './vote/votefactor'
import {
	VoteFactorESelect,
	VoteFactorECreateColumns,
	VoteFactorECreateProperties,
	VoteFactorEUpdateColumns,
	VoteFactorEUpdateProperties,
	VoteFactorEId,
	VoteFactorGraph,
	QVoteFactor
} from './vote/qvotefactor'
import {
	IVoteFactorType
} from './vote/votefactortype'
import {
	VoteFactorTypeESelect,
	VoteFactorTypeECreateColumns,
	VoteFactorTypeECreateProperties,
	VoteFactorTypeEUpdateColumns,
	VoteFactorTypeEUpdateProperties,
	VoteFactorTypeEId,
	VoteFactorTypeGraph,
	QVoteFactorType
} from './vote/qvotefactortype'
import {
	IVoteType
} from './vote/votetype'
import {
	VoteTypeESelect,
	VoteTypeECreateColumns,
	VoteTypeECreateProperties,
	VoteTypeEUpdateColumns,
	VoteTypeEUpdateProperties,
	VoteTypeEId,
	VoteTypeGraph,
	QVoteType
} from './vote/qvotetype'
import {
	IVoteVersion
} from './vote/voteversion'
import {
	VoteVersionESelect,
	VoteVersionECreateColumns,
	VoteVersionECreateProperties,
	VoteVersionEUpdateColumns,
	VoteVersionEUpdateProperties,
	VoteVersionEId,
	VoteVersionGraph,
	QVoteVersion
} from './vote/qvoteversion'


// Schema Q object Dependency Injection readiness detection Duo
export class SQDIDuo<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
  EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity>
	extends Duo<Entity,
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


export interface IBaseActorDuo
  extends IDuo<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorGraph, QActor> {
}

export class BaseActorDuo
  extends SQDIDuo<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorGraph, QActor>
	implements IBaseActorDuo {

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseApplicationDuo
  extends IDuo<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationGraph, QApplication> {
}

export class BaseApplicationDuo
  extends SQDIDuo<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationGraph, QApplication>
	implements IBaseApplicationDuo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseContinentDuo
  extends IDuo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentGraph, QContinent> {
}

export class BaseContinentDuo
  extends SQDIDuo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentGraph, QContinent>
	implements IBaseContinentDuo {

	static diSet(): boolean {
		return duoDiSet(13)
	}
	
	constructor() {
		super(13)
	}
}


export interface IBaseCountryDuo
  extends IDuo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryGraph, QCountry> {
}

export class BaseCountryDuo
  extends SQDIDuo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryGraph, QCountry>
	implements IBaseCountryDuo {

	static diSet(): boolean {
		return duoDiSet(12)
	}
	
	constructor() {
		super(12)
	}
}


export interface IBaseCountryTownDuo
  extends IDuo<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownGraph, QCountryTown> {
}

export class BaseCountryTownDuo
  extends SQDIDuo<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownGraph, QCountryTown>
	implements IBaseCountryTownDuo {

	static diSet(): boolean {
		return duoDiSet(11)
	}
	
	constructor() {
		super(11)
	}
}


export interface IBaseCountyDuo
  extends IDuo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyGraph, QCounty> {
}

export class BaseCountyDuo
  extends SQDIDuo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyGraph, QCounty>
	implements IBaseCountyDuo {

	static diSet(): boolean {
		return duoDiSet(9)
	}
	
	constructor() {
		super(9)
	}
}


export interface IBaseCountyTownDuo
  extends IDuo<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownGraph, QCountyTown> {
}

export class BaseCountyTownDuo
  extends SQDIDuo<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownGraph, QCountyTown>
	implements IBaseCountyTownDuo {

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBaseDesignPatternDuo
  extends IDuo<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternGraph, QDesignPattern> {
}

export class BaseDesignPatternDuo
  extends SQDIDuo<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternGraph, QDesignPattern>
	implements IBaseDesignPatternDuo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseDeviceDuo
  extends IDuo<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceGraph, QDevice> {
}

export class BaseDeviceDuo
  extends SQDIDuo<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceGraph, QDevice>
	implements IBaseDeviceDuo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseEmojiDuo
  extends IDuo<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiGraph, QEmoji> {
}

export class BaseEmojiDuo
  extends SQDIDuo<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiGraph, QEmoji>
	implements IBaseEmojiDuo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseFactorDuo
  extends IDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}

export class BaseFactorDuo
  extends SQDIDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor>
	implements IBaseFactorDuo {

	static diSet(): boolean {
		return duoDiSet(52)
	}
	
	constructor() {
		super(52)
	}
}


export interface IBaseFactorOpinionVersionDuo
  extends IDuo<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionGraph, QFactorOpinionVersion> {
}

export class BaseFactorOpinionVersionDuo
  extends SQDIDuo<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionGraph, QFactorOpinionVersion>
	implements IBaseFactorOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(29)
	}
	
	constructor() {
		super(29)
	}
}


export interface IBaseFactorOpinionVersionTranslationDuo
  extends IDuo<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationGraph, QFactorOpinionVersionTranslation> {
}

export class BaseFactorOpinionVersionTranslationDuo
  extends SQDIDuo<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationGraph, QFactorOpinionVersionTranslation>
	implements IBaseFactorOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(28)
	}
	
	constructor() {
		super(28)
	}
}


export interface IBaseFactorPositionDuo
  extends IDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition> {
}

export class BaseFactorPositionDuo
  extends SQDIDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionGraph, QFactorPosition>
	implements IBaseFactorPositionDuo {

	static diSet(): boolean {
		return duoDiSet(55)
	}
	
	constructor() {
		super(55)
	}
}


export interface IBaseFactorTranslationDuo
  extends IDuo<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationGraph, QFactorTranslation> {
}

export class BaseFactorTranslationDuo
  extends SQDIDuo<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationGraph, QFactorTranslation>
	implements IBaseFactorTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(51)
	}
	
	constructor() {
		super(51)
	}
}


export interface IBaseLanguageDuo
  extends IDuo<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageGraph, QLanguage> {
}

export class BaseLanguageDuo
  extends SQDIDuo<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageGraph, QLanguage>
	implements IBaseLanguageDuo {

	static diSet(): boolean {
		return duoDiSet(27)
	}
	
	constructor() {
		super(27)
	}
}


export interface IBaseOutcomeDuo
  extends IDuo<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome> {
}

export class BaseOutcomeDuo
  extends SQDIDuo<IOutcome, OutcomeESelect, OutcomeECreateProperties, OutcomeEUpdateColumns, OutcomeEUpdateProperties, OutcomeEId, OutcomeGraph, QOutcome>
	implements IBaseOutcomeDuo {

	static diSet(): boolean {
		return duoDiSet(32)
	}
	
	constructor() {
		super(32)
	}
}


export interface IBaseOutcomeOpinionVersionDuo
  extends IDuo<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionGraph, QOutcomeOpinionVersion> {
}

export class BaseOutcomeOpinionVersionDuo
  extends SQDIDuo<IOutcomeOpinionVersion, OutcomeOpinionVersionESelect, OutcomeOpinionVersionECreateProperties, OutcomeOpinionVersionEUpdateColumns, OutcomeOpinionVersionEUpdateProperties, OutcomeOpinionVersionEId, OutcomeOpinionVersionGraph, QOutcomeOpinionVersion>
	implements IBaseOutcomeOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(34)
	}
	
	constructor() {
		super(34)
	}
}


export interface IBaseOutcomeOpinionVersionTranslationDuo
  extends IDuo<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationGraph, QOutcomeOpinionVersionTranslation> {
}

export class BaseOutcomeOpinionVersionTranslationDuo
  extends SQDIDuo<IOutcomeOpinionVersionTranslation, OutcomeOpinionVersionTranslationESelect, OutcomeOpinionVersionTranslationECreateProperties, OutcomeOpinionVersionTranslationEUpdateColumns, OutcomeOpinionVersionTranslationEUpdateProperties, OutcomeOpinionVersionTranslationEId, OutcomeOpinionVersionTranslationGraph, QOutcomeOpinionVersionTranslation>
	implements IBaseOutcomeOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(33)
	}
	
	constructor() {
		super(33)
	}
}


export interface IBaseOutcomeTranslationDuo
  extends IDuo<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationGraph, QOutcomeTranslation> {
}

export class BaseOutcomeTranslationDuo
  extends SQDIDuo<IOutcomeTranslation, OutcomeTranslationESelect, OutcomeTranslationECreateProperties, OutcomeTranslationEUpdateColumns, OutcomeTranslationEUpdateProperties, OutcomeTranslationEId, OutcomeTranslationGraph, QOutcomeTranslation>
	implements IBaseOutcomeTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(31)
	}
	
	constructor() {
		super(31)
	}
}


export interface IBasePollDuo
  extends IDuo<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollGraph, QPoll> {
}

export class BasePollDuo
  extends SQDIDuo<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollGraph, QPoll>
	implements IBasePollDuo {

	static diSet(): boolean {
		return duoDiSet(46)
	}
	
	constructor() {
		super(46)
	}
}


export interface IBasePollRevisionDuo
  extends IDuo<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionGraph, QPollRevision> {
}

export class BasePollRevisionDuo
  extends SQDIDuo<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionGraph, QPollRevision>
	implements IBasePollRevisionDuo {

	static diSet(): boolean {
		return duoDiSet(50)
	}
	
	constructor() {
		super(50)
	}
}


export interface IBasePollRevisionFactorPositionDuo
  extends IDuo<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionGraph, QPollRevisionFactorPosition> {
}

export class BasePollRevisionFactorPositionDuo
  extends SQDIDuo<IPollRevisionFactorPosition, PollRevisionFactorPositionESelect, PollRevisionFactorPositionECreateProperties, PollRevisionFactorPositionEUpdateColumns, PollRevisionFactorPositionEUpdateProperties, PollRevisionFactorPositionEId, PollRevisionFactorPositionGraph, QPollRevisionFactorPosition>
	implements IBasePollRevisionFactorPositionDuo {

	static diSet(): boolean {
		return duoDiSet(21)
	}
	
	constructor() {
		super(21)
	}
}


export interface IBasePollRevisionOpinionDuo
  extends IDuo<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionGraph, QPollRevisionOpinion> {
}

export class BasePollRevisionOpinionDuo
  extends SQDIDuo<IPollRevisionOpinion, PollRevisionOpinionESelect, PollRevisionOpinionECreateProperties, PollRevisionOpinionEUpdateColumns, PollRevisionOpinionEUpdateProperties, PollRevisionOpinionEId, PollRevisionOpinionGraph, QPollRevisionOpinion>
	implements IBasePollRevisionOpinionDuo {

	static diSet(): boolean {
		return duoDiSet(43)
	}
	
	constructor() {
		super(43)
	}
}


export interface IBasePollRevisionOpinionRatingDuo
  extends IDuo<IPollRevisionOpinionRating, PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingGraph, QPollRevisionOpinionRating> {
}

export class BasePollRevisionOpinionRatingDuo
  extends SQDIDuo<IPollRevisionOpinionRating, PollRevisionOpinionRatingESelect, PollRevisionOpinionRatingECreateProperties, PollRevisionOpinionRatingEUpdateColumns, PollRevisionOpinionRatingEUpdateProperties, PollRevisionOpinionRatingEId, PollRevisionOpinionRatingGraph, QPollRevisionOpinionRating>
	implements IBasePollRevisionOpinionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(42)
	}
	
	constructor() {
		super(42)
	}
}


export interface IBasePollRevisionOpinionVersionDuo
  extends IDuo<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionGraph, QPollRevisionOpinionVersion> {
}

export class BasePollRevisionOpinionVersionDuo
  extends SQDIDuo<IPollRevisionOpinionVersion, PollRevisionOpinionVersionESelect, PollRevisionOpinionVersionECreateProperties, PollRevisionOpinionVersionEUpdateColumns, PollRevisionOpinionVersionEUpdateProperties, PollRevisionOpinionVersionEId, PollRevisionOpinionVersionGraph, QPollRevisionOpinionVersion>
	implements IBasePollRevisionOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(36)
	}
	
	constructor() {
		super(36)
	}
}


export interface IBasePollRevisionOpinionVersionTranslationDuo
  extends IDuo<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationGraph, QPollRevisionOpinionVersionTranslation> {
}

export class BasePollRevisionOpinionVersionTranslationDuo
  extends SQDIDuo<IPollRevisionOpinionVersionTranslation, PollRevisionOpinionVersionTranslationESelect, PollRevisionOpinionVersionTranslationECreateProperties, PollRevisionOpinionVersionTranslationEUpdateColumns, PollRevisionOpinionVersionTranslationEUpdateProperties, PollRevisionOpinionVersionTranslationEId, PollRevisionOpinionVersionTranslationGraph, QPollRevisionOpinionVersionTranslation>
	implements IBasePollRevisionOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(35)
	}
	
	constructor() {
		super(35)
	}
}


export interface IBasePollRevisionRatingDuo
  extends IDuo<IPollRevisionRating, PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingGraph, QPollRevisionRating> {
}

export class BasePollRevisionRatingDuo
  extends SQDIDuo<IPollRevisionRating, PollRevisionRatingESelect, PollRevisionRatingECreateProperties, PollRevisionRatingEUpdateColumns, PollRevisionRatingEUpdateProperties, PollRevisionRatingEId, PollRevisionRatingGraph, QPollRevisionRating>
	implements IBasePollRevisionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(47)
	}
	
	constructor() {
		super(47)
	}
}


export interface IBasePollRevisionTranslationDuo
  extends IDuo<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationGraph, QPollRevisionTranslation> {
}

export class BasePollRevisionTranslationDuo
  extends SQDIDuo<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationGraph, QPollRevisionTranslation>
	implements IBasePollRevisionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(49)
	}
	
	constructor() {
		super(49)
	}
}


export interface IBasePollRevisionTranslationRatingDuo
  extends IDuo<IPollRevisionTranslationRating, PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingGraph, QPollRevisionTranslationRating> {
}

export class BasePollRevisionTranslationRatingDuo
  extends SQDIDuo<IPollRevisionTranslationRating, PollRevisionTranslationRatingESelect, PollRevisionTranslationRatingECreateProperties, PollRevisionTranslationRatingEUpdateColumns, PollRevisionTranslationRatingEUpdateProperties, PollRevisionTranslationRatingEId, PollRevisionTranslationRatingGraph, QPollRevisionTranslationRating>
	implements IBasePollRevisionTranslationRatingDuo {

	static diSet(): boolean {
		return duoDiSet(48)
	}
	
	constructor() {
		super(48)
	}
}


export interface IBasePollRunDuo
  extends IDuo<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunGraph, QPollRun> {
}

export class BasePollRunDuo
  extends SQDIDuo<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunGraph, QPollRun>
	implements IBasePollRunDuo {

	static diSet(): boolean {
		return duoDiSet(19)
	}
	
	constructor() {
		super(19)
	}
}


export interface IBasePollRunContinentDuo
  extends IDuo<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentGraph, QPollRunContinent> {
}

export class BasePollRunContinentDuo
  extends SQDIDuo<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentGraph, QPollRunContinent>
	implements IBasePollRunContinentDuo {

	static diSet(): boolean {
		return duoDiSet(14)
	}
	
	constructor() {
		super(14)
	}
}


export interface IBasePollRunCountryDuo
  extends IDuo<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryGraph, QPollRunCountry> {
}

export class BasePollRunCountryDuo
  extends SQDIDuo<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryGraph, QPollRunCountry>
	implements IBasePollRunCountryDuo {

	static diSet(): boolean {
		return duoDiSet(15)
	}
	
	constructor() {
		super(15)
	}
}


export interface IBasePollRunCountyDuo
  extends IDuo<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyGraph, QPollRunCounty> {
}

export class BasePollRunCountyDuo
  extends SQDIDuo<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyGraph, QPollRunCounty>
	implements IBasePollRunCountyDuo {

	static diSet(): boolean {
		return duoDiSet(16)
	}
	
	constructor() {
		super(16)
	}
}


export interface IBasePollRunStateDuo
  extends IDuo<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateGraph, QPollRunState> {
}

export class BasePollRunStateDuo
  extends SQDIDuo<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateGraph, QPollRunState>
	implements IBasePollRunStateDuo {

	static diSet(): boolean {
		return duoDiSet(17)
	}
	
	constructor() {
		super(17)
	}
}


export interface IBasePollRunTownDuo
  extends IDuo<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownGraph, QPollRunTown> {
}

export class BasePollRunTownDuo
  extends SQDIDuo<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownGraph, QPollRunTown>
	implements IBasePollRunTownDuo {

	static diSet(): boolean {
		return duoDiSet(18)
	}
	
	constructor() {
		super(18)
	}
}


export interface IBasePollTypeDuo
  extends IDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeGraph, QPollType> {
}

export class BasePollTypeDuo
  extends SQDIDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeGraph, QPollType>
	implements IBasePollTypeDuo {

	static diSet(): boolean {
		return duoDiSet(44)
	}
	
	constructor() {
		super(44)
	}
}


export interface IBasePositionDuo
  extends IDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}

export class BasePositionDuo
  extends SQDIDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition>
	implements IBasePositionDuo {

	static diSet(): boolean {
		return duoDiSet(54)
	}
	
	constructor() {
		super(54)
	}
}


export interface IBasePositionOpinionVersionDuo
  extends IDuo<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionGraph, QPositionOpinionVersion> {
}

export class BasePositionOpinionVersionDuo
  extends SQDIDuo<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionGraph, QPositionOpinionVersion>
	implements IBasePositionOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(38)
	}
	
	constructor() {
		super(38)
	}
}


export interface IBasePositionOpinionVersionTranslationDuo
  extends IDuo<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationGraph, QPositionOpinionVersionTranslation> {
}

export class BasePositionOpinionVersionTranslationDuo
  extends SQDIDuo<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationGraph, QPositionOpinionVersionTranslation>
	implements IBasePositionOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(37)
	}
	
	constructor() {
		super(37)
	}
}


export interface IBasePositionTranslationDuo
  extends IDuo<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationGraph, QPositionTranslation> {
}

export class BasePositionTranslationDuo
  extends SQDIDuo<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationGraph, QPositionTranslation>
	implements IBasePositionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(53)
	}
	
	constructor() {
		super(53)
	}
}


export interface IBaseRatingDuo
  extends IDuo<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingGraph, QRating> {
}

export class BaseRatingDuo
  extends SQDIDuo<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingGraph, QRating>
	implements IBaseRatingDuo {

	static diSet(): boolean {
		return duoDiSet(41)
	}
	
	constructor() {
		super(41)
	}
}


export interface IBaseRatingSettingDuo
  extends IDuo<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingGraph, QRatingSetting> {
}

export class BaseRatingSettingDuo
  extends SQDIDuo<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingGraph, QRatingSetting>
	implements IBaseRatingSettingDuo {

	static diSet(): boolean {
		return duoDiSet(39)
	}
	
	constructor() {
		super(39)
	}
}


export interface IBaseRatingTypeDuo
  extends IDuo<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeGraph, QRatingType> {
}

export class BaseRatingTypeDuo
  extends SQDIDuo<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeGraph, QRatingType>
	implements IBaseRatingTypeDuo {

	static diSet(): boolean {
		return duoDiSet(40)
	}
	
	constructor() {
		super(40)
	}
}


export interface IBaseSkinDuo
  extends IDuo<ISkin, SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinGraph, QSkin> {
}

export class BaseSkinDuo
  extends SQDIDuo<ISkin, SkinESelect, SkinECreateProperties, SkinEUpdateColumns, SkinEUpdateProperties, SkinEId, SkinGraph, QSkin>
	implements IBaseSkinDuo {

	static diSet(): boolean {
		return duoDiSet(20)
	}
	
	constructor() {
		super(20)
	}
}


export interface IBaseStateDuo
  extends IDuo<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateGraph, QState> {
}

export class BaseStateDuo
  extends SQDIDuo<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateGraph, QState>
	implements IBaseStateDuo {

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseStateTownDuo
  extends IDuo<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownGraph, QStateTown> {
}

export class BaseStateTownDuo
  extends SQDIDuo<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownGraph, QStateTown>
	implements IBaseStateTownDuo {

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseThemeDuo
  extends IDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}

export class BaseThemeDuo
  extends SQDIDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme>
	implements IBaseThemeDuo {

	static diSet(): boolean {
		return duoDiSet(45)
	}
	
	constructor() {
		super(45)
	}
}


export interface IBaseTownDuo
  extends IDuo<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownGraph, QTown> {
}

export class BaseTownDuo
  extends SQDIDuo<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownGraph, QTown>
	implements IBaseTownDuo {

	static diSet(): boolean {
		return duoDiSet(10)
	}
	
	constructor() {
		super(10)
	}
}


export interface IBaseTranslationTypeDuo
  extends IDuo<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeGraph, QTranslationType> {
}

export class BaseTranslationTypeDuo
  extends SQDIDuo<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeGraph, QTranslationType>
	implements IBaseTranslationTypeDuo {

	static diSet(): boolean {
		return duoDiSet(30)
	}
	
	constructor() {
		super(30)
	}
}


export interface IBaseUserAccountDuo
  extends IDuo<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount> {
}

export class BaseUserAccountDuo
  extends SQDIDuo<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountGraph, QUserAccount>
	implements IBaseUserAccountDuo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseVoteDuo
  extends IDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteGraph, QVote> {
}

export class BaseVoteDuo
  extends SQDIDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteGraph, QVote>
	implements IBaseVoteDuo {

	static diSet(): boolean {
		return duoDiSet(26)
	}
	
	constructor() {
		super(26)
	}
}


export interface IBaseVoteFactorDuo
  extends IDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorGraph, QVoteFactor> {
}

export class BaseVoteFactorDuo
  extends SQDIDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorGraph, QVoteFactor>
	implements IBaseVoteFactorDuo {

	static diSet(): boolean {
		return duoDiSet(23)
	}
	
	constructor() {
		super(23)
	}
}


export interface IBaseVoteFactorTypeDuo
  extends IDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeGraph, QVoteFactorType> {
}

export class BaseVoteFactorTypeDuo
  extends SQDIDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeGraph, QVoteFactorType>
	implements IBaseVoteFactorTypeDuo {

	static diSet(): boolean {
		return duoDiSet(22)
	}
	
	constructor() {
		super(22)
	}
}


export interface IBaseVoteTypeDuo
  extends IDuo<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeGraph, QVoteType> {
}

export class BaseVoteTypeDuo
  extends SQDIDuo<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeGraph, QVoteType>
	implements IBaseVoteTypeDuo {

	static diSet(): boolean {
		return duoDiSet(25)
	}
	
	constructor() {
		super(25)
	}
}


export interface IBaseVoteVersionDuo
  extends IDuo<IVoteVersion, VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionGraph, QVoteVersion> {
}

export class BaseVoteVersionDuo
  extends SQDIDuo<IVoteVersion, VoteVersionESelect, VoteVersionECreateProperties, VoteVersionEUpdateColumns, VoteVersionEUpdateProperties, VoteVersionEId, VoteVersionGraph, QVoteVersion>
	implements IBaseVoteVersionDuo {

	static diSet(): boolean {
		return duoDiSet(24)
	}
	
	constructor() {
		super(24)
	}
}
