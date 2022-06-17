import { APPLICATION_LOADER } from '@airport/apron'
import { API_REGISTRY } from '@airport/check-in'
import { APPLICATION_INITIALIZER, TERMINAL_STORE } from '@airport/terminal-map'
import { ApplicationLoader } from './ApplicationLoader'
import { votecube } from './common-tokens'

import { IIdeaDao, IdeaDao, ISituationIdeaDao, SituationIdeaDao } from "../dao/dao";
import { AGREEMENT_API, IDEA_API, SITUATION_IDEA_API } from './common-tokens'
import { AgreementApi, IdeaApi, SituationIdeaApi } from '../api/api'
import { AgreementDao } from '../dao/AgreementDao'
import { AgreementReasonDao } from '../dao/AgreementReasonDao'
import { ReasonDao } from '../dao/ReasonDao'

export const AGREEMENT_DAO = votecube.token<AgreementDao>({
    class: AgreementDao,
    interface: 'AgreementDao',
    token: 'AGREEMENT_DAO'
})
export const AGREEMENT_REASON_DAO = votecube.token<AgreementReasonDao>({
    class: AgreementReasonDao,
    interface: 'AgreementReasonDao',
    token: 'AGREEMENT_REASON_DAO'
})
export const IDEA_DAO = votecube.token<IIdeaDao>({
    class: IdeaDao,
    interface: 'IIdeaDao',
    token: 'IDEA_DAO'
})
export const REASON_DAO = votecube.token<ReasonDao>({
    class: ReasonDao,
    interface: 'ReasonDao',
    token: 'REASON_DAO'
})
export const SITUATION_IDEA_DAO = votecube.token<ISituationIdeaDao>({
    class: SituationIdeaDao,
    interface: 'IIdeaSituationDao',
    token: 'SITUATION_IDEA_DAO'
})

IDEA_API.setClass(IdeaApi)
IDEA_API.setDependencies({
    ideaDao: IDEA_DAO
})
SITUATION_IDEA_API.setClass(SituationIdeaApi)
SITUATION_IDEA_API.setDependencies({
    agreementDao: AGREEMENT_DAO,
    agreementReasonDao: AGREEMENT_REASON_DAO,
    reasonDao: REASON_DAO,
    situationIdeaDao: SITUATION_IDEA_DAO
})
AGREEMENT_API.setClass(AgreementApi)

APPLICATION_LOADER.setClass(ApplicationLoader)

APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    terminalStore: TERMINAL_STORE,
})
