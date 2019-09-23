import {
	IDuo,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateProperties,
	IQEntity
} from '@airport/air-control'
import { Duo } from "@airport/check-in"
import {
	EntityId as DbEntityId
} from '@airport/ground-control'
import {
	Q,
	duoDiSet
} from './qSchema'
import {
	IActor,
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
	IApplication,
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
	IChosenPollTranslation,
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
	IChosenPollTranslationType,
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
	IChosenPollVariation,
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
	IChosenPollVariationType,
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
	IChosenVoteVariation,
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
	IChosenVoteVariationType,
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
	IContinent,
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
	ICountry,
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
	ICountryTown,
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
	ICounty,
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
	ICountyTown,
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
	IDesignPattern,
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
	IDevice,
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
	IEmoji,
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
	IFactor,
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
	IFactorOpinionVersion,
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
	IFactorOpinionVersionRating,
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
	IFactorOpinionVersionRatingCount,
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
	IFactorOpinionVersionTranslation,
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
	IFactorPosition,
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
	IFactorSkinVariation,
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
	IFactorVariation,
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
	IFactorVariationTranslation,
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
	ILabel,
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
	ILabelTranslation,
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
	ILabelTranslationRating,
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
	ILabelTranslationRatingCount,
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
	ILanguage,
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
	IPoll,
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
	IPollFactorPositionVariation,
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
	IPollFactorSkinVariation,
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
	IPollFactorVariation,
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
	IPollLTFContinent,
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
	IPollLTFCountry,
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
	IPollLTFCounty,
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
	IPollLTFOpinionCount,
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
	IPollLTFOpinionRatingCount,
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
	IPollLTFRatingCount,
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
	IPollLTFState,
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
	IPollLTFTown,
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
	IPollLTFVoteCount,
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
	IPollLocationTimeFrame,
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
	IPollOpinion,
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
	IPollOpinionRatingCount,
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
	IPollOpinionVersion,
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
	IPollOpinionVersionRating,
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
	IPollOpinionVersionRatingCount,
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
	IPollOpinionVersionTranslation,
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
	IPollOpinionsCount,
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
	IPollOpinionsRatingCount,
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
	IPollPositionVariation,
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
	IPollRatingCount,
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
	IPollType,
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
	IPollVariation,
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
	IPollVariationFactorTranslation,
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
	IPollVariationLabel,
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
	IPollVariationOpinionCount,
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
	IPollVariationOpinionRatingCount,
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
	IPollVariationPositionTranslation,
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
	IPollVariationRatingCount,
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
	IPollVariationTranslation,
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
	IPollVariationTranslationOpinionCount,
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
	IPollVariationTranslationOpinionRatingCount,
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
	IPollVariationTranslationRatingCount,
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
	IPollVariationTranslationVoteCount,
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
	IPollVariationVoteCount,
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
	IPollVoteCount,
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
	IPosition,
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
	IPositionOpinionVersion,
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
	IPositionOpinionVersionRating,
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
	IPositionOpinionVersionRatingCount,
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
	IPositionOpinionVersionTranslation,
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
	IPositionVariation,
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
	IPositionVariationTranslation,
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
	IRating,
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
	IRatingReason,
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
	IRatingReasonTranslation,
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
	IRatingSetting,
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
	IRatingTranslation,
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
	IRatingType,
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
	IState,
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
	IStateTown,
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
	ITheme,
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
	ITown,
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
	ITranslationType,
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
	IUserAccount,
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
	IUserPoll,
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
	IUserPollRating,
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
	IUserPollVariation,
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
	IUserPollVariationRating,
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
	IUserPollVariationTranslation,
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
	IUserPollVariationTranslationRating,
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
	IVote,
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
	IVoteFactor,
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
	IVoteFactorType,
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
	IVoteType,
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
	IVoteVariation,
	VoteVariationESelect,
	VoteVariationECreateColumns,
	VoteVariationECreateProperties,
	VoteVariationEUpdateColumns,
	VoteVariationEUpdateProperties,
	VoteVariationEId,
	VoteVariationECascadeGraph,
	QVoteVariation
} from './vote/qvotevariation'


// Schema Q object Dependency Injection readiness detection DAO
export class SQDIDuo<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity>
	extends Duo<Entity,
		EntitySelect,
		EntityCreate,
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
  extends IDuo<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor> {
}

export class BaseActorDuo
  extends SQDIDuo<IActor, ActorESelect, ActorECreateProperties, ActorEUpdateProperties, ActorEId, ActorECascadeGraph, QActor>
	implements IBaseActorDuo {

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseApplicationDuo
  extends IDuo<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication> {
}

export class BaseApplicationDuo
  extends SQDIDuo<IApplication, ApplicationESelect, ApplicationECreateProperties, ApplicationEUpdateProperties, ApplicationEId, ApplicationECascadeGraph, QApplication>
	implements IBaseApplicationDuo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseChosenPollTranslationDuo
  extends IDuo<IChosenPollTranslation, ChosenPollTranslationESelect, ChosenPollTranslationECreateProperties, ChosenPollTranslationEUpdateProperties, ChosenPollTranslationEId, ChosenPollTranslationECascadeGraph, QChosenPollTranslation> {
}

export class BaseChosenPollTranslationDuo
  extends SQDIDuo<IChosenPollTranslation, ChosenPollTranslationESelect, ChosenPollTranslationECreateProperties, ChosenPollTranslationEUpdateProperties, ChosenPollTranslationEId, ChosenPollTranslationECascadeGraph, QChosenPollTranslation>
	implements IBaseChosenPollTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(53)
	}
	
	constructor() {
		super(53)
	}
}


export interface IBaseChosenPollTranslationTypeDuo
  extends IDuo<IChosenPollTranslationType, ChosenPollTranslationTypeESelect, ChosenPollTranslationTypeECreateProperties, ChosenPollTranslationTypeEUpdateProperties, ChosenPollTranslationTypeEId, ChosenPollTranslationTypeECascadeGraph, QChosenPollTranslationType> {
}

export class BaseChosenPollTranslationTypeDuo
  extends SQDIDuo<IChosenPollTranslationType, ChosenPollTranslationTypeESelect, ChosenPollTranslationTypeECreateProperties, ChosenPollTranslationTypeEUpdateProperties, ChosenPollTranslationTypeEId, ChosenPollTranslationTypeECascadeGraph, QChosenPollTranslationType>
	implements IBaseChosenPollTranslationTypeDuo {

	static diSet(): boolean {
		return duoDiSet(52)
	}
	
	constructor() {
		super(52)
	}
}


export interface IBaseChosenPollVariationDuo
  extends IDuo<IChosenPollVariation, ChosenPollVariationESelect, ChosenPollVariationECreateProperties, ChosenPollVariationEUpdateProperties, ChosenPollVariationEId, ChosenPollVariationECascadeGraph, QChosenPollVariation> {
}

export class BaseChosenPollVariationDuo
  extends SQDIDuo<IChosenPollVariation, ChosenPollVariationESelect, ChosenPollVariationECreateProperties, ChosenPollVariationEUpdateProperties, ChosenPollVariationEId, ChosenPollVariationECascadeGraph, QChosenPollVariation>
	implements IBaseChosenPollVariationDuo {

	static diSet(): boolean {
		return duoDiSet(24)
	}
	
	constructor() {
		super(24)
	}
}


export interface IBaseChosenPollVariationTypeDuo
  extends IDuo<IChosenPollVariationType, ChosenPollVariationTypeESelect, ChosenPollVariationTypeECreateProperties, ChosenPollVariationTypeEUpdateProperties, ChosenPollVariationTypeEId, ChosenPollVariationTypeECascadeGraph, QChosenPollVariationType> {
}

export class BaseChosenPollVariationTypeDuo
  extends SQDIDuo<IChosenPollVariationType, ChosenPollVariationTypeESelect, ChosenPollVariationTypeECreateProperties, ChosenPollVariationTypeEUpdateProperties, ChosenPollVariationTypeEId, ChosenPollVariationTypeECascadeGraph, QChosenPollVariationType>
	implements IBaseChosenPollVariationTypeDuo {

	static diSet(): boolean {
		return duoDiSet(23)
	}
	
	constructor() {
		super(23)
	}
}


export interface IBaseChosenVoteVariationDuo
  extends IDuo<IChosenVoteVariation, ChosenVoteVariationESelect, ChosenVoteVariationECreateProperties, ChosenVoteVariationEUpdateProperties, ChosenVoteVariationEId, ChosenVoteVariationECascadeGraph, QChosenVoteVariation> {
}

export class BaseChosenVoteVariationDuo
  extends SQDIDuo<IChosenVoteVariation, ChosenVoteVariationESelect, ChosenVoteVariationECreateProperties, ChosenVoteVariationEUpdateProperties, ChosenVoteVariationEId, ChosenVoteVariationECascadeGraph, QChosenVoteVariation>
	implements IBaseChosenVoteVariationDuo {

	static diSet(): boolean {
		return duoDiSet(59)
	}
	
	constructor() {
		super(59)
	}
}


export interface IBaseChosenVoteVariationTypeDuo
  extends IDuo<IChosenVoteVariationType, ChosenVoteVariationTypeESelect, ChosenVoteVariationTypeECreateProperties, ChosenVoteVariationTypeEUpdateProperties, ChosenVoteVariationTypeEId, ChosenVoteVariationTypeECascadeGraph, QChosenVoteVariationType> {
}

export class BaseChosenVoteVariationTypeDuo
  extends SQDIDuo<IChosenVoteVariationType, ChosenVoteVariationTypeESelect, ChosenVoteVariationTypeECreateProperties, ChosenVoteVariationTypeEUpdateProperties, ChosenVoteVariationTypeEId, ChosenVoteVariationTypeECascadeGraph, QChosenVoteVariationType>
	implements IBaseChosenVoteVariationTypeDuo {

	static diSet(): boolean {
		return duoDiSet(58)
	}
	
	constructor() {
		super(58)
	}
}


export interface IBaseContinentDuo
  extends IDuo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent> {
}

export class BaseContinentDuo
  extends SQDIDuo<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent>
	implements IBaseContinentDuo {

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseCountryDuo
  extends IDuo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry> {
}

export class BaseCountryDuo
  extends SQDIDuo<ICountry, CountryESelect, CountryECreateProperties, CountryEUpdateProperties, CountryEId, CountryECascadeGraph, QCountry>
	implements IBaseCountryDuo {

	static diSet(): boolean {
		return duoDiSet(14)
	}
	
	constructor() {
		super(14)
	}
}


export interface IBaseCountryTownDuo
  extends IDuo<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown> {
}

export class BaseCountryTownDuo
  extends SQDIDuo<ICountryTown, CountryTownESelect, CountryTownECreateProperties, CountryTownEUpdateProperties, CountryTownEId, CountryTownECascadeGraph, QCountryTown>
	implements IBaseCountryTownDuo {

	static diSet(): boolean {
		return duoDiSet(13)
	}
	
	constructor() {
		super(13)
	}
}


export interface IBaseCountyDuo
  extends IDuo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty> {
}

export class BaseCountyDuo
  extends SQDIDuo<ICounty, CountyESelect, CountyECreateProperties, CountyEUpdateProperties, CountyEId, CountyECascadeGraph, QCounty>
	implements IBaseCountyDuo {

	static diSet(): boolean {
		return duoDiSet(11)
	}
	
	constructor() {
		super(11)
	}
}


export interface IBaseCountyTownDuo
  extends IDuo<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown> {
}

export class BaseCountyTownDuo
  extends SQDIDuo<ICountyTown, CountyTownESelect, CountyTownECreateProperties, CountyTownEUpdateProperties, CountyTownEId, CountyTownECascadeGraph, QCountyTown>
	implements IBaseCountyTownDuo {

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseDesignPatternDuo
  extends IDuo<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern> {
}

export class BaseDesignPatternDuo
  extends SQDIDuo<IDesignPattern, DesignPatternESelect, DesignPatternECreateProperties, DesignPatternEUpdateProperties, DesignPatternEId, DesignPatternECascadeGraph, QDesignPattern>
	implements IBaseDesignPatternDuo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseDeviceDuo
  extends IDuo<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice> {
}

export class BaseDeviceDuo
  extends SQDIDuo<IDevice, DeviceESelect, DeviceECreateProperties, DeviceEUpdateProperties, DeviceEId, DeviceECascadeGraph, QDevice>
	implements IBaseDeviceDuo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseEmojiDuo
  extends IDuo<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji> {
}

export class BaseEmojiDuo
  extends SQDIDuo<IEmoji, EmojiESelect, EmojiECreateProperties, EmojiEUpdateProperties, EmojiEId, EmojiECascadeGraph, QEmoji>
	implements IBaseEmojiDuo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseFactorDuo
  extends IDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor> {
}

export class BaseFactorDuo
  extends SQDIDuo<IFactor, FactorESelect, FactorECreateProperties, FactorEUpdateProperties, FactorEId, FactorECascadeGraph, QFactor>
	implements IBaseFactorDuo {

	static diSet(): boolean {
		return duoDiSet(88)
	}
	
	constructor() {
		super(88)
	}
}


export interface IBaseFactorOpinionVersionDuo
  extends IDuo<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion> {
}

export class BaseFactorOpinionVersionDuo
  extends SQDIDuo<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion>
	implements IBaseFactorOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(76)
	}
	
	constructor() {
		super(76)
	}
}


export interface IBaseFactorOpinionVersionRatingDuo
  extends IDuo<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating> {
}

export class BaseFactorOpinionVersionRatingDuo
  extends SQDIDuo<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating>
	implements IBaseFactorOpinionVersionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(75)
	}
	
	constructor() {
		super(75)
	}
}


export interface IBaseFactorOpinionVersionRatingCountDuo
  extends IDuo<IFactorOpinionVersionRatingCount, FactorOpinionVersionRatingCountESelect, FactorOpinionVersionRatingCountECreateProperties, FactorOpinionVersionRatingCountEUpdateProperties, FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountECascadeGraph, QFactorOpinionVersionRatingCount> {
}

export class BaseFactorOpinionVersionRatingCountDuo
  extends SQDIDuo<IFactorOpinionVersionRatingCount, FactorOpinionVersionRatingCountESelect, FactorOpinionVersionRatingCountECreateProperties, FactorOpinionVersionRatingCountEUpdateProperties, FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountECascadeGraph, QFactorOpinionVersionRatingCount>
	implements IBaseFactorOpinionVersionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(68)
	}
	
	constructor() {
		super(68)
	}
}


export interface IBaseFactorOpinionVersionTranslationDuo
  extends IDuo<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation> {
}

export class BaseFactorOpinionVersionTranslationDuo
  extends SQDIDuo<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation>
	implements IBaseFactorOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(74)
	}
	
	constructor() {
		super(74)
	}
}


export interface IBaseFactorPositionDuo
  extends IDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition> {
}

export class BaseFactorPositionDuo
  extends SQDIDuo<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition>
	implements IBaseFactorPositionDuo {

	static diSet(): boolean {
		return duoDiSet(89)
	}
	
	constructor() {
		super(89)
	}
}


export interface IBaseFactorSkinVariationDuo
  extends IDuo<IFactorSkinVariation, FactorSkinVariationESelect, FactorSkinVariationECreateProperties, FactorSkinVariationEUpdateProperties, FactorSkinVariationEId, FactorSkinVariationECascadeGraph, QFactorSkinVariation> {
}

export class BaseFactorSkinVariationDuo
  extends SQDIDuo<IFactorSkinVariation, FactorSkinVariationESelect, FactorSkinVariationECreateProperties, FactorSkinVariationEUpdateProperties, FactorSkinVariationEId, FactorSkinVariationECascadeGraph, QFactorSkinVariation>
	implements IBaseFactorSkinVariationDuo {

	static diSet(): boolean {
		return duoDiSet(87)
	}
	
	constructor() {
		super(87)
	}
}


export interface IBaseFactorVariationDuo
  extends IDuo<IFactorVariation, FactorVariationESelect, FactorVariationECreateProperties, FactorVariationEUpdateProperties, FactorVariationEId, FactorVariationECascadeGraph, QFactorVariation> {
}

export class BaseFactorVariationDuo
  extends SQDIDuo<IFactorVariation, FactorVariationESelect, FactorVariationECreateProperties, FactorVariationEUpdateProperties, FactorVariationEId, FactorVariationECascadeGraph, QFactorVariation>
	implements IBaseFactorVariationDuo {

	static diSet(): boolean {
		return duoDiSet(44)
	}
	
	constructor() {
		super(44)
	}
}


export interface IBaseFactorVariationTranslationDuo
  extends IDuo<IFactorVariationTranslation, FactorVariationTranslationESelect, FactorVariationTranslationECreateProperties, FactorVariationTranslationEUpdateProperties, FactorVariationTranslationEId, FactorVariationTranslationECascadeGraph, QFactorVariationTranslation> {
}

export class BaseFactorVariationTranslationDuo
  extends SQDIDuo<IFactorVariationTranslation, FactorVariationTranslationESelect, FactorVariationTranslationECreateProperties, FactorVariationTranslationEUpdateProperties, FactorVariationTranslationEId, FactorVariationTranslationECascadeGraph, QFactorVariationTranslation>
	implements IBaseFactorVariationTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(45)
	}
	
	constructor() {
		super(45)
	}
}


export interface IBaseLabelDuo
  extends IDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateProperties, LabelEId, LabelECascadeGraph, QLabel> {
}

export class BaseLabelDuo
  extends SQDIDuo<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateProperties, LabelEId, LabelECascadeGraph, QLabel>
	implements IBaseLabelDuo {

	static diSet(): boolean {
		return duoDiSet(54)
	}
	
	constructor() {
		super(54)
	}
}


export interface IBaseLabelTranslationDuo
  extends IDuo<ILabelTranslation, LabelTranslationESelect, LabelTranslationECreateProperties, LabelTranslationEUpdateProperties, LabelTranslationEId, LabelTranslationECascadeGraph, QLabelTranslation> {
}

export class BaseLabelTranslationDuo
  extends SQDIDuo<ILabelTranslation, LabelTranslationESelect, LabelTranslationECreateProperties, LabelTranslationEUpdateProperties, LabelTranslationEId, LabelTranslationECascadeGraph, QLabelTranslation>
	implements IBaseLabelTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(97)
	}
	
	constructor() {
		super(97)
	}
}


export interface IBaseLabelTranslationRatingDuo
  extends IDuo<ILabelTranslationRating, LabelTranslationRatingESelect, LabelTranslationRatingECreateProperties, LabelTranslationRatingEUpdateProperties, LabelTranslationRatingEId, LabelTranslationRatingECascadeGraph, QLabelTranslationRating> {
}

export class BaseLabelTranslationRatingDuo
  extends SQDIDuo<ILabelTranslationRating, LabelTranslationRatingESelect, LabelTranslationRatingECreateProperties, LabelTranslationRatingEUpdateProperties, LabelTranslationRatingEId, LabelTranslationRatingECascadeGraph, QLabelTranslationRating>
	implements IBaseLabelTranslationRatingDuo {

	static diSet(): boolean {
		return duoDiSet(98)
	}
	
	constructor() {
		super(98)
	}
}


export interface IBaseLabelTranslationRatingCountDuo
  extends IDuo<ILabelTranslationRatingCount, LabelTranslationRatingCountESelect, LabelTranslationRatingCountECreateProperties, LabelTranslationRatingCountEUpdateProperties, LabelTranslationRatingCountEId, LabelTranslationRatingCountECascadeGraph, QLabelTranslationRatingCount> {
}

export class BaseLabelTranslationRatingCountDuo
  extends SQDIDuo<ILabelTranslationRatingCount, LabelTranslationRatingCountESelect, LabelTranslationRatingCountECreateProperties, LabelTranslationRatingCountEUpdateProperties, LabelTranslationRatingCountEId, LabelTranslationRatingCountECascadeGraph, QLabelTranslationRatingCount>
	implements IBaseLabelTranslationRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(96)
	}
	
	constructor() {
		super(96)
	}
}


export interface IBaseLanguageDuo
  extends IDuo<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage> {
}

export class BaseLanguageDuo
  extends SQDIDuo<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage>
	implements IBaseLanguageDuo {

	static diSet(): boolean {
		return duoDiSet(16)
	}
	
	constructor() {
		super(16)
	}
}


export interface IBasePollDuo
  extends IDuo<IPoll, PollESelect, PollECreateProperties, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll> {
}

export class BasePollDuo
  extends SQDIDuo<IPoll, PollESelect, PollECreateProperties, PollEUpdateProperties, PollEId, PollECascadeGraph, QPoll>
	implements IBasePollDuo {

	static diSet(): boolean {
		return duoDiSet(56)
	}
	
	constructor() {
		super(56)
	}
}


export interface IBasePollFactorPositionVariationDuo
  extends IDuo<IPollFactorPositionVariation, PollFactorPositionVariationESelect, PollFactorPositionVariationECreateProperties, PollFactorPositionVariationEUpdateProperties, PollFactorPositionVariationEId, PollFactorPositionVariationECascadeGraph, QPollFactorPositionVariation> {
}

export class BasePollFactorPositionVariationDuo
  extends SQDIDuo<IPollFactorPositionVariation, PollFactorPositionVariationESelect, PollFactorPositionVariationECreateProperties, PollFactorPositionVariationEUpdateProperties, PollFactorPositionVariationEId, PollFactorPositionVariationECascadeGraph, QPollFactorPositionVariation>
	implements IBasePollFactorPositionVariationDuo {

	static diSet(): boolean {
		return duoDiSet(62)
	}
	
	constructor() {
		super(62)
	}
}


export interface IBasePollFactorSkinVariationDuo
  extends IDuo<IPollFactorSkinVariation, PollFactorSkinVariationESelect, PollFactorSkinVariationECreateProperties, PollFactorSkinVariationEUpdateProperties, PollFactorSkinVariationEId, PollFactorSkinVariationECascadeGraph, QPollFactorSkinVariation> {
}

export class BasePollFactorSkinVariationDuo
  extends SQDIDuo<IPollFactorSkinVariation, PollFactorSkinVariationESelect, PollFactorSkinVariationECreateProperties, PollFactorSkinVariationEUpdateProperties, PollFactorSkinVariationEId, PollFactorSkinVariationECascadeGraph, QPollFactorSkinVariation>
	implements IBasePollFactorSkinVariationDuo {

	static diSet(): boolean {
		return duoDiSet(85)
	}
	
	constructor() {
		super(85)
	}
}


export interface IBasePollFactorVariationDuo
  extends IDuo<IPollFactorVariation, PollFactorVariationESelect, PollFactorVariationECreateProperties, PollFactorVariationEUpdateProperties, PollFactorVariationEId, PollFactorVariationECascadeGraph, QPollFactorVariation> {
}

export class BasePollFactorVariationDuo
  extends SQDIDuo<IPollFactorVariation, PollFactorVariationESelect, PollFactorVariationECreateProperties, PollFactorVariationEUpdateProperties, PollFactorVariationEId, PollFactorVariationECascadeGraph, QPollFactorVariation>
	implements IBasePollFactorVariationDuo {

	static diSet(): boolean {
		return duoDiSet(67)
	}
	
	constructor() {
		super(67)
	}
}


export interface IBasePollLTFContinentDuo
  extends IDuo<IPollLTFContinent, PollLTFContinentESelect, PollLTFContinentECreateProperties, PollLTFContinentEUpdateProperties, PollLTFContinentEId, PollLTFContinentECascadeGraph, QPollLTFContinent> {
}

export class BasePollLTFContinentDuo
  extends SQDIDuo<IPollLTFContinent, PollLTFContinentESelect, PollLTFContinentECreateProperties, PollLTFContinentEUpdateProperties, PollLTFContinentEId, PollLTFContinentECascadeGraph, QPollLTFContinent>
	implements IBasePollLTFContinentDuo {

	static diSet(): boolean {
		return duoDiSet(25)
	}
	
	constructor() {
		super(25)
	}
}


export interface IBasePollLTFCountryDuo
  extends IDuo<IPollLTFCountry, PollLTFCountryESelect, PollLTFCountryECreateProperties, PollLTFCountryEUpdateProperties, PollLTFCountryEId, PollLTFCountryECascadeGraph, QPollLTFCountry> {
}

export class BasePollLTFCountryDuo
  extends SQDIDuo<IPollLTFCountry, PollLTFCountryESelect, PollLTFCountryECreateProperties, PollLTFCountryEUpdateProperties, PollLTFCountryEId, PollLTFCountryECascadeGraph, QPollLTFCountry>
	implements IBasePollLTFCountryDuo {

	static diSet(): boolean {
		return duoDiSet(26)
	}
	
	constructor() {
		super(26)
	}
}


export interface IBasePollLTFCountyDuo
  extends IDuo<IPollLTFCounty, PollLTFCountyESelect, PollLTFCountyECreateProperties, PollLTFCountyEUpdateProperties, PollLTFCountyEId, PollLTFCountyECascadeGraph, QPollLTFCounty> {
}

export class BasePollLTFCountyDuo
  extends SQDIDuo<IPollLTFCounty, PollLTFCountyESelect, PollLTFCountyECreateProperties, PollLTFCountyEUpdateProperties, PollLTFCountyEId, PollLTFCountyECascadeGraph, QPollLTFCounty>
	implements IBasePollLTFCountyDuo {

	static diSet(): boolean {
		return duoDiSet(27)
	}
	
	constructor() {
		super(27)
	}
}


export interface IBasePollLTFOpinionCountDuo
  extends IDuo<IPollLTFOpinionCount, PollLTFOpinionCountESelect, PollLTFOpinionCountECreateProperties, PollLTFOpinionCountEUpdateProperties, PollLTFOpinionCountEId, PollLTFOpinionCountECascadeGraph, QPollLTFOpinionCount> {
}

export class BasePollLTFOpinionCountDuo
  extends SQDIDuo<IPollLTFOpinionCount, PollLTFOpinionCountESelect, PollLTFOpinionCountECreateProperties, PollLTFOpinionCountEUpdateProperties, PollLTFOpinionCountEId, PollLTFOpinionCountECascadeGraph, QPollLTFOpinionCount>
	implements IBasePollLTFOpinionCountDuo {

	static diSet(): boolean {
		return duoDiSet(92)
	}
	
	constructor() {
		super(92)
	}
}


export interface IBasePollLTFOpinionRatingCountDuo
  extends IDuo<IPollLTFOpinionRatingCount, PollLTFOpinionRatingCountESelect, PollLTFOpinionRatingCountECreateProperties, PollLTFOpinionRatingCountEUpdateProperties, PollLTFOpinionRatingCountEId, PollLTFOpinionRatingCountECascadeGraph, QPollLTFOpinionRatingCount> {
}

export class BasePollLTFOpinionRatingCountDuo
  extends SQDIDuo<IPollLTFOpinionRatingCount, PollLTFOpinionRatingCountESelect, PollLTFOpinionRatingCountECreateProperties, PollLTFOpinionRatingCountEUpdateProperties, PollLTFOpinionRatingCountEId, PollLTFOpinionRatingCountECascadeGraph, QPollLTFOpinionRatingCount>
	implements IBasePollLTFOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(93)
	}
	
	constructor() {
		super(93)
	}
}


export interface IBasePollLTFRatingCountDuo
  extends IDuo<IPollLTFRatingCount, PollLTFRatingCountESelect, PollLTFRatingCountECreateProperties, PollLTFRatingCountEUpdateProperties, PollLTFRatingCountEId, PollLTFRatingCountECascadeGraph, QPollLTFRatingCount> {
}

export class BasePollLTFRatingCountDuo
  extends SQDIDuo<IPollLTFRatingCount, PollLTFRatingCountESelect, PollLTFRatingCountECreateProperties, PollLTFRatingCountEUpdateProperties, PollLTFRatingCountEId, PollLTFRatingCountECascadeGraph, QPollLTFRatingCount>
	implements IBasePollLTFRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(94)
	}
	
	constructor() {
		super(94)
	}
}


export interface IBasePollLTFStateDuo
  extends IDuo<IPollLTFState, PollLTFStateESelect, PollLTFStateECreateProperties, PollLTFStateEUpdateProperties, PollLTFStateEId, PollLTFStateECascadeGraph, QPollLTFState> {
}

export class BasePollLTFStateDuo
  extends SQDIDuo<IPollLTFState, PollLTFStateESelect, PollLTFStateECreateProperties, PollLTFStateEUpdateProperties, PollLTFStateEId, PollLTFStateECascadeGraph, QPollLTFState>
	implements IBasePollLTFStateDuo {

	static diSet(): boolean {
		return duoDiSet(28)
	}
	
	constructor() {
		super(28)
	}
}


export interface IBasePollLTFTownDuo
  extends IDuo<IPollLTFTown, PollLTFTownESelect, PollLTFTownECreateProperties, PollLTFTownEUpdateProperties, PollLTFTownEId, PollLTFTownECascadeGraph, QPollLTFTown> {
}

export class BasePollLTFTownDuo
  extends SQDIDuo<IPollLTFTown, PollLTFTownESelect, PollLTFTownECreateProperties, PollLTFTownEUpdateProperties, PollLTFTownEId, PollLTFTownECascadeGraph, QPollLTFTown>
	implements IBasePollLTFTownDuo {

	static diSet(): boolean {
		return duoDiSet(29)
	}
	
	constructor() {
		super(29)
	}
}


export interface IBasePollLTFVoteCountDuo
  extends IDuo<IPollLTFVoteCount, PollLTFVoteCountESelect, PollLTFVoteCountECreateProperties, PollLTFVoteCountEUpdateProperties, PollLTFVoteCountEId, PollLTFVoteCountECascadeGraph, QPollLTFVoteCount> {
}

export class BasePollLTFVoteCountDuo
  extends SQDIDuo<IPollLTFVoteCount, PollLTFVoteCountESelect, PollLTFVoteCountECreateProperties, PollLTFVoteCountEUpdateProperties, PollLTFVoteCountEId, PollLTFVoteCountECascadeGraph, QPollLTFVoteCount>
	implements IBasePollLTFVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(95)
	}
	
	constructor() {
		super(95)
	}
}


export interface IBasePollLocationTimeFrameDuo
  extends IDuo<IPollLocationTimeFrame, PollLocationTimeFrameESelect, PollLocationTimeFrameECreateProperties, PollLocationTimeFrameEUpdateProperties, PollLocationTimeFrameEId, PollLocationTimeFrameECascadeGraph, QPollLocationTimeFrame> {
}

export class BasePollLocationTimeFrameDuo
  extends SQDIDuo<IPollLocationTimeFrame, PollLocationTimeFrameESelect, PollLocationTimeFrameECreateProperties, PollLocationTimeFrameEUpdateProperties, PollLocationTimeFrameEId, PollLocationTimeFrameECascadeGraph, QPollLocationTimeFrame>
	implements IBasePollLocationTimeFrameDuo {

	static diSet(): boolean {
		return duoDiSet(30)
	}
	
	constructor() {
		super(30)
	}
}


export interface IBasePollOpinionDuo
  extends IDuo<IPollOpinion, PollOpinionESelect, PollOpinionECreateProperties, PollOpinionEUpdateProperties, PollOpinionEId, PollOpinionECascadeGraph, QPollOpinion> {
}

export class BasePollOpinionDuo
  extends SQDIDuo<IPollOpinion, PollOpinionESelect, PollOpinionECreateProperties, PollOpinionEUpdateProperties, PollOpinionEId, PollOpinionECascadeGraph, QPollOpinion>
	implements IBasePollOpinionDuo {

	static diSet(): boolean {
		return duoDiSet(80)
	}
	
	constructor() {
		super(80)
	}
}


export interface IBasePollOpinionRatingCountDuo
  extends IDuo<IPollOpinionRatingCount, PollOpinionRatingCountESelect, PollOpinionRatingCountECreateProperties, PollOpinionRatingCountEUpdateProperties, PollOpinionRatingCountEId, PollOpinionRatingCountECascadeGraph, QPollOpinionRatingCount> {
}

export class BasePollOpinionRatingCountDuo
  extends SQDIDuo<IPollOpinionRatingCount, PollOpinionRatingCountESelect, PollOpinionRatingCountECreateProperties, PollOpinionRatingCountEUpdateProperties, PollOpinionRatingCountEId, PollOpinionRatingCountECascadeGraph, QPollOpinionRatingCount>
	implements IBasePollOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(57)
	}
	
	constructor() {
		super(57)
	}
}


export interface IBasePollOpinionVersionDuo
  extends IDuo<IPollOpinionVersion, PollOpinionVersionESelect, PollOpinionVersionECreateProperties, PollOpinionVersionEUpdateProperties, PollOpinionVersionEId, PollOpinionVersionECascadeGraph, QPollOpinionVersion> {
}

export class BasePollOpinionVersionDuo
  extends SQDIDuo<IPollOpinionVersion, PollOpinionVersionESelect, PollOpinionVersionECreateProperties, PollOpinionVersionEUpdateProperties, PollOpinionVersionEId, PollOpinionVersionECascadeGraph, QPollOpinionVersion>
	implements IBasePollOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(79)
	}
	
	constructor() {
		super(79)
	}
}


export interface IBasePollOpinionVersionRatingDuo
  extends IDuo<IPollOpinionVersionRating, PollOpinionVersionRatingESelect, PollOpinionVersionRatingECreateProperties, PollOpinionVersionRatingEUpdateProperties, PollOpinionVersionRatingEId, PollOpinionVersionRatingECascadeGraph, QPollOpinionVersionRating> {
}

export class BasePollOpinionVersionRatingDuo
  extends SQDIDuo<IPollOpinionVersionRating, PollOpinionVersionRatingESelect, PollOpinionVersionRatingECreateProperties, PollOpinionVersionRatingEUpdateProperties, PollOpinionVersionRatingEId, PollOpinionVersionRatingECascadeGraph, QPollOpinionVersionRating>
	implements IBasePollOpinionVersionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(78)
	}
	
	constructor() {
		super(78)
	}
}


export interface IBasePollOpinionVersionRatingCountDuo
  extends IDuo<IPollOpinionVersionRatingCount, PollOpinionVersionRatingCountESelect, PollOpinionVersionRatingCountECreateProperties, PollOpinionVersionRatingCountEUpdateProperties, PollOpinionVersionRatingCountEId, PollOpinionVersionRatingCountECascadeGraph, QPollOpinionVersionRatingCount> {
}

export class BasePollOpinionVersionRatingCountDuo
  extends SQDIDuo<IPollOpinionVersionRatingCount, PollOpinionVersionRatingCountESelect, PollOpinionVersionRatingCountECreateProperties, PollOpinionVersionRatingCountEUpdateProperties, PollOpinionVersionRatingCountEId, PollOpinionVersionRatingCountECascadeGraph, QPollOpinionVersionRatingCount>
	implements IBasePollOpinionVersionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(66)
	}
	
	constructor() {
		super(66)
	}
}


export interface IBasePollOpinionVersionTranslationDuo
  extends IDuo<IPollOpinionVersionTranslation, PollOpinionVersionTranslationESelect, PollOpinionVersionTranslationECreateProperties, PollOpinionVersionTranslationEUpdateProperties, PollOpinionVersionTranslationEId, PollOpinionVersionTranslationECascadeGraph, QPollOpinionVersionTranslation> {
}

export class BasePollOpinionVersionTranslationDuo
  extends SQDIDuo<IPollOpinionVersionTranslation, PollOpinionVersionTranslationESelect, PollOpinionVersionTranslationECreateProperties, PollOpinionVersionTranslationEUpdateProperties, PollOpinionVersionTranslationEId, PollOpinionVersionTranslationECascadeGraph, QPollOpinionVersionTranslation>
	implements IBasePollOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(77)
	}
	
	constructor() {
		super(77)
	}
}


export interface IBasePollOpinionsCountDuo
  extends IDuo<IPollOpinionsCount, PollOpinionsCountESelect, PollOpinionsCountECreateProperties, PollOpinionsCountEUpdateProperties, PollOpinionsCountEId, PollOpinionsCountECascadeGraph, QPollOpinionsCount> {
}

export class BasePollOpinionsCountDuo
  extends SQDIDuo<IPollOpinionsCount, PollOpinionsCountESelect, PollOpinionsCountECreateProperties, PollOpinionsCountEUpdateProperties, PollOpinionsCountEId, PollOpinionsCountECascadeGraph, QPollOpinionsCount>
	implements IBasePollOpinionsCountDuo {

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBasePollOpinionsRatingCountDuo
  extends IDuo<IPollOpinionsRatingCount, PollOpinionsRatingCountESelect, PollOpinionsRatingCountECreateProperties, PollOpinionsRatingCountEUpdateProperties, PollOpinionsRatingCountEId, PollOpinionsRatingCountECascadeGraph, QPollOpinionsRatingCount> {
}

export class BasePollOpinionsRatingCountDuo
  extends SQDIDuo<IPollOpinionsRatingCount, PollOpinionsRatingCountESelect, PollOpinionsRatingCountECreateProperties, PollOpinionsRatingCountEUpdateProperties, PollOpinionsRatingCountEId, PollOpinionsRatingCountECascadeGraph, QPollOpinionsRatingCount>
	implements IBasePollOpinionsRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(20)
	}
	
	constructor() {
		super(20)
	}
}


export interface IBasePollPositionVariationDuo
  extends IDuo<IPollPositionVariation, PollPositionVariationESelect, PollPositionVariationECreateProperties, PollPositionVariationEUpdateProperties, PollPositionVariationEId, PollPositionVariationECascadeGraph, QPollPositionVariation> {
}

export class BasePollPositionVariationDuo
  extends SQDIDuo<IPollPositionVariation, PollPositionVariationESelect, PollPositionVariationECreateProperties, PollPositionVariationEUpdateProperties, PollPositionVariationEId, PollPositionVariationECascadeGraph, QPollPositionVariation>
	implements IBasePollPositionVariationDuo {

	static diSet(): boolean {
		return duoDiSet(69)
	}
	
	constructor() {
		super(69)
	}
}


export interface IBasePollRatingCountDuo
  extends IDuo<IPollRatingCount, PollRatingCountESelect, PollRatingCountECreateProperties, PollRatingCountEUpdateProperties, PollRatingCountEId, PollRatingCountECascadeGraph, QPollRatingCount> {
}

export class BasePollRatingCountDuo
  extends SQDIDuo<IPollRatingCount, PollRatingCountESelect, PollRatingCountECreateProperties, PollRatingCountEUpdateProperties, PollRatingCountEId, PollRatingCountECascadeGraph, QPollRatingCount>
	implements IBasePollRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(21)
	}
	
	constructor() {
		super(21)
	}
}


export interface IBasePollTypeDuo
  extends IDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType> {
}

export class BasePollTypeDuo
  extends SQDIDuo<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType>
	implements IBasePollTypeDuo {

	static diSet(): boolean {
		return duoDiSet(31)
	}
	
	constructor() {
		super(31)
	}
}


export interface IBasePollVariationDuo
  extends IDuo<IPollVariation, PollVariationESelect, PollVariationECreateProperties, PollVariationEUpdateProperties, PollVariationEId, PollVariationECascadeGraph, QPollVariation> {
}

export class BasePollVariationDuo
  extends SQDIDuo<IPollVariation, PollVariationESelect, PollVariationECreateProperties, PollVariationEUpdateProperties, PollVariationEId, PollVariationECascadeGraph, QPollVariation>
	implements IBasePollVariationDuo {

	static diSet(): boolean {
		return duoDiSet(86)
	}
	
	constructor() {
		super(86)
	}
}


export interface IBasePollVariationFactorTranslationDuo
  extends IDuo<IPollVariationFactorTranslation, PollVariationFactorTranslationESelect, PollVariationFactorTranslationECreateProperties, PollVariationFactorTranslationEUpdateProperties, PollVariationFactorTranslationEId, PollVariationFactorTranslationECascadeGraph, QPollVariationFactorTranslation> {
}

export class BasePollVariationFactorTranslationDuo
  extends SQDIDuo<IPollVariationFactorTranslation, PollVariationFactorTranslationESelect, PollVariationFactorTranslationECreateProperties, PollVariationFactorTranslationEUpdateProperties, PollVariationFactorTranslationEId, PollVariationFactorTranslationECascadeGraph, QPollVariationFactorTranslation>
	implements IBasePollVariationFactorTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(46)
	}
	
	constructor() {
		super(46)
	}
}


export interface IBasePollVariationLabelDuo
  extends IDuo<IPollVariationLabel, PollVariationLabelESelect, PollVariationLabelECreateProperties, PollVariationLabelEUpdateProperties, PollVariationLabelEId, PollVariationLabelECascadeGraph, QPollVariationLabel> {
}

export class BasePollVariationLabelDuo
  extends SQDIDuo<IPollVariationLabel, PollVariationLabelESelect, PollVariationLabelECreateProperties, PollVariationLabelEUpdateProperties, PollVariationLabelEId, PollVariationLabelECascadeGraph, QPollVariationLabel>
	implements IBasePollVariationLabelDuo {

	static diSet(): boolean {
		return duoDiSet(55)
	}
	
	constructor() {
		super(55)
	}
}


export interface IBasePollVariationOpinionCountDuo
  extends IDuo<IPollVariationOpinionCount, PollVariationOpinionCountESelect, PollVariationOpinionCountECreateProperties, PollVariationOpinionCountEUpdateProperties, PollVariationOpinionCountEId, PollVariationOpinionCountECascadeGraph, QPollVariationOpinionCount> {
}

export class BasePollVariationOpinionCountDuo
  extends SQDIDuo<IPollVariationOpinionCount, PollVariationOpinionCountESelect, PollVariationOpinionCountECreateProperties, PollVariationOpinionCountEUpdateProperties, PollVariationOpinionCountEId, PollVariationOpinionCountECascadeGraph, QPollVariationOpinionCount>
	implements IBasePollVariationOpinionCountDuo {

	static diSet(): boolean {
		return duoDiSet(81)
	}
	
	constructor() {
		super(81)
	}
}


export interface IBasePollVariationOpinionRatingCountDuo
  extends IDuo<IPollVariationOpinionRatingCount, PollVariationOpinionRatingCountESelect, PollVariationOpinionRatingCountECreateProperties, PollVariationOpinionRatingCountEUpdateProperties, PollVariationOpinionRatingCountEId, PollVariationOpinionRatingCountECascadeGraph, QPollVariationOpinionRatingCount> {
}

export class BasePollVariationOpinionRatingCountDuo
  extends SQDIDuo<IPollVariationOpinionRatingCount, PollVariationOpinionRatingCountESelect, PollVariationOpinionRatingCountECreateProperties, PollVariationOpinionRatingCountEUpdateProperties, PollVariationOpinionRatingCountEId, PollVariationOpinionRatingCountECascadeGraph, QPollVariationOpinionRatingCount>
	implements IBasePollVariationOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(82)
	}
	
	constructor() {
		super(82)
	}
}


export interface IBasePollVariationPositionTranslationDuo
  extends IDuo<IPollVariationPositionTranslation, PollVariationPositionTranslationESelect, PollVariationPositionTranslationECreateProperties, PollVariationPositionTranslationEUpdateProperties, PollVariationPositionTranslationEId, PollVariationPositionTranslationECascadeGraph, QPollVariationPositionTranslation> {
}

export class BasePollVariationPositionTranslationDuo
  extends SQDIDuo<IPollVariationPositionTranslation, PollVariationPositionTranslationESelect, PollVariationPositionTranslationECreateProperties, PollVariationPositionTranslationEUpdateProperties, PollVariationPositionTranslationEId, PollVariationPositionTranslationECascadeGraph, QPollVariationPositionTranslation>
	implements IBasePollVariationPositionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(50)
	}
	
	constructor() {
		super(50)
	}
}


export interface IBasePollVariationRatingCountDuo
  extends IDuo<IPollVariationRatingCount, PollVariationRatingCountESelect, PollVariationRatingCountECreateProperties, PollVariationRatingCountEUpdateProperties, PollVariationRatingCountEId, PollVariationRatingCountECascadeGraph, QPollVariationRatingCount> {
}

export class BasePollVariationRatingCountDuo
  extends SQDIDuo<IPollVariationRatingCount, PollVariationRatingCountESelect, PollVariationRatingCountECreateProperties, PollVariationRatingCountEUpdateProperties, PollVariationRatingCountEId, PollVariationRatingCountECascadeGraph, QPollVariationRatingCount>
	implements IBasePollVariationRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(83)
	}
	
	constructor() {
		super(83)
	}
}


export interface IBasePollVariationTranslationDuo
  extends IDuo<IPollVariationTranslation, PollVariationTranslationESelect, PollVariationTranslationECreateProperties, PollVariationTranslationEUpdateProperties, PollVariationTranslationEId, PollVariationTranslationECascadeGraph, QPollVariationTranslation> {
}

export class BasePollVariationTranslationDuo
  extends SQDIDuo<IPollVariationTranslation, PollVariationTranslationESelect, PollVariationTranslationECreateProperties, PollVariationTranslationEUpdateProperties, PollVariationTranslationEId, PollVariationTranslationECascadeGraph, QPollVariationTranslation>
	implements IBasePollVariationTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(51)
	}
	
	constructor() {
		super(51)
	}
}


export interface IBasePollVariationTranslationOpinionCountDuo
  extends IDuo<IPollVariationTranslationOpinionCount, PollVariationTranslationOpinionCountESelect, PollVariationTranslationOpinionCountECreateProperties, PollVariationTranslationOpinionCountEUpdateProperties, PollVariationTranslationOpinionCountEId, PollVariationTranslationOpinionCountECascadeGraph, QPollVariationTranslationOpinionCount> {
}

export class BasePollVariationTranslationOpinionCountDuo
  extends SQDIDuo<IPollVariationTranslationOpinionCount, PollVariationTranslationOpinionCountESelect, PollVariationTranslationOpinionCountECreateProperties, PollVariationTranslationOpinionCountEUpdateProperties, PollVariationTranslationOpinionCountEId, PollVariationTranslationOpinionCountECascadeGraph, QPollVariationTranslationOpinionCount>
	implements IBasePollVariationTranslationOpinionCountDuo {

	static diSet(): boolean {
		return duoDiSet(40)
	}
	
	constructor() {
		super(40)
	}
}


export interface IBasePollVariationTranslationOpinionRatingCountDuo
  extends IDuo<IPollVariationTranslationOpinionRatingCount, PollVariationTranslationOpinionRatingCountESelect, PollVariationTranslationOpinionRatingCountECreateProperties, PollVariationTranslationOpinionRatingCountEUpdateProperties, PollVariationTranslationOpinionRatingCountEId, PollVariationTranslationOpinionRatingCountECascadeGraph, QPollVariationTranslationOpinionRatingCount> {
}

export class BasePollVariationTranslationOpinionRatingCountDuo
  extends SQDIDuo<IPollVariationTranslationOpinionRatingCount, PollVariationTranslationOpinionRatingCountESelect, PollVariationTranslationOpinionRatingCountECreateProperties, PollVariationTranslationOpinionRatingCountEUpdateProperties, PollVariationTranslationOpinionRatingCountEId, PollVariationTranslationOpinionRatingCountECascadeGraph, QPollVariationTranslationOpinionRatingCount>
	implements IBasePollVariationTranslationOpinionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(41)
	}
	
	constructor() {
		super(41)
	}
}


export interface IBasePollVariationTranslationRatingCountDuo
  extends IDuo<IPollVariationTranslationRatingCount, PollVariationTranslationRatingCountESelect, PollVariationTranslationRatingCountECreateProperties, PollVariationTranslationRatingCountEUpdateProperties, PollVariationTranslationRatingCountEId, PollVariationTranslationRatingCountECascadeGraph, QPollVariationTranslationRatingCount> {
}

export class BasePollVariationTranslationRatingCountDuo
  extends SQDIDuo<IPollVariationTranslationRatingCount, PollVariationTranslationRatingCountESelect, PollVariationTranslationRatingCountECreateProperties, PollVariationTranslationRatingCountEUpdateProperties, PollVariationTranslationRatingCountEId, PollVariationTranslationRatingCountECascadeGraph, QPollVariationTranslationRatingCount>
	implements IBasePollVariationTranslationRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(42)
	}
	
	constructor() {
		super(42)
	}
}


export interface IBasePollVariationTranslationVoteCountDuo
  extends IDuo<IPollVariationTranslationVoteCount, PollVariationTranslationVoteCountESelect, PollVariationTranslationVoteCountECreateProperties, PollVariationTranslationVoteCountEUpdateProperties, PollVariationTranslationVoteCountEId, PollVariationTranslationVoteCountECascadeGraph, QPollVariationTranslationVoteCount> {
}

export class BasePollVariationTranslationVoteCountDuo
  extends SQDIDuo<IPollVariationTranslationVoteCount, PollVariationTranslationVoteCountESelect, PollVariationTranslationVoteCountECreateProperties, PollVariationTranslationVoteCountEUpdateProperties, PollVariationTranslationVoteCountEId, PollVariationTranslationVoteCountECascadeGraph, QPollVariationTranslationVoteCount>
	implements IBasePollVariationTranslationVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(43)
	}
	
	constructor() {
		super(43)
	}
}


export interface IBasePollVariationVoteCountDuo
  extends IDuo<IPollVariationVoteCount, PollVariationVoteCountESelect, PollVariationVoteCountECreateProperties, PollVariationVoteCountEUpdateProperties, PollVariationVoteCountEId, PollVariationVoteCountECascadeGraph, QPollVariationVoteCount> {
}

export class BasePollVariationVoteCountDuo
  extends SQDIDuo<IPollVariationVoteCount, PollVariationVoteCountESelect, PollVariationVoteCountECreateProperties, PollVariationVoteCountEUpdateProperties, PollVariationVoteCountEId, PollVariationVoteCountECascadeGraph, QPollVariationVoteCount>
	implements IBasePollVariationVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(84)
	}
	
	constructor() {
		super(84)
	}
}


export interface IBasePollVoteCountDuo
  extends IDuo<IPollVoteCount, PollVoteCountESelect, PollVoteCountECreateProperties, PollVoteCountEUpdateProperties, PollVoteCountEId, PollVoteCountECascadeGraph, QPollVoteCount> {
}

export class BasePollVoteCountDuo
  extends SQDIDuo<IPollVoteCount, PollVoteCountESelect, PollVoteCountECreateProperties, PollVoteCountEUpdateProperties, PollVoteCountEId, PollVoteCountECascadeGraph, QPollVoteCount>
	implements IBasePollVoteCountDuo {

	static diSet(): boolean {
		return duoDiSet(22)
	}
	
	constructor() {
		super(22)
	}
}


export interface IBasePositionDuo
  extends IDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition> {
}

export class BasePositionDuo
  extends SQDIDuo<IPosition, PositionESelect, PositionECreateProperties, PositionEUpdateProperties, PositionEId, PositionECascadeGraph, QPosition>
	implements IBasePositionDuo {

	static diSet(): boolean {
		return duoDiSet(47)
	}
	
	constructor() {
		super(47)
	}
}


export interface IBasePositionOpinionVersionDuo
  extends IDuo<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion> {
}

export class BasePositionOpinionVersionDuo
  extends SQDIDuo<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion>
	implements IBasePositionOpinionVersionDuo {

	static diSet(): boolean {
		return duoDiSet(73)
	}
	
	constructor() {
		super(73)
	}
}


export interface IBasePositionOpinionVersionRatingDuo
  extends IDuo<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating> {
}

export class BasePositionOpinionVersionRatingDuo
  extends SQDIDuo<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating>
	implements IBasePositionOpinionVersionRatingDuo {

	static diSet(): boolean {
		return duoDiSet(72)
	}
	
	constructor() {
		super(72)
	}
}


export interface IBasePositionOpinionVersionRatingCountDuo
  extends IDuo<IPositionOpinionVersionRatingCount, PositionOpinionVersionRatingCountESelect, PositionOpinionVersionRatingCountECreateProperties, PositionOpinionVersionRatingCountEUpdateProperties, PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountECascadeGraph, QPositionOpinionVersionRatingCount> {
}

export class BasePositionOpinionVersionRatingCountDuo
  extends SQDIDuo<IPositionOpinionVersionRatingCount, PositionOpinionVersionRatingCountESelect, PositionOpinionVersionRatingCountECreateProperties, PositionOpinionVersionRatingCountEUpdateProperties, PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountECascadeGraph, QPositionOpinionVersionRatingCount>
	implements IBasePositionOpinionVersionRatingCountDuo {

	static diSet(): boolean {
		return duoDiSet(70)
	}
	
	constructor() {
		super(70)
	}
}


export interface IBasePositionOpinionVersionTranslationDuo
  extends IDuo<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation> {
}

export class BasePositionOpinionVersionTranslationDuo
  extends SQDIDuo<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation>
	implements IBasePositionOpinionVersionTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(71)
	}
	
	constructor() {
		super(71)
	}
}


export interface IBasePositionVariationDuo
  extends IDuo<IPositionVariation, PositionVariationESelect, PositionVariationECreateProperties, PositionVariationEUpdateProperties, PositionVariationEId, PositionVariationECascadeGraph, QPositionVariation> {
}

export class BasePositionVariationDuo
  extends SQDIDuo<IPositionVariation, PositionVariationESelect, PositionVariationECreateProperties, PositionVariationEUpdateProperties, PositionVariationEId, PositionVariationECascadeGraph, QPositionVariation>
	implements IBasePositionVariationDuo {

	static diSet(): boolean {
		return duoDiSet(48)
	}
	
	constructor() {
		super(48)
	}
}


export interface IBasePositionVariationTranslationDuo
  extends IDuo<IPositionVariationTranslation, PositionVariationTranslationESelect, PositionVariationTranslationECreateProperties, PositionVariationTranslationEUpdateProperties, PositionVariationTranslationEId, PositionVariationTranslationECascadeGraph, QPositionVariationTranslation> {
}

export class BasePositionVariationTranslationDuo
  extends SQDIDuo<IPositionVariationTranslation, PositionVariationTranslationESelect, PositionVariationTranslationECreateProperties, PositionVariationTranslationEUpdateProperties, PositionVariationTranslationEId, PositionVariationTranslationECascadeGraph, QPositionVariationTranslation>
	implements IBasePositionVariationTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(49)
	}
	
	constructor() {
		super(49)
	}
}


export interface IBaseRatingDuo
  extends IDuo<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating> {
}

export class BaseRatingDuo
  extends SQDIDuo<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating>
	implements IBaseRatingDuo {

	static diSet(): boolean {
		return duoDiSet(19)
	}
	
	constructor() {
		super(19)
	}
}


export interface IBaseRatingReasonDuo
  extends IDuo<IRatingReason, RatingReasonESelect, RatingReasonECreateProperties, RatingReasonEUpdateProperties, RatingReasonEId, RatingReasonECascadeGraph, QRatingReason> {
}

export class BaseRatingReasonDuo
  extends SQDIDuo<IRatingReason, RatingReasonESelect, RatingReasonECreateProperties, RatingReasonEUpdateProperties, RatingReasonEId, RatingReasonECascadeGraph, QRatingReason>
	implements IBaseRatingReasonDuo {

	static diSet(): boolean {
		return duoDiSet(91)
	}
	
	constructor() {
		super(91)
	}
}


export interface IBaseRatingReasonTranslationDuo
  extends IDuo<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation> {
}

export class BaseRatingReasonTranslationDuo
  extends SQDIDuo<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation>
	implements IBaseRatingReasonTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(90)
	}
	
	constructor() {
		super(90)
	}
}


export interface IBaseRatingSettingDuo
  extends IDuo<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting> {
}

export class BaseRatingSettingDuo
  extends SQDIDuo<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting>
	implements IBaseRatingSettingDuo {

	static diSet(): boolean {
		return duoDiSet(15)
	}
	
	constructor() {
		super(15)
	}
}


export interface IBaseRatingTranslationDuo
  extends IDuo<IRatingTranslation, RatingTranslationESelect, RatingTranslationECreateProperties, RatingTranslationEUpdateProperties, RatingTranslationEId, RatingTranslationECascadeGraph, QRatingTranslation> {
}

export class BaseRatingTranslationDuo
  extends SQDIDuo<IRatingTranslation, RatingTranslationESelect, RatingTranslationECreateProperties, RatingTranslationEUpdateProperties, RatingTranslationEId, RatingTranslationECascadeGraph, QRatingTranslation>
	implements IBaseRatingTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(17)
	}
	
	constructor() {
		super(17)
	}
}


export interface IBaseRatingTypeDuo
  extends IDuo<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType> {
}

export class BaseRatingTypeDuo
  extends SQDIDuo<IRatingType, RatingTypeESelect, RatingTypeECreateProperties, RatingTypeEUpdateProperties, RatingTypeEId, RatingTypeECascadeGraph, QRatingType>
	implements IBaseRatingTypeDuo {

	static diSet(): boolean {
		return duoDiSet(18)
	}
	
	constructor() {
		super(18)
	}
}


export interface IBaseStateDuo
  extends IDuo<IState, StateESelect, StateECreateProperties, StateEUpdateProperties, StateEId, StateECascadeGraph, QState> {
}

export class BaseStateDuo
  extends SQDIDuo<IState, StateESelect, StateECreateProperties, StateEUpdateProperties, StateEId, StateECascadeGraph, QState>
	implements IBaseStateDuo {

	static diSet(): boolean {
		return duoDiSet(10)
	}
	
	constructor() {
		super(10)
	}
}


export interface IBaseStateTownDuo
  extends IDuo<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown> {
}

export class BaseStateTownDuo
  extends SQDIDuo<IStateTown, StateTownESelect, StateTownECreateProperties, StateTownEUpdateProperties, StateTownEId, StateTownECascadeGraph, QStateTown>
	implements IBaseStateTownDuo {

	static diSet(): boolean {
		return duoDiSet(9)
	}
	
	constructor() {
		super(9)
	}
}


export interface IBaseThemeDuo
  extends IDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme> {
}

export class BaseThemeDuo
  extends SQDIDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateProperties, ThemeEId, ThemeECascadeGraph, QTheme>
	implements IBaseThemeDuo {

	static diSet(): boolean {
		return duoDiSet(32)
	}
	
	constructor() {
		super(32)
	}
}


export interface IBaseTownDuo
  extends IDuo<ITown, TownESelect, TownECreateProperties, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown> {
}

export class BaseTownDuo
  extends SQDIDuo<ITown, TownESelect, TownECreateProperties, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown>
	implements IBaseTownDuo {

	static diSet(): boolean {
		return duoDiSet(12)
	}
	
	constructor() {
		super(12)
	}
}


export interface IBaseTranslationTypeDuo
  extends IDuo<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType> {
}

export class BaseTranslationTypeDuo
  extends SQDIDuo<ITranslationType, TranslationTypeESelect, TranslationTypeECreateProperties, TranslationTypeEUpdateProperties, TranslationTypeEId, TranslationTypeECascadeGraph, QTranslationType>
	implements IBaseTranslationTypeDuo {

	static diSet(): boolean {
		return duoDiSet(33)
	}
	
	constructor() {
		super(33)
	}
}


export interface IBaseUserAccountDuo
  extends IDuo<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount> {
}

export class BaseUserAccountDuo
  extends SQDIDuo<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount>
	implements IBaseUserAccountDuo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseUserPollDuo
  extends IDuo<IUserPoll, UserPollESelect, UserPollECreateProperties, UserPollEUpdateProperties, UserPollEId, UserPollECascadeGraph, QUserPoll> {
}

export class BaseUserPollDuo
  extends SQDIDuo<IUserPoll, UserPollESelect, UserPollECreateProperties, UserPollEUpdateProperties, UserPollEId, UserPollECascadeGraph, QUserPoll>
	implements IBaseUserPollDuo {

	static diSet(): boolean {
		return duoDiSet(35)
	}
	
	constructor() {
		super(35)
	}
}


export interface IBaseUserPollRatingDuo
  extends IDuo<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating> {
}

export class BaseUserPollRatingDuo
  extends SQDIDuo<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating>
	implements IBaseUserPollRatingDuo {

	static diSet(): boolean {
		return duoDiSet(34)
	}
	
	constructor() {
		super(34)
	}
}


export interface IBaseUserPollVariationDuo
  extends IDuo<IUserPollVariation, UserPollVariationESelect, UserPollVariationECreateProperties, UserPollVariationEUpdateProperties, UserPollVariationEId, UserPollVariationECascadeGraph, QUserPollVariation> {
}

export class BaseUserPollVariationDuo
  extends SQDIDuo<IUserPollVariation, UserPollVariationESelect, UserPollVariationECreateProperties, UserPollVariationEUpdateProperties, UserPollVariationEId, UserPollVariationECascadeGraph, QUserPollVariation>
	implements IBaseUserPollVariationDuo {

	static diSet(): boolean {
		return duoDiSet(37)
	}
	
	constructor() {
		super(37)
	}
}


export interface IBaseUserPollVariationRatingDuo
  extends IDuo<IUserPollVariationRating, UserPollVariationRatingESelect, UserPollVariationRatingECreateProperties, UserPollVariationRatingEUpdateProperties, UserPollVariationRatingEId, UserPollVariationRatingECascadeGraph, QUserPollVariationRating> {
}

export class BaseUserPollVariationRatingDuo
  extends SQDIDuo<IUserPollVariationRating, UserPollVariationRatingESelect, UserPollVariationRatingECreateProperties, UserPollVariationRatingEUpdateProperties, UserPollVariationRatingEId, UserPollVariationRatingECascadeGraph, QUserPollVariationRating>
	implements IBaseUserPollVariationRatingDuo {

	static diSet(): boolean {
		return duoDiSet(36)
	}
	
	constructor() {
		super(36)
	}
}


export interface IBaseUserPollVariationTranslationDuo
  extends IDuo<IUserPollVariationTranslation, UserPollVariationTranslationESelect, UserPollVariationTranslationECreateProperties, UserPollVariationTranslationEUpdateProperties, UserPollVariationTranslationEId, UserPollVariationTranslationECascadeGraph, QUserPollVariationTranslation> {
}

export class BaseUserPollVariationTranslationDuo
  extends SQDIDuo<IUserPollVariationTranslation, UserPollVariationTranslationESelect, UserPollVariationTranslationECreateProperties, UserPollVariationTranslationEUpdateProperties, UserPollVariationTranslationEId, UserPollVariationTranslationECascadeGraph, QUserPollVariationTranslation>
	implements IBaseUserPollVariationTranslationDuo {

	static diSet(): boolean {
		return duoDiSet(38)
	}
	
	constructor() {
		super(38)
	}
}


export interface IBaseUserPollVariationTranslationRatingDuo
  extends IDuo<IUserPollVariationTranslationRating, UserPollVariationTranslationRatingESelect, UserPollVariationTranslationRatingECreateProperties, UserPollVariationTranslationRatingEUpdateProperties, UserPollVariationTranslationRatingEId, UserPollVariationTranslationRatingECascadeGraph, QUserPollVariationTranslationRating> {
}

export class BaseUserPollVariationTranslationRatingDuo
  extends SQDIDuo<IUserPollVariationTranslationRating, UserPollVariationTranslationRatingESelect, UserPollVariationTranslationRatingECreateProperties, UserPollVariationTranslationRatingEUpdateProperties, UserPollVariationTranslationRatingEId, UserPollVariationTranslationRatingECascadeGraph, QUserPollVariationTranslationRating>
	implements IBaseUserPollVariationTranslationRatingDuo {

	static diSet(): boolean {
		return duoDiSet(39)
	}
	
	constructor() {
		super(39)
	}
}


export interface IBaseVoteDuo
  extends IDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote> {
}

export class BaseVoteDuo
  extends SQDIDuo<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote>
	implements IBaseVoteDuo {

	static diSet(): boolean {
		return duoDiSet(61)
	}
	
	constructor() {
		super(61)
	}
}


export interface IBaseVoteFactorDuo
  extends IDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor> {
}

export class BaseVoteFactorDuo
  extends SQDIDuo<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor>
	implements IBaseVoteFactorDuo {

	static diSet(): boolean {
		return duoDiSet(64)
	}
	
	constructor() {
		super(64)
	}
}


export interface IBaseVoteFactorTypeDuo
  extends IDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType> {
}

export class BaseVoteFactorTypeDuo
  extends SQDIDuo<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType>
	implements IBaseVoteFactorTypeDuo {

	static diSet(): boolean {
		return duoDiSet(63)
	}
	
	constructor() {
		super(63)
	}
}


export interface IBaseVoteTypeDuo
  extends IDuo<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType> {
}

export class BaseVoteTypeDuo
  extends SQDIDuo<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType>
	implements IBaseVoteTypeDuo {

	static diSet(): boolean {
		return duoDiSet(60)
	}
	
	constructor() {
		super(60)
	}
}


export interface IBaseVoteVariationDuo
  extends IDuo<IVoteVariation, VoteVariationESelect, VoteVariationECreateProperties, VoteVariationEUpdateProperties, VoteVariationEId, VoteVariationECascadeGraph, QVoteVariation> {
}

export class BaseVoteVariationDuo
  extends SQDIDuo<IVoteVariation, VoteVariationESelect, VoteVariationECreateProperties, VoteVariationEUpdateProperties, VoteVariationEId, VoteVariationECascadeGraph, QVoteVariation>
	implements IBaseVoteVariationDuo {

	static diSet(): boolean {
		return duoDiSet(65)
	}
	
	constructor() {
		super(65)
	}
}
