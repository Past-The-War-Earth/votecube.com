"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const check_in_1 = require("@airport/check-in");
const di_1 = require("@airport/di");
const ground_control_1 = require("@airport/ground-control");
const actor_1 = require("../ddl/user/actor");
const agesuitablerow_1 = require("../ddl/infrastructure/row/agesuitablerow");
const application_1 = require("../ddl/user/application");
const continent_1 = require("../ddl/location/continent");
const country_1 = require("../ddl/location/country");
const countrytown_1 = require("../ddl/location/countrytown");
const county_1 = require("../ddl/location/county");
const countytown_1 = require("../ddl/location/countytown");
const designpattern_1 = require("../ddl/factor/position/designpattern");
const device_1 = require("../ddl/user/device");
const emoji_1 = require("../ddl/factor/position/emoji");
const factor_1 = require("../ddl/factor/factor");
const factoropinionversion_1 = require("../ddl/opinion/factoropinionversion");
const factoropinionversiontranslation_1 = require("../ddl/opinion/translation/factoropinionversiontranslation");
const factorposition_1 = require("../ddl/factor/position/factorposition");
const factortranslation_1 = require("../ddl/factor/factortranslation");
const immutableactorrow_1 = require("../ddl/infrastructure/row/immutableactorrow");
const immutablerow_1 = require("../ddl/infrastructure/row/immutablerow");
const language_1 = require("../ddl/infrastructure/language");
const mutableactorrow_1 = require("../ddl/infrastructure/row/mutableactorrow");
const mutablerow_1 = require("../ddl/infrastructure/row/mutablerow");
const outcome_1 = require("../ddl/poll/revision/outcome");
const outcomeopinionversion_1 = require("../ddl/opinion/outcomeopinionversion");
const outcomeopinionversiontranslation_1 = require("../ddl/opinion/translation/outcomeopinionversiontranslation");
const outcometranslation_1 = require("../ddl/poll/revision/translation/outcometranslation");
const poll_1 = require("../ddl/poll/poll");
const pollrevision_1 = require("../ddl/poll/revision/pollrevision");
const pollrevisionfactorposition_1 = require("../ddl/poll/revision/pollrevisionfactorposition");
const pollrevisionopinion_1 = require("../ddl/opinion/pollrevisionopinion");
const pollrevisionopinionrating_1 = require("../ddl/opinion/rating/pollrevisionopinionrating");
const pollrevisionopinionversion_1 = require("../ddl/opinion/pollrevisionopinionversion");
const pollrevisionopinionversiontranslation_1 = require("../ddl/opinion/translation/pollrevisionopinionversiontranslation");
const pollrevisionrating_1 = require("../ddl/poll/rating/pollrevisionrating");
const pollrevisiontranslation_1 = require("../ddl/poll/revision/translation/pollrevisiontranslation");
const pollrevisiontranslationrating_1 = require("../ddl/poll/rating/pollrevisiontranslationrating");
const pollrun_1 = require("../ddl/poll/run/pollrun");
const pollruncontinent_1 = require("../ddl/poll/run/location/pollruncontinent");
const pollruncountry_1 = require("../ddl/poll/run/location/pollruncountry");
const pollruncounty_1 = require("../ddl/poll/run/location/pollruncounty");
const pollrunstate_1 = require("../ddl/poll/run/location/pollrunstate");
const pollruntown_1 = require("../ddl/poll/run/location/pollruntown");
const polltype_1 = require("../ddl/poll/polltype");
const position_1 = require("../ddl/factor/position/position");
const positionopinionversion_1 = require("../ddl/opinion/positionopinionversion");
const positionopinionversiontranslation_1 = require("../ddl/opinion/translation/positionopinionversiontranslation");
const positiontranslation_1 = require("../ddl/factor/position/positiontranslation");
const rating_1 = require("../ddl/infrastructure/rating/rating");
const ratingsetting_1 = require("../ddl/infrastructure/rating/ratingsetting");
const ratingtype_1 = require("../ddl/infrastructure/rating/ratingtype");
const skin_1 = require("../ddl/factor/skin");
const state_1 = require("../ddl/location/state");
const statetown_1 = require("../ddl/location/statetown");
const systemgeneratedrow_1 = require("../ddl/infrastructure/row/systemgeneratedrow");
const theme_1 = require("../ddl/poll/theme");
const town_1 = require("../ddl/location/town");
const translationtype_1 = require("../ddl/infrastructure/translationtype");
const useraccount_1 = require("../ddl/user/useraccount");
const vote_1 = require("../ddl/vote/vote");
const votefactor_1 = require("../ddl/vote/votefactor");
const votefactortype_1 = require("../ddl/vote/votefactortype");
const votetype_1 = require("../ddl/vote/votetype");
const voteversion_1 = require("../ddl/vote/voteversion");
const __constructors__ = {
    Actor: actor_1.Actor,
    AgeSuitableRow: agesuitablerow_1.AgeSuitableRow,
    Application: application_1.Application,
    Continent: continent_1.Continent,
    Country: country_1.Country,
    CountryTown: countrytown_1.CountryTown,
    County: county_1.County,
    CountyTown: countytown_1.CountyTown,
    DesignPattern: designpattern_1.DesignPattern,
    Device: device_1.Device,
    Emoji: emoji_1.Emoji,
    Factor: factor_1.Factor,
    FactorOpinionVersion: factoropinionversion_1.FactorOpinionVersion,
    FactorOpinionVersionTranslation: factoropinionversiontranslation_1.FactorOpinionVersionTranslation,
    FactorPosition: factorposition_1.FactorPosition,
    FactorTranslation: factortranslation_1.FactorTranslation,
    ImmutableActorRow: immutableactorrow_1.ImmutableActorRow,
    ImmutableRow: immutablerow_1.ImmutableRow,
    Language: language_1.Language,
    MutableActorRow: mutableactorrow_1.MutableActorRow,
    MutableRow: mutablerow_1.MutableRow,
    Outcome: outcome_1.Outcome,
    OutcomeOpinionVersion: outcomeopinionversion_1.OutcomeOpinionVersion,
    OutcomeOpinionVersionTranslation: outcomeopinionversiontranslation_1.OutcomeOpinionVersionTranslation,
    OutcomeTranslation: outcometranslation_1.OutcomeTranslation,
    Poll: poll_1.Poll,
    PollRevision: pollrevision_1.PollRevision,
    PollRevisionFactorPosition: pollrevisionfactorposition_1.PollRevisionFactorPosition,
    PollRevisionOpinion: pollrevisionopinion_1.PollRevisionOpinion,
    PollRevisionOpinionRating: pollrevisionopinionrating_1.PollRevisionOpinionRating,
    PollRevisionOpinionVersion: pollrevisionopinionversion_1.PollRevisionOpinionVersion,
    PollRevisionOpinionVersionTranslation: pollrevisionopinionversiontranslation_1.PollRevisionOpinionVersionTranslation,
    PollRevisionRating: pollrevisionrating_1.PollRevisionRating,
    PollRevisionTranslation: pollrevisiontranslation_1.PollRevisionTranslation,
    PollRevisionTranslationRating: pollrevisiontranslationrating_1.PollRevisionTranslationRating,
    PollRun: pollrun_1.PollRun,
    PollRunContinent: pollruncontinent_1.PollRunContinent,
    PollRunCountry: pollruncountry_1.PollRunCountry,
    PollRunCounty: pollruncounty_1.PollRunCounty,
    PollRunState: pollrunstate_1.PollRunState,
    PollRunTown: pollruntown_1.PollRunTown,
    PollType: polltype_1.PollType,
    Position: position_1.Position,
    PositionOpinionVersion: positionopinionversion_1.PositionOpinionVersion,
    PositionOpinionVersionTranslation: positionopinionversiontranslation_1.PositionOpinionVersionTranslation,
    PositionTranslation: positiontranslation_1.PositionTranslation,
    Rating: rating_1.Rating,
    RatingSetting: ratingsetting_1.RatingSetting,
    RatingType: ratingtype_1.RatingType,
    Skin: skin_1.Skin,
    State: state_1.State,
    StateTown: statetown_1.StateTown,
    SystemGeneratedRow: systemgeneratedrow_1.SystemGeneratedRow,
    Theme: theme_1.Theme,
    Town: town_1.Town,
    TranslationType: translationtype_1.TranslationType,
    UserAccount: useraccount_1.UserAccount,
    Vote: vote_1.Vote,
    VoteFactor: votefactor_1.VoteFactor,
    VoteFactorType: votefactortype_1.VoteFactorType,
    VoteType: votetype_1.VoteType,
    VoteVersion: voteversion_1.VoteVersion
};
exports.Q_SCHEMA = {
    __constructors__,
    domain: 'public',
    name: '@votecube/relational-db'
};
exports.Q = exports.Q_SCHEMA;
function diSet(dbEntityId) {
    return check_in_1.diSet(exports.Q.__dbSchema__, dbEntityId);
}
exports.diSet = diSet;
function duoDiSet(dbEntityId) {
    return check_in_1.duoDiSet(exports.Q.__dbSchema__, dbEntityId);
}
exports.duoDiSet = duoDiSet;
di_1.DI.db().get(air_control_1.AIR_DB).then((airDb) => {
    airDb.QM[ground_control_1.getSchemaName(exports.Q_SCHEMA)] = exports.Q;
});
//# sourceMappingURL=qSchema.js.map