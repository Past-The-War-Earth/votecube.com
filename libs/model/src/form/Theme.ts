import {
	Theme_Id,
	Theme_Name
}                    from '@votecube/ecclesia'
import {IsDelta}     from '../core/common'
import {UiDocStatus} from '../ui/common'

export interface IThemeForm<Doc extends UiDocStatus> {
	id: Doc extends IsDelta ? boolean : Theme_Id
	text: Doc extends IsDelta ? boolean : Theme_Name
}
