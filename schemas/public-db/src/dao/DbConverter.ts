import {DI}             from '@airport/di'
import {IDocumentValue} from '@votecube/model'
import {DB_CONVERTER}   from '../diTokens'

export const CORE_PROPERTY_NAMES = [
	'createdAt',
	'key',
	'marks',
	'userKey',
]

export const VERSIONED_PROPERTY_NAMES = [
	...CORE_PROPERTY_NAMES,
	'depth',
	'parent',
	'path',
]

export const CREATE_DEFAULTS = [

]

export interface IDbConverter {

	fromDb<Db, Ui>(
		dbObject: Db,
		directProperties: any[]
	): Ui

	toDb<Ui, Delta, Db>(
		uiObject: Ui,
		deltas: Delta,
		originalDbObject: Db,
		create: boolean,
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
		create: boolean,
		directProperties: any[]
	): Db {
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
