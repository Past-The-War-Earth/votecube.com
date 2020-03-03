const AIR_ID_MAP = [
    ['actorRecordId', '/I'],
    ['repositoryActorId', '/A'],
    ['repositoryId', '/R'],
];
export class ObjectStore {
    constructor(store) {
        this.store = store;
    }
    async add(record, skipExistingServerRecord = true, skipExistingAirRecord = true) {
        return new Promise((resolve, reject) => {
            // Don't have to add the record, it's already present
            if (skipExistingServerRecord && record.id) {
                resolve();
            }
            if (!record.repositoryId) {
                record.repositoryId = 0;
            }
            if (!record.repositoryActorId) {
                record.repositoryActorId = 0;
            }
            const request = this.store.add(record);
            request.onsuccess = (event) => {
                record.actorRecordId = event.target.result;
                resolve();
            };
            request.onerror = () => {
                reject();
            };
        });
    }
}
//# sourceMappingURL=ObjectStore.js.map