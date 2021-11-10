import { IUiRepositoryRecord } from "./ui";
export declare enum AgeGroup {
    AGE_0_TO_3 = "Age: 0 - 3",
    AGE_3_TO_5 = "Age: 3 - 5",
    AGE_5_TO_7 = "Age: 5 - 7",
    AGE_7_TO_13 = "Age: 7 - 13",
    AGE_13_TO_18 = "Age: 13 - 18"
}
export declare const AGE_GROUPS: string[];
export interface IFormField {
    id: IUiRepositoryRecord;
    text: string;
}
export interface IFormSituation {
    ageGroups: IFormField[];
    factors: {
        1: IFormFactor;
        2: IFormFactor;
        3: IFormFactor;
    };
    labels: IFormField[];
    name: string;
    outcomes: {
        A: IFormField;
        B: IFormField;
    };
}
export interface IFormColor {
    blue: string;
    green: string;
    red: string;
}
export interface IFormFactor {
    color: IFormColor;
    name: IFormField;
    positions: {
        A: IFormField;
        B: IFormField;
    };
}
//# sourceMappingURL=form.d.ts.map