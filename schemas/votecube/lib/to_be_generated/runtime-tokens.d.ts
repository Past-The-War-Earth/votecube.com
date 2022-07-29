import { IIdeaDao, ISituationIdeaDao } from "../dao/dao";
import { AgreementDao } from '../dao/AgreementDao';
import { AgreementReasonDao } from '../dao/AgreementReasonDao';
import { ReasonDao } from '../dao/reason/ReasonDao';
import { IIdeaRatingDao } from '../dao/IdeaRatingDao';
import { FactorDao } from '../dao/FactorDao';
import { PositionDao } from '../dao/PositionDao';
import { AgreementDvo } from '../dvo/AgreementDvo';
export declare const AGREEMENT_DAO: import("@airport/direction-indicator").IDependencyInjectionToken<AgreementDao>;
export declare const AGREEMENT_DVO: import("@airport/direction-indicator").IDependencyInjectionToken<AgreementDvo>;
export declare const AGREEMENT_REASON_DAO: import("@airport/direction-indicator").IDependencyInjectionToken<AgreementReasonDao>;
export declare const IDEA_DAO: import("@airport/direction-indicator").IDependencyInjectionToken<IIdeaDao>;
export declare const IDEA_RATING_DAO: import("@airport/direction-indicator").IDependencyInjectionToken<IIdeaRatingDao>;
export declare const FACTOR_DAO: import("@airport/direction-indicator").IDependencyInjectionToken<FactorDao>;
export declare const POSITION_DAO: import("@airport/direction-indicator").IDependencyInjectionToken<PositionDao>;
export declare const REASON_DAO: import("@airport/direction-indicator").IDependencyInjectionToken<ReasonDao>;
export declare const SITUATION_IDEA_DAO: import("@airport/direction-indicator").IDependencyInjectionToken<ISituationIdeaDao>;
//# sourceMappingURL=runtime-tokens.d.ts.map