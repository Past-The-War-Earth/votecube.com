export type Key = string

export type AgeSuitability = number


export type IsData = 'data'
export type IsDelta = 'delta'
export type IsDoc = 'doc'

export type DocStatus = IsData | IsDelta | IsDoc

export interface IKeyed<K extends Key> {

	key: K

}

export type DocDepth = number

/*
export interface IParent<K extends Key> {

	depth: DocDepth
	key: K

}
 */

export type TimestampMilliseconds = number
export type TimestampTimezoneOffset = number
export type TimestampServer = any
export type TimestampTimezone = string

export interface ITimestamp {

	m: TimestampMilliseconds // milliseconds
	o: TimestampTimezoneOffset // timezone offset
	s: TimestampServer // server timestamp
	z: TimestampTimezone // the timezone as extracted from JS Date.toString()

}

export type MarksHigh = number
export type MarksLow = number

export interface IMarks {
	change: {
		high: MarksHigh
		low: MarksLow
	},
	same: {
		high: MarksHigh
		low: MarksLow
	}
}

export interface IMarked {
	marks: IMarks
}

export type FullTextSearchFlag = true

export interface IFullTextSearch {
	fts: { [key: string]: FullTextSearchFlag }
}

