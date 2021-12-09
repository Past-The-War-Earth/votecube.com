import { ILabel } from '@votecube/votecube';
export interface IUiCustomEvent<T> {
    detail: T;
}
export interface IUiMenuItem {
    auth: boolean;
    key: string;
    name: string;
    path: string;
}
export interface IUiRepositoryRecord {
    ageSuitability: 0 | 7 | 13 | 18;
}
export interface IUiNamedRecord extends IUiRepositoryRecord {
    name: string;
}
export interface IUiLabel extends IUiNamedRecord {
    originalDbLabel: ILabel;
}
export interface IUiColor {
    blue: number;
    green: number;
    red: number;
}
export interface IUiFactor extends IUiNamedRecord {
    axis: 'x' | 'y' | 'z';
    color: IUiColor;
    name: string;
    positions: {
        A: IUiPosition;
        B: IUiPosition;
    };
}
export interface IUiOutcome extends IUiNamedRecord {
}
export interface IUiPosition extends IUiNamedRecord {
    dir: -1 | 1;
}
export interface IUiRepository {
    source: string;
    uuId: string;
}
export interface IUiSituation extends IUiNamedRecord {
    ageGroups: IUiLabel[];
    labels: IUiLabel[];
    factors: {
        1: IUiFactor;
        2: IUiFactor;
        3: IUiFactor;
    };
    outcomes: {
        A: IUiOutcome;
        B: IUiOutcome;
    };
    repository: IUiRepository;
}
export interface INavList {
    direction: 0 | 1 | -1;
    isTarget: boolean;
    previous: INavList;
    situation: IUiSituation;
}
//# sourceMappingURL=ui.d.ts.map