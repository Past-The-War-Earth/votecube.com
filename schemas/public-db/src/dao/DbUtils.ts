/*
export async function init() {
	await DI.get(AIR_DB)
	const dbManager = await DI.get(DATABASE_MANAGER)
	await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}
*/

import {DI}      from '@airport/di'
import {IMarked} from '@votecube/model'
import {
	DB_CONVERTER,
	DB_UTILS
}                from '../diTokens'

export interface IDbUtils {

	addedProps: string[]
	subPollProps: string[]
	versionedProps: string[]

	calculateWaterMarks(
		dbObject: IMarked
	): void

	copy(
		object,
		skipKeys?: string[]
	): any

}

export class DbUtils
	implements IDbUtils {

	get addedProps(): string[] {
		return [
			'createdAt',
			'key',
			'marks',
			'userKey'
		]
	}

	get subPollProps(): string[] {
		return [
			...this.addedProps,
			...this.versionedProps,
			'pollKey'
		]
	}

	get versionedProps(): string[] {
		return [
			'depth',
			'parent',
			'parentKey',
			'path'
		]
	}

	calculateWaterMarks(
		dbObject: IMarked
	): void {
		const marks    = {
			change: {
				high: 0,
				low: 0
			},
			same: {
				high: 0,
				low: 0
			}
		}
		dbObject.marks = marks

		for (const key in dbObject) {
			if (this.subPollProps.indexOf(key) > -1) {
				continue
			}
			const childObject = dbObject[key]
			if (this.isDataObject(childObject)) {
				if (childObject.d === 0) {
					// Nothing to do, this is a brand new object
				} else if (childObject.d > 0) {
					marks.same.high = this.setHighSame(marks.same.high, childObject.d)
					marks.same.low  = this.setLowSame(marks.same.low, childObject.d)
				} else {
					marks.change.high = this.setHighChange(marks.change.high, childObject.d)
					marks.change.low  = this.setLowChange(marks.change.low, childObject.d)
				}
			} else {
				this.calculateWaterMarks(childObject)
				marks.same.high   = this.setHighSame(marks.same.high, childObject.marks.same.high)
				marks.same.low    = this.setLowSame(marks.same.low, childObject.marks.same.low)
				marks.change.high = this.setHighChange(marks.change.high, childObject.marks.change.high)
				marks.change.low  = this.setLowChange(marks.change.low, childObject.marks.change.low)
			}
		}
	}

	copy(
		object,
		skipKeys: string[] = ['marks']
	): any {
		let theCopy
		if (object instanceof Object) {
			if (object instanceof Array) {
				theCopy = object.map(
					arrayEntry => this.copy(arrayEntry, skipKeys))
			} else {
				theCopy = {}
				for (const propertyName in object) {
					if (skipKeys.indexOf(propertyName) > -1) {
						continue
					}
					theCopy[propertyName] = this.copy(object[propertyName], skipKeys)
				}
			}
		} else {
			theCopy = object
		}

		return theCopy
	}

	private setHighChange(
		aggregate: number,
		data: number
	): number {
		return data < aggregate ? data : aggregate
	}

	private setLowChange(
		aggregate: number,
		data: number
	): number {
		if (data < 0) {
			return data > aggregate ? data : aggregate
		}
		return aggregate
	}

	private setHighSame(
		aggregate: number,
		data: number
	): number {
		return data > aggregate ? data : aggregate
	}

	private setLowSame(
		aggregate: number,
		data: number
	): number {
		if (data > 0) {
			return data < aggregate ? data : aggregate
		}
		return aggregate
	}

	private isDataObject(
		object
	): boolean {
		return object.hasOwnProperty('v')
	}

}
DI.set(DB_UTILS, DbUtils)

