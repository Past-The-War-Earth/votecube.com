export interface IIsKnownElementOfTag {
    (): boolean;
    (tagName: string): IIsKnownElementOfTag;
}
export interface ICubeUtils {
    gQ(selector: string): Element;
    pD(ev: Event): void;
    iT(t: Element): boolean;
    iT(t: Element, tN: string, aM?: boolean): IIsKnownElementOfTag;
    iT(target: Element, // target
    tagName?: string, // tag name
    aggregateMatch?: boolean): any;
    secondIsGreaterShortCircuit(chain: any[][]): boolean;
}
export declare class CubeUtils implements ICubeUtils {
    gQ(selector: string): Element;
    pD(ev: Event): void;
    iT(t: Element): boolean;
    iT(t: Element, tN: string, aM?: boolean): IIsKnownElementOfTag;
    secondIsGreaterShortCircuit(chain: any[][]): boolean;
}
//# sourceMappingURL=CubeUtils.d.ts.map