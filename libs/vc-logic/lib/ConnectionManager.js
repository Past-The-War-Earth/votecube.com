import { DI } from '@airport/di';
import { CONNECTION_MANAGER } from './tokens';
export class ConnectionManager {
    constructor() {
        this.serverUrlPrefix = 'http://localhost:8081/api/';
    }
    async get(url, params = {}) {
        const response = await fetch(this.serverUrlPrefix + url + this.getParamsSuffix(params));
        return response.json();
    }
    async put(url, value, params = {}) {
        const response = await fetch(this.serverUrlPrefix + url + this.getParamsSuffix(params), {
            method: 'PUT',
            body: JSON.stringify(value)
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