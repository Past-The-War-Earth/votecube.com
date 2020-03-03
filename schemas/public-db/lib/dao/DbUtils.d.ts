import { IMarked } from '@votecube/model';
export declare type FullTextSearchProperty = string;
export declare type ExcludeFullTextSearchProperty = string;
export interface IFullTextSearchObject {
    [propertyName: string]: boolean;
}
export interface IDbUtils {
    addedProps: string[];
    excludedProps: string[];
    subPollProps: string[];
    versionedProps: string[];
    calculateWaterMarks(dbObject: IMarked): void;
    copy(object: any, skipKeys?: string[]): any;
    getFtsProps(object: any, excludeFtsProperties?: ExcludeFullTextSearchProperty[]): IFullTextSearchObject;
}
export declare class DbUtils implements IDbUtils {
    static EXCLUDE_FTS_PROPS: string[];
    private theElIndex;
    readonly addedProps: string[];
    readonly excludedProps: string[];
    readonly subPollProps: string[];
    readonly versionedProps: string[];
    private getElIndex;
    calculateWaterMarks(dbObject: IMarked): void;
    copy(object: any, skipKeys?: string[]): any;
    getFtsProps(object: any, excludeFtsProperties?: ExcludeFullTextSearchProperty[]): Promise<IFullTextSearchObject>;
    private doGetFtsProps;
    private setHighChange;
    private setLowChange;
    private setHighSame;
    private setLowSame;
    private isDataObject;
}
