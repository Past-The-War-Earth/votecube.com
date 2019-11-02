export type Key = string

export interface IDoc<K extends Key> {

	key: K

}

export interface IParent<K extends Key> {

	depth: number
	key: K

}

export interface ITimestamp {

	m: number // milliseconds
	o: number // timezone offset
	s: any // server timestamp
	z: string // the timezone as extracted from JS Date.toString()

}

export interface IMarks {
	change: {
		high: number
		low: number
	},
	same: {
		high: number
		low: number
	}
}

export interface IMarked {
	marks: IMarks
}

export interface IFullTextSearchDoc {
	fts: { [key: string]: true }
}
