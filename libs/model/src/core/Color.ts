import {
	DocStatus,
	IsDelta,
	IsDoc
}                       from './common'
import {IDocumentValue} from './DocumentValue'

export type Color = number

export interface ICoreColor<Doc extends DocStatus> {

	blue: Doc extends IsDoc ? IDocumentValue<Color>
		: Doc extends IsDelta ? boolean : Color
	green: Doc extends IsDoc ? IDocumentValue<Color>
		: Doc extends IsDelta ? boolean : Color
	red: Doc extends IsDoc ? IDocumentValue<Color>
		: Doc extends IsDelta ? boolean : Color

}
