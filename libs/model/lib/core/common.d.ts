export declare type IsData = 'data';
export declare type IsDelta = 'delta';
export declare type IsDoc = 'doc';
export declare type Key = string;
export declare type DocStatus = IsData | IsDelta | IsDoc;
export declare type IsFromForm = true;
export declare type IsNotFromForm = false;
export declare type FromForm = IsFromForm | IsNotFromForm;
export interface IIdentified {
    repositoryId: number;
    actorId: number;
    actorRecordId: number;
}
export interface IUiRepositoryRecord {
    actorId: number;
    actorRecordId: number;
    repositoryId: number;
}
export declare type Doc_Depth = number;
export declare type Timestamp_Milliseconds = number;
export declare type Timestamp_TimezoneOffset = number;
export declare type Timestamp_Server = any;
export declare type Timestamp_Timezone = string;
export interface ITimestamp {
    m: Timestamp_Milliseconds;
    o: Timestamp_TimezoneOffset;
    s: Timestamp_Server;
    z: Timestamp_Timezone;
}
export declare type Marks_High = number;
export declare type Marks_Low = number;
export interface IMarks {
    change: {
        high: Marks_High;
        low: Marks_Low;
    };
    same: {
        high: Marks_High;
        low: Marks_Low;
    };
}
export interface IMarked {
    marks: IMarks;
}
export declare type FullTextSearch_Flag = true;
export interface IFullTextSearch {
    fts: {
        [key: string]: FullTextSearch_Flag;
    };
}
//# sourceMappingURL=common.d.ts.map