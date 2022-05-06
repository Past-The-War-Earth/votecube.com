import { app } from '@votecube/dependency-injection';
export const votecube = app('votecube');
export const IDEA_API = votecube.token({
    class: null,
    interface: 'IIdeaApi',
    token: 'IDEA_API'
});
export const IDEA_SITUATION_API = votecube.token({
    class: null,
    interface: 'IIdeaSituationApi',
    token: 'IDEA_SITUATION_API'
});
export const AGREEMENT_API = votecube.token({
    class: null,
    interface: 'IAgreementApi',
    token: 'AGREEMENT_API'
});
//# sourceMappingURL=common-tokens.js.map