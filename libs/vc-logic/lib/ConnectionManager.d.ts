export interface IConnectionManager {
    get<T>(url: string, params?: any): Promise<T>;
    put<V, R>(url: string, value: V, params?: any): Promise<R>;
}
export declare class ConnectionManager implements IConnectionManager {
    serverUrlPrefix: string;
    get<T>(url: string, params?: any): Promise<T>;
    put<V, R>(url: string, value: V, params?: any): Promise<R>;
    private getParamsSuffix;
}
//# sourceMappingURL=ConnectionManager.d.ts.map