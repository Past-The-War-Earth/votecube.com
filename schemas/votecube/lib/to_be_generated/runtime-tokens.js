import { APPLICATION_LOADER } from '@airport/apron';
import { API_REGISTRY } from '@airport/check-in';
import { APPLICATION_INITIALIZER, TERMINAL_STORE } from '@airport/terminal-map';
import { ApplicationLoader } from './ApplicationLoader';
import { votecube } from './common-tokens';
import { IdeaDao, SituationIdeaDao } from "../dao/dao";
import { AGREEMENT_API, IDEA_API, IDEA_SITUATION_API } from './common-tokens';
import { AgreementApi, IdeaApi, IdeaSituationApi } from '../api/api';
export const IDEA_DAO = votecube.token({
    class: IdeaDao,
    interface: 'IIdeaDao',
    token: 'IDEA_DAO'
});
export const IDEA_SITUATION_DAO = votecube.token({
    class: SituationIdeaDao,
    interface: 'IIdeaSituationDao',
    token: 'IDEA_SITUATION_DAO'
});
IDEA_API.setClass(IdeaApi);
IDEA_API.setDependencies({
    ideaDao: IDEA_DAO
});
IDEA_SITUATION_API.setClass(IdeaSituationApi);
IDEA_SITUATION_API.setDependencies({
    ideaSituationDao: IDEA_SITUATION_DAO
});
AGREEMENT_API.setClass(AgreementApi);
APPLICATION_LOADER.setClass(ApplicationLoader);
APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    terminalStore: TERMINAL_STORE,
});
//# sourceMappingURL=runtime-tokens.js.map