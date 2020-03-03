export declare type Route_Path = string;
export declare type Component = any;
export declare type Route_Authenticated = boolean;
export declare type Route_RightMenu = boolean;
export declare type Route_ParamValue = string;
export interface IRouteParamMap {
    [paramName: string]: Route_ParamValue;
}
export interface IRoutes {
    configPages(config: Array<[Route_Path, Route_RightMenu, Route_RightMenu]>): void;
    getPageComponent(): Component;
    navigateToPage(pageKey: Route_Path, paramMap?: {
        [paramName: string]: Route_ParamValue;
    }): void;
    setupRoutes(pageMap: {
        [pageKey: string]: Component;
    }, setPageComp: (pageComp: Component) => void, defaultRoutePath: Route_Path, errorRoutePath: Route_Path): void;
}
export interface IRouteConfig {
    authenticated: Route_Authenticated;
    key: Route_Path;
    rightMenu: Route_RightMenu;
    url: Route_Path;
}
export declare class Routes implements IRoutes {
    private appComp;
    private defaultRouteParams;
    private inProgressParams;
    private inProgressUrl;
    private pageComp;
    private pageConf;
    configPages(config: Array<[Route_Path, Route_RightMenu, Route_RightMenu]>): void;
    getPageComponent(): Component;
    navigateToPage(pageKey: Route_Path, paramMap?: IRouteParamMap): void;
    setupRoutes(pageMap: {
        [pageKey: string]: Component;
    }, setPageComp: (pageComp: Component) => void, defaultRoutePath: Route_Path, errorRoutePath: Route_Path): void;
    private setInProgressState;
    private setPageComp;
    private setupPage;
}
