"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const air_control_1 = require("@airport/air-control");
const check_in_1 = require("@airport/check-in");
const di_1 = require("@airport/di");
const ground_control_1 = require("@airport/ground-control");
const ddl_1 = require("../ddl/ddl");
const __constructors__ = {
    Actor: ddl_1.Actor,
    AgeSuitableRow: ddl_1.AgeSuitableRow,
    Application: ddl_1.Application,
    Continent: ddl_1.Continent,
    Country: ddl_1.Country,
    CountryTown: ddl_1.CountryTown,
    County: ddl_1.County,
    CountyTown: ddl_1.CountyTown,
    DesignPattern: ddl_1.DesignPattern,
    Device: ddl_1.Device,
    Emoji: ddl_1.Emoji,
    Factor: ddl_1.Factor,
    FactorOpinionVersion: ddl_1.FactorOpinionVersion,
    FactorOpinionVersionTranslation: ddl_1.FactorOpinionVersionTranslation,
    FactorPosition: ddl_1.FactorPosition,
    FactorTranslation: ddl_1.FactorTranslation,
    ImmutableActorRow: ddl_1.ImmutableActorRow,
    ImmutableRow: ddl_1.ImmutableRow,
    Language: ddl_1.Language,
    MutableActorRow: ddl_1.MutableActorRow,
    MutableRow: ddl_1.MutableRow,
    Outcome: ddl_1.Outcome,
    OutcomeOpinionVersion: ddl_1.OutcomeOpinionVersion,
    OutcomeOpinionVersionTranslation: ddl_1.OutcomeOpinionVersionTranslation,
    OutcomeTranslation: ddl_1.OutcomeTranslation,
    Poll: ddl_1.Poll,
    PollRevision: ddl_1.PollRevision,
    PollRevisionFactorPosition: ddl_1.PollRevisionFactorPosition,
    PollRevisionOpinion: ddl_1.PollRevisionOpinion,
    PollRevisionOpinionRating: ddl_1.PollRevisionOpinionRating,
    PollRevisionOpinionVersion: ddl_1.PollRevisionOpinionVersion,
    PollRevisionOpinionVersionTranslation: ddl_1.PollRevisionOpinionVersionTranslation,
    PollRevisionRating: ddl_1.PollRevisionRating,
    PollRevisionTranslation: ddl_1.PollRevisionTranslation,
    PollRevisionTranslationRating: ddl_1.PollRevisionTranslationRating,
    PollRun: ddl_1.PollRun,
    PollRunContinent: ddl_1.PollRunContinent,
    PollRunCountry: ddl_1.PollRunCountry,
    PollRunCounty: ddl_1.PollRunCounty,
    PollRunState: ddl_1.PollRunState,
    PollRunTown: ddl_1.PollRunTown,
    PollType: ddl_1.PollType,
    Position: ddl_1.Position,
    PositionOpinionVersion: ddl_1.PositionOpinionVersion,
    PositionOpinionVersionTranslation: ddl_1.PositionOpinionVersionTranslation,
    PositionTranslation: ddl_1.PositionTranslation,
    Rating: ddl_1.Rating,
    RatingSetting: ddl_1.RatingSetting,
    RatingType: ddl_1.RatingType,
    Skin: ddl_1.Skin,
    State: ddl_1.State,
    StateTown: ddl_1.StateTown,
    SystemGeneratedRow: ddl_1.SystemGeneratedRow,
    Theme: ddl_1.Theme,
    Town: ddl_1.Town,
    TranslationType: ddl_1.TranslationType,
    UserAccount: ddl_1.UserAccount,
    Vote: ddl_1.Vote,
    VoteFactor: ddl_1.VoteFactor,
    VoteFactorType: ddl_1.VoteFactorType,
    VoteType: ddl_1.VoteType,
    VoteVersion: ddl_1.VoteVersion
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