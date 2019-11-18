import {DI}           from '@airport/di'
import {
	IDocumentValue,
	IVersioned,
	Key
}                     from '@votecube/model'
import {DB_CONVERTER} from '../tokens'

export interface IDbConverter {

	fromDb<Db, Ui>(
		dbObject: Db,
		directProperties: any[]
	): Ui

	toDb<Ui, Delta, Db>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		directProperties: any[],
		excludeFtsProperties: string[]
	): {
		dbObject: Db
		ftsProps: string[]
	}

	toVersionedDb<K extends Key, Ui extends IVersioned<K>, Delta, Db extends IVersioned<K>>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		directProperties: any[],
		excludeFtsProperties: string[]
	): {
		dbObject: Db
		ftsProps: string[]
	}

}

export class DbConverter
	implements IDbConverter {

	fromDb<Db, Ui>(
		dbObject: Db,
		directProperties: any[]
	): Ui {
		const uiObject: any = {}

		for (const propertyName in dbObject) {
			if (directProperties.indexOf(propertyName) > -1) {
				uiObject[propertyName] = dbObject[propertyName]
			} else {
				uiObject[propertyName] = this.fromDbInternal(
					dbObject[propertyName]
				)
			}
		}

		return uiObject
	}

	toDb<Ui, Delta, Db>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		directProperties: any[],
		excludeFtsProperties: string[]
	): {
		dbObject: Db
		ftsProps: string[]
	} {
		const create        = !originalDbObject
		const dbObject: any = {}
		const ftsProps      = []

		for (const propertyName in uiObject) {
			const value = uiObject[propertyName]
			if (directProperties.indexOf(propertyName) > -1) {
				dbObject[propertyName] = value
				if (typeof value === 'string') {
					ftsProps.push(value)
				}
			} else {
				dbObject[propertyName] = this.toDbInternal(
					value,
					(deltas as any)[propertyName],
					create ? null : (originalDbObject as any)[propertyName],
					create, ftsProps, excludeFtsProperties)
			}
		}

		return {
			dbObject,
			ftsProps
		}
	}

	toVersionedDb<K extends Key, Ui extends IVersioned<K>, Delta, Db extends IVersioned<K>>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		directProperties: any[],
		excludeFtsProperties: string[]
	): {
		dbObject: Db,
		ftsProps: string[]
	} {
		const {
			      dbObject,
			      ftsProps
		      } = this.toDb(uiObject, deltas, originalDbObject,
			directProperties, excludeFtsProperties)

		if (originalDbObject) {
			dbObject.depth                        = originalDbObject.depth + 1
			dbObject.path                         = [
				...originalDbObject.path
			]
			dbObject.path[originalDbObject.depth] = {
				createdAt: originalDbObject.createdAt,
				key: originalDbObject.key,
				userKey: originalDbObject.userKey
			}
			dbObject.parent                       = {
				createdAt: originalDbObject.createdAt,
				depth: originalDbObject.depth,
				key: originalDbObject.key,
				userKey: originalDbObject.userKey
			}
		} else {
			dbObject.parent = null
			dbObject.path   = []
			dbObject.depth  = 1
		}

		return {
			dbObject,
			ftsProps
		}
	}

	private fromDbInternal<Db, Ui>(
		dbObject: Db
	): Ui {
		const uiObject: any = {}

		if ((dbObject as any).d) {
			return (dbObject as any).d
		} else {
			for (const propertyName in dbObject) {
				uiObject[propertyName] = this.fromDbInternal(
					dbObject[propertyName]
				)
			}
		}

		return uiObject
	}

	private toDbInternal<Ui, Delta, Db>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		create: boolean,
		ftsProps: string[],
		excludeFtsProps: string[]
	): Db {
		const dbObject: any = {}

		if (uiObject instanceof Object) {
			for (const propertyName in uiObject) {
				dbObject[propertyName] = this.toDbInternal(
					uiObject[propertyName],
					(deltas as any)[propertyName],
					create ? null : (originalDbObject as any)[propertyName],
					create, ftsProps, excludeFtsProps)
			}
		} else {
			this.toDbObject(uiObject, deltas, originalDbObject as any, dbObject, create)
			if (typeof uiObject === 'string'
				&& excludeFtsProps.indexOf(uiObject) === -1) {
				ftsProps.push(uiObject)
			}
		}

		return dbObject
	}

	private toDbObject<Ui, Delta, Db>(
		uiValue: Ui,
		uiDelta: Delta,
		originalDbObject: IDocumentValue<any>,
		dbObject: IDocumentValue<any>,
		create: boolean
	): void {
		let d
		if (create) {
			d = 0
		} else if (uiDelta) {
			if (originalDbObject.d < 0) {
				d = -1
			} else {
				d = -(originalDbObject.d + 1)
			}
		} else {
			d = originalDbObject.d + 1
		}

		dbObject.v = uiValue
		dbObject.d = d
	}

}

DI.set(DB_CONVERTER, DbConverter)
