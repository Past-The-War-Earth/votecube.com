export declare type IEventListener<E extends Event> = (event: E) => void;
export declare type IAddEventListener = (eventName: string, listener: IEventListener<any>) => IAddEventListener;
export declare type IRemoveEventListener = (eventName: string) => IRemoveEventListener;
export interface IPerElementEventListenerMap {
    ad: IAddEventListener;
    rm: IRemoveEventListener;
    lM: Map<string, IEventListener<any>>;
}
export declare type IDispatchEventOnKnownObject<E> = (event: E) => IDispatchEventOnKnownObject<E>;
export interface IEventListenerMap {
    tM: Map<Node, IPerElementEventListenerMap>;
    ad(target: Node): IPerElementEventListenerMap;
}
export declare class EventListenerMap implements IEventListenerMap {
    tM: Map<any, any>;
    ad(element: Node): any;
    private eCO;
    private eCA;
    private dE;
}
