import {AgeSuitability} from '@votecube/ecclesia'
import {
	DocStatus,
	IsDelta,
	IsDoc
}                       from './common'

export type DocumentValue_Delta = number

export interface IDocumentValue<T> {
	v: T, // The value
	d: DocumentValue_Delta // delta count
}


export interface ICoreAgeSuitabilityTracked<Doc extends DocStatus> {

	ageSuitability: Doc extends IsDoc ? IDocumentValue<AgeSuitability>
		: Doc extends IsDelta ? boolean : AgeSuitability

}
