import { IUiIdea } from '@votecube/model';
export interface IIdeaActions {
    ageSuitabilitySave?: boolean;
    checkBuild?: boolean;
    confirmAgreement?: boolean;
    savingIdea?: boolean;
    ideaAlter?: boolean;
    showOutcomes?: boolean;
}
export declare const ideaActions: import("svelte/store").Writable<IIdeaActions>;
export declare const idea: import("svelte/store").Writable<IUiIdea>;
//# sourceMappingURL=store.d.ts.map