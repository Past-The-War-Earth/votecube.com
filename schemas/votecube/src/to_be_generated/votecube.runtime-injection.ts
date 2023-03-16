import { APPLICATION_INITIALIZER, TerminalStore } from '@airport/terminal-map'
import { ApplicationLoader } from './ApplicationLoader'
import { IdeaDao, SituationIdeaDao } from "../dao/dao";
import { AgreementApi, IdeaApi, SituationIdeaApi } from '../api/api'
import { AgreementDao } from '../dao/AgreementDao'
import { AgreementIdeaReasonDao } from '../dao/AgreementIdeaReasonDao'
import { ReasonDao } from '../dao/reason/ReasonDao'
import { IdeaRatingApi } from '../api/IdeaRatingApi'
import { IdeaRatingDao } from '../dao/IdeaRatingDao'
import { SituationApi } from '@sapoto/core'
import { FactorDao } from '../dao/FactorDao'
import { PositionDao } from '../dao/PositionDao'
import { AgreementDvo } from '../dvo/AgreementDvo'
import { IdeaDvo } from './votecube.runtime-index'
import { IdeaRatingDvo } from '../dvo/IdeaRatingDvo'
import { SituationIdeaDvo } from '../dvo/SituationIdeaDvo'
import { application } from './app-declaration'
import { app } from '@airport/direction-indicator'
import { IdeaReasonDao } from '../dao/reason/IdeaReasonDao';
import { API_REGISTRY } from '@airport/air-traffic-control';
import { RequestManager } from '@airport/web-tower';

export const votecube = app(application)

votecube.register(
    AgreementApi, AgreementDao, AgreementDvo,
    AgreementIdeaReasonDao, FactorDao, IdeaApi, IdeaDao, IdeaDvo,
    IdeaRatingApi, IdeaRatingDao, IdeaRatingDvo,
    IdeaReasonDao, PositionDao,
    ReasonDao, SituationIdeaApi, SituationIdeaDao,
    SituationIdeaDvo
)

votecube.setDependencies(AgreementApi, {
    agreementDao: AgreementDao,
    agreementDvo: AgreementDvo,
    agreementIdeaReasonDao: AgreementIdeaReasonDao,
    factorDao: FactorDao,
    ideaDao: IdeaDao,
    positionDao: PositionDao,
    reasonDao: ReasonDao,
    situationIdeaDao: SituationIdeaDao
})

votecube.setDependencies(IdeaApi, {
    ideaDao: IdeaDao,
    ideaDvo: IdeaDvo
})

votecube.setDependencies(IdeaRatingApi, {
    ideaDao: IdeaDao,
    ideaRatingDao: IdeaRatingDao,
    ideaRatingDvo: IdeaRatingDvo,
    situationIdeaDao: SituationIdeaDao
})

votecube.setDependencies(SituationIdeaApi, {
    ideaApi: IdeaApi,
    requestManager: RequestManager,
    situationApi: SituationApi,
    situationIdeaDao: SituationIdeaDao,
    situationIdeaDvo: SituationIdeaDvo
})

votecube.setDependencies(ApplicationLoader, {
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    terminalStore: TerminalStore,
})
