import {Id} from '@votecube/ecclesia'

export type IsData = 'data'
export type IsDelta = 'delta'
export type IsDoc = 'doc'

export type Key = string

export type DocStatus = IsData | IsDelta | IsDoc

export type IsFromForm = true
export type IsNotFromForm = false
export type FromForm = IsFromForm | IsNotFromForm

export interface IIdentified<K extends Id> {

	id: K

}

export type Doc_Depth = number

/*
export interface IParent<K extends Id> {

	depth: Doc_Depth
	key: K

}
 */

export type Timestamp_Milliseconds = number
export type Timestamp_TimezoneOffset = number
export type Timestamp_Server = any
export type Timestamp_Timezone = string

export interface ITimestamp {

	m: Timestamp_Milliseconds // milliseconds
	o: Timestamp_TimezoneOffset // timezone offset
	s: Timestamp_Server // server timestamp
	z: Timestamp_Timezone // the timezone as extracted from JS Date.toString()

}

export type Marks_High = number
export type Marks_Low = number

export interface IMarks {
	change: {
		high: Marks_High
		low: Marks_Low
	},
	same: {
		high: Marks_High
		low: Marks_Low
	}
}

export interface IMarked {
	marks: IMarks
}

export type FullTextSearch_Flag = true

export interface IFullTextSearch {
	fts: { [key: string]: FullTextSearch_Flag }
}

