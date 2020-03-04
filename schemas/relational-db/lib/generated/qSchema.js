import { AIR_DB } from '@airport/air-control';
import { diSet as dS, duoDiSet as ddS } from '@airport/check-in';
import { DI } from '@airport/di';
import { getSchemaName } from '@airport/ground-control';
import { Actor } from '../ddl/user/actor';
import { Application } from '../ddl/user/application';
import { Continent } from '../ddl/location/continent';
import { Country } from '../ddl/location/country';
import { CountryTown } from '../ddl/location/countrytown';
import { County } from '../ddl/location/county';
import { CountyTown } from '../ddl/location/countytown';
import { DesignPattern } from '../ddl/factor/position/designpattern';
import { Device } from '../ddl/user/device';
import { Emoji } from '../ddl/factor/position/emoji';
import { Factor } from '../ddl/factor/factor';
import { FactorOpinionVersion } from '../ddl/opinion/factoropinionversion';
import { FactorOpinionVersionRating } from '../ddl/opinion/user/factoropinionversionrating';
import { FactorOpinionVersionTranslation } from '../ddl/opinion/translation/factoropinionversiontranslation';
import { FactorPosition } from '../ddl/factor/position/factorposition';
import { FactorSkin } from '../ddl/factor/factorskin';
import { FactorTranslation } from '../ddl/factor/factortranslation';
import { ImmutableActorRow } from '../ddl/infrastructure/row/immutableactorrow';
import { ImmutableRow } from '../ddl/infrastructure/row/immutablerow';
import { Language } from '../ddl/infrastructure/language';
import { MutableActorRow } from '../ddl/infrastructure/row/mutableactorrow';
import { MutableRow } from '../ddl/infrastructure/row/mutablerow';
import { Outcome } from '../ddl/poll/revision/outcome';
import { OutcomeOpinionVersion } from '../ddl/opinion/outcomeopinionversion';
import { OutcomeOpinionVersionTranslation } from '../ddl/opinion/translation/outcomeopinionversiontranslation';
import { OutcomeTranslation } from '../ddl/poll/revision/translation/outcometranslation';
import { Poll } from '../ddl/poll/poll';
import { PollRevision } from '../ddl/poll/revision/pollrevision';
import { PollRevisionFactorPosition } from '../ddl/poll/revision/pollrevisionfactorposition';
import { PollRevisionOpinion } from '../ddl/opinion/pollrevisionopinion';
import { PollRevisionOpinionVersion } from '../ddl/opinion/pollrevisionopinionversion';
import { PollRevisionOpinionVersionRating } from '../ddl/opinion/user/pollrevisionopinionversionrating';
import { PollRevisionOpinionVersionTranslation } from '../ddl/opinion/translation/pollrevisionopinionversiontranslation';
import { PollRevisionRating } from '../ddl/poll/rating/pollrevisionrating';
import { PollRevisionTranslation } from '../ddl/poll/revision/translation/pollrevisiontranslation';
import { PollRevisionTranslationRating } from '../ddl/poll/rating/pollrevisiontranslationrating';
import { PollRun } from '../ddl/poll/run/pollrun';
import { PollRunContinent } from '../ddl/poll/run/location/pollruncontinent';
import { PollRunCountry } from '../ddl/poll/run/location/pollruncountry';
import { PollRunCounty } from '../ddl/poll/run/location/pollruncounty';
import { PollRunState } from '../ddl/poll/run/location/pollrunstate';
import { PollRunTown } from '../ddl/poll/run/location/pollruntown';
import { PollType } from '../ddl/poll/polltype';
import { Position } from '../ddl/factor/position/position';
import { PositionOpinionVersion } from '../ddl/opinion/positionopinionversion';
import { PositionOpinionVersionRating } from '../ddl/opinion/user/positionopinionversionrating';
import { PositionOpinionVersionTranslation } from '../ddl/opinion/translation/positionopinionversiontranslation';
import { PositionTranslation } from '../ddl/factor/position/positiontranslation';
import { Rating } from '../ddl/infrastructure/rating/rating';
import { RatingSetting } from '../ddl/infrastructure/rating/ratingsetting';
import { RatingType } from '../ddl/infrastructure/rating/ratingtype';
import { State } from '../ddl/location/state';
import { StateTown } from '../ddl/location/statetown';
import { SystemGeneratedRow } from '../ddl/infrastructure/row/systemgeneratedrow';
import { Theme } from '../ddl/poll/theme';
import { Town } from '../ddl/location/town';
import { TranslationType } from '../ddl/infrastructure/translationtype';
import { UserAccount } from '../ddl/user/useraccount';
import { Vote } from '../ddl/vote/vote';
import { VoteFactor } from '../ddl/vote/votefactor';
import { VoteFactorType } from '../ddl/vote/votefactortype';
import { VoteRevision } from '../ddl/vote/voterevision';
import { VoteType } from '../ddl/vote/votetype';
const __constructors__ = {
    Actor: Actor,
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
    FactorOpinionVersionRating: FactorOpinionVersionRating,
    FactorOpinionVersionTranslation: FactorOpinionVersionTranslation,
    FactorPosition: FactorPosition,
    FactorSkin: FactorSkin,
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
    PollRevisionOpinionVersion: PollRevisionOpinionVersion,
    PollRevisionOpinionVersionRating: PollRevisionOpinionVersionRating,
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
    PositionOpinionVersionRating: PositionOpinionVersionRating,
    PositionOpinionVersionTranslation: PositionOpinionVersionTranslation,
    PositionTranslation: PositionTranslation,
    Rating: Rating,
    RatingSetting: RatingSetting,
    RatingType: RatingType,
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
    VoteRevision: VoteRevision,
    VoteType: VoteType
};
export const Q_SCHEMA = {
    __constructors__,
    domain: 'public',
    name: '@votecube/relational-db'
};
export const Q = Q_SCHEMA;
export function diSet(dbEntityId) {
    return dS(Q.__dbSchema__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return ddS(Q.__dbSchema__, dbEntityId);
}
DI.db().get(AIR_DB).then((airDb) => {
    airDb.QM[getSchemaName(Q_SCHEMA)] = Q;
});
//# sourceMappingURL=qSchema.js.map