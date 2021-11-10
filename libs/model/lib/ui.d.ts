export interface IUiRepositoryRecord {
    actorId: number;
    actorRecordId: number;
    ageSuitability: 0 | 7 | 13 | 18;
    repositoryId: number;
}
export interface IUiNamedRecord extends IUiRepositoryRecord {
    name: string;
}
export interface IUiLabel extends IUiNamedRecord {
    situationLabel: IUiRepositoryRecord;
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
    parent: IUiRepositoryRecord;
}
export interface INavList {
    direction: 0 | 1 | -1;
    isTarget: boolean;
    previous: INavList;
    situation: IUiSituation;
}
//# sourceMappingURL=ui.d.ts.map