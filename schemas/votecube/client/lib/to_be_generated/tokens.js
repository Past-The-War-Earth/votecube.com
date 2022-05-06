import { app } from '@votecube/dependency-injection';
export const core = app('votecube');
export const AGREEMENT_API = core.token({
    class: null,
    interface: 'IAgreementApi',
    token: 'AGREEMENT_API'
});
export const IDEA_API = core.token({
    class: null,
    interface: 'IIdeaApi',
    token: 'IDEA_API'
});
export const IDEA_SITUATION_API = core.token({
    class: null,
    interface: 'ISituationApi',
    token: 'SITUATION_API'
});
//# sourceMappingURL=tokens.js.map