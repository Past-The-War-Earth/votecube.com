import {
	IDao,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity
} from '@airport/air-control'
import { Dao } from '@airport/check-in'
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
	ActorECascadeGraph,
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
	ApplicationECascadeGraph,
	QApplication
} from './user/qapplication'
import {
	IChosenPollRevision
} from './poll/revision/chosenpollrevision'
import {
	ChosenPollRevisionESelect,
	ChosenPollRevisionECreateColumns,
	ChosenPollRevisionECreateProperties,
	ChosenPollRevisionEUpdateColumns,
	ChosenPollRevisionEUpdateProperties,
	ChosenPollRevisionEId,
	ChosenPollRevisionECascadeGraph,
	QChosenPollRevision
} from './poll/revision/qchosenpollrevision'
import {
	IChosenPollRevisionType
} from './poll/revision/chosenpollrevisiontype'
import {
	ChosenPollRevisionTypeESelect,
	ChosenPollRevisionTypeECreateColumns,
	ChosenPollRevisionTypeECreateProperties,
	ChosenPollRevisionTypeEUpdateColumns,
	ChosenPollRevisionTypeEUpdateProperties,
	ChosenPollRevisionTypeEId,
	ChosenPollRevisionTypeECascadeGraph,
	QChosenPollRevisionType
} from './poll/revision/qchosenpollrevisiontype'
import {
	IChosenPollTranslation
} from './poll/translation/chosenpolltranslation'
import {
	ChosenPollTranslationESelect,
	ChosenPollTranslationECreateColumns,
	ChosenPollTranslationECreateProperties,
	ChosenPollTranslationEUpdateColumns,
	ChosenPollTranslationEUpdateProperties,
	ChosenPollTranslationEId,
	ChosenPollTranslationECascadeGraph,
	QChosenPollTranslation
} from './poll/translation/qchosenpolltranslation'
import {
	IChosenPollTranslationType
} from './poll/translation/chosenpolltranslationtype'
import {
	ChosenPollTranslationTypeESelect,
	ChosenPollTranslationTypeECreateColumns,
	ChosenPollTranslationTypeECreateProperties,
	ChosenPollTranslationTypeEUpdateColumns,
	ChosenPollTranslationTypeEUpdateProperties,
	ChosenPollTranslationTypeEId,
	ChosenPollTranslationTypeECascadeGraph,
	QChosenPollTranslationType
} from './poll/translation/qchosenpolltranslationtype'
import {
	IChosenVoteRevision
} from './vote/chosenvoterevision'
import {
	ChosenVoteRevisionESelect,
	ChosenVoteRevisionECreateColumns,
	ChosenVoteRevisionECreateProperties,
	ChosenVoteRevisionEUpdateColumns,
	ChosenVoteRevisionEUpdateProperties,
	ChosenVoteRevisionEId,
	ChosenVoteRevisionECascadeGraph,
	QChosenVoteRevision
} from './vote/qchosenvoterevision'
import {
	IChosenVoteRevisionType
} from './vote/chosenvoterevisiontype'
import {
	ChosenVoteRevisionTypeESelect,
	ChosenVoteRevisionTypeECreateColumns,
	ChosenVoteRevisionTypeECreateProperties,
	ChosenVoteRevisionTypeEUpdateColumns,
	ChosenVoteRevisionTypeEUpdateProperties,
	ChosenVoteRevisionTypeEId,
	ChosenVoteRevisionTypeECascadeGraph,
	QChosenVoteRevisionType
} from './vote/qchosenvoterevisiontype'
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
	ContinentECascadeGraph,
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
	CountryECascadeGraph,
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
	CountryTownECascadeGraph,
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
	CountyECascadeGraph,
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
	CountyTownECascadeGraph,
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
	DesignPatternECascadeGraph,
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
	DeviceECascadeGraph,
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
	EmojiECascadeGraph,
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
	FactorECascadeGraph,
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
	FactorOpinionVersionECascadeGraph,
	QFactorOpinionVersion
} from './opinion/qfactoropinionversion'
import {
	IFactorOpinionVersionRating
} from './opinion/user/factoropinionversionrating'
import {
	FactorOpinionVersionRatingESelect,
	FactorOpinionVersionRatingECreateColumns,
	FactorOpinionVersionRatingECreateProperties,
	FactorOpinionVersionRatingEUpdateColumns,
	FactorOpinionVersionRatingEUpdateProperties,
	FactorOpinionVersionRatingEId,
	FactorOpinionVersionRatingECascadeGraph,
	QFactorOpinionVersionRating
} from './opinion/user/qfactoropinionversionrating'
import {
	IFactorOpinionVersionRatingCount
} from './opinion/count/factoropinionversionratingcount'
import {
	FactorOpinionVersionRatingCountESelect,
	FactorOpinionVersionRatingCountECreateColumns,
	FactorOpinionVersionRatingCountECreateProperties,
	FactorOpinionVersionRatingCountEUpdateColumns,
	FactorOpinionVersionRatingCountEUpdateProperties,
	FactorOpinionVersionRatingCountEId,
	FactorOpinionVersionRatingCountECascadeGraph,
	QFactorOpinionVersionRatingCount
} from './opinion/count/qfactoropinionversionratingcount'
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
	FactorOpinionVersionTranslationECascadeGraph,
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
	FactorPositionECascadeGraph,
	QFactorPosition
} from './factor/position/qfactorposition'
import {
	IFactorSkin
} from './factor/factorskin'
import {
	FactorSkinESelect,
	FactorSkinECreateColumns,
	FactorSkinECreateProperties,
	FactorSkinEUpdateColumns,
	FactorSkinEUpdateProperties,
	FactorSkinEId,
	FactorSkinECascadeGraph,
	QFactorSkin
} from './factor/qfactorskin'
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
	FactorTranslationECascadeGraph,
	QFactorTranslation
} from './factor/qfactortranslation'
import {
	ILabel
} from './poll/revision/label/label'
import {
	LabelESelect,
	LabelECreateColumns,
	LabelECreateProperties,
	LabelEUpdateColumns,
	LabelEUpdateProperties,
	LabelEId,
	LabelECascadeGraph,
	QLabel
} from './poll/revision/label/qlabel'
import {
	ILabelTranslation
} from './poll/revision/label/labeltranslation'
import {
	LabelTranslationESelect,
	LabelTranslationECreateColumns,
	LabelTranslationECreateProperties,
	LabelTranslationEUpdateColumns,
	LabelTranslationEUpdateProperties,
	LabelTranslationEId,
	LabelTranslationECascadeGraph,
	QLabelTranslation
} from './poll/revision/label/qlabeltranslation'
import {
	ILabelTranslationRating
} from './poll/revision/label/labeltranslationrating'
import {
	LabelTranslationRatingESelect,
	LabelTranslationRatingECreateColumns,
	LabelTranslationRatingECreateProperties,
	LabelTranslationRatingEUpdateColumns,
	LabelTranslationRatingEUpdateProperties,
	LabelTranslationRatingEId,
	LabelTranslationRatingECascadeGraph,
	QLabelTranslationRating
} from './poll/revision/label/qlabeltranslationrating'
import {
	ILabelTranslationRatingCount
} from './poll/revision/label/labeltranslationratingcount'
import {
	LabelTranslationRatingCountESelect,
	LabelTranslationRatingCountECreateColumns,
	LabelTranslationRatingCountECreateProperties,
	LabelTranslationRatingCountEUpdateColumns,
	LabelTranslationRatingCountEUpdateProperties,
	LabelTranslationRatingCountEId,
	LabelTranslationRatingCountECascadeGraph,
	QLabelTranslationRatingCount
} from './poll/revision/label/qlabeltranslationratingcount'
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
	LanguageECascadeGraph,
	QLanguage
} from './infrastructure/qlanguage'
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
	PollECascadeGraph,
	QPoll
} from './poll/qpoll'
import {
	IPollFactorPositionRevision
} from './poll/revision/structure/pollfactorpositionrevision'
import {
	PollFactorPositionRevisionESelect,
	PollFactorPositionRevisionECreateColumns,
	PollFactorPositionRevisionECreateProperties,
	PollFactorPositionRevisionEUpdateColumns,
	PollFactorPositionRevisionEUpdateProperties,
	PollFactorPositionRevisionEId,
	PollFactorPositionRevisionECascadeGraph,
	QPollFactorPositionRevision
} from './poll/revision/structure/qpollfactorpositionrevision'
import {
	IPollFactorRevision
} from './poll/revision/structure/pollfactorrevision'
import {
	PollFactorRevisionESelect,
	PollFactorRevisionECreateColumns,
	PollFactorRevisionECreateProperties,
	PollFactorRevisionEUpdateColumns,
	PollFactorRevisionEUpdateProperties,
	PollFactorRevisionEId,
	PollFactorRevisionECascadeGraph,
	QPollFactorRevision
} from './poll/revision/structure/qpollfactorrevision'
import {
	IPollFactorSkinRevision
} from './poll/revision/structure/pollfactorskinrevision'
import {
	PollFactorSkinRevisionESelect,
	PollFactorSkinRevisionECreateColumns,
	PollFactorSkinRevisionECreateProperties,
	PollFactorSkinRevisionEUpdateColumns,
	PollFactorSkinRevisionEUpdateProperties,
	PollFactorSkinRevisionEId,
	PollFactorSkinRevisionECascadeGraph,
	QPollFactorSkinRevision
} from './poll/revision/structure/qpollfactorskinrevision'
import {
	IPollOpinion
} from './opinion/pollopinion'
import {
	PollOpinionESelect,
	PollOpinionECreateColumns,
	PollOpinionECreateProperties,
	PollOpinionEUpdateColumns,
	PollOpinionEUpdateProperties,
	PollOpinionEId,
	PollOpinionECascadeGraph,
	QPollOpinion
} from './opinion/qpollopinion'
import {
	IPollOpinionRatingCount
} from './opinion/count/pollopinionratingcount'
import {
	PollOpinionRatingCountESelect,
	PollOpinionRatingCountECreateColumns,
	PollOpinionRatingCountECreateProperties,
	PollOpinionRatingCountEUpdateColumns,
	PollOpinionRatingCountEUpdateProperties,
	PollOpinionRatingCountEId,
	PollOpinionRatingCountECascadeGraph,
	QPollOpinionRatingCount
} from './opinion/count/qpollopinionratingcount'
import {
	IPollOpinionVersion
} from './opinion/pollopinionversion'
import {
	PollOpinionVersionESelect,
	PollOpinionVersionECreateColumns,
	PollOpinionVersionECreateProperties,
	PollOpinionVersionEUpdateColumns,
	PollOpinionVersionEUpdateProperties,
	PollOpinionVersionEId,
	PollOpinionVersionECascadeGraph,
	QPollOpinionVersion
} from './opinion/qpollopinionversion'
import {
	IPollOpinionVersionRating
} from './opinion/user/pollopinionversionrating'
import {
	PollOpinionVersionRatingESelect,
	PollOpinionVersionRatingECreateColumns,
	PollOpinionVersionRatingECreateProperties,
	PollOpinionVersionRatingEUpdateColumns,
	PollOpinionVersionRatingEUpdateProperties,
	PollOpinionVersionRatingEId,
	PollOpinionVersionRatingECascadeGraph,
	QPollOpinionVersionRating
} from './opinion/user/qpollopinionversionrating'
import {
	IPollOpinionVersionRatingCount
} from './opinion/count/pollopinionversionratingcount'
import {
	PollOpinionVersionRatingCountESelect,
	PollOpinionVersionRatingCountECreateColumns,
	PollOpinionVersionRatingCountECreateProperties,
	PollOpinionVersionRatingCountEUpdateColumns,
	PollOpinionVersionRatingCountEUpdateProperties,
	PollOpinionVersionRatingCountEId,
	PollOpinionVersionRatingCountECascadeGraph,
	QPollOpinionVersionRatingCount
} from './opinion/count/qpollopinionversionratingcount'
import {
	IPollOpinionVersionTranslation
} from './opinion/translation/pollopinionversiontranslation'
import {
	PollOpinionVersionTranslationESelect,
	PollOpinionVersionTranslationECreateColumns,
	PollOpinionVersionTranslationECreateProperties,
	PollOpinionVersionTranslationEUpdateColumns,
	PollOpinionVersionTranslationEUpdateProperties,
	PollOpinionVersionTranslationEId,
	PollOpinionVersionTranslationECascadeGraph,
	QPollOpinionVersionTranslation
} from './opinion/translation/qpollopinionversiontranslation'
import {
	IPollOpinionsCount
} from './poll/count/pollopinionscount'
import {
	PollOpinionsCountESelect,
	PollOpinionsCountECreateColumns,
	PollOpinionsCountECreateProperties,
	PollOpinionsCountEUpdateColumns,
	PollOpinionsCountEUpdateProperties,
	PollOpinionsCountEId,
	PollOpinionsCountECascadeGraph,
	QPollOpinionsCount
} from './poll/count/qpollopinionscount'
import {
	IPollOpinionsRatingCount
} from './poll/count/pollopinionsratingcount'
import {
	PollOpinionsRatingCountESelect,
	PollOpinionsRatingCountECreateColumns,
	PollOpinionsRatingCountECreateProperties,
	PollOpinionsRatingCountEUpdateColumns,
	PollOpinionsRatingCountEUpdateProperties,
	PollOpinionsRatingCountEId,
	PollOpinionsRatingCountECascadeGraph,
	QPollOpinionsRatingCount
} from './poll/count/qpollopinionsratingcount'
import {
	IPollPositionRevision
} from './poll/revision/structure/pollpositionrevision'
import {
	PollPositionRevisionESelect,
	PollPositionRevisionECreateColumns,
	PollPositionRevisionECreateProperties,
	PollPositionRevisionEUpdateColumns,
	PollPositionRevisionEUpdateProperties,
	PollPositionRevisionEId,
	PollPositionRevisionECascadeGraph,
	QPollPositionRevision
} from './poll/revision/structure/qpollpositionrevision'
import {
	IPollRatingCount
} from './poll/count/pollratingcount'
import {
	PollRatingCountESelect,
	PollRatingCountECreateColumns,
	PollRatingCountECreateProperties,
	PollRatingCountEUpdateColumns,
	PollRatingCountEUpdateProperties,
	PollRatingCountEId,
	PollRatingCountECascadeGraph,
	QPollRatingCount
} from './poll/count/qpollratingcount'
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
	PollRevisionECascadeGraph,
	QPollRevision
} from './poll/revision/qpollrevision'
import {
	IPollRevisionFactorTranslation
} from './poll/revision/translation/pollrevisionfactortranslation'
import {
	PollRevisionFactorTranslationESelect,
	PollRevisionFactorTranslationECreateColumns,
	PollRevisionFactorTranslationECreateProperties,
	PollRevisionFactorTranslationEUpdateColumns,
	PollRevisionFactorTranslationEUpdateProperties,
	PollRevisionFactorTranslationEId,
	PollRevisionFactorTranslationECascadeGraph,
	QPollRevisionFactorTranslation
} from './poll/revision/translation/qpollrevisionfactortranslation'
import {
	IPollRevisionLabel
} from './poll/revision/pollrevisionlabel'
import {
	PollRevisionLabelESelect,
	PollRevisionLabelECreateColumns,
	PollRevisionLabelECreateProperties,
	PollRevisionLabelEUpdateColumns,
	PollRevisionLabelEUpdateProperties,
	PollRevisionLabelEId,
	PollRevisionLabelECascadeGraph,
	QPollRevisionLabel
} from './poll/revision/qpollrevisionlabel'
import {
	IPollRevisionOpinionCount
} from './poll/revision/count/pollrevisionopinioncount'
import {
	PollRevisionOpinionCountESelect,
	PollRevisionOpinionCountECreateColumns,
	PollRevisionOpinionCountECreateProperties,
	PollRevisionOpinionCountEUpdateColumns,
	PollRevisionOpinionCountEUpdateProperties,
	PollRevisionOpinionCountEId,
	PollRevisionOpinionCountECascadeGraph,
	QPollRevisionOpinionCount
} from './poll/revision/count/qpollrevisionopinioncount'
import {
	IPollRevisionOpinionRatingCount
} from './poll/revision/count/pollrevisionopinionratingcount'
import {
	PollRevisionOpinionRatingCountESelect,
	PollRevisionOpinionRatingCountECreateColumns,
	PollRevisionOpinionRatingCountECreateProperties,
	PollRevisionOpinionRatingCountEUpdateColumns,
	PollRevisionOpinionRatingCountEUpdateProperties,
	PollRevisionOpinionRatingCountEId,
	PollRevisionOpinionRatingCountECascadeGraph,
	QPollRevisionOpinionRatingCount
} from './poll/revision/count/qpollrevisionopinionratingcount'
import {
	IPollRevisionPositionTranslation
} from './poll/revision/translation/pollrevisionpositiontranslation'
import {
	PollRevisionPositionTranslationESelect,
	PollRevisionPositionTranslationECreateColumns,
	PollRevisionPositionTranslationECreateProperties,
	PollRevisionPositionTranslationEUpdateColumns,
	PollRevisionPositionTranslationEUpdateProperties,
	PollRevisionPositionTranslationEId,
	PollRevisionPositionTranslationECascadeGraph,
	QPollRevisionPositionTranslation
} from './poll/revision/translation/qpollrevisionpositiontranslation'
import {
	IPollRevisionRatingCount
} from './poll/revision/count/pollrevisionratingcount'
import {
	PollRevisionRatingCountESelect,
	PollRevisionRatingCountECreateColumns,
	PollRevisionRatingCountECreateProperties,
	PollRevisionRatingCountEUpdateColumns,
	PollRevisionRatingCountEUpdateProperties,
	PollRevisionRatingCountEId,
	PollRevisionRatingCountECascadeGraph,
	QPollRevisionRatingCount
} from './poll/revision/count/qpollrevisionratingcount'
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
	PollRevisionTranslationECascadeGraph,
	QPollRevisionTranslation
} from './poll/revision/translation/qpollrevisiontranslation'
import {
	IPollRevisionTranslationOpinionCount
} from './poll/revision/translation/count/pollrevisiontranslationopinioncount'
import {
	PollRevisionTranslationOpinionCountESelect,
	PollRevisionTranslationOpinionCountECreateColumns,
	PollRevisionTranslationOpinionCountECreateProperties,
	PollRevisionTranslationOpinionCountEUpdateColumns,
	PollRevisionTranslationOpinionCountEUpdateProperties,
	PollRevisionTranslationOpinionCountEId,
	PollRevisionTranslationOpinionCountECascadeGraph,
	QPollRevisionTranslationOpinionCount
} from './poll/revision/translation/count/qpollrevisiontranslationopinioncount'
import {
	IPollRevisionTranslationOpinionRatingCount
} from './poll/revision/translation/count/pollrevisiontranslationopinionratingcount'
import {
	PollRevisionTranslationOpinionRatingCountESelect,
	PollRevisionTranslationOpinionRatingCountECreateColumns,
	PollRevisionTranslationOpinionRatingCountECreateProperties,
	PollRevisionTranslationOpinionRatingCountEUpdateColumns,
	PollRevisionTranslationOpinionRatingCountEUpdateProperties,
	PollRevisionTranslationOpinionRatingCountEId,
	PollRevisionTranslationOpinionRatingCountECascadeGraph,
	QPollRevisionTranslationOpinionRatingCount
} from './poll/revision/translation/count/qpollrevisiontranslationopinionratingcount'
import {
	IPollRevisionTranslationRatingCount
} from './poll/revision/translation/count/pollrevisiontranslationratingcount'
import {
	PollRevisionTranslationRatingCountESelect,
	PollRevisionTranslationRatingCountECreateColumns,
	PollRevisionTranslationRatingCountECreateProperties,
	PollRevisionTranslationRatingCountEUpdateColumns,
	PollRevisionTranslationRatingCountEUpdateProperties,
	PollRevisionTranslationRatingCountEId,
	PollRevisionTranslationRatingCountECascadeGraph,
	QPollRevisionTranslationRatingCount
} from './poll/revision/translation/count/qpollrevisiontranslationratingcount'
import {
	IPollRevisionTranslationVoteCount
} from './poll/revision/translation/count/pollrevisiontranslationvotecount'
import {
	PollRevisionTranslationVoteCountESelect,
	PollRevisionTranslationVoteCountECreateColumns,
	PollRevisionTranslationVoteCountECreateProperties,
	PollRevisionTranslationVoteCountEUpdateColumns,
	PollRevisionTranslationVoteCountEUpdateProperties,
	PollRevisionTranslationVoteCountEId,
	PollRevisionTranslationVoteCountECascadeGraph,
	QPollRevisionTranslationVoteCount
} from './poll/revision/translation/count/qpollrevisiontranslationvotecount'
import {
	IPollRevisionVoteCount
} from './poll/revision/count/pollrevisionvotecount'
import {
	PollRevisionVoteCountESelect,
	PollRevisionVoteCountECreateColumns,
	PollRevisionVoteCountECreateProperties,
	PollRevisionVoteCountEUpdateColumns,
	PollRevisionVoteCountEUpdateProperties,
	PollRevisionVoteCountEId,
	PollRevisionVoteCountECascadeGraph,
	QPollRevisionVoteCount
} from './poll/revision/count/qpollrevisionvotecount'
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
	PollRunECascadeGraph,
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
	PollRunContinentECascadeGraph,
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
	PollRunCountryECascadeGraph,
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
	PollRunCountyECascadeGraph,
	QPollRunCounty
} from './poll/run/location/qpollruncounty'
import {
	IPollRunOpinionCount
} from './poll/run/count/pollrunopinioncount'
import {
	PollRunOpinionCountESelect,
	PollRunOpinionCountECreateColumns,
	PollRunOpinionCountECreateProperties,
	PollRunOpinionCountEUpdateColumns,
	PollRunOpinionCountEUpdateProperties,
	PollRunOpinionCountEId,
	PollRunOpinionCountECascadeGraph,
	QPollRunOpinionCount
} from './poll/run/count/qpollrunopinioncount'
import {
	IPollRunOpinionRatingCount
} from './poll/run/count/pollrunopinionratingcount'
import {
	PollRunOpinionRatingCountESelect,
	PollRunOpinionRatingCountECreateColumns,
	PollRunOpinionRatingCountECreateProperties,
	PollRunOpinionRatingCountEUpdateColumns,
	PollRunOpinionRatingCountEUpdateProperties,
	PollRunOpinionRatingCountEId,
	PollRunOpinionRatingCountECascadeGraph,
	QPollRunOpinionRatingCount
} from './poll/run/count/qpollrunopinionratingcount'
import {
	IPollRunRatingCount
} from './poll/run/count/pollrunratingcount'
import {
	PollRunRatingCountESelect,
	PollRunRatingCountECreateColumns,
	PollRunRatingCountECreateProperties,
	PollRunRatingCountEUpdateColumns,
	PollRunRatingCountEUpdateProperties,
	PollRunRatingCountEId,
	PollRunRatingCountECascadeGraph,
	QPollRunRatingCount
} from './poll/run/count/qpollrunratingcount'
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
	PollRunStateECascadeGraph,
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
	PollRunTownECascadeGraph,
	QPollRunTown
} from './poll/run/location/qpollruntown'
import {
	IPollRunVoteCount
} from './poll/run/count/pollrunvotecount'
import {
	PollRunVoteCountESelect,
	PollRunVoteCountECreateColumns,
	PollRunVoteCountECreateProperties,
	PollRunVoteCountEUpdateColumns,
	PollRunVoteCountEUpdateProperties,
	PollRunVoteCountEId,
	PollRunVoteCountECascadeGraph,
	QPollRunVoteCount
} from './poll/run/count/qpollrunvotecount'
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
	PollTypeECascadeGraph,
	QPollType
} from './poll/qpolltype'
import {
	IPollVoteCount
} from './poll/count/pollvotecount'
import {
	PollVoteCountESelect,
	PollVoteCountECreateColumns,
	PollVoteCountECreateProperties,
	PollVoteCountEUpdateColumns,
	PollVoteCountEUpdateProperties,
	PollVoteCountEId,
	PollVoteCountECascadeGraph,
	QPollVoteCount
} from './poll/count/qpollvotecount'
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
	PositionECascadeGraph,
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
	PositionOpinionVersionECascadeGraph,
	QPositionOpinionVersion
} from './opinion/qpositionopinionversion'
import {
	IPositionOpinionVersionRating
} from './opinion/user/positionopinionversionrating'
import {
	PositionOpinionVersionRatingESelect,
	PositionOpinionVersionRatingECreateColumns,
	PositionOpinionVersionRatingECreateProperties,
	PositionOpinionVersionRatingEUpdateColumns,
	PositionOpinionVersionRatingEUpdateProperties,
	PositionOpinionVersionRatingEId,
	PositionOpinionVersionRatingECascadeGraph,
	QPositionOpinionVersionRating
} from './opinion/user/qpositionopinionversionrating'
import {
	IPositionOpinionVersionRatingCount
} from './opinion/count/positionopinionversionratingcount'
import {
	PositionOpinionVersionRatingCountESelect,
	PositionOpinionVersionRatingCountECreateColumns,
	PositionOpinionVersionRatingCountECreateProperties,
	PositionOpinionVersionRatingCountEUpdateColumns,
	PositionOpinionVersionRatingCountEUpdateProperties,
	PositionOpinionVersionRatingCountEId,
	PositionOpinionVersionRatingCountECascadeGraph,
	QPositionOpinionVersionRatingCount
} from './opinion/count/qpositionopinionversionratingcount'
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
	PositionOpinionVersionTranslationECascadeGraph,
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
	PositionTranslationECascadeGraph,
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
	RatingECascadeGraph,
	QRating
} from './infrastructure/rating/qrating'
import {
	IRatingReason
} from './infrastructure/rating/ratingreason'
import {
	RatingReasonESelect,
	RatingReasonECreateColumns,
	RatingReasonECreateProperties,
	RatingReasonEUpdateColumns,
	RatingReasonEUpdateProperties,
	RatingReasonEId,
	RatingReasonECascadeGraph,
	QRatingReason
} from './infrastructure/rating/qratingreason'
import {
	IRatingReasonTranslation
} from './infrastructure/rating/ratingreasontranslation'
import {
	RatingReasonTranslationESelect,
	RatingReasonTranslationECreateColumns,
	RatingReasonTranslationECreateProperties,
	RatingReasonTranslationEUpdateColumns,
	RatingReasonTranslationEUpdateProperties,
	RatingReasonTranslationEId,
	RatingReasonTranslationECascadeGraph,
	QRatingReasonTranslation
} from './infrastructure/rating/qratingreasontranslation'
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
	RatingSettingECascadeGraph,
	QRatingSetting
} from './infrastructure/rating/qratingsetting'
import {
	IRatingTranslation
} from './infrastructure/rating/ratingtranslation'
import {
	RatingTranslationESelect,
	RatingTranslationECreateColumns,
	RatingTranslationECreateProperties,
	RatingTranslationEUpdateColumns,
	RatingTranslationEUpdateProperties,
	RatingTranslationEId,
	RatingTranslationECascadeGraph,
	QRatingTranslation
} from './infrastructure/rating/qratingtranslation'
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
	RatingTypeECascadeGraph,
	QRatingType
} from './infrastructure/rating/qratingtype'
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
	StateECascadeGraph,
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
	StateTownECascadeGraph,
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
	ThemeECascadeGraph,
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
	TownECascadeGraph,
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
	TranslationTypeECascadeGraph,
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
	UserAccountECascadeGraph,
	QUserAccount
} from './user/quseraccount'
import {
	IUserPoll
} from './poll/user/userpoll'
import {
	UserPollESelect,
	UserPollECreateColumns,
	UserPollECreateProperties,
	UserPollEUpdateColumns,
	UserPollEUpdateProperties,
	UserPollEId,
	UserPollECascadeGraph,
	QUserPoll
} from './poll/user/quserpoll'
import {
	IUserPollRating
} from './poll/user/userpollrating'
import {
	UserPollRatingESelect,
	UserPollRatingECreateColumns,
	UserPollRatingECreateProperties,
	UserPollRatingEUpdateColumns,
	UserPollRatingEUpdateProperties,
	UserPollRatingEId,
	UserPollRatingECascadeGraph,
	QUserPollRating
} from './poll/user/quserpollrating'
import {
	IUserPollRevision
} from './poll/user/userpollrevision'
import {
	UserPollRevisionESelect,
	UserPollRevisionECreateColumns,
	UserPollRevisionECreateProperties,
	UserPollRevisionEUpdateColumns,
	UserPollRevisionEUpdateProperties,
	UserPollRevisionEId,
	UserPollRevisionECascadeGraph,
	QUserPollRevision
} from './poll/user/quserpollrevision'
import {
	IUserPollRevisionRating
} from './poll/user/userpollrevisionrating'
import {
	UserPollRevisionRatingESelect,
	UserPollRevisionRatingECreateColumns,
	UserPollRevisionRatingECreateProperties,
	UserPollRevisionRatingEUpdateColumns,
	UserPollRevisionRatingEUpdateProperties,
	UserPollRevisionRatingEId,
	UserPollRevisionRatingECascadeGraph,
	QUserPollRevisionRating
} from './poll/user/quserpollrevisionrating'
import {
	IUserPollRevisionTranslation
} from './poll/user/userpollrevisiontranslation'
import {
	UserPollRevisionTranslationESelect,
	UserPollRevisionTranslationECreateColumns,
	UserPollRevisionTranslationECreateProperties,
	UserPollRevisionTranslationEUpdateColumns,
	UserPollRevisionTranslationEUpdateProperties,
	UserPollRevisionTranslationEId,
	UserPollRevisionTranslationECascadeGraph,
	QUserPollRevisionTranslation
} from './poll/user/quserpollrevisiontranslation'
import {
	IUserPollRevisionTranslationRating
} from './poll/user/userpollrevisiontranslationrating'
import {
	UserPollRevisionTranslationRatingESelect,
	UserPollRevisionTranslationRatingECreateColumns,
	UserPollRevisionTranslationRatingECreateProperties,
	UserPollRevisionTranslationRatingEUpdateColumns,
	UserPollRevisionTranslationRatingEUpdateProperties,
	UserPollRevisionTranslationRatingEId,
	UserPollRevisionTranslationRatingECascadeGraph,
	QUserPollRevisionTranslationRating
} from './poll/user/quserpollrevisiontranslationrating'
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
	VoteECascadeGraph,
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
	VoteFactorECascadeGraph,
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
	VoteFactorTypeECascadeGraph,
	QVoteFactorType
} from './vote/qvotefactortype'
import {
	IVoteRevision
} from './vote/voterevision'
import {
	VoteRevisionESelect,
	VoteRevisionECreateColumns,
	VoteRevisionECreateProperties,
	VoteRevisionEUpdateColumns,
	VoteRevisionEUpdateProperties,
	VoteRevisionEId,
	VoteRevisionECascadeGraph,
	QVoteRevision
} from './vote/qvoterevision'
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
	VoteTypeECascadeGraph,
	QVoteType
} from './vote/qvotetype'


// Schema Q object Dependency Injection readiness detection Dao
export class SQDIDao<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
  EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity>
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
  extends IDao<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor> {
}

export class BaseActorDao
  extends SQDIDao<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor>
	implements IBaseActorDao {

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseApplicationDao
  extends IDao<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication> {
}

export class BaseApplicationDao
  extends SQDIDao<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication>
	implements IBaseApplicationDao {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseChosenPollRevisionDao
  extends IDao<IChosenPollRevision, ChosenPollRevisionESelect, ChosenPollRevisionECreateProperties, ChosenPollRevisionEUpdateColumns, ChosenPollRevisionEUpdateProperties, ChosenPollRevisionEId, ChosenPollRevisionECascadeGraph, QChosenPollRevision> {
}

export class BaseChosenPollRevisionDao
  extends SQDIDao<IChosenPollRevision, ChosenPollRevisionESelect, ChosenPollRevisionECreateProperties, ChosenPollRevisionEUpdateColumns, ChosenPollRevisionEUpdateProperties, ChosenPollRevisionEId, ChosenPollRevisionECascadeGraph, QChosenPollRevision>
	implements IBaseChosenPollRevisionDao {

	static diSet(): boolean {
		return duoDiSet(51)
	}
	
	constructor() {
		super(51)
	}
}


export interface IBaseChosenPollRevisionTypeDao
  extends IDao<IChosenPollRevisionType, ChosenPollRevisionTypeESelect, ChosenPollRevisionTypeECreateProperties, ChosenPollRevisionTypeEUpdateColumns, ChosenPollRevisionTypeEUpdateProperties, ChosenPollRevisionTypeEId, ChosenPollRevisionTypeECascadeGraph, QChosenPollRevisionType> {
}

export class BaseChosenPollRevisionTypeDao
  extends SQDIDao<IChosenPollRevisionType, ChosenPollRevisionTypeESelect, ChosenPollRevisionTypeECreateProperties, ChosenPollRevisionTypeEUpdateColumns, ChosenPollRevisionTypeEUpdateProperties, ChosenPollRevisionTypeEId, ChosenPollRevisionTypeECascadeGraph, QChosenPollRevisionType>
	implements IBaseChosenPollRevisionTypeDao {

	static diSet(): boolean {
		return duoDiSet(50)
	}
	
	constructor() {
		super(50)
	}
}


export interface IBaseChosenPollTranslationDao
  extends IDao<IChosenPollTranslation, ChosenPollTranslationESelect, ChosenPollTranslationECreateProperties, ChosenPollTranslationEUpdateColumns, ChosenPollTranslationEUpdateProperties, ChosenPollTranslationEId, ChosenPollTranslationECascadeGraph, QChosenPollTranslation> {
}

export class BaseChosenPollTranslationDao
  extends SQDIDao<IChosenPollTranslation, ChosenPollTranslationESelect, ChosenPollTranslationECreateProperties, ChosenPollTranslationEUpdateColumns, ChosenPollTranslationEUpdateProperties, ChosenPollTranslationEId, ChosenPollTranslationECascadeGraph, QChosenPollTranslation>
	implements IBaseChosenPollTranslationDao {

	static diSet(): boolean {
		return duoDiSet(49)
	}
	
	constructor() {
		super(49)
	}
}


export interface IBaseChosenPollTranslationTypeDao
  extends IDao<IChosenPollTranslationType, ChosenPollTranslationTypeESelect, ChosenPollTranslationTypeECreateProperties, ChosenPollTranslationTypeEUpdateColumns, ChosenPollTranslationTypeEUpdateProperties, ChosenPollTranslationTypeEId, ChosenPollTranslationTypeECascadeGraph, QChosenPollTranslationType> {
}

export class BaseChosenPollTranslationTypeDao
  extends SQDIDao<IChosenPollTranslationType, ChosenPollTranslationTypeESelect, ChosenPollTranslationTypeECreateProperties, ChosenPollTranslationTypeEUpdateColumns, ChosenPollTranslationTypeEUpdateProperties, ChosenPollTranslationTypeEId, ChosenPollTranslationTypeECascadeGraph, QChosenPollTranslationType>
	implements IBaseChosenPollTranslationTypeDao {

	static diSet(): boolean {
		return duoDiSet(48)
	}
	
	constructor() {
		super(48)
	}
}


export interface IBaseChosenVoteRevisionDao
  extends IDao<IChosenVoteRevision, ChosenVoteRevisionESelect, ChosenVoteRevisionECreateProperties, ChosenVoteRevisionEUpdateColumns, ChosenVoteRevisionEUpdateProperties, ChosenVoteRevisionEId, ChosenVoteRevisionECascadeGraph, QChosenVoteRevision> {
}

export class BaseChosenVoteRevisionDao
  extends SQDIDao<IChosenVoteRevision, ChosenVoteRevisionESelect, ChosenVoteRevisionECreateProperties, ChosenVoteRevisionEUpdateColumns, ChosenVoteRevisionEUpdateProperties, ChosenVoteRevisionEId, ChosenVoteRevisionECascadeGraph, QChosenVoteRevision>
	implements IBaseChosenVoteRevisionDao {

	static diSet(): boolean {
		return duoDiSet(55)
	}
	
	constructor() {
		super(55)
	}
}


export interface IBaseChosenVoteRevisionTypeDao
  extends IDao<IChosenVoteRevisionType, ChosenVoteRevisionTypeESelect, ChosenVoteRevisionTypeECreateProperties, ChosenVoteRevisionTypeEUpdateColumns, ChosenVoteRevisionTypeEUpdateProperties, ChosenVoteRevisionTypeEId, ChosenVoteRevisionTypeECascadeGraph, QChosenVoteRevisionType> {
}

export class BaseChosenVoteRevisionTypeDao
  extends SQDIDao<IChosenVoteRevisionType, ChosenVoteRevisionTypeESelect, ChosenVoteRevisionTypeECreateProperties, ChosenVoteRevisionTypeEUpdateColumns, ChosenVoteRevisionTypeEUpdateProperties, ChosenVoteRevisionTypeEId, ChosenVoteRevisionTypeECascadeGraph, QChosenVoteRevisionType>
	implements IBaseChosenVoteRevisionTypeDao {

	static diSet(): boolean {
		return duoDiSet(54)
	}
	
	constructor() {
		super(54)
	}
}


export interface IBaseContinentDao
  extends IDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent> {
}

export class BaseContinentDao
  extends SQDIDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent>
	implements IBaseContinentDao {

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseCountryDao
  extends IDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry> {
}

export class BaseCountryDao
  extends SQDIDao<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry>
	implements IBaseCountryDao {

	static diSet(): boolean {
		return duoDiSet(14)
	}
	
	constructor() {
		super(14)
	}
}


export interface IBaseCountryTownDao
  extends IDao<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown> {
}

export class BaseCountryTownDao
  extends SQDIDao<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown>
	implements IBaseCountryTownDao {

	static diSet(): boolean {
		return duoDiSet(13)
	}
	
	constructor() {
		super(13)
	}
}


export interface IBaseCountyDao
  extends IDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty> {
}

export class BaseCountyDao
  extends SQDIDao<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty>
	implements IBaseCountyDao {

	static diSet(): boolean {
		return duoDiSet(11)
	}
	
	constructor() {
		super(11)
	}
}


export interface IBaseCountyTownDao
  extends IDao<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown> {
}

export class BaseCountyTownDao
  extends SQDIDao<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown>
	implements IBaseCountyTownDao {

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseDesignPatternDao
  extends IDao<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern> {
}

export class BaseDesignPatternDao
  extends SQDIDao<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern>
	implements IBaseDesignPatternDao {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseDeviceDao
  extends IDao<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice> {
}

export class BaseDeviceDao
  extends SQDIDao<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice>
	implements IBaseDeviceDao {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseEmojiDao
  extends IDao<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji> {
}

export class BaseEmojiDao
  extends SQDIDao<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji>
	implements IBaseEmojiDao {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseFactorDao
  extends IDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor> {
}

export class BaseFactorDao
  extends SQDIDao<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor>
	implements IBaseFactorDao {

	static diSet(): boolean {
		return duoDiSet(86)
	}
	
	constructor() {
		super(86)
	}
}


export interface IBaseFactorOpinionVersionDao
  extends IDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion> {
}

export class BaseFactorOpinionVersionDao
  extends SQDIDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion>
	implements IBaseFactorOpinionVersionDao {

	static diSet(): boolean {
		return duoDiSet(72)
	}
	
	constructor() {
		super(72)
	}
}


export interface IBaseFactorOpinionVersionRatingDao
  extends IDao<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating> {
}

export class BaseFactorOpinionVersionRatingDao
  extends SQDIDao<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating>
	implements IBaseFactorOpinionVersionRatingDao {

	static diSet(): boolean {
		return duoDiSet(71)
	}
	
	constructor() {
		super(71)
	}
}


export interface IBaseFactorOpinionVersionRatingCountDao
  extends IDao<IFactorOpinionVersionRatingCount, FactorOpinionVersionRatingCountESelect, FactorOpinionVersionRatingCountECreateProperties, FactorOpinionVersionRatingCountEUpdateColumns, FactorOpinionVersionRatingCountEUpdateProperties, FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountECascadeGraph, QFactorOpinionVersionRatingCount> {
}

export class BaseFactorOpinionVersionRatingCountDao
  extends SQDIDao<IFactorOpinionVersionRatingCount, FactorOpinionVersionRatingCountESelect, FactorOpinionVersionRatingCountECreateProperties, FactorOpinionVersionRatingCountEUpdateColumns, FactorOpinionVersionRatingCountEUpdateProperties, FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountECascadeGraph, QFactorOpinionVersionRatingCount>
	implements IBaseFactorOpinionVersionRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(64)
	}
	
	constructor() {
		super(64)
	}
}


export interface IBaseFactorOpinionVersionTranslationDao
  extends IDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation> {
}

export class BaseFactorOpinionVersionTranslationDao
  extends SQDIDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation>
	implements IBaseFactorOpinionVersionTranslationDao {

	static diSet(): boolean {
		return duoDiSet(70)
	}
	
	constructor() {
		super(70)
	}
}


export interface IBaseFactorPositionDao
  extends IDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition> {
}

export class BaseFactorPositionDao
  extends SQDIDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition>
	implements IBaseFactorPositionDao {

	static diSet(): boolean {
		return duoDiSet(87)
	}
	
	constructor() {
		super(87)
	}
}


export interface IBaseFactorSkinDao
  extends IDao<IFactorSkin, FactorSkinESelect, FactorSkinECreateProperties, FactorSkinEUpdateColumns, FactorSkinEUpdateProperties, FactorSkinEId, FactorSkinECascadeGraph, QFactorSkin> {
}

export class BaseFactorSkinDao
  extends SQDIDao<IFactorSkin, FactorSkinESelect, FactorSkinECreateProperties, FactorSkinEUpdateColumns, FactorSkinEUpdateProperties, FactorSkinEId, FactorSkinECascadeGraph, QFactorSkin>
	implements IBaseFactorSkinDao {

	static diSet(): boolean {
		return duoDiSet(83)
	}
	
	constructor() {
		super(83)
	}
}


export interface IBaseFactorTranslationDao
  extends IDao<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationECascadeGraph, QFactorTranslation> {
}

export class BaseFactorTranslationDao
  extends SQDIDao<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationECascadeGraph, QFactorTranslation>
	implements IBaseFactorTranslationDao {

	static diSet(): boolean {
		return duoDiSet(42)
	}
	
	constructor() {
		super(42)
	}
}


export interface IBaseLabelDao
  extends IDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelECascadeGraph, QLabel> {
}

export class BaseLabelDao
  extends SQDIDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelECascadeGraph, QLabel>
	implements IBaseLabelDao {

	static diSet(): boolean {
		return duoDiSet(81)
	}
	
	constructor() {
		super(81)
	}
}


export interface IBaseLabelTranslationDao
  extends IDao<ILabelTranslation, LabelTranslationESelect, LabelTranslationECreateProperties, LabelTranslationEUpdateColumns, LabelTranslationEUpdateProperties, LabelTranslationEId, LabelTranslationECascadeGraph, QLabelTranslation> {
}

export class BaseLabelTranslationDao
  extends SQDIDao<ILabelTranslation, LabelTranslationESelect, LabelTranslationECreateProperties, LabelTranslationEUpdateColumns, LabelTranslationEUpdateProperties, LabelTranslationEId, LabelTranslationECascadeGraph, QLabelTranslation>
	implements IBaseLabelTranslationDao {

	static diSet(): boolean {
		return duoDiSet(95)
	}
	
	constructor() {
		super(95)
	}
}


export interface IBaseLabelTranslationRatingDao
  extends IDao<ILabelTranslationRating, LabelTranslationRatingESelect, LabelTranslationRatingECreateProperties, LabelTranslationRatingEUpdateColumns, LabelTranslationRatingEUpdateProperties, LabelTranslationRatingEId, LabelTranslationRatingECascadeGraph, QLabelTranslationRating> {
}

export class BaseLabelTranslationRatingDao
  extends SQDIDao<ILabelTranslationRating, LabelTranslationRatingESelect, LabelTranslationRatingECreateProperties, LabelTranslationRatingEUpdateColumns, LabelTranslationRatingEUpdateProperties, LabelTranslationRatingEId, LabelTranslationRatingECascadeGraph, QLabelTranslationRating>
	implements IBaseLabelTranslationRatingDao {

	static diSet(): boolean {
		return duoDiSet(96)
	}
	
	constructor() {
		super(96)
	}
}


export interface IBaseLabelTranslationRatingCountDao
  extends IDao<ILabelTranslationRatingCount, LabelTranslationRatingCountESelect, LabelTranslationRatingCountECreateProperties, LabelTranslationRatingCountEUpdateColumns, LabelTranslationRatingCountEUpdateProperties, LabelTranslationRatingCountEId, LabelTranslationRatingCountECascadeGraph, QLabelTranslationRatingCount> {
}

export class BaseLabelTranslationRatingCountDao
  extends SQDIDao<ILabelTranslationRatingCount, LabelTranslationRatingCountESelect, LabelTranslationRatingCountECreateProperties, LabelTranslationRatingCountEUpdateColumns, LabelTranslationRatingCountEUpdateProperties, LabelTranslationRatingCountEId, LabelTranslationRatingCountECascadeGraph, QLabelTranslationRatingCount>
	implements IBaseLabelTranslationRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(94)
	}
	
	constructor() {
		super(94)
	}
}


export interface IBaseLanguageDao
  extends IDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage> {
}

export class BaseLanguageDao
  extends SQDIDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage>
	implements IBaseLanguageDao {

	static diSet(): boolean {
		return duoDiSet(16)
	}
	
	constructor() {
		super(16)
	}
}


export interface IBasePollDao
  extends IDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll> {
}

export class BasePollDao
  extends SQDIDao<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll>
	implements IBasePollDao {

	static diSet(): boolean {
		return duoDiSet(52)
	}
	
	constructor() {
		super(52)
	}
}


export interface IBasePollFactorPositionRevisionDao
  extends IDao<IPollFactorPositionRevision, PollFactorPositionRevisionESelect, PollFactorPositionRevisionECreateProperties, PollFactorPositionRevisionEUpdateColumns, PollFactorPositionRevisionEUpdateProperties, PollFactorPositionRevisionEId, PollFactorPositionRevisionECascadeGraph, QPollFactorPositionRevision> {
}

export class BasePollFactorPositionRevisionDao
  extends SQDIDao<IPollFactorPositionRevision, PollFactorPositionRevisionESelect, PollFactorPositionRevisionECreateProperties, PollFactorPositionRevisionEUpdateColumns, PollFactorPositionRevisionEUpdateProperties, PollFactorPositionRevisionEId, PollFactorPositionRevisionECascadeGraph, QPollFactorPositionRevision>
	implements IBasePollFactorPositionRevisionDao {

	static diSet(): boolean {
		return duoDiSet(58)
	}
	
	constructor() {
		super(58)
	}
}


export interface IBasePollFactorRevisionDao
  extends IDao<IPollFactorRevision, PollFactorRevisionESelect, PollFactorRevisionECreateProperties, PollFactorRevisionEUpdateColumns, PollFactorRevisionEUpdateProperties, PollFactorRevisionEId, PollFactorRevisionECascadeGraph, QPollFactorRevision> {
}

export class BasePollFactorRevisionDao
  extends SQDIDao<IPollFactorRevision, PollFactorRevisionESelect, PollFactorRevisionECreateProperties, PollFactorRevisionEUpdateColumns, PollFactorRevisionEUpdateProperties, PollFactorRevisionEId, PollFactorRevisionECascadeGraph, QPollFactorRevision>
	implements IBasePollFactorRevisionDao {

	static diSet(): boolean {
		return duoDiSet(63)
	}
	
	constructor() {
		super(63)
	}
}


export interface IBasePollFactorSkinRevisionDao
  extends IDao<IPollFactorSkinRevision, PollFactorSkinRevisionESelect, PollFactorSkinRevisionECreateProperties, PollFactorSkinRevisionEUpdateColumns, PollFactorSkinRevisionEUpdateProperties, PollFactorSkinRevisionEId, PollFactorSkinRevisionECascadeGraph, QPollFactorSkinRevision> {
}

export class BasePollFactorSkinRevisionDao
  extends SQDIDao<IPollFactorSkinRevision, PollFactorSkinRevisionESelect, PollFactorSkinRevisionECreateProperties, PollFactorSkinRevisionEUpdateColumns, PollFactorSkinRevisionEUpdateProperties, PollFactorSkinRevisionEId, PollFactorSkinRevisionECascadeGraph, QPollFactorSkinRevision>
	implements IBasePollFactorSkinRevisionDao {

	static diSet(): boolean {
		return duoDiSet(84)
	}
	
	constructor() {
		super(84)
	}
}


export interface IBasePollOpinionDao
  extends IDao<IPollOpinion, PollOpinionESelect, PollOpinionECreateProperties, PollOpinionEUpdateColumns, PollOpinionEUpdateProperties, PollOpinionEId, PollOpinionECascadeGraph, QPollOpinion> {
}

export class BasePollOpinionDao
  extends SQDIDao<IPollOpinion, PollOpinionESelect, PollOpinionECreateProperties, PollOpinionEUpdateColumns, PollOpinionEUpdateProperties, PollOpinionEId, PollOpinionECascadeGraph, QPollOpinion>
	implements IBasePollOpinionDao {

	static diSet(): boolean {
		return duoDiSet(76)
	}
	
	constructor() {
		super(76)
	}
}


export interface IBasePollOpinionRatingCountDao
  extends IDao<IPollOpinionRatingCount, PollOpinionRatingCountESelect, PollOpinionRatingCountECreateProperties, PollOpinionRatingCountEUpdateColumns, PollOpinionRatingCountEUpdateProperties, PollOpinionRatingCountEId, PollOpinionRatingCountECascadeGraph, QPollOpinionRatingCount> {
}

export class BasePollOpinionRatingCountDao
  extends SQDIDao<IPollOpinionRatingCount, PollOpinionRatingCountESelect, PollOpinionRatingCountECreateProperties, PollOpinionRatingCountEUpdateColumns, PollOpinionRatingCountEUpdateProperties, PollOpinionRatingCountEId, PollOpinionRatingCountECascadeGraph, QPollOpinionRatingCount>
	implements IBasePollOpinionRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(53)
	}
	
	constructor() {
		super(53)
	}
}


export interface IBasePollOpinionVersionDao
  extends IDao<IPollOpinionVersion, PollOpinionVersionESelect, PollOpinionVersionECreateProperties, PollOpinionVersionEUpdateColumns, PollOpinionVersionEUpdateProperties, PollOpinionVersionEId, PollOpinionVersionECascadeGraph, QPollOpinionVersion> {
}

export class BasePollOpinionVersionDao
  extends SQDIDao<IPollOpinionVersion, PollOpinionVersionESelect, PollOpinionVersionECreateProperties, PollOpinionVersionEUpdateColumns, PollOpinionVersionEUpdateProperties, PollOpinionVersionEId, PollOpinionVersionECascadeGraph, QPollOpinionVersion>
	implements IBasePollOpinionVersionDao {

	static diSet(): boolean {
		return duoDiSet(75)
	}
	
	constructor() {
		super(75)
	}
}


export interface IBasePollOpinionVersionRatingDao
  extends IDao<IPollOpinionVersionRating, PollOpinionVersionRatingESelect, PollOpinionVersionRatingECreateProperties, PollOpinionVersionRatingEUpdateColumns, PollOpinionVersionRatingEUpdateProperties, PollOpinionVersionRatingEId, PollOpinionVersionRatingECascadeGraph, QPollOpinionVersionRating> {
}

export class BasePollOpinionVersionRatingDao
  extends SQDIDao<IPollOpinionVersionRating, PollOpinionVersionRatingESelect, PollOpinionVersionRatingECreateProperties, PollOpinionVersionRatingEUpdateColumns, PollOpinionVersionRatingEUpdateProperties, PollOpinionVersionRatingEId, PollOpinionVersionRatingECascadeGraph, QPollOpinionVersionRating>
	implements IBasePollOpinionVersionRatingDao {

	static diSet(): boolean {
		return duoDiSet(74)
	}
	
	constructor() {
		super(74)
	}
}


export interface IBasePollOpinionVersionRatingCountDao
  extends IDao<IPollOpinionVersionRatingCount, PollOpinionVersionRatingCountESelect, PollOpinionVersionRatingCountECreateProperties, PollOpinionVersionRatingCountEUpdateColumns, PollOpinionVersionRatingCountEUpdateProperties, PollOpinionVersionRatingCountEId, PollOpinionVersionRatingCountECascadeGraph, QPollOpinionVersionRatingCount> {
}

export class BasePollOpinionVersionRatingCountDao
  extends SQDIDao<IPollOpinionVersionRatingCount, PollOpinionVersionRatingCountESelect, PollOpinionVersionRatingCountECreateProperties, PollOpinionVersionRatingCountEUpdateColumns, PollOpinionVersionRatingCountEUpdateProperties, PollOpinionVersionRatingCountEId, PollOpinionVersionRatingCountECascadeGraph, QPollOpinionVersionRatingCount>
	implements IBasePollOpinionVersionRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(62)
	}
	
	constructor() {
		super(62)
	}
}


export interface IBasePollOpinionVersionTranslationDao
  extends IDao<IPollOpinionVersionTranslation, PollOpinionVersionTranslationESelect, PollOpinionVersionTranslationECreateProperties, PollOpinionVersionTranslationEUpdateColumns, PollOpinionVersionTranslationEUpdateProperties, PollOpinionVersionTranslationEId, PollOpinionVersionTranslationECascadeGraph, QPollOpinionVersionTranslation> {
}

export class BasePollOpinionVersionTranslationDao
  extends SQDIDao<IPollOpinionVersionTranslation, PollOpinionVersionTranslationESelect, PollOpinionVersionTranslationECreateProperties, PollOpinionVersionTranslationEUpdateColumns, PollOpinionVersionTranslationEUpdateProperties, PollOpinionVersionTranslationEId, PollOpinionVersionTranslationECascadeGraph, QPollOpinionVersionTranslation>
	implements IBasePollOpinionVersionTranslationDao {

	static diSet(): boolean {
		return duoDiSet(73)
	}
	
	constructor() {
		super(73)
	}
}


export interface IBasePollOpinionsCountDao
  extends IDao<IPollOpinionsCount, PollOpinionsCountESelect, PollOpinionsCountECreateProperties, PollOpinionsCountEUpdateColumns, PollOpinionsCountEUpdateProperties, PollOpinionsCountEId, PollOpinionsCountECascadeGraph, QPollOpinionsCount> {
}

export class BasePollOpinionsCountDao
  extends SQDIDao<IPollOpinionsCount, PollOpinionsCountESelect, PollOpinionsCountECreateProperties, PollOpinionsCountEUpdateColumns, PollOpinionsCountEUpdateProperties, PollOpinionsCountEId, PollOpinionsCountECascadeGraph, QPollOpinionsCount>
	implements IBasePollOpinionsCountDao {

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBasePollOpinionsRatingCountDao
  extends IDao<IPollOpinionsRatingCount, PollOpinionsRatingCountESelect, PollOpinionsRatingCountECreateProperties, PollOpinionsRatingCountEUpdateColumns, PollOpinionsRatingCountEUpdateProperties, PollOpinionsRatingCountEId, PollOpinionsRatingCountECascadeGraph, QPollOpinionsRatingCount> {
}

export class BasePollOpinionsRatingCountDao
  extends SQDIDao<IPollOpinionsRatingCount, PollOpinionsRatingCountESelect, PollOpinionsRatingCountECreateProperties, PollOpinionsRatingCountEUpdateColumns, PollOpinionsRatingCountEUpdateProperties, PollOpinionsRatingCountEId, PollOpinionsRatingCountECascadeGraph, QPollOpinionsRatingCount>
	implements IBasePollOpinionsRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(20)
	}
	
	constructor() {
		super(20)
	}
}


export interface IBasePollPositionRevisionDao
  extends IDao<IPollPositionRevision, PollPositionRevisionESelect, PollPositionRevisionECreateProperties, PollPositionRevisionEUpdateColumns, PollPositionRevisionEUpdateProperties, PollPositionRevisionEId, PollPositionRevisionECascadeGraph, QPollPositionRevision> {
}

export class BasePollPositionRevisionDao
  extends SQDIDao<IPollPositionRevision, PollPositionRevisionESelect, PollPositionRevisionECreateProperties, PollPositionRevisionEUpdateColumns, PollPositionRevisionEUpdateProperties, PollPositionRevisionEId, PollPositionRevisionECascadeGraph, QPollPositionRevision>
	implements IBasePollPositionRevisionDao {

	static diSet(): boolean {
		return duoDiSet(65)
	}
	
	constructor() {
		super(65)
	}
}


export interface IBasePollRatingCountDao
  extends IDao<IPollRatingCount, PollRatingCountESelect, PollRatingCountECreateProperties, PollRatingCountEUpdateColumns, PollRatingCountEUpdateProperties, PollRatingCountEId, PollRatingCountECascadeGraph, QPollRatingCount> {
}

export class BasePollRatingCountDao
  extends SQDIDao<IPollRatingCount, PollRatingCountESelect, PollRatingCountECreateProperties, PollRatingCountEUpdateColumns, PollRatingCountEUpdateProperties, PollRatingCountEId, PollRatingCountECascadeGraph, QPollRatingCount>
	implements IBasePollRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(21)
	}
	
	constructor() {
		super(21)
	}
}


export interface IBasePollRevisionDao
  extends IDao<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionECascadeGraph, QPollRevision> {
}

export class BasePollRevisionDao
  extends SQDIDao<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionECascadeGraph, QPollRevision>
	implements IBasePollRevisionDao {

	static diSet(): boolean {
		return duoDiSet(85)
	}
	
	constructor() {
		super(85)
	}
}


export interface IBasePollRevisionFactorTranslationDao
  extends IDao<IPollRevisionFactorTranslation, PollRevisionFactorTranslationESelect, PollRevisionFactorTranslationECreateProperties, PollRevisionFactorTranslationEUpdateColumns, PollRevisionFactorTranslationEUpdateProperties, PollRevisionFactorTranslationEId, PollRevisionFactorTranslationECascadeGraph, QPollRevisionFactorTranslation> {
}

export class BasePollRevisionFactorTranslationDao
  extends SQDIDao<IPollRevisionFactorTranslation, PollRevisionFactorTranslationESelect, PollRevisionFactorTranslationECreateProperties, PollRevisionFactorTranslationEUpdateColumns, PollRevisionFactorTranslationEUpdateProperties, PollRevisionFactorTranslationEId, PollRevisionFactorTranslationECascadeGraph, QPollRevisionFactorTranslation>
	implements IBasePollRevisionFactorTranslationDao {

	static diSet(): boolean {
		return duoDiSet(43)
	}
	
	constructor() {
		super(43)
	}
}


export interface IBasePollRevisionLabelDao
  extends IDao<IPollRevisionLabel, PollRevisionLabelESelect, PollRevisionLabelECreateProperties, PollRevisionLabelEUpdateColumns, PollRevisionLabelEUpdateProperties, PollRevisionLabelEId, PollRevisionLabelECascadeGraph, QPollRevisionLabel> {
}

export class BasePollRevisionLabelDao
  extends SQDIDao<IPollRevisionLabel, PollRevisionLabelESelect, PollRevisionLabelECreateProperties, PollRevisionLabelEUpdateColumns, PollRevisionLabelEUpdateProperties, PollRevisionLabelEId, PollRevisionLabelECascadeGraph, QPollRevisionLabel>
	implements IBasePollRevisionLabelDao {

	static diSet(): boolean {
		return duoDiSet(82)
	}
	
	constructor() {
		super(82)
	}
}


export interface IBasePollRevisionOpinionCountDao
  extends IDao<IPollRevisionOpinionCount, PollRevisionOpinionCountESelect, PollRevisionOpinionCountECreateProperties, PollRevisionOpinionCountEUpdateColumns, PollRevisionOpinionCountEUpdateProperties, PollRevisionOpinionCountEId, PollRevisionOpinionCountECascadeGraph, QPollRevisionOpinionCount> {
}

export class BasePollRevisionOpinionCountDao
  extends SQDIDao<IPollRevisionOpinionCount, PollRevisionOpinionCountESelect, PollRevisionOpinionCountECreateProperties, PollRevisionOpinionCountEUpdateColumns, PollRevisionOpinionCountEUpdateProperties, PollRevisionOpinionCountEId, PollRevisionOpinionCountECascadeGraph, QPollRevisionOpinionCount>
	implements IBasePollRevisionOpinionCountDao {

	static diSet(): boolean {
		return duoDiSet(77)
	}
	
	constructor() {
		super(77)
	}
}


export interface IBasePollRevisionOpinionRatingCountDao
  extends IDao<IPollRevisionOpinionRatingCount, PollRevisionOpinionRatingCountESelect, PollRevisionOpinionRatingCountECreateProperties, PollRevisionOpinionRatingCountEUpdateColumns, PollRevisionOpinionRatingCountEUpdateProperties, PollRevisionOpinionRatingCountEId, PollRevisionOpinionRatingCountECascadeGraph, QPollRevisionOpinionRatingCount> {
}

export class BasePollRevisionOpinionRatingCountDao
  extends SQDIDao<IPollRevisionOpinionRatingCount, PollRevisionOpinionRatingCountESelect, PollRevisionOpinionRatingCountECreateProperties, PollRevisionOpinionRatingCountEUpdateColumns, PollRevisionOpinionRatingCountEUpdateProperties, PollRevisionOpinionRatingCountEId, PollRevisionOpinionRatingCountECascadeGraph, QPollRevisionOpinionRatingCount>
	implements IBasePollRevisionOpinionRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(78)
	}
	
	constructor() {
		super(78)
	}
}


export interface IBasePollRevisionPositionTranslationDao
  extends IDao<IPollRevisionPositionTranslation, PollRevisionPositionTranslationESelect, PollRevisionPositionTranslationECreateProperties, PollRevisionPositionTranslationEUpdateColumns, PollRevisionPositionTranslationEUpdateProperties, PollRevisionPositionTranslationEId, PollRevisionPositionTranslationECascadeGraph, QPollRevisionPositionTranslation> {
}

export class BasePollRevisionPositionTranslationDao
  extends SQDIDao<IPollRevisionPositionTranslation, PollRevisionPositionTranslationESelect, PollRevisionPositionTranslationECreateProperties, PollRevisionPositionTranslationEUpdateColumns, PollRevisionPositionTranslationEUpdateProperties, PollRevisionPositionTranslationEId, PollRevisionPositionTranslationECascadeGraph, QPollRevisionPositionTranslation>
	implements IBasePollRevisionPositionTranslationDao {

	static diSet(): boolean {
		return duoDiSet(46)
	}
	
	constructor() {
		super(46)
	}
}


export interface IBasePollRevisionRatingCountDao
  extends IDao<IPollRevisionRatingCount, PollRevisionRatingCountESelect, PollRevisionRatingCountECreateProperties, PollRevisionRatingCountEUpdateColumns, PollRevisionRatingCountEUpdateProperties, PollRevisionRatingCountEId, PollRevisionRatingCountECascadeGraph, QPollRevisionRatingCount> {
}

export class BasePollRevisionRatingCountDao
  extends SQDIDao<IPollRevisionRatingCount, PollRevisionRatingCountESelect, PollRevisionRatingCountECreateProperties, PollRevisionRatingCountEUpdateColumns, PollRevisionRatingCountEUpdateProperties, PollRevisionRatingCountEId, PollRevisionRatingCountECascadeGraph, QPollRevisionRatingCount>
	implements IBasePollRevisionRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(79)
	}
	
	constructor() {
		super(79)
	}
}


export interface IBasePollRevisionTranslationDao
  extends IDao<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationECascadeGraph, QPollRevisionTranslation> {
}

export class BasePollRevisionTranslationDao
  extends SQDIDao<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationECascadeGraph, QPollRevisionTranslation>
	implements IBasePollRevisionTranslationDao {

	static diSet(): boolean {
		return duoDiSet(47)
	}
	
	constructor() {
		super(47)
	}
}


export interface IBasePollRevisionTranslationOpinionCountDao
  extends IDao<IPollRevisionTranslationOpinionCount, PollRevisionTranslationOpinionCountESelect, PollRevisionTranslationOpinionCountECreateProperties, PollRevisionTranslationOpinionCountEUpdateColumns, PollRevisionTranslationOpinionCountEUpdateProperties, PollRevisionTranslationOpinionCountEId, PollRevisionTranslationOpinionCountECascadeGraph, QPollRevisionTranslationOpinionCount> {
}

export class BasePollRevisionTranslationOpinionCountDao
  extends SQDIDao<IPollRevisionTranslationOpinionCount, PollRevisionTranslationOpinionCountESelect, PollRevisionTranslationOpinionCountECreateProperties, PollRevisionTranslationOpinionCountEUpdateColumns, PollRevisionTranslationOpinionCountEUpdateProperties, PollRevisionTranslationOpinionCountEId, PollRevisionTranslationOpinionCountECascadeGraph, QPollRevisionTranslationOpinionCount>
	implements IBasePollRevisionTranslationOpinionCountDao {

	static diSet(): boolean {
		return duoDiSet(38)
	}
	
	constructor() {
		super(38)
	}
}


export interface IBasePollRevisionTranslationOpinionRatingCountDao
  extends IDao<IPollRevisionTranslationOpinionRatingCount, PollRevisionTranslationOpinionRatingCountESelect, PollRevisionTranslationOpinionRatingCountECreateProperties, PollRevisionTranslationOpinionRatingCountEUpdateColumns, PollRevisionTranslationOpinionRatingCountEUpdateProperties, PollRevisionTranslationOpinionRatingCountEId, PollRevisionTranslationOpinionRatingCountECascadeGraph, QPollRevisionTranslationOpinionRatingCount> {
}

export class BasePollRevisionTranslationOpinionRatingCountDao
  extends SQDIDao<IPollRevisionTranslationOpinionRatingCount, PollRevisionTranslationOpinionRatingCountESelect, PollRevisionTranslationOpinionRatingCountECreateProperties, PollRevisionTranslationOpinionRatingCountEUpdateColumns, PollRevisionTranslationOpinionRatingCountEUpdateProperties, PollRevisionTranslationOpinionRatingCountEId, PollRevisionTranslationOpinionRatingCountECascadeGraph, QPollRevisionTranslationOpinionRatingCount>
	implements IBasePollRevisionTranslationOpinionRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(39)
	}
	
	constructor() {
		super(39)
	}
}


export interface IBasePollRevisionTranslationRatingCountDao
  extends IDao<IPollRevisionTranslationRatingCount, PollRevisionTranslationRatingCountESelect, PollRevisionTranslationRatingCountECreateProperties, PollRevisionTranslationRatingCountEUpdateColumns, PollRevisionTranslationRatingCountEUpdateProperties, PollRevisionTranslationRatingCountEId, PollRevisionTranslationRatingCountECascadeGraph, QPollRevisionTranslationRatingCount> {
}

export class BasePollRevisionTranslationRatingCountDao
  extends SQDIDao<IPollRevisionTranslationRatingCount, PollRevisionTranslationRatingCountESelect, PollRevisionTranslationRatingCountECreateProperties, PollRevisionTranslationRatingCountEUpdateColumns, PollRevisionTranslationRatingCountEUpdateProperties, PollRevisionTranslationRatingCountEId, PollRevisionTranslationRatingCountECascadeGraph, QPollRevisionTranslationRatingCount>
	implements IBasePollRevisionTranslationRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(40)
	}
	
	constructor() {
		super(40)
	}
}


export interface IBasePollRevisionTranslationVoteCountDao
  extends IDao<IPollRevisionTranslationVoteCount, PollRevisionTranslationVoteCountESelect, PollRevisionTranslationVoteCountECreateProperties, PollRevisionTranslationVoteCountEUpdateColumns, PollRevisionTranslationVoteCountEUpdateProperties, PollRevisionTranslationVoteCountEId, PollRevisionTranslationVoteCountECascadeGraph, QPollRevisionTranslationVoteCount> {
}

export class BasePollRevisionTranslationVoteCountDao
  extends SQDIDao<IPollRevisionTranslationVoteCount, PollRevisionTranslationVoteCountESelect, PollRevisionTranslationVoteCountECreateProperties, PollRevisionTranslationVoteCountEUpdateColumns, PollRevisionTranslationVoteCountEUpdateProperties, PollRevisionTranslationVoteCountEId, PollRevisionTranslationVoteCountECascadeGraph, QPollRevisionTranslationVoteCount>
	implements IBasePollRevisionTranslationVoteCountDao {

	static diSet(): boolean {
		return duoDiSet(41)
	}
	
	constructor() {
		super(41)
	}
}


export interface IBasePollRevisionVoteCountDao
  extends IDao<IPollRevisionVoteCount, PollRevisionVoteCountESelect, PollRevisionVoteCountECreateProperties, PollRevisionVoteCountEUpdateColumns, PollRevisionVoteCountEUpdateProperties, PollRevisionVoteCountEId, PollRevisionVoteCountECascadeGraph, QPollRevisionVoteCount> {
}

export class BasePollRevisionVoteCountDao
  extends SQDIDao<IPollRevisionVoteCount, PollRevisionVoteCountESelect, PollRevisionVoteCountECreateProperties, PollRevisionVoteCountEUpdateColumns, PollRevisionVoteCountEUpdateProperties, PollRevisionVoteCountEId, PollRevisionVoteCountECascadeGraph, QPollRevisionVoteCount>
	implements IBasePollRevisionVoteCountDao {

	static diSet(): boolean {
		return duoDiSet(80)
	}
	
	constructor() {
		super(80)
	}
}


export interface IBasePollRunDao
  extends IDao<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunECascadeGraph, QPollRun> {
}

export class BasePollRunDao
  extends SQDIDao<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunECascadeGraph, QPollRun>
	implements IBasePollRunDao {

	static diSet(): boolean {
		return duoDiSet(28)
	}
	
	constructor() {
		super(28)
	}
}


export interface IBasePollRunContinentDao
  extends IDao<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentECascadeGraph, QPollRunContinent> {
}

export class BasePollRunContinentDao
  extends SQDIDao<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentECascadeGraph, QPollRunContinent>
	implements IBasePollRunContinentDao {

	static diSet(): boolean {
		return duoDiSet(23)
	}
	
	constructor() {
		super(23)
	}
}


export interface IBasePollRunCountryDao
  extends IDao<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryECascadeGraph, QPollRunCountry> {
}

export class BasePollRunCountryDao
  extends SQDIDao<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryECascadeGraph, QPollRunCountry>
	implements IBasePollRunCountryDao {

	static diSet(): boolean {
		return duoDiSet(24)
	}
	
	constructor() {
		super(24)
	}
}


export interface IBasePollRunCountyDao
  extends IDao<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyECascadeGraph, QPollRunCounty> {
}

export class BasePollRunCountyDao
  extends SQDIDao<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyECascadeGraph, QPollRunCounty>
	implements IBasePollRunCountyDao {

	static diSet(): boolean {
		return duoDiSet(25)
	}
	
	constructor() {
		super(25)
	}
}


export interface IBasePollRunOpinionCountDao
  extends IDao<IPollRunOpinionCount, PollRunOpinionCountESelect, PollRunOpinionCountECreateProperties, PollRunOpinionCountEUpdateColumns, PollRunOpinionCountEUpdateProperties, PollRunOpinionCountEId, PollRunOpinionCountECascadeGraph, QPollRunOpinionCount> {
}

export class BasePollRunOpinionCountDao
  extends SQDIDao<IPollRunOpinionCount, PollRunOpinionCountESelect, PollRunOpinionCountECreateProperties, PollRunOpinionCountEUpdateColumns, PollRunOpinionCountEUpdateProperties, PollRunOpinionCountEId, PollRunOpinionCountECascadeGraph, QPollRunOpinionCount>
	implements IBasePollRunOpinionCountDao {

	static diSet(): boolean {
		return duoDiSet(90)
	}
	
	constructor() {
		super(90)
	}
}


export interface IBasePollRunOpinionRatingCountDao
  extends IDao<IPollRunOpinionRatingCount, PollRunOpinionRatingCountESelect, PollRunOpinionRatingCountECreateProperties, PollRunOpinionRatingCountEUpdateColumns, PollRunOpinionRatingCountEUpdateProperties, PollRunOpinionRatingCountEId, PollRunOpinionRatingCountECascadeGraph, QPollRunOpinionRatingCount> {
}

export class BasePollRunOpinionRatingCountDao
  extends SQDIDao<IPollRunOpinionRatingCount, PollRunOpinionRatingCountESelect, PollRunOpinionRatingCountECreateProperties, PollRunOpinionRatingCountEUpdateColumns, PollRunOpinionRatingCountEUpdateProperties, PollRunOpinionRatingCountEId, PollRunOpinionRatingCountECascadeGraph, QPollRunOpinionRatingCount>
	implements IBasePollRunOpinionRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(91)
	}
	
	constructor() {
		super(91)
	}
}


export interface IBasePollRunRatingCountDao
  extends IDao<IPollRunRatingCount, PollRunRatingCountESelect, PollRunRatingCountECreateProperties, PollRunRatingCountEUpdateColumns, PollRunRatingCountEUpdateProperties, PollRunRatingCountEId, PollRunRatingCountECascadeGraph, QPollRunRatingCount> {
}

export class BasePollRunRatingCountDao
  extends SQDIDao<IPollRunRatingCount, PollRunRatingCountESelect, PollRunRatingCountECreateProperties, PollRunRatingCountEUpdateColumns, PollRunRatingCountEUpdateProperties, PollRunRatingCountEId, PollRunRatingCountECascadeGraph, QPollRunRatingCount>
	implements IBasePollRunRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(92)
	}
	
	constructor() {
		super(92)
	}
}


export interface IBasePollRunStateDao
  extends IDao<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateECascadeGraph, QPollRunState> {
}

export class BasePollRunStateDao
  extends SQDIDao<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateECascadeGraph, QPollRunState>
	implements IBasePollRunStateDao {

	static diSet(): boolean {
		return duoDiSet(26)
	}
	
	constructor() {
		super(26)
	}
}


export interface IBasePollRunTownDao
  extends IDao<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownECascadeGraph, QPollRunTown> {
}

export class BasePollRunTownDao
  extends SQDIDao<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownECascadeGraph, QPollRunTown>
	implements IBasePollRunTownDao {

	static diSet(): boolean {
		return duoDiSet(27)
	}
	
	constructor() {
		super(27)
	}
}


export interface IBasePollRunVoteCountDao
  extends IDao<IPollRunVoteCount, PollRunVoteCountESelect, PollRunVoteCountECreateProperties, PollRunVoteCountEUpdateColumns, PollRunVoteCountEUpdateProperties, PollRunVoteCountEId, PollRunVoteCountECascadeGraph, QPollRunVoteCount> {
}

export class BasePollRunVoteCountDao
  extends SQDIDao<IPollRunVoteCount, PollRunVoteCountESelect, PollRunVoteCountECreateProperties, PollRunVoteCountEUpdateColumns, PollRunVoteCountEUpdateProperties, PollRunVoteCountEId, PollRunVoteCountECascadeGraph, QPollRunVoteCount>
	implements IBasePollRunVoteCountDao {

	static diSet(): boolean {
		return duoDiSet(93)
	}
	
	constructor() {
		super(93)
	}
}


export interface IBasePollTypeDao
  extends IDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType> {
}

export class BasePollTypeDao
  extends SQDIDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType>
	implements IBasePollTypeDao {

	static diSet(): boolean {
		return duoDiSet(29)
	}
	
	constructor() {
		super(29)
	}
}


export interface IBasePollVoteCountDao
  extends IDao<IPollVoteCount, PollVoteCountESelect, PollVoteCountECreateProperties, PollVoteCountEUpdateColumns, PollVoteCountEUpdateProperties, PollVoteCountEId, PollVoteCountECascadeGraph, QPollVoteCount> {
}

export class BasePollVoteCountDao
  extends SQDIDao<IPollVoteCount, PollVoteCountESelect, PollVoteCountECreateProperties, PollVoteCountEUpdateColumns, PollVoteCountEUpdateProperties, PollVoteCountEId, PollVoteCountECascadeGraph, QPollVoteCount>
	implements IBasePollVoteCountDao {

	static diSet(): boolean {
		return duoDiSet(22)
	}
	
	constructor() {
		super(22)
	}
}


export interface IBasePositionDao
  extends IDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition> {
}

export class BasePositionDao
  extends SQDIDao<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition>
	implements IBasePositionDao {

	static diSet(): boolean {
		return duoDiSet(44)
	}
	
	constructor() {
		super(44)
	}
}


export interface IBasePositionOpinionVersionDao
  extends IDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion> {
}

export class BasePositionOpinionVersionDao
  extends SQDIDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion>
	implements IBasePositionOpinionVersionDao {

	static diSet(): boolean {
		return duoDiSet(69)
	}
	
	constructor() {
		super(69)
	}
}


export interface IBasePositionOpinionVersionRatingDao
  extends IDao<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating> {
}

export class BasePositionOpinionVersionRatingDao
  extends SQDIDao<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating>
	implements IBasePositionOpinionVersionRatingDao {

	static diSet(): boolean {
		return duoDiSet(68)
	}
	
	constructor() {
		super(68)
	}
}


export interface IBasePositionOpinionVersionRatingCountDao
  extends IDao<IPositionOpinionVersionRatingCount, PositionOpinionVersionRatingCountESelect, PositionOpinionVersionRatingCountECreateProperties, PositionOpinionVersionRatingCountEUpdateColumns, PositionOpinionVersionRatingCountEUpdateProperties, PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountECascadeGraph, QPositionOpinionVersionRatingCount> {
}

export class BasePositionOpinionVersionRatingCountDao
  extends SQDIDao<IPositionOpinionVersionRatingCount, PositionOpinionVersionRatingCountESelect, PositionOpinionVersionRatingCountECreateProperties, PositionOpinionVersionRatingCountEUpdateColumns, PositionOpinionVersionRatingCountEUpdateProperties, PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountECascadeGraph, QPositionOpinionVersionRatingCount>
	implements IBasePositionOpinionVersionRatingCountDao {

	static diSet(): boolean {
		return duoDiSet(66)
	}
	
	constructor() {
		super(66)
	}
}


export interface IBasePositionOpinionVersionTranslationDao
  extends IDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation> {
}

export class BasePositionOpinionVersionTranslationDao
  extends SQDIDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation>
	implements IBasePositionOpinionVersionTranslationDao {

	static diSet(): boolean {
		return duoDiSet(67)
	}
	
	constructor() {
		super(67)
	}
}


export interface IBasePositionTranslationDao
  extends IDao<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationECascadeGraph, QPositionTranslation> {
}

export class BasePositionTranslationDao
  extends SQDIDao<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationECascadeGraph, QPositionTranslation>
	implements IBasePositionTranslationDao {

	static diSet(): boolean {
		return duoDiSet(45)
	}
	
	constructor() {
		super(45)
	}
}


export interface IBaseRatingDao
  extends IDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating> {
}

export class BaseRatingDao
  extends SQDIDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating>
	implements IBaseRatingDao {

	static diSet(): boolean {
		return duoDiSet(19)
	}
	
	constructor() {
		super(19)
	}
}


export interface IBaseRatingReasonDao
  extends IDao<IRatingReason, RatingReasonESelect, RatingReasonECreateProperties, RatingReasonEUpdateColumns, RatingReasonEUpdateProperties, RatingReasonEId, RatingReasonECascadeGraph, QRatingReason> {
}

export class BaseRatingReasonDao
  extends SQDIDao<IRatingReason, RatingReasonESelect, RatingReasonECreateProperties, RatingReasonEUpdateColumns, RatingReasonEUpdateProperties, RatingReasonEId, RatingReasonECascadeGraph, QRatingReason>
	implements IBaseRatingReasonDao {

	static diSet(): boolean {
		return duoDiSet(89)
	}
	
	constructor() {
		super(89)
	}
}


export interface IBaseRatingReasonTranslationDao
  extends IDao<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation> {
}

export class BaseRatingReasonTranslationDao
  extends SQDIDao<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation>
	implements IBaseRatingReasonTranslationDao {

	static diSet(): boolean {
		return duoDiSet(88)
	}
	
	constructor() {
		super(88)
	}
}


export interface IBaseRatingSettingDao
  extends IDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting> {
}

export class BaseRatingSettingDao
  extends SQDIDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting>
	implements IBaseRatingSettingDao {

	static diSet(): boolean {
		return duoDiSet(15)
	}
	
	constructor() {
		super(15)
	}
}


export interface IBaseRatingTranslationDao
  extends IDao<IRatingTranslation, RatingTranslationESelect, RatingTranslationECreateProperties, RatingTranslationEUpdateColumns, RatingTranslationEUpdateProperties, RatingTranslationEId, RatingTranslationECascadeGraph, QRatingTranslation> {
}

export class BaseRatingTranslationDao
  extends SQDIDao<IRatingTranslation, RatingTranslationESelect, RatingTranslationECreateProperties, RatingTranslationEUpdateColumns, RatingTranslationEUpdateProperties, RatingTranslationEId, RatingTranslationECascadeGraph, QRatingTranslation>
	implements IBaseRatingTranslationDao {

	static diSet(): boolean {
		return duoDiSet(17)
	}
	
	constructor() {
		super(17)
	}
}


export interface IBaseRatingTypeDao
  extends IDao<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType> {
}

export class BaseRatingTypeDao
  extends SQDIDao<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType>
	implements IBaseRatingTypeDao {

	static diSet(): boolean {
		return duoDiSet(18)
	}
	
	constructor() {
		super(18)
	}
}


export interface IBaseStateDao
  extends IDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateECascadeGraph, QState> {
}

export class BaseStateDao
  extends SQDIDao<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateECascadeGraph, QState>
	implements IBaseStateDao {

	static diSet(): boolean {
		return duoDiSet(10)
	}
	
	constructor() {
		super(10)
	}
}


export interface IBaseStateTownDao
  extends IDao<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown> {
}

export class BaseStateTownDao
  extends SQDIDao<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown>
	implements IBaseStateTownDao {

	static diSet(): boolean {
		return duoDiSet(9)
	}
	
	constructor() {
		super(9)
	}
}


export interface IBaseThemeDao
  extends IDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme> {
}

export class BaseThemeDao
  extends SQDIDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme>
	implements IBaseThemeDao {

	static diSet(): boolean {
		return duoDiSet(30)
	}
	
	constructor() {
		super(30)
	}
}


export interface IBaseTownDao
  extends IDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown> {
}

export class BaseTownDao
  extends SQDIDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown>
	implements IBaseTownDao {

	static diSet(): boolean {
		return duoDiSet(12)
	}
	
	constructor() {
		super(12)
	}
}


export interface IBaseTranslationTypeDao
  extends IDao<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType> {
}

export class BaseTranslationTypeDao
  extends SQDIDao<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType>
	implements IBaseTranslationTypeDao {

	static diSet(): boolean {
		return duoDiSet(31)
	}
	
	constructor() {
		super(31)
	}
}


export interface IBaseUserAccountDao
  extends IDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount> {
}

export class BaseUserAccountDao
  extends SQDIDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount>
	implements IBaseUserAccountDao {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseUserPollDao
  extends IDao<IUserPoll, UserPollESelect, UserPollECreateProperties, UserPollEUpdateColumns, UserPollEUpdateProperties, UserPollEId, UserPollECascadeGraph, QUserPoll> {
}

export class BaseUserPollDao
  extends SQDIDao<IUserPoll, UserPollESelect, UserPollECreateProperties, UserPollEUpdateColumns, UserPollEUpdateProperties, UserPollEId, UserPollECascadeGraph, QUserPoll>
	implements IBaseUserPollDao {

	static diSet(): boolean {
		return duoDiSet(33)
	}
	
	constructor() {
		super(33)
	}
}


export interface IBaseUserPollRatingDao
  extends IDao<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating> {
}

export class BaseUserPollRatingDao
  extends SQDIDao<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating>
	implements IBaseUserPollRatingDao {

	static diSet(): boolean {
		return duoDiSet(32)
	}
	
	constructor() {
		super(32)
	}
}


export interface IBaseUserPollRevisionDao
  extends IDao<IUserPollRevision, UserPollRevisionESelect, UserPollRevisionECreateProperties, UserPollRevisionEUpdateColumns, UserPollRevisionEUpdateProperties, UserPollRevisionEId, UserPollRevisionECascadeGraph, QUserPollRevision> {
}

export class BaseUserPollRevisionDao
  extends SQDIDao<IUserPollRevision, UserPollRevisionESelect, UserPollRevisionECreateProperties, UserPollRevisionEUpdateColumns, UserPollRevisionEUpdateProperties, UserPollRevisionEId, UserPollRevisionECascadeGraph, QUserPollRevision>
	implements IBaseUserPollRevisionDao {

	static diSet(): boolean {
		return duoDiSet(35)
	}
	
	constructor() {
		super(35)
	}
}


export interface IBaseUserPollRevisionRatingDao
  extends IDao<IUserPollRevisionRating, UserPollRevisionRatingESelect, UserPollRevisionRatingECreateProperties, UserPollRevisionRatingEUpdateColumns, UserPollRevisionRatingEUpdateProperties, UserPollRevisionRatingEId, UserPollRevisionRatingECascadeGraph, QUserPollRevisionRating> {
}

export class BaseUserPollRevisionRatingDao
  extends SQDIDao<IUserPollRevisionRating, UserPollRevisionRatingESelect, UserPollRevisionRatingECreateProperties, UserPollRevisionRatingEUpdateColumns, UserPollRevisionRatingEUpdateProperties, UserPollRevisionRatingEId, UserPollRevisionRatingECascadeGraph, QUserPollRevisionRating>
	implements IBaseUserPollRevisionRatingDao {

	static diSet(): boolean {
		return duoDiSet(34)
	}
	
	constructor() {
		super(34)
	}
}


export interface IBaseUserPollRevisionTranslationDao
  extends IDao<IUserPollRevisionTranslation, UserPollRevisionTranslationESelect, UserPollRevisionTranslationECreateProperties, UserPollRevisionTranslationEUpdateColumns, UserPollRevisionTranslationEUpdateProperties, UserPollRevisionTranslationEId, UserPollRevisionTranslationECascadeGraph, QUserPollRevisionTranslation> {
}

export class BaseUserPollRevisionTranslationDao
  extends SQDIDao<IUserPollRevisionTranslation, UserPollRevisionTranslationESelect, UserPollRevisionTranslationECreateProperties, UserPollRevisionTranslationEUpdateColumns, UserPollRevisionTranslationEUpdateProperties, UserPollRevisionTranslationEId, UserPollRevisionTranslationECascadeGraph, QUserPollRevisionTranslation>
	implements IBaseUserPollRevisionTranslationDao {

	static diSet(): boolean {
		return duoDiSet(36)
	}
	
	constructor() {
		super(36)
	}
}


export interface IBaseUserPollRevisionTranslationRatingDao
  extends IDao<IUserPollRevisionTranslationRating, UserPollRevisionTranslationRatingESelect, UserPollRevisionTranslationRatingECreateProperties, UserPollRevisionTranslationRatingEUpdateColumns, UserPollRevisionTranslationRatingEUpdateProperties, UserPollRevisionTranslationRatingEId, UserPollRevisionTranslationRatingECascadeGraph, QUserPollRevisionTranslationRating> {
}

export class BaseUserPollRevisionTranslationRatingDao
  extends SQDIDao<IUserPollRevisionTranslationRating, UserPollRevisionTranslationRatingESelect, UserPollRevisionTranslationRatingECreateProperties, UserPollRevisionTranslationRatingEUpdateColumns, UserPollRevisionTranslationRatingEUpdateProperties, UserPollRevisionTranslationRatingEId, UserPollRevisionTranslationRatingECascadeGraph, QUserPollRevisionTranslationRating>
	implements IBaseUserPollRevisionTranslationRatingDao {

	static diSet(): boolean {
		return duoDiSet(37)
	}
	
	constructor() {
		super(37)
	}
}


export interface IBaseVoteDao
  extends IDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote> {
}

export class BaseVoteDao
  extends SQDIDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote>
	implements IBaseVoteDao {

	static diSet(): boolean {
		return duoDiSet(57)
	}
	
	constructor() {
		super(57)
	}
}


export interface IBaseVoteFactorDao
  extends IDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor> {
}

export class BaseVoteFactorDao
  extends SQDIDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor>
	implements IBaseVoteFactorDao {

	static diSet(): boolean {
		return duoDiSet(60)
	}
	
	constructor() {
		super(60)
	}
}


export interface IBaseVoteFactorTypeDao
  extends IDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType> {
}

export class BaseVoteFactorTypeDao
  extends SQDIDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType>
	implements IBaseVoteFactorTypeDao {

	static diSet(): boolean {
		return duoDiSet(59)
	}
	
	constructor() {
		super(59)
	}
}


export interface IBaseVoteRevisionDao
  extends IDao<IVoteRevision, VoteRevisionESelect, VoteRevisionECreateProperties, VoteRevisionEUpdateColumns, VoteRevisionEUpdateProperties, VoteRevisionEId, VoteRevisionECascadeGraph, QVoteRevision> {
}

export class BaseVoteRevisionDao
  extends SQDIDao<IVoteRevision, VoteRevisionESelect, VoteRevisionECreateProperties, VoteRevisionEUpdateColumns, VoteRevisionEUpdateProperties, VoteRevisionEId, VoteRevisionECascadeGraph, QVoteRevision>
	implements IBaseVoteRevisionDao {

	static diSet(): boolean {
		return duoDiSet(61)
	}
	
	constructor() {
		super(61)
	}
}


export interface IBaseVoteTypeDao
  extends IDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType> {
}

export class BaseVoteTypeDao
  extends SQDIDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType>
	implements IBaseVoteTypeDao {

	static diSet(): boolean {
		return duoDiSet(56)
	}
	
	constructor() {
		super(56)
	}
}
