import { AIRPORT_DATABASE } from '@airport/air-control';
import { diSet as dS, duoDiSet as ddS } from '@airport/check-in';
import { DI } from '@airport/di';
import { getSchemaName } from '@airport/ground-control';
import { Actor, AgeSuitableRow, Application, Continent, Country, CountryTown, County, CountyTown, DesignPattern, Device, Emoji, Factor, FactorOpinionVersion, FactorOpinionVersionTranslation, FactorPosition, FactorTranslation, ImmutableActorRow, ImmutableRow, Language, MutableActorRow, MutableRow, Outcome, OutcomeOpinionVersion, OutcomeOpinionVersionTranslation, OutcomeTranslation, Poll, PollRevision, PollRevisionFactorPosition, PollRevisionOpinion, PollRevisionOpinionRating, PollRevisionOpinionVersion, PollRevisionOpinionVersionTranslation, PollRevisionRating, PollRevisionTranslation, PollRevisionTranslationRating, PollRun, PollRunContinent, PollRunCountry, PollRunCounty, PollRunState, PollRunTown, PollType, Position, PositionOpinionVersion, PositionOpinionVersionTranslation, PositionTranslation, Rating, RatingSetting, RatingType, Skin, State, StateTown, SystemGeneratedRow, Theme, Town, TranslationType, UserAccount, Vote, VoteFactor, VoteFactorType, VoteType, VoteVersion } from '../ddl/ddl';
const __constructors__ = {
    Actor: Actor,
    AgeSuitableRow: AgeSuitableRow,
    Application: Application,
    Continent: Continent,
    Country: Country,
    CountryTown: CountryTown,
    County: County,
    CountyTown: CountyTown,
    DesignPattern: DesignPattern,
    Device: Device,
    Emoji: Emoji,
    Factor: Factor,
    FactorOpinionVersion: FactorOpinionVersion,
    FactorOpinionVersionTranslation: FactorOpinionVersionTranslation,
    FactorPosition: FactorPosition,
    FactorTranslation: FactorTranslation,
    ImmutableActorRow: ImmutableActorRow,
    ImmutableRow: ImmutableRow,
    Language: Language,
    MutableActorRow: MutableActorRow,
    MutableRow: MutableRow,
    Outcome: Outcome,
    OutcomeOpinionVersion: OutcomeOpinionVersion,
    OutcomeOpinionVersionTranslation: OutcomeOpinionVersionTranslation,
    OutcomeTranslation: OutcomeTranslation,
    Poll: Poll,
    PollRevision: PollRevision,
    PollRevisionFactorPosition: PollRevisionFactorPosition,
    PollRevisionOpinion: PollRevisionOpinion,
    PollRevisionOpinionRating: PollRevisionOpinionRating,
    PollRevisionOpinionVersion: PollRevisionOpinionVersion,
    PollRevisionOpinionVersionTranslation: PollRevisionOpinionVersionTranslation,
    PollRevisionRating: PollRevisionRating,
    PollRevisionTranslation: PollRevisionTranslation,
    PollRevisionTranslationRating: PollRevisionTranslationRating,
    PollRun: PollRun,
    PollRunContinent: PollRunContinent,
    PollRunCountry: PollRunCountry,
    PollRunCounty: PollRunCounty,
    PollRunState: PollRunState,
    PollRunTown: PollRunTown,
    PollType: PollType,
    Position: Position,
    PositionOpinionVersion: PositionOpinionVersion,
    PositionOpinionVersionTranslation: PositionOpinionVersionTranslation,
    PositionTranslation: PositionTranslation,
    Rating: Rating,
    RatingSetting: RatingSetting,
    RatingType: RatingType,
    Skin: Skin,
    State: State,
    StateTown: StateTown,
    SystemGeneratedRow: SystemGeneratedRow,
    Theme: Theme,
    Town: Town,
    TranslationType: TranslationType,
    UserAccount: UserAccount,
    Vote: Vote,
    VoteFactor: VoteFactor,
    VoteFactorType: VoteFactorType,
    VoteType: VoteType,
    VoteVersion: VoteVersion
};
export const Q_SCHEMA = {
    __constructors__,
    domain: 'votecube.com',
    name: '@votecube/ecclesia'
};
export const Q = Q_SCHEMA;
export function diSet(dbEntityId) {
    return dS(Q.__dbSchema__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return ddS(Q.__dbSchema__, dbEntityId);
}
DI.db().eventuallyGet(AIRPORT_DATABASE).then((airDb) => {
    airDb.QM[getSchemaName(Q_SCHEMA)] = Q;
});
//# sourceMappingURL=qSchema.js.map