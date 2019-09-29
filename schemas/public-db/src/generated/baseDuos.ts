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
	IChosenPollVariation
} from './poll/variation/chosenpollvariation'
import {
	ChosenPollVariationESelect,
	ChosenPollVariationECreateColumns,
	ChosenPollVariationECreateProperties,
	ChosenPollVariationEUpdateColumns,
	ChosenPollVariationEUpdateProperties,
	ChosenPollVariationEId,
	ChosenPollVariationECascadeGraph,
	QChosenPollVariation
} from './poll/variation/qchosenpollvariation'
import {
	IChosenPollVariationType
} from './poll/variation/chosenpollvariationtype'
import {
	ChosenPollVariationTypeESelect,
	ChosenPollVariationTypeECreateColumns,
	ChosenPollVariationTypeECreateProperties,
	ChosenPollVariationTypeEUpdateColumns,
	ChosenPollVariationTypeEUpdateProperties,
	ChosenPollVariationTypeEId,
	ChosenPollVariationTypeECascadeGraph,
	QChosenPollVariationType
} from './poll/variation/qchosenpollvariationtype'
import {
	IChosenVoteVariation
} from './vote/chosenvotevariation'
import {
	ChosenVoteVariationESelect,
	ChosenVoteVariationECreateColumns,
	ChosenVoteVariationECreateProperties,
	ChosenVoteVariationEUpdateColumns,
	ChosenVoteVariationEUpdateProperties,
	ChosenVoteVariationEId,
	ChosenVoteVariationECascadeGraph,
	QChosenVoteVariation
} from './vote/qchosenvotevariation'
import {
	IChosenVoteVariationType
} from './vote/chosenvotevariationtype'
import {
	ChosenVoteVariationTypeESelect,
	ChosenVoteVariationTypeECreateColumns,
	ChosenVoteVariationTypeECreateProperties,
	ChosenVoteVariationTypeEUpdateColumns,
	ChosenVoteVariationTypeEUpdateProperties,
	ChosenVoteVariationTypeEId,
	ChosenVoteVariationTypeECascadeGraph,
	QChosenVoteVariationType
} from './vote/qchosenvotevariationtype'
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
	IFactorSkinVariation
} from './factor/factorskinvariation'
import {
	FactorSkinVariationESelect,
	FactorSkinVariationECreateColumns,
	FactorSkinVariationECreateProperties,
	FactorSkinVariationEUpdateColumns,
	FactorSkinVariationEUpdateProperties,
	FactorSkinVariationEId,
	FactorSkinVariationECascadeGraph,
	QFactorSkinVariation
} from './factor/qfactorskinvariation'
import {
	IFactorVariation
} from './factor/factorvariation'
import {
	FactorVariationESelect,
	FactorVariationECreateColumns,
	FactorVariationECreateProperties,
	FactorVariationEUpdateColumns,
	FactorVariationEUpdateProperties,
	FactorVariationEId,
	FactorVariationECascadeGraph,
	QFactorVariation
} from './factor/qfactorvariation'
import {
	IFactorVariationTranslation
} from './factor/factorvariationtranslation'
import {
	FactorVariationTranslationESelect,
	FactorVariationTranslationECreateColumns,
	FactorVariationTranslationECreateProperties,
	FactorVariationTranslationEUpdateColumns,
	FactorVariationTranslationEUpdateProperties,
	FactorVariationTranslationEId,
	FactorVariationTranslationECascadeGraph,
	QFactorVariationTranslation
} from './factor/qfactorvariationtranslation'
import {
	ILabel
} from './poll/variation/label/label'
import {
	LabelESelect,
	LabelECreateColumns,
	LabelECreateProperties,
	LabelEUpdateColumns,
	LabelEUpdateProperties,
	LabelEId,
	LabelECascadeGraph,
	QLabel
} from './poll/variation/label/qlabel'
import {
	ILabelTranslation
} from './poll/variation/label/labeltranslation'
import {
	LabelTranslationESelect,
	LabelTranslationECreateColumns,
	LabelTranslationECreateProperties,
	LabelTranslationEUpdateColumns,
	LabelTranslationEUpdateProperties,
	LabelTranslationEId,
	LabelTranslationECascadeGraph,
	QLabelTranslation
} from './poll/variation/label/qlabeltranslation'
import {
	ILabelTranslationRating
} from './poll/variation/label/labeltranslationrating'
import {
	LabelTranslationRatingESelect,
	LabelTranslationRatingECreateColumns,
	LabelTranslationRatingECreateProperties,
	LabelTranslationRatingEUpdateColumns,
	LabelTranslationRatingEUpdateProperties,
	LabelTranslationRatingEId,
	LabelTranslationRatingECascadeGraph,
	QLabelTranslationRating
} from './poll/variation/label/qlabeltranslationrating'
import {
	ILabelTranslationRatingCount
} from './poll/variation/label/labeltranslationratingcount'
import {
	LabelTranslationRatingCountESelect,
	LabelTranslationRatingCountECreateColumns,
	LabelTranslationRatingCountECreateProperties,
	LabelTranslationRatingCountEUpdateColumns,
	LabelTranslationRatingCountEUpdateProperties,
	LabelTranslationRatingCountEId,
	LabelTranslationRatingCountECascadeGraph,
	QLabelTranslationRatingCount
} from './poll/variation/label/qlabeltranslationratingcount'
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
	IPollFactorPositionVariation
} from './poll/variation/structure/pollfactorpositionvariation'
import {
	PollFactorPositionVariationESelect,
	PollFactorPositionVariationECreateColumns,
	PollFactorPositionVariationECreateProperties,
	PollFactorPositionVariationEUpdateColumns,
	PollFactorPositionVariationEUpdateProperties,
	PollFactorPositionVariationEId,
	PollFactorPositionVariationECascadeGraph,
	QPollFactorPositionVariation
} from './poll/variation/structure/qpollfactorpositionvariation'
import {
	IPollFactorSkinVariation
} from './poll/variation/structure/pollfactorskinvariation'
import {
	PollFactorSkinVariationESelect,
	PollFactorSkinVariationECreateColumns,
	PollFactorSkinVariationECreateProperties,
	PollFactorSkinVariationEUpdateColumns,
	PollFactorSkinVariationEUpdateProperties,
	PollFactorSkinVariationEId,
	PollFactorSkinVariationECascadeGraph,
	QPollFactorSkinVariation
} from './poll/variation/structure/qpollfactorskinvariation'
import {
	IPollFactorVariation
} from './poll/variation/structure/pollfactorvariation'
import {
	PollFactorVariationESelect,
	PollFactorVariationECreateColumns,
	PollFactorVariationECreateProperties,
	PollFactorVariationEUpdateColumns,
	PollFactorVariationEUpdateProperties,
	PollFactorVariationEId,
	PollFactorVariationECascadeGraph,
	QPollFactorVariation
} from './poll/variation/structure/qpollfactorvariation'
import {
	IPollLTFContinent
} from './poll/locationtimeframe/location/pollltfcontinent'
import {
	PollLTFContinentESelect,
	PollLTFContinentECreateColumns,
	PollLTFContinentECreateProperties,
	PollLTFContinentEUpdateColumns,
	PollLTFContinentEUpdateProperties,
	PollLTFContinentEId,
	PollLTFContinentECascadeGraph,
	QPollLTFContinent
} from './poll/locationtimeframe/location/qpollltfcontinent'
import {
	IPollLTFCountry
} from './poll/locationtimeframe/location/pollltfcountry'
import {
	PollLTFCountryESelect,
	PollLTFCountryECreateColumns,
	PollLTFCountryECreateProperties,
	PollLTFCountryEUpdateColumns,
	PollLTFCountryEUpdateProperties,
	PollLTFCountryEId,
	PollLTFCountryECascadeGraph,
	QPollLTFCountry
} from './poll/locationtimeframe/location/qpollltfcountry'
import {
	IPollLTFCounty
} from './poll/locationtimeframe/location/pollltfcounty'
import {
	PollLTFCountyESelect,
	PollLTFCountyECreateColumns,
	PollLTFCountyECreateProperties,
	PollLTFCountyEUpdateColumns,
	PollLTFCountyEUpdateProperties,
	PollLTFCountyEId,
	PollLTFCountyECascadeGraph,
	QPollLTFCounty
} from './poll/locationtimeframe/location/qpollltfcounty'
import {
	IPollLTFOpinionCount
} from './poll/locationtimeframe/count/pollltfopinioncount'
import {
	PollLTFOpinionCountESelect,
	PollLTFOpinionCountECreateColumns,
	PollLTFOpinionCountECreateProperties,
	PollLTFOpinionCountEUpdateColumns,
	PollLTFOpinionCountEUpdateProperties,
	PollLTFOpinionCountEId,
	PollLTFOpinionCountECascadeGraph,
	QPollLTFOpinionCount
} from './poll/locationtimeframe/count/qpollltfopinioncount'
import {
	IPollLTFOpinionRatingCount
} from './poll/locationtimeframe/count/pollltfopinionratingcount'
import {
	PollLTFOpinionRatingCountESelect,
	PollLTFOpinionRatingCountECreateColumns,
	PollLTFOpinionRatingCountECreateProperties,
	PollLTFOpinionRatingCountEUpdateColumns,
	PollLTFOpinionRatingCountEUpdateProperties,
	PollLTFOpinionRatingCountEId,
	PollLTFOpinionRatingCountECascadeGraph,
	QPollLTFOpinionRatingCount
} from './poll/locationtimeframe/count/qpollltfopinionratingcount'
import {
	IPollLTFRatingCount
} from './poll/locationtimeframe/count/pollltfratingcount'
import {
	PollLTFRatingCountESelect,
	PollLTFRatingCountECreateColumns,
	PollLTFRatingCountECreateProperties,
	PollLTFRatingCountEUpdateColumns,
	PollLTFRatingCountEUpdateProperties,
	PollLTFRatingCountEId,
	PollLTFRatingCountECascadeGraph,
	QPollLTFRatingCount
} from './poll/locationtimeframe/count/qpollltfratingcount'
import {
	IPollLTFState
} from './poll/locationtimeframe/location/pollltfstate'
import {
	PollLTFStateESelect,
	PollLTFStateECreateColumns,
	PollLTFStateECreateProperties,
	PollLTFStateEUpdateColumns,
	PollLTFStateEUpdateProperties,
	PollLTFStateEId,
	PollLTFStateECascadeGraph,
	QPollLTFState
} from './poll/locationtimeframe/location/qpollltfstate'
import {
	IPollLTFTown
} from './poll/locationtimeframe/location/pollltftown'
import {
	PollLTFTownESelect,
	PollLTFTownECreateColumns,
	PollLTFTownECreateProperties,
	PollLTFTownEUpdateColumns,
	PollLTFTownEUpdateProperties,
	PollLTFTownEId,
	PollLTFTownECascadeGraph,
	QPollLTFTown
} from './poll/locationtimeframe/location/qpollltftown'
import {
	IPollLTFVoteCount
} from './poll/locationtimeframe/count/pollltfvotecount'
import {
	PollLTFVoteCountESelect,
	PollLTFVoteCountECreateColumns,
	PollLTFVoteCountECreateProperties,
	PollLTFVoteCountEUpdateColumns,
	PollLTFVoteCountEUpdateProperties,
	PollLTFVoteCountEId,
	PollLTFVoteCountECascadeGraph,
	QPollLTFVoteCount
} from './poll/locationtimeframe/count/qpollltfvotecount'
import {
	IPollLocationTimeFrame
} from './poll/locationtimeframe/polllocationtimeframe'
import {
	PollLocationTimeFrameESelect,
	PollLocationTimeFrameECreateColumns,
	PollLocationTimeFrameECreateProperties,
	PollLocationTimeFrameEUpdateColumns,
	PollLocationTimeFrameEUpdateProperties,
	PollLocationTimeFrameEId,
	PollLocationTimeFrameECascadeGraph,
	QPollLocationTimeFrame
} from './poll/locationtimeframe/qpolllocationtimeframe'
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
	IPollPositionVariation
} from './poll/variation/structure/pollpositionvariation'
import {
	PollPositionVariationESelect,
	PollPositionVariationECreateColumns,
	PollPositionVariationECreateProperties,
	PollPositionVariationEUpdateColumns,
	PollPositionVariationEUpdateProperties,
	PollPositionVariationEId,
	PollPositionVariationECascadeGraph,
	QPollPositionVariation
} from './poll/variation/structure/qpollpositionvariation'
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
	IPollVariation
} from './poll/variation/pollvariation'
import {
	PollVariationESelect,
	PollVariationECreateColumns,
	PollVariationECreateProperties,
	PollVariationEUpdateColumns,
	PollVariationEUpdateProperties,
	PollVariationEId,
	PollVariationECascadeGraph,
	QPollVariation
} from './poll/variation/qpollvariation'
import {
	IPollVariationFactorTranslation
} from './poll/variation/translation/pollvariationfactortranslation'
import {
	PollVariationFactorTranslationESelect,
	PollVariationFactorTranslationECreateColumns,
	PollVariationFactorTranslationECreateProperties,
	PollVariationFactorTranslationEUpdateColumns,
	PollVariationFactorTranslationEUpdateProperties,
	PollVariationFactorTranslationEId,
	PollVariationFactorTranslationECascadeGraph,
	QPollVariationFactorTranslation
} from './poll/variation/translation/qpollvariationfactortranslation'
import {
	IPollVariationLabel
} from './poll/variation/pollvariationlabel'
import {
	PollVariationLabelESelect,
	PollVariationLabelECreateColumns,
	PollVariationLabelECreateProperties,
	PollVariationLabelEUpdateColumns,
	PollVariationLabelEUpdateProperties,
	PollVariationLabelEId,
	PollVariationLabelECascadeGraph,
	QPollVariationLabel
} from './poll/variation/qpollvariationlabel'
import {
	IPollVariationOpinionCount
} from './poll/variation/count/pollvariationopinioncount'
import {
	PollVariationOpinionCountESelect,
	PollVariationOpinionCountECreateColumns,
	PollVariationOpinionCountECreateProperties,
	PollVariationOpinionCountEUpdateColumns,
	PollVariationOpinionCountEUpdateProperties,
	PollVariationOpinionCountEId,
	PollVariationOpinionCountECascadeGraph,
	QPollVariationOpinionCount
} from './poll/variation/count/qpollvariationopinioncount'
import {
	IPollVariationOpinionRatingCount
} from './poll/variation/count/pollvariationopinionratingcount'
import {
	PollVariationOpinionRatingCountESelect,
	PollVariationOpinionRatingCountECreateColumns,
	PollVariationOpinionRatingCountECreateProperties,
	PollVariationOpinionRatingCountEUpdateColumns,
	PollVariationOpinionRatingCountEUpdateProperties,
	PollVariationOpinionRatingCountEId,
	PollVariationOpinionRatingCountECascadeGraph,
	QPollVariationOpinionRatingCount
} from './poll/variation/count/qpollvariationopinionratingcount'
import {
	IPollVariationPositionTranslation
} from './poll/variation/translation/pollvariationpositiontranslation'
import {
	PollVariationPositionTranslationESelect,
	PollVariationPositionTranslationECreateColumns,
	PollVariationPositionTranslationECreateProperties,
	PollVariationPositionTranslationEUpdateColumns,
	PollVariationPositionTranslationEUpdateProperties,
	PollVariationPositionTranslationEId,
	PollVariationPositionTranslationECascadeGraph,
	QPollVariationPositionTranslation
} from './poll/variation/translation/qpollvariationpositiontranslation'
import {
	IPollVariationRatingCount
} from './poll/variation/count/pollvariationratingcount'
import {
	PollVariationRatingCountESelect,
	PollVariationRatingCountECreateColumns,
	PollVariationRatingCountECreateProperties,
	PollVariationRatingCountEUpdateColumns,
	PollVariationRatingCountEUpdateProperties,
	PollVariationRatingCountEId,
	PollVariationRatingCountECascadeGraph,
	QPollVariationRatingCount
} from './poll/variation/count/qpollvariationratingcount'
import {
	IPollVariationTranslation
} from './poll/variation/translation/pollvariationtranslation'
import {
	PollVariationTranslationESelect,
	PollVariationTranslationECreateColumns,
	PollVariationTranslationECreateProperties,
	PollVariationTranslationEUpdateColumns,
	PollVariationTranslationEUpdateProperties,
	PollVariationTranslationEId,
	PollVariationTranslationECascadeGraph,
	QPollVariationTranslation
} from './poll/variation/translation/qpollvariationtranslation'
import {
	IPollVariationTranslationOpinionCount
} from './poll/variation/translation/count/pollvariationtranslationopinioncount'
import {
	PollVariationTranslationOpinionCountESelect,
	PollVariationTranslationOpinionCountECreateColumns,
	PollVariationTranslationOpinionCountECreateProperties,
	PollVariationTranslationOpinionCountEUpdateColumns,
	PollVariationTranslationOpinionCountEUpdateProperties,
	PollVariationTranslationOpinionCountEId,
	PollVariationTranslationOpinionCountECascadeGraph,
	QPollVariationTranslationOpinionCount
} from './poll/variation/translation/count/qpollvariationtranslationopinioncount'
import {
	IPollVariationTranslationOpinionRatingCount
} from './poll/variation/translation/count/pollvariationtranslationopinionratingcount'
import {
	PollVariationTranslationOpinionRatingCountESelect,
	PollVariationTranslationOpinionRatingCountECreateColumns,
	PollVariationTranslationOpinionRatingCountECreateProperties,
	PollVariationTranslationOpinionRatingCountEUpdateColumns,
	PollVariationTranslationOpinionRatingCountEUpdateProperties,
	PollVariationTranslationOpinionRatingCountEId,
	PollVariationTranslationOpinionRatingCountECascadeGraph,
	QPollVariationTranslationOpinionRatingCount
} from './poll/variation/translation/count/qpollvariationtranslationopinionratingcount'
import {
	IPollVariationTranslationRatingCount
} from './poll/variation/translation/count/pollvariationtranslationratingcount'
import {
	PollVariationTranslationRatingCountESelect,
	PollVariationTranslationRatingCountECreateColumns,
	PollVariationTranslationRatingCountECreateProperties,
	PollVariationTranslationRatingCountEUpdateColumns,
	PollVariationTranslationRatingCountEUpdateProperties,
	PollVariationTranslationRatingCountEId,
	PollVariationTranslationRatingCountECascadeGraph,
	QPollVariationTranslationRatingCount
} from './poll/variation/translation/count/qpollvariationtranslationratingcount'
import {
	IPollVariationTranslationVoteCount
} from './poll/variation/translation/count/pollvariationtranslationvotecount'
import {
	PollVariationTranslationVoteCountESelect,
	PollVariationTranslationVoteCountECreateColumns,
	PollVariationTranslationVoteCountECreateProperties,
	PollVariationTranslationVoteCountEUpdateColumns,
	PollVariationTranslationVoteCountEUpdateProperties,
	PollVariationTranslationVoteCountEId,
	PollVariationTranslationVoteCountECascadeGraph,
	QPollVariationTranslationVoteCount
} from './poll/variation/translation/count/qpollvariationtranslationvotecount'
import {
	IPollVariationVoteCount
} from './poll/variation/count/pollvariationvotecount'
import {
	PollVariationVoteCountESelect,
	PollVariationVoteCountECreateColumns,
	PollVariationVoteCountECreateProperties,
	PollVariationVoteCountEUpdateColumns,
	PollVariationVoteCountEUpdateProperties,
	PollVariationVoteCountEId,
	PollVariationVoteCountECascadeGraph,
	QPollVariationVoteCount
} from './poll/variation/count/qpollvariationvotecount'
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
	IPositionVariation
} from './factor/position/positionvariation'
import {
	PositionVariationESelect,
	PositionVariationECreateColumns,
	PositionVariationECreateProperties,
	PositionVariationEUpdateColumns,
	PositionVariationEUpdateProperties,
	PositionVariationEId,
	PositionVariationECascadeGraph,
	QPositionVariation
} from './factor/position/qpositionvariation'
import {
	IPositionVariationTranslation
} from './factor/position/positionvariationtranslation'
import {
	PositionVariationTranslationESelect,
	PositionVariationTranslationECreateColumns,
	PositionVariationTranslationECreateProperties,
	PositionVariationTranslationEUpdateColumns,
	PositionVariationTranslationEUpdateProperties,
	PositionVariationTranslationEId,
	PositionVariationTranslationECascadeGraph,
	QPositionVariationTranslation
} from './factor/position/qpositionvariationtranslation'
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
	IUserPollVariation
} from './poll/user/userpollvariation'
import {
	UserPollVariationESelect,
	UserPollVariationECreateColumns,
	UserPollVariationECreateProperties,
	UserPollVariationEUpdateColumns,
	UserPollVariationEUpdateProperties,
	UserPollVariationEId,
	UserPollVariationECascadeGraph,
	QUserPollVariation
} from './poll/user/quserpollvariation'
import {
	IUserPollVariationRating
} from './poll/user/userpollvariationrating'
import {
	UserPollVariationRatingESelect,
	UserPollVariationRatingECreateColumns,
	UserPollVariationRatingECreateProperties,
	UserPollVariationRatingEUpdateColumns,
	UserPollVariationRatingEUpdateProperties,
	UserPollVariationRatingEId,
	UserPollVariationRatingECascadeGraph,
	QUserPollVariationRating
} from './poll/user/quserpollvariationrating'
import {
	IUserPollVariationTranslation
} from './poll/user/userpollvariationtranslation'
import {
	UserPollVariationTranslationESelect,
	UserPollVariationTranslationECreateColumns,
	UserPollVariationTranslationECreateProperties,
	UserPollVariationTranslationEUpdateColumns,
	UserPollVariationTranslationEUpdateProperties,
	UserPollVariationTranslationEId,
	UserPollVariationTranslationECascadeGraph,
	QUserPollVariationTranslation
} from './poll/user/quserpollvariationtranslation'
import {
	IUserPollVariationTranslationRating
} from './poll/user/userpollvariationtranslationrating'
import {
	UserPollVariationTranslationRatingESelect,
	UserPollVariationTranslationRatingECreateColumns,
	UserPollVariationTranslationRatingECreateProperties,
	UserPollVariationTranslationRatingEUpdateColumns,
	UserPollVariationTranslationRatingEUpdateProperties,
	UserPollVariationTranslationRatingEId,
	UserPollVariationTranslationRatingECascadeGraph,
	QUserPollVariationTranslationRating
} from './poll/user/quserpollvariationtranslationrating'
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
import {
	IVoteVariation
} from './vote/votevariation'
import {
	VoteVariationESelect,
	VoteVariationECreateColumns,
	VoteVariationECreateProperties,
	VoteVariationEUpdateColumns,
	VoteVariationEUpdateProperties,
	VoteVariationEId,
	VoteVariationECascadeGraph,
	QVoteVariation
} from './vote/qvotevariation'


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


export interface IBaseChosenPollTranslationDuo
  extends IDuo<IChosenPollTranslation, ChosenPollTranslationESelect, ChosenPollTranslationECreateProperties, ChosenPollTranslationEUpdateColumns, ChosenPollTranslationEUpdateProperties, ChosenPollTranslationEId, ChosenPollTranslationECascadeGraph, QChosenPollTranslation> {
}

export class BaseChosenPollTranslationDuo
  extends SQDIDuo<IChosenPollTranslation, ChosenPollTranslationESelect, ChosenPollTranslationECreateProperties, ChosenPollTranslationEUpdateColumns, ChosenPollTranslationEUpdateProperties, ChosenPollTranslationEId, ChosenPollTranslationECascadeGraph, QChosenPollTranslation>
	implements IBaseChosenPollTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(53)
	}
	
	constructor() {
		super(53)
	}
}


export interface IBaseChosenPollTranslationTypeDuo
  extends IDuo<IChosenPollTranslationType, ChosenPollTranslationTypeESelect, ChosenPollTranslationTypeECreateProperties, ChosenPollTranslationTypeEUpdateColumns, ChosenPollTranslationTypeEUpdateProperties, ChosenPollTranslationTypeEId, ChosenPollTranslationTypeECascadeGraph, QChosenPollTranslationType> {
}

export class BaseChosenPollTranslationTypeDuo
  extends SQDIDuo<IChosenPollTranslationType, ChosenPollTranslationTypeESelect, ChosenPollTranslationTypeECreateProperties, ChosenPollTranslationTypeEUpdateColumns, ChosenPollTranslationTypeEUpdateProperties, ChosenPollTranslationTypeEId, ChosenPollTranslationTypeECascadeGraph, QChosenPollTranslationType>
	implements IBaseChosenPollTranslationTypeDuo {

	static diSet(): boolean {
		return duoDiSet(52)
	}
	
	constructor() {
		super(52)
	}
}


export interface IBaseChosenPollVariationDuo
  extends IDuo<IChosenPollVariation, ChosenPollVariationESelect, ChosenPollVariationECreateProperties, ChosenPollVariationEUpdateColumns, ChosenPollVariationEUpdateProperties, ChosenPollVariationEId, ChosenPollVariationECascadeGraph, QChosenPollVariation> {
}

export class BaseChosenPollVariationDuo
  extends SQDIDuo<IChosenPollVariation, ChosenPollVariationESelect, ChosenPollVariationECreateProperties, ChosenPollVariationEUpdateColumns, ChosenPollVariationEUpdateProperties, ChosenPollVariationEId, ChosenPollVariationECascadeGraph, QChosenPollVariation>
	implements IBaseChosenPollVariationDuo {

	static diSet(): boolean {
		return duoDiSet(24)
	}
	
	constructor() {
		super(24)
	}
}


export interface IBaseChosenPollVariationTypeDuo
  extends IDuo<IChosenPollVariationType, ChosenPollVariationTypeESelect, ChosenPollVariationTypeECreateProperties, ChosenPollVariationTypeEUpdateColumns, ChosenPollVariationTypeEUpdateProperties, ChosenPollVariationTypeEId, ChosenPollVariationTypeECascadeGraph, QChosenPollVariationType> {
}

export class BaseChosenPollVariationTypeDuo
  extends SQDIDuo<IChosenPollVariationType, ChosenPollVariationTypeESelect, ChosenPollVariationTypeECreateProperties, ChosenPollVariationTypeEUpdateColumns, ChosenPollVariationTypeEUpdateProperties, ChosenPollVariationTypeEId, ChosenPollVariationTypeECascadeGraph, QChosenPollVariationType>
	implements IBaseChosenPollVariationTypeDuo {

	static diSet(): boolean {
		return duoDiSet(23)
	}
	
	constructor() {
		super(23)
	}
}


export interface IBaseChosenVoteVariationDuo
  extends IDuo<IChosenVoteVariation, ChosenVoteVariationESelect, ChosenVoteVariationECreateProperties, ChosenVoteVariationEUpdateColumns, ChosenVoteVariationEUpdateProperties, ChosenVoteVariationEId, ChosenVoteVariationECascadeGraph, QChosenVoteVariation> {
}

export class BaseChosenVoteVariationDuo
  extends SQDIDuo<IChosenVoteVariation, ChosenVoteVariationESelect, ChosenVoteVariationECreateProperties, ChosenVoteVariationEUpdateColumns, ChosenVoteVariationEUpdateProperties, ChosenVoteVariationEId, ChosenVoteVariationECascadeGraph, QChosenVoteVariation>
	implements IBaseChosenVoteVariationDuo {

	static diSet(): boolean {
		return duoDiSet(57)
	}
	
	constructor() {
		super(57)
	}
}


export interface IBaseChosenVoteVariationTypeDuo
  extends IDuo<IChosenVoteVariationType, ChosenVoteVariationTypeESelect, ChosenVoteVariationTypeECreateProperties, ChosenVoteVariationTypeEUpdateColumns, ChosenVoteVariationTypeEUpdateProperties, ChosenVoteVariationTypeEId, ChosenVoteVariationTypeECascadeGraph, QChosenVoteVariationType> {
}

export class BaseChosenVoteVariationTypeDuo
  extends SQDIDuo<IChosenVoteVariationType, ChosenVoteVariationTypeESelect, ChosenVoteVariationTypeECreateProperties, ChosenVoteVariationTypeEUpdateColumns, ChosenVoteVariationTypeEUpdateProperties, ChosenVoteVariationTypeEId, ChosenVoteVariationTypeECascadeGraph, QChosenVoteVariationType>
	implements IBaseChosenVoteVariationTypeDuo {

	static diSet(): boolean {
		return duoDiSet(56)
	}
	
	constructor() {
		super(56)
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
		return duoDiSet(88)
	}
	
	constructor() {
		super(88)
	}
}


export interface IBaseFactorOpinionVersionDuo
  extends IDuo<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion> {
}

export class BaseFactorOpinionVersionDuo
  extends SQDIDuo<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion>
	implements IBaseFactorOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(74)
	}
	
	constructor() {
		super(74)
	}
}


export interface IBaseFactorOpinionVersionRatingDuo
  extends IDuo<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating> {
}

export class BaseFactorOpinionVersionRatingDuo
  extends SQDIDuo<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating>
	implements IBaseFactorOpinionVersionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(73)
	}
	
	constructor() {
		super(73)
	}
}


export interface IBaseFactorOpinionVersionRatingCountDuo
  extends IDuo<IFactorOpinionVersionRatingCount, FactorOpinionVersionRatingCountESelect, FactorOpinionVersionRatingCountECreateProperties, FactorOpinionVersionRatingCountEUpdateColumns, FactorOpinionVersionRatingCountEUpdateProperties, FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountECascadeGraph, QFactorOpinionVersionRatingCount> {
}

export class BaseFactorOpinionVersionRatingCountDuo
  extends SQDIDuo<IFactorOpinionVersionRatingCount, FactorOpinionVersionRatingCountESelect, FactorOpinionVersionRatingCountECreateProperties, FactorOpinionVersionRatingCountEUpdateColumns, FactorOpinionVersionRatingCountEUpdateProperties, FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountECascadeGraph, QFactorOpinionVersionRatingCount>
	implements IBaseFactorOpinionVersionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(66)
	}
	
	constructor() {
		super(66)
	}
}


export interface IBaseFactorOpinionVersionTranslationDuo
  extends IDuo<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation> {
}

export class BaseFactorOpinionVersionTranslationDuo
  extends SQDIDuo<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation>
	implements IBaseFactorOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(72)
	}
	
	constructor() {
		super(72)
	}
}


export interface IBaseFactorPositionDuo
  extends IDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition> {
}

export class BaseFactorPositionDuo
  extends SQDIDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition>
	implements IBaseFactorPositionDuo {

	static diSet(): boolean {
		return duoDiSet(89)
	}
	
	constructor() {
		super(89)
	}
}


export interface IBaseFactorSkinVariationDuo
  extends IDuo<IFactorSkinVariation, FactorSkinVariationESelect, FactorSkinVariationECreateProperties, FactorSkinVariationEUpdateColumns, FactorSkinVariationEUpdateProperties, FactorSkinVariationEId, FactorSkinVariationECascadeGraph, QFactorSkinVariation> {
}

export class BaseFactorSkinVariationDuo
  extends SQDIDuo<IFactorSkinVariation, FactorSkinVariationESelect, FactorSkinVariationECreateProperties, FactorSkinVariationEUpdateColumns, FactorSkinVariationEUpdateProperties, FactorSkinVariationEId, FactorSkinVariationECascadeGraph, QFactorSkinVariation>
	implements IBaseFactorSkinVariationDuo {

	static diSet(): boolean {
		return duoDiSet(87)
	}
	
	constructor() {
		super(87)
	}
}


export interface IBaseFactorVariationDuo
  extends IDuo<IFactorVariation, FactorVariationESelect, FactorVariationECreateProperties, FactorVariationEUpdateColumns, FactorVariationEUpdateProperties, FactorVariationEId, FactorVariationECascadeGraph, QFactorVariation> {
}

export class BaseFactorVariationDuo
  extends SQDIDuo<IFactorVariation, FactorVariationESelect, FactorVariationECreateProperties, FactorVariationEUpdateColumns, FactorVariationEUpdateProperties, FactorVariationEId, FactorVariationECascadeGraph, QFactorVariation>
	implements IBaseFactorVariationDuo {

	static diSet(): boolean {
		return duoDiSet(44)
	}
	
	constructor() {
		super(44)
	}
}


export interface IBaseFactorVariationTranslationDuo
  extends IDuo<IFactorVariationTranslation, FactorVariationTranslationESelect, FactorVariationTranslationECreateProperties, FactorVariationTranslationEUpdateColumns, FactorVariationTranslationEUpdateProperties, FactorVariationTranslationEId, FactorVariationTranslationECascadeGraph, QFactorVariationTranslation> {
}

export class BaseFactorVariationTranslationDuo
  extends SQDIDuo<IFactorVariationTranslation, FactorVariationTranslationESelect, FactorVariationTranslationECreateProperties, FactorVariationTranslationEUpdateColumns, FactorVariationTranslationEUpdateProperties, FactorVariationTranslationEId, FactorVariationTranslationECascadeGraph, QFactorVariationTranslation>
	implements IBaseFactorVariationTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(45)
	}
	
	constructor() {
		super(45)
	}
}


export interface IBaseLabelDuo
  extends IDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelECascadeGraph, QLabel> {
}

export class BaseLabelDuo
  extends SQDIDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelECascadeGraph, QLabel>
	implements IBaseLabelDuo {

	static diSet(): boolean {
		return duoDiSet(83)
	}
	
	constructor() {
		super(83)
	}
}


export interface IBaseLabelTranslationDuo
  extends IDuo<ILabelTranslation, LabelTranslationESelect, LabelTranslationECreateProperties, LabelTranslationEUpdateColumns, LabelTranslationEUpdateProperties, LabelTranslationEId, LabelTranslationECascadeGraph, QLabelTranslation> {
}

export class BaseLabelTranslationDuo
  extends SQDIDuo<ILabelTranslation, LabelTranslationESelect, LabelTranslationECreateProperties, LabelTranslationEUpdateColumns, LabelTranslationEUpdateProperties, LabelTranslationEId, LabelTranslationECascadeGraph, QLabelTranslation>
	implements IBaseLabelTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(97)
	}
	
	constructor() {
		super(97)
	}
}


export interface IBaseLabelTranslationRatingDuo
  extends IDuo<ILabelTranslationRating, LabelTranslationRatingESelect, LabelTranslationRatingECreateProperties, LabelTranslationRatingEUpdateColumns, LabelTranslationRatingEUpdateProperties, LabelTranslationRatingEId, LabelTranslationRatingECascadeGraph, QLabelTranslationRating> {
}

export class BaseLabelTranslationRatingDuo
  extends SQDIDuo<ILabelTranslationRating, LabelTranslationRatingESelect, LabelTranslationRatingECreateProperties, LabelTranslationRatingEUpdateColumns, LabelTranslationRatingEUpdateProperties, LabelTranslationRatingEId, LabelTranslationRatingECascadeGraph, QLabelTranslationRating>
	implements IBaseLabelTranslationRatingDuo {

	static diSet(): boolean {
		return duoDiSet(98)
	}
	
	constructor() {
		super(98)
	}
}


export interface IBaseLabelTranslationRatingCountDuo
  extends IDuo<ILabelTranslationRatingCount, LabelTranslationRatingCountESelect, LabelTranslationRatingCountECreateProperties, LabelTranslationRatingCountEUpdateColumns, LabelTranslationRatingCountEUpdateProperties, LabelTranslationRatingCountEId, LabelTranslationRatingCountECascadeGraph, QLabelTranslationRatingCount> {
}

export class BaseLabelTranslationRatingCountDuo
  extends SQDIDuo<ILabelTranslationRatingCount, LabelTranslationRatingCountESelect, LabelTranslationRatingCountECreateProperties, LabelTranslationRatingCountEUpdateColumns, LabelTranslationRatingCountEUpdateProperties, LabelTranslationRatingCountEId, LabelTranslationRatingCountECascadeGraph, QLabelTranslationRatingCount>
	implements IBaseLabelTranslationRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(96)
	}
	
	constructor() {
		super(96)
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
		return duoDiSet(54)
	}
	
	constructor() {
		super(54)
	}
}


export interface IBasePollFactorPositionVariationDuo
  extends IDuo<IPollFactorPositionVariation, PollFactorPositionVariationESelect, PollFactorPositionVariationECreateProperties, PollFactorPositionVariationEUpdateColumns, PollFactorPositionVariationEUpdateProperties, PollFactorPositionVariationEId, PollFactorPositionVariationECascadeGraph, QPollFactorPositionVariation> {
}

export class BasePollFactorPositionVariationDuo
  extends SQDIDuo<IPollFactorPositionVariation, PollFactorPositionVariationESelect, PollFactorPositionVariationECreateProperties, PollFactorPositionVariationEUpdateColumns, PollFactorPositionVariationEUpdateProperties, PollFactorPositionVariationEId, PollFactorPositionVariationECascadeGraph, QPollFactorPositionVariation>
	implements IBasePollFactorPositionVariationDuo {

	static diSet(): boolean {
		return duoDiSet(60)
	}
	
	constructor() {
		super(60)
	}
}


export interface IBasePollFactorSkinVariationDuo
  extends IDuo<IPollFactorSkinVariation, PollFactorSkinVariationESelect, PollFactorSkinVariationECreateProperties, PollFactorSkinVariationEUpdateColumns, PollFactorSkinVariationEUpdateProperties, PollFactorSkinVariationEId, PollFactorSkinVariationECascadeGraph, QPollFactorSkinVariation> {
}

export class BasePollFactorSkinVariationDuo
  extends SQDIDuo<IPollFactorSkinVariation, PollFactorSkinVariationESelect, PollFactorSkinVariationECreateProperties, PollFactorSkinVariationEUpdateColumns, PollFactorSkinVariationEUpdateProperties, PollFactorSkinVariationEId, PollFactorSkinVariationECascadeGraph, QPollFactorSkinVariation>
	implements IBasePollFactorSkinVariationDuo {

	static diSet(): boolean {
		return duoDiSet(85)
	}
	
	constructor() {
		super(85)
	}
}


export interface IBasePollFactorVariationDuo
  extends IDuo<IPollFactorVariation, PollFactorVariationESelect, PollFactorVariationECreateProperties, PollFactorVariationEUpdateColumns, PollFactorVariationEUpdateProperties, PollFactorVariationEId, PollFactorVariationECascadeGraph, QPollFactorVariation> {
}

export class BasePollFactorVariationDuo
  extends SQDIDuo<IPollFactorVariation, PollFactorVariationESelect, PollFactorVariationECreateProperties, PollFactorVariationEUpdateColumns, PollFactorVariationEUpdateProperties, PollFactorVariationEId, PollFactorVariationECascadeGraph, QPollFactorVariation>
	implements IBasePollFactorVariationDuo {

	static diSet(): boolean {
		return duoDiSet(65)
	}
	
	constructor() {
		super(65)
	}
}


export interface IBasePollLTFContinentDuo
  extends IDuo<IPollLTFContinent, PollLTFContinentESelect, PollLTFContinentECreateProperties, PollLTFContinentEUpdateColumns, PollLTFContinentEUpdateProperties, PollLTFContinentEId, PollLTFContinentECascadeGraph, QPollLTFContinent> {
}

export class BasePollLTFContinentDuo
  extends SQDIDuo<IPollLTFContinent, PollLTFContinentESelect, PollLTFContinentECreateProperties, PollLTFContinentEUpdateColumns, PollLTFContinentEUpdateProperties, PollLTFContinentEId, PollLTFContinentECascadeGraph, QPollLTFContinent>
	implements IBasePollLTFContinentDuo {

	static diSet(): boolean {
		return duoDiSet(25)
	}
	
	constructor() {
		super(25)
	}
}


export interface IBasePollLTFCountryDuo
  extends IDuo<IPollLTFCountry, PollLTFCountryESelect, PollLTFCountryECreateProperties, PollLTFCountryEUpdateColumns, PollLTFCountryEUpdateProperties, PollLTFCountryEId, PollLTFCountryECascadeGraph, QPollLTFCountry> {
}

export class BasePollLTFCountryDuo
  extends SQDIDuo<IPollLTFCountry, PollLTFCountryESelect, PollLTFCountryECreateProperties, PollLTFCountryEUpdateColumns, PollLTFCountryEUpdateProperties, PollLTFCountryEId, PollLTFCountryECascadeGraph, QPollLTFCountry>
	implements IBasePollLTFCountryDuo {

	static diSet(): boolean {
		return duoDiSet(26)
	}
	
	constructor() {
		super(26)
	}
}


export interface IBasePollLTFCountyDuo
  extends IDuo<IPollLTFCounty, PollLTFCountyESelect, PollLTFCountyECreateProperties, PollLTFCountyEUpdateColumns, PollLTFCountyEUpdateProperties, PollLTFCountyEId, PollLTFCountyECascadeGraph, QPollLTFCounty> {
}

export class BasePollLTFCountyDuo
  extends SQDIDuo<IPollLTFCounty, PollLTFCountyESelect, PollLTFCountyECreateProperties, PollLTFCountyEUpdateColumns, PollLTFCountyEUpdateProperties, PollLTFCountyEId, PollLTFCountyECascadeGraph, QPollLTFCounty>
	implements IBasePollLTFCountyDuo {

	static diSet(): boolean {
		return duoDiSet(27)
	}
	
	constructor() {
		super(27)
	}
}


export interface IBasePollLTFOpinionCountDuo
  extends IDuo<IPollLTFOpinionCount, PollLTFOpinionCountESelect, PollLTFOpinionCountECreateProperties, PollLTFOpinionCountEUpdateColumns, PollLTFOpinionCountEUpdateProperties, PollLTFOpinionCountEId, PollLTFOpinionCountECascadeGraph, QPollLTFOpinionCount> {
}

export class BasePollLTFOpinionCountDuo
  extends SQDIDuo<IPollLTFOpinionCount, PollLTFOpinionCountESelect, PollLTFOpinionCountECreateProperties, PollLTFOpinionCountEUpdateColumns, PollLTFOpinionCountEUpdateProperties, PollLTFOpinionCountEId, PollLTFOpinionCountECascadeGraph, QPollLTFOpinionCount>
	implements IBasePollLTFOpinionCountDuo {

	static diSet(): boolean {
		return duoDiSet(92)
	}
	
	constructor() {
		super(92)
	}
}


export interface IBasePollLTFOpinionRatingCountDuo
  extends IDuo<IPollLTFOpinionRatingCount, PollLTFOpinionRatingCountESelect, PollLTFOpinionRatingCountECreateProperties, PollLTFOpinionRatingCountEUpdateColumns, PollLTFOpinionRatingCountEUpdateProperties, PollLTFOpinionRatingCountEId, PollLTFOpinionRatingCountECascadeGraph, QPollLTFOpinionRatingCount> {
}

export class BasePollLTFOpinionRatingCountDuo
  extends SQDIDuo<IPollLTFOpinionRatingCount, PollLTFOpinionRatingCountESelect, PollLTFOpinionRatingCountECreateProperties, PollLTFOpinionRatingCountEUpdateColumns, PollLTFOpinionRatingCountEUpdateProperties, PollLTFOpinionRatingCountEId, PollLTFOpinionRatingCountECascadeGraph, QPollLTFOpinionRatingCount>
	implements IBasePollLTFOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(93)
	}
	
	constructor() {
		super(93)
	}
}


export interface IBasePollLTFRatingCountDuo
  extends IDuo<IPollLTFRatingCount, PollLTFRatingCountESelect, PollLTFRatingCountECreateProperties, PollLTFRatingCountEUpdateColumns, PollLTFRatingCountEUpdateProperties, PollLTFRatingCountEId, PollLTFRatingCountECascadeGraph, QPollLTFRatingCount> {
}

export class BasePollLTFRatingCountDuo
  extends SQDIDuo<IPollLTFRatingCount, PollLTFRatingCountESelect, PollLTFRatingCountECreateProperties, PollLTFRatingCountEUpdateColumns, PollLTFRatingCountEUpdateProperties, PollLTFRatingCountEId, PollLTFRatingCountECascadeGraph, QPollLTFRatingCount>
	implements IBasePollLTFRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(94)
	}
	
	constructor() {
		super(94)
	}
}


export interface IBasePollLTFStateDuo
  extends IDuo<IPollLTFState, PollLTFStateESelect, PollLTFStateECreateProperties, PollLTFStateEUpdateColumns, PollLTFStateEUpdateProperties, PollLTFStateEId, PollLTFStateECascadeGraph, QPollLTFState> {
}

export class BasePollLTFStateDuo
  extends SQDIDuo<IPollLTFState, PollLTFStateESelect, PollLTFStateECreateProperties, PollLTFStateEUpdateColumns, PollLTFStateEUpdateProperties, PollLTFStateEId, PollLTFStateECascadeGraph, QPollLTFState>
	implements IBasePollLTFStateDuo {

	static diSet(): boolean {
		return duoDiSet(28)
	}
	
	constructor() {
		super(28)
	}
}


export interface IBasePollLTFTownDuo
  extends IDuo<IPollLTFTown, PollLTFTownESelect, PollLTFTownECreateProperties, PollLTFTownEUpdateColumns, PollLTFTownEUpdateProperties, PollLTFTownEId, PollLTFTownECascadeGraph, QPollLTFTown> {
}

export class BasePollLTFTownDuo
  extends SQDIDuo<IPollLTFTown, PollLTFTownESelect, PollLTFTownECreateProperties, PollLTFTownEUpdateColumns, PollLTFTownEUpdateProperties, PollLTFTownEId, PollLTFTownECascadeGraph, QPollLTFTown>
	implements IBasePollLTFTownDuo {

	static diSet(): boolean {
		return duoDiSet(29)
	}
	
	constructor() {
		super(29)
	}
}


export interface IBasePollLTFVoteCountDuo
  extends IDuo<IPollLTFVoteCount, PollLTFVoteCountESelect, PollLTFVoteCountECreateProperties, PollLTFVoteCountEUpdateColumns, PollLTFVoteCountEUpdateProperties, PollLTFVoteCountEId, PollLTFVoteCountECascadeGraph, QPollLTFVoteCount> {
}

export class BasePollLTFVoteCountDuo
  extends SQDIDuo<IPollLTFVoteCount, PollLTFVoteCountESelect, PollLTFVoteCountECreateProperties, PollLTFVoteCountEUpdateColumns, PollLTFVoteCountEUpdateProperties, PollLTFVoteCountEId, PollLTFVoteCountECascadeGraph, QPollLTFVoteCount>
	implements IBasePollLTFVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(95)
	}
	
	constructor() {
		super(95)
	}
}


export interface IBasePollLocationTimeFrameDuo
  extends IDuo<IPollLocationTimeFrame, PollLocationTimeFrameESelect, PollLocationTimeFrameECreateProperties, PollLocationTimeFrameEUpdateColumns, PollLocationTimeFrameEUpdateProperties, PollLocationTimeFrameEId, PollLocationTimeFrameECascadeGraph, QPollLocationTimeFrame> {
}

export class BasePollLocationTimeFrameDuo
  extends SQDIDuo<IPollLocationTimeFrame, PollLocationTimeFrameESelect, PollLocationTimeFrameECreateProperties, PollLocationTimeFrameEUpdateColumns, PollLocationTimeFrameEUpdateProperties, PollLocationTimeFrameEId, PollLocationTimeFrameECascadeGraph, QPollLocationTimeFrame>
	implements IBasePollLocationTimeFrameDuo {

	static diSet(): boolean {
		return duoDiSet(30)
	}
	
	constructor() {
		super(30)
	}
}


export interface IBasePollOpinionDuo
  extends IDuo<IPollOpinion, PollOpinionESelect, PollOpinionECreateProperties, PollOpinionEUpdateColumns, PollOpinionEUpdateProperties, PollOpinionEId, PollOpinionECascadeGraph, QPollOpinion> {
}

export class BasePollOpinionDuo
  extends SQDIDuo<IPollOpinion, PollOpinionESelect, PollOpinionECreateProperties, PollOpinionEUpdateColumns, PollOpinionEUpdateProperties, PollOpinionEId, PollOpinionECascadeGraph, QPollOpinion>
	implements IBasePollOpinionDuo {

	static diSet(): boolean {
		return duoDiSet(78)
	}
	
	constructor() {
		super(78)
	}
}


export interface IBasePollOpinionRatingCountDuo
  extends IDuo<IPollOpinionRatingCount, PollOpinionRatingCountESelect, PollOpinionRatingCountECreateProperties, PollOpinionRatingCountEUpdateColumns, PollOpinionRatingCountEUpdateProperties, PollOpinionRatingCountEId, PollOpinionRatingCountECascadeGraph, QPollOpinionRatingCount> {
}

export class BasePollOpinionRatingCountDuo
  extends SQDIDuo<IPollOpinionRatingCount, PollOpinionRatingCountESelect, PollOpinionRatingCountECreateProperties, PollOpinionRatingCountEUpdateColumns, PollOpinionRatingCountEUpdateProperties, PollOpinionRatingCountEId, PollOpinionRatingCountECascadeGraph, QPollOpinionRatingCount>
	implements IBasePollOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(55)
	}
	
	constructor() {
		super(55)
	}
}


export interface IBasePollOpinionVersionDuo
  extends IDuo<IPollOpinionVersion, PollOpinionVersionESelect, PollOpinionVersionECreateProperties, PollOpinionVersionEUpdateColumns, PollOpinionVersionEUpdateProperties, PollOpinionVersionEId, PollOpinionVersionECascadeGraph, QPollOpinionVersion> {
}

export class BasePollOpinionVersionDuo
  extends SQDIDuo<IPollOpinionVersion, PollOpinionVersionESelect, PollOpinionVersionECreateProperties, PollOpinionVersionEUpdateColumns, PollOpinionVersionEUpdateProperties, PollOpinionVersionEId, PollOpinionVersionECascadeGraph, QPollOpinionVersion>
	implements IBasePollOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(77)
	}
	
	constructor() {
		super(77)
	}
}


export interface IBasePollOpinionVersionRatingDuo
  extends IDuo<IPollOpinionVersionRating, PollOpinionVersionRatingESelect, PollOpinionVersionRatingECreateProperties, PollOpinionVersionRatingEUpdateColumns, PollOpinionVersionRatingEUpdateProperties, PollOpinionVersionRatingEId, PollOpinionVersionRatingECascadeGraph, QPollOpinionVersionRating> {
}

export class BasePollOpinionVersionRatingDuo
  extends SQDIDuo<IPollOpinionVersionRating, PollOpinionVersionRatingESelect, PollOpinionVersionRatingECreateProperties, PollOpinionVersionRatingEUpdateColumns, PollOpinionVersionRatingEUpdateProperties, PollOpinionVersionRatingEId, PollOpinionVersionRatingECascadeGraph, QPollOpinionVersionRating>
	implements IBasePollOpinionVersionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(76)
	}
	
	constructor() {
		super(76)
	}
}


export interface IBasePollOpinionVersionRatingCountDuo
  extends IDuo<IPollOpinionVersionRatingCount, PollOpinionVersionRatingCountESelect, PollOpinionVersionRatingCountECreateProperties, PollOpinionVersionRatingCountEUpdateColumns, PollOpinionVersionRatingCountEUpdateProperties, PollOpinionVersionRatingCountEId, PollOpinionVersionRatingCountECascadeGraph, QPollOpinionVersionRatingCount> {
}

export class BasePollOpinionVersionRatingCountDuo
  extends SQDIDuo<IPollOpinionVersionRatingCount, PollOpinionVersionRatingCountESelect, PollOpinionVersionRatingCountECreateProperties, PollOpinionVersionRatingCountEUpdateColumns, PollOpinionVersionRatingCountEUpdateProperties, PollOpinionVersionRatingCountEId, PollOpinionVersionRatingCountECascadeGraph, QPollOpinionVersionRatingCount>
	implements IBasePollOpinionVersionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(64)
	}
	
	constructor() {
		super(64)
	}
}


export interface IBasePollOpinionVersionTranslationDuo
  extends IDuo<IPollOpinionVersionTranslation, PollOpinionVersionTranslationESelect, PollOpinionVersionTranslationECreateProperties, PollOpinionVersionTranslationEUpdateColumns, PollOpinionVersionTranslationEUpdateProperties, PollOpinionVersionTranslationEId, PollOpinionVersionTranslationECascadeGraph, QPollOpinionVersionTranslation> {
}

export class BasePollOpinionVersionTranslationDuo
  extends SQDIDuo<IPollOpinionVersionTranslation, PollOpinionVersionTranslationESelect, PollOpinionVersionTranslationECreateProperties, PollOpinionVersionTranslationEUpdateColumns, PollOpinionVersionTranslationEUpdateProperties, PollOpinionVersionTranslationEId, PollOpinionVersionTranslationECascadeGraph, QPollOpinionVersionTranslation>
	implements IBasePollOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(75)
	}
	
	constructor() {
		super(75)
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


export interface IBasePollPositionVariationDuo
  extends IDuo<IPollPositionVariation, PollPositionVariationESelect, PollPositionVariationECreateProperties, PollPositionVariationEUpdateColumns, PollPositionVariationEUpdateProperties, PollPositionVariationEId, PollPositionVariationECascadeGraph, QPollPositionVariation> {
}

export class BasePollPositionVariationDuo
  extends SQDIDuo<IPollPositionVariation, PollPositionVariationESelect, PollPositionVariationECreateProperties, PollPositionVariationEUpdateColumns, PollPositionVariationEUpdateProperties, PollPositionVariationEId, PollPositionVariationECascadeGraph, QPollPositionVariation>
	implements IBasePollPositionVariationDuo {

	static diSet(): boolean {
		return duoDiSet(67)
	}
	
	constructor() {
		super(67)
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


export interface IBasePollTypeDuo
  extends IDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType> {
}

export class BasePollTypeDuo
  extends SQDIDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType>
	implements IBasePollTypeDuo {

	static diSet(): boolean {
		return duoDiSet(31)
	}
	
	constructor() {
		super(31)
	}
}


export interface IBasePollVariationDuo
  extends IDuo<IPollVariation, PollVariationESelect, PollVariationECreateProperties, PollVariationEUpdateColumns, PollVariationEUpdateProperties, PollVariationEId, PollVariationECascadeGraph, QPollVariation> {
}

export class BasePollVariationDuo
  extends SQDIDuo<IPollVariation, PollVariationESelect, PollVariationECreateProperties, PollVariationEUpdateColumns, PollVariationEUpdateProperties, PollVariationEId, PollVariationECascadeGraph, QPollVariation>
	implements IBasePollVariationDuo {

	static diSet(): boolean {
		return duoDiSet(86)
	}
	
	constructor() {
		super(86)
	}
}


export interface IBasePollVariationFactorTranslationDuo
  extends IDuo<IPollVariationFactorTranslation, PollVariationFactorTranslationESelect, PollVariationFactorTranslationECreateProperties, PollVariationFactorTranslationEUpdateColumns, PollVariationFactorTranslationEUpdateProperties, PollVariationFactorTranslationEId, PollVariationFactorTranslationECascadeGraph, QPollVariationFactorTranslation> {
}

export class BasePollVariationFactorTranslationDuo
  extends SQDIDuo<IPollVariationFactorTranslation, PollVariationFactorTranslationESelect, PollVariationFactorTranslationECreateProperties, PollVariationFactorTranslationEUpdateColumns, PollVariationFactorTranslationEUpdateProperties, PollVariationFactorTranslationEId, PollVariationFactorTranslationECascadeGraph, QPollVariationFactorTranslation>
	implements IBasePollVariationFactorTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(46)
	}
	
	constructor() {
		super(46)
	}
}


export interface IBasePollVariationLabelDuo
  extends IDuo<IPollVariationLabel, PollVariationLabelESelect, PollVariationLabelECreateProperties, PollVariationLabelEUpdateColumns, PollVariationLabelEUpdateProperties, PollVariationLabelEId, PollVariationLabelECascadeGraph, QPollVariationLabel> {
}

export class BasePollVariationLabelDuo
  extends SQDIDuo<IPollVariationLabel, PollVariationLabelESelect, PollVariationLabelECreateProperties, PollVariationLabelEUpdateColumns, PollVariationLabelEUpdateProperties, PollVariationLabelEId, PollVariationLabelECascadeGraph, QPollVariationLabel>
	implements IBasePollVariationLabelDuo {

	static diSet(): boolean {
		return duoDiSet(84)
	}
	
	constructor() {
		super(84)
	}
}


export interface IBasePollVariationOpinionCountDuo
  extends IDuo<IPollVariationOpinionCount, PollVariationOpinionCountESelect, PollVariationOpinionCountECreateProperties, PollVariationOpinionCountEUpdateColumns, PollVariationOpinionCountEUpdateProperties, PollVariationOpinionCountEId, PollVariationOpinionCountECascadeGraph, QPollVariationOpinionCount> {
}

export class BasePollVariationOpinionCountDuo
  extends SQDIDuo<IPollVariationOpinionCount, PollVariationOpinionCountESelect, PollVariationOpinionCountECreateProperties, PollVariationOpinionCountEUpdateColumns, PollVariationOpinionCountEUpdateProperties, PollVariationOpinionCountEId, PollVariationOpinionCountECascadeGraph, QPollVariationOpinionCount>
	implements IBasePollVariationOpinionCountDuo {

	static diSet(): boolean {
		return duoDiSet(79)
	}
	
	constructor() {
		super(79)
	}
}


export interface IBasePollVariationOpinionRatingCountDuo
  extends IDuo<IPollVariationOpinionRatingCount, PollVariationOpinionRatingCountESelect, PollVariationOpinionRatingCountECreateProperties, PollVariationOpinionRatingCountEUpdateColumns, PollVariationOpinionRatingCountEUpdateProperties, PollVariationOpinionRatingCountEId, PollVariationOpinionRatingCountECascadeGraph, QPollVariationOpinionRatingCount> {
}

export class BasePollVariationOpinionRatingCountDuo
  extends SQDIDuo<IPollVariationOpinionRatingCount, PollVariationOpinionRatingCountESelect, PollVariationOpinionRatingCountECreateProperties, PollVariationOpinionRatingCountEUpdateColumns, PollVariationOpinionRatingCountEUpdateProperties, PollVariationOpinionRatingCountEId, PollVariationOpinionRatingCountECascadeGraph, QPollVariationOpinionRatingCount>
	implements IBasePollVariationOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(80)
	}
	
	constructor() {
		super(80)
	}
}


export interface IBasePollVariationPositionTranslationDuo
  extends IDuo<IPollVariationPositionTranslation, PollVariationPositionTranslationESelect, PollVariationPositionTranslationECreateProperties, PollVariationPositionTranslationEUpdateColumns, PollVariationPositionTranslationEUpdateProperties, PollVariationPositionTranslationEId, PollVariationPositionTranslationECascadeGraph, QPollVariationPositionTranslation> {
}

export class BasePollVariationPositionTranslationDuo
  extends SQDIDuo<IPollVariationPositionTranslation, PollVariationPositionTranslationESelect, PollVariationPositionTranslationECreateProperties, PollVariationPositionTranslationEUpdateColumns, PollVariationPositionTranslationEUpdateProperties, PollVariationPositionTranslationEId, PollVariationPositionTranslationECascadeGraph, QPollVariationPositionTranslation>
	implements IBasePollVariationPositionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(50)
	}
	
	constructor() {
		super(50)
	}
}


export interface IBasePollVariationRatingCountDuo
  extends IDuo<IPollVariationRatingCount, PollVariationRatingCountESelect, PollVariationRatingCountECreateProperties, PollVariationRatingCountEUpdateColumns, PollVariationRatingCountEUpdateProperties, PollVariationRatingCountEId, PollVariationRatingCountECascadeGraph, QPollVariationRatingCount> {
}

export class BasePollVariationRatingCountDuo
  extends SQDIDuo<IPollVariationRatingCount, PollVariationRatingCountESelect, PollVariationRatingCountECreateProperties, PollVariationRatingCountEUpdateColumns, PollVariationRatingCountEUpdateProperties, PollVariationRatingCountEId, PollVariationRatingCountECascadeGraph, QPollVariationRatingCount>
	implements IBasePollVariationRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(81)
	}
	
	constructor() {
		super(81)
	}
}


export interface IBasePollVariationTranslationDuo
  extends IDuo<IPollVariationTranslation, PollVariationTranslationESelect, PollVariationTranslationECreateProperties, PollVariationTranslationEUpdateColumns, PollVariationTranslationEUpdateProperties, PollVariationTranslationEId, PollVariationTranslationECascadeGraph, QPollVariationTranslation> {
}

export class BasePollVariationTranslationDuo
  extends SQDIDuo<IPollVariationTranslation, PollVariationTranslationESelect, PollVariationTranslationECreateProperties, PollVariationTranslationEUpdateColumns, PollVariationTranslationEUpdateProperties, PollVariationTranslationEId, PollVariationTranslationECascadeGraph, QPollVariationTranslation>
	implements IBasePollVariationTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(51)
	}
	
	constructor() {
		super(51)
	}
}


export interface IBasePollVariationTranslationOpinionCountDuo
  extends IDuo<IPollVariationTranslationOpinionCount, PollVariationTranslationOpinionCountESelect, PollVariationTranslationOpinionCountECreateProperties, PollVariationTranslationOpinionCountEUpdateColumns, PollVariationTranslationOpinionCountEUpdateProperties, PollVariationTranslationOpinionCountEId, PollVariationTranslationOpinionCountECascadeGraph, QPollVariationTranslationOpinionCount> {
}

export class BasePollVariationTranslationOpinionCountDuo
  extends SQDIDuo<IPollVariationTranslationOpinionCount, PollVariationTranslationOpinionCountESelect, PollVariationTranslationOpinionCountECreateProperties, PollVariationTranslationOpinionCountEUpdateColumns, PollVariationTranslationOpinionCountEUpdateProperties, PollVariationTranslationOpinionCountEId, PollVariationTranslationOpinionCountECascadeGraph, QPollVariationTranslationOpinionCount>
	implements IBasePollVariationTranslationOpinionCountDuo {

	static diSet(): boolean {
		return duoDiSet(40)
	}
	
	constructor() {
		super(40)
	}
}


export interface IBasePollVariationTranslationOpinionRatingCountDuo
  extends IDuo<IPollVariationTranslationOpinionRatingCount, PollVariationTranslationOpinionRatingCountESelect, PollVariationTranslationOpinionRatingCountECreateProperties, PollVariationTranslationOpinionRatingCountEUpdateColumns, PollVariationTranslationOpinionRatingCountEUpdateProperties, PollVariationTranslationOpinionRatingCountEId, PollVariationTranslationOpinionRatingCountECascadeGraph, QPollVariationTranslationOpinionRatingCount> {
}

export class BasePollVariationTranslationOpinionRatingCountDuo
  extends SQDIDuo<IPollVariationTranslationOpinionRatingCount, PollVariationTranslationOpinionRatingCountESelect, PollVariationTranslationOpinionRatingCountECreateProperties, PollVariationTranslationOpinionRatingCountEUpdateColumns, PollVariationTranslationOpinionRatingCountEUpdateProperties, PollVariationTranslationOpinionRatingCountEId, PollVariationTranslationOpinionRatingCountECascadeGraph, QPollVariationTranslationOpinionRatingCount>
	implements IBasePollVariationTranslationOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(41)
	}
	
	constructor() {
		super(41)
	}
}


export interface IBasePollVariationTranslationRatingCountDuo
  extends IDuo<IPollVariationTranslationRatingCount, PollVariationTranslationRatingCountESelect, PollVariationTranslationRatingCountECreateProperties, PollVariationTranslationRatingCountEUpdateColumns, PollVariationTranslationRatingCountEUpdateProperties, PollVariationTranslationRatingCountEId, PollVariationTranslationRatingCountECascadeGraph, QPollVariationTranslationRatingCount> {
}

export class BasePollVariationTranslationRatingCountDuo
  extends SQDIDuo<IPollVariationTranslationRatingCount, PollVariationTranslationRatingCountESelect, PollVariationTranslationRatingCountECreateProperties, PollVariationTranslationRatingCountEUpdateColumns, PollVariationTranslationRatingCountEUpdateProperties, PollVariationTranslationRatingCountEId, PollVariationTranslationRatingCountECascadeGraph, QPollVariationTranslationRatingCount>
	implements IBasePollVariationTranslationRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(42)
	}
	
	constructor() {
		super(42)
	}
}


export interface IBasePollVariationTranslationVoteCountDuo
  extends IDuo<IPollVariationTranslationVoteCount, PollVariationTranslationVoteCountESelect, PollVariationTranslationVoteCountECreateProperties, PollVariationTranslationVoteCountEUpdateColumns, PollVariationTranslationVoteCountEUpdateProperties, PollVariationTranslationVoteCountEId, PollVariationTranslationVoteCountECascadeGraph, QPollVariationTranslationVoteCount> {
}

export class BasePollVariationTranslationVoteCountDuo
  extends SQDIDuo<IPollVariationTranslationVoteCount, PollVariationTranslationVoteCountESelect, PollVariationTranslationVoteCountECreateProperties, PollVariationTranslationVoteCountEUpdateColumns, PollVariationTranslationVoteCountEUpdateProperties, PollVariationTranslationVoteCountEId, PollVariationTranslationVoteCountECascadeGraph, QPollVariationTranslationVoteCount>
	implements IBasePollVariationTranslationVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(43)
	}
	
	constructor() {
		super(43)
	}
}


export interface IBasePollVariationVoteCountDuo
  extends IDuo<IPollVariationVoteCount, PollVariationVoteCountESelect, PollVariationVoteCountECreateProperties, PollVariationVoteCountEUpdateColumns, PollVariationVoteCountEUpdateProperties, PollVariationVoteCountEId, PollVariationVoteCountECascadeGraph, QPollVariationVoteCount> {
}

export class BasePollVariationVoteCountDuo
  extends SQDIDuo<IPollVariationVoteCount, PollVariationVoteCountESelect, PollVariationVoteCountECreateProperties, PollVariationVoteCountEUpdateColumns, PollVariationVoteCountEUpdateProperties, PollVariationVoteCountEId, PollVariationVoteCountECascadeGraph, QPollVariationVoteCount>
	implements IBasePollVariationVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(82)
	}
	
	constructor() {
		super(82)
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
		return duoDiSet(47)
	}
	
	constructor() {
		super(47)
	}
}


export interface IBasePositionOpinionVersionDuo
  extends IDuo<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion> {
}

export class BasePositionOpinionVersionDuo
  extends SQDIDuo<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion>
	implements IBasePositionOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(71)
	}
	
	constructor() {
		super(71)
	}
}


export interface IBasePositionOpinionVersionRatingDuo
  extends IDuo<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating> {
}

export class BasePositionOpinionVersionRatingDuo
  extends SQDIDuo<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating>
	implements IBasePositionOpinionVersionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(70)
	}
	
	constructor() {
		super(70)
	}
}


export interface IBasePositionOpinionVersionRatingCountDuo
  extends IDuo<IPositionOpinionVersionRatingCount, PositionOpinionVersionRatingCountESelect, PositionOpinionVersionRatingCountECreateProperties, PositionOpinionVersionRatingCountEUpdateColumns, PositionOpinionVersionRatingCountEUpdateProperties, PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountECascadeGraph, QPositionOpinionVersionRatingCount> {
}

export class BasePositionOpinionVersionRatingCountDuo
  extends SQDIDuo<IPositionOpinionVersionRatingCount, PositionOpinionVersionRatingCountESelect, PositionOpinionVersionRatingCountECreateProperties, PositionOpinionVersionRatingCountEUpdateColumns, PositionOpinionVersionRatingCountEUpdateProperties, PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountECascadeGraph, QPositionOpinionVersionRatingCount>
	implements IBasePositionOpinionVersionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(68)
	}
	
	constructor() {
		super(68)
	}
}


export interface IBasePositionOpinionVersionTranslationDuo
  extends IDuo<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation> {
}

export class BasePositionOpinionVersionTranslationDuo
  extends SQDIDuo<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation>
	implements IBasePositionOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(69)
	}
	
	constructor() {
		super(69)
	}
}


export interface IBasePositionVariationDuo
  extends IDuo<IPositionVariation, PositionVariationESelect, PositionVariationECreateProperties, PositionVariationEUpdateColumns, PositionVariationEUpdateProperties, PositionVariationEId, PositionVariationECascadeGraph, QPositionVariation> {
}

export class BasePositionVariationDuo
  extends SQDIDuo<IPositionVariation, PositionVariationESelect, PositionVariationECreateProperties, PositionVariationEUpdateColumns, PositionVariationEUpdateProperties, PositionVariationEId, PositionVariationECascadeGraph, QPositionVariation>
	implements IBasePositionVariationDuo {

	static diSet(): boolean {
		return duoDiSet(48)
	}
	
	constructor() {
		super(48)
	}
}


export interface IBasePositionVariationTranslationDuo
  extends IDuo<IPositionVariationTranslation, PositionVariationTranslationESelect, PositionVariationTranslationECreateProperties, PositionVariationTranslationEUpdateColumns, PositionVariationTranslationEUpdateProperties, PositionVariationTranslationEId, PositionVariationTranslationECascadeGraph, QPositionVariationTranslation> {
}

export class BasePositionVariationTranslationDuo
  extends SQDIDuo<IPositionVariationTranslation, PositionVariationTranslationESelect, PositionVariationTranslationECreateProperties, PositionVariationTranslationEUpdateColumns, PositionVariationTranslationEUpdateProperties, PositionVariationTranslationEId, PositionVariationTranslationECascadeGraph, QPositionVariationTranslation>
	implements IBasePositionVariationTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(49)
	}
	
	constructor() {
		super(49)
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
		return duoDiSet(91)
	}
	
	constructor() {
		super(91)
	}
}


export interface IBaseRatingReasonTranslationDuo
  extends IDuo<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation> {
}

export class BaseRatingReasonTranslationDuo
  extends SQDIDuo<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation>
	implements IBaseRatingReasonTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(90)
	}
	
	constructor() {
		super(90)
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
		return duoDiSet(32)
	}
	
	constructor() {
		super(32)
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
		return duoDiSet(33)
	}
	
	constructor() {
		super(33)
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
		return duoDiSet(35)
	}
	
	constructor() {
		super(35)
	}
}


export interface IBaseUserPollRatingDuo
  extends IDuo<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating> {
}

export class BaseUserPollRatingDuo
  extends SQDIDuo<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating>
	implements IBaseUserPollRatingDuo {

	static diSet(): boolean {
		return duoDiSet(34)
	}
	
	constructor() {
		super(34)
	}
}


export interface IBaseUserPollVariationDuo
  extends IDuo<IUserPollVariation, UserPollVariationESelect, UserPollVariationECreateProperties, UserPollVariationEUpdateColumns, UserPollVariationEUpdateProperties, UserPollVariationEId, UserPollVariationECascadeGraph, QUserPollVariation> {
}

export class BaseUserPollVariationDuo
  extends SQDIDuo<IUserPollVariation, UserPollVariationESelect, UserPollVariationECreateProperties, UserPollVariationEUpdateColumns, UserPollVariationEUpdateProperties, UserPollVariationEId, UserPollVariationECascadeGraph, QUserPollVariation>
	implements IBaseUserPollVariationDuo {

	static diSet(): boolean {
		return duoDiSet(37)
	}
	
	constructor() {
		super(37)
	}
}


export interface IBaseUserPollVariationRatingDuo
  extends IDuo<IUserPollVariationRating, UserPollVariationRatingESelect, UserPollVariationRatingECreateProperties, UserPollVariationRatingEUpdateColumns, UserPollVariationRatingEUpdateProperties, UserPollVariationRatingEId, UserPollVariationRatingECascadeGraph, QUserPollVariationRating> {
}

export class BaseUserPollVariationRatingDuo
  extends SQDIDuo<IUserPollVariationRating, UserPollVariationRatingESelect, UserPollVariationRatingECreateProperties, UserPollVariationRatingEUpdateColumns, UserPollVariationRatingEUpdateProperties, UserPollVariationRatingEId, UserPollVariationRatingECascadeGraph, QUserPollVariationRating>
	implements IBaseUserPollVariationRatingDuo {

	static diSet(): boolean {
		return duoDiSet(36)
	}
	
	constructor() {
		super(36)
	}
}


export interface IBaseUserPollVariationTranslationDuo
  extends IDuo<IUserPollVariationTranslation, UserPollVariationTranslationESelect, UserPollVariationTranslationECreateProperties, UserPollVariationTranslationEUpdateColumns, UserPollVariationTranslationEUpdateProperties, UserPollVariationTranslationEId, UserPollVariationTranslationECascadeGraph, QUserPollVariationTranslation> {
}

export class BaseUserPollVariationTranslationDuo
  extends SQDIDuo<IUserPollVariationTranslation, UserPollVariationTranslationESelect, UserPollVariationTranslationECreateProperties, UserPollVariationTranslationEUpdateColumns, UserPollVariationTranslationEUpdateProperties, UserPollVariationTranslationEId, UserPollVariationTranslationECascadeGraph, QUserPollVariationTranslation>
	implements IBaseUserPollVariationTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(38)
	}
	
	constructor() {
		super(38)
	}
}


export interface IBaseUserPollVariationTranslationRatingDuo
  extends IDuo<IUserPollVariationTranslationRating, UserPollVariationTranslationRatingESelect, UserPollVariationTranslationRatingECreateProperties, UserPollVariationTranslationRatingEUpdateColumns, UserPollVariationTranslationRatingEUpdateProperties, UserPollVariationTranslationRatingEId, UserPollVariationTranslationRatingECascadeGraph, QUserPollVariationTranslationRating> {
}

export class BaseUserPollVariationTranslationRatingDuo
  extends SQDIDuo<IUserPollVariationTranslationRating, UserPollVariationTranslationRatingESelect, UserPollVariationTranslationRatingECreateProperties, UserPollVariationTranslationRatingEUpdateColumns, UserPollVariationTranslationRatingEUpdateProperties, UserPollVariationTranslationRatingEId, UserPollVariationTranslationRatingECascadeGraph, QUserPollVariationTranslationRating>
	implements IBaseUserPollVariationTranslationRatingDuo {

	static diSet(): boolean {
		return duoDiSet(39)
	}
	
	constructor() {
		super(39)
	}
}


export interface IBaseVoteDuo
  extends IDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote> {
}

export class BaseVoteDuo
  extends SQDIDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote>
	implements IBaseVoteDuo {

	static diSet(): boolean {
		return duoDiSet(59)
	}
	
	constructor() {
		super(59)
	}
}


export interface IBaseVoteFactorDuo
  extends IDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor> {
}

export class BaseVoteFactorDuo
  extends SQDIDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor>
	implements IBaseVoteFactorDuo {

	static diSet(): boolean {
		return duoDiSet(62)
	}
	
	constructor() {
		super(62)
	}
}


export interface IBaseVoteFactorTypeDuo
  extends IDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType> {
}

export class BaseVoteFactorTypeDuo
  extends SQDIDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType>
	implements IBaseVoteFactorTypeDuo {

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
		return duoDiSet(58)
	}
	
	constructor() {
		super(58)
	}
}


export interface IBaseVoteVariationDuo
  extends IDuo<IVoteVariation, VoteVariationESelect, VoteVariationECreateProperties, VoteVariationEUpdateColumns, VoteVariationEUpdateProperties, VoteVariationEId, VoteVariationECascadeGraph, QVoteVariation> {
}

export class BaseVoteVariationDuo
  extends SQDIDuo<IVoteVariation, VoteVariationESelect, VoteVariationECreateProperties, VoteVariationEUpdateColumns, VoteVariationEUpdateProperties, VoteVariationEId, VoteVariationECascadeGraph, QVoteVariation>
	implements IBaseVoteVariationDuo {

	static diSet(): boolean {
		return duoDiSet(63)
	}
	
	constructor() {
		super(63)
	}
}
