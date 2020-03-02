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
  extends IDuo<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor> {
}

export class BaseActorDuo
  extends SQDIDuo<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateColumns, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor>
	implements IBaseActorDuo {

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseApplicationDuo
  extends IDuo<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication> {
}

export class BaseApplicationDuo
  extends SQDIDuo<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateColumns, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication>
	implements IBaseApplicationDuo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseChosenPollRevisionDuo
  extends IDuo<IChosenPollRevision, ChosenPollRevisionESelect, ChosenPollRevisionECreateProperties, ChosenPollRevisionEUpdateColumns, ChosenPollRevisionEUpdateProperties, ChosenPollRevisionEId, ChosenPollRevisionECascadeGraph, QChosenPollRevision> {
}

export class BaseChosenPollRevisionDuo
  extends SQDIDuo<IChosenPollRevision, ChosenPollRevisionESelect, ChosenPollRevisionECreateProperties, ChosenPollRevisionEUpdateColumns, ChosenPollRevisionEUpdateProperties, ChosenPollRevisionEId, ChosenPollRevisionECascadeGraph, QChosenPollRevision>
	implements IBaseChosenPollRevisionDuo {

	static diSet(): boolean {
		return duoDiSet(51)
	}
	
	constructor() {
		super(51)
	}
}


export interface IBaseChosenPollRevisionTypeDuo
  extends IDuo<IChosenPollRevisionType, ChosenPollRevisionTypeESelect, ChosenPollRevisionTypeECreateProperties, ChosenPollRevisionTypeEUpdateColumns, ChosenPollRevisionTypeEUpdateProperties, ChosenPollRevisionTypeEId, ChosenPollRevisionTypeECascadeGraph, QChosenPollRevisionType> {
}

export class BaseChosenPollRevisionTypeDuo
  extends SQDIDuo<IChosenPollRevisionType, ChosenPollRevisionTypeESelect, ChosenPollRevisionTypeECreateProperties, ChosenPollRevisionTypeEUpdateColumns, ChosenPollRevisionTypeEUpdateProperties, ChosenPollRevisionTypeEId, ChosenPollRevisionTypeECascadeGraph, QChosenPollRevisionType>
	implements IBaseChosenPollRevisionTypeDuo {

	static diSet(): boolean {
		return duoDiSet(50)
	}
	
	constructor() {
		super(50)
	}
}


export interface IBaseChosenPollTranslationDuo
  extends IDuo<IChosenPollTranslation, ChosenPollTranslationESelect, ChosenPollTranslationECreateProperties, ChosenPollTranslationEUpdateColumns, ChosenPollTranslationEUpdateProperties, ChosenPollTranslationEId, ChosenPollTranslationECascadeGraph, QChosenPollTranslation> {
}

export class BaseChosenPollTranslationDuo
  extends SQDIDuo<IChosenPollTranslation, ChosenPollTranslationESelect, ChosenPollTranslationECreateProperties, ChosenPollTranslationEUpdateColumns, ChosenPollTranslationEUpdateProperties, ChosenPollTranslationEId, ChosenPollTranslationECascadeGraph, QChosenPollTranslation>
	implements IBaseChosenPollTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(49)
	}
	
	constructor() {
		super(49)
	}
}


export interface IBaseChosenPollTranslationTypeDuo
  extends IDuo<IChosenPollTranslationType, ChosenPollTranslationTypeESelect, ChosenPollTranslationTypeECreateProperties, ChosenPollTranslationTypeEUpdateColumns, ChosenPollTranslationTypeEUpdateProperties, ChosenPollTranslationTypeEId, ChosenPollTranslationTypeECascadeGraph, QChosenPollTranslationType> {
}

export class BaseChosenPollTranslationTypeDuo
  extends SQDIDuo<IChosenPollTranslationType, ChosenPollTranslationTypeESelect, ChosenPollTranslationTypeECreateProperties, ChosenPollTranslationTypeEUpdateColumns, ChosenPollTranslationTypeEUpdateProperties, ChosenPollTranslationTypeEId, ChosenPollTranslationTypeECascadeGraph, QChosenPollTranslationType>
	implements IBaseChosenPollTranslationTypeDuo {

	static diSet(): boolean {
		return duoDiSet(48)
	}
	
	constructor() {
		super(48)
	}
}


export interface IBaseChosenVoteRevisionDuo
  extends IDuo<IChosenVoteRevision, ChosenVoteRevisionESelect, ChosenVoteRevisionECreateProperties, ChosenVoteRevisionEUpdateColumns, ChosenVoteRevisionEUpdateProperties, ChosenVoteRevisionEId, ChosenVoteRevisionECascadeGraph, QChosenVoteRevision> {
}

export class BaseChosenVoteRevisionDuo
  extends SQDIDuo<IChosenVoteRevision, ChosenVoteRevisionESelect, ChosenVoteRevisionECreateProperties, ChosenVoteRevisionEUpdateColumns, ChosenVoteRevisionEUpdateProperties, ChosenVoteRevisionEId, ChosenVoteRevisionECascadeGraph, QChosenVoteRevision>
	implements IBaseChosenVoteRevisionDuo {

	static diSet(): boolean {
		return duoDiSet(55)
	}
	
	constructor() {
		super(55)
	}
}


export interface IBaseChosenVoteRevisionTypeDuo
  extends IDuo<IChosenVoteRevisionType, ChosenVoteRevisionTypeESelect, ChosenVoteRevisionTypeECreateProperties, ChosenVoteRevisionTypeEUpdateColumns, ChosenVoteRevisionTypeEUpdateProperties, ChosenVoteRevisionTypeEId, ChosenVoteRevisionTypeECascadeGraph, QChosenVoteRevisionType> {
}

export class BaseChosenVoteRevisionTypeDuo
  extends SQDIDuo<IChosenVoteRevisionType, ChosenVoteRevisionTypeESelect, ChosenVoteRevisionTypeECreateProperties, ChosenVoteRevisionTypeEUpdateColumns, ChosenVoteRevisionTypeEUpdateProperties, ChosenVoteRevisionTypeEId, ChosenVoteRevisionTypeECascadeGraph, QChosenVoteRevisionType>
	implements IBaseChosenVoteRevisionTypeDuo {

	static diSet(): boolean {
		return duoDiSet(54)
	}
	
	constructor() {
		super(54)
	}
}


export interface IBaseContinentDuo
  extends IDuo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent> {
}

export class BaseContinentDuo
  extends SQDIDuo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent>
	implements IBaseContinentDuo {

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseCountryDuo
  extends IDuo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry> {
}

export class BaseCountryDuo
  extends SQDIDuo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateColumns, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry>
	implements IBaseCountryDuo {

	static diSet(): boolean {
		return duoDiSet(14)
	}
	
	constructor() {
		super(14)
	}
}


export interface IBaseCountryTownDuo
  extends IDuo<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown> {
}

export class BaseCountryTownDuo
  extends SQDIDuo<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateColumns, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown>
	implements IBaseCountryTownDuo {

	static diSet(): boolean {
		return duoDiSet(13)
	}
	
	constructor() {
		super(13)
	}
}


export interface IBaseCountyDuo
  extends IDuo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty> {
}

export class BaseCountyDuo
  extends SQDIDuo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateColumns, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty>
	implements IBaseCountyDuo {

	static diSet(): boolean {
		return duoDiSet(11)
	}
	
	constructor() {
		super(11)
	}
}


export interface IBaseCountyTownDuo
  extends IDuo<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown> {
}

export class BaseCountyTownDuo
  extends SQDIDuo<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateColumns, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown>
	implements IBaseCountyTownDuo {

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseDesignPatternDuo
  extends IDuo<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern> {
}

export class BaseDesignPatternDuo
  extends SQDIDuo<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateColumns, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern>
	implements IBaseDesignPatternDuo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseDeviceDuo
  extends IDuo<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice> {
}

export class BaseDeviceDuo
  extends SQDIDuo<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateColumns, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice>
	implements IBaseDeviceDuo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseEmojiDuo
  extends IDuo<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji> {
}

export class BaseEmojiDuo
  extends SQDIDuo<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateColumns, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji>
	implements IBaseEmojiDuo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseFactorDuo
  extends IDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor> {
}

export class BaseFactorDuo
  extends SQDIDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor>
	implements IBaseFactorDuo {

	static diSet(): boolean {
		return duoDiSet(86)
	}
	
	constructor() {
		super(86)
	}
}


export interface IBaseFactorOpinionVersionDuo
  extends IDuo<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion> {
}

export class BaseFactorOpinionVersionDuo
  extends SQDIDuo<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion>
	implements IBaseFactorOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(72)
	}
	
	constructor() {
		super(72)
	}
}


export interface IBaseFactorOpinionVersionRatingDuo
  extends IDuo<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating> {
}

export class BaseFactorOpinionVersionRatingDuo
  extends SQDIDuo<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating>
	implements IBaseFactorOpinionVersionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(71)
	}
	
	constructor() {
		super(71)
	}
}


export interface IBaseFactorOpinionVersionRatingCountDuo
  extends IDuo<IFactorOpinionVersionRatingCount, FactorOpinionVersionRatingCountESelect, FactorOpinionVersionRatingCountECreateProperties, FactorOpinionVersionRatingCountEUpdateColumns, FactorOpinionVersionRatingCountEUpdateProperties, FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountECascadeGraph, QFactorOpinionVersionRatingCount> {
}

export class BaseFactorOpinionVersionRatingCountDuo
  extends SQDIDuo<IFactorOpinionVersionRatingCount, FactorOpinionVersionRatingCountESelect, FactorOpinionVersionRatingCountECreateProperties, FactorOpinionVersionRatingCountEUpdateColumns, FactorOpinionVersionRatingCountEUpdateProperties, FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountECascadeGraph, QFactorOpinionVersionRatingCount>
	implements IBaseFactorOpinionVersionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(64)
	}
	
	constructor() {
		super(64)
	}
}


export interface IBaseFactorOpinionVersionTranslationDuo
  extends IDuo<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation> {
}

export class BaseFactorOpinionVersionTranslationDuo
  extends SQDIDuo<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation>
	implements IBaseFactorOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(70)
	}
	
	constructor() {
		super(70)
	}
}


export interface IBaseFactorPositionDuo
  extends IDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition> {
}

export class BaseFactorPositionDuo
  extends SQDIDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition>
	implements IBaseFactorPositionDuo {

	static diSet(): boolean {
		return duoDiSet(87)
	}
	
	constructor() {
		super(87)
	}
}


export interface IBaseFactorSkinDuo
  extends IDuo<IFactorSkin, FactorSkinESelect, FactorSkinECreateProperties, FactorSkinEUpdateColumns, FactorSkinEUpdateProperties, FactorSkinEId, FactorSkinECascadeGraph, QFactorSkin> {
}

export class BaseFactorSkinDuo
  extends SQDIDuo<IFactorSkin, FactorSkinESelect, FactorSkinECreateProperties, FactorSkinEUpdateColumns, FactorSkinEUpdateProperties, FactorSkinEId, FactorSkinECascadeGraph, QFactorSkin>
	implements IBaseFactorSkinDuo {

	static diSet(): boolean {
		return duoDiSet(83)
	}
	
	constructor() {
		super(83)
	}
}


export interface IBaseFactorTranslationDuo
  extends IDuo<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationECascadeGraph, QFactorTranslation> {
}

export class BaseFactorTranslationDuo
  extends SQDIDuo<IFactorTranslation, FactorTranslationESelect, FactorTranslationECreateProperties, FactorTranslationEUpdateColumns, FactorTranslationEUpdateProperties, FactorTranslationEId, FactorTranslationECascadeGraph, QFactorTranslation>
	implements IBaseFactorTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(42)
	}
	
	constructor() {
		super(42)
	}
}


export interface IBaseLabelDuo
  extends IDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelECascadeGraph, QLabel> {
}

export class BaseLabelDuo
  extends SQDIDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelECascadeGraph, QLabel>
	implements IBaseLabelDuo {

	static diSet(): boolean {
		return duoDiSet(81)
	}
	
	constructor() {
		super(81)
	}
}


export interface IBaseLabelTranslationDuo
  extends IDuo<ILabelTranslation, LabelTranslationESelect, LabelTranslationECreateProperties, LabelTranslationEUpdateColumns, LabelTranslationEUpdateProperties, LabelTranslationEId, LabelTranslationECascadeGraph, QLabelTranslation> {
}

export class BaseLabelTranslationDuo
  extends SQDIDuo<ILabelTranslation, LabelTranslationESelect, LabelTranslationECreateProperties, LabelTranslationEUpdateColumns, LabelTranslationEUpdateProperties, LabelTranslationEId, LabelTranslationECascadeGraph, QLabelTranslation>
	implements IBaseLabelTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(95)
	}
	
	constructor() {
		super(95)
	}
}


export interface IBaseLabelTranslationRatingDuo
  extends IDuo<ILabelTranslationRating, LabelTranslationRatingESelect, LabelTranslationRatingECreateProperties, LabelTranslationRatingEUpdateColumns, LabelTranslationRatingEUpdateProperties, LabelTranslationRatingEId, LabelTranslationRatingECascadeGraph, QLabelTranslationRating> {
}

export class BaseLabelTranslationRatingDuo
  extends SQDIDuo<ILabelTranslationRating, LabelTranslationRatingESelect, LabelTranslationRatingECreateProperties, LabelTranslationRatingEUpdateColumns, LabelTranslationRatingEUpdateProperties, LabelTranslationRatingEId, LabelTranslationRatingECascadeGraph, QLabelTranslationRating>
	implements IBaseLabelTranslationRatingDuo {

	static diSet(): boolean {
		return duoDiSet(96)
	}
	
	constructor() {
		super(96)
	}
}


export interface IBaseLabelTranslationRatingCountDuo
  extends IDuo<ILabelTranslationRatingCount, LabelTranslationRatingCountESelect, LabelTranslationRatingCountECreateProperties, LabelTranslationRatingCountEUpdateColumns, LabelTranslationRatingCountEUpdateProperties, LabelTranslationRatingCountEId, LabelTranslationRatingCountECascadeGraph, QLabelTranslationRatingCount> {
}

export class BaseLabelTranslationRatingCountDuo
  extends SQDIDuo<ILabelTranslationRatingCount, LabelTranslationRatingCountESelect, LabelTranslationRatingCountECreateProperties, LabelTranslationRatingCountEUpdateColumns, LabelTranslationRatingCountEUpdateProperties, LabelTranslationRatingCountEId, LabelTranslationRatingCountECascadeGraph, QLabelTranslationRatingCount>
	implements IBaseLabelTranslationRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(94)
	}
	
	constructor() {
		super(94)
	}
}


export interface IBaseLanguageDuo
  extends IDuo<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage> {
}

export class BaseLanguageDuo
  extends SQDIDuo<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage>
	implements IBaseLanguageDuo {

	static diSet(): boolean {
		return duoDiSet(16)
	}
	
	constructor() {
		super(16)
	}
}


export interface IBasePollDuo
  extends IDuo<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll> {
}

export class BasePollDuo
  extends SQDIDuo<IPoll, PollESelect, PollECreateProperties, PollEUpdateColumns, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll>
	implements IBasePollDuo {

	static diSet(): boolean {
		return duoDiSet(52)
	}
	
	constructor() {
		super(52)
	}
}


export interface IBasePollFactorPositionRevisionDuo
  extends IDuo<IPollFactorPositionRevision, PollFactorPositionRevisionESelect, PollFactorPositionRevisionECreateProperties, PollFactorPositionRevisionEUpdateColumns, PollFactorPositionRevisionEUpdateProperties, PollFactorPositionRevisionEId, PollFactorPositionRevisionECascadeGraph, QPollFactorPositionRevision> {
}

export class BasePollFactorPositionRevisionDuo
  extends SQDIDuo<IPollFactorPositionRevision, PollFactorPositionRevisionESelect, PollFactorPositionRevisionECreateProperties, PollFactorPositionRevisionEUpdateColumns, PollFactorPositionRevisionEUpdateProperties, PollFactorPositionRevisionEId, PollFactorPositionRevisionECascadeGraph, QPollFactorPositionRevision>
	implements IBasePollFactorPositionRevisionDuo {

	static diSet(): boolean {
		return duoDiSet(58)
	}
	
	constructor() {
		super(58)
	}
}


export interface IBasePollFactorRevisionDuo
  extends IDuo<IPollFactorRevision, PollFactorRevisionESelect, PollFactorRevisionECreateProperties, PollFactorRevisionEUpdateColumns, PollFactorRevisionEUpdateProperties, PollFactorRevisionEId, PollFactorRevisionECascadeGraph, QPollFactorRevision> {
}

export class BasePollFactorRevisionDuo
  extends SQDIDuo<IPollFactorRevision, PollFactorRevisionESelect, PollFactorRevisionECreateProperties, PollFactorRevisionEUpdateColumns, PollFactorRevisionEUpdateProperties, PollFactorRevisionEId, PollFactorRevisionECascadeGraph, QPollFactorRevision>
	implements IBasePollFactorRevisionDuo {

	static diSet(): boolean {
		return duoDiSet(63)
	}
	
	constructor() {
		super(63)
	}
}


export interface IBasePollFactorSkinRevisionDuo
  extends IDuo<IPollFactorSkinRevision, PollFactorSkinRevisionESelect, PollFactorSkinRevisionECreateProperties, PollFactorSkinRevisionEUpdateColumns, PollFactorSkinRevisionEUpdateProperties, PollFactorSkinRevisionEId, PollFactorSkinRevisionECascadeGraph, QPollFactorSkinRevision> {
}

export class BasePollFactorSkinRevisionDuo
  extends SQDIDuo<IPollFactorSkinRevision, PollFactorSkinRevisionESelect, PollFactorSkinRevisionECreateProperties, PollFactorSkinRevisionEUpdateColumns, PollFactorSkinRevisionEUpdateProperties, PollFactorSkinRevisionEId, PollFactorSkinRevisionECascadeGraph, QPollFactorSkinRevision>
	implements IBasePollFactorSkinRevisionDuo {

	static diSet(): boolean {
		return duoDiSet(84)
	}
	
	constructor() {
		super(84)
	}
}


export interface IBasePollOpinionDuo
  extends IDuo<IPollOpinion, PollOpinionESelect, PollOpinionECreateProperties, PollOpinionEUpdateColumns, PollOpinionEUpdateProperties, PollOpinionEId, PollOpinionECascadeGraph, QPollOpinion> {
}

export class BasePollOpinionDuo
  extends SQDIDuo<IPollOpinion, PollOpinionESelect, PollOpinionECreateProperties, PollOpinionEUpdateColumns, PollOpinionEUpdateProperties, PollOpinionEId, PollOpinionECascadeGraph, QPollOpinion>
	implements IBasePollOpinionDuo {

	static diSet(): boolean {
		return duoDiSet(76)
	}
	
	constructor() {
		super(76)
	}
}


export interface IBasePollOpinionRatingCountDuo
  extends IDuo<IPollOpinionRatingCount, PollOpinionRatingCountESelect, PollOpinionRatingCountECreateProperties, PollOpinionRatingCountEUpdateColumns, PollOpinionRatingCountEUpdateProperties, PollOpinionRatingCountEId, PollOpinionRatingCountECascadeGraph, QPollOpinionRatingCount> {
}

export class BasePollOpinionRatingCountDuo
  extends SQDIDuo<IPollOpinionRatingCount, PollOpinionRatingCountESelect, PollOpinionRatingCountECreateProperties, PollOpinionRatingCountEUpdateColumns, PollOpinionRatingCountEUpdateProperties, PollOpinionRatingCountEId, PollOpinionRatingCountECascadeGraph, QPollOpinionRatingCount>
	implements IBasePollOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(53)
	}
	
	constructor() {
		super(53)
	}
}


export interface IBasePollOpinionVersionDuo
  extends IDuo<IPollOpinionVersion, PollOpinionVersionESelect, PollOpinionVersionECreateProperties, PollOpinionVersionEUpdateColumns, PollOpinionVersionEUpdateProperties, PollOpinionVersionEId, PollOpinionVersionECascadeGraph, QPollOpinionVersion> {
}

export class BasePollOpinionVersionDuo
  extends SQDIDuo<IPollOpinionVersion, PollOpinionVersionESelect, PollOpinionVersionECreateProperties, PollOpinionVersionEUpdateColumns, PollOpinionVersionEUpdateProperties, PollOpinionVersionEId, PollOpinionVersionECascadeGraph, QPollOpinionVersion>
	implements IBasePollOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(75)
	}
	
	constructor() {
		super(75)
	}
}


export interface IBasePollOpinionVersionRatingDuo
  extends IDuo<IPollOpinionVersionRating, PollOpinionVersionRatingESelect, PollOpinionVersionRatingECreateProperties, PollOpinionVersionRatingEUpdateColumns, PollOpinionVersionRatingEUpdateProperties, PollOpinionVersionRatingEId, PollOpinionVersionRatingECascadeGraph, QPollOpinionVersionRating> {
}

export class BasePollOpinionVersionRatingDuo
  extends SQDIDuo<IPollOpinionVersionRating, PollOpinionVersionRatingESelect, PollOpinionVersionRatingECreateProperties, PollOpinionVersionRatingEUpdateColumns, PollOpinionVersionRatingEUpdateProperties, PollOpinionVersionRatingEId, PollOpinionVersionRatingECascadeGraph, QPollOpinionVersionRating>
	implements IBasePollOpinionVersionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(74)
	}
	
	constructor() {
		super(74)
	}
}


export interface IBasePollOpinionVersionRatingCountDuo
  extends IDuo<IPollOpinionVersionRatingCount, PollOpinionVersionRatingCountESelect, PollOpinionVersionRatingCountECreateProperties, PollOpinionVersionRatingCountEUpdateColumns, PollOpinionVersionRatingCountEUpdateProperties, PollOpinionVersionRatingCountEId, PollOpinionVersionRatingCountECascadeGraph, QPollOpinionVersionRatingCount> {
}

export class BasePollOpinionVersionRatingCountDuo
  extends SQDIDuo<IPollOpinionVersionRatingCount, PollOpinionVersionRatingCountESelect, PollOpinionVersionRatingCountECreateProperties, PollOpinionVersionRatingCountEUpdateColumns, PollOpinionVersionRatingCountEUpdateProperties, PollOpinionVersionRatingCountEId, PollOpinionVersionRatingCountECascadeGraph, QPollOpinionVersionRatingCount>
	implements IBasePollOpinionVersionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(62)
	}
	
	constructor() {
		super(62)
	}
}


export interface IBasePollOpinionVersionTranslationDuo
  extends IDuo<IPollOpinionVersionTranslation, PollOpinionVersionTranslationESelect, PollOpinionVersionTranslationECreateProperties, PollOpinionVersionTranslationEUpdateColumns, PollOpinionVersionTranslationEUpdateProperties, PollOpinionVersionTranslationEId, PollOpinionVersionTranslationECascadeGraph, QPollOpinionVersionTranslation> {
}

export class BasePollOpinionVersionTranslationDuo
  extends SQDIDuo<IPollOpinionVersionTranslation, PollOpinionVersionTranslationESelect, PollOpinionVersionTranslationECreateProperties, PollOpinionVersionTranslationEUpdateColumns, PollOpinionVersionTranslationEUpdateProperties, PollOpinionVersionTranslationEId, PollOpinionVersionTranslationECascadeGraph, QPollOpinionVersionTranslation>
	implements IBasePollOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(73)
	}
	
	constructor() {
		super(73)
	}
}


export interface IBasePollOpinionsCountDuo
  extends IDuo<IPollOpinionsCount, PollOpinionsCountESelect, PollOpinionsCountECreateProperties, PollOpinionsCountEUpdateColumns, PollOpinionsCountEUpdateProperties, PollOpinionsCountEId, PollOpinionsCountECascadeGraph, QPollOpinionsCount> {
}

export class BasePollOpinionsCountDuo
  extends SQDIDuo<IPollOpinionsCount, PollOpinionsCountESelect, PollOpinionsCountECreateProperties, PollOpinionsCountEUpdateColumns, PollOpinionsCountEUpdateProperties, PollOpinionsCountEId, PollOpinionsCountECascadeGraph, QPollOpinionsCount>
	implements IBasePollOpinionsCountDuo {

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBasePollOpinionsRatingCountDuo
  extends IDuo<IPollOpinionsRatingCount, PollOpinionsRatingCountESelect, PollOpinionsRatingCountECreateProperties, PollOpinionsRatingCountEUpdateColumns, PollOpinionsRatingCountEUpdateProperties, PollOpinionsRatingCountEId, PollOpinionsRatingCountECascadeGraph, QPollOpinionsRatingCount> {
}

export class BasePollOpinionsRatingCountDuo
  extends SQDIDuo<IPollOpinionsRatingCount, PollOpinionsRatingCountESelect, PollOpinionsRatingCountECreateProperties, PollOpinionsRatingCountEUpdateColumns, PollOpinionsRatingCountEUpdateProperties, PollOpinionsRatingCountEId, PollOpinionsRatingCountECascadeGraph, QPollOpinionsRatingCount>
	implements IBasePollOpinionsRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(20)
	}
	
	constructor() {
		super(20)
	}
}


export interface IBasePollPositionRevisionDuo
  extends IDuo<IPollPositionRevision, PollPositionRevisionESelect, PollPositionRevisionECreateProperties, PollPositionRevisionEUpdateColumns, PollPositionRevisionEUpdateProperties, PollPositionRevisionEId, PollPositionRevisionECascadeGraph, QPollPositionRevision> {
}

export class BasePollPositionRevisionDuo
  extends SQDIDuo<IPollPositionRevision, PollPositionRevisionESelect, PollPositionRevisionECreateProperties, PollPositionRevisionEUpdateColumns, PollPositionRevisionEUpdateProperties, PollPositionRevisionEId, PollPositionRevisionECascadeGraph, QPollPositionRevision>
	implements IBasePollPositionRevisionDuo {

	static diSet(): boolean {
		return duoDiSet(65)
	}
	
	constructor() {
		super(65)
	}
}


export interface IBasePollRatingCountDuo
  extends IDuo<IPollRatingCount, PollRatingCountESelect, PollRatingCountECreateProperties, PollRatingCountEUpdateColumns, PollRatingCountEUpdateProperties, PollRatingCountEId, PollRatingCountECascadeGraph, QPollRatingCount> {
}

export class BasePollRatingCountDuo
  extends SQDIDuo<IPollRatingCount, PollRatingCountESelect, PollRatingCountECreateProperties, PollRatingCountEUpdateColumns, PollRatingCountEUpdateProperties, PollRatingCountEId, PollRatingCountECascadeGraph, QPollRatingCount>
	implements IBasePollRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(21)
	}
	
	constructor() {
		super(21)
	}
}


export interface IBasePollRevisionDuo
  extends IDuo<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionECascadeGraph, QPollRevision> {
}

export class BasePollRevisionDuo
  extends SQDIDuo<IPollRevision, PollRevisionESelect, PollRevisionECreateProperties, PollRevisionEUpdateColumns, PollRevisionEUpdateProperties, PollRevisionEId, PollRevisionECascadeGraph, QPollRevision>
	implements IBasePollRevisionDuo {

	static diSet(): boolean {
		return duoDiSet(85)
	}
	
	constructor() {
		super(85)
	}
}


export interface IBasePollRevisionFactorTranslationDuo
  extends IDuo<IPollRevisionFactorTranslation, PollRevisionFactorTranslationESelect, PollRevisionFactorTranslationECreateProperties, PollRevisionFactorTranslationEUpdateColumns, PollRevisionFactorTranslationEUpdateProperties, PollRevisionFactorTranslationEId, PollRevisionFactorTranslationECascadeGraph, QPollRevisionFactorTranslation> {
}

export class BasePollRevisionFactorTranslationDuo
  extends SQDIDuo<IPollRevisionFactorTranslation, PollRevisionFactorTranslationESelect, PollRevisionFactorTranslationECreateProperties, PollRevisionFactorTranslationEUpdateColumns, PollRevisionFactorTranslationEUpdateProperties, PollRevisionFactorTranslationEId, PollRevisionFactorTranslationECascadeGraph, QPollRevisionFactorTranslation>
	implements IBasePollRevisionFactorTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(43)
	}
	
	constructor() {
		super(43)
	}
}


export interface IBasePollRevisionLabelDuo
  extends IDuo<IPollRevisionLabel, PollRevisionLabelESelect, PollRevisionLabelECreateProperties, PollRevisionLabelEUpdateColumns, PollRevisionLabelEUpdateProperties, PollRevisionLabelEId, PollRevisionLabelECascadeGraph, QPollRevisionLabel> {
}

export class BasePollRevisionLabelDuo
  extends SQDIDuo<IPollRevisionLabel, PollRevisionLabelESelect, PollRevisionLabelECreateProperties, PollRevisionLabelEUpdateColumns, PollRevisionLabelEUpdateProperties, PollRevisionLabelEId, PollRevisionLabelECascadeGraph, QPollRevisionLabel>
	implements IBasePollRevisionLabelDuo {

	static diSet(): boolean {
		return duoDiSet(82)
	}
	
	constructor() {
		super(82)
	}
}


export interface IBasePollRevisionOpinionCountDuo
  extends IDuo<IPollRevisionOpinionCount, PollRevisionOpinionCountESelect, PollRevisionOpinionCountECreateProperties, PollRevisionOpinionCountEUpdateColumns, PollRevisionOpinionCountEUpdateProperties, PollRevisionOpinionCountEId, PollRevisionOpinionCountECascadeGraph, QPollRevisionOpinionCount> {
}

export class BasePollRevisionOpinionCountDuo
  extends SQDIDuo<IPollRevisionOpinionCount, PollRevisionOpinionCountESelect, PollRevisionOpinionCountECreateProperties, PollRevisionOpinionCountEUpdateColumns, PollRevisionOpinionCountEUpdateProperties, PollRevisionOpinionCountEId, PollRevisionOpinionCountECascadeGraph, QPollRevisionOpinionCount>
	implements IBasePollRevisionOpinionCountDuo {

	static diSet(): boolean {
		return duoDiSet(77)
	}
	
	constructor() {
		super(77)
	}
}


export interface IBasePollRevisionOpinionRatingCountDuo
  extends IDuo<IPollRevisionOpinionRatingCount, PollRevisionOpinionRatingCountESelect, PollRevisionOpinionRatingCountECreateProperties, PollRevisionOpinionRatingCountEUpdateColumns, PollRevisionOpinionRatingCountEUpdateProperties, PollRevisionOpinionRatingCountEId, PollRevisionOpinionRatingCountECascadeGraph, QPollRevisionOpinionRatingCount> {
}

export class BasePollRevisionOpinionRatingCountDuo
  extends SQDIDuo<IPollRevisionOpinionRatingCount, PollRevisionOpinionRatingCountESelect, PollRevisionOpinionRatingCountECreateProperties, PollRevisionOpinionRatingCountEUpdateColumns, PollRevisionOpinionRatingCountEUpdateProperties, PollRevisionOpinionRatingCountEId, PollRevisionOpinionRatingCountECascadeGraph, QPollRevisionOpinionRatingCount>
	implements IBasePollRevisionOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(78)
	}
	
	constructor() {
		super(78)
	}
}


export interface IBasePollRevisionPositionTranslationDuo
  extends IDuo<IPollRevisionPositionTranslation, PollRevisionPositionTranslationESelect, PollRevisionPositionTranslationECreateProperties, PollRevisionPositionTranslationEUpdateColumns, PollRevisionPositionTranslationEUpdateProperties, PollRevisionPositionTranslationEId, PollRevisionPositionTranslationECascadeGraph, QPollRevisionPositionTranslation> {
}

export class BasePollRevisionPositionTranslationDuo
  extends SQDIDuo<IPollRevisionPositionTranslation, PollRevisionPositionTranslationESelect, PollRevisionPositionTranslationECreateProperties, PollRevisionPositionTranslationEUpdateColumns, PollRevisionPositionTranslationEUpdateProperties, PollRevisionPositionTranslationEId, PollRevisionPositionTranslationECascadeGraph, QPollRevisionPositionTranslation>
	implements IBasePollRevisionPositionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(46)
	}
	
	constructor() {
		super(46)
	}
}


export interface IBasePollRevisionRatingCountDuo
  extends IDuo<IPollRevisionRatingCount, PollRevisionRatingCountESelect, PollRevisionRatingCountECreateProperties, PollRevisionRatingCountEUpdateColumns, PollRevisionRatingCountEUpdateProperties, PollRevisionRatingCountEId, PollRevisionRatingCountECascadeGraph, QPollRevisionRatingCount> {
}

export class BasePollRevisionRatingCountDuo
  extends SQDIDuo<IPollRevisionRatingCount, PollRevisionRatingCountESelect, PollRevisionRatingCountECreateProperties, PollRevisionRatingCountEUpdateColumns, PollRevisionRatingCountEUpdateProperties, PollRevisionRatingCountEId, PollRevisionRatingCountECascadeGraph, QPollRevisionRatingCount>
	implements IBasePollRevisionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(79)
	}
	
	constructor() {
		super(79)
	}
}


export interface IBasePollRevisionTranslationDuo
  extends IDuo<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationECascadeGraph, QPollRevisionTranslation> {
}

export class BasePollRevisionTranslationDuo
  extends SQDIDuo<IPollRevisionTranslation, PollRevisionTranslationESelect, PollRevisionTranslationECreateProperties, PollRevisionTranslationEUpdateColumns, PollRevisionTranslationEUpdateProperties, PollRevisionTranslationEId, PollRevisionTranslationECascadeGraph, QPollRevisionTranslation>
	implements IBasePollRevisionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(47)
	}
	
	constructor() {
		super(47)
	}
}


export interface IBasePollRevisionTranslationOpinionCountDuo
  extends IDuo<IPollRevisionTranslationOpinionCount, PollRevisionTranslationOpinionCountESelect, PollRevisionTranslationOpinionCountECreateProperties, PollRevisionTranslationOpinionCountEUpdateColumns, PollRevisionTranslationOpinionCountEUpdateProperties, PollRevisionTranslationOpinionCountEId, PollRevisionTranslationOpinionCountECascadeGraph, QPollRevisionTranslationOpinionCount> {
}

export class BasePollRevisionTranslationOpinionCountDuo
  extends SQDIDuo<IPollRevisionTranslationOpinionCount, PollRevisionTranslationOpinionCountESelect, PollRevisionTranslationOpinionCountECreateProperties, PollRevisionTranslationOpinionCountEUpdateColumns, PollRevisionTranslationOpinionCountEUpdateProperties, PollRevisionTranslationOpinionCountEId, PollRevisionTranslationOpinionCountECascadeGraph, QPollRevisionTranslationOpinionCount>
	implements IBasePollRevisionTranslationOpinionCountDuo {

	static diSet(): boolean {
		return duoDiSet(38)
	}
	
	constructor() {
		super(38)
	}
}


export interface IBasePollRevisionTranslationOpinionRatingCountDuo
  extends IDuo<IPollRevisionTranslationOpinionRatingCount, PollRevisionTranslationOpinionRatingCountESelect, PollRevisionTranslationOpinionRatingCountECreateProperties, PollRevisionTranslationOpinionRatingCountEUpdateColumns, PollRevisionTranslationOpinionRatingCountEUpdateProperties, PollRevisionTranslationOpinionRatingCountEId, PollRevisionTranslationOpinionRatingCountECascadeGraph, QPollRevisionTranslationOpinionRatingCount> {
}

export class BasePollRevisionTranslationOpinionRatingCountDuo
  extends SQDIDuo<IPollRevisionTranslationOpinionRatingCount, PollRevisionTranslationOpinionRatingCountESelect, PollRevisionTranslationOpinionRatingCountECreateProperties, PollRevisionTranslationOpinionRatingCountEUpdateColumns, PollRevisionTranslationOpinionRatingCountEUpdateProperties, PollRevisionTranslationOpinionRatingCountEId, PollRevisionTranslationOpinionRatingCountECascadeGraph, QPollRevisionTranslationOpinionRatingCount>
	implements IBasePollRevisionTranslationOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(39)
	}
	
	constructor() {
		super(39)
	}
}


export interface IBasePollRevisionTranslationRatingCountDuo
  extends IDuo<IPollRevisionTranslationRatingCount, PollRevisionTranslationRatingCountESelect, PollRevisionTranslationRatingCountECreateProperties, PollRevisionTranslationRatingCountEUpdateColumns, PollRevisionTranslationRatingCountEUpdateProperties, PollRevisionTranslationRatingCountEId, PollRevisionTranslationRatingCountECascadeGraph, QPollRevisionTranslationRatingCount> {
}

export class BasePollRevisionTranslationRatingCountDuo
  extends SQDIDuo<IPollRevisionTranslationRatingCount, PollRevisionTranslationRatingCountESelect, PollRevisionTranslationRatingCountECreateProperties, PollRevisionTranslationRatingCountEUpdateColumns, PollRevisionTranslationRatingCountEUpdateProperties, PollRevisionTranslationRatingCountEId, PollRevisionTranslationRatingCountECascadeGraph, QPollRevisionTranslationRatingCount>
	implements IBasePollRevisionTranslationRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(40)
	}
	
	constructor() {
		super(40)
	}
}


export interface IBasePollRevisionTranslationVoteCountDuo
  extends IDuo<IPollRevisionTranslationVoteCount, PollRevisionTranslationVoteCountESelect, PollRevisionTranslationVoteCountECreateProperties, PollRevisionTranslationVoteCountEUpdateColumns, PollRevisionTranslationVoteCountEUpdateProperties, PollRevisionTranslationVoteCountEId, PollRevisionTranslationVoteCountECascadeGraph, QPollRevisionTranslationVoteCount> {
}

export class BasePollRevisionTranslationVoteCountDuo
  extends SQDIDuo<IPollRevisionTranslationVoteCount, PollRevisionTranslationVoteCountESelect, PollRevisionTranslationVoteCountECreateProperties, PollRevisionTranslationVoteCountEUpdateColumns, PollRevisionTranslationVoteCountEUpdateProperties, PollRevisionTranslationVoteCountEId, PollRevisionTranslationVoteCountECascadeGraph, QPollRevisionTranslationVoteCount>
	implements IBasePollRevisionTranslationVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(41)
	}
	
	constructor() {
		super(41)
	}
}


export interface IBasePollRevisionVoteCountDuo
  extends IDuo<IPollRevisionVoteCount, PollRevisionVoteCountESelect, PollRevisionVoteCountECreateProperties, PollRevisionVoteCountEUpdateColumns, PollRevisionVoteCountEUpdateProperties, PollRevisionVoteCountEId, PollRevisionVoteCountECascadeGraph, QPollRevisionVoteCount> {
}

export class BasePollRevisionVoteCountDuo
  extends SQDIDuo<IPollRevisionVoteCount, PollRevisionVoteCountESelect, PollRevisionVoteCountECreateProperties, PollRevisionVoteCountEUpdateColumns, PollRevisionVoteCountEUpdateProperties, PollRevisionVoteCountEId, PollRevisionVoteCountECascadeGraph, QPollRevisionVoteCount>
	implements IBasePollRevisionVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(80)
	}
	
	constructor() {
		super(80)
	}
}


export interface IBasePollRunDuo
  extends IDuo<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunECascadeGraph, QPollRun> {
}

export class BasePollRunDuo
  extends SQDIDuo<IPollRun, PollRunESelect, PollRunECreateProperties, PollRunEUpdateColumns, PollRunEUpdateProperties, PollRunEId, PollRunECascadeGraph, QPollRun>
	implements IBasePollRunDuo {

	static diSet(): boolean {
		return duoDiSet(28)
	}
	
	constructor() {
		super(28)
	}
}


export interface IBasePollRunContinentDuo
  extends IDuo<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentECascadeGraph, QPollRunContinent> {
}

export class BasePollRunContinentDuo
  extends SQDIDuo<IPollRunContinent, PollRunContinentESelect, PollRunContinentECreateProperties, PollRunContinentEUpdateColumns, PollRunContinentEUpdateProperties, PollRunContinentEId, PollRunContinentECascadeGraph, QPollRunContinent>
	implements IBasePollRunContinentDuo {

	static diSet(): boolean {
		return duoDiSet(23)
	}
	
	constructor() {
		super(23)
	}
}


export interface IBasePollRunCountryDuo
  extends IDuo<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryECascadeGraph, QPollRunCountry> {
}

export class BasePollRunCountryDuo
  extends SQDIDuo<IPollRunCountry, PollRunCountryESelect, PollRunCountryECreateProperties, PollRunCountryEUpdateColumns, PollRunCountryEUpdateProperties, PollRunCountryEId, PollRunCountryECascadeGraph, QPollRunCountry>
	implements IBasePollRunCountryDuo {

	static diSet(): boolean {
		return duoDiSet(24)
	}
	
	constructor() {
		super(24)
	}
}


export interface IBasePollRunCountyDuo
  extends IDuo<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyECascadeGraph, QPollRunCounty> {
}

export class BasePollRunCountyDuo
  extends SQDIDuo<IPollRunCounty, PollRunCountyESelect, PollRunCountyECreateProperties, PollRunCountyEUpdateColumns, PollRunCountyEUpdateProperties, PollRunCountyEId, PollRunCountyECascadeGraph, QPollRunCounty>
	implements IBasePollRunCountyDuo {

	static diSet(): boolean {
		return duoDiSet(25)
	}
	
	constructor() {
		super(25)
	}
}


export interface IBasePollRunOpinionCountDuo
  extends IDuo<IPollRunOpinionCount, PollRunOpinionCountESelect, PollRunOpinionCountECreateProperties, PollRunOpinionCountEUpdateColumns, PollRunOpinionCountEUpdateProperties, PollRunOpinionCountEId, PollRunOpinionCountECascadeGraph, QPollRunOpinionCount> {
}

export class BasePollRunOpinionCountDuo
  extends SQDIDuo<IPollRunOpinionCount, PollRunOpinionCountESelect, PollRunOpinionCountECreateProperties, PollRunOpinionCountEUpdateColumns, PollRunOpinionCountEUpdateProperties, PollRunOpinionCountEId, PollRunOpinionCountECascadeGraph, QPollRunOpinionCount>
	implements IBasePollRunOpinionCountDuo {

	static diSet(): boolean {
		return duoDiSet(90)
	}
	
	constructor() {
		super(90)
	}
}


export interface IBasePollRunOpinionRatingCountDuo
  extends IDuo<IPollRunOpinionRatingCount, PollRunOpinionRatingCountESelect, PollRunOpinionRatingCountECreateProperties, PollRunOpinionRatingCountEUpdateColumns, PollRunOpinionRatingCountEUpdateProperties, PollRunOpinionRatingCountEId, PollRunOpinionRatingCountECascadeGraph, QPollRunOpinionRatingCount> {
}

export class BasePollRunOpinionRatingCountDuo
  extends SQDIDuo<IPollRunOpinionRatingCount, PollRunOpinionRatingCountESelect, PollRunOpinionRatingCountECreateProperties, PollRunOpinionRatingCountEUpdateColumns, PollRunOpinionRatingCountEUpdateProperties, PollRunOpinionRatingCountEId, PollRunOpinionRatingCountECascadeGraph, QPollRunOpinionRatingCount>
	implements IBasePollRunOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(91)
	}
	
	constructor() {
		super(91)
	}
}


export interface IBasePollRunRatingCountDuo
  extends IDuo<IPollRunRatingCount, PollRunRatingCountESelect, PollRunRatingCountECreateProperties, PollRunRatingCountEUpdateColumns, PollRunRatingCountEUpdateProperties, PollRunRatingCountEId, PollRunRatingCountECascadeGraph, QPollRunRatingCount> {
}

export class BasePollRunRatingCountDuo
  extends SQDIDuo<IPollRunRatingCount, PollRunRatingCountESelect, PollRunRatingCountECreateProperties, PollRunRatingCountEUpdateColumns, PollRunRatingCountEUpdateProperties, PollRunRatingCountEId, PollRunRatingCountECascadeGraph, QPollRunRatingCount>
	implements IBasePollRunRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(92)
	}
	
	constructor() {
		super(92)
	}
}


export interface IBasePollRunStateDuo
  extends IDuo<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateECascadeGraph, QPollRunState> {
}

export class BasePollRunStateDuo
  extends SQDIDuo<IPollRunState, PollRunStateESelect, PollRunStateECreateProperties, PollRunStateEUpdateColumns, PollRunStateEUpdateProperties, PollRunStateEId, PollRunStateECascadeGraph, QPollRunState>
	implements IBasePollRunStateDuo {

	static diSet(): boolean {
		return duoDiSet(26)
	}
	
	constructor() {
		super(26)
	}
}


export interface IBasePollRunTownDuo
  extends IDuo<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownECascadeGraph, QPollRunTown> {
}

export class BasePollRunTownDuo
  extends SQDIDuo<IPollRunTown, PollRunTownESelect, PollRunTownECreateProperties, PollRunTownEUpdateColumns, PollRunTownEUpdateProperties, PollRunTownEId, PollRunTownECascadeGraph, QPollRunTown>
	implements IBasePollRunTownDuo {

	static diSet(): boolean {
		return duoDiSet(27)
	}
	
	constructor() {
		super(27)
	}
}


export interface IBasePollRunVoteCountDuo
  extends IDuo<IPollRunVoteCount, PollRunVoteCountESelect, PollRunVoteCountECreateProperties, PollRunVoteCountEUpdateColumns, PollRunVoteCountEUpdateProperties, PollRunVoteCountEId, PollRunVoteCountECascadeGraph, QPollRunVoteCount> {
}

export class BasePollRunVoteCountDuo
  extends SQDIDuo<IPollRunVoteCount, PollRunVoteCountESelect, PollRunVoteCountECreateProperties, PollRunVoteCountEUpdateColumns, PollRunVoteCountEUpdateProperties, PollRunVoteCountEId, PollRunVoteCountECascadeGraph, QPollRunVoteCount>
	implements IBasePollRunVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(93)
	}
	
	constructor() {
		super(93)
	}
}


export interface IBasePollTypeDuo
  extends IDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType> {
}

export class BasePollTypeDuo
  extends SQDIDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType>
	implements IBasePollTypeDuo {

	static diSet(): boolean {
		return duoDiSet(29)
	}
	
	constructor() {
		super(29)
	}
}


export interface IBasePollVoteCountDuo
  extends IDuo<IPollVoteCount, PollVoteCountESelect, PollVoteCountECreateProperties, PollVoteCountEUpdateColumns, PollVoteCountEUpdateProperties, PollVoteCountEId, PollVoteCountECascadeGraph, QPollVoteCount> {
}

export class BasePollVoteCountDuo
  extends SQDIDuo<IPollVoteCount, PollVoteCountESelect, PollVoteCountECreateProperties, PollVoteCountEUpdateColumns, PollVoteCountEUpdateProperties, PollVoteCountEId, PollVoteCountECascadeGraph, QPollVoteCount>
	implements IBasePollVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(22)
	}
	
	constructor() {
		super(22)
	}
}


export interface IBasePositionDuo
  extends IDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition> {
}

export class BasePositionDuo
  extends SQDIDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition>
	implements IBasePositionDuo {

	static diSet(): boolean {
		return duoDiSet(44)
	}
	
	constructor() {
		super(44)
	}
}


export interface IBasePositionOpinionVersionDuo
  extends IDuo<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion> {
}

export class BasePositionOpinionVersionDuo
  extends SQDIDuo<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion>
	implements IBasePositionOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(69)
	}
	
	constructor() {
		super(69)
	}
}


export interface IBasePositionOpinionVersionRatingDuo
  extends IDuo<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating> {
}

export class BasePositionOpinionVersionRatingDuo
  extends SQDIDuo<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating>
	implements IBasePositionOpinionVersionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(68)
	}
	
	constructor() {
		super(68)
	}
}


export interface IBasePositionOpinionVersionRatingCountDuo
  extends IDuo<IPositionOpinionVersionRatingCount, PositionOpinionVersionRatingCountESelect, PositionOpinionVersionRatingCountECreateProperties, PositionOpinionVersionRatingCountEUpdateColumns, PositionOpinionVersionRatingCountEUpdateProperties, PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountECascadeGraph, QPositionOpinionVersionRatingCount> {
}

export class BasePositionOpinionVersionRatingCountDuo
  extends SQDIDuo<IPositionOpinionVersionRatingCount, PositionOpinionVersionRatingCountESelect, PositionOpinionVersionRatingCountECreateProperties, PositionOpinionVersionRatingCountEUpdateColumns, PositionOpinionVersionRatingCountEUpdateProperties, PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountECascadeGraph, QPositionOpinionVersionRatingCount>
	implements IBasePositionOpinionVersionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(66)
	}
	
	constructor() {
		super(66)
	}
}


export interface IBasePositionOpinionVersionTranslationDuo
  extends IDuo<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation> {
}

export class BasePositionOpinionVersionTranslationDuo
  extends SQDIDuo<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation>
	implements IBasePositionOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(67)
	}
	
	constructor() {
		super(67)
	}
}


export interface IBasePositionTranslationDuo
  extends IDuo<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationECascadeGraph, QPositionTranslation> {
}

export class BasePositionTranslationDuo
  extends SQDIDuo<IPositionTranslation, PositionTranslationESelect, PositionTranslationECreateProperties, PositionTranslationEUpdateColumns, PositionTranslationEUpdateProperties, PositionTranslationEId, PositionTranslationECascadeGraph, QPositionTranslation>
	implements IBasePositionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(45)
	}
	
	constructor() {
		super(45)
	}
}


export interface IBaseRatingDuo
  extends IDuo<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating> {
}

export class BaseRatingDuo
  extends SQDIDuo<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating>
	implements IBaseRatingDuo {

	static diSet(): boolean {
		return duoDiSet(19)
	}
	
	constructor() {
		super(19)
	}
}


export interface IBaseRatingReasonDuo
  extends IDuo<IRatingReason, RatingReasonESelect, RatingReasonECreateProperties, RatingReasonEUpdateColumns, RatingReasonEUpdateProperties, RatingReasonEId, RatingReasonECascadeGraph, QRatingReason> {
}

export class BaseRatingReasonDuo
  extends SQDIDuo<IRatingReason, RatingReasonESelect, RatingReasonECreateProperties, RatingReasonEUpdateColumns, RatingReasonEUpdateProperties, RatingReasonEId, RatingReasonECascadeGraph, QRatingReason>
	implements IBaseRatingReasonDuo {

	static diSet(): boolean {
		return duoDiSet(89)
	}
	
	constructor() {
		super(89)
	}
}


export interface IBaseRatingReasonTranslationDuo
  extends IDuo<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation> {
}

export class BaseRatingReasonTranslationDuo
  extends SQDIDuo<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation>
	implements IBaseRatingReasonTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(88)
	}
	
	constructor() {
		super(88)
	}
}


export interface IBaseRatingSettingDuo
  extends IDuo<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting> {
}

export class BaseRatingSettingDuo
  extends SQDIDuo<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting>
	implements IBaseRatingSettingDuo {

	static diSet(): boolean {
		return duoDiSet(15)
	}
	
	constructor() {
		super(15)
	}
}


export interface IBaseRatingTranslationDuo
  extends IDuo<IRatingTranslation, RatingTranslationESelect, RatingTranslationECreateProperties, RatingTranslationEUpdateColumns, RatingTranslationEUpdateProperties, RatingTranslationEId, RatingTranslationECascadeGraph, QRatingTranslation> {
}

export class BaseRatingTranslationDuo
  extends SQDIDuo<IRatingTranslation, RatingTranslationESelect, RatingTranslationECreateProperties, RatingTranslationEUpdateColumns, RatingTranslationEUpdateProperties, RatingTranslationEId, RatingTranslationECascadeGraph, QRatingTranslation>
	implements IBaseRatingTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(17)
	}
	
	constructor() {
		super(17)
	}
}


export interface IBaseRatingTypeDuo
  extends IDuo<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType> {
}

export class BaseRatingTypeDuo
  extends SQDIDuo<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateColumns, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType>
	implements IBaseRatingTypeDuo {

	static diSet(): boolean {
		return duoDiSet(18)
	}
	
	constructor() {
		super(18)
	}
}


export interface IBaseStateDuo
  extends IDuo<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateECascadeGraph, QState> {
}

export class BaseStateDuo
  extends SQDIDuo<IState, StateESelect, StateECreateProperties, StateEUpdateColumns, StateEUpdateProperties, StateEId, StateECascadeGraph, QState>
	implements IBaseStateDuo {

	static diSet(): boolean {
		return duoDiSet(10)
	}
	
	constructor() {
		super(10)
	}
}


export interface IBaseStateTownDuo
  extends IDuo<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown> {
}

export class BaseStateTownDuo
  extends SQDIDuo<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateColumns, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown>
	implements IBaseStateTownDuo {

	static diSet(): boolean {
		return duoDiSet(9)
	}
	
	constructor() {
		super(9)
	}
}


export interface IBaseThemeDuo
  extends IDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme> {
}

export class BaseThemeDuo
  extends SQDIDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme>
	implements IBaseThemeDuo {

	static diSet(): boolean {
		return duoDiSet(30)
	}
	
	constructor() {
		super(30)
	}
}


export interface IBaseTownDuo
  extends IDuo<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown> {
}

export class BaseTownDuo
  extends SQDIDuo<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown>
	implements IBaseTownDuo {

	static diSet(): boolean {
		return duoDiSet(12)
	}
	
	constructor() {
		super(12)
	}
}


export interface IBaseTranslationTypeDuo
  extends IDuo<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType> {
}

export class BaseTranslationTypeDuo
  extends SQDIDuo<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateColumns, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType>
	implements IBaseTranslationTypeDuo {

	static diSet(): boolean {
		return duoDiSet(31)
	}
	
	constructor() {
		super(31)
	}
}


export interface IBaseUserAccountDuo
  extends IDuo<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount> {
}

export class BaseUserAccountDuo
  extends SQDIDuo<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount>
	implements IBaseUserAccountDuo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseUserPollDuo
  extends IDuo<IUserPoll, UserPollESelect, UserPollECreateProperties, UserPollEUpdateColumns, UserPollEUpdateProperties, UserPollEId, UserPollECascadeGraph, QUserPoll> {
}

export class BaseUserPollDuo
  extends SQDIDuo<IUserPoll, UserPollESelect, UserPollECreateProperties, UserPollEUpdateColumns, UserPollEUpdateProperties, UserPollEId, UserPollECascadeGraph, QUserPoll>
	implements IBaseUserPollDuo {

	static diSet(): boolean {
		return duoDiSet(33)
	}
	
	constructor() {
		super(33)
	}
}


export interface IBaseUserPollRatingDuo
  extends IDuo<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating> {
}

export class BaseUserPollRatingDuo
  extends SQDIDuo<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating>
	implements IBaseUserPollRatingDuo {

	static diSet(): boolean {
		return duoDiSet(32)
	}
	
	constructor() {
		super(32)
	}
}


export interface IBaseUserPollRevisionDuo
  extends IDuo<IUserPollRevision, UserPollRevisionESelect, UserPollRevisionECreateProperties, UserPollRevisionEUpdateColumns, UserPollRevisionEUpdateProperties, UserPollRevisionEId, UserPollRevisionECascadeGraph, QUserPollRevision> {
}

export class BaseUserPollRevisionDuo
  extends SQDIDuo<IUserPollRevision, UserPollRevisionESelect, UserPollRevisionECreateProperties, UserPollRevisionEUpdateColumns, UserPollRevisionEUpdateProperties, UserPollRevisionEId, UserPollRevisionECascadeGraph, QUserPollRevision>
	implements IBaseUserPollRevisionDuo {

	static diSet(): boolean {
		return duoDiSet(35)
	}
	
	constructor() {
		super(35)
	}
}


export interface IBaseUserPollRevisionRatingDuo
  extends IDuo<IUserPollRevisionRating, UserPollRevisionRatingESelect, UserPollRevisionRatingECreateProperties, UserPollRevisionRatingEUpdateColumns, UserPollRevisionRatingEUpdateProperties, UserPollRevisionRatingEId, UserPollRevisionRatingECascadeGraph, QUserPollRevisionRating> {
}

export class BaseUserPollRevisionRatingDuo
  extends SQDIDuo<IUserPollRevisionRating, UserPollRevisionRatingESelect, UserPollRevisionRatingECreateProperties, UserPollRevisionRatingEUpdateColumns, UserPollRevisionRatingEUpdateProperties, UserPollRevisionRatingEId, UserPollRevisionRatingECascadeGraph, QUserPollRevisionRating>
	implements IBaseUserPollRevisionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(34)
	}
	
	constructor() {
		super(34)
	}
}


export interface IBaseUserPollRevisionTranslationDuo
  extends IDuo<IUserPollRevisionTranslation, UserPollRevisionTranslationESelect, UserPollRevisionTranslationECreateProperties, UserPollRevisionTranslationEUpdateColumns, UserPollRevisionTranslationEUpdateProperties, UserPollRevisionTranslationEId, UserPollRevisionTranslationECascadeGraph, QUserPollRevisionTranslation> {
}

export class BaseUserPollRevisionTranslationDuo
  extends SQDIDuo<IUserPollRevisionTranslation, UserPollRevisionTranslationESelect, UserPollRevisionTranslationECreateProperties, UserPollRevisionTranslationEUpdateColumns, UserPollRevisionTranslationEUpdateProperties, UserPollRevisionTranslationEId, UserPollRevisionTranslationECascadeGraph, QUserPollRevisionTranslation>
	implements IBaseUserPollRevisionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(36)
	}
	
	constructor() {
		super(36)
	}
}


export interface IBaseUserPollRevisionTranslationRatingDuo
  extends IDuo<IUserPollRevisionTranslationRating, UserPollRevisionTranslationRatingESelect, UserPollRevisionTranslationRatingECreateProperties, UserPollRevisionTranslationRatingEUpdateColumns, UserPollRevisionTranslationRatingEUpdateProperties, UserPollRevisionTranslationRatingEId, UserPollRevisionTranslationRatingECascadeGraph, QUserPollRevisionTranslationRating> {
}

export class BaseUserPollRevisionTranslationRatingDuo
  extends SQDIDuo<IUserPollRevisionTranslationRating, UserPollRevisionTranslationRatingESelect, UserPollRevisionTranslationRatingECreateProperties, UserPollRevisionTranslationRatingEUpdateColumns, UserPollRevisionTranslationRatingEUpdateProperties, UserPollRevisionTranslationRatingEId, UserPollRevisionTranslationRatingECascadeGraph, QUserPollRevisionTranslationRating>
	implements IBaseUserPollRevisionTranslationRatingDuo {

	static diSet(): boolean {
		return duoDiSet(37)
	}
	
	constructor() {
		super(37)
	}
}


export interface IBaseVoteDuo
  extends IDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote> {
}

export class BaseVoteDuo
  extends SQDIDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote>
	implements IBaseVoteDuo {

	static diSet(): boolean {
		return duoDiSet(57)
	}
	
	constructor() {
		super(57)
	}
}


export interface IBaseVoteFactorDuo
  extends IDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor> {
}

export class BaseVoteFactorDuo
  extends SQDIDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor>
	implements IBaseVoteFactorDuo {

	static diSet(): boolean {
		return duoDiSet(60)
	}
	
	constructor() {
		super(60)
	}
}


export interface IBaseVoteFactorTypeDuo
  extends IDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType> {
}

export class BaseVoteFactorTypeDuo
  extends SQDIDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType>
	implements IBaseVoteFactorTypeDuo {

	static diSet(): boolean {
		return duoDiSet(59)
	}
	
	constructor() {
		super(59)
	}
}


export interface IBaseVoteRevisionDuo
  extends IDuo<IVoteRevision, VoteRevisionESelect, VoteRevisionECreateProperties, VoteRevisionEUpdateColumns, VoteRevisionEUpdateProperties, VoteRevisionEId, VoteRevisionECascadeGraph, QVoteRevision> {
}

export class BaseVoteRevisionDuo
  extends SQDIDuo<IVoteRevision, VoteRevisionESelect, VoteRevisionECreateProperties, VoteRevisionEUpdateColumns, VoteRevisionEUpdateProperties, VoteRevisionEId, VoteRevisionECascadeGraph, QVoteRevision>
	implements IBaseVoteRevisionDuo {

	static diSet(): boolean {
		return duoDiSet(61)
	}
	
	constructor() {
		super(61)
	}
}


export interface IBaseVoteTypeDuo
  extends IDuo<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType> {
}

export class BaseVoteTypeDuo
  extends SQDIDuo<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType>
	implements IBaseVoteTypeDuo {

	static diSet(): boolean {
		return duoDiSet(56)
	}
	
	constructor() {
		super(56)
	}
}
