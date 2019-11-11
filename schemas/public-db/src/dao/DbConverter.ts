import {DI}           from '@airport/di'
import {
	IDocumentValue,
	IVersioned,
	Key
}                     from '@votecube/model'
import {DB_CONVERTER} from '../diTokens'

export interface IDbConverter {

	fromDb<Db, Ui>(
		dbObject: Db,
		directProperties: any[]
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
		directProperties: any[]
	): Db {
		const create = !!originalDbObject;
		const dbObject: any = {}

		for (const propertyName in uiObject) {
			if (directProperties.indexOf(propertyName) > -1) {
				dbObject[propertyName] = uiObject[propertyName]
			} else {
				dbObject[propertyName] = this.toDbInternal(
					uiObject[propertyName],
					(deltas as any)[propertyName],
					create ? null : (originalDbObject as any)[propertyName],
					create)
			}
		}

		return dbObject
	}

	toVersionedDb<K extends Key, Ui extends IVersioned<K>, Delta, Db extends IVersioned<K>>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		directProperties: any[]
	): Db {
		const dbObject = this.toDb(uiObject, deltas, originalDbObject, directProperties)

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

		return dbObject
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
		create: boolean
	): Db {
		const dbObject: any = {}

		if ((originalDbObject as any).d) {
			this.toDbObject(uiObject, deltas, originalDbObject as any, dbObject, create)
		} else {
			for (const propertyName in uiObject) {
				dbObject[propertyName] = this.toDbInternal(
					uiObject[propertyName],
					(deltas as any)[propertyName],
					create ? null : (originalDbObject as any)[propertyName],
					create)
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
