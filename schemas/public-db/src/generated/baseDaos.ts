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
import {
	Dao
} from '@airport/check-in'
import {
	EntityId as DbEntityId
} from '@airport/ground-control'
import {
	Q,
	diSet
} from './qSchema'
import {
	IActor,
	ActorESelect,
	ActorECascadeGraph,
	ActorECreateColumns,
	ActorECreateProperties,
	ActorEUpdateColumns,
	ActorEUpdateProperties,
	ActorEId,
	QActor
} from './user/qactor'
import {
	IApplication,
	ApplicationESelect,
	ApplicationECascadeGraph,
	ApplicationECreateColumns,
	ApplicationECreateProperties,
	ApplicationEUpdateColumns,
	ApplicationEUpdateProperties,
	ApplicationEId,
	QApplication
} from './user/qapplication'
import {
	IChosenPollTranslation,
	ChosenPollTranslationESelect,
	ChosenPollTranslationECascadeGraph,
	ChosenPollTranslationECreateColumns,
	ChosenPollTranslationECreateProperties,
	ChosenPollTranslationEUpdateColumns,
	ChosenPollTranslationEUpdateProperties,
	ChosenPollTranslationEId,
	QChosenPollTranslation
} from './poll/translation/qchosenpolltranslation'
import {
	IChosenPollTranslationType,
	ChosenPollTranslationTypeESelect,
	ChosenPollTranslationTypeECascadeGraph,
	ChosenPollTranslationTypeECreateColumns,
	ChosenPollTranslationTypeECreateProperties,
	ChosenPollTranslationTypeEUpdateColumns,
	ChosenPollTranslationTypeEUpdateProperties,
	ChosenPollTranslationTypeEId,
	QChosenPollTranslationType
} from './poll/translation/qchosenpolltranslationtype'
import {
	IChosenPollVariation,
	ChosenPollVariationESelect,
	ChosenPollVariationECascadeGraph,
	ChosenPollVariationECreateColumns,
	ChosenPollVariationECreateProperties,
	ChosenPollVariationEUpdateColumns,
	ChosenPollVariationEUpdateProperties,
	ChosenPollVariationEId,
	QChosenPollVariation
} from './poll/variation/qchosenpollvariation'
import {
	IChosenPollVariationType,
	ChosenPollVariationTypeESelect,
	ChosenPollVariationTypeECascadeGraph,
	ChosenPollVariationTypeECreateColumns,
	ChosenPollVariationTypeECreateProperties,
	ChosenPollVariationTypeEUpdateColumns,
	ChosenPollVariationTypeEUpdateProperties,
	ChosenPollVariationTypeEId,
	QChosenPollVariationType
} from './poll/variation/qchosenpollvariationtype'
import {
	IChosenVoteVariation,
	ChosenVoteVariationESelect,
	ChosenVoteVariationECascadeGraph,
	ChosenVoteVariationECreateColumns,
	ChosenVoteVariationECreateProperties,
	ChosenVoteVariationEUpdateColumns,
	ChosenVoteVariationEUpdateProperties,
	ChosenVoteVariationEId,
	QChosenVoteVariation
} from './vote/qchosenvotevariation'
import {
	IChosenVoteVariationType,
	ChosenVoteVariationTypeESelect,
	ChosenVoteVariationTypeECascadeGraph,
	ChosenVoteVariationTypeECreateColumns,
	ChosenVoteVariationTypeECreateProperties,
	ChosenVoteVariationTypeEUpdateColumns,
	ChosenVoteVariationTypeEUpdateProperties,
	ChosenVoteVariationTypeEId,
	QChosenVoteVariationType
} from './vote/qchosenvotevariationtype'
import {
	IContinent,
	ContinentESelect,
	ContinentECascadeGraph,
	ContinentECreateColumns,
	ContinentECreateProperties,
	ContinentEUpdateColumns,
	ContinentEUpdateProperties,
	ContinentEId,
	QContinent
} from './location/qcontinent'
import {
	ICountry,
	CountryESelect,
	CountryECascadeGraph,
	CountryECreateColumns,
	CountryECreateProperties,
	CountryEUpdateColumns,
	CountryEUpdateProperties,
	CountryEId,
	QCountry
} from './location/qcountry'
import {
	ICountryTown,
	CountryTownESelect,
	CountryTownECascadeGraph,
	CountryTownECreateColumns,
	CountryTownECreateProperties,
	CountryTownEUpdateColumns,
	CountryTownEUpdateProperties,
	CountryTownEId,
	QCountryTown
} from './location/qcountrytown'
import {
	ICounty,
	CountyESelect,
	CountyECascadeGraph,
	CountyECreateColumns,
	CountyECreateProperties,
	CountyEUpdateColumns,
	CountyEUpdateProperties,
	CountyEId,
	QCounty
} from './location/qcounty'
import {
	ICountyTown,
	CountyTownESelect,
	CountyTownECascadeGraph,
	CountyTownECreateColumns,
	CountyTownECreateProperties,
	CountyTownEUpdateColumns,
	CountyTownEUpdateProperties,
	CountyTownEId,
	QCountyTown
} from './location/qcountytown'
import {
	IDesignPattern,
	DesignPatternESelect,
	DesignPatternECascadeGraph,
	DesignPatternECreateColumns,
	DesignPatternECreateProperties,
	DesignPatternEUpdateColumns,
	DesignPatternEUpdateProperties,
	DesignPatternEId,
	QDesignPattern
} from './factor/position/qdesignpattern'
import {
	IDevice,
	DeviceESelect,
	DeviceECascadeGraph,
	DeviceECreateColumns,
	DeviceECreateProperties,
	DeviceEUpdateColumns,
	DeviceEUpdateProperties,
	DeviceEId,
	QDevice
} from './user/qdevice'
import {
	IEmoji,
	EmojiESelect,
	EmojiECascadeGraph,
	EmojiECreateColumns,
	EmojiECreateProperties,
	EmojiEUpdateColumns,
	EmojiEUpdateProperties,
	EmojiEId,
	QEmoji
} from './factor/position/qemoji'
import {
	IFactor,
	FactorESelect,
	FactorECascadeGraph,
	FactorECreateColumns,
	FactorECreateProperties,
	FactorEUpdateColumns,
	FactorEUpdateProperties,
	FactorEId,
	QFactor
} from './factor/qfactor'
import {
	IFactorOpinionVersion,
	FactorOpinionVersionESelect,
	FactorOpinionVersionECascadeGraph,
	FactorOpinionVersionECreateColumns,
	FactorOpinionVersionECreateProperties,
	FactorOpinionVersionEUpdateColumns,
	FactorOpinionVersionEUpdateProperties,
	FactorOpinionVersionEId,
	QFactorOpinionVersion
} from './opinion/qfactoropinionversion'
import {
	IFactorOpinionVersionRating,
	FactorOpinionVersionRatingESelect,
	FactorOpinionVersionRatingECascadeGraph,
	FactorOpinionVersionRatingECreateColumns,
	FactorOpinionVersionRatingECreateProperties,
	FactorOpinionVersionRatingEUpdateColumns,
	FactorOpinionVersionRatingEUpdateProperties,
	FactorOpinionVersionRatingEId,
	QFactorOpinionVersionRating
} from './opinion/user/qfactoropinionversionrating'
import {
	IFactorOpinionVersionRatingCount,
	FactorOpinionVersionRatingCountESelect,
	FactorOpinionVersionRatingCountECascadeGraph,
	FactorOpinionVersionRatingCountECreateColumns,
	FactorOpinionVersionRatingCountECreateProperties,
	FactorOpinionVersionRatingCountEUpdateColumns,
	FactorOpinionVersionRatingCountEUpdateProperties,
	FactorOpinionVersionRatingCountEId,
	QFactorOpinionVersionRatingCount
} from './opinion/count/qfactoropinionversionratingcount'
import {
	IFactorOpinionVersionTranslation,
	FactorOpinionVersionTranslationESelect,
	FactorOpinionVersionTranslationECascadeGraph,
	FactorOpinionVersionTranslationECreateColumns,
	FactorOpinionVersionTranslationECreateProperties,
	FactorOpinionVersionTranslationEUpdateColumns,
	FactorOpinionVersionTranslationEUpdateProperties,
	FactorOpinionVersionTranslationEId,
	QFactorOpinionVersionTranslation
} from './opinion/translation/qfactoropinionversiontranslation'
import {
	IFactorPosition,
	FactorPositionESelect,
	FactorPositionECascadeGraph,
	FactorPositionECreateColumns,
	FactorPositionECreateProperties,
	FactorPositionEUpdateColumns,
	FactorPositionEUpdateProperties,
	FactorPositionEId,
	QFactorPosition
} from './factor/position/qfactorposition'
import {
	IFactorSkinVariation,
	FactorSkinVariationESelect,
	FactorSkinVariationECascadeGraph,
	FactorSkinVariationECreateColumns,
	FactorSkinVariationECreateProperties,
	FactorSkinVariationEUpdateColumns,
	FactorSkinVariationEUpdateProperties,
	FactorSkinVariationEId,
	QFactorSkinVariation
} from './factor/qfactorskinvariation'
import {
	IFactorVariation,
	FactorVariationESelect,
	FactorVariationECascadeGraph,
	FactorVariationECreateColumns,
	FactorVariationECreateProperties,
	FactorVariationEUpdateColumns,
	FactorVariationEUpdateProperties,
	FactorVariationEId,
	QFactorVariation
} from './factor/qfactorvariation'
import {
	IFactorVariationTranslation,
	FactorVariationTranslationESelect,
	FactorVariationTranslationECascadeGraph,
	FactorVariationTranslationECreateColumns,
	FactorVariationTranslationECreateProperties,
	FactorVariationTranslationEUpdateColumns,
	FactorVariationTranslationEUpdateProperties,
	FactorVariationTranslationEId,
	QFactorVariationTranslation
} from './factor/qfactorvariationtranslation'
import {
	ILabel,
	LabelESelect,
	LabelECascadeGraph,
	LabelECreateColumns,
	LabelECreateProperties,
	LabelEUpdateColumns,
	LabelEUpdateProperties,
	LabelEId,
	QLabel
} from './poll/variation/label/qlabel'
import {
	ILabelTranslation,
	LabelTranslationESelect,
	LabelTranslationECascadeGraph,
	LabelTranslationECreateColumns,
	LabelTranslationECreateProperties,
	LabelTranslationEUpdateColumns,
	LabelTranslationEUpdateProperties,
	LabelTranslationEId,
	QLabelTranslation
} from './poll/variation/label/qlabeltranslation'
import {
	ILabelTranslationRating,
	LabelTranslationRatingESelect,
	LabelTranslationRatingECascadeGraph,
	LabelTranslationRatingECreateColumns,
	LabelTranslationRatingECreateProperties,
	LabelTranslationRatingEUpdateColumns,
	LabelTranslationRatingEUpdateProperties,
	LabelTranslationRatingEId,
	QLabelTranslationRating
} from './poll/variation/label/qlabeltranslationrating'
import {
	ILabelTranslationRatingCount,
	LabelTranslationRatingCountESelect,
	LabelTranslationRatingCountECascadeGraph,
	LabelTranslationRatingCountECreateColumns,
	LabelTranslationRatingCountECreateProperties,
	LabelTranslationRatingCountEUpdateColumns,
	LabelTranslationRatingCountEUpdateProperties,
	LabelTranslationRatingCountEId,
	QLabelTranslationRatingCount
} from './poll/variation/label/qlabeltranslationratingcount'
import {
	ILanguage,
	LanguageESelect,
	LanguageECascadeGraph,
	LanguageECreateColumns,
	LanguageECreateProperties,
	LanguageEUpdateColumns,
	LanguageEUpdateProperties,
	LanguageEId,
	QLanguage
} from './infrastructure/qlanguage'
import {
	IPoll,
	PollESelect,
	PollECascadeGraph,
	PollECreateColumns,
	PollECreateProperties,
	PollEUpdateColumns,
	PollEUpdateProperties,
	PollEId,
	QPoll
} from './poll/qpoll'
import {
	IPollFactorPositionVariation,
	PollFactorPositionVariationESelect,
	PollFactorPositionVariationECascadeGraph,
	PollFactorPositionVariationECreateColumns,
	PollFactorPositionVariationECreateProperties,
	PollFactorPositionVariationEUpdateColumns,
	PollFactorPositionVariationEUpdateProperties,
	PollFactorPositionVariationEId,
	QPollFactorPositionVariation
} from './poll/variation/structure/qpollfactorpositionvariation'
import {
	IPollFactorSkinVariation,
	PollFactorSkinVariationESelect,
	PollFactorSkinVariationECascadeGraph,
	PollFactorSkinVariationECreateColumns,
	PollFactorSkinVariationECreateProperties,
	PollFactorSkinVariationEUpdateColumns,
	PollFactorSkinVariationEUpdateProperties,
	PollFactorSkinVariationEId,
	QPollFactorSkinVariation
} from './poll/variation/structure/qpollfactorskinvariation'
import {
	IPollFactorVariation,
	PollFactorVariationESelect,
	PollFactorVariationECascadeGraph,
	PollFactorVariationECreateColumns,
	PollFactorVariationECreateProperties,
	PollFactorVariationEUpdateColumns,
	PollFactorVariationEUpdateProperties,
	PollFactorVariationEId,
	QPollFactorVariation
} from './poll/variation/structure/qpollfactorvariation'
import {
	IPollLTFContinent,
	PollLTFContinentESelect,
	PollLTFContinentECascadeGraph,
	PollLTFContinentECreateColumns,
	PollLTFContinentECreateProperties,
	PollLTFContinentEUpdateColumns,
	PollLTFContinentEUpdateProperties,
	PollLTFContinentEId,
	QPollLTFContinent
} from './poll/locationtimeframe/location/qpollltfcontinent'
import {
	IPollLTFCountry,
	PollLTFCountryESelect,
	PollLTFCountryECascadeGraph,
	PollLTFCountryECreateColumns,
	PollLTFCountryECreateProperties,
	PollLTFCountryEUpdateColumns,
	PollLTFCountryEUpdateProperties,
	PollLTFCountryEId,
	QPollLTFCountry
} from './poll/locationtimeframe/location/qpollltfcountry'
import {
	IPollLTFCounty,
	PollLTFCountyESelect,
	PollLTFCountyECascadeGraph,
	PollLTFCountyECreateColumns,
	PollLTFCountyECreateProperties,
	PollLTFCountyEUpdateColumns,
	PollLTFCountyEUpdateProperties,
	PollLTFCountyEId,
	QPollLTFCounty
} from './poll/locationtimeframe/location/qpollltfcounty'
import {
	IPollLTFOpinionCount,
	PollLTFOpinionCountESelect,
	PollLTFOpinionCountECascadeGraph,
	PollLTFOpinionCountECreateColumns,
	PollLTFOpinionCountECreateProperties,
	PollLTFOpinionCountEUpdateColumns,
	PollLTFOpinionCountEUpdateProperties,
	PollLTFOpinionCountEId,
	QPollLTFOpinionCount
} from './poll/locationtimeframe/count/qpollltfopinioncount'
import {
	IPollLTFOpinionRatingCount,
	PollLTFOpinionRatingCountESelect,
	PollLTFOpinionRatingCountECascadeGraph,
	PollLTFOpinionRatingCountECreateColumns,
	PollLTFOpinionRatingCountECreateProperties,
	PollLTFOpinionRatingCountEUpdateColumns,
	PollLTFOpinionRatingCountEUpdateProperties,
	PollLTFOpinionRatingCountEId,
	QPollLTFOpinionRatingCount
} from './poll/locationtimeframe/count/qpollltfopinionratingcount'
import {
	IPollLTFRatingCount,
	PollLTFRatingCountESelect,
	PollLTFRatingCountECascadeGraph,
	PollLTFRatingCountECreateColumns,
	PollLTFRatingCountECreateProperties,
	PollLTFRatingCountEUpdateColumns,
	PollLTFRatingCountEUpdateProperties,
	PollLTFRatingCountEId,
	QPollLTFRatingCount
} from './poll/locationtimeframe/count/qpollltfratingcount'
import {
	IPollLTFState,
	PollLTFStateESelect,
	PollLTFStateECascadeGraph,
	PollLTFStateECreateColumns,
	PollLTFStateECreateProperties,
	PollLTFStateEUpdateColumns,
	PollLTFStateEUpdateProperties,
	PollLTFStateEId,
	QPollLTFState
} from './poll/locationtimeframe/location/qpollltfstate'
import {
	IPollLTFTown,
	PollLTFTownESelect,
	PollLTFTownECascadeGraph,
	PollLTFTownECreateColumns,
	PollLTFTownECreateProperties,
	PollLTFTownEUpdateColumns,
	PollLTFTownEUpdateProperties,
	PollLTFTownEId,
	QPollLTFTown
} from './poll/locationtimeframe/location/qpollltftown'
import {
	IPollLTFVoteCount,
	PollLTFVoteCountESelect,
	PollLTFVoteCountECascadeGraph,
	PollLTFVoteCountECreateColumns,
	PollLTFVoteCountECreateProperties,
	PollLTFVoteCountEUpdateColumns,
	PollLTFVoteCountEUpdateProperties,
	PollLTFVoteCountEId,
	QPollLTFVoteCount
} from './poll/locationtimeframe/count/qpollltfvotecount'
import {
	IPollLocationTimeFrame,
	PollLocationTimeFrameESelect,
	PollLocationTimeFrameECascadeGraph,
	PollLocationTimeFrameECreateColumns,
	PollLocationTimeFrameECreateProperties,
	PollLocationTimeFrameEUpdateColumns,
	PollLocationTimeFrameEUpdateProperties,
	PollLocationTimeFrameEId,
	QPollLocationTimeFrame
} from './poll/locationtimeframe/qpolllocationtimeframe'
import {
	IPollOpinion,
	PollOpinionESelect,
	PollOpinionECascadeGraph,
	PollOpinionECreateColumns,
	PollOpinionECreateProperties,
	PollOpinionEUpdateColumns,
	PollOpinionEUpdateProperties,
	PollOpinionEId,
	QPollOpinion
} from './opinion/qpollopinion'
import {
	IPollOpinionRatingCount,
	PollOpinionRatingCountESelect,
	PollOpinionRatingCountECascadeGraph,
	PollOpinionRatingCountECreateColumns,
	PollOpinionRatingCountECreateProperties,
	PollOpinionRatingCountEUpdateColumns,
	PollOpinionRatingCountEUpdateProperties,
	PollOpinionRatingCountEId,
	QPollOpinionRatingCount
} from './opinion/count/qpollopinionratingcount'
import {
	IPollOpinionVersion,
	PollOpinionVersionESelect,
	PollOpinionVersionECascadeGraph,
	PollOpinionVersionECreateColumns,
	PollOpinionVersionECreateProperties,
	PollOpinionVersionEUpdateColumns,
	PollOpinionVersionEUpdateProperties,
	PollOpinionVersionEId,
	QPollOpinionVersion
} from './opinion/qpollopinionversion'
import {
	IPollOpinionVersionRating,
	PollOpinionVersionRatingESelect,
	PollOpinionVersionRatingECascadeGraph,
	PollOpinionVersionRatingECreateColumns,
	PollOpinionVersionRatingECreateProperties,
	PollOpinionVersionRatingEUpdateColumns,
	PollOpinionVersionRatingEUpdateProperties,
	PollOpinionVersionRatingEId,
	QPollOpinionVersionRating
} from './opinion/user/qpollopinionversionrating'
import {
	IPollOpinionVersionRatingCount,
	PollOpinionVersionRatingCountESelect,
	PollOpinionVersionRatingCountECascadeGraph,
	PollOpinionVersionRatingCountECreateColumns,
	PollOpinionVersionRatingCountECreateProperties,
	PollOpinionVersionRatingCountEUpdateColumns,
	PollOpinionVersionRatingCountEUpdateProperties,
	PollOpinionVersionRatingCountEId,
	QPollOpinionVersionRatingCount
} from './opinion/count/qpollopinionversionratingcount'
import {
	IPollOpinionVersionTranslation,
	PollOpinionVersionTranslationESelect,
	PollOpinionVersionTranslationECascadeGraph,
	PollOpinionVersionTranslationECreateColumns,
	PollOpinionVersionTranslationECreateProperties,
	PollOpinionVersionTranslationEUpdateColumns,
	PollOpinionVersionTranslationEUpdateProperties,
	PollOpinionVersionTranslationEId,
	QPollOpinionVersionTranslation
} from './opinion/translation/qpollopinionversiontranslation'
import {
	IPollOpinionsCount,
	PollOpinionsCountESelect,
	PollOpinionsCountECascadeGraph,
	PollOpinionsCountECreateColumns,
	PollOpinionsCountECreateProperties,
	PollOpinionsCountEUpdateColumns,
	PollOpinionsCountEUpdateProperties,
	PollOpinionsCountEId,
	QPollOpinionsCount
} from './poll/count/qpollopinionscount'
import {
	IPollOpinionsRatingCount,
	PollOpinionsRatingCountESelect,
	PollOpinionsRatingCountECascadeGraph,
	PollOpinionsRatingCountECreateColumns,
	PollOpinionsRatingCountECreateProperties,
	PollOpinionsRatingCountEUpdateColumns,
	PollOpinionsRatingCountEUpdateProperties,
	PollOpinionsRatingCountEId,
	QPollOpinionsRatingCount
} from './poll/count/qpollopinionsratingcount'
import {
	IPollPositionVariation,
	PollPositionVariationESelect,
	PollPositionVariationECascadeGraph,
	PollPositionVariationECreateColumns,
	PollPositionVariationECreateProperties,
	PollPositionVariationEUpdateColumns,
	PollPositionVariationEUpdateProperties,
	PollPositionVariationEId,
	QPollPositionVariation
} from './poll/variation/structure/qpollpositionvariation'
import {
	IPollRatingCount,
	PollRatingCountESelect,
	PollRatingCountECascadeGraph,
	PollRatingCountECreateColumns,
	PollRatingCountECreateProperties,
	PollRatingCountEUpdateColumns,
	PollRatingCountEUpdateProperties,
	PollRatingCountEId,
	QPollRatingCount
} from './poll/count/qpollratingcount'
import {
	IPollType,
	PollTypeESelect,
	PollTypeECascadeGraph,
	PollTypeECreateColumns,
	PollTypeECreateProperties,
	PollTypeEUpdateColumns,
	PollTypeEUpdateProperties,
	PollTypeEId,
	QPollType
} from './poll/qpolltype'
import {
	IPollVariation,
	PollVariationESelect,
	PollVariationECascadeGraph,
	PollVariationECreateColumns,
	PollVariationECreateProperties,
	PollVariationEUpdateColumns,
	PollVariationEUpdateProperties,
	PollVariationEId,
	QPollVariation
} from './poll/variation/qpollvariation'
import {
	IPollVariationFactorTranslation,
	PollVariationFactorTranslationESelect,
	PollVariationFactorTranslationECascadeGraph,
	PollVariationFactorTranslationECreateColumns,
	PollVariationFactorTranslationECreateProperties,
	PollVariationFactorTranslationEUpdateColumns,
	PollVariationFactorTranslationEUpdateProperties,
	PollVariationFactorTranslationEId,
	QPollVariationFactorTranslation
} from './poll/variation/translation/qpollvariationfactortranslation'
import {
	IPollVariationLabel,
	PollVariationLabelESelect,
	PollVariationLabelECascadeGraph,
	PollVariationLabelECreateColumns,
	PollVariationLabelECreateProperties,
	PollVariationLabelEUpdateColumns,
	PollVariationLabelEUpdateProperties,
	PollVariationLabelEId,
	QPollVariationLabel
} from './poll/variation/qpollvariationlabel'
import {
	IPollVariationOpinionCount,
	PollVariationOpinionCountESelect,
	PollVariationOpinionCountECascadeGraph,
	PollVariationOpinionCountECreateColumns,
	PollVariationOpinionCountECreateProperties,
	PollVariationOpinionCountEUpdateColumns,
	PollVariationOpinionCountEUpdateProperties,
	PollVariationOpinionCountEId,
	QPollVariationOpinionCount
} from './poll/variation/count/qpollvariationopinioncount'
import {
	IPollVariationOpinionRatingCount,
	PollVariationOpinionRatingCountESelect,
	PollVariationOpinionRatingCountECascadeGraph,
	PollVariationOpinionRatingCountECreateColumns,
	PollVariationOpinionRatingCountECreateProperties,
	PollVariationOpinionRatingCountEUpdateColumns,
	PollVariationOpinionRatingCountEUpdateProperties,
	PollVariationOpinionRatingCountEId,
	QPollVariationOpinionRatingCount
} from './poll/variation/count/qpollvariationopinionratingcount'
import {
	IPollVariationPositionTranslation,
	PollVariationPositionTranslationESelect,
	PollVariationPositionTranslationECascadeGraph,
	PollVariationPositionTranslationECreateColumns,
	PollVariationPositionTranslationECreateProperties,
	PollVariationPositionTranslationEUpdateColumns,
	PollVariationPositionTranslationEUpdateProperties,
	PollVariationPositionTranslationEId,
	QPollVariationPositionTranslation
} from './poll/variation/translation/qpollvariationpositiontranslation'
import {
	IPollVariationRatingCount,
	PollVariationRatingCountESelect,
	PollVariationRatingCountECascadeGraph,
	PollVariationRatingCountECreateColumns,
	PollVariationRatingCountECreateProperties,
	PollVariationRatingCountEUpdateColumns,
	PollVariationRatingCountEUpdateProperties,
	PollVariationRatingCountEId,
	QPollVariationRatingCount
} from './poll/variation/count/qpollvariationratingcount'
import {
	IPollVariationTranslation,
	PollVariationTranslationESelect,
	PollVariationTranslationECascadeGraph,
	PollVariationTranslationECreateColumns,
	PollVariationTranslationECreateProperties,
	PollVariationTranslationEUpdateColumns,
	PollVariationTranslationEUpdateProperties,
	PollVariationTranslationEId,
	QPollVariationTranslation
} from './poll/variation/translation/qpollvariationtranslation'
import {
	IPollVariationTranslationOpinionCount,
	PollVariationTranslationOpinionCountESelect,
	PollVariationTranslationOpinionCountECascadeGraph,
	PollVariationTranslationOpinionCountECreateColumns,
	PollVariationTranslationOpinionCountECreateProperties,
	PollVariationTranslationOpinionCountEUpdateColumns,
	PollVariationTranslationOpinionCountEUpdateProperties,
	PollVariationTranslationOpinionCountEId,
	QPollVariationTranslationOpinionCount
} from './poll/variation/translation/count/qpollvariationtranslationopinioncount'
import {
	IPollVariationTranslationOpinionRatingCount,
	PollVariationTranslationOpinionRatingCountESelect,
	PollVariationTranslationOpinionRatingCountECascadeGraph,
	PollVariationTranslationOpinionRatingCountECreateColumns,
	PollVariationTranslationOpinionRatingCountECreateProperties,
	PollVariationTranslationOpinionRatingCountEUpdateColumns,
	PollVariationTranslationOpinionRatingCountEUpdateProperties,
	PollVariationTranslationOpinionRatingCountEId,
	QPollVariationTranslationOpinionRatingCount
} from './poll/variation/translation/count/qpollvariationtranslationopinionratingcount'
import {
	IPollVariationTranslationRatingCount,
	PollVariationTranslationRatingCountESelect,
	PollVariationTranslationRatingCountECascadeGraph,
	PollVariationTranslationRatingCountECreateColumns,
	PollVariationTranslationRatingCountECreateProperties,
	PollVariationTranslationRatingCountEUpdateColumns,
	PollVariationTranslationRatingCountEUpdateProperties,
	PollVariationTranslationRatingCountEId,
	QPollVariationTranslationRatingCount
} from './poll/variation/translation/count/qpollvariationtranslationratingcount'
import {
	IPollVariationTranslationVoteCount,
	PollVariationTranslationVoteCountESelect,
	PollVariationTranslationVoteCountECascadeGraph,
	PollVariationTranslationVoteCountECreateColumns,
	PollVariationTranslationVoteCountECreateProperties,
	PollVariationTranslationVoteCountEUpdateColumns,
	PollVariationTranslationVoteCountEUpdateProperties,
	PollVariationTranslationVoteCountEId,
	QPollVariationTranslationVoteCount
} from './poll/variation/translation/count/qpollvariationtranslationvotecount'
import {
	IPollVariationVoteCount,
	PollVariationVoteCountESelect,
	PollVariationVoteCountECascadeGraph,
	PollVariationVoteCountECreateColumns,
	PollVariationVoteCountECreateProperties,
	PollVariationVoteCountEUpdateColumns,
	PollVariationVoteCountEUpdateProperties,
	PollVariationVoteCountEId,
	QPollVariationVoteCount
} from './poll/variation/count/qpollvariationvotecount'
import {
	IPollVoteCount,
	PollVoteCountESelect,
	PollVoteCountECascadeGraph,
	PollVoteCountECreateColumns,
	PollVoteCountECreateProperties,
	PollVoteCountEUpdateColumns,
	PollVoteCountEUpdateProperties,
	PollVoteCountEId,
	QPollVoteCount
} from './poll/count/qpollvotecount'
import {
	IPosition,
	PositionESelect,
	PositionECascadeGraph,
	PositionECreateColumns,
	PositionECreateProperties,
	PositionEUpdateColumns,
	PositionEUpdateProperties,
	PositionEId,
	QPosition
} from './factor/position/qposition'
import {
	IPositionOpinionVersion,
	PositionOpinionVersionESelect,
	PositionOpinionVersionECascadeGraph,
	PositionOpinionVersionECreateColumns,
	PositionOpinionVersionECreateProperties,
	PositionOpinionVersionEUpdateColumns,
	PositionOpinionVersionEUpdateProperties,
	PositionOpinionVersionEId,
	QPositionOpinionVersion
} from './opinion/qpositionopinionversion'
import {
	IPositionOpinionVersionRating,
	PositionOpinionVersionRatingESelect,
	PositionOpinionVersionRatingECascadeGraph,
	PositionOpinionVersionRatingECreateColumns,
	PositionOpinionVersionRatingECreateProperties,
	PositionOpinionVersionRatingEUpdateColumns,
	PositionOpinionVersionRatingEUpdateProperties,
	PositionOpinionVersionRatingEId,
	QPositionOpinionVersionRating
} from './opinion/user/qpositionopinionversionrating'
import {
	IPositionOpinionVersionRatingCount,
	PositionOpinionVersionRatingCountESelect,
	PositionOpinionVersionRatingCountECascadeGraph,
	PositionOpinionVersionRatingCountECreateColumns,
	PositionOpinionVersionRatingCountECreateProperties,
	PositionOpinionVersionRatingCountEUpdateColumns,
	PositionOpinionVersionRatingCountEUpdateProperties,
	PositionOpinionVersionRatingCountEId,
	QPositionOpinionVersionRatingCount
} from './opinion/count/qpositionopinionversionratingcount'
import {
	IPositionOpinionVersionTranslation,
	PositionOpinionVersionTranslationESelect,
	PositionOpinionVersionTranslationECascadeGraph,
	PositionOpinionVersionTranslationECreateColumns,
	PositionOpinionVersionTranslationECreateProperties,
	PositionOpinionVersionTranslationEUpdateColumns,
	PositionOpinionVersionTranslationEUpdateProperties,
	PositionOpinionVersionTranslationEId,
	QPositionOpinionVersionTranslation
} from './opinion/translation/qpositionopinionversiontranslation'
import {
	IPositionVariation,
	PositionVariationESelect,
	PositionVariationECascadeGraph,
	PositionVariationECreateColumns,
	PositionVariationECreateProperties,
	PositionVariationEUpdateColumns,
	PositionVariationEUpdateProperties,
	PositionVariationEId,
	QPositionVariation
} from './factor/position/qpositionvariation'
import {
	IPositionVariationTranslation,
	PositionVariationTranslationESelect,
	PositionVariationTranslationECascadeGraph,
	PositionVariationTranslationECreateColumns,
	PositionVariationTranslationECreateProperties,
	PositionVariationTranslationEUpdateColumns,
	PositionVariationTranslationEUpdateProperties,
	PositionVariationTranslationEId,
	QPositionVariationTranslation
} from './factor/position/qpositionvariationtranslation'
import {
	IRating,
	RatingESelect,
	RatingECascadeGraph,
	RatingECreateColumns,
	RatingECreateProperties,
	RatingEUpdateColumns,
	RatingEUpdateProperties,
	RatingEId,
	QRating
} from './infrastructure/rating/qrating'
import {
	IRatingReason,
	RatingReasonESelect,
	RatingReasonECascadeGraph,
	RatingReasonECreateColumns,
	RatingReasonECreateProperties,
	RatingReasonEUpdateColumns,
	RatingReasonEUpdateProperties,
	RatingReasonEId,
	QRatingReason
} from './infrastructure/rating/qratingreason'
import {
	IRatingReasonTranslation,
	RatingReasonTranslationESelect,
	RatingReasonTranslationECascadeGraph,
	RatingReasonTranslationECreateColumns,
	RatingReasonTranslationECreateProperties,
	RatingReasonTranslationEUpdateColumns,
	RatingReasonTranslationEUpdateProperties,
	RatingReasonTranslationEId,
	QRatingReasonTranslation
} from './infrastructure/rating/qratingreasontranslation'
import {
	IRatingSetting,
	RatingSettingESelect,
	RatingSettingECascadeGraph,
	RatingSettingECreateColumns,
	RatingSettingECreateProperties,
	RatingSettingEUpdateColumns,
	RatingSettingEUpdateProperties,
	RatingSettingEId,
	QRatingSetting
} from './infrastructure/rating/qratingsetting'
import {
	IRatingTranslation,
	RatingTranslationESelect,
	RatingTranslationECascadeGraph,
	RatingTranslationECreateColumns,
	RatingTranslationECreateProperties,
	RatingTranslationEUpdateColumns,
	RatingTranslationEUpdateProperties,
	RatingTranslationEId,
	QRatingTranslation
} from './infrastructure/rating/qratingtranslation'
import {
	IRatingType,
	RatingTypeESelect,
	RatingTypeECascadeGraph,
	RatingTypeECreateColumns,
	RatingTypeECreateProperties,
	RatingTypeEUpdateColumns,
	RatingTypeEUpdateProperties,
	RatingTypeEId,
	QRatingType
} from './infrastructure/rating/qratingtype'
import {
	IState,
	StateESelect,
	StateECascadeGraph,
	StateECreateColumns,
	StateECreateProperties,
	StateEUpdateColumns,
	StateEUpdateProperties,
	StateEId,
	QState
} from './location/qstate'
import {
	IStateTown,
	StateTownESelect,
	StateTownECascadeGraph,
	StateTownECreateColumns,
	StateTownECreateProperties,
	StateTownEUpdateColumns,
	StateTownEUpdateProperties,
	StateTownEId,
	QStateTown
} from './location/qstatetown'
import {
	ITheme,
	ThemeESelect,
	ThemeECascadeGraph,
	ThemeECreateColumns,
	ThemeECreateProperties,
	ThemeEUpdateColumns,
	ThemeEUpdateProperties,
	ThemeEId,
	QTheme
} from './poll/qtheme'
import {
	ITown,
	TownESelect,
	TownECascadeGraph,
	TownECreateColumns,
	TownECreateProperties,
	TownEUpdateColumns,
	TownEUpdateProperties,
	TownEId,
	QTown
} from './location/qtown'
import {
	ITranslationType,
	TranslationTypeESelect,
	TranslationTypeECascadeGraph,
	TranslationTypeECreateColumns,
	TranslationTypeECreateProperties,
	TranslationTypeEUpdateColumns,
	TranslationTypeEUpdateProperties,
	TranslationTypeEId,
	QTranslationType
} from './infrastructure/qtranslationtype'
import {
	IUserAccount,
	UserAccountESelect,
	UserAccountECascadeGraph,
	UserAccountECreateColumns,
	UserAccountECreateProperties,
	UserAccountEUpdateColumns,
	UserAccountEUpdateProperties,
	UserAccountEId,
	QUserAccount
} from './user/quseraccount'
import {
	IUserPoll,
	UserPollESelect,
	UserPollECascadeGraph,
	UserPollECreateColumns,
	UserPollECreateProperties,
	UserPollEUpdateColumns,
	UserPollEUpdateProperties,
	UserPollEId,
	QUserPoll
} from './poll/user/quserpoll'
import {
	IUserPollRating,
	UserPollRatingESelect,
	UserPollRatingECascadeGraph,
	UserPollRatingECreateColumns,
	UserPollRatingECreateProperties,
	UserPollRatingEUpdateColumns,
	UserPollRatingEUpdateProperties,
	UserPollRatingEId,
	QUserPollRating
} from './poll/user/quserpollrating'
import {
	IUserPollVariation,
	UserPollVariationESelect,
	UserPollVariationECascadeGraph,
	UserPollVariationECreateColumns,
	UserPollVariationECreateProperties,
	UserPollVariationEUpdateColumns,
	UserPollVariationEUpdateProperties,
	UserPollVariationEId,
	QUserPollVariation
} from './poll/user/quserpollvariation'
import {
	IUserPollVariationRating,
	UserPollVariationRatingESelect,
	UserPollVariationRatingECascadeGraph,
	UserPollVariationRatingECreateColumns,
	UserPollVariationRatingECreateProperties,
	UserPollVariationRatingEUpdateColumns,
	UserPollVariationRatingEUpdateProperties,
	UserPollVariationRatingEId,
	QUserPollVariationRating
} from './poll/user/quserpollvariationrating'
import {
	IUserPollVariationTranslation,
	UserPollVariationTranslationESelect,
	UserPollVariationTranslationECascadeGraph,
	UserPollVariationTranslationECreateColumns,
	UserPollVariationTranslationECreateProperties,
	UserPollVariationTranslationEUpdateColumns,
	UserPollVariationTranslationEUpdateProperties,
	UserPollVariationTranslationEId,
	QUserPollVariationTranslation
} from './poll/user/quserpollvariationtranslation'
import {
	IUserPollVariationTranslationRating,
	UserPollVariationTranslationRatingESelect,
	UserPollVariationTranslationRatingECascadeGraph,
	UserPollVariationTranslationRatingECreateColumns,
	UserPollVariationTranslationRatingECreateProperties,
	UserPollVariationTranslationRatingEUpdateColumns,
	UserPollVariationTranslationRatingEUpdateProperties,
	UserPollVariationTranslationRatingEId,
	QUserPollVariationTranslationRating
} from './poll/user/quserpollvariationtranslationrating'
import {
	IVote,
	VoteESelect,
	VoteECascadeGraph,
	VoteECreateColumns,
	VoteECreateProperties,
	VoteEUpdateColumns,
	VoteEUpdateProperties,
	VoteEId,
	QVote
} from './vote/qvote'
import {
	IVoteFactor,
	VoteFactorESelect,
	VoteFactorECascadeGraph,
	VoteFactorECreateColumns,
	VoteFactorECreateProperties,
	VoteFactorEUpdateColumns,
	VoteFactorEUpdateProperties,
	VoteFactorEId,
	QVoteFactor
} from './vote/qvotefactor'
import {
	IVoteFactorType,
	VoteFactorTypeESelect,
	VoteFactorTypeECascadeGraph,
	VoteFactorTypeECreateColumns,
	VoteFactorTypeECreateProperties,
	VoteFactorTypeEUpdateColumns,
	VoteFactorTypeEUpdateProperties,
	VoteFactorTypeEId,
	QVoteFactorType
} from './vote/qvotefactortype'
import {
	IVoteType,
	VoteTypeESelect,
	VoteTypeECascadeGraph,
	VoteTypeECreateColumns,
	VoteTypeECreateProperties,
	VoteTypeEUpdateColumns,
	VoteTypeEUpdateProperties,
	VoteTypeEId,
	QVoteType
} from './vote/qvotetype'
import {
	IVoteVariation,
	VoteVariationESelect,
	VoteVariationECascadeGraph,
	VoteVariationECreateColumns,
	VoteVariationECreateProperties,
	VoteVariationEUpdateColumns,
	VoteVariationEUpdateProperties,
	VoteVariationEId,
	QVoteVariation
} from './vote/qvotevariation'

// Schema Q object Dependency Injection readiness detection DAO
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
		return diSet(5)
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
		return diSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseChosenPollTranslationDao
  extends IDao<IChosenPollTranslation, ChosenPollTranslationESelect, ChosenPollTranslationECreateProperties, ChosenPollTranslationEUpdateColumns, ChosenPollTranslationEUpdateProperties, ChosenPollTranslationEId, ChosenPollTranslationECascadeGraph, QChosenPollTranslation> {
}

export class BaseChosenPollTranslationDao
  extends SQDIDao<IChosenPollTranslation, ChosenPollTranslationESelect, ChosenPollTranslationECreateProperties, ChosenPollTranslationEUpdateColumns, ChosenPollTranslationEUpdateProperties, ChosenPollTranslationEId, ChosenPollTranslationECascadeGraph, QChosenPollTranslation>
	implements IBaseChosenPollTranslationDao {

	static diSet(): boolean {
		return diSet(53)
	}
	
	constructor() {
		super(53)
	}
}


export interface IBaseChosenPollTranslationTypeDao
  extends IDao<IChosenPollTranslationType, ChosenPollTranslationTypeESelect, ChosenPollTranslationTypeECreateProperties, ChosenPollTranslationTypeEUpdateColumns, ChosenPollTranslationTypeEUpdateProperties, ChosenPollTranslationTypeEId, ChosenPollTranslationTypeECascadeGraph, QChosenPollTranslationType> {
}

export class BaseChosenPollTranslationTypeDao
  extends SQDIDao<IChosenPollTranslationType, ChosenPollTranslationTypeESelect, ChosenPollTranslationTypeECreateProperties, ChosenPollTranslationTypeEUpdateColumns, ChosenPollTranslationTypeEUpdateProperties, ChosenPollTranslationTypeEId, ChosenPollTranslationTypeECascadeGraph, QChosenPollTranslationType>
	implements IBaseChosenPollTranslationTypeDao {

	static diSet(): boolean {
		return diSet(52)
	}
	
	constructor() {
		super(52)
	}
}


export interface IBaseChosenPollVariationDao
  extends IDao<IChosenPollVariation, ChosenPollVariationESelect, ChosenPollVariationECreateProperties, ChosenPollVariationEUpdateColumns, ChosenPollVariationEUpdateProperties, ChosenPollVariationEId, ChosenPollVariationECascadeGraph, QChosenPollVariation> {
}

export class BaseChosenPollVariationDao
  extends SQDIDao<IChosenPollVariation, ChosenPollVariationESelect, ChosenPollVariationECreateProperties, ChosenPollVariationEUpdateColumns, ChosenPollVariationEUpdateProperties, ChosenPollVariationEId, ChosenPollVariationECascadeGraph, QChosenPollVariation>
	implements IBaseChosenPollVariationDao {

	static diSet(): boolean {
		return diSet(24)
	}
	
	constructor() {
		super(24)
	}
}


export interface IBaseChosenPollVariationTypeDao
  extends IDao<IChosenPollVariationType, ChosenPollVariationTypeESelect, ChosenPollVariationTypeECreateProperties, ChosenPollVariationTypeEUpdateColumns, ChosenPollVariationTypeEUpdateProperties, ChosenPollVariationTypeEId, ChosenPollVariationTypeECascadeGraph, QChosenPollVariationType> {
}

export class BaseChosenPollVariationTypeDao
  extends SQDIDao<IChosenPollVariationType, ChosenPollVariationTypeESelect, ChosenPollVariationTypeECreateProperties, ChosenPollVariationTypeEUpdateColumns, ChosenPollVariationTypeEUpdateProperties, ChosenPollVariationTypeEId, ChosenPollVariationTypeECascadeGraph, QChosenPollVariationType>
	implements IBaseChosenPollVariationTypeDao {

	static diSet(): boolean {
		return diSet(23)
	}
	
	constructor() {
		super(23)
	}
}


export interface IBaseChosenVoteVariationDao
  extends IDao<IChosenVoteVariation, ChosenVoteVariationESelect, ChosenVoteVariationECreateProperties, ChosenVoteVariationEUpdateColumns, ChosenVoteVariationEUpdateProperties, ChosenVoteVariationEId, ChosenVoteVariationECascadeGraph, QChosenVoteVariation> {
}

export class BaseChosenVoteVariationDao
  extends SQDIDao<IChosenVoteVariation, ChosenVoteVariationESelect, ChosenVoteVariationECreateProperties, ChosenVoteVariationEUpdateColumns, ChosenVoteVariationEUpdateProperties, ChosenVoteVariationEId, ChosenVoteVariationECascadeGraph, QChosenVoteVariation>
	implements IBaseChosenVoteVariationDao {

	static diSet(): boolean {
		return diSet(59)
	}
	
	constructor() {
		super(59)
	}
}


export interface IBaseChosenVoteVariationTypeDao
  extends IDao<IChosenVoteVariationType, ChosenVoteVariationTypeESelect, ChosenVoteVariationTypeECreateProperties, ChosenVoteVariationTypeEUpdateColumns, ChosenVoteVariationTypeEUpdateProperties, ChosenVoteVariationTypeEId, ChosenVoteVariationTypeECascadeGraph, QChosenVoteVariationType> {
}

export class BaseChosenVoteVariationTypeDao
  extends SQDIDao<IChosenVoteVariationType, ChosenVoteVariationTypeESelect, ChosenVoteVariationTypeECreateProperties, ChosenVoteVariationTypeEUpdateColumns, ChosenVoteVariationTypeEUpdateProperties, ChosenVoteVariationTypeEId, ChosenVoteVariationTypeECascadeGraph, QChosenVoteVariationType>
	implements IBaseChosenVoteVariationTypeDao {

	static diSet(): boolean {
		return diSet(58)
	}
	
	constructor() {
		super(58)
	}
}


export interface IBaseContinentDao
  extends IDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent> {
}

export class BaseContinentDao
  extends SQDIDao<IContinent, ContinentESelect, ContinentECreateProperties, ContinentEUpdateColumns, ContinentEUpdateProperties, ContinentEId, ContinentECascadeGraph, QContinent>
	implements IBaseContinentDao {

	static diSet(): boolean {
		return diSet(7)
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
		return diSet(14)
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
		return diSet(13)
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
		return diSet(11)
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
		return diSet(8)
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
		return diSet(0)
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
		return diSet(3)
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
		return diSet(1)
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
		return diSet(88)
	}
	
	constructor() {
		super(88)
	}
}


export interface IBaseFactorOpinionVersionDao
  extends IDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion> {
}

export class BaseFactorOpinionVersionDao
  extends SQDIDao<IFactorOpinionVersion, FactorOpinionVersionESelect, FactorOpinionVersionECreateProperties, FactorOpinionVersionEUpdateColumns, FactorOpinionVersionEUpdateProperties, FactorOpinionVersionEId, FactorOpinionVersionECascadeGraph, QFactorOpinionVersion>
	implements IBaseFactorOpinionVersionDao {

	static diSet(): boolean {
		return diSet(76)
	}
	
	constructor() {
		super(76)
	}
}


export interface IBaseFactorOpinionVersionRatingDao
  extends IDao<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating> {
}

export class BaseFactorOpinionVersionRatingDao
  extends SQDIDao<IFactorOpinionVersionRating, FactorOpinionVersionRatingESelect, FactorOpinionVersionRatingECreateProperties, FactorOpinionVersionRatingEUpdateColumns, FactorOpinionVersionRatingEUpdateProperties, FactorOpinionVersionRatingEId, FactorOpinionVersionRatingECascadeGraph, QFactorOpinionVersionRating>
	implements IBaseFactorOpinionVersionRatingDao {

	static diSet(): boolean {
		return diSet(75)
	}
	
	constructor() {
		super(75)
	}
}


export interface IBaseFactorOpinionVersionRatingCountDao
  extends IDao<IFactorOpinionVersionRatingCount, FactorOpinionVersionRatingCountESelect, FactorOpinionVersionRatingCountECreateProperties, FactorOpinionVersionRatingCountEUpdateColumns, FactorOpinionVersionRatingCountEUpdateProperties, FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountECascadeGraph, QFactorOpinionVersionRatingCount> {
}

export class BaseFactorOpinionVersionRatingCountDao
  extends SQDIDao<IFactorOpinionVersionRatingCount, FactorOpinionVersionRatingCountESelect, FactorOpinionVersionRatingCountECreateProperties, FactorOpinionVersionRatingCountEUpdateColumns, FactorOpinionVersionRatingCountEUpdateProperties, FactorOpinionVersionRatingCountEId, FactorOpinionVersionRatingCountECascadeGraph, QFactorOpinionVersionRatingCount>
	implements IBaseFactorOpinionVersionRatingCountDao {

	static diSet(): boolean {
		return diSet(68)
	}
	
	constructor() {
		super(68)
	}
}


export interface IBaseFactorOpinionVersionTranslationDao
  extends IDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation> {
}

export class BaseFactorOpinionVersionTranslationDao
  extends SQDIDao<IFactorOpinionVersionTranslation, FactorOpinionVersionTranslationESelect, FactorOpinionVersionTranslationECreateProperties, FactorOpinionVersionTranslationEUpdateColumns, FactorOpinionVersionTranslationEUpdateProperties, FactorOpinionVersionTranslationEId, FactorOpinionVersionTranslationECascadeGraph, QFactorOpinionVersionTranslation>
	implements IBaseFactorOpinionVersionTranslationDao {

	static diSet(): boolean {
		return diSet(74)
	}
	
	constructor() {
		super(74)
	}
}


export interface IBaseFactorPositionDao
  extends IDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition> {
}

export class BaseFactorPositionDao
  extends SQDIDao<IFactorPosition, FactorPositionESelect, FactorPositionECreateProperties, FactorPositionEUpdateColumns, FactorPositionEUpdateProperties, FactorPositionEId, FactorPositionECascadeGraph, QFactorPosition>
	implements IBaseFactorPositionDao {

	static diSet(): boolean {
		return diSet(89)
	}
	
	constructor() {
		super(89)
	}
}


export interface IBaseFactorSkinVariationDao
  extends IDao<IFactorSkinVariation, FactorSkinVariationESelect, FactorSkinVariationECreateProperties, FactorSkinVariationEUpdateColumns, FactorSkinVariationEUpdateProperties, FactorSkinVariationEId, FactorSkinVariationECascadeGraph, QFactorSkinVariation> {
}

export class BaseFactorSkinVariationDao
  extends SQDIDao<IFactorSkinVariation, FactorSkinVariationESelect, FactorSkinVariationECreateProperties, FactorSkinVariationEUpdateColumns, FactorSkinVariationEUpdateProperties, FactorSkinVariationEId, FactorSkinVariationECascadeGraph, QFactorSkinVariation>
	implements IBaseFactorSkinVariationDao {

	static diSet(): boolean {
		return diSet(87)
	}
	
	constructor() {
		super(87)
	}
}


export interface IBaseFactorVariationDao
  extends IDao<IFactorVariation, FactorVariationESelect, FactorVariationECreateProperties, FactorVariationEUpdateColumns, FactorVariationEUpdateProperties, FactorVariationEId, FactorVariationECascadeGraph, QFactorVariation> {
}

export class BaseFactorVariationDao
  extends SQDIDao<IFactorVariation, FactorVariationESelect, FactorVariationECreateProperties, FactorVariationEUpdateColumns, FactorVariationEUpdateProperties, FactorVariationEId, FactorVariationECascadeGraph, QFactorVariation>
	implements IBaseFactorVariationDao {

	static diSet(): boolean {
		return diSet(44)
	}
	
	constructor() {
		super(44)
	}
}


export interface IBaseFactorVariationTranslationDao
  extends IDao<IFactorVariationTranslation, FactorVariationTranslationESelect, FactorVariationTranslationECreateProperties, FactorVariationTranslationEUpdateColumns, FactorVariationTranslationEUpdateProperties, FactorVariationTranslationEId, FactorVariationTranslationECascadeGraph, QFactorVariationTranslation> {
}

export class BaseFactorVariationTranslationDao
  extends SQDIDao<IFactorVariationTranslation, FactorVariationTranslationESelect, FactorVariationTranslationECreateProperties, FactorVariationTranslationEUpdateColumns, FactorVariationTranslationEUpdateProperties, FactorVariationTranslationEId, FactorVariationTranslationECascadeGraph, QFactorVariationTranslation>
	implements IBaseFactorVariationTranslationDao {

	static diSet(): boolean {
		return diSet(45)
	}
	
	constructor() {
		super(45)
	}
}


export interface IBaseLabelDao
  extends IDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelECascadeGraph, QLabel> {
}

export class BaseLabelDao
  extends SQDIDao<ILabel, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelECascadeGraph, QLabel>
	implements IBaseLabelDao {

	static diSet(): boolean {
		return diSet(54)
	}
	
	constructor() {
		super(54)
	}
}


export interface IBaseLabelTranslationDao
  extends IDao<ILabelTranslation, LabelTranslationESelect, LabelTranslationECreateProperties, LabelTranslationEUpdateColumns, LabelTranslationEUpdateProperties, LabelTranslationEId, LabelTranslationECascadeGraph, QLabelTranslation> {
}

export class BaseLabelTranslationDao
  extends SQDIDao<ILabelTranslation, LabelTranslationESelect, LabelTranslationECreateProperties, LabelTranslationEUpdateColumns, LabelTranslationEUpdateProperties, LabelTranslationEId, LabelTranslationECascadeGraph, QLabelTranslation>
	implements IBaseLabelTranslationDao {

	static diSet(): boolean {
		return diSet(97)
	}
	
	constructor() {
		super(97)
	}
}


export interface IBaseLabelTranslationRatingDao
  extends IDao<ILabelTranslationRating, LabelTranslationRatingESelect, LabelTranslationRatingECreateProperties, LabelTranslationRatingEUpdateColumns, LabelTranslationRatingEUpdateProperties, LabelTranslationRatingEId, LabelTranslationRatingECascadeGraph, QLabelTranslationRating> {
}

export class BaseLabelTranslationRatingDao
  extends SQDIDao<ILabelTranslationRating, LabelTranslationRatingESelect, LabelTranslationRatingECreateProperties, LabelTranslationRatingEUpdateColumns, LabelTranslationRatingEUpdateProperties, LabelTranslationRatingEId, LabelTranslationRatingECascadeGraph, QLabelTranslationRating>
	implements IBaseLabelTranslationRatingDao {

	static diSet(): boolean {
		return diSet(98)
	}
	
	constructor() {
		super(98)
	}
}


export interface IBaseLabelTranslationRatingCountDao
  extends IDao<ILabelTranslationRatingCount, LabelTranslationRatingCountESelect, LabelTranslationRatingCountECreateProperties, LabelTranslationRatingCountEUpdateColumns, LabelTranslationRatingCountEUpdateProperties, LabelTranslationRatingCountEId, LabelTranslationRatingCountECascadeGraph, QLabelTranslationRatingCount> {
}

export class BaseLabelTranslationRatingCountDao
  extends SQDIDao<ILabelTranslationRatingCount, LabelTranslationRatingCountESelect, LabelTranslationRatingCountECreateProperties, LabelTranslationRatingCountEUpdateColumns, LabelTranslationRatingCountEUpdateProperties, LabelTranslationRatingCountEId, LabelTranslationRatingCountECascadeGraph, QLabelTranslationRatingCount>
	implements IBaseLabelTranslationRatingCountDao {

	static diSet(): boolean {
		return diSet(96)
	}
	
	constructor() {
		super(96)
	}
}


export interface IBaseLanguageDao
  extends IDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage> {
}

export class BaseLanguageDao
  extends SQDIDao<ILanguage, LanguageESelect, LanguageECreateProperties, LanguageEUpdateColumns, LanguageEUpdateProperties, LanguageEId, LanguageECascadeGraph, QLanguage>
	implements IBaseLanguageDao {

	static diSet(): boolean {
		return diSet(16)
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
		return diSet(56)
	}
	
	constructor() {
		super(56)
	}
}


export interface IBasePollFactorPositionVariationDao
  extends IDao<IPollFactorPositionVariation, PollFactorPositionVariationESelect, PollFactorPositionVariationECreateProperties, PollFactorPositionVariationEUpdateColumns, PollFactorPositionVariationEUpdateProperties, PollFactorPositionVariationEId, PollFactorPositionVariationECascadeGraph, QPollFactorPositionVariation> {
}

export class BasePollFactorPositionVariationDao
  extends SQDIDao<IPollFactorPositionVariation, PollFactorPositionVariationESelect, PollFactorPositionVariationECreateProperties, PollFactorPositionVariationEUpdateColumns, PollFactorPositionVariationEUpdateProperties, PollFactorPositionVariationEId, PollFactorPositionVariationECascadeGraph, QPollFactorPositionVariation>
	implements IBasePollFactorPositionVariationDao {

	static diSet(): boolean {
		return diSet(62)
	}
	
	constructor() {
		super(62)
	}
}


export interface IBasePollFactorSkinVariationDao
  extends IDao<IPollFactorSkinVariation, PollFactorSkinVariationESelect, PollFactorSkinVariationECreateProperties, PollFactorSkinVariationEUpdateColumns, PollFactorSkinVariationEUpdateProperties, PollFactorSkinVariationEId, PollFactorSkinVariationECascadeGraph, QPollFactorSkinVariation> {
}

export class BasePollFactorSkinVariationDao
  extends SQDIDao<IPollFactorSkinVariation, PollFactorSkinVariationESelect, PollFactorSkinVariationECreateProperties, PollFactorSkinVariationEUpdateColumns, PollFactorSkinVariationEUpdateProperties, PollFactorSkinVariationEId, PollFactorSkinVariationECascadeGraph, QPollFactorSkinVariation>
	implements IBasePollFactorSkinVariationDao {

	static diSet(): boolean {
		return diSet(85)
	}
	
	constructor() {
		super(85)
	}
}


export interface IBasePollFactorVariationDao
  extends IDao<IPollFactorVariation, PollFactorVariationESelect, PollFactorVariationECreateProperties, PollFactorVariationEUpdateColumns, PollFactorVariationEUpdateProperties, PollFactorVariationEId, PollFactorVariationECascadeGraph, QPollFactorVariation> {
}

export class BasePollFactorVariationDao
  extends SQDIDao<IPollFactorVariation, PollFactorVariationESelect, PollFactorVariationECreateProperties, PollFactorVariationEUpdateColumns, PollFactorVariationEUpdateProperties, PollFactorVariationEId, PollFactorVariationECascadeGraph, QPollFactorVariation>
	implements IBasePollFactorVariationDao {

	static diSet(): boolean {
		return diSet(67)
	}
	
	constructor() {
		super(67)
	}
}


export interface IBasePollLTFContinentDao
  extends IDao<IPollLTFContinent, PollLTFContinentESelect, PollLTFContinentECreateProperties, PollLTFContinentEUpdateColumns, PollLTFContinentEUpdateProperties, PollLTFContinentEId, PollLTFContinentECascadeGraph, QPollLTFContinent> {
}

export class BasePollLTFContinentDao
  extends SQDIDao<IPollLTFContinent, PollLTFContinentESelect, PollLTFContinentECreateProperties, PollLTFContinentEUpdateColumns, PollLTFContinentEUpdateProperties, PollLTFContinentEId, PollLTFContinentECascadeGraph, QPollLTFContinent>
	implements IBasePollLTFContinentDao {

	static diSet(): boolean {
		return diSet(25)
	}
	
	constructor() {
		super(25)
	}
}


export interface IBasePollLTFCountryDao
  extends IDao<IPollLTFCountry, PollLTFCountryESelect, PollLTFCountryECreateProperties, PollLTFCountryEUpdateColumns, PollLTFCountryEUpdateProperties, PollLTFCountryEId, PollLTFCountryECascadeGraph, QPollLTFCountry> {
}

export class BasePollLTFCountryDao
  extends SQDIDao<IPollLTFCountry, PollLTFCountryESelect, PollLTFCountryECreateProperties, PollLTFCountryEUpdateColumns, PollLTFCountryEUpdateProperties, PollLTFCountryEId, PollLTFCountryECascadeGraph, QPollLTFCountry>
	implements IBasePollLTFCountryDao {

	static diSet(): boolean {
		return diSet(26)
	}
	
	constructor() {
		super(26)
	}
}


export interface IBasePollLTFCountyDao
  extends IDao<IPollLTFCounty, PollLTFCountyESelect, PollLTFCountyECreateProperties, PollLTFCountyEUpdateColumns, PollLTFCountyEUpdateProperties, PollLTFCountyEId, PollLTFCountyECascadeGraph, QPollLTFCounty> {
}

export class BasePollLTFCountyDao
  extends SQDIDao<IPollLTFCounty, PollLTFCountyESelect, PollLTFCountyECreateProperties, PollLTFCountyEUpdateColumns, PollLTFCountyEUpdateProperties, PollLTFCountyEId, PollLTFCountyECascadeGraph, QPollLTFCounty>
	implements IBasePollLTFCountyDao {

	static diSet(): boolean {
		return diSet(27)
	}
	
	constructor() {
		super(27)
	}
}


export interface IBasePollLTFOpinionCountDao
  extends IDao<IPollLTFOpinionCount, PollLTFOpinionCountESelect, PollLTFOpinionCountECreateProperties, PollLTFOpinionCountEUpdateColumns, PollLTFOpinionCountEUpdateProperties, PollLTFOpinionCountEId, PollLTFOpinionCountECascadeGraph, QPollLTFOpinionCount> {
}

export class BasePollLTFOpinionCountDao
  extends SQDIDao<IPollLTFOpinionCount, PollLTFOpinionCountESelect, PollLTFOpinionCountECreateProperties, PollLTFOpinionCountEUpdateColumns, PollLTFOpinionCountEUpdateProperties, PollLTFOpinionCountEId, PollLTFOpinionCountECascadeGraph, QPollLTFOpinionCount>
	implements IBasePollLTFOpinionCountDao {

	static diSet(): boolean {
		return diSet(92)
	}
	
	constructor() {
		super(92)
	}
}


export interface IBasePollLTFOpinionRatingCountDao
  extends IDao<IPollLTFOpinionRatingCount, PollLTFOpinionRatingCountESelect, PollLTFOpinionRatingCountECreateProperties, PollLTFOpinionRatingCountEUpdateColumns, PollLTFOpinionRatingCountEUpdateProperties, PollLTFOpinionRatingCountEId, PollLTFOpinionRatingCountECascadeGraph, QPollLTFOpinionRatingCount> {
}

export class BasePollLTFOpinionRatingCountDao
  extends SQDIDao<IPollLTFOpinionRatingCount, PollLTFOpinionRatingCountESelect, PollLTFOpinionRatingCountECreateProperties, PollLTFOpinionRatingCountEUpdateColumns, PollLTFOpinionRatingCountEUpdateProperties, PollLTFOpinionRatingCountEId, PollLTFOpinionRatingCountECascadeGraph, QPollLTFOpinionRatingCount>
	implements IBasePollLTFOpinionRatingCountDao {

	static diSet(): boolean {
		return diSet(93)
	}
	
	constructor() {
		super(93)
	}
}


export interface IBasePollLTFRatingCountDao
  extends IDao<IPollLTFRatingCount, PollLTFRatingCountESelect, PollLTFRatingCountECreateProperties, PollLTFRatingCountEUpdateColumns, PollLTFRatingCountEUpdateProperties, PollLTFRatingCountEId, PollLTFRatingCountECascadeGraph, QPollLTFRatingCount> {
}

export class BasePollLTFRatingCountDao
  extends SQDIDao<IPollLTFRatingCount, PollLTFRatingCountESelect, PollLTFRatingCountECreateProperties, PollLTFRatingCountEUpdateColumns, PollLTFRatingCountEUpdateProperties, PollLTFRatingCountEId, PollLTFRatingCountECascadeGraph, QPollLTFRatingCount>
	implements IBasePollLTFRatingCountDao {

	static diSet(): boolean {
		return diSet(94)
	}
	
	constructor() {
		super(94)
	}
}


export interface IBasePollLTFStateDao
  extends IDao<IPollLTFState, PollLTFStateESelect, PollLTFStateECreateProperties, PollLTFStateEUpdateColumns, PollLTFStateEUpdateProperties, PollLTFStateEId, PollLTFStateECascadeGraph, QPollLTFState> {
}

export class BasePollLTFStateDao
  extends SQDIDao<IPollLTFState, PollLTFStateESelect, PollLTFStateECreateProperties, PollLTFStateEUpdateColumns, PollLTFStateEUpdateProperties, PollLTFStateEId, PollLTFStateECascadeGraph, QPollLTFState>
	implements IBasePollLTFStateDao {

	static diSet(): boolean {
		return diSet(28)
	}
	
	constructor() {
		super(28)
	}
}


export interface IBasePollLTFTownDao
  extends IDao<IPollLTFTown, PollLTFTownESelect, PollLTFTownECreateProperties, PollLTFTownEUpdateColumns, PollLTFTownEUpdateProperties, PollLTFTownEId, PollLTFTownECascadeGraph, QPollLTFTown> {
}

export class BasePollLTFTownDao
  extends SQDIDao<IPollLTFTown, PollLTFTownESelect, PollLTFTownECreateProperties, PollLTFTownEUpdateColumns, PollLTFTownEUpdateProperties, PollLTFTownEId, PollLTFTownECascadeGraph, QPollLTFTown>
	implements IBasePollLTFTownDao {

	static diSet(): boolean {
		return diSet(29)
	}
	
	constructor() {
		super(29)
	}
}


export interface IBasePollLTFVoteCountDao
  extends IDao<IPollLTFVoteCount, PollLTFVoteCountESelect, PollLTFVoteCountECreateProperties, PollLTFVoteCountEUpdateColumns, PollLTFVoteCountEUpdateProperties, PollLTFVoteCountEId, PollLTFVoteCountECascadeGraph, QPollLTFVoteCount> {
}

export class BasePollLTFVoteCountDao
  extends SQDIDao<IPollLTFVoteCount, PollLTFVoteCountESelect, PollLTFVoteCountECreateProperties, PollLTFVoteCountEUpdateColumns, PollLTFVoteCountEUpdateProperties, PollLTFVoteCountEId, PollLTFVoteCountECascadeGraph, QPollLTFVoteCount>
	implements IBasePollLTFVoteCountDao {

	static diSet(): boolean {
		return diSet(95)
	}
	
	constructor() {
		super(95)
	}
}


export interface IBasePollLocationTimeFrameDao
  extends IDao<IPollLocationTimeFrame, PollLocationTimeFrameESelect, PollLocationTimeFrameECreateProperties, PollLocationTimeFrameEUpdateColumns, PollLocationTimeFrameEUpdateProperties, PollLocationTimeFrameEId, PollLocationTimeFrameECascadeGraph, QPollLocationTimeFrame> {
}

export class BasePollLocationTimeFrameDao
  extends SQDIDao<IPollLocationTimeFrame, PollLocationTimeFrameESelect, PollLocationTimeFrameECreateProperties, PollLocationTimeFrameEUpdateColumns, PollLocationTimeFrameEUpdateProperties, PollLocationTimeFrameEId, PollLocationTimeFrameECascadeGraph, QPollLocationTimeFrame>
	implements IBasePollLocationTimeFrameDao {

	static diSet(): boolean {
		return diSet(30)
	}
	
	constructor() {
		super(30)
	}
}


export interface IBasePollOpinionDao
  extends IDao<IPollOpinion, PollOpinionESelect, PollOpinionECreateProperties, PollOpinionEUpdateColumns, PollOpinionEUpdateProperties, PollOpinionEId, PollOpinionECascadeGraph, QPollOpinion> {
}

export class BasePollOpinionDao
  extends SQDIDao<IPollOpinion, PollOpinionESelect, PollOpinionECreateProperties, PollOpinionEUpdateColumns, PollOpinionEUpdateProperties, PollOpinionEId, PollOpinionECascadeGraph, QPollOpinion>
	implements IBasePollOpinionDao {

	static diSet(): boolean {
		return diSet(80)
	}
	
	constructor() {
		super(80)
	}
}


export interface IBasePollOpinionRatingCountDao
  extends IDao<IPollOpinionRatingCount, PollOpinionRatingCountESelect, PollOpinionRatingCountECreateProperties, PollOpinionRatingCountEUpdateColumns, PollOpinionRatingCountEUpdateProperties, PollOpinionRatingCountEId, PollOpinionRatingCountECascadeGraph, QPollOpinionRatingCount> {
}

export class BasePollOpinionRatingCountDao
  extends SQDIDao<IPollOpinionRatingCount, PollOpinionRatingCountESelect, PollOpinionRatingCountECreateProperties, PollOpinionRatingCountEUpdateColumns, PollOpinionRatingCountEUpdateProperties, PollOpinionRatingCountEId, PollOpinionRatingCountECascadeGraph, QPollOpinionRatingCount>
	implements IBasePollOpinionRatingCountDao {

	static diSet(): boolean {
		return diSet(57)
	}
	
	constructor() {
		super(57)
	}
}


export interface IBasePollOpinionVersionDao
  extends IDao<IPollOpinionVersion, PollOpinionVersionESelect, PollOpinionVersionECreateProperties, PollOpinionVersionEUpdateColumns, PollOpinionVersionEUpdateProperties, PollOpinionVersionEId, PollOpinionVersionECascadeGraph, QPollOpinionVersion> {
}

export class BasePollOpinionVersionDao
  extends SQDIDao<IPollOpinionVersion, PollOpinionVersionESelect, PollOpinionVersionECreateProperties, PollOpinionVersionEUpdateColumns, PollOpinionVersionEUpdateProperties, PollOpinionVersionEId, PollOpinionVersionECascadeGraph, QPollOpinionVersion>
	implements IBasePollOpinionVersionDao {

	static diSet(): boolean {
		return diSet(79)
	}
	
	constructor() {
		super(79)
	}
}


export interface IBasePollOpinionVersionRatingDao
  extends IDao<IPollOpinionVersionRating, PollOpinionVersionRatingESelect, PollOpinionVersionRatingECreateProperties, PollOpinionVersionRatingEUpdateColumns, PollOpinionVersionRatingEUpdateProperties, PollOpinionVersionRatingEId, PollOpinionVersionRatingECascadeGraph, QPollOpinionVersionRating> {
}

export class BasePollOpinionVersionRatingDao
  extends SQDIDao<IPollOpinionVersionRating, PollOpinionVersionRatingESelect, PollOpinionVersionRatingECreateProperties, PollOpinionVersionRatingEUpdateColumns, PollOpinionVersionRatingEUpdateProperties, PollOpinionVersionRatingEId, PollOpinionVersionRatingECascadeGraph, QPollOpinionVersionRating>
	implements IBasePollOpinionVersionRatingDao {

	static diSet(): boolean {
		return diSet(78)
	}
	
	constructor() {
		super(78)
	}
}


export interface IBasePollOpinionVersionRatingCountDao
  extends IDao<IPollOpinionVersionRatingCount, PollOpinionVersionRatingCountESelect, PollOpinionVersionRatingCountECreateProperties, PollOpinionVersionRatingCountEUpdateColumns, PollOpinionVersionRatingCountEUpdateProperties, PollOpinionVersionRatingCountEId, PollOpinionVersionRatingCountECascadeGraph, QPollOpinionVersionRatingCount> {
}

export class BasePollOpinionVersionRatingCountDao
  extends SQDIDao<IPollOpinionVersionRatingCount, PollOpinionVersionRatingCountESelect, PollOpinionVersionRatingCountECreateProperties, PollOpinionVersionRatingCountEUpdateColumns, PollOpinionVersionRatingCountEUpdateProperties, PollOpinionVersionRatingCountEId, PollOpinionVersionRatingCountECascadeGraph, QPollOpinionVersionRatingCount>
	implements IBasePollOpinionVersionRatingCountDao {

	static diSet(): boolean {
		return diSet(66)
	}
	
	constructor() {
		super(66)
	}
}


export interface IBasePollOpinionVersionTranslationDao
  extends IDao<IPollOpinionVersionTranslation, PollOpinionVersionTranslationESelect, PollOpinionVersionTranslationECreateProperties, PollOpinionVersionTranslationEUpdateColumns, PollOpinionVersionTranslationEUpdateProperties, PollOpinionVersionTranslationEId, PollOpinionVersionTranslationECascadeGraph, QPollOpinionVersionTranslation> {
}

export class BasePollOpinionVersionTranslationDao
  extends SQDIDao<IPollOpinionVersionTranslation, PollOpinionVersionTranslationESelect, PollOpinionVersionTranslationECreateProperties, PollOpinionVersionTranslationEUpdateColumns, PollOpinionVersionTranslationEUpdateProperties, PollOpinionVersionTranslationEId, PollOpinionVersionTranslationECascadeGraph, QPollOpinionVersionTranslation>
	implements IBasePollOpinionVersionTranslationDao {

	static diSet(): boolean {
		return diSet(77)
	}
	
	constructor() {
		super(77)
	}
}


export interface IBasePollOpinionsCountDao
  extends IDao<IPollOpinionsCount, PollOpinionsCountESelect, PollOpinionsCountECreateProperties, PollOpinionsCountEUpdateColumns, PollOpinionsCountEUpdateProperties, PollOpinionsCountEId, PollOpinionsCountECascadeGraph, QPollOpinionsCount> {
}

export class BasePollOpinionsCountDao
  extends SQDIDao<IPollOpinionsCount, PollOpinionsCountESelect, PollOpinionsCountECreateProperties, PollOpinionsCountEUpdateColumns, PollOpinionsCountEUpdateProperties, PollOpinionsCountEId, PollOpinionsCountECascadeGraph, QPollOpinionsCount>
	implements IBasePollOpinionsCountDao {

	static diSet(): boolean {
		return diSet(6)
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
		return diSet(20)
	}
	
	constructor() {
		super(20)
	}
}


export interface IBasePollPositionVariationDao
  extends IDao<IPollPositionVariation, PollPositionVariationESelect, PollPositionVariationECreateProperties, PollPositionVariationEUpdateColumns, PollPositionVariationEUpdateProperties, PollPositionVariationEId, PollPositionVariationECascadeGraph, QPollPositionVariation> {
}

export class BasePollPositionVariationDao
  extends SQDIDao<IPollPositionVariation, PollPositionVariationESelect, PollPositionVariationECreateProperties, PollPositionVariationEUpdateColumns, PollPositionVariationEUpdateProperties, PollPositionVariationEId, PollPositionVariationECascadeGraph, QPollPositionVariation>
	implements IBasePollPositionVariationDao {

	static diSet(): boolean {
		return diSet(69)
	}
	
	constructor() {
		super(69)
	}
}


export interface IBasePollRatingCountDao
  extends IDao<IPollRatingCount, PollRatingCountESelect, PollRatingCountECreateProperties, PollRatingCountEUpdateColumns, PollRatingCountEUpdateProperties, PollRatingCountEId, PollRatingCountECascadeGraph, QPollRatingCount> {
}

export class BasePollRatingCountDao
  extends SQDIDao<IPollRatingCount, PollRatingCountESelect, PollRatingCountECreateProperties, PollRatingCountEUpdateColumns, PollRatingCountEUpdateProperties, PollRatingCountEId, PollRatingCountECascadeGraph, QPollRatingCount>
	implements IBasePollRatingCountDao {

	static diSet(): boolean {
		return diSet(21)
	}
	
	constructor() {
		super(21)
	}
}


export interface IBasePollTypeDao
  extends IDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType> {
}

export class BasePollTypeDao
  extends SQDIDao<IPollType, PollTypeESelect, PollTypeECreateProperties, PollTypeEUpdateColumns, PollTypeEUpdateProperties, PollTypeEId, PollTypeECascadeGraph, QPollType>
	implements IBasePollTypeDao {

	static diSet(): boolean {
		return diSet(31)
	}
	
	constructor() {
		super(31)
	}
}


export interface IBasePollVariationDao
  extends IDao<IPollVariation, PollVariationESelect, PollVariationECreateProperties, PollVariationEUpdateColumns, PollVariationEUpdateProperties, PollVariationEId, PollVariationECascadeGraph, QPollVariation> {
}

export class BasePollVariationDao
  extends SQDIDao<IPollVariation, PollVariationESelect, PollVariationECreateProperties, PollVariationEUpdateColumns, PollVariationEUpdateProperties, PollVariationEId, PollVariationECascadeGraph, QPollVariation>
	implements IBasePollVariationDao {

	static diSet(): boolean {
		return diSet(86)
	}
	
	constructor() {
		super(86)
	}
}


export interface IBasePollVariationFactorTranslationDao
  extends IDao<IPollVariationFactorTranslation, PollVariationFactorTranslationESelect, PollVariationFactorTranslationECreateProperties, PollVariationFactorTranslationEUpdateColumns, PollVariationFactorTranslationEUpdateProperties, PollVariationFactorTranslationEId, PollVariationFactorTranslationECascadeGraph, QPollVariationFactorTranslation> {
}

export class BasePollVariationFactorTranslationDao
  extends SQDIDao<IPollVariationFactorTranslation, PollVariationFactorTranslationESelect, PollVariationFactorTranslationECreateProperties, PollVariationFactorTranslationEUpdateColumns, PollVariationFactorTranslationEUpdateProperties, PollVariationFactorTranslationEId, PollVariationFactorTranslationECascadeGraph, QPollVariationFactorTranslation>
	implements IBasePollVariationFactorTranslationDao {

	static diSet(): boolean {
		return diSet(46)
	}
	
	constructor() {
		super(46)
	}
}


export interface IBasePollVariationLabelDao
  extends IDao<IPollVariationLabel, PollVariationLabelESelect, PollVariationLabelECreateProperties, PollVariationLabelEUpdateColumns, PollVariationLabelEUpdateProperties, PollVariationLabelEId, PollVariationLabelECascadeGraph, QPollVariationLabel> {
}

export class BasePollVariationLabelDao
  extends SQDIDao<IPollVariationLabel, PollVariationLabelESelect, PollVariationLabelECreateProperties, PollVariationLabelEUpdateColumns, PollVariationLabelEUpdateProperties, PollVariationLabelEId, PollVariationLabelECascadeGraph, QPollVariationLabel>
	implements IBasePollVariationLabelDao {

	static diSet(): boolean {
		return diSet(55)
	}
	
	constructor() {
		super(55)
	}
}


export interface IBasePollVariationOpinionCountDao
  extends IDao<IPollVariationOpinionCount, PollVariationOpinionCountESelect, PollVariationOpinionCountECreateProperties, PollVariationOpinionCountEUpdateColumns, PollVariationOpinionCountEUpdateProperties, PollVariationOpinionCountEId, PollVariationOpinionCountECascadeGraph, QPollVariationOpinionCount> {
}

export class BasePollVariationOpinionCountDao
  extends SQDIDao<IPollVariationOpinionCount, PollVariationOpinionCountESelect, PollVariationOpinionCountECreateProperties, PollVariationOpinionCountEUpdateColumns, PollVariationOpinionCountEUpdateProperties, PollVariationOpinionCountEId, PollVariationOpinionCountECascadeGraph, QPollVariationOpinionCount>
	implements IBasePollVariationOpinionCountDao {

	static diSet(): boolean {
		return diSet(81)
	}
	
	constructor() {
		super(81)
	}
}


export interface IBasePollVariationOpinionRatingCountDao
  extends IDao<IPollVariationOpinionRatingCount, PollVariationOpinionRatingCountESelect, PollVariationOpinionRatingCountECreateProperties, PollVariationOpinionRatingCountEUpdateColumns, PollVariationOpinionRatingCountEUpdateProperties, PollVariationOpinionRatingCountEId, PollVariationOpinionRatingCountECascadeGraph, QPollVariationOpinionRatingCount> {
}

export class BasePollVariationOpinionRatingCountDao
  extends SQDIDao<IPollVariationOpinionRatingCount, PollVariationOpinionRatingCountESelect, PollVariationOpinionRatingCountECreateProperties, PollVariationOpinionRatingCountEUpdateColumns, PollVariationOpinionRatingCountEUpdateProperties, PollVariationOpinionRatingCountEId, PollVariationOpinionRatingCountECascadeGraph, QPollVariationOpinionRatingCount>
	implements IBasePollVariationOpinionRatingCountDao {

	static diSet(): boolean {
		return diSet(82)
	}
	
	constructor() {
		super(82)
	}
}


export interface IBasePollVariationPositionTranslationDao
  extends IDao<IPollVariationPositionTranslation, PollVariationPositionTranslationESelect, PollVariationPositionTranslationECreateProperties, PollVariationPositionTranslationEUpdateColumns, PollVariationPositionTranslationEUpdateProperties, PollVariationPositionTranslationEId, PollVariationPositionTranslationECascadeGraph, QPollVariationPositionTranslation> {
}

export class BasePollVariationPositionTranslationDao
  extends SQDIDao<IPollVariationPositionTranslation, PollVariationPositionTranslationESelect, PollVariationPositionTranslationECreateProperties, PollVariationPositionTranslationEUpdateColumns, PollVariationPositionTranslationEUpdateProperties, PollVariationPositionTranslationEId, PollVariationPositionTranslationECascadeGraph, QPollVariationPositionTranslation>
	implements IBasePollVariationPositionTranslationDao {

	static diSet(): boolean {
		return diSet(50)
	}
	
	constructor() {
		super(50)
	}
}


export interface IBasePollVariationRatingCountDao
  extends IDao<IPollVariationRatingCount, PollVariationRatingCountESelect, PollVariationRatingCountECreateProperties, PollVariationRatingCountEUpdateColumns, PollVariationRatingCountEUpdateProperties, PollVariationRatingCountEId, PollVariationRatingCountECascadeGraph, QPollVariationRatingCount> {
}

export class BasePollVariationRatingCountDao
  extends SQDIDao<IPollVariationRatingCount, PollVariationRatingCountESelect, PollVariationRatingCountECreateProperties, PollVariationRatingCountEUpdateColumns, PollVariationRatingCountEUpdateProperties, PollVariationRatingCountEId, PollVariationRatingCountECascadeGraph, QPollVariationRatingCount>
	implements IBasePollVariationRatingCountDao {

	static diSet(): boolean {
		return diSet(83)
	}
	
	constructor() {
		super(83)
	}
}


export interface IBasePollVariationTranslationDao
  extends IDao<IPollVariationTranslation, PollVariationTranslationESelect, PollVariationTranslationECreateProperties, PollVariationTranslationEUpdateColumns, PollVariationTranslationEUpdateProperties, PollVariationTranslationEId, PollVariationTranslationECascadeGraph, QPollVariationTranslation> {
}

export class BasePollVariationTranslationDao
  extends SQDIDao<IPollVariationTranslation, PollVariationTranslationESelect, PollVariationTranslationECreateProperties, PollVariationTranslationEUpdateColumns, PollVariationTranslationEUpdateProperties, PollVariationTranslationEId, PollVariationTranslationECascadeGraph, QPollVariationTranslation>
	implements IBasePollVariationTranslationDao {

	static diSet(): boolean {
		return diSet(51)
	}
	
	constructor() {
		super(51)
	}
}


export interface IBasePollVariationTranslationOpinionCountDao
  extends IDao<IPollVariationTranslationOpinionCount, PollVariationTranslationOpinionCountESelect, PollVariationTranslationOpinionCountECreateProperties, PollVariationTranslationOpinionCountEUpdateColumns, PollVariationTranslationOpinionCountEUpdateProperties, PollVariationTranslationOpinionCountEId, PollVariationTranslationOpinionCountECascadeGraph, QPollVariationTranslationOpinionCount> {
}

export class BasePollVariationTranslationOpinionCountDao
  extends SQDIDao<IPollVariationTranslationOpinionCount, PollVariationTranslationOpinionCountESelect, PollVariationTranslationOpinionCountECreateProperties, PollVariationTranslationOpinionCountEUpdateColumns, PollVariationTranslationOpinionCountEUpdateProperties, PollVariationTranslationOpinionCountEId, PollVariationTranslationOpinionCountECascadeGraph, QPollVariationTranslationOpinionCount>
	implements IBasePollVariationTranslationOpinionCountDao {

	static diSet(): boolean {
		return diSet(40)
	}
	
	constructor() {
		super(40)
	}
}


export interface IBasePollVariationTranslationOpinionRatingCountDao
  extends IDao<IPollVariationTranslationOpinionRatingCount, PollVariationTranslationOpinionRatingCountESelect, PollVariationTranslationOpinionRatingCountECreateProperties, PollVariationTranslationOpinionRatingCountEUpdateColumns, PollVariationTranslationOpinionRatingCountEUpdateProperties, PollVariationTranslationOpinionRatingCountEId, PollVariationTranslationOpinionRatingCountECascadeGraph, QPollVariationTranslationOpinionRatingCount> {
}

export class BasePollVariationTranslationOpinionRatingCountDao
  extends SQDIDao<IPollVariationTranslationOpinionRatingCount, PollVariationTranslationOpinionRatingCountESelect, PollVariationTranslationOpinionRatingCountECreateProperties, PollVariationTranslationOpinionRatingCountEUpdateColumns, PollVariationTranslationOpinionRatingCountEUpdateProperties, PollVariationTranslationOpinionRatingCountEId, PollVariationTranslationOpinionRatingCountECascadeGraph, QPollVariationTranslationOpinionRatingCount>
	implements IBasePollVariationTranslationOpinionRatingCountDao {

	static diSet(): boolean {
		return diSet(41)
	}
	
	constructor() {
		super(41)
	}
}


export interface IBasePollVariationTranslationRatingCountDao
  extends IDao<IPollVariationTranslationRatingCount, PollVariationTranslationRatingCountESelect, PollVariationTranslationRatingCountECreateProperties, PollVariationTranslationRatingCountEUpdateColumns, PollVariationTranslationRatingCountEUpdateProperties, PollVariationTranslationRatingCountEId, PollVariationTranslationRatingCountECascadeGraph, QPollVariationTranslationRatingCount> {
}

export class BasePollVariationTranslationRatingCountDao
  extends SQDIDao<IPollVariationTranslationRatingCount, PollVariationTranslationRatingCountESelect, PollVariationTranslationRatingCountECreateProperties, PollVariationTranslationRatingCountEUpdateColumns, PollVariationTranslationRatingCountEUpdateProperties, PollVariationTranslationRatingCountEId, PollVariationTranslationRatingCountECascadeGraph, QPollVariationTranslationRatingCount>
	implements IBasePollVariationTranslationRatingCountDao {

	static diSet(): boolean {
		return diSet(42)
	}
	
	constructor() {
		super(42)
	}
}


export interface IBasePollVariationTranslationVoteCountDao
  extends IDao<IPollVariationTranslationVoteCount, PollVariationTranslationVoteCountESelect, PollVariationTranslationVoteCountECreateProperties, PollVariationTranslationVoteCountEUpdateColumns, PollVariationTranslationVoteCountEUpdateProperties, PollVariationTranslationVoteCountEId, PollVariationTranslationVoteCountECascadeGraph, QPollVariationTranslationVoteCount> {
}

export class BasePollVariationTranslationVoteCountDao
  extends SQDIDao<IPollVariationTranslationVoteCount, PollVariationTranslationVoteCountESelect, PollVariationTranslationVoteCountECreateProperties, PollVariationTranslationVoteCountEUpdateColumns, PollVariationTranslationVoteCountEUpdateProperties, PollVariationTranslationVoteCountEId, PollVariationTranslationVoteCountECascadeGraph, QPollVariationTranslationVoteCount>
	implements IBasePollVariationTranslationVoteCountDao {

	static diSet(): boolean {
		return diSet(43)
	}
	
	constructor() {
		super(43)
	}
}


export interface IBasePollVariationVoteCountDao
  extends IDao<IPollVariationVoteCount, PollVariationVoteCountESelect, PollVariationVoteCountECreateProperties, PollVariationVoteCountEUpdateColumns, PollVariationVoteCountEUpdateProperties, PollVariationVoteCountEId, PollVariationVoteCountECascadeGraph, QPollVariationVoteCount> {
}

export class BasePollVariationVoteCountDao
  extends SQDIDao<IPollVariationVoteCount, PollVariationVoteCountESelect, PollVariationVoteCountECreateProperties, PollVariationVoteCountEUpdateColumns, PollVariationVoteCountEUpdateProperties, PollVariationVoteCountEId, PollVariationVoteCountECascadeGraph, QPollVariationVoteCount>
	implements IBasePollVariationVoteCountDao {

	static diSet(): boolean {
		return diSet(84)
	}
	
	constructor() {
		super(84)
	}
}


export interface IBasePollVoteCountDao
  extends IDao<IPollVoteCount, PollVoteCountESelect, PollVoteCountECreateProperties, PollVoteCountEUpdateColumns, PollVoteCountEUpdateProperties, PollVoteCountEId, PollVoteCountECascadeGraph, QPollVoteCount> {
}

export class BasePollVoteCountDao
  extends SQDIDao<IPollVoteCount, PollVoteCountESelect, PollVoteCountECreateProperties, PollVoteCountEUpdateColumns, PollVoteCountEUpdateProperties, PollVoteCountEId, PollVoteCountECascadeGraph, QPollVoteCount>
	implements IBasePollVoteCountDao {

	static diSet(): boolean {
		return diSet(22)
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
		return diSet(47)
	}
	
	constructor() {
		super(47)
	}
}


export interface IBasePositionOpinionVersionDao
  extends IDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion> {
}

export class BasePositionOpinionVersionDao
  extends SQDIDao<IPositionOpinionVersion, PositionOpinionVersionESelect, PositionOpinionVersionECreateProperties, PositionOpinionVersionEUpdateColumns, PositionOpinionVersionEUpdateProperties, PositionOpinionVersionEId, PositionOpinionVersionECascadeGraph, QPositionOpinionVersion>
	implements IBasePositionOpinionVersionDao {

	static diSet(): boolean {
		return diSet(73)
	}
	
	constructor() {
		super(73)
	}
}


export interface IBasePositionOpinionVersionRatingDao
  extends IDao<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating> {
}

export class BasePositionOpinionVersionRatingDao
  extends SQDIDao<IPositionOpinionVersionRating, PositionOpinionVersionRatingESelect, PositionOpinionVersionRatingECreateProperties, PositionOpinionVersionRatingEUpdateColumns, PositionOpinionVersionRatingEUpdateProperties, PositionOpinionVersionRatingEId, PositionOpinionVersionRatingECascadeGraph, QPositionOpinionVersionRating>
	implements IBasePositionOpinionVersionRatingDao {

	static diSet(): boolean {
		return diSet(72)
	}
	
	constructor() {
		super(72)
	}
}


export interface IBasePositionOpinionVersionRatingCountDao
  extends IDao<IPositionOpinionVersionRatingCount, PositionOpinionVersionRatingCountESelect, PositionOpinionVersionRatingCountECreateProperties, PositionOpinionVersionRatingCountEUpdateColumns, PositionOpinionVersionRatingCountEUpdateProperties, PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountECascadeGraph, QPositionOpinionVersionRatingCount> {
}

export class BasePositionOpinionVersionRatingCountDao
  extends SQDIDao<IPositionOpinionVersionRatingCount, PositionOpinionVersionRatingCountESelect, PositionOpinionVersionRatingCountECreateProperties, PositionOpinionVersionRatingCountEUpdateColumns, PositionOpinionVersionRatingCountEUpdateProperties, PositionOpinionVersionRatingCountEId, PositionOpinionVersionRatingCountECascadeGraph, QPositionOpinionVersionRatingCount>
	implements IBasePositionOpinionVersionRatingCountDao {

	static diSet(): boolean {
		return diSet(70)
	}
	
	constructor() {
		super(70)
	}
}


export interface IBasePositionOpinionVersionTranslationDao
  extends IDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation> {
}

export class BasePositionOpinionVersionTranslationDao
  extends SQDIDao<IPositionOpinionVersionTranslation, PositionOpinionVersionTranslationESelect, PositionOpinionVersionTranslationECreateProperties, PositionOpinionVersionTranslationEUpdateColumns, PositionOpinionVersionTranslationEUpdateProperties, PositionOpinionVersionTranslationEId, PositionOpinionVersionTranslationECascadeGraph, QPositionOpinionVersionTranslation>
	implements IBasePositionOpinionVersionTranslationDao {

	static diSet(): boolean {
		return diSet(71)
	}
	
	constructor() {
		super(71)
	}
}


export interface IBasePositionVariationDao
  extends IDao<IPositionVariation, PositionVariationESelect, PositionVariationECreateProperties, PositionVariationEUpdateColumns, PositionVariationEUpdateProperties, PositionVariationEId, PositionVariationECascadeGraph, QPositionVariation> {
}

export class BasePositionVariationDao
  extends SQDIDao<IPositionVariation, PositionVariationESelect, PositionVariationECreateProperties, PositionVariationEUpdateColumns, PositionVariationEUpdateProperties, PositionVariationEId, PositionVariationECascadeGraph, QPositionVariation>
	implements IBasePositionVariationDao {

	static diSet(): boolean {
		return diSet(48)
	}
	
	constructor() {
		super(48)
	}
}


export interface IBasePositionVariationTranslationDao
  extends IDao<IPositionVariationTranslation, PositionVariationTranslationESelect, PositionVariationTranslationECreateProperties, PositionVariationTranslationEUpdateColumns, PositionVariationTranslationEUpdateProperties, PositionVariationTranslationEId, PositionVariationTranslationECascadeGraph, QPositionVariationTranslation> {
}

export class BasePositionVariationTranslationDao
  extends SQDIDao<IPositionVariationTranslation, PositionVariationTranslationESelect, PositionVariationTranslationECreateProperties, PositionVariationTranslationEUpdateColumns, PositionVariationTranslationEUpdateProperties, PositionVariationTranslationEId, PositionVariationTranslationECascadeGraph, QPositionVariationTranslation>
	implements IBasePositionVariationTranslationDao {

	static diSet(): boolean {
		return diSet(49)
	}
	
	constructor() {
		super(49)
	}
}


export interface IBaseRatingDao
  extends IDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating> {
}

export class BaseRatingDao
  extends SQDIDao<IRating, RatingESelect, RatingECreateProperties, RatingEUpdateColumns, RatingEUpdateProperties, RatingEId, RatingECascadeGraph, QRating>
	implements IBaseRatingDao {

	static diSet(): boolean {
		return diSet(19)
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
		return diSet(91)
	}
	
	constructor() {
		super(91)
	}
}


export interface IBaseRatingReasonTranslationDao
  extends IDao<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation> {
}

export class BaseRatingReasonTranslationDao
  extends SQDIDao<IRatingReasonTranslation, RatingReasonTranslationESelect, RatingReasonTranslationECreateProperties, RatingReasonTranslationEUpdateColumns, RatingReasonTranslationEUpdateProperties, RatingReasonTranslationEId, RatingReasonTranslationECascadeGraph, QRatingReasonTranslation>
	implements IBaseRatingReasonTranslationDao {

	static diSet(): boolean {
		return diSet(90)
	}
	
	constructor() {
		super(90)
	}
}


export interface IBaseRatingSettingDao
  extends IDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting> {
}

export class BaseRatingSettingDao
  extends SQDIDao<IRatingSetting, RatingSettingESelect, RatingSettingECreateProperties, RatingSettingEUpdateColumns, RatingSettingEUpdateProperties, RatingSettingEId, RatingSettingECascadeGraph, QRatingSetting>
	implements IBaseRatingSettingDao {

	static diSet(): boolean {
		return diSet(15)
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
		return diSet(17)
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
		return diSet(18)
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
		return diSet(10)
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
		return diSet(9)
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
		return diSet(32)
	}
	
	constructor() {
		super(32)
	}
}


export interface IBaseTownDao
  extends IDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown> {
}

export class BaseTownDao
  extends SQDIDao<ITown, TownESelect, TownECreateProperties, TownEUpdateColumns, TownEUpdateProperties, TownEId, TownECascadeGraph, QTown>
	implements IBaseTownDao {

	static diSet(): boolean {
		return diSet(12)
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
		return diSet(33)
	}
	
	constructor() {
		super(33)
	}
}


export interface IBaseUserAccountDao
  extends IDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount> {
}

export class BaseUserAccountDao
  extends SQDIDao<IUserAccount, UserAccountESelect, UserAccountECreateProperties, UserAccountEUpdateColumns, UserAccountEUpdateProperties, UserAccountEId, UserAccountECascadeGraph, QUserAccount>
	implements IBaseUserAccountDao {

	static diSet(): boolean {
		return diSet(4)
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
		return diSet(35)
	}
	
	constructor() {
		super(35)
	}
}


export interface IBaseUserPollRatingDao
  extends IDao<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating> {
}

export class BaseUserPollRatingDao
  extends SQDIDao<IUserPollRating, UserPollRatingESelect, UserPollRatingECreateProperties, UserPollRatingEUpdateColumns, UserPollRatingEUpdateProperties, UserPollRatingEId, UserPollRatingECascadeGraph, QUserPollRating>
	implements IBaseUserPollRatingDao {

	static diSet(): boolean {
		return diSet(34)
	}
	
	constructor() {
		super(34)
	}
}


export interface IBaseUserPollVariationDao
  extends IDao<IUserPollVariation, UserPollVariationESelect, UserPollVariationECreateProperties, UserPollVariationEUpdateColumns, UserPollVariationEUpdateProperties, UserPollVariationEId, UserPollVariationECascadeGraph, QUserPollVariation> {
}

export class BaseUserPollVariationDao
  extends SQDIDao<IUserPollVariation, UserPollVariationESelect, UserPollVariationECreateProperties, UserPollVariationEUpdateColumns, UserPollVariationEUpdateProperties, UserPollVariationEId, UserPollVariationECascadeGraph, QUserPollVariation>
	implements IBaseUserPollVariationDao {

	static diSet(): boolean {
		return diSet(37)
	}
	
	constructor() {
		super(37)
	}
}


export interface IBaseUserPollVariationRatingDao
  extends IDao<IUserPollVariationRating, UserPollVariationRatingESelect, UserPollVariationRatingECreateProperties, UserPollVariationRatingEUpdateColumns, UserPollVariationRatingEUpdateProperties, UserPollVariationRatingEId, UserPollVariationRatingECascadeGraph, QUserPollVariationRating> {
}

export class BaseUserPollVariationRatingDao
  extends SQDIDao<IUserPollVariationRating, UserPollVariationRatingESelect, UserPollVariationRatingECreateProperties, UserPollVariationRatingEUpdateColumns, UserPollVariationRatingEUpdateProperties, UserPollVariationRatingEId, UserPollVariationRatingECascadeGraph, QUserPollVariationRating>
	implements IBaseUserPollVariationRatingDao {

	static diSet(): boolean {
		return diSet(36)
	}
	
	constructor() {
		super(36)
	}
}


export interface IBaseUserPollVariationTranslationDao
  extends IDao<IUserPollVariationTranslation, UserPollVariationTranslationESelect, UserPollVariationTranslationECreateProperties, UserPollVariationTranslationEUpdateColumns, UserPollVariationTranslationEUpdateProperties, UserPollVariationTranslationEId, UserPollVariationTranslationECascadeGraph, QUserPollVariationTranslation> {
}

export class BaseUserPollVariationTranslationDao
  extends SQDIDao<IUserPollVariationTranslation, UserPollVariationTranslationESelect, UserPollVariationTranslationECreateProperties, UserPollVariationTranslationEUpdateColumns, UserPollVariationTranslationEUpdateProperties, UserPollVariationTranslationEId, UserPollVariationTranslationECascadeGraph, QUserPollVariationTranslation>
	implements IBaseUserPollVariationTranslationDao {

	static diSet(): boolean {
		return diSet(38)
	}
	
	constructor() {
		super(38)
	}
}


export interface IBaseUserPollVariationTranslationRatingDao
  extends IDao<IUserPollVariationTranslationRating, UserPollVariationTranslationRatingESelect, UserPollVariationTranslationRatingECreateProperties, UserPollVariationTranslationRatingEUpdateColumns, UserPollVariationTranslationRatingEUpdateProperties, UserPollVariationTranslationRatingEId, UserPollVariationTranslationRatingECascadeGraph, QUserPollVariationTranslationRating> {
}

export class BaseUserPollVariationTranslationRatingDao
  extends SQDIDao<IUserPollVariationTranslationRating, UserPollVariationTranslationRatingESelect, UserPollVariationTranslationRatingECreateProperties, UserPollVariationTranslationRatingEUpdateColumns, UserPollVariationTranslationRatingEUpdateProperties, UserPollVariationTranslationRatingEId, UserPollVariationTranslationRatingECascadeGraph, QUserPollVariationTranslationRating>
	implements IBaseUserPollVariationTranslationRatingDao {

	static diSet(): boolean {
		return diSet(39)
	}
	
	constructor() {
		super(39)
	}
}


export interface IBaseVoteDao
  extends IDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote> {
}

export class BaseVoteDao
  extends SQDIDao<IVote, VoteESelect, VoteECreateProperties, VoteEUpdateColumns, VoteEUpdateProperties, VoteEId, VoteECascadeGraph, QVote>
	implements IBaseVoteDao {

	static diSet(): boolean {
		return diSet(61)
	}
	
	constructor() {
		super(61)
	}
}


export interface IBaseVoteFactorDao
  extends IDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor> {
}

export class BaseVoteFactorDao
  extends SQDIDao<IVoteFactor, VoteFactorESelect, VoteFactorECreateProperties, VoteFactorEUpdateColumns, VoteFactorEUpdateProperties, VoteFactorEId, VoteFactorECascadeGraph, QVoteFactor>
	implements IBaseVoteFactorDao {

	static diSet(): boolean {
		return diSet(64)
	}
	
	constructor() {
		super(64)
	}
}


export interface IBaseVoteFactorTypeDao
  extends IDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType> {
}

export class BaseVoteFactorTypeDao
  extends SQDIDao<IVoteFactorType, VoteFactorTypeESelect, VoteFactorTypeECreateProperties, VoteFactorTypeEUpdateColumns, VoteFactorTypeEUpdateProperties, VoteFactorTypeEId, VoteFactorTypeECascadeGraph, QVoteFactorType>
	implements IBaseVoteFactorTypeDao {

	static diSet(): boolean {
		return diSet(63)
	}
	
	constructor() {
		super(63)
	}
}


export interface IBaseVoteTypeDao
  extends IDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType> {
}

export class BaseVoteTypeDao
  extends SQDIDao<IVoteType, VoteTypeESelect, VoteTypeECreateProperties, VoteTypeEUpdateColumns, VoteTypeEUpdateProperties, VoteTypeEId, VoteTypeECascadeGraph, QVoteType>
	implements IBaseVoteTypeDao {

	static diSet(): boolean {
		return diSet(60)
	}
	
	constructor() {
		super(60)
	}
}


export interface IBaseVoteVariationDao
  extends IDao<IVoteVariation, VoteVariationESelect, VoteVariationECreateProperties, VoteVariationEUpdateColumns, VoteVariationEUpdateProperties, VoteVariationEId, VoteVariationECascadeGraph, QVoteVariation> {
}

export class BaseVoteVariationDao
  extends SQDIDao<IVoteVariation, VoteVariationESelect, VoteVariationECreateProperties, VoteVariationEUpdateColumns, VoteVariationEUpdateProperties, VoteVariationEId, VoteVariationECascadeGraph, QVoteVariation>
	implements IBaseVoteVariationDao {

	static diSet(): boolean {
		return diSet(65)
	}
	
	constructor() {
		super(65)
	}
}
