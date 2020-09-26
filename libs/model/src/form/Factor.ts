import {
	FactorTranslation_Name,
	PositionTranslation_Name
}                    from '@votecube/ecclesia'
import {IUiColor}    from '..'
import {UiDocStatus} from '../ui/common'
import {
	ICoreColor,
	IsData,
	IsDelta,
}                    from '../core/core'

export interface IFactorForm<Doc extends UiDocStatus> {
	color: IUiColor<Doc>
	name: Doc extends IsDelta ? boolean : FactorTranslation_Name
	positions: IFactorPositionsForm<Doc>
}

export interface IFactorPositionsForm<Doc extends UiDocStatus> {

	A: Doc extends IsDelta ? boolean : PositionTranslation_Name
	B: Doc extends IsDelta ? boolean : PositionTranslation_Name

}
