import { domain } from '@airport/direction-indicator';
export const core = domain('localhost:8100').app('@sapoto/core');
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