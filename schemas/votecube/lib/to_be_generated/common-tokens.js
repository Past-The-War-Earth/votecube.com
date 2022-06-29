import { app } from '@votecube/dependency-injection';
export const votecube = app('votecube');
export const AGREEMENT_API = votecube.token({
    class: null,
    interface: 'AgreementApi',
    token: 'AGREEMENT_API'
});
export const IDEA_API = votecube.token({
    class: null,
    interface: 'IdeaApi',
    token: 'IDEA_API'
});
export const IDEA_RATING_API = votecube.token({
    class: null,
    interface: 'IdeaRatingApi',
    token: 'IDEA_RATING_API'
});
export const SITUATION_IDEA_API = votecube.token({
    class: null,
    interface: 'SituationIdeaApi',
    token: 'SITUATION_IDEA_API'
});
//# sourceMappingURL=common-tokens.js.map