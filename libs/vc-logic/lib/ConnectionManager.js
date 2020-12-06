import { DI } from '@airport/di';
import { CONNECTION_MANAGER, ENTITY_STATE_MANAGER, OPERATION_SERIALIZER } from './tokens';
export class ConnectionManager {
    constructor() {
        this.serverUrlPrefix = 'http://localhost:8081/api/';
    }
    async get(url, params = {}) {
        const response = await fetch(this.serverUrlPrefix + url +
            this.getParamsSuffix(params));
        return response.json();
    }
    async put(url, value, params = {}) {
        const [entityStateManager, operationSerializer] = await DI.db().get(ENTITY_STATE_MANAGER, OPERATION_SERIALIZER);
        const serializedValue = operationSerializer.serialize(value, entityStateManager);
        const response = await fetch(this.serverUrlPrefix + url +
            this.getParamsSuffix(params), {
            method: 'PUT',
            body: JSON.stringify(serializedValue)
        });
        // TODO: implement error handling
        return response.json();
    }
    getParamsSuffix(params) {
        let paramStrings = [];
        for (let paramName in params) {
            paramStrings.push(paramName + '=' + params[paramName]);
        }
        let paramsSuffix = '';
        if (paramStrings.length) {
            paramsSuffix = '?' + paramStrings.join('&');
        }
        return paramsSuffix;
    }
}
DI.set(CONNECTION_MANAGER, ConnectionManager);
//# sourceMappingURL=ConnectionManager.js.map