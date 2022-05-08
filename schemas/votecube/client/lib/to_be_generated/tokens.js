import { app } from '@votecube/dependency-injection';
export const votecube = app('votecube');
votecube.autopilot = true;
export const AGREEMENT_API = votecube.token({
    class: null,
    interface: 'IAgreementApi',
    token: 'AGREEMENT_API'
});
export const IDEA_API = votecube.token({
    class: null,
    interface: 'IIdeaApi',
    token: 'IDEA_API'
});
export const IDEA_SITUATION_API = votecube.token({
    class: null,
    interface: 'ISituationApi',
    token: 'SITUATION_API'
});
//# sourceMappingURL=tokens.js.map