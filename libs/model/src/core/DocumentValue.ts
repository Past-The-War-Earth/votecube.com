import {
	AgeSuitability,
	DocStatus,
	IsDelta,
	IsDoc
} from './common'

export type DocumentValueDelta = number

export interface IDocumentValue<T> {
	v: T, // The value
	d: DocumentValueDelta // delta count
}


export interface ICoreAgeSuitabilityTracked<Doc extends DocStatus> {

	ageSuitability: Doc extends IsDoc ? IDocumentValue<AgeSuitability>
		: Doc extends IsDelta ? boolean : AgeSuitability

}
