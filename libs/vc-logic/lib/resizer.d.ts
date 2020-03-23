export declare type ViewCallback = (portalHeight: number, windowWidth: number, verticalLayout: boolean) => void;
export declare function setResizeCllBck(resizeCallback: ViewCallback): void;
export declare function startResizeInterval(): void;
export declare function scheduleToResize(): void;
