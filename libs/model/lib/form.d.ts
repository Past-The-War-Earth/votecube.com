import { IUiRepositoryRecord } from "./ui";
export interface IFormField {
    id: IUiRepositoryRecord;
    text: string;
}
export interface IFormSituation {
    category: IFormField;
    factors: {
        1: IFormFactor;
        2: IFormFactor;
        3: IFormFactor;
    };
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