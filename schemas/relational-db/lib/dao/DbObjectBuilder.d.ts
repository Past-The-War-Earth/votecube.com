export declare class DbObjectBuilder {
    currentDescriptor: {
        from: any[];
        to: any[];
    };
    fromObj: any;
    fromDeltas: any;
    toOriginal: any;
    toObj: any;
    create: any;
    constructor(from: any, fromDeltas: any, toOriginal: any, to?: {});
    from(path: any): DbObjectBuilder;
    fromTo(path: any): DbObjectBuilder;
    to(path: any): DbObjectBuilder;
    setEach(callback: any): void;
    set(callback: any): void;
    doSet(paths: any, callback: any, fromId?: any): void;
    traversePath(): {
        nestedFrom: any;
        nestedFromDeltas: any;
        nestedOriginalTo: any;
        nestedTo: any;
    };
    private toDbObject;
}
