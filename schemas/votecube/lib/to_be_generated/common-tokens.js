import { app } from '@votecube/dependency-injection';
export const votecube = app('votecube');
export const IDEA_API = votecube.token({
    class: null,
    interface: 'IIdeaApi',
    token: 'IDEA_API'
});
export const SITUATION_IDEA_API = votecube.token({
    class: null,
    interface: 'IIdeaSituationApi',
    token: 'SITUATION_IDEA_API'
});
export const AGREEMENT_API = votecube.token({
    class: null,
    interface: 'IAgreementApi',
    token: 'AGREEMENT_API'
});
//# sourceMappingURL=common-tokens.js.map