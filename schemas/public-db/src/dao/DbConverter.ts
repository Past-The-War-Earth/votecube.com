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
		directProperties: any[],
		excludedProperties: any[]
	): Ui

	toDb<Ui, Delta, Db>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		directProperties: any[]
	): Db

	toVersionedDb<K extends Key, Ui extends IVersioned<K>, Delta, Db extends IVersioned<K>>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		directProperties: any[]
	): Db

}

export class DbConverter
	implements IDbConverter {

	fromDb<Db, Ui>(
		dbObject: Db,
		directProperties: any[],
		excludedProperties: any[]
	): Ui {
		const uiObject: any = {}

		if ((dbObject as any).v || (dbObject as any).v === 0) {
			return (dbObject as any).v
		} else {
			for (const propertyName in dbObject) {
				if (excludedProperties.indexOf(propertyName) > -1) {
					continue
				} else if (directProperties.indexOf(propertyName) > -1) {
					uiObject[propertyName] = dbObject[propertyName]
				} else {
					uiObject[propertyName] = this.fromDb(
						dbObject[propertyName],
						directProperties,
						excludedProperties
					)
				}
			}
		}

		return uiObject
	}

	toDb<Ui, Delta, Db>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		directProperties: any[],
		create = !originalDbObject
	): Db {
		const dbObject: any = {}

		if (uiObject instanceof Object) {
			for (const propertyName in uiObject) {
				const value = uiObject[propertyName]
				if (directProperties.indexOf(propertyName) > -1) {
					dbObject[propertyName] = value
				} else {
					dbObject[propertyName] = this.toDb(
						value,
						(deltas as any)[propertyName],
						create ? null : (originalDbObject as any)[propertyName],
						directProperties, create)
				}
			}
		} else {
			this.toDbObject(uiObject, deltas, originalDbObject as any, dbObject, create)
		}

		return dbObject
	}

	toVersionedDb<K extends Key, Ui extends IVersioned<K>, Delta, Db extends IVersioned<K>>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		directProperties: any[]
	): Db {
		const dbObject = this.toDb(uiObject, deltas, originalDbObject,
			directProperties)

		if (originalDbObject) {
			dbObject.depth                        = originalDbObject.depth + 1
			dbObject.path                         = {
				...originalDbObject.path,
				length: originalDbObject.path.length + 1
			}
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
			dbObject.path   = {
				length: 0
			}
			dbObject.depth  = 1
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
