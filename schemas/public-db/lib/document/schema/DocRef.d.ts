import { IIdentified, Key } from '@votecube/model';
import { firestore }        from 'firebase';
export interface IVCFirestore extends firestore.Firestore {
    collection<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null>(collectionPath: string): IVCCollectionReference<K, T, PK, PT>;
    doc<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null>(documentPath: string): IVCDocumentReference<K, T, PK, PT>;
    collectionGroup<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null>(collectionId: string): IVCQuery<K, T, PK, PT>;
    runTransaction<RT>(updateFunction: (transaction: IVCTransaction) => Promise<RT>): Promise<RT>;
}
export interface IVCTransaction extends firestore.Transaction {
    get<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null>(documentRef: IVCDocumentReference<K, T, PK, PT>): Promise<IVCDocumentSnapshot<K, T, PK, PT>>;
    set<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null>(documentRef: IVCDocumentReference<K, T, PK, PT>, data: T, options?: firestore.SetOptions): IVCTransaction;
    update<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null>(documentRef: IVCDocumentReference<K, T, PK, PT>, data: Partial<T>): IVCTransaction;
    update<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null>(documentRef: IVCDocumentReference<K, T, PK, PT>, field: string | firestore.FieldPath, value: any, ...moreFieldsAndValues: any[]): IVCTransaction;
    delete<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null>(documentRef: IVCDocumentReference<K, T, PK, PT>): IVCTransaction;
}
export interface IVCCollectionReference<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null> extends IVCQuery<K, T> {
    /** The collection's identifier. */
    readonly id: string;
    /**
     * A reference to the containing `DocumentReference` if this is a subcollection.
     * If this isn't a subcollection, the reference is null.
     */
    readonly parent: IVCDocumentReference<PK, PT>;
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */
    readonly path: string;
    add(data: T): Promise<IVCDocumentReference<K, T, PK, PT>>;
    doc(documentPath?: string): IVCDocumentReference<K, T, PK, PT>;
    /**
     * Returns true if this `CollectionReference` is equal to the provided one.
     *
     * @param other The `CollectionReference` to compare against.
     * @return true if this `CollectionReference` is equal to the provided one.
     */
    isEqual(other: IVCCollectionReference<K, T, PK, PT>): boolean;
}
export interface IVCDocumentReference<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null> extends firestore.DocumentReference {
    readonly parent: IVCCollectionReference<PK, PT>;
    collection<CK extends Key, CT extends IIdentified<CK>>(collectionPath: string): IVCCollectionReference<CK, CT, K, T>;
    isEqual(other: IVCDocumentReference<K, T, PK, PT>): boolean;
    set(data: T, options?: firestore.SetOptions): Promise<void>;
    update(data: Partial<T>): Promise<void>;
    update(field: string | firestore.FieldPath, value: any, ...moreFieldsAndValues: any[]): Promise<void>;
    get(options?: firestore.GetOptions): Promise<IVCDocumentSnapshot<K, T, PK, PT>>;
    onSnapshot(observer: {
        next?: (snapshot: IVCDocumentSnapshot<K, T, PK, PT>) => void;
        error?: (error: firestore.FirestoreError) => void;
        complete?: () => void;
    }): () => void;
    onSnapshot(options: firestore.SnapshotListenOptions, observer: {
        next?: (snapshot: IVCDocumentSnapshot<K, T, PK, PT>) => void;
        error?: (error: Error) => void;
        complete?: () => void;
    }): () => void;
    onSnapshot(onNext: (snapshot: IVCDocumentSnapshot<K, T, PK, PT>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
    onSnapshot(options: firestore.SnapshotListenOptions, onNext: (snapshot: IVCDocumentSnapshot<K, T, PK, PT>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
}
export interface IVCQuerySnapshot<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null> extends firestore.QuerySnapshot {
    readonly query: IVCQuery<K, T, PK, PT>;
    readonly docs: Array<IVCQueryDocumentSnapshot<K, T, PK, PT>>;
    docChanges(options?: firestore.SnapshotListenOptions): Array<IVCDocumentChange<K, T, PK, PT>>;
    forEach(callback: (result: IVCQueryDocumentSnapshot<K, T, PK, PT>) => void, thisArg?: any): void;
    isEqual(other: IVCQuerySnapshot<K, T, PK, PT>): boolean;
}
export interface IVCDocumentChange<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null> extends firestore.DocumentChange {
    readonly doc: IVCQueryDocumentSnapshot<K, T, PK, PT>;
}
export interface IVCDocumentSnapshot<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null> extends firestore.DocumentSnapshot {
    readonly ref: IVCDocumentReference<K, T, PK, PT>;
    data(options?: firestore.SnapshotOptions): T | undefined;
    isEqual(other: IVCDocumentSnapshot<K, T, PK, PT>): boolean;
}
export interface IVCQueryDocumentSnapshot<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null> extends firestore.QueryDocumentSnapshot {
    data(options?: firestore.SnapshotOptions): T;
}
export interface IVCQuery<K extends Key, T extends IIdentified<K>, PK extends Key = null, PT extends IIdentified<PK> = null> extends firestore.Query {
    where(fieldPath: string | firestore.FieldPath, opStr: firestore.WhereFilterOp, value: any): IVCQuery<K, T, PK, PT>;
    orderBy(fieldPath: string | firestore.FieldPath, directionStr?: firestore.OrderByDirection): IVCQuery<K, T, PK, PT>;
    limit(limit: number): IVCQuery<K, T, PK, PT>;
    startAt(snapshot: IVCDocumentSnapshot<K, T, PK, PT>): IVCQuery<K, T, PK, PT>;
    startAt(...fieldValues: any[]): IVCQuery<K, T, PK, PT>;
    startAfter(snapshot: IVCDocumentSnapshot<K, T, PK, PT>): IVCQuery<K, T, PK, PT>;
    startAfter(...fieldValues: any[]): IVCQuery<K, T, PK, PT>;
    endBefore(snapshot: IVCDocumentSnapshot<K, T, PK, PT>): IVCQuery<K, T, PK, PT>;
    endBefore(...fieldValues: any[]): IVCQuery<K, T, PK, PT>;
    endAt(snapshot: IVCDocumentSnapshot<K, T, PK, PT>): IVCQuery<K, T, PK, PT>;
    endAt(...fieldValues: any[]): IVCQuery<K, T, PK, PT>;
    isEqual(other: IVCQuery<K, T, PK, PT>): boolean;
    get(options?: firestore.GetOptions): Promise<IVCQuerySnapshot<K, T, PK, PT>>;
    onSnapshot(observer: {
        next?: (snapshot: IVCQuerySnapshot<K, T, PK, PT>) => void;
        error?: (error: Error) => void;
        complete?: () => void;
    }): () => void;
    onSnapshot(options: firestore.SnapshotListenOptions, observer: {
        next?: (snapshot: IVCQuerySnapshot<K, T, PK, PT>) => void;
        error?: (error: Error) => void;
        complete?: () => void;
    }): () => void;
    onSnapshot(onNext: (snapshot: IVCQuerySnapshot<K, T, PK, PT>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
    onSnapshot(options: firestore.SnapshotListenOptions, onNext: (snapshot: IVCQuerySnapshot<K, T, PK, PT>) => void, onError?: (error: Error) => void, onCompletion?: () => void): () => void;
}
