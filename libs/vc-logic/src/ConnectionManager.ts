import {DI} from '@airport/di'
import {
	CONNECTION_MANAGER,
	ENTITY_STATE_MANAGER,
	OPERATION_SERIALIZER,
	QUERY_RESULTS_DESERIALIZER
}           from './tokens'

export interface IConnectionManager {

	get<T>(
		url: string,
		params?: any
	): Promise<T>

	put<V, R>(
		url: string,
		value: V,
		params?: any
	): Promise<R>

}

export class ConnectionManager
	implements IConnectionManager {

	serverUrlPrefix = 'http://localhost:8081/api/'

	async get<T>(
		url: string,
		params: any = {}
	): Promise<T> {
		const [entityStateManager, queryResultsDeserializer]
			             = await DI.db().get(ENTITY_STATE_MANAGER, QUERY_RESULTS_DESERIALIZER)
		const response = await fetch(this.serverUrlPrefix + url +
			this.getParamsSuffix(params))

		const jsonTree = response.json()

		return queryResultsDeserializer.deserialize(jsonTree, entityStateManager)
	}

	async put<V, R>(
		url: string,
		value: V,
		params: any = {}
	): Promise<R> {
		const [entityStateManager, operationSerializer]
			                    = await DI.db().get(ENTITY_STATE_MANAGER, OPERATION_SERIALIZER)
		const serializedValue = operationSerializer.serialize(value, entityStateManager)
		const response        = await fetch(this.serverUrlPrefix + url +
			this.getParamsSuffix(params), {
			method: 'PUT',
			body: JSON.stringify(serializedValue)
		})

		// TODO: implement error handling
		return response.json()
	}

	private getParamsSuffix(
		params: any
	): string {
		let paramStrings = []
		for (let paramName in params) {
			paramStrings.push(paramName + '=' + params[paramName])
		}
		let paramsSuffix = ''
		if (paramStrings.length) {
			paramsSuffix = '?' + paramStrings.join('&')
		}

		return paramsSuffix
	}

}

DI.set(CONNECTION_MANAGER, ConnectionManager)
