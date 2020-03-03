export declare class UiObjectBuilder {
    currentDescriptor: {
        from: any[];
        to: any[];
    };
    fromObj: any;
    toObj: any;
    constructor(from: any, to?: {});
    from(path: any): UiObjectBuilder;
    fromTo(path: any): UiObjectBuilder;
    to(path: any): UiObjectBuilder;
    setEach(callback: any, options: any): void;
    set(callback?: any): void;
    doSet(paths: any, callback: any, fromKey?: any, options?: any): void;
    traversePath(): {
        lastToFragment: any;
        nestedFrom: any;
        nestedTo: any;
    };
    toUiObject(uiObject: any, uiKey: any, dbObject: any): void;
}
