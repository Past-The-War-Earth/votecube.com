import { IUiSituation } from '@votecube/model';
export interface ISituationActions {
    ageSuitabilitySave?: boolean;
    checkBuild?: boolean;
    confirmSolution?: boolean;
    savingSituation?: boolean;
    situationAlter?: boolean;
    showOutcomes?: boolean;
}
export declare const situationActions: import("svelte/store").Writable<ISituationActions>;
export declare const situation: import("svelte/store").Writable<IUiSituation>;
//# sourceMappingURL=store.d.ts.map